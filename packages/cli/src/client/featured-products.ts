import {
  listFeaturedProductsResponseSchema,
  createFeaturedProductRequestSchema,
  createFeaturedProductResponseSchema,
  deleteFeaturedProductResponseSchema,
  reorderFeaturedProductsRequestSchema,
  reorderFeaturedProductsResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

export async function listFeaturedProducts(
  ctx: AuthedContext
): Promise<z.infer<typeof listFeaturedProductsResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: '/featured-products',
  });

  return listFeaturedProductsResponseSchema.parse(response.body);
}

export async function addFeaturedProduct(
  ctx: AuthedContext,
  payload: z.infer<typeof createFeaturedProductRequestSchema>
): Promise<z.infer<typeof createFeaturedProductResponseSchema>> {
  const body = createFeaturedProductRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/featured-products',
    json: body,
  });

  return createFeaturedProductResponseSchema.parse(response.body);
}

export async function removeFeaturedProduct(
  ctx: AuthedContext,
  id: string
): Promise<z.infer<typeof deleteFeaturedProductResponseSchema>> {
  const response = await ctx.request({
    method: 'DELETE',
    path: `/featured-products/${id}`,
  });

  return deleteFeaturedProductResponseSchema.parse(response.body);
}

export async function reorderFeaturedProducts(
  ctx: AuthedContext,
  payload: z.infer<typeof reorderFeaturedProductsRequestSchema>
): Promise<z.infer<typeof reorderFeaturedProductsResponseSchema>> {
  const body = reorderFeaturedProductsRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PUT',
    path: '/featured-products/reorder',
    json: body,
  });

  return reorderFeaturedProductsResponseSchema.parse(response.body);
}
