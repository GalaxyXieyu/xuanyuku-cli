import { z } from 'zod';
export declare const authEmailSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const authPhoneNumberSchema: z.ZodString;
export declare const authAccountSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const authLoginIdentifierSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const authCodeSchema: z.ZodString;
export declare const authPasswordSchema: z.ZodString;
export declare const authWechatIdSchema: z.ZodString;
export declare const authNullableWechatIdSchema: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
export declare const authNullableAccountSchema: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
export declare const authUserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
    name: z.ZodNullable<z.ZodString>;
    wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    isSuperAdmin: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string | null;
    email: string;
    account: string | null;
    wechatId: string | null;
    isSuperAdmin: boolean;
}, {
    id: string;
    name: string | null;
    email: string;
    isSuperAdmin: boolean;
    account?: string | null | undefined;
    wechatId?: string | null | undefined;
}>;
export declare const requestCodeRequestSchema: z.ZodObject<{
    email: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const requestCodeResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    expiresAt: z.ZodString;
    devCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    expiresAt: string;
    ok: true;
    devCode?: string | undefined;
}, {
    expiresAt: string;
    ok: true;
    devCode?: string | undefined;
}>;
export declare const requestSmsCodePurposeSchema: z.ZodEnum<["register", "login", "binding", "replace", "reset-password"]>;
export declare const requestSmsCodeRequestSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    purpose: z.ZodDefault<z.ZodEnum<["register", "login", "binding", "replace", "reset-password"]>>;
}, "strip", z.ZodTypeAny, {
    phoneNumber: string;
    purpose: "register" | "login" | "binding" | "replace" | "reset-password";
}, {
    phoneNumber: string;
    purpose?: "register" | "login" | "binding" | "replace" | "reset-password" | undefined;
}>;
export declare const requestSmsCodeResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    expiresAt: z.ZodString;
    devCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    expiresAt: string;
    ok: true;
    devCode?: string | undefined;
}, {
    expiresAt: string;
    ok: true;
    devCode?: string | undefined;
}>;
export declare const verifyCodeRequestSchema: z.ZodObject<{
    email: z.ZodEffects<z.ZodString, string, string>;
    code: z.ZodString;
    password: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code: string;
    email: string;
    password?: string | undefined;
}, {
    code: string;
    email: string;
    password?: string | undefined;
}>;
export declare const verifyCodeResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
}, {
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const passwordLoginRequestSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    account: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    phoneNumber: z.ZodOptional<z.ZodString>;
    login: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    email: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
    email?: string | undefined;
    account?: string | undefined;
    login?: string | undefined;
    phoneNumber?: string | undefined;
}, {
    password: string;
    email?: string | undefined;
    account?: string | undefined;
    login?: string | undefined;
    phoneNumber?: string | undefined;
}>, {
    password: string;
    email?: string | undefined;
    account?: string | undefined;
    login?: string | undefined;
    phoneNumber?: string | undefined;
}, {
    password: string;
    email?: string | undefined;
    account?: string | undefined;
    login?: string | undefined;
    phoneNumber?: string | undefined;
}>, {
    account: string | null;
    phoneNumber: string | null;
    login: string;
    password: string;
}, {
    password: string;
    email?: string | undefined;
    account?: string | undefined;
    login?: string | undefined;
    phoneNumber?: string | undefined;
}>;
export declare const passwordLoginResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
}, {
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const phoneLoginRequestSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    phoneNumber: string;
}, {
    code: string;
    phoneNumber: string;
}>;
export declare const phoneLoginResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
    isNewUser: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
    isNewUser: boolean;
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
    isNewUser: boolean;
}>;
export declare const authTenantSchema: z.ZodObject<{
    id: z.ZodString;
    slug: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    slug: string;
}, {
    id: string;
    name: string;
    slug: string;
}>;
export declare const weappLoginCodeSchema: z.ZodString;
export declare const weappSessionTokenSchema: z.ZodString;
export declare const weappLoginRequestSchema: z.ZodObject<{
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export declare const weappLoginResponseSchema: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
    status: z.ZodLiteral<"authenticated">;
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
}, "strip", z.ZodTypeAny, {
    status: "authenticated";
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
}, {
    status: "authenticated";
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>, z.ZodObject<{
    status: z.ZodLiteral<"binding_required">;
    weappSessionToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "binding_required";
    weappSessionToken: string;
}, {
    status: "binding_required";
    weappSessionToken: string;
}>]>;
export declare const weappBindPhoneLoginRequestSchema: z.ZodObject<{
    weappSessionToken: z.ZodString;
    phoneNumber: z.ZodString;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    phoneNumber: string;
    weappSessionToken: string;
}, {
    code: string;
    phoneNumber: string;
    weappSessionToken: string;
}>;
export declare const weappBindPhoneLoginResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const weappBindRealtimePhoneLoginRequestSchema: z.ZodObject<{
    weappSessionToken: z.ZodString;
    phoneCode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    weappSessionToken: string;
    phoneCode: string;
}, {
    weappSessionToken: string;
    phoneCode: string;
}>;
export declare const weappBindRealtimePhoneLoginResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const weappMigrationCandidateSchema: z.ZodObject<{
    eligible: z.ZodBoolean;
    reason: z.ZodNullable<z.ZodString>;
    sourceTenant: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    reason: string | null;
    eligible: boolean;
    sourceTenant: {
        id: string;
        name: string;
        slug: string;
    } | null;
}, {
    reason: string | null;
    eligible: boolean;
    sourceTenant: {
        id: string;
        name: string;
        slug: string;
    } | null;
}>;
export declare const weappMigrationCandidateResponseSchema: z.ZodObject<{
    candidate: z.ZodObject<{
        eligible: z.ZodBoolean;
        reason: z.ZodNullable<z.ZodString>;
        sourceTenant: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            slug: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            slug: string;
        }, {
            id: string;
            name: string;
            slug: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        reason: string | null;
        eligible: boolean;
        sourceTenant: {
            id: string;
            name: string;
            slug: string;
        } | null;
    }, {
        reason: string | null;
        eligible: boolean;
        sourceTenant: {
            id: string;
            name: string;
            slug: string;
        } | null;
    }>;
}, "strip", z.ZodTypeAny, {
    candidate: {
        reason: string | null;
        eligible: boolean;
        sourceTenant: {
            id: string;
            name: string;
            slug: string;
        } | null;
    };
}, {
    candidate: {
        reason: string | null;
        eligible: boolean;
        sourceTenant: {
            id: string;
            name: string;
            slug: string;
        } | null;
    };
}>;
export declare const weappMigratePhoneAccountRequestSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    phoneNumber: string;
}, {
    code: string;
    phoneNumber: string;
}>;
export declare const weappMigratePhoneAccountResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
    migratedFromTenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
    migratedFromTenant: {
        id: string;
        name: string;
        slug: string;
    };
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
    migratedFromTenant: {
        id: string;
        name: string;
        slug: string;
    };
}>;
export declare const accountMergeChoiceSchema: z.ZodEnum<["current", "phone_owner"]>;
export declare const accountMergeDecisionSchema: z.ZodEnum<["phone_available", "same_account", "auto_merge_keep_current", "auto_merge_keep_phone_owner", "selection_required"]>;
export declare const accountMergeDataSummarySchema: z.ZodObject<{
    hasWorkspace: z.ZodBoolean;
    hasBusinessData: z.ZodBoolean;
    productCount: z.ZodNumber;
    seriesCount: z.ZodNumber;
    eventCount: z.ZodNumber;
    shareCount: z.ZodNumber;
    subscriptionOrderCount: z.ZodNumber;
    referralBindingCount: z.ZodNumber;
    referralRewardCount: z.ZodNumber;
    hasPresentationConfig: z.ZodBoolean;
    hasBrandingConfig: z.ZodBoolean;
    hasWatermarkConfig: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    hasWorkspace: boolean;
    hasBusinessData: boolean;
    productCount: number;
    seriesCount: number;
    eventCount: number;
    shareCount: number;
    subscriptionOrderCount: number;
    referralBindingCount: number;
    referralRewardCount: number;
    hasPresentationConfig: boolean;
    hasBrandingConfig: boolean;
    hasWatermarkConfig: boolean;
}, {
    hasWorkspace: boolean;
    hasBusinessData: boolean;
    productCount: number;
    seriesCount: number;
    eventCount: number;
    shareCount: number;
    subscriptionOrderCount: number;
    referralBindingCount: number;
    referralRewardCount: number;
    hasPresentationConfig: boolean;
    hasBrandingConfig: boolean;
    hasWatermarkConfig: boolean;
}>;
export declare const accountMergeAccountSummarySchema: z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenant: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>>;
    role: z.ZodNullable<z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>>;
    phoneNumber: z.ZodNullable<z.ZodString>;
    hasPassword: z.ZodBoolean;
    isWeappShadow: z.ZodBoolean;
    dataSummary: z.ZodObject<{
        hasWorkspace: z.ZodBoolean;
        hasBusinessData: z.ZodBoolean;
        productCount: z.ZodNumber;
        seriesCount: z.ZodNumber;
        eventCount: z.ZodNumber;
        shareCount: z.ZodNumber;
        subscriptionOrderCount: z.ZodNumber;
        referralBindingCount: z.ZodNumber;
        referralRewardCount: z.ZodNumber;
        hasPresentationConfig: z.ZodBoolean;
        hasBrandingConfig: z.ZodBoolean;
        hasWatermarkConfig: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        hasWorkspace: boolean;
        hasBusinessData: boolean;
        productCount: number;
        seriesCount: number;
        eventCount: number;
        shareCount: number;
        subscriptionOrderCount: number;
        referralBindingCount: number;
        referralRewardCount: number;
        hasPresentationConfig: boolean;
        hasBrandingConfig: boolean;
        hasWatermarkConfig: boolean;
    }, {
        hasWorkspace: boolean;
        hasBusinessData: boolean;
        productCount: number;
        seriesCount: number;
        eventCount: number;
        shareCount: number;
        subscriptionOrderCount: number;
        referralBindingCount: number;
        referralRewardCount: number;
        hasPresentationConfig: boolean;
        hasBrandingConfig: boolean;
        hasWatermarkConfig: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    } | null;
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
    phoneNumber: string | null;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
    hasPassword: boolean;
    isWeappShadow: boolean;
    dataSummary: {
        hasWorkspace: boolean;
        hasBusinessData: boolean;
        productCount: number;
        seriesCount: number;
        eventCount: number;
        shareCount: number;
        subscriptionOrderCount: number;
        referralBindingCount: number;
        referralRewardCount: number;
        hasPresentationConfig: boolean;
        hasBrandingConfig: boolean;
        hasWatermarkConfig: boolean;
    };
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    } | null;
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
    phoneNumber: string | null;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
    hasPassword: boolean;
    isWeappShadow: boolean;
    dataSummary: {
        hasWorkspace: boolean;
        hasBusinessData: boolean;
        productCount: number;
        seriesCount: number;
        eventCount: number;
        shareCount: number;
        subscriptionOrderCount: number;
        referralBindingCount: number;
        referralRewardCount: number;
        hasPresentationConfig: boolean;
        hasBrandingConfig: boolean;
        hasWatermarkConfig: boolean;
    };
}>;
export declare const accountMergePreviewRequestSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
}, "strip", z.ZodTypeAny, {
    phoneNumber: string;
}, {
    phoneNumber: string;
}>;
export declare const accountMergePreviewResponseSchema: z.ZodObject<{
    preview: z.ZodObject<{
        phoneNumber: z.ZodString;
        decision: z.ZodEnum<["phone_available", "same_account", "auto_merge_keep_current", "auto_merge_keep_phone_owner", "selection_required"]>;
        current: z.ZodObject<{
            user: z.ZodObject<{
                id: z.ZodString;
                email: z.ZodString;
                account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
                name: z.ZodNullable<z.ZodString>;
                wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
                isSuperAdmin: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
                isSuperAdmin: boolean;
            }, {
                id: string;
                name: string | null;
                email: string;
                isSuperAdmin: boolean;
                account?: string | null | undefined;
                wechatId?: string | null | undefined;
            }>;
            tenant: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                slug: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                slug: string;
            }, {
                id: string;
                name: string;
                slug: string;
            }>>;
            role: z.ZodNullable<z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>>;
            phoneNumber: z.ZodNullable<z.ZodString>;
            hasPassword: z.ZodBoolean;
            isWeappShadow: z.ZodBoolean;
            dataSummary: z.ZodObject<{
                hasWorkspace: z.ZodBoolean;
                hasBusinessData: z.ZodBoolean;
                productCount: z.ZodNumber;
                seriesCount: z.ZodNumber;
                eventCount: z.ZodNumber;
                shareCount: z.ZodNumber;
                subscriptionOrderCount: z.ZodNumber;
                referralBindingCount: z.ZodNumber;
                referralRewardCount: z.ZodNumber;
                hasPresentationConfig: z.ZodBoolean;
                hasBrandingConfig: z.ZodBoolean;
                hasWatermarkConfig: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            }, {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            }>;
        }, "strip", z.ZodTypeAny, {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
                isSuperAdmin: boolean;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        }, {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                isSuperAdmin: boolean;
                account?: string | null | undefined;
                wechatId?: string | null | undefined;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        }>;
        phoneOwner: z.ZodNullable<z.ZodObject<{
            user: z.ZodObject<{
                id: z.ZodString;
                email: z.ZodString;
                account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
                name: z.ZodNullable<z.ZodString>;
                wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
                isSuperAdmin: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
                isSuperAdmin: boolean;
            }, {
                id: string;
                name: string | null;
                email: string;
                isSuperAdmin: boolean;
                account?: string | null | undefined;
                wechatId?: string | null | undefined;
            }>;
            tenant: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                slug: z.ZodString;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string;
                slug: string;
            }, {
                id: string;
                name: string;
                slug: string;
            }>>;
            role: z.ZodNullable<z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>>;
            phoneNumber: z.ZodNullable<z.ZodString>;
            hasPassword: z.ZodBoolean;
            isWeappShadow: z.ZodBoolean;
            dataSummary: z.ZodObject<{
                hasWorkspace: z.ZodBoolean;
                hasBusinessData: z.ZodBoolean;
                productCount: z.ZodNumber;
                seriesCount: z.ZodNumber;
                eventCount: z.ZodNumber;
                shareCount: z.ZodNumber;
                subscriptionOrderCount: z.ZodNumber;
                referralBindingCount: z.ZodNumber;
                referralRewardCount: z.ZodNumber;
                hasPresentationConfig: z.ZodBoolean;
                hasBrandingConfig: z.ZodBoolean;
                hasWatermarkConfig: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            }, {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            }>;
        }, "strip", z.ZodTypeAny, {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
                isSuperAdmin: boolean;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        }, {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                isSuperAdmin: boolean;
                account?: string | null | undefined;
                wechatId?: string | null | undefined;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        }>>;
    }, "strip", z.ZodTypeAny, {
        phoneNumber: string;
        current: {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
                isSuperAdmin: boolean;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        };
        decision: "phone_available" | "same_account" | "auto_merge_keep_current" | "auto_merge_keep_phone_owner" | "selection_required";
        phoneOwner: {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
                isSuperAdmin: boolean;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        } | null;
    }, {
        phoneNumber: string;
        current: {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                isSuperAdmin: boolean;
                account?: string | null | undefined;
                wechatId?: string | null | undefined;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        };
        decision: "phone_available" | "same_account" | "auto_merge_keep_current" | "auto_merge_keep_phone_owner" | "selection_required";
        phoneOwner: {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                isSuperAdmin: boolean;
                account?: string | null | undefined;
                wechatId?: string | null | undefined;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        } | null;
    }>;
}, "strip", z.ZodTypeAny, {
    preview: {
        phoneNumber: string;
        current: {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
                isSuperAdmin: boolean;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        };
        decision: "phone_available" | "same_account" | "auto_merge_keep_current" | "auto_merge_keep_phone_owner" | "selection_required";
        phoneOwner: {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
                isSuperAdmin: boolean;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        } | null;
    };
}, {
    preview: {
        phoneNumber: string;
        current: {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                isSuperAdmin: boolean;
                account?: string | null | undefined;
                wechatId?: string | null | undefined;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        };
        decision: "phone_available" | "same_account" | "auto_merge_keep_current" | "auto_merge_keep_phone_owner" | "selection_required";
        phoneOwner: {
            tenant: {
                id: string;
                name: string;
                slug: string;
            } | null;
            role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
            phoneNumber: string | null;
            user: {
                id: string;
                name: string | null;
                email: string;
                isSuperAdmin: boolean;
                account?: string | null | undefined;
                wechatId?: string | null | undefined;
            };
            hasPassword: boolean;
            isWeappShadow: boolean;
            dataSummary: {
                hasWorkspace: boolean;
                hasBusinessData: boolean;
                productCount: number;
                seriesCount: number;
                eventCount: number;
                shareCount: number;
                subscriptionOrderCount: number;
                referralBindingCount: number;
                referralRewardCount: number;
                hasPresentationConfig: boolean;
                hasBrandingConfig: boolean;
                hasWatermarkConfig: boolean;
            };
        } | null;
    };
}>;
export declare const accountMergeExecuteRequestSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    code: z.ZodString;
    oldCode: z.ZodOptional<z.ZodString>;
    keep: z.ZodOptional<z.ZodEnum<["current", "phone_owner"]>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    phoneNumber: string;
    oldCode?: string | undefined;
    keep?: "current" | "phone_owner" | undefined;
}, {
    code: string;
    phoneNumber: string;
    oldCode?: string | undefined;
    keep?: "current" | "phone_owner" | undefined;
}>;
export declare const accountMergeExecuteResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
    decision: z.ZodEnum<["phone_available", "same_account", "auto_merge_keep_current", "auto_merge_keep_phone_owner", "selection_required"]>;
    merged: z.ZodBoolean;
    kept: z.ZodEnum<["current", "phone_owner"]>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
    decision: "phone_available" | "same_account" | "auto_merge_keep_current" | "auto_merge_keep_phone_owner" | "selection_required";
    merged: boolean;
    kept: "current" | "phone_owner";
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
    decision: "phone_available" | "same_account" | "auto_merge_keep_current" | "auto_merge_keep_phone_owner" | "selection_required";
    merged: boolean;
    kept: "current" | "phone_owner";
}>;
export declare const weappRegisterRequestSchema: z.ZodObject<{
    weappSessionToken: z.ZodString;
    tenantName: z.ZodString;
    displayName: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, "strip", z.ZodTypeAny, {
    tenantName: string;
    displayName: string | null;
    weappSessionToken: string;
}, {
    tenantName: string;
    weappSessionToken: string;
    displayName?: string | null | undefined;
}>;
export declare const weappRegisterResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
    role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const meResponseSchema: z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
    tenantId?: string | null | undefined;
}, {
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
    tenantId?: string | null | undefined;
}>;
export declare const meProfileSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
    name: z.ZodNullable<z.ZodString>;
    wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    avatarUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    createdAt: z.ZodString;
    passwordUpdatedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string | null;
    createdAt: string;
    email: string;
    account: string | null;
    wechatId: string | null;
    avatarUrl: string | null;
    passwordUpdatedAt: string | null;
}, {
    id: string;
    name: string | null;
    createdAt: string;
    email: string;
    avatarUrl: string | null;
    passwordUpdatedAt: string | null;
    account?: string | null | undefined;
    wechatId?: string | null | undefined;
}>;
export declare const meProfileResponseSchema: z.ZodObject<{
    profile: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        avatarUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        createdAt: z.ZodString;
        passwordUpdatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        account: string | null;
        wechatId: string | null;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
    }, {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    profile: {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        account: string | null;
        wechatId: string | null;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
    };
}, {
    profile: {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const updateMeProfileRequestSchema: z.ZodObject<{
    name: z.ZodNullable<z.ZodString>;
    wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, "strip", z.ZodTypeAny, {
    name: string | null;
    wechatId: string | null;
}, {
    name: string | null;
    wechatId?: string | null | undefined;
}>;
export declare const updateMeProfileResponseSchema: z.ZodObject<{
    profile: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        avatarUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        createdAt: z.ZodString;
        passwordUpdatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        account: string | null;
        wechatId: string | null;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
    }, {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    profile: {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        account: string | null;
        wechatId: string | null;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
    };
}, {
    profile: {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const uploadMyAvatarResponseSchema: z.ZodObject<{
    profile: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        avatarUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        createdAt: z.ZodString;
        passwordUpdatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        account: string | null;
        wechatId: string | null;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
    }, {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    profile: {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        account: string | null;
        wechatId: string | null;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
    };
}, {
    profile: {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const deleteMyAvatarResponseSchema: z.ZodObject<{
    profile: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        avatarUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        createdAt: z.ZodString;
        passwordUpdatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        account: string | null;
        wechatId: string | null;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
    }, {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    profile: {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        account: string | null;
        wechatId: string | null;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
    };
}, {
    profile: {
        id: string;
        name: string | null;
        createdAt: string;
        email: string;
        avatarUrl: string | null;
        passwordUpdatedAt: string | null;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const updateMyPasswordRequestSchema: z.ZodObject<{
    currentPassword: z.ZodOptional<z.ZodString>;
    newPassword: z.ZodString;
    smsCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    newPassword: string;
    currentPassword?: string | undefined;
    smsCode?: string | undefined;
}, {
    newPassword: string;
    currentPassword?: string | undefined;
    smsCode?: string | undefined;
}>;
export declare const updateMyPasswordResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    passwordUpdatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    ok: true;
    passwordUpdatedAt: string;
}, {
    ok: true;
    passwordUpdatedAt: string;
}>;
export declare const securityProfileQuestionSchema: z.ZodString;
export declare const securityProfileAnswerSchema: z.ZodString;
export declare const mySecurityProfileSchema: z.ZodObject<{
    question: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    updatedAt: string;
    question: string;
}, {
    updatedAt: string;
    question: string;
}>;
export declare const mySecurityProfileResponseSchema: z.ZodObject<{
    profile: z.ZodNullable<z.ZodObject<{
        question: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        updatedAt: string;
        question: string;
    }, {
        updatedAt: string;
        question: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    profile: {
        updatedAt: string;
        question: string;
    } | null;
}, {
    profile: {
        updatedAt: string;
        question: string;
    } | null;
}>;
export declare const upsertMySecurityProfileRequestSchema: z.ZodObject<{
    question: z.ZodString;
    answer: z.ZodString;
}, "strip", z.ZodTypeAny, {
    question: string;
    answer: string;
}, {
    question: string;
    answer: string;
}>;
export declare const upsertMySecurityProfileResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    updatedAt: string;
    ok: true;
}, {
    updatedAt: string;
    ok: true;
}>;
export declare const myPhoneBindingSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    updatedAt: string;
    phoneNumber: string;
}, {
    updatedAt: string;
    phoneNumber: string;
}>;
export declare const myPhoneBindingResponseSchema: z.ZodObject<{
    binding: z.ZodNullable<z.ZodObject<{
        phoneNumber: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        updatedAt: string;
        phoneNumber: string;
    }, {
        updatedAt: string;
        phoneNumber: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    binding: {
        updatedAt: string;
        phoneNumber: string;
    } | null;
}, {
    binding: {
        updatedAt: string;
        phoneNumber: string;
    } | null;
}>;
export declare const upsertMyPhoneBindingRequestSchema: z.ZodObject<{
    phoneNumber: z.ZodString;
    code: z.ZodString;
    oldCode: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code: string;
    phoneNumber: string;
    oldCode?: string | undefined;
}, {
    code: string;
    phoneNumber: string;
    oldCode?: string | undefined;
}>;
export declare const upsertMyPhoneBindingResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    binding: z.ZodObject<{
        phoneNumber: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        updatedAt: string;
        phoneNumber: string;
    }, {
        updatedAt: string;
        phoneNumber: string;
    }>;
}, "strip", z.ZodTypeAny, {
    ok: true;
    binding: {
        updatedAt: string;
        phoneNumber: string;
    };
}, {
    ok: true;
    binding: {
        updatedAt: string;
        phoneNumber: string;
    };
}>;
export declare const meSubscriptionResponseSchema: z.ZodObject<{
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
    pricingCatalog: z.ZodObject<{
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
    pricingCatalog: {
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
    pricingCatalog: {
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
export declare const createWechatAuthorizeUrlRequestSchema: z.ZodObject<{
    returnPath: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    returnPath: string;
}, {
    returnPath: string;
}>;
export declare const createWechatAuthorizeUrlResponseSchema: z.ZodObject<{
    authorizeUrl: z.ZodString;
    expiresAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    expiresAt: string;
    authorizeUrl: string;
}, {
    expiresAt: string;
    authorizeUrl: string;
}>;
export declare const registerRequestSchema: z.ZodObject<{
    account: z.ZodEffects<z.ZodString, string, string>;
    phoneNumber: z.ZodString;
    code: z.ZodString;
    password: z.ZodString;
    wechatId: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    account: string;
    phoneNumber: string;
    password: string;
    wechatId?: string | null | undefined;
}, {
    code: string;
    account: string;
    phoneNumber: string;
    password: string;
    wechatId?: string | null | undefined;
}>;
export declare const registerResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
    role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    accessToken: string;
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export type RequestCodeRequest = z.infer<typeof requestCodeRequestSchema>;
export type RequestCodeResponse = z.infer<typeof requestCodeResponseSchema>;
export type RequestSmsCodeRequest = z.infer<typeof requestSmsCodeRequestSchema>;
export type RequestSmsCodePurpose = z.infer<typeof requestSmsCodePurposeSchema>;
export type RequestSmsCodeResponse = z.infer<typeof requestSmsCodeResponseSchema>;
export type VerifyCodeRequest = z.infer<typeof verifyCodeRequestSchema>;
export type VerifyCodeResponse = z.infer<typeof verifyCodeResponseSchema>;
export type PasswordLoginRequest = z.infer<typeof passwordLoginRequestSchema>;
export type PasswordLoginResponse = z.infer<typeof passwordLoginResponseSchema>;
export type PhoneLoginRequest = z.infer<typeof phoneLoginRequestSchema>;
export type PhoneLoginResponse = z.infer<typeof phoneLoginResponseSchema>;
export type AuthTenant = z.infer<typeof authTenantSchema>;
export type WeappLoginRequest = z.infer<typeof weappLoginRequestSchema>;
export type WeappLoginResponse = z.infer<typeof weappLoginResponseSchema>;
export type WeappBindPhoneLoginRequest = z.infer<typeof weappBindPhoneLoginRequestSchema>;
export type WeappBindPhoneLoginResponse = z.infer<typeof weappBindPhoneLoginResponseSchema>;
export type WeappBindRealtimePhoneLoginRequest = z.infer<typeof weappBindRealtimePhoneLoginRequestSchema>;
export type WeappBindRealtimePhoneLoginResponse = z.infer<typeof weappBindRealtimePhoneLoginResponseSchema>;
export type WeappMigrationCandidate = z.infer<typeof weappMigrationCandidateSchema>;
export type WeappMigrationCandidateResponse = z.infer<typeof weappMigrationCandidateResponseSchema>;
export type WeappMigratePhoneAccountRequest = z.infer<typeof weappMigratePhoneAccountRequestSchema>;
export type WeappMigratePhoneAccountResponse = z.infer<typeof weappMigratePhoneAccountResponseSchema>;
export type AccountMergeChoice = z.infer<typeof accountMergeChoiceSchema>;
export type AccountMergeDecision = z.infer<typeof accountMergeDecisionSchema>;
export type AccountMergeDataSummary = z.infer<typeof accountMergeDataSummarySchema>;
export type AccountMergeAccountSummary = z.infer<typeof accountMergeAccountSummarySchema>;
export type AccountMergePreviewRequest = z.infer<typeof accountMergePreviewRequestSchema>;
export type AccountMergePreviewResponse = z.infer<typeof accountMergePreviewResponseSchema>;
export type AccountMergeExecuteRequest = z.infer<typeof accountMergeExecuteRequestSchema>;
export type AccountMergeExecuteResponse = z.infer<typeof accountMergeExecuteResponseSchema>;
export type WeappRegisterRequest = z.infer<typeof weappRegisterRequestSchema>;
export type WeappRegisterResponse = z.infer<typeof weappRegisterResponseSchema>;
export type AuthUser = z.infer<typeof authUserSchema>;
export type MeResponse = z.infer<typeof meResponseSchema>;
export type MeProfile = z.infer<typeof meProfileSchema>;
export type MeProfileResponse = z.infer<typeof meProfileResponseSchema>;
export type UpdateMeProfileRequest = z.infer<typeof updateMeProfileRequestSchema>;
export type UpdateMeProfileResponse = z.infer<typeof updateMeProfileResponseSchema>;
export type UploadMyAvatarResponse = z.infer<typeof uploadMyAvatarResponseSchema>;
export type DeleteMyAvatarResponse = z.infer<typeof deleteMyAvatarResponseSchema>;
export type UpdateMyPasswordRequest = z.infer<typeof updateMyPasswordRequestSchema>;
export type UpdateMyPasswordResponse = z.infer<typeof updateMyPasswordResponseSchema>;
export type MySecurityProfile = z.infer<typeof mySecurityProfileSchema>;
export type MySecurityProfileResponse = z.infer<typeof mySecurityProfileResponseSchema>;
export type UpsertMySecurityProfileRequest = z.infer<typeof upsertMySecurityProfileRequestSchema>;
export type UpsertMySecurityProfileResponse = z.infer<typeof upsertMySecurityProfileResponseSchema>;
export type MyPhoneBinding = z.infer<typeof myPhoneBindingSchema>;
export type MyPhoneBindingResponse = z.infer<typeof myPhoneBindingResponseSchema>;
export type UpsertMyPhoneBindingRequest = z.infer<typeof upsertMyPhoneBindingRequestSchema>;
export type UpsertMyPhoneBindingResponse = z.infer<typeof upsertMyPhoneBindingResponseSchema>;
export type MeSubscriptionResponse = z.infer<typeof meSubscriptionResponseSchema>;
export type CreateWechatAuthorizeUrlRequest = z.infer<typeof createWechatAuthorizeUrlRequestSchema>;
export type CreateWechatAuthorizeUrlResponse = z.infer<typeof createWechatAuthorizeUrlResponseSchema>;
export type RegisterRequest = z.infer<typeof registerRequestSchema>;
export type RegisterResponse = z.infer<typeof registerResponseSchema>;
