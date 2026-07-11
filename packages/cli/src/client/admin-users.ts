import {
  listAdminUsersQuerySchema,
  listAdminUsersResponseSchema,
  getAdminUserResponseSchema,
  setAdminUserSuperAdminRequestSchema,
  setAdminUserSuperAdminResponseSchema,
  listAdminTenantMembersQuerySchema,
  listAdminTenantMembersResponseSchema,
  upsertTenantMemberRequestSchema,
  upsertTenantMemberResponseSchema,
  deleteTenantMemberResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

// Admin 用户/成员管理走 /api/proxy 前缀，与 guiquan-community.ts 同一组
// 全部超管 + @UseGuards 约束

export async function listAdminUsers(
  ctx: AuthedContext,
  query?: z.infer<typeof listAdminUsersQuerySchema>
): Promise<z.infer<typeof listAdminUsersResponseSchema>> {
  const parsedQuery = query ? listAdminUsersQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/users',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listAdminUsersResponseSchema.parse(response.body);
}

export async function getAdminUser(
  ctx: AuthedContext,
  userId: string
): Promise<z.infer<typeof getAdminUserResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/api/proxy/admin/users/${userId}`,
  });

  return getAdminUserResponseSchema.parse(response.body);
}

export async function setAdminUserSuperAdmin(
  ctx: AuthedContext,
  userId: string,
  payload: z.infer<typeof setAdminUserSuperAdminRequestSchema>
): Promise<z.infer<typeof setAdminUserSuperAdminResponseSchema>> {
  const body = setAdminUserSuperAdminRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PUT',
    path: `/api/proxy/admin/users/${userId}/super-admin`,
    json: body,
  });

  return setAdminUserSuperAdminResponseSchema.parse(response.body);
}

export async function listAdminTenantMembers(
  ctx: AuthedContext,
  tenantId: string,
  query?: z.infer<typeof listAdminTenantMembersQuerySchema>
): Promise<z.infer<typeof listAdminTenantMembersResponseSchema>> {
  const parsedQuery = query ? listAdminTenantMembersQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: `/api/proxy/admin/tenants/${tenantId}/members`,
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listAdminTenantMembersResponseSchema.parse(response.body);
}

export async function upsertAdminTenantMember(
  ctx: AuthedContext,
  tenantId: string,
  payload: z.infer<typeof upsertTenantMemberRequestSchema>
): Promise<z.infer<typeof upsertTenantMemberResponseSchema>> {
  const body = upsertTenantMemberRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/tenants/${tenantId}/members`,
    json: body,
  });

  return upsertTenantMemberResponseSchema.parse(response.body);
}

export async function removeAdminTenantMember(
  ctx: AuthedContext,
  tenantId: string,
  userId: string
): Promise<z.infer<typeof deleteTenantMemberResponseSchema>> {
  const response = await ctx.request({
    method: 'DELETE',
    path: `/api/proxy/admin/tenants/${tenantId}/members/${userId}`,
  });

  return deleteTenantMemberResponseSchema.parse(response.body);
}
