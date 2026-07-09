import { request, type RequestOptions } from './http';
import { passwordLogin, refreshAccessToken, updateProfileFromAuth } from './auth';
import { loadProfile, clearProfileToken, saveProfile, type Profile } from './profile-store';
import { ApiError, describeError } from './errors';
import { createInterface } from 'node:readline';

export class AuthedContext {
  constructor(
    public apiBase: string,
    public profileName: string,
    public profile: Profile
  ) {}

  async request(opts: RequestOptions): Promise<{ status: number; body: unknown }> {
    try {
      return await request(this.apiBase, this.applyCredential(opts));
    } catch (err) {
      if (err instanceof ApiError && err.httpStatus === 401) {
        return this.handleUnauthorized(opts);
      }
      throw err;
    }
  }

  /** 按优先级注入凭证：API Key 优先，其次 access token。 */
  private applyCredential(opts: RequestOptions): RequestOptions {
    if (this.profile.apiKey) {
      return { ...opts, apiKey: this.profile.apiKey };
    }
    return { ...opts, token: this.profile.accessToken };
  }

  /**
   * 401 处理，三级凭证模型：
   * ① API Key 模式：不自动重登，直接报错（key 无效/已撤销）。
   * ② 有 refresh token：走 /auth/refresh 轮换续期，成功后重试原请求。
   * ③ 兜底密码重登：仅 TTY、仅一次、带防锁定护栏。
   */
  private async handleUnauthorized(originalOpts: RequestOptions): Promise<{ status: number; body: unknown }> {
    // ① API Key 无效不进重登
    if (this.profile.apiKey) {
      throw new Error(
        'API Key 无效或已撤销。请用 `xuanyuku apikey create` 重新签发，再 `xuanyuku login --api-key <key>` 保存。'
      );
    }

    // ② refresh token 轮换续期
    if (this.profile.refreshToken) {
      const refreshed = await this.tryRefresh();
      if (refreshed) {
        return await request(this.apiBase, this.applyCredential(originalOpts));
      }
      // refresh 失败（已被撤销/过期）→ 落到密码兜底
    }

    // ③ 密码兜底（带护栏）
    return this.passwordReloginAndRetry(originalOpts);
  }

  /**
   * 用 refresh token 续期。关键坑：后端轮换后旧 token 立即失效，
   * 必须在重试原请求**之前**把新的 accessToken + refreshToken 落盘，
   * 否则写盘失败/进程中断会导致本地 refresh token 失效，只能退回密码登录。
   */
  private async tryRefresh(): Promise<boolean> {
    try {
      const result = await refreshAccessToken(this.apiBase, this.profile.refreshToken!);
      this.profile = {
        ...this.profile,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
        tokenIssuedAt: new Date().toISOString(),
      };
      await saveProfile(this.profileName, this.profile);
      return true;
    } catch {
      // refresh token 已失效：清掉坏值，避免下次继续用它撞错
      this.profile = { ...this.profile, refreshToken: undefined };
      await saveProfile(this.profileName, this.profile);
      return false;
    }
  }

  /**
   * 密码兜底重登，防锁定护栏（C3）：
   * - 非 TTY / CI：直接报错，引导改用 API Key（绝不在自动化里撞密码）。
   * - XUANYUKU_CLI_PASSWORD：打弃用警告，引导迁移 API Key。
   * - 只尝试一次，失败即停并提示锁定风险（连续 5 次错误锁号 15 分钟）。
   */
  private async passwordReloginAndRetry(originalOpts: RequestOptions): Promise<{ status: number; body: unknown }> {
    if (!process.stdin.isTTY) {
      throw new Error(
        '登录已过期且无可用 refresh token。CI/非交互环境请改用 API Key：`xuanyuku login --api-key <key>`（避免自动重登撞错密码触发账户锁定）。'
      );
    }

    let password = process.env.XUANYUKU_CLI_PASSWORD;
    if (password) {
      console.warn(
        '⚠ 检测到 XUANYUKU_CLI_PASSWORD 自动重登，该方式已弃用且错密码会触发账户锁定，建议迁移到 API Key（`xuanyuku apikey create`）。'
      );
    } else {
      password = await this.promptPassword();
    }

    if (!password) {
      throw new Error('登录已过期，请重新 `xuanyuku login`');
    }

    await clearProfileToken(this.profileName);

    try {
      const isSuperAdmin = this.profile.isSuperAdmin ?? false;
      const result = await passwordLogin(this.apiBase, this.profile.login, password, {
        asAdminSurface: isSuperAdmin,
      });

      await updateProfileFromAuth(
        this.profileName,
        this.profile.login,
        result.accessToken,
        this.apiBase,
        {
          tenantId: this.profile.tenantId,
          tenantSlug: this.profile.tenantSlug,
          role: this.profile.role,
          isSuperAdmin: this.profile.isSuperAdmin,
        },
        result.refreshToken
      );

      const updatedProfile = await loadProfile(this.profileName);
      if (updatedProfile) {
        this.profile = updatedProfile;
      }

      return await request(this.apiBase, this.applyCredential(originalOpts));
    } catch (err) {
      // 只尝试一次，失败即停，不循环
      const detail = err instanceof ApiError ? describeError(err) : err instanceof Error ? err.message : String(err);
      throw new Error(
        `登录失败: ${detail}（连续 5 次错误将锁定账户 15 分钟，请勿重复尝试；自动化场景建议改用 API Key）`
      );
    }
  }

  private promptPassword(): Promise<string> {
    return new Promise((resolve) => {
      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question('请输入密码: ', (password) => {
        rl.close();
        resolve(password);
      });
    });
  }

  getTenantId(): string {
    return this.profile.tenantId || '';
  }

  isSuperAdmin(): boolean {
    return this.profile.isSuperAdmin ?? false;
  }
}

export async function createAuthContext(apiBase: string, profileName: string): Promise<AuthedContext> {
  const profile = await loadProfile(profileName);
  if (!profile) {
    throw new Error(`Profile ${profileName} not found. Please run 'xuanyuku login' first.`);
  }

  return new AuthedContext(apiBase, profileName, profile);
}
