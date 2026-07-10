import { Command } from 'commander';
import { resolveCommandContext } from './_context';
import {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  addProductEvent,
  listProductEvents,
  updateProductEvent,
  deleteProductEvent,
  uploadProductImage,
  listProductImages,
  setMainProductImage,
  deleteProductImage,
  reorderProductImages,
  listProductGallery,
  createMatingRecord,
  createEggRecord,
  getMatingHistory,
  getFamilyTree,
} from '../client/products';
import { describeError } from '../client/errors';

function printJson(result: unknown): void {
  console.log(JSON.stringify(result, null, 2));
}

function parseOptionalInt(value?: string): number | undefined {
  return value === undefined ? undefined : parseInt(value, 10);
}

function parseOptionalFloat(value?: string): number | undefined {
  return value === undefined ? undefined : parseFloat(value);
}

function parseCsv(value?: string): string[] | undefined {
  return value
    ? value.split(',').map((item) => item.trim()).filter(Boolean)
    : undefined;
}

function productMutationPayload(opts: Record<string, unknown>) {
  const payload: Record<string, unknown> = {};
  const fields = [
    'type',
    'alias',
    'name',
    'seriesId',
    'sex',
    'description',
    'sireProductId',
    'damProductId',
    'mateProductId',
    'lineageType',
    'crossLabel',
  ];

  for (const field of fields) {
    if (opts[field] !== undefined) {
      payload[field] = opts[field];
    }
  }

  if (opts.offspringUnitPrice !== undefined) {
    payload.offspringUnitPrice = parseOptionalFloat(String(opts.offspringUnitPrice));
  }
  if (opts.excludeFromBreeding !== undefined) {
    payload.excludeFromBreeding = opts.excludeFromBreeding;
  }
  if (opts.hasSample !== undefined) {
    payload.hasSample = opts.hasSample;
  }
  if (opts.inStock !== undefined) {
    payload.inStock = opts.inStock;
  }
  if (opts.popularityScore !== undefined) {
    payload.popularityScore = parseOptionalInt(String(opts.popularityScore));
  }
  if (opts.featured !== undefined) {
    payload.isFeatured = opts.featured;
  }

  return payload;
}

function addProductMutationOptions(cmd: Command): Command {
  return cmd
    .option('--type <type>', 'Product type (breeder|offspring)')
    .option('--alias <alias>', 'Product alias/name')
    .option('--name <name>', 'Product display name')
    .option('--series-id <id>', 'Series ID')
    .option('--sex <sex>', 'Product sex (male|female|unknown)')
    .option('--description <text>', 'Product description')
    .option('--sire-product-id <id>', 'Sire product ID')
    .option('--dam-product-id <id>', 'Dam product ID')
    .option('--mate-product-id <id>', 'Mate product ID')
    .option('--lineage-type <type>', 'Lineage type (pure|hybrid)')
    .option('--cross-label <text>', 'Cross label for hybrid products')
    .option('--offspring-unit-price <price>', 'Offspring unit price')
    .option('--exclude-from-breeding', 'Exclude from breeding')
    .option('--has-sample', 'Mark as having sample')
    .option('--no-has-sample', 'Mark as not having sample')
    .option('--in-stock', 'Mark as in stock')
    .option('--no-in-stock', 'Mark as out of stock')
    .option('--popularity-score <score>', 'Popularity score (0-100)')
    .option('--featured', 'Mark as featured')
    .option('--no-featured', 'Remove featured mark');
}

function addCommonOptions(cmd: Command): Command {
  return cmd
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL');
}

