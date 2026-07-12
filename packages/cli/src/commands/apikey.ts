import { Command } from 'commander';
import { meResponseSchema } from '@xuanyuku/shared';
import { resolveCommandContext } from './_context';
import { createApiKey, listApiKeys, revokeApiKey } from '../client/apikeys';
import { request } from '../client/http';
import { saveProfile, type Profile } from '../client/profile-store';
import { describeError } from '../client/errors';

export function registerApiKeyCommands(program: Command): void {
  const apikeyCmd = program
    .command('apikey')
    .description('Manage API keys (long-lived automation credentials)');

  // apikey create --name <name> [--expires-days N] [--tenant-id <id>] [--no-tenant] [--save-profile <name>]
  apikeyCmd
    .command('create')
    .description('Create an API key (plaintext key is printed only once)')
    .requiredOption('--name <name>', 'Human-readable key name')
    .option('--profile <name>', 'Profile used to authenticate the create request')
    .option('--api-base <url>', 'API base URL')
    .option('--expires-days <n>', 'Expire after N days (default: never)')
    .option('--tenant-id <id>', 'Bind the key to this tenant (default: inherit from current profile)')
    .option('--no-tenant', 'Create an unbound key without tenant context')
    .option('--save-profile <name>', 'Save the created key into this profile as a long-lived credential')
    .action(async (opts) => {
      try {
        const { ctx, apiBase } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        const expiresInSeconds = opts.expiresDays
          ? parseInt(opts.expiresDays, 10) * 24 * 60 * 60
          : undefined;
        if (opts.expiresDays && (!Number.isFinite(expiresInSeconds) || expiresInSeconds! <= 0)) {
          console.error('✗ --expires-days 必须是正整数');
          process.exit(1);
        }

        // 默认继承当前登录上下文的店铺绑定：不绑店铺的 key 调 /me 拿不到租户，
        // 分享/二维码等租户命令会不可用（T500）。显式 --no-tenant 才生成裸 key。
        let tenantId: string | undefined;
        if (opts.tenant !== false) {
          if (opts.tenantId) {
            tenantId = opts.tenantId;
          } else {
            try {
              tenantId = await ctx.resolveTenantId();
            } catch {
              console.warn('⚠ 当前登录未绑定店铺，将创建不带店铺上下文的 key（可用 --tenant-id 显式指定）。');
            }
          }
        }

        console.log('正在创建 API Key...');
        const result = await createApiKey(ctx, {
          name: opts.name,
          ...(tenantId && { tenantId }),
          ...(expiresInSeconds && { expiresInSeconds }),
        });

        console.log('✓ API Key 创建成功');
        console.log(`  id: ${result.id}`);
        console.log(`  name: ${result.name}`);
        console.log(`  前缀: ${result.keyPrefix}`);
        console.log(`  店铺: ${tenantId ?? '(未绑定)'}`);
        console.log('');
        console.log(`  明文 Key（仅此一次显示，请立即保存）:`);
        console.log(`    ${result.apiKey}`);

        if (opts.saveProfile) {
          // 与 login --api-key 对齐：用新 key 调 /me 补全身份与店铺上下文，
          // 避免存出一个 whoami 无身份、租户命令不可用的残缺 profile。
          let login = '(api-key)';
          let isSuperAdmin: boolean | undefined;
          let profileTenantId = tenantId;
          try {
            const response = await request(apiBase, {
              method: 'GET',
              path: '/me',
              apiKey: result.apiKey,
            });
            const currentUser = meResponseSchema.parse(response.body);
            login = currentUser.user.account || currentUser.user.email || '(api-key)';
            isSuperAdmin = currentUser.user.isSuperAdmin;
            profileTenantId = currentUser.tenantId ?? tenantId;
          } catch {
            console.warn('⚠ 用新 key 同步身份失败，profile 仅保存凭证本身。');
          }

          const profile: Profile = {
            login,
            accessToken: '',
            apiKey: result.apiKey,
            apiKeyId: result.id,
            apiBaseUrl: apiBase,
            ...(profileTenantId && { tenantId: profileTenantId }),
            ...(isSuperAdmin !== undefined && { isSuperAdmin }),
            tokenIssuedAt: new Date().toISOString(),
          };
          await saveProfile(opts.saveProfile, profile);
          console.log('');
          console.log(`  已保存到 profile「${opts.saveProfile}」，可用 --profile ${opts.saveProfile} 调用。`);
        } else {
          console.log('');
          console.log(`  保存到 profile：xuanyuku login --api-key ${result.apiKey} --profile <name>`);
        }
      } catch (err) {
        console.error(`✗ 创建失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // apikey list
  apikeyCmd
    .command('list')
    .description('List API keys')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        const keys = await listApiKeys(ctx);

        if (opts.json) {
          console.log(JSON.stringify(keys, null, 2));
          return;
        }

        if (keys.length === 0) {
          console.log('(无 API Key)');
          return;
        }

        console.log(`共 ${keys.length} 个 API Key:`);
        for (const k of keys) {
          const lastUsed = k.lastUsedAt ? new Date(k.lastUsedAt).toLocaleString() : '从未使用';
          const expires = k.expiresAt ? new Date(k.expiresAt).toLocaleString() : '永不过期';
          console.log(`  - ${k.id}  ${k.name}  前缀=${k.keyPrefix}  店铺=${k.tenantId ?? '-'}  最近使用=${lastUsed}  过期=${expires}`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // apikey revoke <id>
  apikeyCmd
    .command('revoke <id>')
    .description('Revoke an API key by id')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (id, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await revokeApiKey(ctx, id);
        console.log(`✓ 已撤销 API Key ${id}`);
      } catch (err) {
        console.error(`✗ 撤销失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
