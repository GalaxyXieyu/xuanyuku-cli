import {
  listSaleBatchesResponseSchema,
  createSaleBatchRequestSchema,
  createSaleBatchResponseSchema,
  createSaleAllocationRequestSchema,
  createSaleAllocationResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

export async function listSaleBatches(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof listSaleBatchesResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/sale-batches`,
  });

  return listSaleBatchesResponseSchema.parse(response.body);
}

export async function createSaleBatch(
  ctx: AuthedContext,
  productId: string,
  payload: z.infer<typeof createSaleBatchRequestSchema>
): Promise<z.infer<typeof createSaleBatchResponseSchema>> {
  const body = createSaleBatchRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: `/products/${productId}/sale-batches`,
    json: body,
  });

  return createSaleBatchResponseSchema.parse(response.body);
}

export async function createSaleAllocation(
  ctx: AuthedContext,
  productId: string,
  payload: z.infer<typeof createSaleAllocationRequestSchema>
): Promise<z.infer<typeof createSaleAllocationResponseSchema>> {
  const body = createSaleAllocationRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: `/products/${productId}/sale-allocations`,
    json: body,
  });

  return createSaleAllocationResponseSchema.parse(response.body);
}
