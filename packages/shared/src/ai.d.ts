import { z } from 'zod';
export declare const aiQuotaScopeSchema: z.ZodEnum<["tenant"]>;
export declare const aiQuotaPeriodSchema: z.ZodEnum<["monthly"]>;
export declare const aiQuotaUnitSchema: z.ZodEnum<["image_count"]>;
export declare const aiInputLimitSchema: z.ZodObject<{
    maxImages: z.ZodLiteral<3>;
    maxSingleImageBytes: z.ZodLiteral<number>;
    maxTotalInputBytes: z.ZodLiteral<number>;
}, "strip", z.ZodTypeAny, {
    maxImages: 3;
    maxSingleImageBytes: number;
    maxTotalInputBytes: number;
}, {
    maxImages: 3;
    maxSingleImageBytes: number;
    maxTotalInputBytes: number;
}>;
export declare const aiQuotaSummarySchema: z.ZodObject<{
    scope: z.ZodEnum<["tenant"]>;
    period: z.ZodEnum<["monthly"]>;
    unit: z.ZodEnum<["image_count"]>;
    limit: z.ZodNullable<z.ZodNumber>;
    used: z.ZodNumber;
    remaining: z.ZodNullable<z.ZodNumber>;
    resetAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    limit: number | null;
    scope: "tenant";
    used: number;
    remaining: number | null;
    period: "monthly";
    unit: "image_count";
    resetAt: string | null;
}, {
    limit: number | null;
    scope: "tenant";
    used: number;
    remaining: number | null;
    period: "monthly";
    unit: "image_count";
    resetAt: string | null;
}>;
export declare const aiQuotaStatusResponseSchema: z.ZodObject<{
    tenantId: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        scope: z.ZodEnum<["tenant"]>;
        period: z.ZodEnum<["monthly"]>;
        unit: z.ZodEnum<["image_count"]>;
        limit: z.ZodNullable<z.ZodNumber>;
        used: z.ZodNumber;
        remaining: z.ZodNullable<z.ZodNumber>;
        resetAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        limit: number | null;
        scope: "tenant";
        used: number;
        remaining: number | null;
        period: "monthly";
        unit: "image_count";
        resetAt: string | null;
    }, {
        limit: number | null;
        scope: "tenant";
        used: number;
        remaining: number | null;
        period: "monthly";
        unit: "image_count";
        resetAt: string | null;
    }>, "many">;
    checkedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    items: {
        limit: number | null;
        scope: "tenant";
        used: number;
        remaining: number | null;
        period: "monthly";
        unit: "image_count";
        resetAt: string | null;
    }[];
    checkedAt: string;
}, {
    tenantId: string;
    items: {
        limit: number | null;
        scope: "tenant";
        used: number;
        remaining: number | null;
        period: "monthly";
        unit: "image_count";
        resetAt: string | null;
    }[];
    checkedAt: string;
}>;
export declare const turtleAnalysisImageInputSchema: z.ZodObject<{
    key: z.ZodEffects<z.ZodString, string, string>;
    contentType: z.ZodOptional<z.ZodString>;
    sizeBytes: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    key: string;
    contentType?: string | undefined;
    sizeBytes?: number | undefined;
}, {
    key: string;
    contentType?: string | undefined;
    sizeBytes?: number | undefined;
}>;
export declare const turtleAnalysisEnvironmentSchema: z.ZodObject<{
    waterTempC: z.ZodOptional<z.ZodNumber>;
    baskingTempC: z.ZodOptional<z.ZodNumber>;
    tankSizeLiters: z.ZodOptional<z.ZodNumber>;
    diet: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    waterTempC?: number | undefined;
    baskingTempC?: number | undefined;
    tankSizeLiters?: number | undefined;
    diet?: string | undefined;
}, {
    waterTempC?: number | undefined;
    baskingTempC?: number | undefined;
    tankSizeLiters?: number | undefined;
    diet?: string | undefined;
}>;
export declare const turtleAnalysisRequestSchema: z.ZodObject<{
    images: z.ZodArray<z.ZodObject<{
        key: z.ZodEffects<z.ZodString, string, string>;
        contentType: z.ZodOptional<z.ZodString>;
        sizeBytes: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        key: string;
        contentType?: string | undefined;
        sizeBytes?: number | undefined;
    }, {
        key: string;
        contentType?: string | undefined;
        sizeBytes?: number | undefined;
    }>, "many">;
    species: z.ZodOptional<z.ZodString>;
    ageRange: z.ZodOptional<z.ZodString>;
    weightGrams: z.ZodOptional<z.ZodNumber>;
    environment: z.ZodOptional<z.ZodObject<{
        waterTempC: z.ZodOptional<z.ZodNumber>;
        baskingTempC: z.ZodOptional<z.ZodNumber>;
        tankSizeLiters: z.ZodOptional<z.ZodNumber>;
        diet: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        waterTempC?: number | undefined;
        baskingTempC?: number | undefined;
        tankSizeLiters?: number | undefined;
        diet?: string | undefined;
    }, {
        waterTempC?: number | undefined;
        baskingTempC?: number | undefined;
        tankSizeLiters?: number | undefined;
        diet?: string | undefined;
    }>>;
    question: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    images: {
        key: string;
        contentType?: string | undefined;
        sizeBytes?: number | undefined;
    }[];
    species?: string | undefined;
    question?: string | undefined;
    ageRange?: string | undefined;
    weightGrams?: number | undefined;
    environment?: {
        waterTempC?: number | undefined;
        baskingTempC?: number | undefined;
        tankSizeLiters?: number | undefined;
        diet?: string | undefined;
    } | undefined;
}, {
    images: {
        key: string;
        contentType?: string | undefined;
        sizeBytes?: number | undefined;
    }[];
    species?: string | undefined;
    question?: string | undefined;
    ageRange?: string | undefined;
    weightGrams?: number | undefined;
    environment?: {
        waterTempC?: number | undefined;
        baskingTempC?: number | undefined;
        tankSizeLiters?: number | undefined;
        diet?: string | undefined;
    } | undefined;
}>;
export declare const turtleAnalysisResultSchema: z.ZodObject<{
    observations: z.ZodArray<z.ZodString, "many">;
    riskNotes: z.ZodArray<z.ZodString, "many">;
    careChecklist: z.ZodArray<z.ZodString, "many">;
    followUp: z.ZodArray<z.ZodString, "many">;
    disclaimer: z.ZodString;
}, "strip", z.ZodTypeAny, {
    observations: string[];
    riskNotes: string[];
    careChecklist: string[];
    followUp: string[];
    disclaimer: string;
}, {
    observations: string[];
    riskNotes: string[];
    careChecklist: string[];
    followUp: string[];
    disclaimer: string;
}>;
export declare const turtleAnalysisResponseSchema: z.ZodObject<{
    analysisId: z.ZodString;
    result: z.ZodObject<{
        observations: z.ZodArray<z.ZodString, "many">;
        riskNotes: z.ZodArray<z.ZodString, "many">;
        careChecklist: z.ZodArray<z.ZodString, "many">;
        followUp: z.ZodArray<z.ZodString, "many">;
        disclaimer: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        observations: string[];
        riskNotes: string[];
        careChecklist: string[];
        followUp: string[];
        disclaimer: string;
    }, {
        observations: string[];
        riskNotes: string[];
        careChecklist: string[];
        followUp: string[];
        disclaimer: string;
    }>;
    quotaConsumed: z.ZodNumber;
    quota: z.ZodObject<{
        scope: z.ZodEnum<["tenant"]>;
        period: z.ZodEnum<["monthly"]>;
        unit: z.ZodEnum<["image_count"]>;
        limit: z.ZodNullable<z.ZodNumber>;
        used: z.ZodNumber;
        remaining: z.ZodNullable<z.ZodNumber>;
        resetAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        limit: number | null;
        scope: "tenant";
        used: number;
        remaining: number | null;
        period: "monthly";
        unit: "image_count";
        resetAt: string | null;
    }, {
        limit: number | null;
        scope: "tenant";
        used: number;
        remaining: number | null;
        period: "monthly";
        unit: "image_count";
        resetAt: string | null;
    }>;
    modelId: z.ZodString;
    limits: z.ZodObject<{
        maxImages: z.ZodLiteral<3>;
        maxSingleImageBytes: z.ZodLiteral<number>;
        maxTotalInputBytes: z.ZodLiteral<number>;
    }, "strip", z.ZodTypeAny, {
        maxImages: 3;
        maxSingleImageBytes: number;
        maxTotalInputBytes: number;
    }, {
        maxImages: 3;
        maxSingleImageBytes: number;
        maxTotalInputBytes: number;
    }>;
}, "strip", z.ZodTypeAny, {
    result: {
        observations: string[];
        riskNotes: string[];
        careChecklist: string[];
        followUp: string[];
        disclaimer: string;
    };
    quota: {
        limit: number | null;
        scope: "tenant";
        used: number;
        remaining: number | null;
        period: "monthly";
        unit: "image_count";
        resetAt: string | null;
    };
    analysisId: string;
    quotaConsumed: number;
    modelId: string;
    limits: {
        maxImages: 3;
        maxSingleImageBytes: number;
        maxTotalInputBytes: number;
    };
}, {
    result: {
        observations: string[];
        riskNotes: string[];
        careChecklist: string[];
        followUp: string[];
        disclaimer: string;
    };
    quota: {
        limit: number | null;
        scope: "tenant";
        used: number;
        remaining: number | null;
        period: "monthly";
        unit: "image_count";
        resetAt: string | null;
    };
    analysisId: string;
    quotaConsumed: number;
    modelId: string;
    limits: {
        maxImages: 3;
        maxSingleImageBytes: number;
        maxTotalInputBytes: number;
    };
}>;
export declare const aiPurchasePackSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    imageCredits: z.ZodNumber;
    priceCents: z.ZodNumber;
    currency: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    currency: string;
    priceCents: number;
    imageCredits: number;
}, {
    id: string;
    name: string;
    currency: string;
    priceCents: number;
    imageCredits: number;
}>;
export declare const aiQuotaExceededErrorDataSchema: z.ZodObject<{
    remaining: z.ZodNumber;
    resetAt: z.ZodNullable<z.ZodString>;
    purchase: z.ZodObject<{
        packs: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            imageCredits: z.ZodNumber;
            priceCents: z.ZodNumber;
            currency: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            currency: string;
            priceCents: number;
            imageCredits: number;
        }, {
            id: string;
            name: string;
            currency: string;
            priceCents: number;
            imageCredits: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        packs: {
            id: string;
            name: string;
            currency: string;
            priceCents: number;
            imageCredits: number;
        }[];
    }, {
        packs: {
            id: string;
            name: string;
            currency: string;
            priceCents: number;
            imageCredits: number;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    remaining: number;
    resetAt: string | null;
    purchase: {
        packs: {
            id: string;
            name: string;
            currency: string;
            priceCents: number;
            imageCredits: number;
        }[];
    };
}, {
    remaining: number;
    resetAt: string | null;
    purchase: {
        packs: {
            id: string;
            name: string;
            currency: string;
            priceCents: number;
            imageCredits: number;
        }[];
    };
}>;
export declare const aiQuotaExceededErrorResponseSchema: z.ZodObject<{
    message: z.ZodString;
    errorCode: z.ZodLiteral<"QUOTA_EXCEEDED">;
    statusCode: z.ZodUnion<[z.ZodLiteral<402>, z.ZodLiteral<429>]>;
    data: z.ZodObject<{
        remaining: z.ZodNumber;
        resetAt: z.ZodNullable<z.ZodString>;
        purchase: z.ZodObject<{
            packs: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                imageCredits: z.ZodNumber;
                priceCents: z.ZodNumber;
                currency: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                currency: string;
                priceCents: number;
                imageCredits: number;
            }, {
                id: string;
                name: string;
                currency: string;
                priceCents: number;
                imageCredits: number;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            packs: {
                id: string;
                name: string;
                currency: string;
                priceCents: number;
                imageCredits: number;
            }[];
        }, {
            packs: {
                id: string;
                name: string;
                currency: string;
                priceCents: number;
                imageCredits: number;
            }[];
        }>;
    }, "strip", z.ZodTypeAny, {
        remaining: number;
        resetAt: string | null;
        purchase: {
            packs: {
                id: string;
                name: string;
                currency: string;
                priceCents: number;
                imageCredits: number;
            }[];
        };
    }, {
        remaining: number;
        resetAt: string | null;
        purchase: {
            packs: {
                id: string;
                name: string;
                currency: string;
                priceCents: number;
                imageCredits: number;
            }[];
        };
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    errorCode: "QUOTA_EXCEEDED";
    statusCode: 402 | 429;
    data: {
        remaining: number;
        resetAt: string | null;
        purchase: {
            packs: {
                id: string;
                name: string;
                currency: string;
                priceCents: number;
                imageCredits: number;
            }[];
        };
    };
}, {
    message: string;
    errorCode: "QUOTA_EXCEEDED";
    statusCode: 402 | 429;
    data: {
        remaining: number;
        resetAt: string | null;
        purchase: {
            packs: {
                id: string;
                name: string;
                currency: string;
                priceCents: number;
                imageCredits: number;
            }[];
        };
    };
}>;
export declare const aiInputTooLargeErrorResponseSchema: z.ZodObject<{
    message: z.ZodString;
    errorCode: z.ZodLiteral<"INVALID_REQUEST_PAYLOAD">;
    statusCode: z.ZodLiteral<413>;
    data: z.ZodObject<{
        maxSingleImageBytes: z.ZodLiteral<number>;
        actualSingleImageBytes: z.ZodOptional<z.ZodNumber>;
        maxTotalInputBytes: z.ZodLiteral<number>;
        actualTotalInputBytes: z.ZodOptional<z.ZodNumber>;
        reason: z.ZodOptional<z.ZodEnum<["single_image", "total"]>>;
    }, "strip", z.ZodTypeAny, {
        maxSingleImageBytes: number;
        maxTotalInputBytes: number;
        reason?: "total" | "single_image" | undefined;
        actualSingleImageBytes?: number | undefined;
        actualTotalInputBytes?: number | undefined;
    }, {
        maxSingleImageBytes: number;
        maxTotalInputBytes: number;
        reason?: "total" | "single_image" | undefined;
        actualSingleImageBytes?: number | undefined;
        actualTotalInputBytes?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    message: string;
    errorCode: "INVALID_REQUEST_PAYLOAD";
    statusCode: 413;
    data: {
        maxSingleImageBytes: number;
        maxTotalInputBytes: number;
        reason?: "total" | "single_image" | undefined;
        actualSingleImageBytes?: number | undefined;
        actualTotalInputBytes?: number | undefined;
    };
}, {
    message: string;
    errorCode: "INVALID_REQUEST_PAYLOAD";
    statusCode: 413;
    data: {
        maxSingleImageBytes: number;
        maxTotalInputBytes: number;
        reason?: "total" | "single_image" | undefined;
        actualSingleImageBytes?: number | undefined;
        actualTotalInputBytes?: number | undefined;
    };
}>;
export declare const aiPlanTierSchema: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
export declare const aiAssistantCapabilitySchema: z.ZodEnum<["auto_record", "query_only", "product_intake"]>;
export declare const aiAssistantQuotaUnitSchema: z.ZodEnum<["action_count", "query_count"]>;
export declare const aiAssistantProviderSchema: z.ZodEnum<["siliconflow", "local_heuristic", "local_defaults"]>;
export declare const aiAssistantQuotaItemSchema: z.ZodObject<{
    capability: z.ZodEnum<["auto_record", "query_only", "product_intake"]>;
    period: z.ZodEnum<["monthly"]>;
    unit: z.ZodEnum<["action_count", "query_count"]>;
    baseLimit: z.ZodNumber;
    topUpBalance: z.ZodNumber;
    consumed: z.ZodNumber;
    remaining: z.ZodNumber;
    resetAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    consumed: number;
    remaining: number;
    period: "monthly";
    unit: "action_count" | "query_count";
    resetAt: string | null;
    capability: "auto_record" | "query_only" | "product_intake";
    baseLimit: number;
    topUpBalance: number;
}, {
    consumed: number;
    remaining: number;
    period: "monthly";
    unit: "action_count" | "query_count";
    resetAt: string | null;
    capability: "auto_record" | "query_only" | "product_intake";
    baseLimit: number;
    topUpBalance: number;
}>;
export declare const aiAssistantQuotaHighlightSchema: z.ZodObject<{
    capability: z.ZodEnum<["auto_record", "query_only", "product_intake"]>;
    baseLimit: z.ZodNumber;
    topUpBalance: z.ZodNumber;
    remaining: z.ZodNumber;
    consumed: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    consumed: number;
    remaining: number;
    capability: "auto_record" | "query_only" | "product_intake";
    baseLimit: number;
    topUpBalance: number;
}, {
    consumed: number;
    remaining: number;
    capability: "auto_record" | "query_only" | "product_intake";
    baseLimit: number;
    topUpBalance: number;
}>;
export declare const aiAssistantQuotaStatusResponseSchema: z.ZodObject<{
    tenantId: z.ZodString;
    plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
    allowMultipleTopUps: z.ZodLiteral<true>;
    highlights: z.ZodObject<{
        autoRecord: z.ZodObject<{
            baseLimit: z.ZodNumber;
            topUpBalance: z.ZodNumber;
            remaining: z.ZodNumber;
            consumed: z.ZodNumber;
        } & {
            capability: z.ZodLiteral<"auto_record">;
        }, "strip", z.ZodTypeAny, {
            consumed: number;
            remaining: number;
            capability: "auto_record";
            baseLimit: number;
            topUpBalance: number;
        }, {
            consumed: number;
            remaining: number;
            capability: "auto_record";
            baseLimit: number;
            topUpBalance: number;
        }>;
        queryOnly: z.ZodObject<{
            baseLimit: z.ZodNumber;
            topUpBalance: z.ZodNumber;
            remaining: z.ZodNumber;
            consumed: z.ZodNumber;
        } & {
            capability: z.ZodLiteral<"query_only">;
        }, "strip", z.ZodTypeAny, {
            consumed: number;
            remaining: number;
            capability: "query_only";
            baseLimit: number;
            topUpBalance: number;
        }, {
            consumed: number;
            remaining: number;
            capability: "query_only";
            baseLimit: number;
            topUpBalance: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        autoRecord: {
            consumed: number;
            remaining: number;
            capability: "auto_record";
            baseLimit: number;
            topUpBalance: number;
        };
        queryOnly: {
            consumed: number;
            remaining: number;
            capability: "query_only";
            baseLimit: number;
            topUpBalance: number;
        };
    }, {
        autoRecord: {
            consumed: number;
            remaining: number;
            capability: "auto_record";
            baseLimit: number;
            topUpBalance: number;
        };
        queryOnly: {
            consumed: number;
            remaining: number;
            capability: "query_only";
            baseLimit: number;
            topUpBalance: number;
        };
    }>;
    items: z.ZodArray<z.ZodObject<{
        capability: z.ZodEnum<["auto_record", "query_only", "product_intake"]>;
        period: z.ZodEnum<["monthly"]>;
        unit: z.ZodEnum<["action_count", "query_count"]>;
        baseLimit: z.ZodNumber;
        topUpBalance: z.ZodNumber;
        consumed: z.ZodNumber;
        remaining: z.ZodNumber;
        resetAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        consumed: number;
        remaining: number;
        period: "monthly";
        unit: "action_count" | "query_count";
        resetAt: string | null;
        capability: "auto_record" | "query_only" | "product_intake";
        baseLimit: number;
        topUpBalance: number;
    }, {
        consumed: number;
        remaining: number;
        period: "monthly";
        unit: "action_count" | "query_count";
        resetAt: string | null;
        capability: "auto_record" | "query_only" | "product_intake";
        baseLimit: number;
        topUpBalance: number;
    }>, "many">;
    checkedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    items: {
        consumed: number;
        remaining: number;
        period: "monthly";
        unit: "action_count" | "query_count";
        resetAt: string | null;
        capability: "auto_record" | "query_only" | "product_intake";
        baseLimit: number;
        topUpBalance: number;
    }[];
    plan: "FREE" | "BASIC" | "PRO";
    checkedAt: string;
    allowMultipleTopUps: true;
    highlights: {
        autoRecord: {
            consumed: number;
            remaining: number;
            capability: "auto_record";
            baseLimit: number;
            topUpBalance: number;
        };
        queryOnly: {
            consumed: number;
            remaining: number;
            capability: "query_only";
            baseLimit: number;
            topUpBalance: number;
        };
    };
}, {
    tenantId: string;
    items: {
        consumed: number;
        remaining: number;
        period: "monthly";
        unit: "action_count" | "query_count";
        resetAt: string | null;
        capability: "auto_record" | "query_only" | "product_intake";
        baseLimit: number;
        topUpBalance: number;
    }[];
    plan: "FREE" | "BASIC" | "PRO";
    checkedAt: string;
    allowMultipleTopUps: true;
    highlights: {
        autoRecord: {
            consumed: number;
            remaining: number;
            capability: "auto_record";
            baseLimit: number;
            topUpBalance: number;
        };
        queryOnly: {
            consumed: number;
            remaining: number;
            capability: "query_only";
            baseLimit: number;
            topUpBalance: number;
        };
    };
}>;
export declare const aiReservedStatusSchema: z.ZodLiteral<"reserved">;
export declare const aiReservedTodoCodeSchema: z.ZodEnum<["NO_DB_PERSISTENCE", "PAYMENT_NOT_CONNECTED", "AUTO_EXECUTION_NOT_ENABLED", "QUERY_ENGINE_NOT_ENABLED"]>;
export declare const aiReservedTodoItemSchema: z.ZodObject<{
    code: z.ZodEnum<["NO_DB_PERSISTENCE", "PAYMENT_NOT_CONNECTED", "AUTO_EXECUTION_NOT_ENABLED", "QUERY_ENGINE_NOT_ENABLED"]>;
    detail: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
    detail: string;
}, {
    code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
    detail: string;
}>;
export declare const aiAutoRecordEventTypeSchema: z.ZodEnum<["daily", "health", "mating", "egg", "change_mate"]>;
export declare const aiAutoRecordStatusSchema: z.ZodEnum<["success", "fallback"]>;
export declare const aiAutoRecordIntentSchema: z.ZodObject<{
    eventType: z.ZodEnum<["daily", "health", "mating", "egg", "change_mate"]>;
    eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    confidence: z.ZodNumber;
    reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    shouldSuggestBreedingDetails: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    eventType: "daily" | "health" | "mating" | "egg" | "change_mate";
    confidence: number;
    shouldSuggestBreedingDetails: boolean;
    reason?: string | null | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
}, {
    eventType: "daily" | "health" | "mating" | "egg" | "change_mate";
    confidence: number;
    shouldSuggestBreedingDetails: boolean;
    reason?: string | null | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
}>;
export declare const aiAutoRecordIntentRequestSchema: z.ZodObject<{
    input: z.ZodString;
    referenceDate: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
    productSex: z.ZodOptional<z.ZodEnum<["male", "female", "unknown"]>>;
}, "strip", z.ZodTypeAny, {
    input: string;
    timezone?: string | undefined;
    referenceDate?: string | undefined;
    productSex?: "unknown" | "male" | "female" | undefined;
}, {
    input: string;
    timezone?: string | undefined;
    referenceDate?: string | undefined;
    productSex?: "unknown" | "male" | "female" | undefined;
}>;
export declare const aiAutoRecordIntentResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    status: z.ZodEnum<["success", "fallback"]>;
    capability: z.ZodLiteral<"auto_record">;
    provider: z.ZodEnum<["siliconflow", "local_heuristic", "local_defaults"]>;
    model: z.ZodString;
    result: z.ZodObject<{
        eventType: z.ZodEnum<["daily", "health", "mating", "egg", "change_mate"]>;
        eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        confidence: z.ZodNumber;
        reason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        shouldSuggestBreedingDetails: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        eventType: "daily" | "health" | "mating" | "egg" | "change_mate";
        confidence: number;
        shouldSuggestBreedingDetails: boolean;
        reason?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
    }, {
        eventType: "daily" | "health" | "mating" | "egg" | "change_mate";
        confidence: number;
        shouldSuggestBreedingDetails: boolean;
        reason?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    status: "success" | "fallback";
    result: {
        eventType: "daily" | "health" | "mating" | "egg" | "change_mate";
        confidence: number;
        shouldSuggestBreedingDetails: boolean;
        reason?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
    };
    provider: "siliconflow" | "local_heuristic" | "local_defaults";
    capability: "auto_record";
    requestId: string;
    model: string;
}, {
    status: "success" | "fallback";
    result: {
        eventType: "daily" | "health" | "mating" | "egg" | "change_mate";
        confidence: number;
        shouldSuggestBreedingDetails: boolean;
        reason?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
    };
    provider: "siliconflow" | "local_heuristic" | "local_defaults";
    capability: "auto_record";
    requestId: string;
    model: string;
}>;
export declare const aiAudioTranscriptionResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    status: z.ZodLiteral<"success">;
    provider: z.ZodEnum<["siliconflow", "local_heuristic", "local_defaults"]>;
    model: z.ZodString;
    text: z.ZodString;
    language: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    status: "success";
    text: string;
    provider: "siliconflow" | "local_heuristic" | "local_defaults";
    requestId: string;
    model: string;
    language?: string | null | undefined;
}, {
    status: "success";
    text: string;
    provider: "siliconflow" | "local_heuristic" | "local_defaults";
    requestId: string;
    model: string;
    language?: string | null | undefined;
}>;
export declare const aiProductIntakeStatusSchema: z.ZodEnum<["success", "fallback"]>;
export declare const aiProductIntakeSexSchema: z.ZodEnum<["male", "female", "unknown"]>;
export declare const aiProductIntakeSeriesResolutionModeSchema: z.ZodEnum<["matched", "created_needed", "defaulted"]>;
export declare const aiProductIntakeDefaultCodeSchema: z.ZodEnum<["sex", "series", "alias", "description"]>;
export declare const aiProductEnrichmentJobStatusSchema: z.ZodEnum<["PENDING", "PROCESSING", "SUCCEEDED", "FAILED"]>;
export declare const aiProductIntakeParseRequestSchema: z.ZodObject<{
    input: z.ZodString;
    referenceDate: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
    imageCount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    input: string;
    timezone?: string | undefined;
    referenceDate?: string | undefined;
    imageCount?: number | undefined;
}, {
    input: string;
    timezone?: string | undefined;
    referenceDate?: string | undefined;
    imageCount?: number | undefined;
}>;
export declare const aiProductIntakeParsedFieldsSchema: z.ZodObject<{
    sex: z.ZodNullable<z.ZodEnum<["male", "female", "unknown"]>>;
    alias: z.ZodNullable<z.ZodString>;
    seriesName: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    alias: string | null;
    sex: "unknown" | "male" | "female" | null;
    description: string | null;
    seriesName: string | null;
}, {
    alias: string | null;
    sex: "unknown" | "male" | "female" | null;
    description: string | null;
    seriesName: string | null;
}>;
export declare const aiProductIntakeSeriesResolutionSchema: z.ZodObject<{
    mode: z.ZodEnum<["matched", "created_needed", "defaulted"]>;
    matchedSeriesId: z.ZodNullable<z.ZodString>;
    matchedSeriesName: z.ZodNullable<z.ZodString>;
    suggestedNewSeriesName: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    mode: "matched" | "created_needed" | "defaulted";
    matchedSeriesId: string | null;
    matchedSeriesName: string | null;
    suggestedNewSeriesName: string | null;
}, {
    mode: "matched" | "created_needed" | "defaulted";
    matchedSeriesId: string | null;
    matchedSeriesName: string | null;
    suggestedNewSeriesName: string | null;
}>;
export declare const aiProductIntakeParseResultSchema: z.ZodObject<{
    normalizedInput: z.ZodString;
    confidence: z.ZodNumber;
    fields: z.ZodObject<{
        sex: z.ZodNullable<z.ZodEnum<["male", "female", "unknown"]>>;
        alias: z.ZodNullable<z.ZodString>;
        seriesName: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        alias: string | null;
        sex: "unknown" | "male" | "female" | null;
        description: string | null;
        seriesName: string | null;
    }, {
        alias: string | null;
        sex: "unknown" | "male" | "female" | null;
        description: string | null;
        seriesName: string | null;
    }>;
    seriesResolution: z.ZodObject<{
        mode: z.ZodEnum<["matched", "created_needed", "defaulted"]>;
        matchedSeriesId: z.ZodNullable<z.ZodString>;
        matchedSeriesName: z.ZodNullable<z.ZodString>;
        suggestedNewSeriesName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        mode: "matched" | "created_needed" | "defaulted";
        matchedSeriesId: string | null;
        matchedSeriesName: string | null;
        suggestedNewSeriesName: string | null;
    }, {
        mode: "matched" | "created_needed" | "defaulted";
        matchedSeriesId: string | null;
        matchedSeriesName: string | null;
        suggestedNewSeriesName: string | null;
    }>;
    defaultsApplied: z.ZodArray<z.ZodEnum<["sex", "series", "alias", "description"]>, "many">;
    warnings: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    confidence: number;
    normalizedInput: string;
    fields: {
        alias: string | null;
        sex: "unknown" | "male" | "female" | null;
        description: string | null;
        seriesName: string | null;
    };
    seriesResolution: {
        mode: "matched" | "created_needed" | "defaulted";
        matchedSeriesId: string | null;
        matchedSeriesName: string | null;
        suggestedNewSeriesName: string | null;
    };
    defaultsApplied: ("alias" | "sex" | "description" | "series")[];
    warnings: string[];
}, {
    confidence: number;
    normalizedInput: string;
    fields: {
        alias: string | null;
        sex: "unknown" | "male" | "female" | null;
        description: string | null;
        seriesName: string | null;
    };
    seriesResolution: {
        mode: "matched" | "created_needed" | "defaulted";
        matchedSeriesId: string | null;
        matchedSeriesName: string | null;
        suggestedNewSeriesName: string | null;
    };
    defaultsApplied: ("alias" | "sex" | "description" | "series")[];
    warnings: string[];
}>;
export declare const aiProductIntakeParseResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    status: z.ZodEnum<["success", "fallback"]>;
    capability: z.ZodLiteral<"product_intake">;
    provider: z.ZodEnum<["siliconflow", "local_heuristic", "local_defaults"]>;
    model: z.ZodString;
    result: z.ZodObject<{
        normalizedInput: z.ZodString;
        confidence: z.ZodNumber;
        fields: z.ZodObject<{
            sex: z.ZodNullable<z.ZodEnum<["male", "female", "unknown"]>>;
            alias: z.ZodNullable<z.ZodString>;
            seriesName: z.ZodNullable<z.ZodString>;
            description: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            alias: string | null;
            sex: "unknown" | "male" | "female" | null;
            description: string | null;
            seriesName: string | null;
        }, {
            alias: string | null;
            sex: "unknown" | "male" | "female" | null;
            description: string | null;
            seriesName: string | null;
        }>;
        seriesResolution: z.ZodObject<{
            mode: z.ZodEnum<["matched", "created_needed", "defaulted"]>;
            matchedSeriesId: z.ZodNullable<z.ZodString>;
            matchedSeriesName: z.ZodNullable<z.ZodString>;
            suggestedNewSeriesName: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            mode: "matched" | "created_needed" | "defaulted";
            matchedSeriesId: string | null;
            matchedSeriesName: string | null;
            suggestedNewSeriesName: string | null;
        }, {
            mode: "matched" | "created_needed" | "defaulted";
            matchedSeriesId: string | null;
            matchedSeriesName: string | null;
            suggestedNewSeriesName: string | null;
        }>;
        defaultsApplied: z.ZodArray<z.ZodEnum<["sex", "series", "alias", "description"]>, "many">;
        warnings: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        confidence: number;
        normalizedInput: string;
        fields: {
            alias: string | null;
            sex: "unknown" | "male" | "female" | null;
            description: string | null;
            seriesName: string | null;
        };
        seriesResolution: {
            mode: "matched" | "created_needed" | "defaulted";
            matchedSeriesId: string | null;
            matchedSeriesName: string | null;
            suggestedNewSeriesName: string | null;
        };
        defaultsApplied: ("alias" | "sex" | "description" | "series")[];
        warnings: string[];
    }, {
        confidence: number;
        normalizedInput: string;
        fields: {
            alias: string | null;
            sex: "unknown" | "male" | "female" | null;
            description: string | null;
            seriesName: string | null;
        };
        seriesResolution: {
            mode: "matched" | "created_needed" | "defaulted";
            matchedSeriesId: string | null;
            matchedSeriesName: string | null;
            suggestedNewSeriesName: string | null;
        };
        defaultsApplied: ("alias" | "sex" | "description" | "series")[];
        warnings: string[];
    }>;
}, "strip", z.ZodTypeAny, {
    status: "success" | "fallback";
    result: {
        confidence: number;
        normalizedInput: string;
        fields: {
            alias: string | null;
            sex: "unknown" | "male" | "female" | null;
            description: string | null;
            seriesName: string | null;
        };
        seriesResolution: {
            mode: "matched" | "created_needed" | "defaulted";
            matchedSeriesId: string | null;
            matchedSeriesName: string | null;
            suggestedNewSeriesName: string | null;
        };
        defaultsApplied: ("alias" | "sex" | "description" | "series")[];
        warnings: string[];
    };
    provider: "siliconflow" | "local_heuristic" | "local_defaults";
    capability: "product_intake";
    requestId: string;
    model: string;
}, {
    status: "success" | "fallback";
    result: {
        confidence: number;
        normalizedInput: string;
        fields: {
            alias: string | null;
            sex: "unknown" | "male" | "female" | null;
            description: string | null;
            seriesName: string | null;
        };
        seriesResolution: {
            mode: "matched" | "created_needed" | "defaulted";
            matchedSeriesId: string | null;
            matchedSeriesName: string | null;
            suggestedNewSeriesName: string | null;
        };
        defaultsApplied: ("alias" | "sex" | "description" | "series")[];
        warnings: string[];
    };
    provider: "siliconflow" | "local_heuristic" | "local_defaults";
    capability: "product_intake";
    requestId: string;
    model: string;
}>;
export declare const aiProductIntakeSubmitRequestSchema: z.ZodObject<{
    input: z.ZodString;
    referenceDate: z.ZodOptional<z.ZodString>;
    timezone: z.ZodOptional<z.ZodString>;
} & {
    imageCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    input: string;
    imageCount: number;
    timezone?: string | undefined;
    referenceDate?: string | undefined;
}, {
    input: string;
    imageCount: number;
    timezone?: string | undefined;
    referenceDate?: string | undefined;
}>;
export declare const aiProductEnrichmentJobSchema: z.ZodObject<{
    jobId: z.ZodString;
    status: z.ZodEnum<["PENDING", "PROCESSING", "SUCCEEDED", "FAILED"]>;
    scheduledAt: z.ZodString;
    processedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "PENDING" | "PROCESSING" | "FAILED" | "SUCCEEDED";
    scheduledAt: string;
    jobId: string;
    processedAt: string | null;
}, {
    status: "PENDING" | "PROCESSING" | "FAILED" | "SUCCEEDED";
    scheduledAt: string;
    jobId: string;
    processedAt: string | null;
}>;
export declare const aiProductIntakeSubmitResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    status: z.ZodLiteral<"accepted">;
    capability: z.ZodLiteral<"product_intake">;
    productId: z.ZodString;
    job: z.ZodObject<{
        jobId: z.ZodString;
        status: z.ZodEnum<["PENDING", "PROCESSING", "SUCCEEDED", "FAILED"]>;
        scheduledAt: z.ZodString;
        processedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING" | "PROCESSING" | "FAILED" | "SUCCEEDED";
        scheduledAt: string;
        jobId: string;
        processedAt: string | null;
    }, {
        status: "PENDING" | "PROCESSING" | "FAILED" | "SUCCEEDED";
        scheduledAt: string;
        jobId: string;
        processedAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    status: "accepted";
    productId: string;
    job: {
        status: "PENDING" | "PROCESSING" | "FAILED" | "SUCCEEDED";
        scheduledAt: string;
        jobId: string;
        processedAt: string | null;
    };
    capability: "product_intake";
    requestId: string;
}, {
    status: "accepted";
    productId: string;
    job: {
        status: "PENDING" | "PROCESSING" | "FAILED" | "SUCCEEDED";
        scheduledAt: string;
        jobId: string;
        processedAt: string | null;
    };
    capability: "product_intake";
    requestId: string;
}>;
export declare const aiQueryRequestSchema: z.ZodObject<{
    question: z.ZodString;
    timezone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    question: string;
    timezone?: string | undefined;
}, {
    question: string;
    timezone?: string | undefined;
}>;
export declare const aiQueryResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    status: z.ZodLiteral<"reserved">;
    capability: z.ZodLiteral<"query_only">;
    message: z.ZodString;
    suggestedMetrics: z.ZodArray<z.ZodString, "many">;
    todo: z.ZodArray<z.ZodObject<{
        code: z.ZodEnum<["NO_DB_PERSISTENCE", "PAYMENT_NOT_CONNECTED", "AUTO_EXECUTION_NOT_ENABLED", "QUERY_ENGINE_NOT_ENABLED"]>;
        detail: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
        detail: string;
    }, {
        code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
        detail: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    status: "reserved";
    capability: "query_only";
    requestId: string;
    suggestedMetrics: string[];
    todo: {
        code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
        detail: string;
    }[];
}, {
    message: string;
    status: "reserved";
    capability: "query_only";
    requestId: string;
    suggestedMetrics: string[];
    todo: {
        code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
        detail: string;
    }[];
}>;
export declare const aiTopUpPaymentChannelSchema: z.ZodEnum<["wechat", "alipay"]>;
export declare const aiTopUpPackSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    capability: z.ZodEnum<["auto_record", "query_only", "product_intake"]>;
    credits: z.ZodNumber;
    priceCents: z.ZodNumber;
    currency: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    currency: string;
    priceCents: number;
    capability: "auto_record" | "query_only" | "product_intake";
    credits: number;
}, {
    id: string;
    name: string;
    currency: string;
    priceCents: number;
    capability: "auto_record" | "query_only" | "product_intake";
    credits: number;
}>;
export declare const aiListTopUpPacksResponseSchema: z.ZodObject<{
    allowMultipleTopUps: z.ZodLiteral<true>;
    packs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        capability: z.ZodEnum<["auto_record", "query_only", "product_intake"]>;
        credits: z.ZodNumber;
        priceCents: z.ZodNumber;
        currency: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        currency: string;
        priceCents: number;
        capability: "auto_record" | "query_only" | "product_intake";
        credits: number;
    }, {
        id: string;
        name: string;
        currency: string;
        priceCents: number;
        capability: "auto_record" | "query_only" | "product_intake";
        credits: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    packs: {
        id: string;
        name: string;
        currency: string;
        priceCents: number;
        capability: "auto_record" | "query_only" | "product_intake";
        credits: number;
    }[];
    allowMultipleTopUps: true;
}, {
    packs: {
        id: string;
        name: string;
        currency: string;
        priceCents: number;
        capability: "auto_record" | "query_only" | "product_intake";
        credits: number;
    }[];
    allowMultipleTopUps: true;
}>;
export declare const aiCreateTopUpOrderRequestSchema: z.ZodObject<{
    packId: z.ZodString;
    quantity: z.ZodDefault<z.ZodNumber>;
    paymentChannel: z.ZodEnum<["wechat", "alipay"]>;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    paymentChannel: "wechat" | "alipay";
    packId: string;
}, {
    paymentChannel: "wechat" | "alipay";
    packId: string;
    quantity?: number | undefined;
}>;
export declare const aiTopUpOrderSchema: z.ZodObject<{
    orderId: z.ZodString;
    packId: z.ZodString;
    capability: z.ZodEnum<["auto_record", "query_only", "product_intake"]>;
    quantity: z.ZodNumber;
    totalCredits: z.ZodNumber;
    totalPriceCents: z.ZodNumber;
    currency: z.ZodString;
    paymentChannel: z.ZodEnum<["wechat", "alipay"]>;
    createdAt: z.ZodString;
    expiresAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    quantity: number;
    createdAt: string;
    expiresAt: string;
    orderId: string;
    currency: string;
    paymentChannel: "wechat" | "alipay";
    capability: "auto_record" | "query_only" | "product_intake";
    packId: string;
    totalCredits: number;
    totalPriceCents: number;
}, {
    quantity: number;
    createdAt: string;
    expiresAt: string;
    orderId: string;
    currency: string;
    paymentChannel: "wechat" | "alipay";
    capability: "auto_record" | "query_only" | "product_intake";
    packId: string;
    totalCredits: number;
    totalPriceCents: number;
}>;
export declare const aiCreateTopUpOrderResponseSchema: z.ZodObject<{
    status: z.ZodLiteral<"reserved">;
    message: z.ZodString;
    order: z.ZodObject<{
        orderId: z.ZodString;
        packId: z.ZodString;
        capability: z.ZodEnum<["auto_record", "query_only", "product_intake"]>;
        quantity: z.ZodNumber;
        totalCredits: z.ZodNumber;
        totalPriceCents: z.ZodNumber;
        currency: z.ZodString;
        paymentChannel: z.ZodEnum<["wechat", "alipay"]>;
        createdAt: z.ZodString;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        quantity: number;
        createdAt: string;
        expiresAt: string;
        orderId: string;
        currency: string;
        paymentChannel: "wechat" | "alipay";
        capability: "auto_record" | "query_only" | "product_intake";
        packId: string;
        totalCredits: number;
        totalPriceCents: number;
    }, {
        quantity: number;
        createdAt: string;
        expiresAt: string;
        orderId: string;
        currency: string;
        paymentChannel: "wechat" | "alipay";
        capability: "auto_record" | "query_only" | "product_intake";
        packId: string;
        totalCredits: number;
        totalPriceCents: number;
    }>;
    todo: z.ZodArray<z.ZodObject<{
        code: z.ZodEnum<["NO_DB_PERSISTENCE", "PAYMENT_NOT_CONNECTED", "AUTO_EXECUTION_NOT_ENABLED", "QUERY_ENGINE_NOT_ENABLED"]>;
        detail: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
        detail: string;
    }, {
        code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
        detail: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    message: string;
    status: "reserved";
    order: {
        quantity: number;
        createdAt: string;
        expiresAt: string;
        orderId: string;
        currency: string;
        paymentChannel: "wechat" | "alipay";
        capability: "auto_record" | "query_only" | "product_intake";
        packId: string;
        totalCredits: number;
        totalPriceCents: number;
    };
    todo: {
        code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
        detail: string;
    }[];
}, {
    message: string;
    status: "reserved";
    order: {
        quantity: number;
        createdAt: string;
        expiresAt: string;
        orderId: string;
        currency: string;
        paymentChannel: "wechat" | "alipay";
        capability: "auto_record" | "query_only" | "product_intake";
        packId: string;
        totalCredits: number;
        totalPriceCents: number;
    };
    todo: {
        code: "NO_DB_PERSISTENCE" | "PAYMENT_NOT_CONNECTED" | "AUTO_EXECUTION_NOT_ENABLED" | "QUERY_ENGINE_NOT_ENABLED";
        detail: string;
    }[];
}>;
export type AiQuotaSummary = z.infer<typeof aiQuotaSummarySchema>;
export type AiQuotaStatusResponse = z.infer<typeof aiQuotaStatusResponseSchema>;
export type TurtleAnalysisRequest = z.infer<typeof turtleAnalysisRequestSchema>;
export type TurtleAnalysisResponse = z.infer<typeof turtleAnalysisResponseSchema>;
export type AiQuotaExceededErrorResponse = z.infer<typeof aiQuotaExceededErrorResponseSchema>;
export type AiInputTooLargeErrorResponse = z.infer<typeof aiInputTooLargeErrorResponseSchema>;
export type AiPlanTier = z.infer<typeof aiPlanTierSchema>;
export type AiAssistantCapability = z.infer<typeof aiAssistantCapabilitySchema>;
export type AiAssistantQuotaItem = z.infer<typeof aiAssistantQuotaItemSchema>;
export type AiAssistantQuotaHighlight = z.infer<typeof aiAssistantQuotaHighlightSchema>;
export type AiAssistantQuotaStatusResponse = z.infer<typeof aiAssistantQuotaStatusResponseSchema>;
export type AiAssistantProvider = z.infer<typeof aiAssistantProviderSchema>;
export type AiReservedTodoItem = z.infer<typeof aiReservedTodoItemSchema>;
export type AiAutoRecordIntent = z.infer<typeof aiAutoRecordIntentSchema>;
export type AiAutoRecordIntentRequest = z.infer<typeof aiAutoRecordIntentRequestSchema>;
export type AiAutoRecordIntentResponse = z.infer<typeof aiAutoRecordIntentResponseSchema>;
export type AiAudioTranscriptionResponse = z.infer<typeof aiAudioTranscriptionResponseSchema>;
export type AiProductIntakeDefaultCode = z.infer<typeof aiProductIntakeDefaultCodeSchema>;
export type AiProductIntakeStatus = z.infer<typeof aiProductIntakeStatusSchema>;
export type AiProductIntakeSex = z.infer<typeof aiProductIntakeSexSchema>;
export type AiProductIntakeParseRequest = z.infer<typeof aiProductIntakeParseRequestSchema>;
export type AiProductIntakeParsedFields = z.infer<typeof aiProductIntakeParsedFieldsSchema>;
export type AiProductIntakeSeriesResolution = z.infer<typeof aiProductIntakeSeriesResolutionSchema>;
export type AiProductIntakeParseResult = z.infer<typeof aiProductIntakeParseResultSchema>;
export type AiProductIntakeParseResponse = z.infer<typeof aiProductIntakeParseResponseSchema>;
export type AiProductIntakeSubmitRequest = z.infer<typeof aiProductIntakeSubmitRequestSchema>;
export type AiProductEnrichmentJobStatus = z.infer<typeof aiProductEnrichmentJobStatusSchema>;
export type AiProductEnrichmentJob = z.infer<typeof aiProductEnrichmentJobSchema>;
export type AiProductIntakeSubmitResponse = z.infer<typeof aiProductIntakeSubmitResponseSchema>;
export type AiQueryRequest = z.infer<typeof aiQueryRequestSchema>;
export type AiQueryResponse = z.infer<typeof aiQueryResponseSchema>;
export type AiTopUpPack = z.infer<typeof aiTopUpPackSchema>;
export type AiListTopUpPacksResponse = z.infer<typeof aiListTopUpPacksResponseSchema>;
export type AiCreateTopUpOrderRequest = z.infer<typeof aiCreateTopUpOrderRequestSchema>;
export type AiTopUpOrder = z.infer<typeof aiTopUpOrderSchema>;
export type AiCreateTopUpOrderResponse = z.infer<typeof aiCreateTopUpOrderResponseSchema>;
