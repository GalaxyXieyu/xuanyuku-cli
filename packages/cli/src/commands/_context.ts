import { createAuthContext } from '../client/context';
import { resolveApiBase, loadGlobalConfig } from '../client/config';

/**
 * Shared helper for resolving command context (profile + apiBase + auth)
 * Used by new command files to avoid code duplication
 */
export async function resolveCommandContext(opts: {
  profile?: string;
  apiBase?: string;
}): Promise<{
  ctx: Awaited<ReturnType<typeof createAuthContext>>;
  profileName: string;
  apiBase: string;
}> {
  let profileName = opts.profile;
  if (!profileName) {
    const config = await loadGlobalConfig();
    profileName = config.defaultProfile || 'default';
  }

  let apiBase = opts.apiBase;
  if (!apiBase) {
    apiBase = await resolveApiBase({
      apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL,
    });
  }

  const ctx = await createAuthContext(apiBase, profileName);
  return { ctx, profileName, apiBase };
}

/**
 * Ensure current context has superadmin privileges
 */
export async function ensureSuperAdmin(ctx: { isSuperAdmin(): boolean }): Promise<void> {
  if (!ctx.isSuperAdmin()) {
    throw new Error('本命令需要超管权限，请使用超管账号登录');
  }
}
