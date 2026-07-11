import { Command } from 'commander';
import { resolveCommandContext, ensureSuperAdmin } from './_context';
import {
  listAdminUsers,
  getAdminUser,
  setAdminUserSuperAdmin,
  listAdminTenantMembers,
  upsertAdminTenantMember,
  removeAdminTenantMember,
} from '../client/admin-users';
import { describeError } from '../client/errors';

const TENANT_ROLES = ['OWNER', 'ADMIN', 'EDITOR', 'VIEWER'] as const;

function formatUserLine(user: {
  id: string;
  email: string;
  account?: string | null;
  name?: string | null;
  phone?: string | null;
  isSuperAdmin: boolean;
}): string {
  const badge = user.isSuperAdmin ? ' [超管]' : '';
  const name = user.name || user.account || '-';
  return `${user.id}  ${name}${badge}  ${user.email}  ${user.phone ?? '-'}`;
}

export function registerUserCommands(program: Command): void {
  const userCmd = program
    .command('user')
    .description('Manage platform users and roles (superadmin)');

  userCmd
    .command('list')
    .description('List platform users')
    .option('--search <keyword>', 'Search by email/account/name/phone')
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

        console.log('正在获取用户列表...');

        const result = await listAdminUsers(ctx, opts.search ? { search: opts.search } : undefined);

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功，共 ${result.users.length} 个用户`);
          for (const user of result.users) {
            console.log(`  ${formatUserLine(user)}`);
          }
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  userCmd
    .command('get')
    .description('Get platform user detail')
    .argument('<userId>', 'User ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .option('--json', 'Output full JSON')
    .action(async (userId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });
        await ensureSuperAdmin(ctx);

        console.log('正在获取用户详情...');

        const result = await getAdminUser(ctx, userId);

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          const user = result.user;
          console.log('✓ 获取成功');
          console.log(`  ${formatUserLine(user)}`);
          console.log(`  注册时间: ${user.createdAt}`);
          console.log(`  名下租户: ${user.ownedTenants.map((tenant) => tenant.slug).join(', ') || '-'}`);
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  userCmd
    .command('grant-super-admin')
    .description('Grant platform super-admin to a user')
    .argument('<userId>', 'User ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (userId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });
        await ensureSuperAdmin(ctx);

        console.log('正在授予超级管理员权限...');

        const result = await setAdminUserSuperAdmin(ctx, userId, { isSuperAdmin: true });

        if (result.previousIsSuperAdmin) {
          console.log(`✓ 用户 ${result.user.email} 已经是超级管理员，无变化`);
        } else {
          console.log(`✓ 已授予超级管理员: ${result.user.email}`);
        }
        console.log(`  审计日志: ${result.auditLogId}`);
      } catch (err) {
        console.error(`✗ 授予失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  userCmd
    .command('revoke-super-admin')
    .description('Revoke platform super-admin from a user')
    .argument('<userId>', 'User ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (userId, opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });
        await ensureSuperAdmin(ctx);

        console.log('正在撤销超级管理员权限...');

        const result = await setAdminUserSuperAdmin(ctx, userId, { isSuperAdmin: false });

        if (result.previousIsSuperAdmin) {
          console.log(`✓ 已撤销超级管理员: ${result.user.email}`);
        } else {
          console.log(`✓ 用户 ${result.user.email} 本来就不是超级管理员，无变化`);
        }
        console.log(`  审计日志: ${result.auditLogId}`);
      } catch (err) {
        console.error(`✗ 撤销失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  userCmd
    .command('members')
    .description('List members of a tenant')
    .requiredOption('--tenant-id <id>', 'Tenant ID')
    .option('--search <keyword>', 'Search members')
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

        console.log('正在获取租户成员列表...');

        const result = await listAdminTenantMembers(
          ctx,
          opts.tenantId,
          opts.search ? { search: opts.search } : undefined
        );

        if (opts.json) {
          console.log(JSON.stringify(result, null, 2));
        } else {
          console.log(`✓ 获取成功，共 ${result.members.length} 个成员`);
          for (const member of result.members) {
            console.log(`  ${member.user.id}  ${member.user.name || '-'}  ${member.user.email}  ${member.role}`);
          }
        }
      } catch (err) {
        console.error(`✗ 获取失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  userCmd
    .command('grant-role')
    .description('Grant a tenant role (OWNER/ADMIN/EDITOR/VIEWER) to a user by email')
    .requiredOption('--tenant-id <id>', 'Tenant ID')
    .requiredOption('--email <email>', 'User email')
    .requiredOption('--role <role>', `Tenant role (${TENANT_ROLES.join('/')})`)
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (opts) => {
      try {
        const role = String(opts.role).toUpperCase();
        if (!TENANT_ROLES.includes(role as (typeof TENANT_ROLES)[number])) {
          throw new Error(`无效角色 ${opts.role}，可选: ${TENANT_ROLES.join('/')}`);
        }

        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });
        await ensureSuperAdmin(ctx);

        console.log('正在设置租户成员角色...');

        const result = await upsertAdminTenantMember(ctx, opts.tenantId, {
          email: opts.email,
          role: role as (typeof TENANT_ROLES)[number],
        });

        const change = result.created
          ? '新加入'
          : `${result.previousRole ?? '-'} → ${result.role}`;
        console.log(`✓ 设置成功: ${result.user.email} 在租户 ${result.tenantId} 的角色为 ${result.role}（${change}）`);
        console.log(`  审计日志: ${result.auditLogId}`);
      } catch (err) {
        console.error(`✗ 设置失败: ${describeError(err)}`);
        process.exit(1);
      }
    });

  userCmd
    .command('remove-member')
    .description('Remove a member from a tenant')
    .requiredOption('--tenant-id <id>', 'Tenant ID')
    .requiredOption('--user-id <id>', 'User ID')
    .option('--profile <name>', 'Profile name')
    .option('--api-base <url>', 'API base URL')
    .action(async (opts) => {
      try {
        const { ctx } = await resolveCommandContext({
          profile: opts.profile,
          apiBase: opts.apiBase,
        });
        await ensureSuperAdmin(ctx);

        console.log('正在移除租户成员...');

        const result = await removeAdminTenantMember(ctx, opts.tenantId, opts.userId);

        if (result.removed) {
          console.log(`✓ 移除成功（原角色 ${result.previousRole ?? '-'}）`);
        } else {
          console.log('✓ 该用户不是租户成员，无变化');
        }
      } catch (err) {
        console.error(`✗ 移除失败: ${describeError(err)}`);
        process.exit(1);
      }
    });
}
