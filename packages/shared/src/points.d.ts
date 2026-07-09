import { z } from 'zod';
export declare const pointsLedgerSourceSchema: z.ZodEnum<["SIGNIN", "ADMIN_ADJUST", "REFUND", "AI_CONSUME"]>;
export type PointsLedgerSource = z.infer<typeof pointsLedgerSourceSchema>;
export declare const pointsAccountSnapshotSchema: z.ZodObject<{
    userId: z.ZodString;
    balance: z.ZodNumber;
    totalEarned: z.ZodNumber;
    totalSpent: z.ZodNumber;
    currentStreak: z.ZodNumber;
    longestStreak: z.ZodNumber;
    lastSigninDate: z.ZodNullable<z.ZodString>;
    signedToday: z.ZodBoolean;
    nextBonusThreshold: z.ZodNullable<z.ZodNumber>;
    todayPotentialPoints: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    userId: string;
    balance: number;
    totalEarned: number;
    totalSpent: number;
    currentStreak: number;
    longestStreak: number;
    lastSigninDate: string | null;
    signedToday: boolean;
    nextBonusThreshold: number | null;
    todayPotentialPoints: number;
}, {
    userId: string;
    balance: number;
    totalEarned: number;
    totalSpent: number;
    currentStreak: number;
    longestStreak: number;
    lastSigninDate: string | null;
    signedToday: boolean;
    nextBonusThreshold: number | null;
    todayPotentialPoints: number;
}>;
export type PointsAccountSnapshot = z.infer<typeof pointsAccountSnapshotSchema>;
export declare const pointsLedgerEntrySchema: z.ZodObject<{
    id: z.ZodString;
    delta: z.ZodNumber;
    balanceAfter: z.ZodNumber;
    source: z.ZodEnum<["SIGNIN", "ADMIN_ADJUST", "REFUND", "AI_CONSUME"]>;
    note: z.ZodNullable<z.ZodString>;
    occurredAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
    note: string | null;
    occurredAt: string;
    delta: number;
    balanceAfter: number;
}, {
    id: string;
    source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
    note: string | null;
    occurredAt: string;
    delta: number;
    balanceAfter: number;
}>;
export type PointsLedgerEntry = z.infer<typeof pointsLedgerEntrySchema>;
export declare const myPointsOverviewResponseSchema: z.ZodObject<{
    account: z.ZodObject<{
        userId: z.ZodString;
        balance: z.ZodNumber;
        totalEarned: z.ZodNumber;
        totalSpent: z.ZodNumber;
        currentStreak: z.ZodNumber;
        longestStreak: z.ZodNumber;
        lastSigninDate: z.ZodNullable<z.ZodString>;
        signedToday: z.ZodBoolean;
        nextBonusThreshold: z.ZodNullable<z.ZodNumber>;
        todayPotentialPoints: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        balance: number;
        totalEarned: number;
        totalSpent: number;
        currentStreak: number;
        longestStreak: number;
        lastSigninDate: string | null;
        signedToday: boolean;
        nextBonusThreshold: number | null;
        todayPotentialPoints: number;
    }, {
        userId: string;
        balance: number;
        totalEarned: number;
        totalSpent: number;
        currentStreak: number;
        longestStreak: number;
        lastSigninDate: string | null;
        signedToday: boolean;
        nextBonusThreshold: number | null;
        todayPotentialPoints: number;
    }>;
    recentLedger: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        delta: z.ZodNumber;
        balanceAfter: z.ZodNumber;
        source: z.ZodEnum<["SIGNIN", "ADMIN_ADJUST", "REFUND", "AI_CONSUME"]>;
        note: z.ZodNullable<z.ZodString>;
        occurredAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }, {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    account: {
        userId: string;
        balance: number;
        totalEarned: number;
        totalSpent: number;
        currentStreak: number;
        longestStreak: number;
        lastSigninDate: string | null;
        signedToday: boolean;
        nextBonusThreshold: number | null;
        todayPotentialPoints: number;
    };
    recentLedger: {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }[];
}, {
    account: {
        userId: string;
        balance: number;
        totalEarned: number;
        totalSpent: number;
        currentStreak: number;
        longestStreak: number;
        lastSigninDate: string | null;
        signedToday: boolean;
        nextBonusThreshold: number | null;
        todayPotentialPoints: number;
    };
    recentLedger: {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }[];
}>;
export type MyPointsOverviewResponse = z.infer<typeof myPointsOverviewResponseSchema>;
export declare const pointsLedgerPageResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        delta: z.ZodNumber;
        balanceAfter: z.ZodNumber;
        source: z.ZodEnum<["SIGNIN", "ADMIN_ADJUST", "REFUND", "AI_CONSUME"]>;
        note: z.ZodNullable<z.ZodString>;
        occurredAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }, {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }>, "many">;
    nextCursor: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }[];
    nextCursor: string | null;
}, {
    items: {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }[];
    nextCursor: string | null;
}>;
export type PointsLedgerPageResponse = z.infer<typeof pointsLedgerPageResponseSchema>;
export declare const pointsLedgerQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
    source: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    source?: string | undefined;
    cursor?: string | undefined;
}, {
    source?: string | undefined;
    limit?: number | undefined;
    cursor?: string | undefined;
}>;
export type PointsLedgerQuery = z.infer<typeof pointsLedgerQuerySchema>;
export declare const adminUserPointsQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    cursor?: string | undefined;
}, {
    limit?: number | undefined;
    cursor?: string | undefined;
}>;
export type AdminUserPointsQuery = z.infer<typeof adminUserPointsQuerySchema>;
export declare const dailySigninRequestSchema: z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>;
export declare const dailySigninResponseSchema: z.ZodObject<{
    signinDate: z.ZodString;
    alreadySigned: z.ZodBoolean;
    basePoints: z.ZodNumber;
    bonusPoints: z.ZodNumber;
    streakDay: z.ZodNumber;
    totalAwarded: z.ZodNumber;
    newBalance: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    signinDate: string;
    alreadySigned: boolean;
    basePoints: number;
    bonusPoints: number;
    streakDay: number;
    totalAwarded: number;
    newBalance: number;
}, {
    signinDate: string;
    alreadySigned: boolean;
    basePoints: number;
    bonusPoints: number;
    streakDay: number;
    totalAwarded: number;
    newBalance: number;
}>;
export type DailySigninResponse = z.infer<typeof dailySigninResponseSchema>;
export declare const signinCalendarQuerySchema: z.ZodObject<{
    month: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    month?: string | undefined;
}, {
    month?: string | undefined;
}>;
export type SigninCalendarQuery = z.infer<typeof signinCalendarQuerySchema>;
export declare const signinCalendarResponseSchema: z.ZodObject<{
    month: z.ZodString;
    signedDates: z.ZodArray<z.ZodString, "many">;
    monthBasePoints: z.ZodNumber;
    monthBonusPoints: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    month: string;
    signedDates: string[];
    monthBasePoints: number;
    monthBonusPoints: number;
}, {
    month: string;
    signedDates: string[];
    monthBasePoints: number;
    monthBonusPoints: number;
}>;
export type SigninCalendarResponse = z.infer<typeof signinCalendarResponseSchema>;
export declare const adminAdjustPointsRequestSchema: z.ZodObject<{
    delta: z.ZodEffects<z.ZodNumber, number, number>;
    reason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reason: string;
    delta: number;
}, {
    reason: string;
    delta: number;
}>;
export type AdminAdjustPointsRequest = z.infer<typeof adminAdjustPointsRequestSchema>;
export declare const adminAdjustPointsResponseSchema: z.ZodObject<{
    auditId: z.ZodString;
    ledger: z.ZodObject<{
        id: z.ZodString;
        delta: z.ZodNumber;
        balanceAfter: z.ZodNumber;
        source: z.ZodEnum<["SIGNIN", "ADMIN_ADJUST", "REFUND", "AI_CONSUME"]>;
        note: z.ZodNullable<z.ZodString>;
        occurredAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }, {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    }>;
    balanceBefore: z.ZodNumber;
    balanceAfter: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    balanceAfter: number;
    auditId: string;
    ledger: {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    };
    balanceBefore: number;
}, {
    balanceAfter: number;
    auditId: string;
    ledger: {
        id: string;
        source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
        note: string | null;
        occurredAt: string;
        delta: number;
        balanceAfter: number;
    };
    balanceBefore: number;
}>;
export type AdminAdjustPointsResponse = z.infer<typeof adminAdjustPointsResponseSchema>;
export declare const adminUserPointsResponseSchema: z.ZodObject<{
    account: z.ZodObject<{
        userId: z.ZodString;
        balance: z.ZodNumber;
        totalEarned: z.ZodNumber;
        totalSpent: z.ZodNumber;
        currentStreak: z.ZodNumber;
        longestStreak: z.ZodNumber;
        lastSigninDate: z.ZodNullable<z.ZodString>;
        signedToday: z.ZodBoolean;
        nextBonusThreshold: z.ZodNullable<z.ZodNumber>;
        todayPotentialPoints: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        balance: number;
        totalEarned: number;
        totalSpent: number;
        currentStreak: number;
        longestStreak: number;
        lastSigninDate: string | null;
        signedToday: boolean;
        nextBonusThreshold: number | null;
        todayPotentialPoints: number;
    }, {
        userId: string;
        balance: number;
        totalEarned: number;
        totalSpent: number;
        currentStreak: number;
        longestStreak: number;
        lastSigninDate: string | null;
        signedToday: boolean;
        nextBonusThreshold: number | null;
        todayPotentialPoints: number;
    }>;
    ledger: z.ZodObject<{
        items: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            delta: z.ZodNumber;
            balanceAfter: z.ZodNumber;
            source: z.ZodEnum<["SIGNIN", "ADMIN_ADJUST", "REFUND", "AI_CONSUME"]>;
            note: z.ZodNullable<z.ZodString>;
            occurredAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
            note: string | null;
            occurredAt: string;
            delta: number;
            balanceAfter: number;
        }, {
            id: string;
            source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
            note: string | null;
            occurredAt: string;
            delta: number;
            balanceAfter: number;
        }>, "many">;
        nextCursor: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        items: {
            id: string;
            source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
            note: string | null;
            occurredAt: string;
            delta: number;
            balanceAfter: number;
        }[];
        nextCursor: string | null;
    }, {
        items: {
            id: string;
            source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
            note: string | null;
            occurredAt: string;
            delta: number;
            balanceAfter: number;
        }[];
        nextCursor: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    account: {
        userId: string;
        balance: number;
        totalEarned: number;
        totalSpent: number;
        currentStreak: number;
        longestStreak: number;
        lastSigninDate: string | null;
        signedToday: boolean;
        nextBonusThreshold: number | null;
        todayPotentialPoints: number;
    };
    ledger: {
        items: {
            id: string;
            source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
            note: string | null;
            occurredAt: string;
            delta: number;
            balanceAfter: number;
        }[];
        nextCursor: string | null;
    };
}, {
    account: {
        userId: string;
        balance: number;
        totalEarned: number;
        totalSpent: number;
        currentStreak: number;
        longestStreak: number;
        lastSigninDate: string | null;
        signedToday: boolean;
        nextBonusThreshold: number | null;
        todayPotentialPoints: number;
    };
    ledger: {
        items: {
            id: string;
            source: "SIGNIN" | "ADMIN_ADJUST" | "REFUND" | "AI_CONSUME";
            note: string | null;
            occurredAt: string;
            delta: number;
            balanceAfter: number;
        }[];
        nextCursor: string | null;
    };
}>;
export type AdminUserPointsResponse = z.infer<typeof adminUserPointsResponseSchema>;
/**
 * 前端展示的连续签到里程碑阶梯数值
 * 与后端 STREAK_MULTIPLIERS 的 threshold 值必须同步
 */
export declare const STREAK_THRESHOLDS: readonly [1, 2, 3, 7, 15, 30];
export type StreakThreshold = (typeof STREAK_THRESHOLDS)[number];
