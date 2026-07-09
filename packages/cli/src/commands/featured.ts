import { Command } from 'commander';
import { resolveCommandContext } from './_context';
import {
  listFeaturedProducts,
  addFeaturedProduct,
  removeFeaturedProduct,
  reorderFeaturedProducts,
} from '../client/featured-products';
import { describeError } from '../client/errors';

export function registerFeaturedCommands(program: Command): void {
  const featuredCmd = program
    .command('featured')
    .description('Manage featured products');

  featuredCmd
    .command('list')
    .description('List featured products')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在获取橱窗产品列表...');

        const result = await listFeaturedProducts(ctx);

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功，共 ${result.items?.length || 0} 个`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  featuredCmd
    .command('add')
    .description('Add a product to featured')
    .requiredOption('--product-id <id>', 'Product ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--sort-order <order>', 'Sort order')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在添加到橱窗...');

        const result = await addFeaturedProduct(ctx, {
          productId: opts.productId,
          ...(opts.sortOrder && { sortOrder: parseInt(opts.sortOrder, 10) }),
        });

        if (result.item) {
          console.log(`✓ 添加成功`);
          console.log(`  项目 ID: ${result.item.id}`);
        }
      } catch (err) {
        console.error(`✗ 添加失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  featuredCmd
    .command('remove')
    .description('Remove a product from featured')
    .argument('<id>', 'Featured item ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (id, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在从橱窗移除...');

        const result = await removeFeaturedProduct(ctx, id);

        if (result.deleted) {
          console.log(`✓ 移除成功`);
        }
      } catch (err) {
        console.error(`✗ 移除失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  featuredCmd
    .command('reorder')
    .description('Reorder featured products')
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
        const result = await reorderFeaturedProducts(ctx, { ids });

        if (result.items) {
          console.log(`✓ 排序成功，共 ${result.items.length} 项`);
        }
      } catch (err) {
        console.error(`✗ 排序失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
