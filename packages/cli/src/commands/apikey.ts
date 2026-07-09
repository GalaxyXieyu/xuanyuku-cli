import { Command } from 'commander';
import { resolveCommandContext } from './_context';
import { createApiKey, listApiKeys, revokeApiKey } from '../client/apikeys';
import { saveProfile, type Profile } from '../client/profile-store';
import { describeError } from '../client/errors';

export function registerApiKeyCommands(program: Command): void {
  const apikeyCmd = program
    .command('apikey')
    .description('Manage API keys (long-lived automation credentials)');

  // apikey create --name <name> [--expires-days N] [--save-profile <name>]
  apikeyCmd
    .command('create')
    .description('Create an API key (plaintext key is printed only once)')
    .requiredOption('--name <name>', 'Human-readable key name')
    .option('--profile <name>', 'Profile used to authenticate the create request')
    .option('--api-base <url>', 'API base URL')
    .option('--expires-days <n>', 'Expire after N days (default: never)')
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

        console.log('正在创建 API Key...');
        const result = await createApiKey(ctx, {
          name: opts.name,
          ...(expiresInSeconds && { expiresInSeconds }),
        });

        console.log('✓ API Key 创建成功');
        console.log(`  id: ${result.id}`);
        console.log(`  name: ${result.name}`);
        console.log(`  前缀: ${result.keyPrefix}`);
        console.log('');
        console.log(`  明文 Key（仅此一次显示，请立即保存）:`);
        console.log(`    ${result.apiKey}`);

        if (opts.saveProfile) {
          const profile: Profile = {
            login: '(api-key)',
            accessToken: '',
            apiKey: result.apiKey,
            apiKeyId: result.id,
            apiBaseUrl: apiBase,
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
          console.log(`  - ${k.id}  ${k.name}  前缀=${k.keyPrefix}  最近使用=${lastUsed}  过期=${expires}`);
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
