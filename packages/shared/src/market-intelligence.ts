import { z } from 'zod';

const marketDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format.');
const marketTenantIdSchema = z.string().trim().min(1);

export const marketSourcePlatformSchema = z.enum(['MANUAL', 'XIANYU_DETAIL_POC']);
export const marketSeedListingStatusSchema = z.enum(['ACTIVE', 'INVALID', 'REPLACED', 'PENDING_REVIEW']);
export const marketReviewStatusSchema = z.enum(['PENDING', 'APPROVED', 'REJECTED']);
export const marketConfidenceLevelSchema = z.enum(['LOW', 'MEDIUM', 'HIGH']);
export const marketOverviewWindowSchema = z.enum(['7d', '30d']);
export const marketPublicationStatusSchema = z.enum(['DRAFT', 'PUBLISHED']);
export const marketPriceSourceTypeSchema = z.enum(['MANUAL', 'AUTO']);

export const marketPublicModuleStateSchema = z.object({
  marketReferenceEnabled: z.boolean(),
});

export const marketModuleSwitchesSchema = z.object({
  tenantId: z.string().min(1),
  marketReferenceEnabled: z.boolean(),
  reviewQueueEnabled: z.boolean(),
  publishEnabled: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const marketKeywordSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  code: z.string().trim().min(1).max(32),
  displayName: z.string().trim().min(1).max(120),
  canonicalKeyword: z.string().trim().min(1).max(120),
  species: z.string().trim().max(80).nullable(),
  gradeHint: z.string().trim().max(120).nullable(),
  aliases: z.array(z.string().trim().min(1).max(120)).max(20),
  isActive: z.boolean(),
  publicationStatus: marketPublicationStatusSchema,
  sortOrder: z.number().int(),
  lastPublishedAt: z.string().datetime().nullable(),
  publishedByUserId: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const marketSeedListingSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  keywordId: z.string().min(1),
  sourcePlatform: marketSourcePlatformSchema,
  listingId: z.string().trim().min(1).max(64),
  listingTitle: z.string().trim().max(240).nullable(),
  snapshotUrl: z.string().trim().max(500).nullable(),
  status: marketSeedListingStatusSchema,
  priority: z.number().int().min(1).max(3),
  note: z.string().trim().max(500).nullable(),
  lastObservedAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const marketPriceSnapshotSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  keywordId: z.string().min(1),
  day: marketDateSchema,
  observedAt: z.string().datetime(),
  priceCents: z.number().int().nonnegative(),
  note: z.string().trim().max(240).nullable(),
  sourceType: marketPriceSourceTypeSchema,
  createdByUserId: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const listMarketKeywordsQuerySchema = z.object({
  tenantId: marketTenantIdSchema,
});

export const listMarketKeywordsResponseSchema = z.object({
  keywords: z.array(marketKeywordSchema),
});

export const createMarketKeywordRequestSchema = z.object({
  code: z.string().trim().min(1).max(32),
  displayName: z.string().trim().min(1).max(120),
  canonicalKeyword: z.string().trim().min(1).max(120),
  species: z.string().trim().max(80).nullable().optional(),
  gradeHint: z.string().trim().max(120).nullable().optional(),
  aliases: z.array(z.string().trim().min(1).max(120)).max(20).default([]),
  isActive: z.boolean().optional(),
  sortOrder: z.number().int().optional(),
});

export const updateMarketKeywordRequestSchema = createMarketKeywordRequestSchema.partial();

export const createMarketKeywordResponseSchema = z.object({
  keyword: marketKeywordSchema,
});

export const updateMarketKeywordResponseSchema = z.object({
  keyword: marketKeywordSchema,
});

export const marketSeedListingInputSchema = z.object({
  id: z.string().trim().min(1).optional(),
  keywordId: z.string().trim().min(1),
  sourcePlatform: marketSourcePlatformSchema.default('XIANYU_DETAIL_POC'),
  listingId: z.string().trim().min(1).max(64),
  listingTitle: z.string().trim().max(240).nullable().optional(),
  snapshotUrl: z.string().trim().max(500).nullable().optional(),
  status: marketSeedListingStatusSchema.default('ACTIVE'),
  priority: z.number().int().min(1).max(3).default(2),
  note: z.string().trim().max(500).nullable().optional(),
});

export const upsertMarketSeedListingsRequestSchema = z.object({
  items: z.array(marketSeedListingInputSchema).min(1).max(200),
});

export const listMarketSeedListingsQuerySchema = z.object({
  tenantId: marketTenantIdSchema,
  keywordId: z.string().trim().min(1).optional(),
});

export const listMarketSeedListingsResponseSchema = z.object({
  seedListings: z.array(marketSeedListingSchema),
});

export const upsertMarketSeedListingsResponseSchema = z.object({
  seedListings: z.array(marketSeedListingSchema),
});

export const marketPriceSnapshotInputSchema = z.object({
  id: z.string().trim().min(1).optional(),
  keywordId: z.string().trim().min(1),
  observedAt: z.string().datetime(),
  priceCents: z.number().int().nonnegative(),
  note: z.string().trim().max(240).nullable().optional(),
});

export const listMarketPriceSnapshotsQuerySchema = z.object({
  tenantId: marketTenantIdSchema,
  keywordId: z.string().trim().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(180).default(60),
});

export const listMarketPriceSnapshotsResponseSchema = z.object({
  snapshots: z.array(marketPriceSnapshotSchema),
});

export const upsertMarketPriceSnapshotsRequestSchema = z.object({
  items: z.array(marketPriceSnapshotInputSchema).min(1).max(120),
});

export const upsertMarketPriceSnapshotsResponseSchema = z.object({
  snapshots: z.array(marketPriceSnapshotSchema),
});

export const marketReviewQueueItemSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  keywordId: z.string().min(1),
  snapshotId: z.string().nullable(),
  normalizedId: z.string().nullable(),
  reasonCode: z.string().trim().min(1).max(64),
  reasonText: z.string().trim().max(240).nullable(),
  status: marketReviewStatusSchema,
  keywordDisplayName: z.string().trim().min(1).max(120),
  listingId: z.string().trim().max(64).nullable(),
  snapshotAt: z.string().datetime().nullable(),
  normalizedTitle: z.string().trim().max(240).nullable(),
  effectivePriceCents: z.number().int().nullable(),
  confidenceLevel: marketConfidenceLevelSchema.nullable(),
  sellerCity: z.string().trim().max(120).nullable(),
  resolvedByUserId: z.string().nullable(),
  resolvedAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const listMarketReviewQueueQuerySchema = z.object({
  tenantId: marketTenantIdSchema,
  keywordId: z.string().trim().min(1).optional(),
  status: marketReviewStatusSchema.optional(),
});

export const listMarketReviewQueueResponseSchema = z.object({
  items: z.array(marketReviewQueueItemSchema),
});

export const decideMarketReviewQueueRequestSchema = z.object({
  reasonText: z.string().trim().max(240).nullable().optional(),
});

export const decideMarketReviewQueueResponseSchema = z.object({
  item: marketReviewQueueItemSchema,
});

export const marketTrendPointSchema = z.object({
  day: marketDateSchema,
  priceCents: z.number().int().nullable(),
  priceMedianCents: z.number().int().nullable(),
  sampleCount: z.number().int().nonnegative(),
});

export const marketPublishRecordSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  keywordId: z.string().min(1),
  keywordDisplayName: z.string().trim().min(1).max(120),
  latestDay: marketDateSchema,
  latestObservedAt: z.string().datetime().nullable(),
  priceCents: z.number().int().nullable(),
  sampleCount: z.number().int().nonnegative(),
  priceMedianCents: z.number().int().nullable(),
  priceAvgCents: z.number().int().nullable(),
  priceLowCents: z.number().int().nullable(),
  priceHighCents: z.number().int().nullable(),
  confidenceLevel: marketConfidenceLevelSchema,
  trend7d: z.array(marketTrendPointSchema).max(7),
  trend30d: z.array(marketTrendPointSchema).max(30),
  referenceNote: z.string().trim().max(240).nullable(),
  reviewQueuePendingCount: z.number().int().nonnegative(),
  publishedAt: z.string().datetime(),
  publishedByUserId: z.string().nullable(),
});

