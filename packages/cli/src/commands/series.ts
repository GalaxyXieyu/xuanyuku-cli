import { Command } from 'commander';
import { resolveCommandContext } from './_context';
import { listSeries, createSeries, getSeries, updateSeries, deleteSeries, reorderSeries } from '../client/series';
import { describeError } from '../client/errors';

export function registerSeriesCommands(program: Command): void {
  const seriesCmd = program
    .command('series')
    .description('Manage product series');

  seriesCmd
    .command('list')
    .description('List series')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--search <text>', 'Search keyword')
    .option('--page <n>', 'Page number')
    .option('--page-size <n>', 'Page size')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在获取系列列表...');

        const result = await listSeries(ctx, {
          ...(opts.search && { search: opts.search }),
          ...(opts.page && { page: parseInt(opts.page, 10) }),
          ...(opts.pageSize && { pageSize: parseInt(opts.pageSize, 10) }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功，共 ${result.total || 0} 个`);
          console.log(`  当前页: ${result.page || 1}/${result.totalPages || 1}`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  seriesCmd
    .command('create')
    .description('Create a new series')
    .requiredOption('--name <name>', 'Series name')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--description <text>', 'Description')
    .option('--sort-order <n>', 'Sort order')
    .option('--active', 'Is active')
    .option('--public-visible', 'Is public visible')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在创建系列...');

        const result = await createSeries(ctx, {
          name: opts.name,
          ...(opts.description && { description: opts.description }),
          ...(opts.sortOrder && { sortOrder: parseInt(opts.sortOrder, 10) }),
          ...(opts.active && { isActive: true }),
          ...(opts.publicVisible && { isPublicVisible: true }),
        });

        if (result.series) {
          console.log(`✓ 系列创建成功`);
          console.log(`  系列 ID: ${result.series.id}`);
        }
      } catch (err) {
        console.error(`✗ 创建失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  seriesCmd
    .command('get')
    .description('Get a series by ID')
    .argument('<id>', 'Series ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (id, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在获取系列信息...');

        const result = await getSeries(ctx, id);

        console.log(`✓ 获取成功`);
        console.log(`  系列名: ${result.series?.name || 'N/A'}`);
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  seriesCmd
    .command('update')
    .description('Update a series')
    .argument('<id>', 'Series ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--name <name>', 'Series name')
    .option('--description <text>', 'Description')
    .option('--sort-order <n>', 'Sort order')
    .option('--active', 'Is active')
    .option('--public-visible', 'Is public visible')
    .action(async (id, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在更新系列...');

        const result = await updateSeries(ctx, id, {
          ...(opts.name && { name: opts.name }),
          ...(opts.description && { description: opts.description }),
          ...(opts.sortOrder && { sortOrder: parseInt(opts.sortOrder, 10) }),
          ...(opts.active && { isActive: true }),
          ...(opts.publicVisible && { isPublicVisible: true }),
        });

        if (result.series) {
          console.log(`✓ 系列更新成功`);
        }
      } catch (err) {
        console.error(`✗ 更新失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  seriesCmd
    .command('delete')
    .description('Delete a series')
    .argument('<id>', 'Series ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (id, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在删除系列...');

        const result = await deleteSeries(ctx, id);

        if (result.deleted) {
          console.log(`✓ 系列删除成功`);
        }
      } catch (err) {
        console.error(`✗ 删除失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  seriesCmd
    .command('reorder')
    .description('Reorder series')
    .requiredOption('--ids <ids...>', 'Comma-separated list of IDs to reorder')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在重新排序...');

        const ids = Array.isArray(opts.ids) ? opts.ids : [opts.ids];
        const result = await reorderSeries(ctx, { ids });

        if (result.items) {
          console.log(`✓ 排序成功，共 ${result.items.length} 项`);
        }
      } catch (err) {
        console.error(`✗ 排序失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
