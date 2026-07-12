import * as fs from 'node:fs/promises';
import { Command } from 'commander';
import { resolveCommandContext, ensureSuperAdmin } from './_context';
import {
  listAdminGuiquanPosts,
  getAdminGuiquanPost,
  createAdminGuiquanPost,
  updateAdminGuiquanPost,
  submitAdminGuiquanPost,
  publishAdminGuiquanPost,
  rejectAdminGuiquanPost,
  archiveAdminGuiquanPost,
  restoreAdminGuiquanPost,
  updateAdminGuiquanCommentStatus,
  updateAdminGuiquanReportStatus,
} from '../client/guiquan-community';
import {
  listAnnouncements,
  createAnnouncementDraft,
  publishAnnouncement,
} from '../client/announcements';
import { describeError } from '../client/errors';

export function registerArticleCommands(program: Command): void {
  const articleCmd = program
    .command('article')
    .description('Manage articles and announcements (superadmin only)');

  // Guiquan subcommand group
  const guiquanCmd = articleCmd
    .command('guiquan')
    .description('Manage guiquan community posts');

  guiquanCmd
    .command('list')
    .description('List guiquan posts')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--tenant-id <id>', 'Filter by tenant ID')
    .option('--status <status>', 'Filter by status')
    .option('--source-type <type>', 'Filter by source type (PLATFORM|TENANT)')
    .option('--tag <tag>', 'Filter by tag')
    .option('--report-status <status>', 'Filter by report status')
    .option('--keyword <text>', 'Search keyword')
    .option('--json', 'Output full JSON')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在获取龟圈社区帖子...');

        const result = await listAdminGuiquanPosts(ctx, {
          ...(opts.tenantId && { tenantId: opts.tenantId }),
          ...(opts.status && { status: opts.status }),
          ...(opts.sourceType && { sourceType: opts.sourceType as 'PLATFORM' | 'TENANT' }),
          ...(opts.tag && { tag: opts.tag }),
          ...(opts.reportStatus && { reportStatus: opts.reportStatus }),
          ...(opts.keyword && { keyword: opts.keyword }),
        });

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功，共 ${result.posts?.length || 0} 篇`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  guiquanCmd
    .command('get')
    .description('Get a guiquan post')
    .argument('<postId>', 'Post ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--json', 'Output full JSON')
    .action(async (postId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在获取帖子...');

        const result = await getAdminGuiquanPost(ctx, postId);

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功`);
          if (result.post) {
            console.log(`  标题: ${result.post.title || 'N/A'}`);
          }
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  guiquanCmd
    .command('create')
    .description('Create a guiquan post')
    .requiredOption('--tag <tag>', 'Tag (精选|经验|问答|官方)')
    .requiredOption('--title <text>', 'Title')
    .requiredOption('--summary <text>', 'Summary')
    .requiredOption('--author-name <name>', 'Author name')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--source-type <type>', 'Source type (PLATFORM|TENANT)')
    .option('--tenant-id <id>', 'Tenant ID')
    .option('--content-file <path>', 'Content file path (JSON)')
    .option('--pinned', 'Pin the post')
    .option('--featured', 'Feature the post')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在创建帖子...');

        let contentDoc;
        let contentBlocks;
        if (opts.contentFile) {
          try {
            const fileContent = await fs.readFile(opts.contentFile, 'utf-8');
            const parsed = JSON.parse(fileContent);
            if (parsed.version && parsed.blocks) {
              contentDoc = parsed;
            } else if (Array.isArray(parsed)) {
              contentBlocks = parsed;
            }
          } catch (err) {
            console.error(`✗ 内容文件读取失败: ${err instanceof Error ? err.message : String(err)}`);
            process.exit(1);
          }
        }

        const result = await createAdminGuiquanPost(ctx, {
          tag: opts.tag as '精选' | '经验' | '问答' | '官方',
          title: opts.title,
          summary: opts.summary,
          authorName: opts.authorName,
          ...(opts.sourceType && { sourceType: opts.sourceType as 'PLATFORM' | 'TENANT' }),
          ...(opts.tenantId && { tenantId: opts.tenantId }),
          ...(contentDoc && { contentDoc }),
          ...(contentBlocks && { contentBlocks }),
          ...(opts.pinned && { isPinned: true }),
          ...(opts.featured && { isFeatured: true }),
        });

        if (result.post) {
          console.log(`✓ 帖子创建成功`);
          console.log(`  帖子 ID: ${result.post.id}`);
        }
      } catch (err) {
        console.error(`✗ 创建失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  guiquanCmd
    .command('update')
    .description('Update a guiquan post')
    .argument('<postId>', 'Post ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--tag <tag>', 'Tag (精选|经验|问答|官方)')
    .option('--title <text>', 'Title')
    .option('--summary <text>', 'Summary')
    .option('--author-name <name>', 'Author name')
    .option('--content-file <path>', 'Content file path (JSON)')
    .option('--pinned', 'Pin the post')
    .option('--featured', 'Feature the post')
    .action(async (postId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在更新帖子...');

        let contentDoc;
        let contentBlocks;
        if (opts.contentFile) {
          try {
            const fileContent = await fs.readFile(opts.contentFile, 'utf-8');
            const parsed = JSON.parse(fileContent);
            if (parsed.version && parsed.blocks) {
              contentDoc = parsed;
            } else if (Array.isArray(parsed)) {
              contentBlocks = parsed;
            }
          } catch (err) {
            console.error(`✗ 内容文件读取失败: ${err instanceof Error ? err.message : String(err)}`);
            process.exit(1);
          }
        }

        const result = await updateAdminGuiquanPost(ctx, postId, {
          ...(opts.tag && { tag: opts.tag as '精选' | '经验' | '问答' | '官方' }),
          ...(opts.title && { title: opts.title }),
          ...(opts.summary && { summary: opts.summary }),
          ...(opts.authorName && { authorName: opts.authorName }),
          ...(contentDoc && { contentDoc }),
          ...(contentBlocks && { contentBlocks }),
          ...(opts.pinned && { isPinned: true }),
          ...(opts.featured && { isFeatured: true }),
        });

        if (result.post) {
          console.log(`✓ 帖子更新成功`);
        }
      } catch (err) {
        console.error(`✗ 更新失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  guiquanCmd
    .command('submit')
    .description('Submit a guiquan post for review')
    .argument('<postId>', 'Post ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (postId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在提交帖子...');

        const result = await submitAdminGuiquanPost(ctx, postId);

        if (result.post) {
          console.log(`✓ 帖子提交成功`);
        }
      } catch (err) {
        console.error(`✗ 提交失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  guiquanCmd
    .command('publish')
    .description('Publish a guiquan post (changes visibility)')
    .argument('<postId>', 'Post ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (postId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('该操作会改变帖子对外可见状态');
        console.log('正在发布帖子...');

        const result = await publishAdminGuiquanPost(ctx, postId);

        if (result.post) {
          console.log(`✓ 帖子发布成功`);
        }
      } catch (err) {
        console.error(`✗ 发布失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  guiquanCmd
    .command('reject')
    .description('Reject a guiquan post')
    .argument('<postId>', 'Post ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--review-note <text>', 'Review note')
    .action(async (postId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在拒绝帖子...');

        const result = await rejectAdminGuiquanPost(ctx, postId, {
          ...(opts.reviewNote && { reviewNote: opts.reviewNote }),
        });

        if (result.post) {
          console.log(`✓ 帖子拒绝成功`);
        }
      } catch (err) {
        console.error(`✗ 拒绝失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  guiquanCmd
    .command('archive')
    .description('Archive a guiquan post')
    .argument('<postId>', 'Post ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (postId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在归档帖子...');

        const result = await archiveAdminGuiquanPost(ctx, postId);

        if (result.post) {
          console.log(`✓ 帖子归档成功`);
        }
      } catch (err) {
        console.error(`✗ 归档失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  guiquanCmd
    .command('restore')
    .description('Restore an archived guiquan post back to published')
    .argument('<postId>', 'Post ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (postId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在恢复帖子...');

        const result = await restoreAdminGuiquanPost(ctx, postId);

        if (result.post) {
          console.log(`✓ 帖子恢复上架成功（状态 ${result.post.status}）`);
        }
      } catch (err) {
        console.error(`✗ 恢复失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  const commentCmd = guiquanCmd
    .command('comment')
    .description('Manage guiquan comments');

  commentCmd
    .command('status')
    .description('Update comment status')
    .requiredOption('--post-id <id>', 'Post ID')
    .argument('<commentId>', 'Comment ID')
    .requiredOption('--status <status>', 'Comment status (VISIBLE|HIDDEN|DELETED)')
    .option('--hidden-reason <text>', 'Hidden reason')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (commentId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        const result = await updateAdminGuiquanCommentStatus(ctx, opts.postId, commentId, {
          status: opts.status,
          ...(opts.hiddenReason && { hiddenReason: opts.hiddenReason }),
        });

        console.log(`✓ 评论状态更新成功: ${result.comment.id}`);
      } catch (err) {
        console.error(`✗ 更新失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  const reportCmd = guiquanCmd
    .command('report')
    .description('Manage guiquan reports');

  reportCmd
    .command('status')
    .description('Update report status')
    .argument('<reportId>', 'Report ID')
    .requiredOption('--status <status>', 'Report status (RESOLVED|DISMISSED)')
    .option('--operator-note <text>', 'Operator note')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (reportId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        const result = await updateAdminGuiquanReportStatus(ctx, reportId, {
          status: opts.status,
          ...(opts.operatorNote && { operatorNote: opts.operatorNote }),
        });

        console.log(`✓ 举报状态更新成功: ${result.report.id}`);
      } catch (err) {
        console.error(`✗ 更新失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  // Announcement subcommand group
  const announcementCmd = articleCmd
    .command('announcement')
    .description('Manage announcements');

  announcementCmd
    .command('list')
    .description('List announcements')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--status <status>', 'Filter by status')
    .option('--audience <audience>', 'Filter by audience')
    .option('--limit <n>', 'Result limit')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在获取公告列表...');

        const result = await listAnnouncements(ctx, {
          ...(opts.status && { status: opts.status }),
          ...(opts.audience && { audience: opts.audience }),
          ...(opts.limit && { limit: parseInt(opts.limit, 10) }),
        });

        console.log(`✓ 获取成功，共 ${result.announcements?.length || 0} 条`);
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  announcementCmd
    .command('create')
    .description('Create an announcement')
    .requiredOption('--release-date <date>', 'Release date (YYYY-MM-DD)')
    .requiredOption('--title <text>', 'Title')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--audience <audience>', 'Audience (TENANT_APP|PUBLIC_PAGE|TENANT_AND_PUBLIC)')
    .option('--subtitle <text>', 'Subtitle')
    .option('--summary <text>', 'Summary')
    .option('--features-file <path>', 'Features JSON file path')
    .option('--fixes <fixes...>', 'Fix descriptions')
    .option('--poster-url <url>', 'Poster URL')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('正在创建公告...');

        let features = [];
        if (opts.featuresFile) {
          try {
            const fileContent = await fs.readFile(opts.featuresFile, 'utf-8');
            features = JSON.parse(fileContent);
          } catch (err) {
            console.error(`✗ 特性文件读取失败: ${err instanceof Error ? err.message : String(err)}`);
            process.exit(1);
          }
        }

        const result = await createAnnouncementDraft(ctx, {
          releaseDate: opts.releaseDate,
          title: opts.title,
          ...(opts.audience && { audience: opts.audience as 'TENANT_APP' | 'PUBLIC_PAGE' | 'TENANT_AND_PUBLIC' }),
          ...(opts.subtitle && { subtitle: opts.subtitle }),
          ...(opts.summary && { summary: opts.summary }),
          features,
          ...(opts.fixes && { fixes: opts.fixes }),
          ...(opts.posterUrl && { posterUrl: opts.posterUrl }),
        });

        if (result.announcement) {
          console.log(`✓ 公告创建成功`);
          console.log(`  公告 ID: ${result.announcement.id}`);
        }
      } catch (err) {
        console.error(`✗ 创建失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  announcementCmd
    .command('publish')
    .description('Publish an announcement (changes visibility)')
    .argument('<announcementId>', 'Announcement ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (announcementId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });

        await ensureSuperAdmin(ctx);

        console.log('该操作会改变公告对外可见状态');
        console.log('正在发布公告...');

        const result = await publishAnnouncement(ctx, announcementId);

        if (result.announcement) {
          console.log(`✓ 公告发布成功`);
        }
      } catch (err) {
        console.error(`✗ 发布失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
