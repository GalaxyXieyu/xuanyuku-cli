import {
  createMarketKeywordRequestSchema,
  createMarketKeywordResponseSchema,
  updateMarketKeywordRequestSchema,
  updateMarketKeywordResponseSchema,
  upsertMarketPriceSnapshotsRequestSchema,
  upsertMarketPriceSnapshotsResponseSchema,
  listMarketPriceSnapshotsQuerySchema,
  listMarketPriceSnapshotsResponseSchema,
  decideMarketReviewQueueRequestSchema,
  decideMarketReviewQueueResponseSchema,
  listMarketKeywordsQuerySchema,
  listMarketKeywordsResponseSchema,
  listMarketReviewQueueQuerySchema,
  listMarketReviewQueueResponseSchema,
  listMarketPublishHistoryQuerySchema,
  listMarketPublishHistoryResponseSchema,
  publishMarketKeywordResponseSchema,
  marketOverviewQuerySchema,
  marketOverviewResponseSchema,
  marketKeywordDetailResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

// 行情走 admin API，但 /admin/* 在公网被 web 前端接管，NestJS admin 端点只能经
// apps/web 的通用代理 /api/proxy 转发到内网。内容端点(/shares 等)在 web rewrites
// 白名单里可直连，行情不在，故这里统一带 /api/proxy 前缀。

export async function listKeywords(
  ctx: AuthedContext,
  opts: z.infer<typeof listMarketKeywordsQuerySchema>
): Promise<z.infer<typeof listMarketKeywordsResponseSchema>> {
  const query = listMarketKeywordsQuerySchema.parse(opts);

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/market-intelligence/keywords',
    query: { tenantId: query.tenantId },
  });

  return listMarketKeywordsResponseSchema.parse(response.body);
}

export async function getKeywordDetail(
  ctx: AuthedContext,
  keywordId: string
): Promise<z.infer<typeof marketKeywordDetailResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/market-intelligence/keywords/${keywordId}`,
  });

  return marketKeywordDetailResponseSchema.parse(response.body);
}

export async function createKeyword(
  ctx: AuthedContext,
  tenantId: string,
  payload: z.infer<typeof createMarketKeywordRequestSchema>
): Promise<z.infer<typeof createMarketKeywordResponseSchema>> {
  const body = createMarketKeywordRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/api/proxy/admin/market-intelligence/keywords',
    json: body,
    query: { tenantId },
  });

  return createMarketKeywordResponseSchema.parse(response.body);
}

export async function updateKeyword(
  ctx: AuthedContext,
  tenantId: string,
  keywordId: string,
  payload: z.infer<typeof updateMarketKeywordRequestSchema>
): Promise<z.infer<typeof updateMarketKeywordResponseSchema>> {
  const body = updateMarketKeywordRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PUT',
    path: `/api/proxy/admin/market-intelligence/keywords/${keywordId}`,
    json: body,
    query: { tenantId },
  });

  return updateMarketKeywordResponseSchema.parse(response.body);
}

export async function listPriceSnapshots(
  ctx: AuthedContext,
  query: z.infer<typeof listMarketPriceSnapshotsQuerySchema>
): Promise<z.infer<typeof listMarketPriceSnapshotsResponseSchema>> {
  const parsedQuery = listMarketPriceSnapshotsQuerySchema.parse(query);

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/market-intelligence/price-snapshots',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listMarketPriceSnapshotsResponseSchema.parse(response.body);
}

export async function batchUpsertSnapshots(
  ctx: AuthedContext,
  tenantId: string,
  payload: z.infer<typeof upsertMarketPriceSnapshotsRequestSchema>
): Promise<z.infer<typeof upsertMarketPriceSnapshotsResponseSchema>> {
  const body = upsertMarketPriceSnapshotsRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/api/proxy/admin/market-intelligence/price-snapshots/batch-upsert',
    json: body,
    query: { tenantId },
  });

  return upsertMarketPriceSnapshotsResponseSchema.parse(response.body);
}

export async function listReviewQueue(
  ctx: AuthedContext,
  opts: z.infer<typeof listMarketReviewQueueQuerySchema>
): Promise<z.infer<typeof listMarketReviewQueueResponseSchema>> {
  const query = listMarketReviewQueueQuerySchema.parse(opts);

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/market-intelligence/review-queue',
    query: query as Record<string, string | number | boolean | undefined>,
  });

  return listMarketReviewQueueResponseSchema.parse(response.body);
}

export async function approveReview(
  ctx: AuthedContext,
  reviewId: string,
  payload?: z.infer<typeof decideMarketReviewQueueRequestSchema>
): Promise<z.infer<typeof decideMarketReviewQueueResponseSchema>> {
  const body = payload ? decideMarketReviewQueueRequestSchema.parse(payload) : {};

  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/market-intelligence/review-queue/${reviewId}/approve`,
    json: body,
  });

  return decideMarketReviewQueueResponseSchema.parse(response.body);
}

export async function rejectReview(
  ctx: AuthedContext,
  reviewId: string,
  payload?: z.infer<typeof decideMarketReviewQueueRequestSchema>
): Promise<z.infer<typeof decideMarketReviewQueueResponseSchema>> {
  const body = payload ? decideMarketReviewQueueRequestSchema.parse(payload) : {};

  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/market-intelligence/review-queue/${reviewId}/reject`,
    json: body,
  });

  return decideMarketReviewQueueResponseSchema.parse(response.body);
}

export async function publishKeyword(
  ctx: AuthedContext,
  keywordId: string
): Promise<z.infer<typeof publishMarketKeywordResponseSchema>> {
  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/market-intelligence/publish/${keywordId}`,
  });

  return publishMarketKeywordResponseSchema.parse(response.body);
}

export async function listPublishHistory(
  ctx: AuthedContext,
  query: z.infer<typeof listMarketPublishHistoryQuerySchema>
): Promise<z.infer<typeof listMarketPublishHistoryResponseSchema>> {
  const parsedQuery = listMarketPublishHistoryQuerySchema.parse(query);

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/market-intelligence/publish-history',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listMarketPublishHistoryResponseSchema.parse(response.body);
}

export async function getMarketOverview(
  ctx: AuthedContext,
  query?: z.infer<typeof marketOverviewQuerySchema>
): Promise<z.infer<typeof marketOverviewResponseSchema>> {
  const parsedQuery = marketOverviewQuerySchema.parse(query ?? {});

  const response = await ctx.request({
    method: 'GET',
    path: '/market-intelligence/overview',
    query: parsedQuery,
  });

  return marketOverviewResponseSchema.parse(response.body);
}