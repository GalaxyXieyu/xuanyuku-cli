import { Command } from 'commander';
import { resolveCommandContext } from './_context';
import { listSaleBatches, createSaleBatch, createSaleAllocation } from '../client/sales';
import { describeError } from '../client/errors';

export function registerSalesCommands(program: Command): void {
  // Sale batch subcommand group
  const saleBatchCmd = program
    .command('sale-batch')
    .description('Manage sale batches');

  saleBatchCmd
    .command('list')
    .description('List sale batches for a product')
    .requiredOption('--product-id <id>', 'Product ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--json', 'Output machine-readable JSON only')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        if (!opts.json) {
          console.log('正在获取销售批次...');
        }

        const result = await listSaleBatches(ctx, opts.productId);

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
          return;
        }

        if (result.items) {
          console.log(`✓ 获取成功，共 ${result.items.length} 批`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  saleBatchCmd
    .command('create')
    .description('Create a sale batch')
    .requiredOption('--product-id <id>', 'Product ID')
    .requiredOption('--egg-event-id <id>', 'Egg event ID')
    .requiredOption('--planned-quantity <qty>', 'Planned quantity')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--price-low <price>', 'Low price')
    .option('--price-high <price>', 'High price')
    .option('--note <text>', 'Note')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在创建销售批次...');

        const result = await createSaleBatch(ctx, opts.productId, {
          eggEventId: opts.eggEventId,
          plannedQuantity: parseInt(opts.plannedQuantity, 10),
          ...(opts.priceLow && { priceLow: parseFloat(opts.priceLow) }),
          ...(opts.priceHigh && { priceHigh: parseFloat(opts.priceHigh) }),
          ...(opts.note && { note: opts.note }),
        });

        if (result.batch) {
          console.log(`✓ 销售批次创建成功`);
          console.log(`  批次 ID: ${result.batch.id}`);
        }
      } catch (err) {
        console.error(`✗ 创建失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // Sale allocation subcommand group
  const saleAllocationCmd = program
    .command('sale-allocation')
    .description('Manage sale allocations');

  saleAllocationCmd
    .command('create')
    .description('Create a sale allocation')
    .requiredOption('--product-id <id>', 'Product ID')
    .requiredOption('--sale-batch-id <id>', 'Sale batch ID')
    .requiredOption('--quantity <qty>', 'Quantity')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--buyer-name <name>', 'Buyer name')
    .option('--buyer-account-id <id>', 'Buyer account ID')
    .option('--buyer-contact <contact>', 'Buyer contact')
    .option('--unit-price <price>', 'Unit price')
    .option('--channel <channel>', 'Sales channel')
    .option('--campaign-id <id>', 'Campaign ID')
    .option('--note <text>', 'Note')
    .option('--sold-at <datetime>', 'Sold at (ISO datetime)')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在创建销售分配...');

        const result = await createSaleAllocation(ctx, opts.productId, {
          saleBatchId: opts.saleBatchId,
          quantity: parseInt(opts.quantity, 10),
          buyerName: opts.buyerName || '',
          ...(opts.buyerAccountId && { buyerAccountId: opts.buyerAccountId }),
          ...(opts.buyerContact && { buyerContact: opts.buyerContact }),
          ...(opts.unitPrice && { unitPrice: parseFloat(opts.unitPrice) }),
          ...(opts.channel && { channel: opts.channel }),
          ...(opts.campaignId && { campaignId: opts.campaignId }),
          ...(opts.note && { note: opts.note }),
          ...(opts.soldAt && { soldAt: opts.soldAt }),
        });

        if (result.allocation) {
          console.log(`✓ 销售分配创建成功`);
          console.log(`  分配 ID: ${result.allocation.id}`);
        }
      } catch (err) {
        console.error(`✗ 创建失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
