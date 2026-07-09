import { Command } from 'commander';
import { resolveCommandContext, ensureSuperAdmin } from './_context';
import {
  listKeywords,
  getKeywordDetail,
  createKeyword,
  updateKeyword,
  batchUpsertSnapshots,
  listPriceSnapshots,
  listReviewQueue,
  approveReview,
  rejectReview,
  publishKeyword,
  listPublishHistory,
  getMarketOverview,
} from '../client/market-intelligence';
import { describeError, ApiError } from '../client/errors';

function printJson(result: unknown): void {
  console.log(JSON.stringify(result, null, 2));
}

function parseOptionalInt(value?: string): number | undefined {
  return value === undefined ? undefined : parseInt(value, 10);
}

function parseAliases(value?: string[]): string[] | undefined {
  return value?.flatMap((item) => item.split(',')).map((item) => item.trim()).filter(Boolean);
}

function addAdminOptions(cmd: Command): Command {
  return cmd
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL');
}

function keywordPayload(opts: Record<string, unknown>) {
  return {
    ...(opts.code && { code: opts.code }),
    ...(opts.displayName && { displayName: opts.displayName }),
    ...(opts.canonicalKeyword && { canonicalKeyword: opts.canonicalKeyword }),
    ...(opts.species && { species: opts.species }),
    ...(opts.gradeHint && { gradeHint: opts.gradeHint }),
    ...(opts.aliases && { aliases: parseAliases(opts.aliases as string[]) }),
    ...(opts.isActive !== undefined && { isActive: opts.isActive }),
    ...(opts.sortOrder && { sortOrder: parseOptionalInt(String(opts.sortOrder)) }),
  };
}

function addKeywordMutationOptions(cmd: Command, required: boolean): Command {
  const withOptions = cmd
    .option('--species <species>', 'Species')
    .option('--grade-hint <hint>', 'Grade hint')
    .option('--aliases <aliases...>', 'Aliases, supports comma separated values')
    .option('--is-active', 'Is active', undefined)
    .option('--no-is-active', 'Is inactive')
    .option('--sort-order <order>', 'Sort order');

  if (required) {
    return withOptions
      .requiredOption('--code <code>', 'Keyword code')
      .requiredOption('--display-name <name>', 'Display name')
      .requiredOption('--canonical-keyword <keyword>', 'Canonical keyword');
  }

  return withOptions
    .option('--code <code>', 'Keyword code')
    .option('--display-name <name>', 'Display name')
    .option('--canonical-keyword <keyword>', 'Canonical keyword');
}

