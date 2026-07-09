import { z } from 'zod';
export declare const dashboardOverviewWindowSchema: z.ZodEnum<["today", "7d", "30d"]>;
export declare const dashboardOverviewQuerySchema: z.ZodObject<{
    window: z.ZodDefault<z.ZodEnum<["today", "7d", "30d"]>>;
}, "strip", z.ZodTypeAny, {
    window: "7d" | "30d" | "today";
}, {
    window?: "7d" | "30d" | "today" | undefined;
}>;
export declare const dashboardOverviewChartItemSchema: z.ZodObject<{
    date: z.ZodString;
    eggCount: z.ZodNumber;
    fertilizedCount: z.ZodNumber;
    matingCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    date: string;
    eggCount: number;
    fertilizedCount: number;
    matingCount: number;
}, {
    date: string;
    eggCount: number;
    fertilizedCount: number;
    matingCount: number;
}>;
export declare const dashboardOverviewProductClicksTopItemSchema: z.ZodObject<{
    productId: z.ZodString;
    code: z.ZodString;
    clicks: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    code: string;
    productId: string;
    clicks: number;
}, {
    code: string;
    productId: string;
    clicks: number;
}>;
export declare const dashboardOverviewResponseSchema: z.ZodObject<{
    turtles: z.ZodObject<{
        totalCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        totalCount: number;
    }, {
        totalCount: number;
    }>;
    eggs: z.ZodObject<{
        totalEggCount: z.ZodNumber;
        totalFertilizedCount: z.ZodNumber;
        eventCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        eventCount: number;
        totalEggCount: number;
        totalFertilizedCount: number;
    }, {
        eventCount: number;
        totalEggCount: number;
        totalFertilizedCount: number;
    }>;
    matings: z.ZodObject<{
        eventCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        eventCount: number;
    }, {
        eventCount: number;
    }>;
    needMating: z.ZodObject<{
        needMatingCount: z.ZodNumber;
        warningCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        needMatingCount: number;
        warningCount: number;
    }, {
        needMatingCount: number;
        warningCount: number;
    }>;
    chart: z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        eggCount: z.ZodNumber;
        fertilizedCount: z.ZodNumber;
        matingCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: string;
        eggCount: number;
        fertilizedCount: number;
        matingCount: number;
    }, {
        date: string;
        eggCount: number;
        fertilizedCount: number;
        matingCount: number;
    }>, "many">;
    share: z.ZodObject<{
        reachPv: z.ZodNumber;
        reachUv: z.ZodNumber;
        visitPv: z.ZodNumber;
        visitUv: z.ZodNumber;
        productClicksTop: z.ZodArray<z.ZodObject<{
            productId: z.ZodString;
            code: z.ZodString;
            clicks: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            code: string;
            productId: string;
            clicks: number;
        }, {
            code: string;
            productId: string;
            clicks: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        reachPv: number;
        reachUv: number;
        visitPv: number;
        visitUv: number;
        productClicksTop: {
            code: string;
            productId: string;
            clicks: number;
        }[];
    }, {
        reachPv: number;
        reachUv: number;
        visitPv: number;
        visitUv: number;
        productClicksTop: {
            code: string;
            productId: string;
            clicks: number;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    share: {
        reachPv: number;
        reachUv: number;
        visitPv: number;
        visitUv: number;
        productClicksTop: {
            code: string;
            productId: string;
            clicks: number;
        }[];
    };
    turtles: {
        totalCount: number;
    };
    eggs: {
        eventCount: number;
        totalEggCount: number;
        totalFertilizedCount: number;
    };
    matings: {
        eventCount: number;
    };
    needMating: {
        needMatingCount: number;
        warningCount: number;
    };
    chart: {
        date: string;
        eggCount: number;
        fertilizedCount: number;
        matingCount: number;
    }[];
}, {
    share: {
        reachPv: number;
        reachUv: number;
        visitPv: number;
        visitUv: number;
        productClicksTop: {
            code: string;
            productId: string;
            clicks: number;
        }[];
    };
    turtles: {
        totalCount: number;
    };
    eggs: {
        eventCount: number;
        totalEggCount: number;
        totalFertilizedCount: number;
    };
    matings: {
        eventCount: number;
    };
    needMating: {
        needMatingCount: number;
        warningCount: number;
    };
    chart: {
        date: string;
        eggCount: number;
        fertilizedCount: number;
        matingCount: number;
    }[];
}>;
export type DashboardOverviewWindow = z.infer<typeof dashboardOverviewWindowSchema>;
export type DashboardOverviewQuery = z.infer<typeof dashboardOverviewQuerySchema>;
export type DashboardOverviewResponse = z.infer<typeof dashboardOverviewResponseSchema>;
export type DashboardOverviewChartItem = z.infer<typeof dashboardOverviewChartItemSchema>;
export type DashboardOverviewProductClicksTopItem = z.infer<typeof dashboardOverviewProductClicksTopItemSchema>;
export declare const BREEDING_STATS_RANK_LIMIT = 100;
export declare const dashboardBreedingStatsRangeSchema: z.ZodEnum<["season", "month", "30d", "180d"]>;
export declare const dashboardBreedingStatsQuerySchema: z.ZodObject<{
    range: z.ZodDefault<z.ZodEnum<["season", "month", "30d", "180d"]>>;
}, "strip", z.ZodTypeAny, {
    range: "30d" | "season" | "month" | "180d";
}, {
    range?: "30d" | "season" | "month" | "180d" | undefined;
}>;
export declare const dashboardBreedingStatsSummarySchema: z.ZodObject<{
    totalEggCount: z.ZodNumber;
    totalFertilizedCount: z.ZodNumber;
    eggEventCount: z.ZodNumber;
    unrecordedEventCount: z.ZodNumber;
    fertilizationRate: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    totalEggCount: number;
    totalFertilizedCount: number;
    eggEventCount: number;
    unrecordedEventCount: number;
    fertilizationRate: number;
}, {
    totalEggCount: number;
    totalFertilizedCount: number;
    eggEventCount: number;
    unrecordedEventCount: number;
    fertilizationRate: number;
}>;
export declare const dashboardBreedingStatsTrendItemSchema: z.ZodObject<{
    month: z.ZodString;
    eggCount: z.ZodNumber;
    fertilizedCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    eggCount: number;
    fertilizedCount: number;
    month: string;
}, {
    eggCount: number;
    fertilizedCount: number;
    month: string;
}>;
export declare const dashboardBreedingStatsRankItemSchema: z.ZodObject<{
    productId: z.ZodString;
    code: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
    eggCount: z.ZodNumber;
    fertilizedCount: z.ZodNumber;
    fertilizationRate: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    code: string;
    name: string | null;
    productId: string;
    eggCount: number;
    fertilizedCount: number;
    fertilizationRate: number;
    sex?: string | null | undefined;
    seriesName?: string | null | undefined;
    imageUrl?: string | null | undefined;
    seriesId?: string | null | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
}, {
    code: string;
    name: string | null;
    productId: string;
    eggCount: number;
    fertilizedCount: number;
    fertilizationRate: number;
    sex?: string | null | undefined;
    seriesName?: string | null | undefined;
    imageUrl?: string | null | undefined;
    seriesId?: string | null | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
}>;
export declare const dashboardBreedingStatsResponseSchema: z.ZodObject<{
    range: z.ZodEnum<["season", "month", "30d", "180d"]>;
    rangeLabel: z.ZodString;
    summary: z.ZodObject<{
        totalEggCount: z.ZodNumber;
        totalFertilizedCount: z.ZodNumber;
        eggEventCount: z.ZodNumber;
        unrecordedEventCount: z.ZodNumber;
        fertilizationRate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        totalEggCount: number;
        totalFertilizedCount: number;
        eggEventCount: number;
        unrecordedEventCount: number;
        fertilizationRate: number;
    }, {
        totalEggCount: number;
        totalFertilizedCount: number;
        eggEventCount: number;
        unrecordedEventCount: number;
        fertilizationRate: number;
    }>;
    trend: z.ZodArray<z.ZodObject<{
        month: z.ZodString;
        eggCount: z.ZodNumber;
        fertilizedCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        eggCount: number;
        fertilizedCount: number;
        month: string;
    }, {
        eggCount: number;
        fertilizedCount: number;
        month: string;
    }>, "many">;
    ranking: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        code: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        seriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        eggCount: z.ZodNumber;
        fertilizedCount: z.ZodNumber;
        fertilizationRate: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        code: string;
        name: string | null;
        productId: string;
        eggCount: number;
        fertilizedCount: number;
        fertilizationRate: number;
        sex?: string | null | undefined;
        seriesName?: string | null | undefined;
        imageUrl?: string | null | undefined;
        seriesId?: string | null | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    }, {
        code: string;
        name: string | null;
        productId: string;
        eggCount: number;
        fertilizedCount: number;
        fertilizationRate: number;
        sex?: string | null | undefined;
        seriesName?: string | null | undefined;
        imageUrl?: string | null | undefined;
        seriesId?: string | null | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    summary: {
        totalEggCount: number;
        totalFertilizedCount: number;
        eggEventCount: number;
        unrecordedEventCount: number;
        fertilizationRate: number;
    };
    range: "30d" | "season" | "month" | "180d";
    rangeLabel: string;
    trend: {
        eggCount: number;
        fertilizedCount: number;
        month: string;
    }[];
    ranking: {
        code: string;
        name: string | null;
        productId: string;
        eggCount: number;
        fertilizedCount: number;
        fertilizationRate: number;
        sex?: string | null | undefined;
        seriesName?: string | null | undefined;
        imageUrl?: string | null | undefined;
        seriesId?: string | null | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    }[];
}, {
    summary: {
        totalEggCount: number;
        totalFertilizedCount: number;
        eggEventCount: number;
        unrecordedEventCount: number;
        fertilizationRate: number;
    };
    range: "30d" | "season" | "month" | "180d";
    rangeLabel: string;
    trend: {
        eggCount: number;
        fertilizedCount: number;
        month: string;
    }[];
    ranking: {
        code: string;
        name: string | null;
        productId: string;
        eggCount: number;
        fertilizedCount: number;
        fertilizationRate: number;
        sex?: string | null | undefined;
        seriesName?: string | null | undefined;
        imageUrl?: string | null | undefined;
        seriesId?: string | null | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    }[];
}>;
export type DashboardBreedingStatsRange = z.infer<typeof dashboardBreedingStatsRangeSchema>;
export type DashboardBreedingStatsQuery = z.infer<typeof dashboardBreedingStatsQuerySchema>;
export type DashboardBreedingStatsSummary = z.infer<typeof dashboardBreedingStatsSummarySchema>;
export type DashboardBreedingStatsTrendItem = z.infer<typeof dashboardBreedingStatsTrendItemSchema>;
export type DashboardBreedingStatsRankItem = z.infer<typeof dashboardBreedingStatsRankItemSchema>;
export type DashboardBreedingStatsResponse = z.infer<typeof dashboardBreedingStatsResponseSchema>;
