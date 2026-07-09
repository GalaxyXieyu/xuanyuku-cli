import { z } from 'zod';

export const dashboardOverviewWindowSchema = z.enum(['today', '7d', '30d']);

export const dashboardOverviewQuerySchema = z.object({
  window: dashboardOverviewWindowSchema.default('today')
});

export const dashboardOverviewChartItemSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  eggCount: z.number().int().nonnegative(),
  fertilizedCount: z.number().int().nonnegative(),
  matingCount: z.number().int().nonnegative()
});

export const dashboardOverviewProductClicksTopItemSchema = z.object({
  productId: z.string().trim().min(1),
  code: z.string().trim().min(1),
  clicks: z.number().int().nonnegative()
});

export const dashboardOverviewResponseSchema = z.object({
  turtles: z.object({
    totalCount: z.number().int().nonnegative()
  }),
  eggs: z.object({
    totalEggCount: z.number().int().nonnegative(),
    totalFertilizedCount: z.number().int().nonnegative(),
    eventCount: z.number().int().nonnegative()
  }),
  matings: z.object({
    eventCount: z.number().int().nonnegative()
  }),
  needMating: z.object({
    needMatingCount: z.number().int().nonnegative(),
    warningCount: z.number().int().nonnegative()
  }),
  chart: z.array(dashboardOverviewChartItemSchema),
  share: z.object({
    reachPv: z.number().int().nonnegative(),
    reachUv: z.number().int().nonnegative(),
    visitPv: z.number().int().nonnegative(),
    visitUv: z.number().int().nonnegative(),
    productClicksTop: z.array(dashboardOverviewProductClicksTopItemSchema)
  })
});

export type DashboardOverviewWindow = z.infer<typeof dashboardOverviewWindowSchema>;
export type DashboardOverviewQuery = z.infer<typeof dashboardOverviewQuerySchema>;
export type DashboardOverviewResponse = z.infer<typeof dashboardOverviewResponseSchema>;
export type DashboardOverviewChartItem = z.infer<typeof dashboardOverviewChartItemSchema>;
export type DashboardOverviewProductClicksTopItem = z.infer<typeof dashboardOverviewProductClicksTopItemSchema>;

// Breeding stats (赛季/月度统计)
export const BREEDING_STATS_RANK_LIMIT = 100;

export const dashboardBreedingStatsRangeSchema = z.enum(['season', 'month', '30d', '180d']);

export const dashboardBreedingStatsQuerySchema = z.object({
  range: dashboardBreedingStatsRangeSchema.default('season')
});

export const dashboardBreedingStatsSummarySchema = z.object({
  totalEggCount: z.number().int().nonnegative(),
  totalFertilizedCount: z.number().int().nonnegative(),
  eggEventCount: z.number().int().nonnegative(),
  unrecordedEventCount: z.number().int().nonnegative(),
  fertilizationRate: z.number().min(0).max(1)
});

export const dashboardBreedingStatsTrendItemSchema = z.object({
  month: z.string().regex(/^\d{4}-\d{2}$/),
  eggCount: z.number().int().nonnegative(),
  fertilizedCount: z.number().int().nonnegative()
});

export const dashboardBreedingStatsRankItemSchema = z.object({
  productId: z.string().trim().min(1),
  code: z.string().trim().min(1),
  name: z.string().nullable(),
  imageUrl: z.string().nullable().optional(),
  seriesId: z.string().nullable().optional(),
  seriesName: z.string().nullable().optional(),
  sex: z.string().nullable().optional(),
  needMatingStatus: z.enum(['normal', 'need_mating', 'warning']).nullable().optional(),
  eggCount: z.number().int().nonnegative(),
  fertilizedCount: z.number().int().nonnegative(),
  fertilizationRate: z.number().min(0).max(1)
});

export const dashboardBreedingStatsResponseSchema = z.object({
  range: dashboardBreedingStatsRangeSchema,
  rangeLabel: z.string(),
  summary: dashboardBreedingStatsSummarySchema,
  trend: z.array(dashboardBreedingStatsTrendItemSchema),
  ranking: z.array(dashboardBreedingStatsRankItemSchema).max(BREEDING_STATS_RANK_LIMIT)
});

export type DashboardBreedingStatsRange = z.infer<typeof dashboardBreedingStatsRangeSchema>;
export type DashboardBreedingStatsQuery = z.infer<typeof dashboardBreedingStatsQuerySchema>;
export type DashboardBreedingStatsSummary = z.infer<typeof dashboardBreedingStatsSummarySchema>;
export type DashboardBreedingStatsTrendItem = z.infer<typeof dashboardBreedingStatsTrendItemSchema>;
export type DashboardBreedingStatsRankItem = z.infer<typeof dashboardBreedingStatsRankItemSchema>;
export type DashboardBreedingStatsResponse = z.infer<typeof dashboardBreedingStatsResponseSchema>;