export function registerMarketCommands(program: Command): void {
  const marketCmd = program
    .command('market')
    .description('Market intelligence commands (superadmin only)');

  addAdminOptions(
    marketCmd
      .command('overview')
      .description('View market overview')
      .requiredOption('--tenant-id <id>', 'Tenant ID')
      .option('--window <window>', 'Time window (7d|30d)')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      const result = await getMarketOverview(ctx, opts.tenantId, {
        ...(opts.window && { window: opts.window }),
      });

      if (opts.json) {
        printJson(result);
      } else {
        console.log(`✓ 获取成功，共 ${result.items.length} 个行情项`);
      }
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  const priceCmd = marketCmd
    .command('price')
    .description('Manage market prices');

  addAdminOptions(
    priceCmd
      .command('list')
      .description('List market price snapshots')
      .requiredOption('--tenant-id <id>', 'Tenant ID')
      .option('--keyword-id <id>', 'Keyword ID')
      .option('--limit <n>', 'Result limit')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      const result = await listPriceSnapshots(ctx, {
        tenantId: opts.tenantId,
        ...(opts.keywordId && { keywordId: opts.keywordId }),
        ...(opts.limit && { limit: parseOptionalInt(opts.limit) }),
      });

      opts.json ? printJson(result) : console.log(`✓ 获取成功，共 ${result.snapshots.length} 条价格快照`);
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addAdminOptions(
    priceCmd
      .command('upsert')
      .description('Upsert market price snapshot')
      .requiredOption('--tenant-id <id>', 'Tenant ID')
      .requiredOption('--keyword-id <id>', 'Keyword ID')
      .requiredOption('--price-cents <cents>', 'Price in cents')
      .requiredOption('--observed-at <datetime>', 'Observed datetime (ISO format)')
      .option('--note <text>', 'Note')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      console.log('正在更新价格...');

      const result = await batchUpsertSnapshots(ctx, opts.tenantId, {
        items: [
          {
            keywordId: opts.keywordId,
            priceCents: parseInt(opts.priceCents, 10),
            observedAt: opts.observedAt,
            ...(opts.note && { note: opts.note }),
          },
        ],
      });

      console.log(`✓ 价格更新成功，共 ${result.snapshots.length} 条`);
    } catch (err) {
      console.error(`✗ 更新失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  const keywordCmd = marketCmd
    .command('keyword')
    .description('Manage market keywords');

  addAdminOptions(
    keywordCmd
      .command('list')
      .description('List market keywords')
      .requiredOption('--tenant-id <id>', 'Tenant ID')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      const result = await listKeywords(ctx, { tenantId: opts.tenantId });
      opts.json ? printJson(result) : console.log(`✓ 获取成功，共 ${result.keywords.length} 个关键词`);
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addAdminOptions(
    keywordCmd
      .command('detail')
      .description('Get market keyword detail')
      .argument('<keywordId>', 'Keyword ID')
      .requiredOption('--tenant-id <id>', 'Tenant ID')
      .option('--json', 'Output full JSON')
  ).action(async (keywordId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      const result = await getKeywordDetail(ctx, opts.tenantId, keywordId);
      opts.json ? printJson(result) : console.log(`✓ 获取成功: ${result.keyword.displayName}`);
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addAdminOptions(
    addKeywordMutationOptions(
      keywordCmd
        .command('create')
        .description('Create a market keyword')
        .requiredOption('--tenant-id <id>', 'Tenant ID'),
      true
    )
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      console.log('正在创建关键词...');
      const result = await createKeyword(ctx, opts.tenantId, keywordPayload(opts));
      console.log(`✓ 关键词创建成功: ${result.keyword.id}`);
    } catch (err) {
      console.error(`✗ 创建失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addAdminOptions(
    addKeywordMutationOptions(
      keywordCmd
        .command('update')
        .description('Update a market keyword')
        .argument('<keywordId>', 'Keyword ID')
        .requiredOption('--tenant-id <id>', 'Tenant ID'),
      false
    )
  ).action(async (keywordId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      console.log('正在更新关键词...');
      const result = await updateKeyword(ctx, opts.tenantId, keywordId, keywordPayload(opts));
      console.log(`✓ 关键词更新成功: ${result.keyword.id}`);
    } catch (err) {
      console.error(`✗ 更新失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  const reviewCmd = marketCmd
    .command('review')
    .description('Manage review queue');

  addAdminOptions(
    reviewCmd
      .command('list')
      .description('List review queue items')
      .requiredOption('--tenant-id <id>', 'Tenant ID')
      .option('--keyword-id <id>', 'Keyword ID')
      .option('--status <status>', 'Review status (PENDING|APPROVED|REJECTED)')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      const result = await listReviewQueue(ctx, {
        tenantId: opts.tenantId,
        ...(opts.keywordId && { keywordId: opts.keywordId }),
        ...(opts.status && { status: opts.status }),
      });
      opts.json ? printJson(result) : console.log(`✓ 获取成功，共 ${result.items.length} 条审核项`);
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addAdminOptions(
    reviewCmd
      .command('approve <id>')
      .description('Approve a review queue item')
      .option('--reason <text>', 'Reason for approval')
  ).action(async (id, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      const result = await approveReview(ctx, id, opts.reason ? { reasonText: opts.reason } : {});
      console.log(`✓ 审批通过: ${result.item.id}`);
    } catch (err) {
      console.error(`✗ 审批失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addAdminOptions(
    reviewCmd
      .command('reject <id>')
      .description('Reject a review queue item')
      .option('--reason <text>', 'Reason for rejection')
  ).action(async (id, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      const result = await rejectReview(ctx, id, opts.reason ? { reasonText: opts.reason } : {});
      console.log(`✓ 审批拒绝: ${result.item.id}`);
    } catch (err) {
      console.error(`✗ 拒绝失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addAdminOptions(
    marketCmd
      .command('publish <keywordId>')
      .description('Publish a market keyword')
      .requiredOption('--tenant-id <id>', 'Tenant ID')
  ).action(async (keywordId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      console.log('正在发布...');

      try {
        const result = await publishKeyword(ctx, keywordId);
        console.log(`✓ 发布成功: ${result.keyword.id}`);
      } catch (err) {
        if (err instanceof ApiError && err.httpStatus === 409) {
          console.error(`✗ 发布被拦截: ${err.message}`);
          process.exit(1);
        }
        throw err;
      }
    } catch (err) {
      console.error(`✗ 发布失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addAdminOptions(
    marketCmd
      .command('publish-history')
      .description('List market publish history')
      .requiredOption('--tenant-id <id>', 'Tenant ID')
      .option('--keyword-id <id>', 'Keyword ID')
      .option('--limit <n>', 'Result limit')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      await ensureSuperAdmin(ctx);

      const result = await listPublishHistory(ctx, {
        tenantId: opts.tenantId,
        ...(opts.keywordId && { keywordId: opts.keywordId }),
        ...(opts.limit && { limit: parseOptionalInt(opts.limit) }),
      });
      opts.json ? printJson(result) : console.log(`✓ 获取成功，共 ${result.records.length} 条发布记录`);
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });
}