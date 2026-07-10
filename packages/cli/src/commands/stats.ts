import { Command } from 'commander';
import { resolveCommandContext, ensureSuperAdmin } from './_context';
import {
  getDashboardOverview,
  listProductsPublicClicks,
  getProductPublicClicks,
} from '../client/stats';
import {
  getAdminActivityOverview,
  getAdminUsageOverview,
  getAdminRevenueOverview,
  getAdminTenantLivestockOverview,
} from '../client/admin-analytics';
import { describeError } from '../client/errors';

export function registerStatsCommands(program: Command): void {
  const statsCmd = program
    .command('stats')
    .description('View statistics and analytics');

  statsCmd
    .command('overview')
    .description('View dashboard overview')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--window <window>', 'Time window (today|7d|30d)')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        if (!opts.json) {
          console.log('正在获取仪表盘数据...');
        }

        const result = await getDashboardOverview(ctx, {
          ...(opts.window && { window: opts.window as 'today' | '7d' | '30d' }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
          return;
        }

        console.log(`✓ 获取成功`);
        const data = result as Record<string, unknown>;
        console.log(`  统计数据摘要: ${JSON.stringify(data).substring(0, 100)}...`);
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // Clicks subcommand group
  const clicksCmd = statsCmd
    .command('clicks')
    .description('View product clicks');

  clicksCmd
    .command('list')
    .description('List all product clicks')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--days <n>', 'Number of days')
    .option('--limit <n>', 'Result limit')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        if (!opts.json) {
          console.log('正在获取产品点击数据...');
        }

        const result = await listProductsPublicClicks(ctx, {
          ...(opts.days && { days: parseInt(opts.days, 10) }),
          ...(opts.limit && { limit: parseInt(opts.limit, 10) }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
          return;
        }

        console.log(`✓ 获取成功`);
        const data = result as Record<string, unknown>;
        console.log(`  统计数据摘要: ${JSON.stringify(data).substring(0, 100)}...`);
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  clicksCmd
    .command('get')
    .description('Get clicks for a specific product')
    .requiredOption('--product-id <id>', 'Product ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--days <n>', 'Number of days')
    .option('--json', 'Output machine-readable JSON only')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        if (!opts.json) {
          console.log('正在获取产品点击数据...');
        }

        const result = await getProductPublicClicks(ctx, opts.productId, {
          ...(opts.days && { days: parseInt(opts.days, 10) }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
          return;
        }

        console.log(`✓ 获取成功`);
        const data = result as Record<string, unknown>;
        console.log(`  点击统计: ${JSON.stringify(data).substring(0, 100)}...`);
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // Admin subcommand group
  const adminCmd = statsCmd
    .command('admin')
    .description('View admin analytics (superadmin only)');

  adminCmd
    .command('activity')
    .description('View admin activity overview')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--window <window>', 'Time window (7d|30d)')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在获取活跃度数据...');

        const result = await getAdminActivityOverview(ctx, {
          ...(opts.window && { window: opts.window as '7d' | '30d' }),
        });

        console.log(`✓ 获取成功`);
        console.log(`  统计数据摘要: ${JSON.stringify(result).substring(0, 100)}...`);
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  adminCmd
    .command('usage')
    .description('View admin usage overview')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--top-n <n>', 'Top N tenants')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在获取使用数据...');

        const result = await getAdminUsageOverview(ctx, {
          ...(opts.topN && { topN: parseInt(opts.topN, 10) }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功`);
          console.log(`  统计数据摘要: ${JSON.stringify(result).substring(0, 100)}...`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  adminCmd
    .command('revenue')
    .description('View admin revenue overview')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--window <window>', 'Time window (30d|90d)')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在获取收入数据...');

        const result = await getAdminRevenueOverview(ctx, {
          ...(opts.window && { window: opts.window as '30d' | '90d' }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功`);
          console.log(`  统计数据摘要: ${JSON.stringify(result).substring(0, 100)}...`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  adminCmd
    .command('livestock')
    .description('View admin livestock overview')
    .requiredOption('--tenant-id <id>', 'Tenant ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在获取畜牧数据...');

        const result = await getAdminTenantLivestockOverview(ctx, opts.tenantId);

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功`);
          console.log(`  统计数据摘要: ${JSON.stringify(result).substring(0, 100)}...`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
