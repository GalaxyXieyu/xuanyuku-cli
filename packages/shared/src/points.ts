import { z } from 'zod';

// ========== 枚举 ==========
export const pointsLedgerSourceSchema = z.enum([
  'SIGNIN',          // 每日签到（含 base + bonus）
  'ADMIN_ADJUST',    // admin 手动调整（正负均可）
  'REFUND',          // 预留
  'AI_CONSUME',      // P2 AI 通道消费
]);
export type PointsLedgerSource = z.infer<typeof pointsLedgerSourceSchema>;

// ========== Account snapshot ==========
export const pointsAccountSnapshotSchema = z.object({
  userId: z.string(),
  balance: z.number().int(),
  totalEarned: z.number().int(),
  totalSpent: z.number().int(),
  currentStreak: z.number().int(),
  longestStreak: z.number().int(),
  lastSigninDate: z.string().nullable(),
  signedToday: z.boolean(),
  nextBonusThreshold: z.number().int().nullable(),
  todayPotentialPoints: z.number().int(),
});
export type PointsAccountSnapshot = z.infer<typeof pointsAccountSnapshotSchema>;

// ========== Ledger entry ==========
export const pointsLedgerEntrySchema = z.object({
  id: z.string(),
  delta: z.number().int(),
  balanceAfter: z.number().int(),
  source: pointsLedgerSourceSchema,
  note: z.string().nullable(),
  occurredAt: z.string(),         // ISO datetime
});
export type PointsLedgerEntry = z.infer<typeof pointsLedgerEntrySchema>;

// ========== 用户侧 ==========
export const myPointsOverviewResponseSchema = z.object({
  account: pointsAccountSnapshotSchema,
  recentLedger: z.array(pointsLedgerEntrySchema).max(5),
});
export type MyPointsOverviewResponse = z.infer<typeof myPointsOverviewResponseSchema>;

export const pointsLedgerPageResponseSchema = z.object({
  items: z.array(pointsLedgerEntrySchema),
  nextCursor: z.string().nullable(),
});
export type PointsLedgerPageResponse = z.infer<typeof pointsLedgerPageResponseSchema>;

export const pointsLedgerQuerySchema = z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  source: z.string().optional(),
});
export type PointsLedgerQuery = z.infer<typeof pointsLedgerQuerySchema>;

export const adminUserPointsQuerySchema = z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});
export type AdminUserPointsQuery = z.infer<typeof adminUserPointsQuerySchema>;

export const dailySigninRequestSchema = z.object({}).strict();
export const dailySigninResponseSchema = z.object({
  signinDate: z.string(),
  alreadySigned: z.boolean(),
  basePoints: z.number().int(),
  bonusPoints: z.number().int(),
  streakDay: z.number().int(),
  totalAwarded: z.number().int(),
  newBalance: z.number().int(),
});
export type DailySigninResponse = z.infer<typeof dailySigninResponseSchema>;

export const signinCalendarQuerySchema = z.object({
  month: z.string().regex(/^\d{4}-\d{2}$/).optional(),
});
export type SigninCalendarQuery = z.infer<typeof signinCalendarQuerySchema>;

export const signinCalendarResponseSchema = z.object({
  month: z.string().regex(/^\d{4}-\d{2}$/),
  signedDates: z.array(z.string()),
  monthBasePoints: z.number().int(),
  monthBonusPoints: z.number().int(),
});
export type SigninCalendarResponse = z.infer<typeof signinCalendarResponseSchema>;

// ========== Admin 侧 ==========
export const adminAdjustPointsRequestSchema = z.object({
  delta: z.number().int().refine((v) => v !== 0, '调整额度不能为 0'),
  reason: z.string().min(1).max(500),
});
export type AdminAdjustPointsRequest = z.infer<typeof adminAdjustPointsRequestSchema>;

export const adminAdjustPointsResponseSchema = z.object({
  auditId: z.string(),
  ledger: pointsLedgerEntrySchema,
  balanceBefore: z.number().int(),
  balanceAfter: z.number().int(),
});
export type AdminAdjustPointsResponse = z.infer<typeof adminAdjustPointsResponseSchema>;

export const adminUserPointsResponseSchema = z.object({
  account: pointsAccountSnapshotSchema,
  ledger: pointsLedgerPageResponseSchema,
});
export type AdminUserPointsResponse = z.infer<typeof adminUserPointsResponseSchema>;

// ========== 连续签到阶梯展示 ==========
/**
 * 前端展示的连续签到里程碑阶梯数值
 * 与后端 STREAK_MULTIPLIERS 的 threshold 值必须同步
 */
export const STREAK_THRESHOLDS = [1, 2, 3, 7, 15, 30] as const;
export type StreakThreshold = (typeof STREAK_THRESHOLDS)[number];
