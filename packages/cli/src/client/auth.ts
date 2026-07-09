import {
  passwordLoginResponseSchema,
  refreshTokenResponseSchema,
  switchTenantResponseSchema,
} from '@xuanyuku/shared';
import { request, type RequestOptions } from './http';
import { Profile, loadProfile, saveProfile } from './profile-store';

export async function passwordLogin(
  apiBase: string,
  login: string,
  password: string,
  opts?: { asAdminSurface?: boolean }
): Promise<{ accessToken: string; refreshToken?: string; user: Record<string, unknown> }> {
  // Send raw payload; let backend do schema parsing
  // Do NOT parse on client as it adds null fields that backend rejects
  const body = { login, password };

  const requestOpts: RequestOptions = {
    method: 'POST',
    path: '/auth/password-login',
    json: body,
    ...(opts?.asAdminSurface && { headers: { 'x-eggturtle-auth-surface': 'admin' } }),
  };

  const response = await request(apiBase, requestOpts);
  return passwordLoginResponseSchema.parse(response.body);
}

/**
 * 用 refresh token 换取新的 access token。
 * 后端会轮换 refresh token（旧的立即失效），返回的新 accessToken + refreshToken 必须一并持久化。
 */
export async function refreshAccessToken(
  apiBase: string,
  refreshToken: string
): Promise<{ accessToken: string; refreshToken: string }> {
  const response = await request(apiBase, {
    method: 'POST',
    path: '/auth/refresh',
    json: { refreshToken },
  });
  return refreshTokenResponseSchema.parse(response.body);
}

/**
 * 撤销 refresh token（可选带 token）。用于 logout，让后端立即失效该会话。
 */
export async function logout(apiBase: string, refreshToken?: string): Promise<void> {
  await request(apiBase, {
    method: 'POST',
    path: '/auth/logout',
    json: refreshToken ? { refreshToken } : {},
  });
}

export async function switchTenant(
  apiBase: string,
  token: string,
  opts: { tenantId?: string; slug?: string }
): Promise<{ accessToken: string; tenant: Record<string, unknown>; role: string }> {
  if (!opts.tenantId && !opts.slug) {
    throw new Error('Either tenantId or slug is required');
  }

  // Send only the provided field; let backend do schema parsing
  const body = opts.tenantId ? { tenantId: opts.tenantId } : { slug: opts.slug };

  const response = await request(apiBase, {
    method: 'POST',
    path: '/auth/switch-tenant',
    token,
    json: body,
  });

  return switchTenantResponseSchema.parse(response.body);
}

export async function updateProfileFromAuth(
  profileName: string,
  login: string,
  accessToken: string,
  apiBase?: string,
  tenantInfo?: { tenantId?: string; tenantSlug?: string; role?: string; isSuperAdmin?: boolean },
  refreshToken?: string
): Promise<void> {
  const existingProfile = await loadProfile(profileName);

  const profile: Profile = {
    ...existingProfile,
    login,
    accessToken,
    tokenIssuedAt: new Date().toISOString(),
    ...(apiBase && { apiBaseUrl: apiBase }),
    ...(tenantInfo?.tenantId && { tenantId: tenantInfo.tenantId }),
    ...(tenantInfo?.tenantSlug && { tenantSlug: tenantInfo.tenantSlug }),
    ...(tenantInfo?.role && { role: tenantInfo.role }),
    ...(tenantInfo?.isSuperAdmin !== undefined && { isSuperAdmin: tenantInfo.isSuperAdmin }),
    // 仅在拿到新 refreshToken 时更新；否则保留既有值（switch-tenant 等场景不返回 refreshToken）
    ...(refreshToken && { refreshToken }),
  };

  await saveProfile(profileName, profile);
}
