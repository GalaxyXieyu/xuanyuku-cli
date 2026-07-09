import { z } from 'zod';
export declare const subscriptionDiscountStatusSchema: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
export declare const subscriptionPricingItemSchema: z.ZodObject<{
    plan: z.ZodEnum<["BASIC", "PRO"]>;
    durationDays: z.ZodUnion<[z.ZodLiteral<30>, z.ZodLiteral<90>, z.ZodLiteral<365>]>;
    listPriceCents: z.ZodNumber;
    effectivePriceCents: z.ZodNumber;
    payRateBps: z.ZodNumber;
    discountStatus: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
    discountStartsAt: z.ZodNullable<z.ZodString>;
    discountEndsAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    plan: "BASIC" | "PRO";
    durationDays: 30 | 90 | 365;
    listPriceCents: number;
    effectivePriceCents: number;
    payRateBps: number;
    discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
    discountStartsAt: string | null;
    discountEndsAt: string | null;
}, {
    plan: "BASIC" | "PRO";
    durationDays: 30 | 90 | 365;
    listPriceCents: number;
    effectivePriceCents: number;
    payRateBps: number;
    discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
    discountStartsAt: string | null;
    discountEndsAt: string | null;
}>;
export declare const subscriptionPricingDiscountSchema: z.ZodEffects<z.ZodObject<{
    enabled: z.ZodBoolean;
    payRateBps: z.ZodNumber;
    startsAt: z.ZodNullable<z.ZodString>;
    endsAt: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
    startsAt: string | null;
    payRateBps: number;
    enabled: boolean;
    endsAt: string | null;
}, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
    startsAt: string | null;
    payRateBps: number;
    enabled: boolean;
    endsAt: string | null;
}>, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
    startsAt: string | null;
    payRateBps: number;
    enabled: boolean;
    endsAt: string | null;
}, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
    startsAt: string | null;
    payRateBps: number;
    enabled: boolean;
    endsAt: string | null;
}>;
export declare const subscriptionPricingCatalogSchema: z.ZodObject<{
    generatedAt: z.ZodString;
    discount: z.ZodEffects<z.ZodObject<{
        enabled: z.ZodBoolean;
        payRateBps: z.ZodNumber;
        startsAt: z.ZodNullable<z.ZodString>;
        endsAt: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    }>, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    }>;
    items: z.ZodArray<z.ZodObject<{
        plan: z.ZodEnum<["BASIC", "PRO"]>;
        durationDays: z.ZodUnion<[z.ZodLiteral<30>, z.ZodLiteral<90>, z.ZodLiteral<365>]>;
        listPriceCents: z.ZodNumber;
        effectivePriceCents: z.ZodNumber;
        payRateBps: z.ZodNumber;
        discountStatus: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
        discountStartsAt: z.ZodNullable<z.ZodString>;
        discountEndsAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        plan: "BASIC" | "PRO";
        durationDays: 30 | 90 | 365;
        listPriceCents: number;
        effectivePriceCents: number;
        payRateBps: number;
        discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        discountStartsAt: string | null;
        discountEndsAt: string | null;
    }, {
        plan: "BASIC" | "PRO";
        durationDays: 30 | 90 | 365;
        listPriceCents: number;
        effectivePriceCents: number;
        payRateBps: number;
        discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        discountStartsAt: string | null;
        discountEndsAt: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        plan: "BASIC" | "PRO";
        durationDays: 30 | 90 | 365;
        listPriceCents: number;
        effectivePriceCents: number;
        payRateBps: number;
        discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        discountStartsAt: string | null;
        discountEndsAt: string | null;
    }[];
    generatedAt: string;
    discount: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    };
}, {
    items: {
        plan: "BASIC" | "PRO";
        durationDays: 30 | 90 | 365;
        listPriceCents: number;
        effectivePriceCents: number;
        payRateBps: number;
        discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        discountStartsAt: string | null;
        discountEndsAt: string | null;
    }[];
    generatedAt: string;
    discount: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    };
}>;
export declare const subscriptionPricingCatalogResponseSchema: z.ZodObject<{
    catalog: z.ZodObject<{
        generatedAt: z.ZodString;
        discount: z.ZodEffects<z.ZodObject<{
            enabled: z.ZodBoolean;
            payRateBps: z.ZodNumber;
            startsAt: z.ZodNullable<z.ZodString>;
            endsAt: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }>, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }>;
        items: z.ZodArray<z.ZodObject<{
            plan: z.ZodEnum<["BASIC", "PRO"]>;
            durationDays: z.ZodUnion<[z.ZodLiteral<30>, z.ZodLiteral<90>, z.ZodLiteral<365>]>;
            listPriceCents: z.ZodNumber;
            effectivePriceCents: z.ZodNumber;
            payRateBps: z.ZodNumber;
            discountStatus: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
            discountStartsAt: z.ZodNullable<z.ZodString>;
            discountEndsAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }, {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    }, {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    catalog: {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    };
}, {
    catalog: {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    };
}>;
export declare const updateAdminSubscriptionPricingRequestSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        plan: z.ZodEnum<["BASIC", "PRO"]>;
        durationDays: z.ZodUnion<[z.ZodLiteral<30>, z.ZodLiteral<90>, z.ZodLiteral<365>]>;
        listPriceCents: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        plan: "BASIC" | "PRO";
        durationDays: 30 | 90 | 365;
        listPriceCents: number;
    }, {
        plan: "BASIC" | "PRO";
        durationDays: 30 | 90 | 365;
        listPriceCents: number;
    }>, "many">;
    discount: z.ZodObject<Omit<{
        enabled: z.ZodBoolean;
        payRateBps: z.ZodNumber;
        startsAt: z.ZodNullable<z.ZodString>;
        endsAt: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
    }, "status">, "strip", z.ZodTypeAny, {
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    }, {
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    items: {
        plan: "BASIC" | "PRO";
        durationDays: 30 | 90 | 365;
        listPriceCents: number;
    }[];
    discount: {
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    };
}, {
    items: {
        plan: "BASIC" | "PRO";
        durationDays: 30 | 90 | 365;
        listPriceCents: number;
    }[];
    discount: {
        startsAt: string | null;
        payRateBps: number;
        enabled: boolean;
        endsAt: string | null;
    };
}>;
export declare const adminSubscriptionPricingResponseSchema: z.ZodObject<{
    catalog: z.ZodObject<{
        generatedAt: z.ZodString;
        discount: z.ZodEffects<z.ZodObject<{
            enabled: z.ZodBoolean;
            payRateBps: z.ZodNumber;
            startsAt: z.ZodNullable<z.ZodString>;
            endsAt: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }>, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }>;
        items: z.ZodArray<z.ZodObject<{
            plan: z.ZodEnum<["BASIC", "PRO"]>;
            durationDays: z.ZodUnion<[z.ZodLiteral<30>, z.ZodLiteral<90>, z.ZodLiteral<365>]>;
            listPriceCents: z.ZodNumber;
            effectivePriceCents: z.ZodNumber;
            payRateBps: z.ZodNumber;
            discountStatus: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
            discountStartsAt: z.ZodNullable<z.ZodString>;
            discountEndsAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }, {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    }, {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    catalog: {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    };
}, {
    catalog: {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    };
}>;
export declare const updateAdminSubscriptionPricingResponseSchema: z.ZodObject<{
    catalog: z.ZodObject<{
        generatedAt: z.ZodString;
        discount: z.ZodEffects<z.ZodObject<{
            enabled: z.ZodBoolean;
            payRateBps: z.ZodNumber;
            startsAt: z.ZodNullable<z.ZodString>;
            endsAt: z.ZodNullable<z.ZodString>;
            status: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }>, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        }>;
        items: z.ZodArray<z.ZodObject<{
            plan: z.ZodEnum<["BASIC", "PRO"]>;
            durationDays: z.ZodUnion<[z.ZodLiteral<30>, z.ZodLiteral<90>, z.ZodLiteral<365>]>;
            listPriceCents: z.ZodNumber;
            effectivePriceCents: z.ZodNumber;
            payRateBps: z.ZodNumber;
            discountStatus: z.ZodEnum<["DISABLED", "SCHEDULED", "ACTIVE", "EXPIRED"]>;
            discountStartsAt: z.ZodNullable<z.ZodString>;
            discountEndsAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }, {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    }, {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auditLogId: string;
    catalog: {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    };
}, {
    auditLogId: string;
    catalog: {
        items: {
            plan: "BASIC" | "PRO";
            durationDays: 30 | 90 | 365;
            listPriceCents: number;
            effectivePriceCents: number;
            payRateBps: number;
            discountStatus: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            discountStartsAt: string | null;
            discountEndsAt: string | null;
        }[];
        generatedAt: string;
        discount: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED" | "SCHEDULED";
            startsAt: string | null;
            payRateBps: number;
            enabled: boolean;
            endsAt: string | null;
        };
    };
}>;
export declare const DEFAULT_SUBSCRIPTION_PRICING_ITEMS: readonly [{
    readonly plan: "BASIC";
    readonly durationDays: 30;
    readonly listPriceCents: 2800;
}, {
    readonly plan: "BASIC";
    readonly durationDays: 90;
    readonly listPriceCents: 7900;
}, {
    readonly plan: "BASIC";
    readonly durationDays: 365;
    readonly listPriceCents: 29900;
}, {
    readonly plan: "PRO";
    readonly durationDays: 30;
    readonly listPriceCents: 4900;
}, {
    readonly plan: "PRO";
    readonly durationDays: 90;
    readonly listPriceCents: 12900;
}, {
    readonly plan: "PRO";
    readonly durationDays: 365;
    readonly listPriceCents: 49900;
}];
export type SubscriptionDiscountStatus = z.infer<typeof subscriptionDiscountStatusSchema>;
export type SubscriptionPricingItem = z.infer<typeof subscriptionPricingItemSchema>;
export type SubscriptionPricingDiscount = z.infer<typeof subscriptionPricingDiscountSchema>;
export type SubscriptionPricingCatalog = z.infer<typeof subscriptionPricingCatalogSchema>;
export type SubscriptionPricingCatalogResponse = z.infer<typeof subscriptionPricingCatalogResponseSchema>;
export type UpdateAdminSubscriptionPricingRequest = z.infer<typeof updateAdminSubscriptionPricingRequestSchema>;
export type AdminSubscriptionPricingResponse = z.infer<typeof adminSubscriptionPricingResponseSchema>;
export type UpdateAdminSubscriptionPricingResponse = z.infer<typeof updateAdminSubscriptionPricingResponseSchema>;