export const listMarketPublishHistoryQuerySchema = z.object({
  tenantId: marketTenantIdSchema,
  keywordId: z.string().trim().min(1).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export const listMarketPublishHistoryResponseSchema = z.object({
  records: z.array(marketPublishRecordSchema),
});

export const publishMarketKeywordResponseSchema = z.object({
  keyword: marketKeywordSchema,
  record: marketPublishRecordSchema,
});

export const getMarketModuleSwitchesQuerySchema = z.object({
  tenantId: marketTenantIdSchema,
});

export const getMarketModuleSwitchesResponseSchema = z.object({
  switches: marketModuleSwitchesSchema,
});

export const updateMarketModuleSwitchesRequestSchema = z.object({
  marketReferenceEnabled: z.boolean().optional(),
  reviewQueueEnabled: z.boolean().optional(),
  publishEnabled: z.boolean().optional(),
});

export const updateMarketModuleSwitchesResponseSchema = z.object({
  switches: marketModuleSwitchesSchema,
});

export const toggleMarketKeywordResponseSchema = z.object({
  keyword: marketKeywordSchema,
});

export const marketOverviewQuerySchema = z.object({
  window: marketOverviewWindowSchema.default('7d'),
});

export const marketOverviewItemSchema = z.object({
  keywordId: z.string().min(1),
  displayName: z.string().trim().min(1).max(120),
  priceCents: z.number().int().nullable(),
  priceMedianCents: z.number().int().nullable(),
  priceAvgCents: z.number().int().nullable(),
  priceLowCents: z.number().int().nullable(),
  priceHighCents: z.number().int().nullable(),
  sampleCount: z.number().int().nonnegative(),
  confidenceLevel: marketConfidenceLevelSchema,
  latestObservedAt: z.string().datetime().nullable(),
  trend7d: z.array(marketTrendPointSchema).max(7),
});

export const marketOverviewResponseSchema = z.object({
  moduleState: marketPublicModuleStateSchema,
  items: z.array(marketOverviewItemSchema),
});

export const marketKeywordDetailResponseSchema = z.object({
  keyword: marketKeywordSchema,
  latestMetrics: marketOverviewItemSchema.extend({
    trend7d: z.array(marketTrendPointSchema).max(7),
  }),
  trend30d: z.array(marketTrendPointSchema).max(30),
  referenceNote: z.string().trim().max(240).nullable(),
  publishedAt: z.string().datetime(),
});

export type MarketSourcePlatform = z.infer<typeof marketSourcePlatformSchema>;
export type MarketSeedListingStatus = z.infer<typeof marketSeedListingStatusSchema>;
export type MarketReviewStatus = z.infer<typeof marketReviewStatusSchema>;
export type MarketConfidenceLevel = z.infer<typeof marketConfidenceLevelSchema>;
export type MarketOverviewWindow = z.infer<typeof marketOverviewWindowSchema>;
export type MarketPublicationStatus = z.infer<typeof marketPublicationStatusSchema>;
export type MarketPriceSourceType = z.infer<typeof marketPriceSourceTypeSchema>;
export type MarketPublicModuleState = z.infer<typeof marketPublicModuleStateSchema>;
export type MarketModuleSwitches = z.infer<typeof marketModuleSwitchesSchema>;
export type MarketKeyword = z.infer<typeof marketKeywordSchema>;
export type MarketSeedListing = z.infer<typeof marketSeedListingSchema>;
export type MarketPriceSnapshot = z.infer<typeof marketPriceSnapshotSchema>;
export type ListMarketKeywordsQuery = z.infer<typeof listMarketKeywordsQuerySchema>;
export type ListMarketKeywordsResponse = z.infer<typeof listMarketKeywordsResponseSchema>;
export type CreateMarketKeywordRequest = z.infer<typeof createMarketKeywordRequestSchema>;
export type UpdateMarketKeywordRequest = z.infer<typeof updateMarketKeywordRequestSchema>;
export type CreateMarketKeywordResponse = z.infer<typeof createMarketKeywordResponseSchema>;
export type UpdateMarketKeywordResponse = z.infer<typeof updateMarketKeywordResponseSchema>;
export type MarketSeedListingInput = z.infer<typeof marketSeedListingInputSchema>;
export type ListMarketSeedListingsQuery = z.infer<typeof listMarketSeedListingsQuerySchema>;
export type ListMarketSeedListingsResponse = z.infer<typeof listMarketSeedListingsResponseSchema>;
export type UpsertMarketSeedListingsRequest = z.infer<typeof upsertMarketSeedListingsRequestSchema>;
export type UpsertMarketSeedListingsResponse = z.infer<typeof upsertMarketSeedListingsResponseSchema>;
export type MarketPriceSnapshotInput = z.infer<typeof marketPriceSnapshotInputSchema>;
export type ListMarketPriceSnapshotsQuery = z.infer<typeof listMarketPriceSnapshotsQuerySchema>;
export type ListMarketPriceSnapshotsResponse = z.infer<typeof listMarketPriceSnapshotsResponseSchema>;
export type UpsertMarketPriceSnapshotsRequest = z.infer<typeof upsertMarketPriceSnapshotsRequestSchema>;
export type UpsertMarketPriceSnapshotsResponse = z.infer<typeof upsertMarketPriceSnapshotsResponseSchema>;
export type MarketReviewQueueItem = z.infer<typeof marketReviewQueueItemSchema>;
export type ListMarketReviewQueueQuery = z.infer<typeof listMarketReviewQueueQuerySchema>;
export type ListMarketReviewQueueResponse = z.infer<typeof listMarketReviewQueueResponseSchema>;
export type DecideMarketReviewQueueRequest = z.infer<typeof decideMarketReviewQueueRequestSchema>;
export type DecideMarketReviewQueueResponse = z.infer<typeof decideMarketReviewQueueResponseSchema>;
export type MarketTrendPoint = z.infer<typeof marketTrendPointSchema>;
export type MarketPublishRecord = z.infer<typeof marketPublishRecordSchema>;
export type ListMarketPublishHistoryQuery = z.infer<typeof listMarketPublishHistoryQuerySchema>;
export type ListMarketPublishHistoryResponse = z.infer<typeof listMarketPublishHistoryResponseSchema>;
export type PublishMarketKeywordResponse = z.infer<typeof publishMarketKeywordResponseSchema>;
export type GetMarketModuleSwitchesQuery = z.infer<typeof getMarketModuleSwitchesQuerySchema>;
export type GetMarketModuleSwitchesResponse = z.infer<typeof getMarketModuleSwitchesResponseSchema>;
export type UpdateMarketModuleSwitchesRequest = z.infer<typeof updateMarketModuleSwitchesRequestSchema>;
export type UpdateMarketModuleSwitchesResponse = z.infer<typeof updateMarketModuleSwitchesResponseSchema>;
export type ToggleMarketKeywordResponse = z.infer<typeof toggleMarketKeywordResponseSchema>;
export type MarketOverviewQuery = z.infer<typeof marketOverviewQuerySchema>;
export type MarketOverviewItem = z.infer<typeof marketOverviewItemSchema>;
export type MarketOverviewResponse = z.infer<typeof marketOverviewResponseSchema>;
export type MarketKeywordDetailResponse = z.infer<typeof marketKeywordDetailResponseSchema>;
