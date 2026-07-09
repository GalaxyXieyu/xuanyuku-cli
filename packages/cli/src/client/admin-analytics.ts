import {
  getAdminActivityOverviewQuerySchema,
  getAdminUsageOverviewQuerySchema,
  getAdminRevenueOverviewQuerySchema,
  adminTenantLivestockOverviewResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

// Admin analytics走 /api/proxy 前缀，不在 web rewrites 白名单里
// 与 client/market-intelligence.ts 的 /api/proxy 组范式一致

export async function getAdminActivityOverview(
  ctx: AuthedContext,
  query?: z.infer<typeof getAdminActivityOverviewQuerySchema>
): Promise<Record<string, unknown>> {
  const parsedQuery = query ? getAdminActivityOverviewQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/analytics/activity/overview',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return response.body as Record<string, unknown>;
}

export async function getAdminUsageOverview(
  ctx: AuthedContext,
  query?: z.infer<typeof getAdminUsageOverviewQuerySchema>
): Promise<Record<string, unknown>> {
  const parsedQuery = query ? getAdminUsageOverviewQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/analytics/usage/overview',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return response.body as Record<string, unknown>;
}

export async function getAdminRevenueOverview(
  ctx: AuthedContext,
  query?: z.infer<typeof getAdminRevenueOverviewQuerySchema>
): Promise<Record<string, unknown>> {
  const parsedQuery = query ? getAdminRevenueOverviewQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/analytics/revenue/overview',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return response.body as Record<string, unknown>;
}

export async function getAdminTenantLivestockOverview(
  ctx: AuthedContext,
  tenantId: string
): Promise<z.infer<typeof adminTenantLivestockOverviewResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/api/proxy/admin/tenants/${tenantId}/livestock/overview`,
  });

  return adminTenantLivestockOverviewResponseSchema.parse(response.body);
}
