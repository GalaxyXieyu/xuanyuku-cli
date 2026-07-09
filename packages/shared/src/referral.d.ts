import { z } from 'zod';
export declare const referralBindingSourceSchema: z.ZodEnum<["share_link", "manual_fallback", "public_page_auto"]>;
export declare const referralRewardModeSchema: z.ZodEnum<["first_product_create", "paid_order"]>;
export declare const referralRewardTriggerTypeSchema: z.ZodEnum<["first_payment", "renewal", "first_product_create"]>;
export declare const referralRewardStatusSchema: z.ZodEnum<["PENDING", "AWARDED", "SKIPPED"]>;
export declare const referralAttributionPageTypeSchema: z.ZodEnum<["share_feed", "share_product", "tenant_feed", "tenant_product", "certificate_verify"]>;
export declare const referralProgramRulesSchema: z.ZodObject<{
    rewardMode: z.ZodEnum<["first_product_create", "paid_order"]>;
    firstPaymentReferrerDays: z.ZodNumber;
    firstPaymentInviteeDays: z.ZodNumber;
    firstProductReferrerDays: z.ZodNumber;
    firstProductInviteeDays: z.ZodNumber;
    renewalReferrerDays: z.ZodNumber;
    monthlyCapDays: z.ZodNumber;
    bindWindowHours: z.ZodNumber;
    attributionTtlDays: z.ZodNumber;
    autoBindPublicEnabled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    rewardMode: "first_product_create" | "paid_order";
    firstPaymentReferrerDays: number;
    firstPaymentInviteeDays: number;
    firstProductReferrerDays: number;
    firstProductInviteeDays: number;
    renewalReferrerDays: number;
    monthlyCapDays: number;
    bindWindowHours: number;
    attributionTtlDays: number;
    autoBindPublicEnabled: boolean;
}, {
    rewardMode: "first_product_create" | "paid_order";
    firstPaymentReferrerDays: number;
    firstPaymentInviteeDays: number;
    firstProductReferrerDays: number;
    firstProductInviteeDays: number;
    renewalReferrerDays: number;
    monthlyCapDays: number;
    bindWindowHours: number;
    attributionTtlDays: number;
    autoBindPublicEnabled: boolean;
}>;
export declare const referralBindingSchema: z.ZodObject<{
    id: z.ZodString;
    referrerUserId: z.ZodString;
    inviteeUserId: z.ZodString;
    source: z.ZodEnum<["share_link", "manual_fallback", "public_page_auto"]>;
    boundAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    source: "share_link" | "manual_fallback" | "public_page_auto";
    referrerUserId: string;
    inviteeUserId: string;
    boundAt: string;
}, {
    id: string;
    source: "share_link" | "manual_fallback" | "public_page_auto";
    referrerUserId: string;
    inviteeUserId: string;
    boundAt: string;
}>;
export declare const referralRewardSchema: z.ZodObject<{
    id: z.ZodString;
    status: z.ZodEnum<["PENDING", "AWARDED", "SKIPPED"]>;
    triggerType: z.ZodEnum<["first_payment", "renewal", "first_product_create"]>;
    statusReason: z.ZodNullable<z.ZodString>;
    referrerUserId: z.ZodString;
    inviteeUserId: z.ZodString;
    paymentProvider: z.ZodNullable<z.ZodString>;
    paymentId: z.ZodNullable<z.ZodString>;
    orderId: z.ZodNullable<z.ZodString>;
    rewardDaysReferrer: z.ZodNumber;
    rewardDaysInvitee: z.ZodNumber;
    awardedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "PENDING" | "AWARDED" | "SKIPPED";
    id: string;
    createdAt: string;
    orderId: string | null;
    paymentProvider: string | null;
    paymentId: string | null;
    statusReason: string | null;
    referrerUserId: string;
    inviteeUserId: string;
    triggerType: "first_product_create" | "first_payment" | "renewal";
    rewardDaysReferrer: number;
    rewardDaysInvitee: number;
    awardedAt: string | null;
}, {
    status: "PENDING" | "AWARDED" | "SKIPPED";
    id: string;
    createdAt: string;
    orderId: string | null;
    paymentProvider: string | null;
    paymentId: string | null;
    statusReason: string | null;
    referrerUserId: string;
    inviteeUserId: string;
    triggerType: "first_product_create" | "first_payment" | "renewal";
    rewardDaysReferrer: number;
    rewardDaysInvitee: number;
    awardedAt: string | null;
}>;
export declare const referralInviteProgressStatusSchema: z.ZodEnum<["bound", "first_product_uploaded", "reward_awarded", "reward_skipped"]>;
export declare const referralInviteProgressSchema: z.ZodObject<{
    inviteeUserId: z.ZodString;
    inviteeDisplayName: z.ZodString;
    boundAt: z.ZodString;
    firstProductCreatedAt: z.ZodNullable<z.ZodString>;
    rewardStatus: z.ZodNullable<z.ZodEnum<["PENDING", "AWARDED", "SKIPPED"]>>;
    rewardAwardedAt: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["bound", "first_product_uploaded", "reward_awarded", "reward_skipped"]>;
}, "strip", z.ZodTypeAny, {
    status: "bound" | "first_product_uploaded" | "reward_awarded" | "reward_skipped";
    inviteeUserId: string;
    boundAt: string;
    inviteeDisplayName: string;
    firstProductCreatedAt: string | null;
    rewardStatus: "PENDING" | "AWARDED" | "SKIPPED" | null;
    rewardAwardedAt: string | null;
}, {
    status: "bound" | "first_product_uploaded" | "reward_awarded" | "reward_skipped";
    inviteeUserId: string;
    boundAt: string;
    inviteeDisplayName: string;
    firstProductCreatedAt: string | null;
    rewardStatus: "PENDING" | "AWARDED" | "SKIPPED" | null;
    rewardAwardedAt: string | null;
}>;
export declare const myReferralOverviewResponseSchema: z.ZodObject<{
    rules: z.ZodObject<{
        rewardMode: z.ZodEnum<["first_product_create", "paid_order"]>;
        firstPaymentReferrerDays: z.ZodNumber;
        firstPaymentInviteeDays: z.ZodNumber;
        firstProductReferrerDays: z.ZodNumber;
        firstProductInviteeDays: z.ZodNumber;
        renewalReferrerDays: z.ZodNumber;
        monthlyCapDays: z.ZodNumber;
        bindWindowHours: z.ZodNumber;
        attributionTtlDays: z.ZodNumber;
        autoBindPublicEnabled: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        rewardMode: "first_product_create" | "paid_order";
        firstPaymentReferrerDays: number;
        firstPaymentInviteeDays: number;
        firstProductReferrerDays: number;
        firstProductInviteeDays: number;
        renewalReferrerDays: number;
        monthlyCapDays: number;
        bindWindowHours: number;
        attributionTtlDays: number;
        autoBindPublicEnabled: boolean;
    }, {
        rewardMode: "first_product_create" | "paid_order";
        firstPaymentReferrerDays: number;
        firstPaymentInviteeDays: number;
        firstProductReferrerDays: number;
        firstProductInviteeDays: number;
        renewalReferrerDays: number;
        monthlyCapDays: number;
        bindWindowHours: number;
        attributionTtlDays: number;
        autoBindPublicEnabled: boolean;
    }>;
    binding: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        referrerUserId: z.ZodString;
        inviteeUserId: z.ZodString;
        source: z.ZodEnum<["share_link", "manual_fallback", "public_page_auto"]>;
        boundAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        source: "share_link" | "manual_fallback" | "public_page_auto";
        referrerUserId: string;
        inviteeUserId: string;
        boundAt: string;
    }, {
        id: string;
        source: "share_link" | "manual_fallback" | "public_page_auto";
        referrerUserId: string;
        inviteeUserId: string;
        boundAt: string;
    }>>;
    invitedCount: z.ZodNumber;
    activatedInviteeCount: z.ZodNumber;
    totalAwardedDays: z.ZodNumber;
    monthAwardedDays: z.ZodNumber;
    monthRemainingDays: z.ZodNumber;
    invites: z.ZodArray<z.ZodObject<{
        inviteeUserId: z.ZodString;
        inviteeDisplayName: z.ZodString;
        boundAt: z.ZodString;
        firstProductCreatedAt: z.ZodNullable<z.ZodString>;
        rewardStatus: z.ZodNullable<z.ZodEnum<["PENDING", "AWARDED", "SKIPPED"]>>;
        rewardAwardedAt: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["bound", "first_product_uploaded", "reward_awarded", "reward_skipped"]>;
    }, "strip", z.ZodTypeAny, {
        status: "bound" | "first_product_uploaded" | "reward_awarded" | "reward_skipped";
        inviteeUserId: string;
        boundAt: string;
        inviteeDisplayName: string;
        firstProductCreatedAt: string | null;
        rewardStatus: "PENDING" | "AWARDED" | "SKIPPED" | null;
        rewardAwardedAt: string | null;
    }, {
        status: "bound" | "first_product_uploaded" | "reward_awarded" | "reward_skipped";
        inviteeUserId: string;
        boundAt: string;
        inviteeDisplayName: string;
        firstProductCreatedAt: string | null;
        rewardStatus: "PENDING" | "AWARDED" | "SKIPPED" | null;
        rewardAwardedAt: string | null;
    }>, "many">;
    rewards: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodEnum<["PENDING", "AWARDED", "SKIPPED"]>;
        triggerType: z.ZodEnum<["first_payment", "renewal", "first_product_create"]>;
        statusReason: z.ZodNullable<z.ZodString>;
        referrerUserId: z.ZodString;
        inviteeUserId: z.ZodString;
        paymentProvider: z.ZodNullable<z.ZodString>;
        paymentId: z.ZodNullable<z.ZodString>;
        orderId: z.ZodNullable<z.ZodString>;
        rewardDaysReferrer: z.ZodNumber;
        rewardDaysInvitee: z.ZodNumber;
        awardedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }, {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    binding: {
        id: string;
        source: "share_link" | "manual_fallback" | "public_page_auto";
        referrerUserId: string;
        inviteeUserId: string;
        boundAt: string;
    } | null;
    rules: {
        rewardMode: "first_product_create" | "paid_order";
        firstPaymentReferrerDays: number;
        firstPaymentInviteeDays: number;
        firstProductReferrerDays: number;
        firstProductInviteeDays: number;
        renewalReferrerDays: number;
        monthlyCapDays: number;
        bindWindowHours: number;
        attributionTtlDays: number;
        autoBindPublicEnabled: boolean;
    };
    invitedCount: number;
    activatedInviteeCount: number;
    totalAwardedDays: number;
    monthAwardedDays: number;
    monthRemainingDays: number;
    invites: {
        status: "bound" | "first_product_uploaded" | "reward_awarded" | "reward_skipped";
        inviteeUserId: string;
        boundAt: string;
        inviteeDisplayName: string;
        firstProductCreatedAt: string | null;
        rewardStatus: "PENDING" | "AWARDED" | "SKIPPED" | null;
        rewardAwardedAt: string | null;
    }[];
    rewards: {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }[];
}, {
    binding: {
        id: string;
        source: "share_link" | "manual_fallback" | "public_page_auto";
        referrerUserId: string;
        inviteeUserId: string;
        boundAt: string;
    } | null;
    rules: {
        rewardMode: "first_product_create" | "paid_order";
        firstPaymentReferrerDays: number;
        firstPaymentInviteeDays: number;
        firstProductReferrerDays: number;
        firstProductInviteeDays: number;
        renewalReferrerDays: number;
        monthlyCapDays: number;
        bindWindowHours: number;
        attributionTtlDays: number;
        autoBindPublicEnabled: boolean;
    };
    invitedCount: number;
    activatedInviteeCount: number;
    totalAwardedDays: number;
    monthAwardedDays: number;
    monthRemainingDays: number;
    invites: {
        status: "bound" | "first_product_uploaded" | "reward_awarded" | "reward_skipped";
        inviteeUserId: string;
        boundAt: string;
        inviteeDisplayName: string;
        firstProductCreatedAt: string | null;
        rewardStatus: "PENDING" | "AWARDED" | "SKIPPED" | null;
        rewardAwardedAt: string | null;
    }[];
    rewards: {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }[];
}>;
export declare const bindReferralFromAttributionRequestSchema: z.ZodObject<{
    fromUrl: z.ZodString;
    pageType: z.ZodEnum<["share_feed", "share_product", "tenant_feed", "tenant_product", "certificate_verify"]>;
    shareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tenantSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    productId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    verifyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    entrySource: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    capturedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fromUrl: string;
    pageType: "share_feed" | "share_product" | "tenant_feed" | "tenant_product" | "certificate_verify";
    productId?: string | null | undefined;
    tenantSlug?: string | null | undefined;
    verifyId?: string | null | undefined;
    shareToken?: string | null | undefined;
    entrySource?: string | null | undefined;
    capturedAt?: string | undefined;
}, {
    fromUrl: string;
    pageType: "share_feed" | "share_product" | "tenant_feed" | "tenant_product" | "certificate_verify";
    productId?: string | null | undefined;
    tenantSlug?: string | null | undefined;
    verifyId?: string | null | undefined;
    shareToken?: string | null | undefined;
    entrySource?: string | null | undefined;
    capturedAt?: string | undefined;
}>;
export declare const bindReferralFromAttributionResponseSchema: z.ZodObject<{
    consumed: z.ZodBoolean;
    binding: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        referrerUserId: z.ZodString;
        inviteeUserId: z.ZodString;
        source: z.ZodEnum<["share_link", "manual_fallback", "public_page_auto"]>;
        boundAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        source: "share_link" | "manual_fallback" | "public_page_auto";
        referrerUserId: string;
        inviteeUserId: string;
        boundAt: string;
    }, {
        id: string;
        source: "share_link" | "manual_fallback" | "public_page_auto";
        referrerUserId: string;
        inviteeUserId: string;
        boundAt: string;
    }>>;
    inviter: z.ZodNullable<z.ZodObject<{
        userId: z.ZodString;
        displayName: z.ZodString;
        tenantName: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        tenantName: string | null;
        displayName: string;
    }, {
        userId: string;
        tenantName: string | null;
        displayName: string;
    }>>;
    reason: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    reason: string | null;
    binding: {
        id: string;
        source: "share_link" | "manual_fallback" | "public_page_auto";
        referrerUserId: string;
        inviteeUserId: string;
        boundAt: string;
    } | null;
    consumed: boolean;
    inviter: {
        userId: string;
        tenantName: string | null;
        displayName: string;
    } | null;
}, {
    reason: string | null;
    binding: {
        id: string;
        source: "share_link" | "manual_fallback" | "public_page_auto";
        referrerUserId: string;
        inviteeUserId: string;
        boundAt: string;
    } | null;
    consumed: boolean;
    inviter: {
        userId: string;
        tenantName: string | null;
        displayName: string;
    } | null;
}>;
export declare const settleReferralPaidEventRequestSchema: z.ZodObject<{
    userId: z.ZodString;
    tenantId: z.ZodString;
    provider: z.ZodString;
    orderId: z.ZodString;
    paymentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    paidAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    orderId: string;
    userId: string;
    provider: string;
    paymentId?: string | null | undefined;
    paidAt?: string | undefined;
}, {
    tenantId: string;
    orderId: string;
    userId: string;
    provider: string;
    paymentId?: string | null | undefined;
    paidAt?: string | undefined;
}>;
export declare const settleReferralPaidEventResponseSchema: z.ZodObject<{
    settled: z.ZodBoolean;
    triggerType: z.ZodNullable<z.ZodEnum<["first_payment", "renewal", "first_product_create"]>>;
    reward: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodEnum<["PENDING", "AWARDED", "SKIPPED"]>;
        triggerType: z.ZodEnum<["first_payment", "renewal", "first_product_create"]>;
        statusReason: z.ZodNullable<z.ZodString>;
        referrerUserId: z.ZodString;
        inviteeUserId: z.ZodString;
        paymentProvider: z.ZodNullable<z.ZodString>;
        paymentId: z.ZodNullable<z.ZodString>;
        orderId: z.ZodNullable<z.ZodString>;
        rewardDaysReferrer: z.ZodNumber;
        rewardDaysInvitee: z.ZodNumber;
        awardedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }, {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }>>;
}, "strip", z.ZodTypeAny, {
    triggerType: "first_product_create" | "first_payment" | "renewal" | null;
    settled: boolean;
    reward: {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    } | null;
}, {
    triggerType: "first_product_create" | "first_payment" | "renewal" | null;
    settled: boolean;
    reward: {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    } | null;
}>;
export type ReferralBindingSource = z.infer<typeof referralBindingSourceSchema>;
export type ReferralRewardMode = z.infer<typeof referralRewardModeSchema>;
export type ReferralRewardTriggerType = z.infer<typeof referralRewardTriggerTypeSchema>;
export type ReferralRewardStatus = z.infer<typeof referralRewardStatusSchema>;
export type ReferralAttributionPageType = z.infer<typeof referralAttributionPageTypeSchema>;
export type ReferralProgramRules = z.infer<typeof referralProgramRulesSchema>;
export type ReferralBinding = z.infer<typeof referralBindingSchema>;
export type ReferralReward = z.infer<typeof referralRewardSchema>;
export type ReferralInviteProgress = z.infer<typeof referralInviteProgressSchema>;
export type MyReferralOverviewResponse = z.infer<typeof myReferralOverviewResponseSchema>;
export type BindReferralFromAttributionRequest = z.infer<typeof bindReferralFromAttributionRequestSchema>;
export type BindReferralFromAttributionResponse = z.infer<typeof bindReferralFromAttributionResponseSchema>;
export type SettleReferralPaidEventRequest = z.infer<typeof settleReferralPaidEventRequestSchema>;
export type SettleReferralPaidEventResponse = z.infer<typeof settleReferralPaidEventResponseSchema>;
