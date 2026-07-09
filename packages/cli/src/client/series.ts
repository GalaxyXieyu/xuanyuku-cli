import {
  listSeriesQuerySchema,
  listSeriesResponseSchema,
  createSeriesRequestSchema,
  createSeriesResponseSchema,
  getSeriesResponseSchema,
  updateSeriesRequestSchema,
  updateSeriesResponseSchema,
  deleteSeriesResponseSchema,
  reorderSeriesRequestSchema,
  reorderSeriesResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

export async function listSeries(
  ctx: AuthedContext,
  query?: z.infer<typeof listSeriesQuerySchema>
): Promise<z.infer<typeof listSeriesResponseSchema>> {
  const parsedQuery = query ? listSeriesQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/series',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listSeriesResponseSchema.parse(response.body);
}

export async function createSeries(
  ctx: AuthedContext,
  payload: z.infer<typeof createSeriesRequestSchema>
): Promise<z.infer<typeof createSeriesResponseSchema>> {
  const body = createSeriesRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/series',
    json: body,
  });

  return createSeriesResponseSchema.parse(response.body);
}

export async function getSeries(
  ctx: AuthedContext,
  id: string
): Promise<z.infer<typeof getSeriesResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/series/${id}`,
  });

  return getSeriesResponseSchema.parse(response.body);
}

export async function updateSeries(
  ctx: AuthedContext,
  id: string,
  payload: z.infer<typeof updateSeriesRequestSchema>
): Promise<z.infer<typeof updateSeriesResponseSchema>> {
  const body = updateSeriesRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PUT',
    path: `/series/${id}`,
    json: body,
  });

  return updateSeriesResponseSchema.parse(response.body);
}

export async function deleteSeries(
  ctx: AuthedContext,
  id: string
): Promise<z.infer<typeof deleteSeriesResponseSchema>> {
  const response = await ctx.request({
    method: 'DELETE',
    path: `/series/${id}`,
  });

  return deleteSeriesResponseSchema.parse(response.body);
}

export async function reorderSeries(
  ctx: AuthedContext,
  payload: z.infer<typeof reorderSeriesRequestSchema>
): Promise<z.infer<typeof reorderSeriesResponseSchema>> {
  const body = reorderSeriesRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PUT',
    path: '/series/reorder',
    json: body,
  });

  return reorderSeriesResponseSchema.parse(response.body);
}
