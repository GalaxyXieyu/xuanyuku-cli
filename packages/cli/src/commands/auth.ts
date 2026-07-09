import { Command } from 'commander';
import { createInterface } from 'node:readline';
import { passwordLogin, switchTenant, updateProfileFromAuth, logout } from '../client/auth';
import {
  loadProfile,
  listProfiles,
  removeProfile,
  saveProfile,
  clearProfileToken,
  type Profile,
} from '../client/profile-store';
import { resolveApiBase, loadGlobalConfig, saveGlobalConfig } from '../client/config';
import { describeError } from '../client/errors';

export function registerAuthCommands(program: Command): void {
  // login command
  program
    .command('login')
    .description('Login with account credentials or an API key')
    .option('--profile <name>', 'Profile name', 'default')
    .option('--login <account>', 'Login account')
    .option('--admin', 'Login as admin (superadmin)')
    .option('--api-base <url>', 'API base URL')
    .option('--api-key <key>', 'Save an API key as long-lived credential (recommended for automation)')
    .action(async (opts) => {
      try {
        const apiBase = await resolveApiBase({
          apiBaseFlagValue: opts.apiBase,
          apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL,
        });

        // API Key 模式：仅保存 key，不换 token、不做锁定/轮换负担
        if (opts.apiKey) {
          const profile: Profile = {
            login: '(api-key)',
            accessToken: '',
            apiKey: opts.apiKey,
            apiBaseUrl: apiBase,
            tokenIssuedAt: new Date().toISOString(),
          };
          await saveProfile(opts.profile, profile);
          console.log(`✓ API Key 已保存到 profile「${opts.profile}」`);
          console.log('  后续请求将走 x-api-key，401 时不会自动重登。');
          return;
        }

        let login = opts.login;
        if (!login) {
          login = await promptInput('请输入账号: ');
        }

        const password = process.env.XUANYUKU_CLI_PASSWORD || (await promptPassword('请输入密码: '));

        console.log('正在登录...');
        const result = await passwordLogin(apiBase, login, password, { asAdminSurface: opts.admin });

        // Get user info
        const user = (result.user as Record<string, unknown>) || {};
        const isSuperAdmin = user.isSuperAdmin === true;

        // Save profile（连同 refreshToken 一并持久化，供 401 时轮换续期）
        await updateProfileFromAuth(
          opts.profile,
          login,
          result.accessToken,
          apiBase,
          { isSuperAdmin },
          result.refreshToken
        );

        console.log(`✓ 登录成功`);
        console.log(`  用户: ${user.email || user.account || user.name || '(未知)'}`);
        if (isSuperAdmin) {
          console.log(`  身份: 超管`);
        }
        if (!result.refreshToken) {
          console.log('  提示：后端未返回 refresh token，401 时将退回密码重登。');
        }
      } catch (err) {
        console.error(`✗ 登录失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // logout command：撤销 refresh token 并清除本地凭证
  program
    .command('logout')
    .description('Revoke the session refresh token and clear local credentials')
    .option('--profile <name>', 'Profile name', 'default')
    .action(async (opts) => {
      try {
        const profile = await loadProfile(opts.profile);
        if (!profile) {
          console.error(`✗ Profile ${opts.profile} not found`);
          process.exit(1);
        }

        const apiBase =
          profile.apiBaseUrl || (await resolveApiBase({ apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL }));

        if (profile.refreshToken) {
          try {
            await logout(apiBase, profile.refreshToken);
          } catch (err) {
            // 撤销失败不阻塞本地清理，但要如实告知
            console.warn(`⚠ 后端撤销 refresh token 失败（将继续清除本地凭证）：${describeError(err)}`);
          }
        }

        // 清除本地 token / refreshToken（保留 profile 骨架，便于重新 login）
        await clearProfileToken(opts.profile);
        const cleared = await loadProfile(opts.profile);
        if (cleared) {
          cleared.refreshToken = undefined;
          cleared.apiKey = undefined;
          cleared.apiKeyId = undefined;
          await saveProfile(opts.profile, cleared);
        }

        console.log(`✓ 已登出 profile「${opts.profile}」`);
      } catch (err) {
        console.error(`✗ 登出失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // whoami command
  program
    .command('whoami')
    .description('Show current profile info')
    .option('--profile <name>', 'Profile name', 'default')
    .action(async (opts) => {
      try {
        const profile = await loadProfile(opts.profile);
        if (!profile) {
          console.error(`✗ Profile ${opts.profile} not found`);
          process.exit(1);
        }

        console.log(`Profile: ${opts.profile}`);
        console.log(`  账号: ${profile.login}`);
        if (profile.tenantId) {
          console.log(`  租户 ID: ${profile.tenantId}`);
        }
        if (profile.tenantSlug) {
          console.log(`  租户 Slug: ${profile.tenantSlug}`);
        }
        if (profile.role) {
          console.log(`  角色: ${profile.role}`);
        }
        if (profile.isSuperAdmin) {
          console.log(`  身份: 超管`);
        }
        if (profile.apiBaseUrl) {
          console.log(`  API 地址: ${profile.apiBaseUrl}`);
        }
      } catch (err) {
        console.error(`✗ Error: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // switch-tenant command
  program
    .command('switch-tenant')
    .description('Switch to another tenant')
    .option('--tenant-id <id>', 'Tenant ID')
    .option('--tenant-slug <slug>', 'Tenant slug')
    .option('--profile <name>', 'Profile name', 'default')
    .action(async (opts) => {
      try {
        if (!opts.tenantId && !opts.tenantSlug) {
          console.error('✗ 需要提供 --tenant-id 或 --tenant-slug');
          process.exit(1);
        }

        const profile = await loadProfile(opts.profile);
        if (!profile) {
          console.error(`✗ Profile ${opts.profile} not found`);
          process.exit(1);
        }

        const apiBase = profile.apiBaseUrl || (await resolveApiBase({ apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL }));

        console.log('正在切换租户...');
        const result = await switchTenant(apiBase, profile.accessToken, {
          tenantId: opts.tenantId,
          slug: opts.tenantSlug,
        });

        // Update profile with new tenant info
        const tenant = (result.tenant as Record<string, unknown>) || {};
        await updateProfileFromAuth(opts.profile, profile.login, result.accessToken, apiBase, {
          tenantId: tenant.id as string,
          tenantSlug: tenant.slug as string,
          role: result.role,
          isSuperAdmin: profile.isSuperAdmin,
        });

        console.log(`✓ 切换成功`);
        console.log(`  租户: ${tenant.name || tenant.slug}`);
        console.log(`  角色: ${result.role}`);
      } catch (err) {
        console.error(`✗ 切换失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // profile command (subcommand)
  const profileCmd = program
    .command('profile')
    .description('Manage profiles');

  profileCmd
    .command('list')
    .description('List all profiles')
    .action(async () => {
      try {
        const profiles = await listProfiles();
        const config = await loadGlobalConfig();

        console.log('Available profiles:');
        if (profiles.length === 0) {
          console.log('  (none)');
        } else {
          for (const name of profiles) {
            const marker = name === config.defaultProfile ? ' (default)' : '';
            console.log(`  - ${name}${marker}`);
          }
        }
      } catch (err) {
        console.error(`✗ Error: ${describeError(err)}`);
        process.exit(1);
      }
    });

  profileCmd
    .command('use <name>')
    .description('Set default profile')
    .action(async (name) => {
      try {
        const profile = await loadProfile(name);
        if (!profile) {
          console.error(`✗ Profile ${name} not found`);
          process.exit(1);
        }

        const config = await loadGlobalConfig();
        config.defaultProfile = name;
        await saveGlobalConfig(config);

        console.log(`✓ Default profile set to: ${name}`);
      } catch (err) {
        console.error(`✗ Error: ${describeError(err)}`);
        process.exit(1);
      }
    });

  profileCmd
    .command('remove <name>')
    .description('Remove a profile')
    .action(async (name) => {
      try {
        await removeProfile(name);
        console.log(`✓ Profile ${name} removed`);
      } catch (err) {
        console.error(`✗ Error: ${describeError(err)}`);
        process.exit(1);
      }
    });
}

function promptInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

function promptPassword(question: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Hide password input
    process.stdin.setRawMode?.(true);
    rl.question(question, (answer) => {
      rl.close();
      process.stdin.setRawMode?.(false);
      console.log(); // Newline after password input
      resolve(answer);
    });
  });
}
