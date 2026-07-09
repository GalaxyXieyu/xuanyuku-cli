import { Command } from 'commander';
import { createAuthContext } from '../client/context';
import { parseIntake, submitIntakeWithImages } from '../client/ai-assistant';
import { resolveApiBase, loadGlobalConfig } from '../client/config';
import { describeError } from '../client/errors';

export function registerAiCommands(program: Command): void {
  const aiCmd = program
    .command('ai')
    .description('AI assistant commands');

  const intakeCmd = aiCmd
    .command('intake')
    .description('AI product intake commands');

  intakeCmd
    .command('parse')
    .description('Parse product intake input (preview only, no record created)')
    .requiredOption('--input <text>', 'Product description text')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--reference-date <date>', 'Reference date (YYYY-MM-DD)')
    .option('--timezone <tz>', 'Timezone (e.g., Asia/Shanghai)')
    .option('--image-count <count>', 'Number of images (0-9)')
    .action(async (opts) => {
      try {
        // Resolve profile and API base
        let profileName = opts.profile;
        if (!profileName) {
          const config = await loadGlobalConfig();
          profileName = config.defaultProfile || 'default';
        }

        let apiBase = opts.apiBase;
        if (!apiBase) {
          apiBase = await resolveApiBase({
            apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL,
          });
        }

        const ctx = await createAuthContext(apiBase, profileName);

        console.log('正在解析...');

        const payload = {
          input: opts.input,
          ...(opts.referenceDate && { referenceDate: opts.referenceDate }),
          ...(opts.timezone && { timezone: opts.timezone }),
          ...(opts.imageCount && { imageCount: parseInt(opts.imageCount, 10) }),
        };

        const result = await parseIntake(ctx, payload);

        console.log(`✓ 解析完成（预览，不会建档）`);
        if (result.result) {
          console.log('\n解析结果:');
          const r = result.result;
          if (r.fields) {
            console.log('  识别字段:');
            if (r.fields.alias) console.log(`    - 别名: ${r.fields.alias}`);
            if (r.fields.sex) console.log(`    - 性别: ${r.fields.sex}`);
            if (r.fields.seriesName) console.log(`    - 系列: ${r.fields.seriesName}`);
          }
          if (r.warnings && r.warnings.length > 0) {
            console.log('  注意事项:');
            r.warnings.forEach((w) => console.log(`    - ${w}`));
          }
        }
      } catch (err) {
        console.error(`✗ 解析失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  intakeCmd
    .command('submit')
    .description('Submit product intake and create product record')
    .requiredOption('--input <text>', 'Product description text')
    .option('--image <path...>', 'Image file paths (at least 1 required)')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--reference-date <date>', 'Reference date (YYYY-MM-DD)')
    .option('--timezone <tz>', 'Timezone (e.g., Asia/Shanghai)')
    .action(async (opts) => {
      try {
        // Validate at least one image
        const imagePaths = opts.image || [];
        if (imagePaths.length === 0) {
          console.error('✗ 至少需要指定 1 张图片，请使用 --image <path> 指定');
          process.exit(1);
        }

        // Resolve profile and API base
        let profileName = opts.profile;
        if (!profileName) {
          const config = await loadGlobalConfig();
          profileName = config.defaultProfile || 'default';
        }

        let apiBase = opts.apiBase;
        if (!apiBase) {
          apiBase = await resolveApiBase({
            apiBaseEnv: process.env.XUANYUKU_CLI_API_BASE_URL,
          });
        }

        const ctx = await createAuthContext(apiBase, profileName);

        console.log('正在提交建档请求...');

        const payload = {
          input: opts.input,
          imageCount: imagePaths.length,
          ...(opts.referenceDate && { referenceDate: opts.referenceDate }),
          ...(opts.timezone && { timezone: opts.timezone }),
        };

        const result = await submitIntakeWithImages(ctx, payload, imagePaths);

        console.log(`✓ 建档成功`);
        console.log(`  产品 ID: ${result.productId}`);
        console.log(`  已上传图片: ${result.uploadedCount}/${imagePaths.length}`);
        console.log('\n后续异步任务会进一步修正产品字段和描述');
      } catch (err) {
        console.error(`✗ 建档失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
