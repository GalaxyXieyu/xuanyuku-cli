import { z } from 'zod';
export declare const tenantSubscriptionPlanSchema: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
export declare const tenantSubscriptionStatusSchema: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
export declare const tenantSubscriptionSchema: z.ZodObject<{
    tenantId: z.ZodString;
    isConfigured: z.ZodBoolean;
    plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
    status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
    startsAt: z.ZodNullable<z.ZodString>;
    expiresAt: z.ZodNullable<z.ZodString>;
    disabledAt: z.ZodNullable<z.ZodString>;
    disabledReason: z.ZodNullable<z.ZodString>;
    maxImages: z.ZodNullable<z.ZodNumber>;
    maxStorageBytes: z.ZodNullable<z.ZodString>;
    maxShares: z.ZodNullable<z.ZodNumber>;
    createdAt: z.ZodNullable<z.ZodString>;
    updatedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED";
    tenantId: string;
    createdAt: string | null;
    updatedAt: string | null;
    isConfigured: boolean;
    plan: "FREE" | "BASIC" | "PRO";
    startsAt: string | null;
    expiresAt: string | null;
    disabledAt: string | null;
    disabledReason: string | null;
    maxImages: number | null;
    maxStorageBytes: string | null;
    maxShares: number | null;
}, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED";
    tenantId: string;
    createdAt: string | null;
    updatedAt: string | null;
    isConfigured: boolean;
    plan: "FREE" | "BASIC" | "PRO";
    startsAt: string | null;
    expiresAt: string | null;
    disabledAt: string | null;
    disabledReason: string | null;
    maxImages: number | null;
    maxStorageBytes: string | null;
    maxShares: number | null;
}>;
export declare const updateTenantSubscriptionRequestSchema: z.ZodEffects<z.ZodObject<{
    plan: z.ZodOptional<z.ZodEnum<["FREE", "BASIC", "PRO"]>>;
    startsAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    disabledAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    disabledReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maxImages: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxStorageBytes: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>>;
    maxShares: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    plan?: "FREE" | "BASIC" | "PRO" | undefined;
    startsAt?: string | null | undefined;
    expiresAt?: string | null | undefined;
    disabledAt?: string | null | undefined;
    disabledReason?: string | null | undefined;
    maxImages?: number | null | undefined;
    maxStorageBytes?: string | null | undefined;
    maxShares?: number | null | undefined;
}, {
    plan?: "FREE" | "BASIC" | "PRO" | undefined;
    startsAt?: string | null | undefined;
    expiresAt?: string | null | undefined;
    disabledAt?: string | null | undefined;
    disabledReason?: string | null | undefined;
    maxImages?: number | null | undefined;
    maxStorageBytes?: string | number | null | undefined;
    maxShares?: number | null | undefined;
}>, {
    plan?: "FREE" | "BASIC" | "PRO" | undefined;
    startsAt?: string | null | undefined;
    expiresAt?: string | null | undefined;
    disabledAt?: string | null | undefined;
    disabledReason?: string | null | undefined;
    maxImages?: number | null | undefined;
    maxStorageBytes?: string | null | undefined;
    maxShares?: number | null | undefined;
}, {
    plan?: "FREE" | "BASIC" | "PRO" | undefined;
    startsAt?: string | null | undefined;
    expiresAt?: string | null | undefined;
    disabledAt?: string | null | undefined;
    disabledReason?: string | null | undefined;
    maxImages?: number | null | undefined;
    maxStorageBytes?: string | number | null | undefined;
    maxShares?: number | null | undefined;
}>;
export declare const getAdminTenantSubscriptionResponseSchema: z.ZodObject<{
    subscription: z.ZodObject<{
        tenantId: z.ZodString;
        isConfigured: z.ZodBoolean;
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        startsAt: z.ZodNullable<z.ZodString>;
        expiresAt: z.ZodNullable<z.ZodString>;
        disabledAt: z.ZodNullable<z.ZodString>;
        disabledReason: z.ZodNullable<z.ZodString>;
        maxImages: z.ZodNullable<z.ZodNumber>;
        maxStorageBytes: z.ZodNullable<z.ZodString>;
        maxShares: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    }>;
}, "strip", z.ZodTypeAny, {
    subscription: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    };
}, {
    subscription: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    };
}>;
export declare const updateTenantSubscriptionResponseSchema: z.ZodObject<{
    subscription: z.ZodObject<{
        tenantId: z.ZodString;
        isConfigured: z.ZodBoolean;
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        startsAt: z.ZodNullable<z.ZodString>;
        expiresAt: z.ZodNullable<z.ZodString>;
        disabledAt: z.ZodNullable<z.ZodString>;
        disabledReason: z.ZodNullable<z.ZodString>;
        maxImages: z.ZodNullable<z.ZodNumber>;
        maxStorageBytes: z.ZodNullable<z.ZodString>;
        maxShares: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    subscription: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    };
    auditLogId: string;
}, {
    subscription: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    };
    auditLogId: string;
}>;
export declare const tenantSubscriptionActivationCodeSchema: z.ZodObject<{
    id: z.ZodString;
    codeLabel: z.ZodString;
    targetTenantId: z.ZodNullable<z.ZodString>;
    plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
    durationDays: z.ZodNullable<z.ZodNumber>;
    maxImages: z.ZodNullable<z.ZodNumber>;
    maxStorageBytes: z.ZodNullable<z.ZodString>;
    maxShares: z.ZodNullable<z.ZodNumber>;
    redeemLimit: z.ZodNumber;
    redeemedCount: z.ZodNumber;
    expiresAt: z.ZodNullable<z.ZodString>;
    disabledAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: string;
    plan: "FREE" | "BASIC" | "PRO";
    expiresAt: string | null;
    disabledAt: string | null;
    maxImages: number | null;
    maxStorageBytes: string | null;
    maxShares: number | null;
    codeLabel: string;
    targetTenantId: string | null;
    durationDays: number | null;
    redeemLimit: number;
    redeemedCount: number;
}, {
    id: string;
    createdAt: string;
    plan: "FREE" | "BASIC" | "PRO";
    expiresAt: string | null;
    disabledAt: string | null;
    maxImages: number | null;
    maxStorageBytes: string | null;
    maxShares: number | null;
    codeLabel: string;
    targetTenantId: string | null;
    durationDays: number | null;
    redeemLimit: number;
    redeemedCount: number;
}>;
export declare const createTenantSubscriptionActivationCodeRequestSchema: z.ZodObject<{
    targetTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    plan: z.ZodDefault<z.ZodEnum<["FREE", "BASIC", "PRO"]>>;
    durationDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxImages: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    maxStorageBytes: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>>;
    maxShares: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    redeemLimit: z.ZodOptional<z.ZodNumber>;
    expiresAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    plan: "FREE" | "BASIC" | "PRO";
    expiresAt?: string | null | undefined;
    maxImages?: number | null | undefined;
    maxStorageBytes?: string | null | undefined;
    maxShares?: number | null | undefined;
    targetTenantId?: string | null | undefined;
    durationDays?: number | null | undefined;
    redeemLimit?: number | undefined;
}, {
    plan?: "FREE" | "BASIC" | "PRO" | undefined;
    expiresAt?: string | null | undefined;
    maxImages?: number | null | undefined;
    maxStorageBytes?: string | number | null | undefined;
    maxShares?: number | null | undefined;
    targetTenantId?: string | null | undefined;
    durationDays?: number | null | undefined;
    redeemLimit?: number | undefined;
}>;
export declare const createTenantSubscriptionActivationCodeResponseSchema: z.ZodObject<{
    activationCode: z.ZodObject<{
        id: z.ZodString;
        codeLabel: z.ZodString;
        targetTenantId: z.ZodNullable<z.ZodString>;
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        durationDays: z.ZodNullable<z.ZodNumber>;
        maxImages: z.ZodNullable<z.ZodNumber>;
        maxStorageBytes: z.ZodNullable<z.ZodString>;
        maxShares: z.ZodNullable<z.ZodNumber>;
        redeemLimit: z.ZodNumber;
        redeemedCount: z.ZodNumber;
        expiresAt: z.ZodNullable<z.ZodString>;
        disabledAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    } & {
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        createdAt: string;
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
        disabledAt: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
        codeLabel: string;
        targetTenantId: string | null;
        durationDays: number | null;
        redeemLimit: number;
        redeemedCount: number;
    }, {
        code: string;
        id: string;
        createdAt: string;
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
        disabledAt: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
        codeLabel: string;
        targetTenantId: string | null;
        durationDays: number | null;
        redeemLimit: number;
        redeemedCount: number;
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auditLogId: string;
    activationCode: {
        code: string;
        id: string;
        createdAt: string;
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
        disabledAt: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
        codeLabel: string;
        targetTenantId: string | null;
        durationDays: number | null;
        redeemLimit: number;
        redeemedCount: number;
    };
}, {
    auditLogId: string;
    activationCode: {
        code: string;
        id: string;
        createdAt: string;
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
        disabledAt: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
        codeLabel: string;
        targetTenantId: string | null;
        durationDays: number | null;
        redeemLimit: number;
        redeemedCount: number;
    };
}>;
export declare const redeemTenantSubscriptionActivationCodeRequestSchema: z.ZodObject<{
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export declare const redeemTenantSubscriptionActivationCodeResponseSchema: z.ZodObject<{
    subscription: z.ZodObject<{
        tenantId: z.ZodString;
        isConfigured: z.ZodBoolean;
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        startsAt: z.ZodNullable<z.ZodString>;
        expiresAt: z.ZodNullable<z.ZodString>;
        disabledAt: z.ZodNullable<z.ZodString>;
        disabledReason: z.ZodNullable<z.ZodString>;
        maxImages: z.ZodNullable<z.ZodNumber>;
        maxStorageBytes: z.ZodNullable<z.ZodString>;
        maxShares: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    }>;
    activationCode: z.ZodObject<Pick<{
        id: z.ZodString;
        codeLabel: z.ZodString;
        targetTenantId: z.ZodNullable<z.ZodString>;
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        durationDays: z.ZodNullable<z.ZodNumber>;
        maxImages: z.ZodNullable<z.ZodNumber>;
        maxStorageBytes: z.ZodNullable<z.ZodString>;
        maxShares: z.ZodNullable<z.ZodNumber>;
        redeemLimit: z.ZodNumber;
        redeemedCount: z.ZodNumber;
        expiresAt: z.ZodNullable<z.ZodString>;
        disabledAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "id" | "codeLabel" | "redeemLimit" | "redeemedCount">, "strip", z.ZodTypeAny, {
        id: string;
        codeLabel: string;
        redeemLimit: number;
        redeemedCount: number;
    }, {
        id: string;
        codeLabel: string;
        redeemLimit: number;
        redeemedCount: number;
    }>;
    redeemedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    subscription: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    };
    activationCode: {
        id: string;
        codeLabel: string;
        redeemLimit: number;
        redeemedCount: number;
    };
    redeemedAt: string;
}, {
    subscription: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        tenantId: string;
        createdAt: string | null;
        updatedAt: string | null;
        isConfigured: boolean;
        plan: "FREE" | "BASIC" | "PRO";
        startsAt: string | null;
        expiresAt: string | null;
        disabledAt: string | null;
        disabledReason: string | null;
        maxImages: number | null;
        maxStorageBytes: string | null;
        maxShares: number | null;
    };
    activationCode: {
        id: string;
        codeLabel: string;
        redeemLimit: number;
        redeemedCount: number;
    };
    redeemedAt: string;
}>;
export type TenantSubscriptionPlan = z.infer<typeof tenantSubscriptionPlanSchema>;
export type TenantSubscriptionStatus = z.infer<typeof tenantSubscriptionStatusSchema>;
export type TenantSubscription = z.infer<typeof tenantSubscriptionSchema>;
export type UpdateTenantSubscriptionRequest = z.infer<typeof updateTenantSubscriptionRequestSchema>;
export type GetAdminTenantSubscriptionResponse = z.infer<typeof getAdminTenantSubscriptionResponseSchema>;
export type UpdateTenantSubscriptionResponse = z.infer<typeof updateTenantSubscriptionResponseSchema>;
export type TenantSubscriptionActivationCode = z.infer<typeof tenantSubscriptionActivationCodeSchema>;
export type CreateTenantSubscriptionActivationCodeRequest = z.infer<typeof createTenantSubscriptionActivationCodeRequestSchema>;
export type CreateTenantSubscriptionActivationCodeResponse = z.infer<typeof createTenantSubscriptionActivationCodeResponseSchema>;
export type RedeemTenantSubscriptionActivationCodeRequest = z.infer<typeof redeemTenantSubscriptionActivationCodeRequestSchema>;
export type RedeemTenantSubscriptionActivationCodeResponse = z.infer<typeof redeemTenantSubscriptionActivationCodeResponseSchema>;
