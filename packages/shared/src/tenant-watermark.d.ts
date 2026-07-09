import { z } from 'zod';
export declare const tenantWatermarkTextModeSchema: z.ZodEnum<["AUTO_TENANT_NAME", "CUSTOM"]>;
export declare const TENANT_WATERMARK_MAX_TEXT_LENGTH = 64;
export declare const tenantWatermarkConfigSchema: z.ZodEffects<z.ZodObject<{
    enabled: z.ZodBoolean;
    textMode: z.ZodEnum<["AUTO_TENANT_NAME", "CUSTOM"]>;
    customText: z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, string | null>;
    applyToSharePoster: z.ZodBoolean;
    applyToCouplePhoto: z.ZodBoolean;
    applyToCertificate: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    textMode: "AUTO_TENANT_NAME" | "CUSTOM";
    customText: string | null;
    applyToSharePoster: boolean;
    applyToCouplePhoto: boolean;
    applyToCertificate: boolean;
}, {
    enabled: boolean;
    textMode: "AUTO_TENANT_NAME" | "CUSTOM";
    customText: string | null;
    applyToSharePoster: boolean;
    applyToCouplePhoto: boolean;
    applyToCertificate: boolean;
}>, {
    enabled: boolean;
    textMode: "AUTO_TENANT_NAME" | "CUSTOM";
    customText: string | null;
    applyToSharePoster: boolean;
    applyToCouplePhoto: boolean;
    applyToCertificate: boolean;
}, {
    enabled: boolean;
    textMode: "AUTO_TENANT_NAME" | "CUSTOM";
    customText: string | null;
    applyToSharePoster: boolean;
    applyToCouplePhoto: boolean;
    applyToCertificate: boolean;
}>;
export declare const tenantWatermarkEntitlementSchema: z.ZodObject<{
    plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
    status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
    canEdit: z.ZodBoolean;
    reason: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED";
    reason: string | null;
    canEdit: boolean;
    plan: "FREE" | "BASIC" | "PRO";
}, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED";
    reason: string | null;
    canEdit: boolean;
    plan: "FREE" | "BASIC" | "PRO";
}>;
export declare const tenantWatermarkEffectiveSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    watermarkText: z.ZodNullable<z.ZodString>;
    applyToSharePoster: z.ZodBoolean;
    applyToCouplePhoto: z.ZodBoolean;
    applyToCertificate: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    applyToSharePoster: boolean;
    applyToCouplePhoto: boolean;
    applyToCertificate: boolean;
    watermarkText: string | null;
}, {
    enabled: boolean;
    applyToSharePoster: boolean;
    applyToCouplePhoto: boolean;
    applyToCertificate: boolean;
    watermarkText: string | null;
}>;
export declare const tenantWatermarkStateSchema: z.ZodObject<{
    entitlement: z.ZodObject<{
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        canEdit: z.ZodBoolean;
        reason: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    }>;
    config: z.ZodEffects<z.ZodObject<{
        enabled: z.ZodBoolean;
        textMode: z.ZodEnum<["AUTO_TENANT_NAME", "CUSTOM"]>;
        customText: z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, string | null>;
        applyToSharePoster: z.ZodBoolean;
        applyToCouplePhoto: z.ZodBoolean;
        applyToCertificate: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }>, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }>;
    effective: z.ZodObject<{
        enabled: z.ZodBoolean;
        watermarkText: z.ZodNullable<z.ZodString>;
        applyToSharePoster: z.ZodBoolean;
        applyToCouplePhoto: z.ZodBoolean;
        applyToCertificate: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    }, {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    config: {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    };
    entitlement: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    };
    effective: {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    };
}, {
    config: {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    };
    entitlement: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    };
    effective: {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    };
}>;
export declare const getTenantWatermarkResponseSchema: z.ZodObject<{
    entitlement: z.ZodObject<{
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        canEdit: z.ZodBoolean;
        reason: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    }>;
    config: z.ZodEffects<z.ZodObject<{
        enabled: z.ZodBoolean;
        textMode: z.ZodEnum<["AUTO_TENANT_NAME", "CUSTOM"]>;
        customText: z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, string | null>;
        applyToSharePoster: z.ZodBoolean;
        applyToCouplePhoto: z.ZodBoolean;
        applyToCertificate: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }>, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }>;
    effective: z.ZodObject<{
        enabled: z.ZodBoolean;
        watermarkText: z.ZodNullable<z.ZodString>;
        applyToSharePoster: z.ZodBoolean;
        applyToCouplePhoto: z.ZodBoolean;
        applyToCertificate: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    }, {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    config: {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    };
    entitlement: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    };
    effective: {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    };
}, {
    config: {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    };
    entitlement: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    };
    effective: {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    };
}>;
export declare const updateTenantWatermarkRequestSchema: z.ZodObject<{
    config: z.ZodEffects<z.ZodObject<{
        enabled: z.ZodBoolean;
        textMode: z.ZodEnum<["AUTO_TENANT_NAME", "CUSTOM"]>;
        customText: z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, string | null>;
        applyToSharePoster: z.ZodBoolean;
        applyToCouplePhoto: z.ZodBoolean;
        applyToCertificate: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }>, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    config: {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    };
}, {
    config: {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    };
}>;
export declare const updateTenantWatermarkResponseSchema: z.ZodObject<{
    entitlement: z.ZodObject<{
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        canEdit: z.ZodBoolean;
        reason: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    }>;
    config: z.ZodEffects<z.ZodObject<{
        enabled: z.ZodBoolean;
        textMode: z.ZodEnum<["AUTO_TENANT_NAME", "CUSTOM"]>;
        customText: z.ZodEffects<z.ZodNullable<z.ZodString>, string | null, string | null>;
        applyToSharePoster: z.ZodBoolean;
        applyToCouplePhoto: z.ZodBoolean;
        applyToCertificate: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }>, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }, {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    }>;
    effective: z.ZodObject<{
        enabled: z.ZodBoolean;
        watermarkText: z.ZodNullable<z.ZodString>;
        applyToSharePoster: z.ZodBoolean;
        applyToCouplePhoto: z.ZodBoolean;
        applyToCertificate: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    }, {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    config: {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    };
    entitlement: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    };
    effective: {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    };
}, {
    config: {
        enabled: boolean;
        textMode: "AUTO_TENANT_NAME" | "CUSTOM";
        customText: string | null;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
    };
    entitlement: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        reason: string | null;
        canEdit: boolean;
        plan: "FREE" | "BASIC" | "PRO";
    };
    effective: {
        enabled: boolean;
        applyToSharePoster: boolean;
        applyToCouplePhoto: boolean;
        applyToCertificate: boolean;
        watermarkText: string | null;
    };
}>;
export type TenantWatermarkTextMode = z.infer<typeof tenantWatermarkTextModeSchema>;
export type TenantWatermarkConfig = z.infer<typeof tenantWatermarkConfigSchema>;
export type TenantWatermarkEntitlement = z.infer<typeof tenantWatermarkEntitlementSchema>;
export type TenantWatermarkEffective = z.infer<typeof tenantWatermarkEffectiveSchema>;
export type TenantWatermarkState = z.infer<typeof tenantWatermarkStateSchema>;
export type GetTenantWatermarkResponse = z.infer<typeof getTenantWatermarkResponseSchema>;
export type UpdateTenantWatermarkRequest = z.infer<typeof updateTenantWatermarkRequestSchema>;
export type UpdateTenantWatermarkResponse = z.infer<typeof updateTenantWatermarkResponseSchema>;
