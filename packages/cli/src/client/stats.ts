import {
  dashboardOverviewQuerySchema,
  dashboardOverviewResponseSchema,
  listProductsPublicClicksQuerySchema,
  listProductsPublicClicksResponseSchema,
  productPublicClicksQuerySchema,
  getProductPublicClicksResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

export async function getDashboardOverview(
  ctx: AuthedContext,
  query?: z.infer<typeof dashboardOverviewQuerySchema>
): Promise<z.infer<typeof dashboardOverviewResponseSchema>> {
  const parsedQuery = query ? dashboardOverviewQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/dashboard/overview',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return dashboardOverviewResponseSchema.parse(response.body);
}

export async function listProductsPublicClicks(
  ctx: AuthedContext,
  query?: z.infer<typeof listProductsPublicClicksQuerySchema>
): Promise<z.infer<typeof listProductsPublicClicksResponseSchema>> {
  const parsedQuery = query ? listProductsPublicClicksQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/products/public-clicks',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listProductsPublicClicksResponseSchema.parse(response.body);
}

export async function getProductPublicClicks(
  ctx: AuthedContext,
  productId: string,
  query?: z.infer<typeof productPublicClicksQuerySchema>
): Promise<z.infer<typeof getProductPublicClicksResponseSchema>> {
  const parsedQuery = query ? productPublicClicksQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/public-clicks`,
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return getProductPublicClicksResponseSchema.parse(response.body);
}
