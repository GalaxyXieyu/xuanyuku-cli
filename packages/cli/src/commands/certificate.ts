import { Command } from 'commander';
import { resolveCommandContext } from './_context';
import {
  getCertificateEligibility,
  previewCertificate,
  confirmCertificate,
  listCertificates,
  listCertificateCenter,
  voidCertificate,
  reissueCertificatePreview,
  reissueCertificateConfirm,
  downloadCertificateContent,
  generateCouplePhoto,
  getCurrentCouplePhoto,
  listCouplePhotoHistory,
  downloadCouplePhotoContent,
  uploadSaleSubjectMedia,
} from '../client/certificates';
import { describeError } from '../client/errors';

export function registerCertificateCommands(program: Command): void {
  const certCmd = program
    .command('cert')
    .description('Manage product certificates');

  certCmd
    .command('eligibility')
    .description('Check certificate eligibility')
    .requiredOption('--product-id <id>', 'Product ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在检查证书资格...');

        const result = await getCertificateEligibility(ctx, opts.productId);

        console.log(`✓ 检查成功`);
        const data = result as Record<string, unknown>;
        console.log(`  资格状态: ${JSON.stringify(data).substring(0, 100)}...`);
      } catch (err) {
        console.error(`✗ 检查失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // Subject media subcommand
  const mediaCmd = certCmd
    .command('subject-media')
    .description('Manage certificate subject media');

  mediaCmd
    .command('upload')
    .description('Upload subject media for certification')
    .requiredOption('--product-id <id>', 'Product ID')
    .requiredOption('--file <path>', 'Media file path')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--sale-batch-id <id>', 'Sale batch ID')
    .option('--egg-event-id <id>', 'Egg event ID')
    .option('--label <text>', 'Label')
    .option('--primary', 'Mark as primary')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在上传素材...');

        const result = await uploadSaleSubjectMedia(ctx, opts.productId, opts.file, {
          ...(opts.saleBatchId && { saleBatchId: opts.saleBatchId }),
          ...(opts.eggEventId && { eggEventId: opts.eggEventId }),
          ...(opts.label && { label: opts.label }),
          ...(opts.primary && { isPrimary: true }),
        });

        console.log(`✓ 素材上传成功`);
        const data = result as Record<string, unknown>;
        if (data.media) {
          console.log(`  素材 ID: ${(data.media as Record<string, unknown>).id || 'N/A'}`);
          console.log(`  （出证时用 --subject-media-id 传入该 ID）`);
        }
      } catch (err) {
        console.error(`✗ 上传失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // Issue subcommand group
  const issueCmd = certCmd
    .command('issue')
    .description('Issue certificates');

  issueCmd
    .command('preview')
    .description('Preview certificate (no quota deduction)')
    .requiredOption('--product-id <id>', 'Product ID')
    .requiredOption('--egg-event-id <id>', 'Egg event ID')
    .requiredOption('--subject-media-id <id>', 'Subject media ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--template-version <version>', 'Template version')
    .option('--buyer-name <name>', 'Buyer name')
    .option('--buyer-account-id <id>', 'Buyer account ID')
    .option('--buyer-contact <contact>', 'Buyer contact')
    .option('--quantity <n>', 'Quantity')
    .option('--unit-price <price>', 'Unit price')
    .option('--channel <channel>', 'Sales channel')
    .option('--campaign-id <id>', 'Campaign ID')
    .option('--sold-at <datetime>', 'Sold at (ISO datetime)')
    .option('--note <text>', 'Note')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('仅预览，不落库，不扣配额');
        console.log('正在预览证书...');

        const result = await previewCertificate(ctx, opts.productId, {
          eggEventId: opts.eggEventId,
          subjectMediaId: opts.subjectMediaId,
          ...(opts.templateVersion && { templateVersion: opts.templateVersion }),
          ...(opts.buyerName && { buyerName: opts.buyerName }),
          ...(opts.buyerAccountId && { buyerAccountId: opts.buyerAccountId }),
          ...(opts.buyerContact && { buyerContact: opts.buyerContact }),
          ...(opts.quantity && { quantity: parseInt(opts.quantity, 10) }),
          ...(opts.unitPrice && { unitPrice: parseFloat(opts.unitPrice) }),
          ...(opts.channel && { channel: opts.channel }),
          ...(opts.campaignId && { campaignId: opts.campaignId }),
          ...(opts.soldAt && { soldAt: opts.soldAt }),
          ...(opts.note && { note: opts.note }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 预览成功`);
          const data = result as Record<string, unknown>;
          if (data.preview) {
            console.log(`  预览已生成（base64）`);
          }
        }
      } catch (err) {
        console.error(`✗ 预览失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  issueCmd
    .command('confirm')
    .description('Confirm and issue certificate (deducts quota)')
    .requiredOption('--product-id <id>', 'Product ID')
    .requiredOption('--egg-event-id <id>', 'Egg event ID')
    .requiredOption('--subject-media-id <id>', 'Subject media ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--template-version <version>', 'Template version')
    .option('--buyer-name <name>', 'Buyer name')
    .option('--buyer-account-id <id>', 'Buyer account ID')
    .option('--buyer-contact <contact>', 'Buyer contact')
    .option('--quantity <n>', 'Quantity')
    .option('--unit-price <price>', 'Unit price')
    .option('--channel <channel>', 'Sales channel')
    .option('--campaign-id <id>', 'Campaign ID')
    .option('--sold-at <datetime>', 'Sold at (ISO datetime)')
    .option('--note <text>', 'Note')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('⚠  将扣减本月证书配额并生成正式证书');
        console.log('正在确认并生成证书...');

        const result = await confirmCertificate(ctx, opts.productId, {
          eggEventId: opts.eggEventId,
          subjectMediaId: opts.subjectMediaId,
          ...(opts.templateVersion && { templateVersion: opts.templateVersion }),
          ...(opts.buyerName && { buyerName: opts.buyerName }),
          ...(opts.buyerAccountId && { buyerAccountId: opts.buyerAccountId }),
          ...(opts.buyerContact && { buyerContact: opts.buyerContact }),
          ...(opts.quantity && { quantity: parseInt(opts.quantity, 10) }),
          ...(opts.unitPrice && { unitPrice: parseFloat(opts.unitPrice) }),
          ...(opts.channel && { channel: opts.channel }),
          ...(opts.campaignId && { campaignId: opts.campaignId }),
          ...(opts.soldAt && { soldAt: opts.soldAt }),
          ...(opts.note && { note: opts.note }),
        });

        if (result.certificate) {
          console.log(`✓ 证书生成成功`);
          const cert = result.certificate as Record<string, unknown>;
          console.log(`  证书号: ${cert.certNo || 'N/A'}`);
          console.log(`  验证 ID: ${cert.verifyId || 'N/A'}`);
        }
      } catch (err) {
        console.error(`✗ 生成失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  certCmd
    .command('list')
    .description('List certificates for a product')
    .requiredOption('--product-id <id>', 'Product ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在获取证书列表...');

        const result = await listCertificates(ctx, opts.productId);

        console.log(`✓ 获取成功，共 ${result.items?.length || 0} 份`);
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  certCmd
    .command('center')
    .description('View certificate center')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--product-id <id>', 'Filter by product ID')
    .option('--status <status>', 'Filter by status')
    .option('--batch-id <id>', 'Filter by batch ID')
    .option('--q <text>', 'Search query')
    .option('--limit <n>', 'Result limit')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在获取证书中心...');

        const result = await listCertificateCenter(ctx, {
          ...(opts.productId && { productId: opts.productId }),
          ...(opts.status && { status: opts.status }),
          ...(opts.batchId && { batchId: opts.batchId }),
          ...(opts.q && { q: opts.q }),
          ...(opts.limit && { limit: parseInt(opts.limit, 10) }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功，共 ${result.items?.length || 0} 份`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  certCmd
    .command('void')
    .description('Void a certificate')
    .argument('<certificateId>', 'Certificate ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--void-reason <text>', 'Void reason')
    .action(async (certificateId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在作废证书...');

        await voidCertificate(ctx, certificateId, {
          ...(opts.voidReason && { voidReason: opts.voidReason }),
        });

        console.log(`✓ 证书作废成功`);
      } catch (err) {
        console.error(`✗ 作废失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // Reissue subcommand group
  const reissueCmd = certCmd
    .command('reissue')
    .description('Reissue certificate');

  reissueCmd
    .command('preview')
    .description('Preview reissued certificate')
    .argument('<certificateId>', 'Certificate ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--subject-media-id <id>', 'Subject media ID')
    .option('--template-version <version>', 'Template version')
    .option('--void-reason <text>', 'Void reason')
    .option('--json', 'Output full JSON')
    .action(async (certificateId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在预览重新签发证书...');

        const result = await reissueCertificatePreview(ctx, certificateId, {
          ...(opts.subjectMediaId && { subjectMediaId: opts.subjectMediaId }),
          ...(opts.templateVersion && { templateVersion: opts.templateVersion }),
          ...(opts.voidReason && { voidReason: opts.voidReason }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 预览成功`);
        }
      } catch (err) {
        console.error(`✗ 预览失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  reissueCmd
    .command('confirm')
    .description('Confirm reissued certificate (deducts quota)')
    .argument('<certificateId>', 'Certificate ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--subject-media-id <id>', 'Subject media ID')
    .option('--template-version <version>', 'Template version')
    .option('--void-reason <text>', 'Void reason')
    .action(async (certificateId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('⚠  将扣减本月证书配额并重新签发证书');
        console.log('正在确认重新签发...');

        const result = await reissueCertificateConfirm(ctx, certificateId, {
          ...(opts.subjectMediaId && { subjectMediaId: opts.subjectMediaId }),
          ...(opts.templateVersion && { templateVersion: opts.templateVersion }),
          ...(opts.voidReason && { voidReason: opts.voidReason }),
        });

        if (result.certificate) {
          console.log(`✓ 证书重新签发成功`);
          const cert = result.certificate as Record<string, unknown>;
          console.log(`  证书号: ${cert.certNo || 'N/A'}`);
        }
      } catch (err) {
        console.error(`✗ 重新签发失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  certCmd
    .command('download')
    .description('Download certificate content')
    .argument('<productId>', 'Product ID')
    .argument('<certificateId>', 'Certificate ID')
    .requiredOption('--output <path>', 'Output file path')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--max-edge <n>', 'Max edge size')
    .action(async (productId, certificateId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在下载证书...');

        const result = await downloadCertificateContent(
          ctx,
          productId,
          certificateId,
          opts.output,
          opts.maxEdge ? parseInt(opts.maxEdge, 10) : undefined
        );

        console.log(`✓ 下载成功`);
        console.log(`  保存位置: ${result.path}`);
        console.log(`  文件大小: ${result.size} bytes`);
      } catch (err) {
        console.error(`✗ 下载失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // Couple-photo subcommand group
  const couplePhotoCmd = program
    .command('couple-photo')
    .description('Manage couple photos');

  couplePhotoCmd
    .command('generate')
    .description('Generate a couple photo')
    .requiredOption('--product-id <id>', 'Product ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--template-version <version>', 'Template version')
    .option('--channel <channel>', 'Sales channel')
    .option('--campaign-id <id>', 'Campaign ID')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在生成合影照...');

        const result = await generateCouplePhoto(ctx, opts.productId, {
          ...(opts.templateVersion && { templateVersion: opts.templateVersion }),
          ...(opts.channel && { channel: opts.channel }),
          ...(opts.campaignId && { campaignId: opts.campaignId }),
        });

        if (result.photo) {
          console.log(`✓ 合影照生成成功`);
          const photo = result.photo as Record<string, unknown>;
          console.log(`  照片 ID: ${photo.id || 'N/A'}`);
        }
      } catch (err) {
        console.error(`✗ 生成失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  couplePhotoCmd
    .command('current')
    .description('Get current couple photo')
    .requiredOption('--product-id <id>', 'Product ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在获取当前合影照...');

        const result = await getCurrentCouplePhoto(ctx, opts.productId);

        if (result.photo) {
          console.log(`✓ 获取成功`);
          const photo = result.photo as Record<string, unknown>;
          console.log(`  照片 ID: ${photo.id || 'N/A'}`);
        } else {
          console.log(`✓ 暂无当前合影照`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  couplePhotoCmd
    .command('history')
    .description('View couple photo history')
    .requiredOption('--product-id <id>', 'Product ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在获取合影照历史...');

        const result = await listCouplePhotoHistory(ctx, opts.productId);

        console.log(`✓ 获取成功，共 ${result.items?.length || 0} 张`);
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  couplePhotoCmd
    .command('download')
    .description('Download couple photo content')
    .argument('<productId>', 'Product ID')
    .argument('<photoId>', 'Photo ID')
    .requiredOption('--output <path>', 'Output file path')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--max-edge <n>', 'Max edge size')
    .action(async (productId, photoId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        console.log('正在下载合影照...');

        const result = await downloadCouplePhotoContent(
          ctx,
          productId,
          photoId,
          opts.output,
          opts.maxEdge ? parseInt(opts.maxEdge, 10) : undefined
        );

        console.log(`✓ 下载成功`);
        console.log(`  保存位置: ${result.path}`);
        console.log(`  文件大小: ${result.size} bytes`);
      } catch (err) {
        console.error(`✗ 下载失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
