import { Command } from 'commander';
import { createAuthContext } from '../client/context';
import { createShare } from '../client/shares';
import { resolveApiBase, loadGlobalConfig } from '../client/config';
import { loadProfile } from '../client/profile-store';
import { describeError } from '../client/errors';
import {
  getShareMiniappUrlLink,
  downloadShareQrCode,
  downloadShareQrLabelCard,
} from '../client/share-assets';

function printJson(result: unknown): void {
  console.log(JSON.stringify(result, null, 2));
}

function printAssetResult(
  result: { path: string; size: number; source?: string },
  input: { shareToken: string; productId?: string },
  assetType: 'qr_code' | 'qr_label_card',
): void {
  printJson({
    ...result,
    assetType,
    shareToken: input.shareToken,
    productId: input.productId ?? null,
  });
}

export function registerShareCommands(program: Command): void {
  const shareCmd = program
    .command('share')
    .description('Manage shares');

  shareCmd
    .command('publish')
    .description('Publish a tenant feed share')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--feed-title <title>', 'Feed title')
    .option('--feed-subtitle <subtitle>', 'Feed subtitle')
    .option('--avatar-preset <preset>', 'Avatar preset (amber|ocean|forest|plum|graphite|sunrise)')
    .option('--brand-primary <color>', 'Brand primary color (hex)')
    .option('--brand-secondary <color>', 'Brand secondary color (hex)')
    .option('--json', 'Output machine-readable JSON only')
    .action(async (opts) => {
      try {
        // Resolve profile
        let profileName = opts.profile;
        if (!profileName) {
          const config = await loadGlobalConfig();
          profileName = config.defaultProfile || 'default';
        }

        // Load profile to get stored apiBaseUrl if available
        const profile = await loadProfile(profileName);

        // Resolve API base (priority: flag > profile > env > default)
        let apiBase = opts.apiBase;
        if (!apiBase && profile?.apiBaseUrl) {
          apiBase = profile.apiBaseUrl;
        }
        if (!apiBase) {
          apiBase = await resolveApiBase({
            apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL,
          });
        }

        // Create authenticated context
        const ctx = await createAuthContext(apiBase, profileName);

        if (!opts.json) {
          console.log('正在发布分享...');
        }

        const payload = {
          resourceType: 'tenant_feed' as const,
          presentationOverride: {
            ...(opts.feedTitle && { feedTitle: opts.feedTitle }),
            ...(opts.feedSubtitle && { feedSubtitle: opts.feedSubtitle }),
            ...(opts.avatarPreset && { avatarPreset: opts.avatarPreset }),
            ...(opts.brandPrimary && { brandPrimary: opts.brandPrimary }),
            ...(opts.brandSecondary && { brandSecondary: opts.brandSecondary }),
          },
        };

        const result = await createShare(ctx, payload);

        if (opts.json) {
          printJson(result);
          return;
        }

        console.log(`✓ 分享发布成功`);
        if (result.share) {
          console.log(`  分享 Token: ${result.share.shareToken}`);
          console.log(`  入口 URL: ${result.share.entryUrl}`);
        }
      } catch (err) {
        console.error(`✗ 发布失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // QR code subcommand group (@Public - no authentication required)
  const qrCmd = shareCmd
    .command('qr')
    .description('Download share QR code/label card or get miniapp URL link');

  qrCmd
    .command('code')
    .description('Download share QR code as PNG')
    .requiredOption('--share-token <token>', 'Share token')
    .requiredOption('--output <path>', 'Output file path')
    .option('--api-base <url>', 'API base URL (optional)')
    .option('--product-id <id>', 'Product ID (query param)')
    .option('--tab <tab>', 'Tab (query param)')
    .option('--src <src>', 'Source (query param)')
    .option('--series <id>', 'Series ID (query param)')
    .option('--event <id>', 'Event ID (query param)')
    .option('--badge <badge>', 'Badge (query param)')
    .option('--from <from>', 'From (query param)')
    .option('--size <size>', 'QR code size (320|480|640)')
    .option('--json', 'Output machine-readable JSON only')
    .action(async (opts) => {
      try {
        // Resolve API base only (no auth context needed - @Public endpoint)
        let apiBase = opts.apiBase;
        if (!apiBase) {
          apiBase = await resolveApiBase({
            apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL,
          });
        }

        if (!opts.json) {
          console.log('正在下载二维码...');
        }

        const result = await downloadShareQrCode(apiBase, opts.shareToken, opts.output, {
          ...(opts.productId && { productId: opts.productId }),
          ...(opts.tab && { tab: opts.tab }),
          ...(opts.src && { src: opts.src }),
          ...(opts.series && { series: opts.series }),
          ...(opts.event && { event: opts.event }),
          ...(opts.badge && { badge: opts.badge }),
          ...(opts.from && { from: opts.from }),
          ...(opts.size && { size: parseInt(opts.size, 10) as 320 | 480 | 640 }),
        });

        if (opts.json) {
          printAssetResult(result, opts, 'qr_code');
          return;
        }

        console.log(`✓ 下载成功`);
        console.log(`  保存位置: ${result.path}`);
        console.log(`  文件大小: ${result.size} bytes`);
        if (result.source) {
          console.log(`  来源: ${result.source}`);
        }
      } catch (err) {
        console.error(`✗ 下载失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  qrCmd
    .command('label-card')
    .description('Download share QR label card as PNG')
    .requiredOption('--share-token <token>', 'Share token')
    .requiredOption('--output <path>', 'Output file path')
    .option('--api-base <url>', 'API base URL (optional)')
    .option('--product-id <id>', 'Product ID (query param)')
    .option('--tab <tab>', 'Tab (query param)')
    .option('--src <src>', 'Source (query param)')
    .option('--series <id>', 'Series ID (query param)')
    .option('--event <id>', 'Event ID (query param)')
    .option('--badge <badge>', 'Badge (query param)')
    .option('--from <from>', 'From (query param)')
    .option('--size <size>', 'Card size (320|480|640)')
    .option('--json', 'Output machine-readable JSON only')
    .action(async (opts) => {
      try {
        // Resolve API base only (no auth context needed - @Public endpoint)
        let apiBase = opts.apiBase;
        if (!apiBase) {
          apiBase = await resolveApiBase({
            apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL,
          });
        }

        if (!opts.json) {
          console.log('正在下载标签卡...');
        }

        const result = await downloadShareQrLabelCard(apiBase, opts.shareToken, opts.output, {
          ...(opts.productId && { productId: opts.productId }),
          ...(opts.tab && { tab: opts.tab }),
          ...(opts.src && { src: opts.src }),
          ...(opts.series && { series: opts.series }),
          ...(opts.event && { event: opts.event }),
          ...(opts.badge && { badge: opts.badge }),
          ...(opts.from && { from: opts.from }),
          ...(opts.size && { size: parseInt(opts.size, 10) as 320 | 480 | 640 }),
        });

        if (opts.json) {
          printAssetResult(result, opts, 'qr_label_card');
          return;
        }

        console.log(`✓ 下载成功`);
        console.log(`  保存位置: ${result.path}`);
        console.log(`  文件大小: ${result.size} bytes`);
        if (result.source) {
          console.log(`  来源: ${result.source}`);
        }
      } catch (err) {
        console.error(`✗ 下载失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  qrCmd
    .command('url-link')
    .description('Get share miniapp URL link (JSON)')
    .requiredOption('--share-token <token>', 'Share token')
    .option('--api-base <url>', 'API base URL (optional)')
    .option('--product-id <id>', 'Product ID (query param)')
    .option('--tab <tab>', 'Tab (query param)')
    .option('--src <src>', 'Source (query param)')
    .option('--series <id>', 'Series ID (query param)')
    .option('--event <id>', 'Event ID (query param)')
    .option('--badge <badge>', 'Badge (query param)')
    .option('--from <from>', 'From (query param)')
    .option('--json', 'Output machine-readable JSON only')
    .action(async (opts) => {
      try {
        // Resolve API base only (no auth context needed - @Public endpoint)
        let apiBase = opts.apiBase;
        if (!apiBase) {
          apiBase = await resolveApiBase({
            apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL,
          });
        }

        if (!opts.json) {
          console.log('正在获取小程序链接...');
        }

        const result = await getShareMiniappUrlLink(apiBase, opts.shareToken, {
          ...(opts.productId && { productId: opts.productId }),
          ...(opts.tab && { tab: opts.tab as 'series' | 'features' }),
          ...(opts.src && { src: opts.src }),
          ...(opts.series && { series: opts.series }),
          ...(opts.event && { event: opts.event }),
          ...(opts.badge && { badge: opts.badge }),
          ...(opts.from && { from: opts.from }),
        });

        if (opts.json) {
          printJson(result);
          return;
        }

        console.log(`✓ 获取成功`);
        printJson(result);
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