export function registerProductCommands(program: Command): void {
  const productCmd = program
    .command('product')
    .description('Manage products');

  addCommonOptions(
    productCmd
      .command('list')
      .description('List products (page defaults to 1; page-size defaults to 20 and caps at 100)')
      .option('--page <n>', '1-based page number (default: 1)')
      .option('--page-size <n>', 'Items per page (default: 20, max: 100)')
      .option('--search <text>', 'Search text')
      .option('--type <type>', 'Product type')
      .option('--sex <sex>', 'Product sex')
      .option('--series-id <id>', 'Series ID')
      .option('--status <status>', 'Need mating status (normal|need_mating|warning)')
      .option('--sort-by <field>', 'Sort field (updatedAt|createdAt|id|identity)')
      .option('--sort-dir <dir>', 'Sort direction (asc|desc; use createdAt desc for newest first)')
      .option('--json', 'Output { products, total, page, pageSize, totalPages, stats }')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await listProducts(ctx, {
        ...(opts.page && { page: parseOptionalInt(opts.page) }),
        ...(opts.pageSize && { pageSize: parseOptionalInt(opts.pageSize) }),
        ...(opts.search && { search: opts.search }),
        ...(opts.type && { type: opts.type }),
        ...(opts.sex && { sex: opts.sex }),
        ...(opts.seriesId && { seriesId: opts.seriesId }),
        ...(opts.status && { status: opts.status }),
        ...(opts.sortBy && { sortBy: opts.sortBy }),
        ...(opts.sortDir && { sortDir: opts.sortDir }),
      });

      if (opts.json) {
        printJson(result);
        return;
      }

      console.log(`✓ 获取成功，共 ${result.total} 只，当前页 ${result.products.length} 只`);
      for (const product of result.products) {
        console.log(`  ${product.id} ${product.code ?? '-'} ${product.alias ?? product.name ?? '-'} ${product.sex ?? '-'}`);
      }
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    productCmd
      .command('get')
      .description('Get a product')
      .argument('<productId>', 'Product ID')
      .option('--json', 'Output full JSON')
  ).action(async (productId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await getProduct(ctx, productId);

      if (opts.json) {
        printJson(result);
        return;
      }

      console.log('✓ 获取成功');
      console.log(`  产品 ID: ${result.product.id}`);
      console.log(`  编号: ${result.product.code ?? '-'}`);
      console.log(`  名称: ${result.product.alias ?? result.product.name ?? '-'}`);
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    addProductMutationOptions(
      productCmd
        .command('create')
        .description('Create a new product')
    )
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      console.log('正在创建产品...');

      const result = await createProduct(ctx, productMutationPayload(opts));

      console.log('✓ 产品创建成功');
      console.log(`  产品 ID: ${result.product.id}`);
      if (result.product.alias) console.log(`  别名: ${result.product.alias}`);
    } catch (err) {
      console.error(`✗ 创建失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    addProductMutationOptions(
      productCmd
        .command('update')
        .description('Update a product')
        .argument('<productId>', 'Product ID')
    )
  ).action(async (productId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      console.log('正在更新产品...');

      const result = await updateProduct(ctx, productId, productMutationPayload(opts));

      console.log('✓ 产品更新成功');
      console.log(`  产品 ID: ${result.product.id}`);
    } catch (err) {
      console.error(`✗ 更新失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    productCmd
      .command('delete')
      .description('Delete a product')
      .argument('<productId>', 'Product ID')
      .option('--json', 'Output full JSON')
  ).action(async (productId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      console.log('正在删除产品...');

      const result = await deleteProduct(ctx, productId);
      opts.json ? printJson(result) : console.log(`✓ 产品删除成功: ${result.productId}`);
    } catch (err) {
      console.error(`✗ 删除失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  const eventCmd = productCmd
    .command('event')
    .description('Manage product events');

  addCommonOptions(
    eventCmd
      .command('list')
      .description('List events for a product')
      .requiredOption('--product-id <id>', 'Product ID')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await listProductEvents(ctx, opts.productId);

      if (opts.json) {
        printJson(result);
        return;
      }

      console.log(`✓ 获取成功，共 ${result.events.length} 条记录`);
      for (const event of result.events) {
        console.log(`  ${event.id} ${event.eventType} ${event.eventDate} ${event.note ?? ''}`);
      }
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    eventCmd
      .command('add')
      .description('Add an event to a product')
      .requiredOption('--product-id <id>', 'Product ID')
      .requiredOption('--event-type <type>', 'Event type (daily|health|mating|egg|change_mate)')
      .requiredOption('--event-date <date>', 'Event date (YYYY-MM-DD or ISO format)')
      .option('--male-product-id <id>', 'Male product ID')
      .option('--old-mate-product-id <id>', 'Old mate product ID')
      .option('--new-mate-product-id <id>', 'New mate product ID')
      .option('--note <text>', 'Event note')
      .option('--egg-count <count>', 'Egg count')
      .option('--fertilized-count <count>', 'Fertilized egg count')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      console.log('正在添加事件...');

      const result = await addProductEvent(ctx, opts.productId, {
        eventType: opts.eventType,
        eventDate: opts.eventDate,
        ...(opts.maleProductId && { maleProductId: opts.maleProductId }),
        ...(opts.oldMateProductId && { oldMateProductId: opts.oldMateProductId }),
        ...(opts.newMateProductId && { newMateProductId: opts.newMateProductId }),
        ...(opts.note && { note: opts.note }),
        ...(opts.eggCount && { eggCount: parseOptionalInt(opts.eggCount) }),
        ...(opts.fertilizedCount && { fertilizedCount: parseOptionalInt(opts.fertilizedCount) }),
      });

      console.log('✓ 事件添加成功');
      console.log(`  事件 ID: ${result.event.id}`);
    } catch (err) {
      console.error(`✗ 添加失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    eventCmd
      .command('update')
      .description('Update a product event')
      .requiredOption('--product-id <id>', 'Product ID')
      .argument('<eventId>', 'Event ID')
      .option('--event-date <date>', 'Event date')
      .option('--male-product-id <id>', 'Male product ID')
      .option('--old-mate-product-id <id>', 'Old mate product ID')
      .option('--new-mate-product-id <id>', 'New mate product ID')
      .option('--note <text>', 'Event note')
      .option('--egg-count <count>', 'Egg count')
      .option('--fertilized-count <count>', 'Fertilized egg count')
  ).action(async (eventId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      console.log('正在更新事件...');

      const result = await updateProductEvent(ctx, opts.productId, eventId, {
        ...(opts.eventDate && { eventDate: opts.eventDate }),
        ...(opts.maleProductId && { maleProductId: opts.maleProductId }),
        ...(opts.oldMateProductId && { oldMateProductId: opts.oldMateProductId }),
        ...(opts.newMateProductId && { newMateProductId: opts.newMateProductId }),
        ...(opts.note && { note: opts.note }),
        ...(opts.eggCount && { eggCount: parseOptionalInt(opts.eggCount) }),
        ...(opts.fertilizedCount && { fertilizedCount: parseOptionalInt(opts.fertilizedCount) }),
      });

      console.log('✓ 事件更新成功');
      console.log(`  事件 ID: ${result.event.id}`);
    } catch (err) {
      console.error(`✗ 更新失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    eventCmd
      .command('delete')
      .description('Delete a product event')
      .requiredOption('--product-id <id>', 'Product ID')
      .argument('<eventId>', 'Event ID')
  ).action(async (eventId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      console.log('正在删除事件...');

      const result = await deleteProductEvent(ctx, opts.productId, eventId);
      console.log(`✓ 事件删除成功: ${result.eventId}`);
    } catch (err) {
      console.error(`✗ 删除失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  const imageCmd = productCmd
    .command('image')
    .description('Manage product images');

  addCommonOptions(
    imageCmd
      .command('list')
      .description('List product images')
      .requiredOption('--product-id <id>', 'Product ID')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await listProductImages(ctx, opts.productId);
      opts.json ? printJson(result) : console.log(`✓ 获取成功，共 ${result.images.length} 张图片`);
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    imageCmd
      .command('upload')
      .description('Upload an image for a product')
      .requiredOption('--product-id <id>', 'Product ID')
      .requiredOption('--file <path>', 'Image file path')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      console.log('正在上传图片...');

      const result = await uploadProductImage(ctx, opts.productId, opts.file);

      console.log('✓ 图片上传成功');
      console.log(`  图片 ID: ${result.image.id}`);
      console.log(`  图片 Key: ${result.image.key}`);
      if (result.image.url) console.log(`  图片 URL: ${result.image.url}`);
    } catch (err) {
      console.error(`✗ 上传失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    imageCmd
      .command('set-main')
      .description('Set main product image')
      .requiredOption('--product-id <id>', 'Product ID')
      .argument('<imageId>', 'Image ID')
  ).action(async (imageId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await setMainProductImage(ctx, opts.productId, imageId);
      console.log(`✓ 主图设置成功: ${result.image.id}`);
    } catch (err) {
      console.error(`✗ 设置失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    imageCmd
      .command('delete')
      .description('Delete product image')
      .requiredOption('--product-id <id>', 'Product ID')
      .argument('<imageId>', 'Image ID')
  ).action(async (imageId, opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await deleteProductImage(ctx, opts.productId, imageId);
      console.log(`✓ 图片删除成功: ${result.imageId}`);
    } catch (err) {
      console.error(`✗ 删除失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    imageCmd
      .command('reorder')
      .description('Reorder product images')
      .requiredOption('--product-id <id>', 'Product ID')
      .requiredOption('--image-ids <ids>', 'Comma separated image IDs')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await reorderProductImages(ctx, opts.productId, {
        imageIds: parseCsv(opts.imageIds) ?? [],
      });
      console.log(`✓ 图片排序成功，共 ${result.images.length} 张`);
    } catch (err) {
      console.error(`✗ 排序失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    productCmd
      .command('gallery')
      .description('List product gallery items')
      .requiredOption('--product-id <id>', 'Product ID')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await listProductGallery(ctx, opts.productId);
      opts.json ? printJson(result) : console.log(`✓ 获取成功，共 ${result.items.length} 个图库项`);
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  const matingCmd = productCmd
    .command('mating')
    .description('Manage mating records');

  addCommonOptions(
    matingCmd
      .command('add')
      .description('Add a mating record')
      .requiredOption('--female-product-id <id>', 'Female product ID')
      .requiredOption('--male-product-id <id>', 'Male product ID')
      .requiredOption('--event-date <date>', 'Event date (YYYY-MM-DD or ISO format)')
      .option('--note <text>', 'Note')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      console.log('正在添加配种记录...');

      const result = await createMatingRecord(ctx, {
        femaleProductId: opts.femaleProductId,
        maleProductId: opts.maleProductId,
        eventDate: opts.eventDate,
        ...(opts.note && { note: opts.note }),
      });

      console.log('✓ 配种记录添加成功');
      console.log(`  事件 ID: ${result.event.id}`);
    } catch (err) {
      console.error(`✗ 添加失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  const eggCmd = productCmd
    .command('egg')
    .description('Manage egg records');

  addCommonOptions(
    eggCmd
      .command('add')
      .description('Add an egg record')
      .requiredOption('--female-product-id <id>', 'Female product ID')
      .requiredOption('--event-date <date>', 'Event date (YYYY-MM-DD or ISO format)')
      .option('--egg-count <count>', 'Egg count')
      .option('--fertilized-count <count>', 'Fertilized egg count')
      .option('--note <text>', 'Note')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      console.log('正在添加产蛋记录...');

      const result = await createEggRecord(ctx, {
        femaleProductId: opts.femaleProductId,
        eventDate: opts.eventDate,
        ...(opts.eggCount && { eggCount: parseOptionalInt(opts.eggCount) }),
        ...(opts.fertilizedCount && { fertilizedCount: parseOptionalInt(opts.fertilizedCount) }),
        ...(opts.note && { note: opts.note }),
      });

      console.log('✓ 产蛋记录添加成功');
      console.log(`  事件 ID: ${result.event.id}`);
    } catch (err) {
      console.error(`✗ 添加失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    productCmd
      .command('mating-history')
      .description('View mating history for a male product')
      .requiredOption('--product-id <id>', 'Male product ID')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await getMatingHistory(ctx, opts.productId);
      opts.json ? printJson(result) : console.log(`✓ 获取成功，共 ${result.items.length} 条记录`);
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });

  addCommonOptions(
    productCmd
      .command('family-tree')
      .description('View family tree for a product')
      .requiredOption('--product-id <id>', 'Product ID')
      .option('--json', 'Output full JSON')
  ).action(async (opts) => {
    try {
      const { ctx } = await resolveCommandContext(opts);
      const result = await getFamilyTree(ctx, opts.productId);

      if (opts.json) {
        printJson(result);
      } else {
        console.log('✓ 获取成功');
        console.log(`  结构摘要: ${JSON.stringify(result.tree).substring(0, 150)}...`);
      }
    } catch (err) {
      console.error(`✗ 获取失败: ${describeError(err)}`);
      process.exit(1);
    }
  });
}