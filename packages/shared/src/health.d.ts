import { z } from 'zod';
export declare const healthResponseSchema: z.ZodObject<{
    status: z.ZodEnum<["ok", "degraded"]>;
    service: z.ZodEnum<["api", "web"]>;
    timestamp: z.ZodString;
    errorCode: z.ZodNativeEnum<{
        readonly None: "NONE";
        readonly ApiUnavailable: "API_UNAVAILABLE";
        readonly InvalidRequestPayload: "INVALID_REQUEST_PAYLOAD";
        readonly InvalidCode: "INVALID_CODE";
        readonly ExpiredCode: "EXPIRED_CODE";
        readonly Unauthorized: "UNAUTHORIZED";
        readonly Forbidden: "FORBIDDEN";
        readonly AuthInvalidCredentials: "AUTH_INVALID_CREDENTIALS";
        readonly AuthPhoneNotRegistered: "AUTH_PHONE_NOT_REGISTERED";
        readonly AuthPhoneAlreadyRegistered: "AUTH_PHONE_ALREADY_REGISTERED";
        readonly AuthAccountTaken: "AUTH_ACCOUNT_TAKEN";
        readonly AuthPhoneBound: "AUTH_PHONE_BOUND";
        readonly AuthPhoneNotAllowed: "AUTH_PHONE_NOT_ALLOWED";
        readonly AuthWechatAlreadyBound: "AUTH_WECHAT_ALREADY_BOUND";
        readonly AuthMigrationNotEligible: "AUTH_MIGRATION_NOT_ELIGIBLE";
        readonly AuthMigrationTargetNotFound: "AUTH_MIGRATION_TARGET_NOT_FOUND";
        readonly AuthMigrationTargetConflict: "AUTH_MIGRATION_TARGET_CONFLICT";
        readonly AuthMigrationSourceNotEmpty: "AUTH_MIGRATION_SOURCE_NOT_EMPTY";
        readonly AuthAccountMergeSelectionRequired: "AUTH_ACCOUNT_MERGE_SELECTION_REQUIRED";
        readonly AuthOldPhoneCodeRequired: "AUTH_OLD_PHONE_CODE_REQUIRED";
        readonly AuthCurrentPhoneMissing: "AUTH_CURRENT_PHONE_MISSING";
        readonly AuthCurrentPasswordIncorrect: "AUTH_CURRENT_PASSWORD_INCORRECT";
        readonly AuthPasswordSameAsCurrent: "AUTH_PASSWORD_SAME_AS_CURRENT";
        readonly TenantNotFound: "TENANT_NOT_FOUND";
        readonly TenantMemberNotFound: "TENANT_MEMBER_NOT_FOUND";
        readonly NotTenantMember: "NOT_TENANT_MEMBER";
        readonly TenantSlugConflict: "TENANT_SLUG_CONFLICT";
        readonly TenantNotSelected: "TENANT_NOT_SELECTED";
        readonly ProductNotFound: "PRODUCT_NOT_FOUND";
        readonly ProductNotBelongToTenant: "PRODUCT_NOT_BELONG_TO_TENANT";
        readonly ProductEventNotFound: "PRODUCT_EVENT_NOT_FOUND";
        readonly ProductImageNotFound: "PRODUCT_IMAGE_NOT_FOUND";
        readonly ProductCertificateNotFound: "PRODUCT_CERTIFICATE_NOT_FOUND";
        readonly ProductCertificateEligibilityFailed: "PRODUCT_CERTIFICATE_ELIGIBILITY_FAILED";
        readonly ProductCertificateQuotaExceeded: "PRODUCT_CERTIFICATE_QUOTA_EXCEEDED";
        readonly ProductCertificateAlreadyVoid: "PRODUCT_CERTIFICATE_ALREADY_VOID";
        readonly ProductCouplePhotoNotFound: "PRODUCT_COUPLE_PHOTO_NOT_FOUND";
        readonly SaleBatchNotFound: "SALE_BATCH_NOT_FOUND";
        readonly SaleBatchEventMismatch: "SALE_BATCH_EVENT_MISMATCH";
        readonly SaleBatchQuantityExceeded: "SALE_BATCH_QUANTITY_EXCEEDED";
        readonly SaleAllocationNotFound: "SALE_ALLOCATION_NOT_FOUND";
        readonly SaleSubjectMediaNotFound: "SALE_SUBJECT_MEDIA_NOT_FOUND";
        readonly SeriesNotFound: "SERIES_NOT_FOUND";
        readonly BreederNotFound: "BREEDER_NOT_FOUND";
        readonly FeaturedProductNotFound: "FEATURED_PRODUCT_NOT_FOUND";
        readonly FeaturedProductConflict: "FEATURED_PRODUCT_CONFLICT";
        readonly ShareNotFound: "SHARE_NOT_FOUND";
        readonly ShareSignatureInvalid: "SHARE_SIGNATURE_INVALID";
        readonly ShareSignatureExpired: "SHARE_SIGNATURE_EXPIRED";
        readonly TenantSubscriptionInactive: "TENANT_SUBSCRIPTION_INACTIVE";
        readonly TenantSubscriptionPlanInsufficient: "TENANT_SUBSCRIPTION_PLAN_INSUFFICIENT";
        readonly TenantSubscriptionQuotaExceeded: "TENANT_SUBSCRIPTION_QUOTA_EXCEEDED";
        readonly SubscriptionActivationCodeInvalid: "SUBSCRIPTION_ACTIVATION_CODE_INVALID";
        readonly SubscriptionActivationCodeExpired: "SUBSCRIPTION_ACTIVATION_CODE_EXPIRED";
        readonly SubscriptionActivationCodeDisabled: "SUBSCRIPTION_ACTIVATION_CODE_DISABLED";
        readonly SubscriptionActivationCodeRedeemLimitReached: "SUBSCRIPTION_ACTIVATION_CODE_REDEEM_LIMIT_REACHED";
        readonly WechatOauthRequired: "WECHAT_OAUTH_REQUIRED";
        readonly SubscriptionOrderNotFound: "SUBSCRIPTION_ORDER_NOT_FOUND";
        readonly SubscriptionOrderInvalidState: "SUBSCRIPTION_ORDER_INVALID_STATE";
        readonly SubscriptionOrderInvalidPlanDuration: "SUBSCRIPTION_ORDER_INVALID_PLAN_DURATION";
        readonly SubscriptionOrderDeferredExists: "SUBSCRIPTION_ORDER_DEFERRED_EXISTS";
        readonly PaymentSignatureInvalid: "PAYMENT_SIGNATURE_INVALID";
        readonly PaymentAmountMismatch: "PAYMENT_AMOUNT_MISMATCH";
        readonly AiFeatureDisabled: "AI_FEATURE_DISABLED";
        readonly AiModelNotConfigured: "AI_MODEL_NOT_CONFIGURED";
        readonly AiRateLimited: "AI_RATE_LIMITED";
        readonly QuotaExceeded: "QUOTA_EXCEEDED";
        readonly AiProviderError: "AI_PROVIDER_ERROR";
        readonly AiModelNotAvailable: "AI_MODEL_NOT_AVAILABLE";
        readonly PointsAccountNotFound: "POINTS_ACCOUNT_NOT_FOUND";
        readonly PointsInsufficientBalance: "POINTS_INSUFFICIENT_BALANCE";
        readonly SigninAlreadyCompleted: "SIGNIN_ALREADY_COMPLETED";
        readonly UserNotFound: "USER_NOT_FOUND";
        readonly AiChatStreamAborted: "AI_CHAT_STREAM_ABORTED";
        readonly AiChatConversationNotFound: "AI_CHAT_CONVERSATION_NOT_FOUND";
        readonly AiChatDuplicateRequestInFlight: "AI_CHAT_DUPLICATE_REQUEST_IN_FLIGHT";
    }>;
}, "strip", z.ZodTypeAny, {
    errorCode: "NONE" | "API_UNAVAILABLE" | "INVALID_REQUEST_PAYLOAD" | "INVALID_CODE" | "EXPIRED_CODE" | "UNAUTHORIZED" | "FORBIDDEN" | "AUTH_INVALID_CREDENTIALS" | "AUTH_PHONE_NOT_REGISTERED" | "AUTH_PHONE_ALREADY_REGISTERED" | "AUTH_ACCOUNT_TAKEN" | "AUTH_PHONE_BOUND" | "AUTH_PHONE_NOT_ALLOWED" | "AUTH_WECHAT_ALREADY_BOUND" | "AUTH_MIGRATION_NOT_ELIGIBLE" | "AUTH_MIGRATION_TARGET_NOT_FOUND" | "AUTH_MIGRATION_TARGET_CONFLICT" | "AUTH_MIGRATION_SOURCE_NOT_EMPTY" | "AUTH_ACCOUNT_MERGE_SELECTION_REQUIRED" | "AUTH_OLD_PHONE_CODE_REQUIRED" | "AUTH_CURRENT_PHONE_MISSING" | "AUTH_CURRENT_PASSWORD_INCORRECT" | "AUTH_PASSWORD_SAME_AS_CURRENT" | "TENANT_NOT_FOUND" | "TENANT_MEMBER_NOT_FOUND" | "NOT_TENANT_MEMBER" | "TENANT_SLUG_CONFLICT" | "TENANT_NOT_SELECTED" | "PRODUCT_NOT_FOUND" | "PRODUCT_NOT_BELONG_TO_TENANT" | "PRODUCT_EVENT_NOT_FOUND" | "PRODUCT_IMAGE_NOT_FOUND" | "PRODUCT_CERTIFICATE_NOT_FOUND" | "PRODUCT_CERTIFICATE_ELIGIBILITY_FAILED" | "PRODUCT_CERTIFICATE_QUOTA_EXCEEDED" | "PRODUCT_CERTIFICATE_ALREADY_VOID" | "PRODUCT_COUPLE_PHOTO_NOT_FOUND" | "SALE_BATCH_NOT_FOUND" | "SALE_BATCH_EVENT_MISMATCH" | "SALE_BATCH_QUANTITY_EXCEEDED" | "SALE_ALLOCATION_NOT_FOUND" | "SALE_SUBJECT_MEDIA_NOT_FOUND" | "SERIES_NOT_FOUND" | "BREEDER_NOT_FOUND" | "FEATURED_PRODUCT_NOT_FOUND" | "FEATURED_PRODUCT_CONFLICT" | "SHARE_NOT_FOUND" | "SHARE_SIGNATURE_INVALID" | "SHARE_SIGNATURE_EXPIRED" | "TENANT_SUBSCRIPTION_INACTIVE" | "TENANT_SUBSCRIPTION_PLAN_INSUFFICIENT" | "TENANT_SUBSCRIPTION_QUOTA_EXCEEDED" | "SUBSCRIPTION_ACTIVATION_CODE_INVALID" | "SUBSCRIPTION_ACTIVATION_CODE_EXPIRED" | "SUBSCRIPTION_ACTIVATION_CODE_DISABLED" | "SUBSCRIPTION_ACTIVATION_CODE_REDEEM_LIMIT_REACHED" | "WECHAT_OAUTH_REQUIRED" | "SUBSCRIPTION_ORDER_NOT_FOUND" | "SUBSCRIPTION_ORDER_INVALID_STATE" | "SUBSCRIPTION_ORDER_INVALID_PLAN_DURATION" | "SUBSCRIPTION_ORDER_DEFERRED_EXISTS" | "PAYMENT_SIGNATURE_INVALID" | "PAYMENT_AMOUNT_MISMATCH" | "AI_FEATURE_DISABLED" | "AI_MODEL_NOT_CONFIGURED" | "AI_RATE_LIMITED" | "QUOTA_EXCEEDED" | "AI_PROVIDER_ERROR" | "AI_MODEL_NOT_AVAILABLE" | "POINTS_ACCOUNT_NOT_FOUND" | "POINTS_INSUFFICIENT_BALANCE" | "SIGNIN_ALREADY_COMPLETED" | "USER_NOT_FOUND" | "AI_CHAT_STREAM_ABORTED" | "AI_CHAT_CONVERSATION_NOT_FOUND" | "AI_CHAT_DUPLICATE_REQUEST_IN_FLIGHT";
    status: "ok" | "degraded";
    service: "api" | "web";
    timestamp: string;
}, {
    errorCode: "NONE" | "API_UNAVAILABLE" | "INVALID_REQUEST_PAYLOAD" | "INVALID_CODE" | "EXPIRED_CODE" | "UNAUTHORIZED" | "FORBIDDEN" | "AUTH_INVALID_CREDENTIALS" | "AUTH_PHONE_NOT_REGISTERED" | "AUTH_PHONE_ALREADY_REGISTERED" | "AUTH_ACCOUNT_TAKEN" | "AUTH_PHONE_BOUND" | "AUTH_PHONE_NOT_ALLOWED" | "AUTH_WECHAT_ALREADY_BOUND" | "AUTH_MIGRATION_NOT_ELIGIBLE" | "AUTH_MIGRATION_TARGET_NOT_FOUND" | "AUTH_MIGRATION_TARGET_CONFLICT" | "AUTH_MIGRATION_SOURCE_NOT_EMPTY" | "AUTH_ACCOUNT_MERGE_SELECTION_REQUIRED" | "AUTH_OLD_PHONE_CODE_REQUIRED" | "AUTH_CURRENT_PHONE_MISSING" | "AUTH_CURRENT_PASSWORD_INCORRECT" | "AUTH_PASSWORD_SAME_AS_CURRENT" | "TENANT_NOT_FOUND" | "TENANT_MEMBER_NOT_FOUND" | "NOT_TENANT_MEMBER" | "TENANT_SLUG_CONFLICT" | "TENANT_NOT_SELECTED" | "PRODUCT_NOT_FOUND" | "PRODUCT_NOT_BELONG_TO_TENANT" | "PRODUCT_EVENT_NOT_FOUND" | "PRODUCT_IMAGE_NOT_FOUND" | "PRODUCT_CERTIFICATE_NOT_FOUND" | "PRODUCT_CERTIFICATE_ELIGIBILITY_FAILED" | "PRODUCT_CERTIFICATE_QUOTA_EXCEEDED" | "PRODUCT_CERTIFICATE_ALREADY_VOID" | "PRODUCT_COUPLE_PHOTO_NOT_FOUND" | "SALE_BATCH_NOT_FOUND" | "SALE_BATCH_EVENT_MISMATCH" | "SALE_BATCH_QUANTITY_EXCEEDED" | "SALE_ALLOCATION_NOT_FOUND" | "SALE_SUBJECT_MEDIA_NOT_FOUND" | "SERIES_NOT_FOUND" | "BREEDER_NOT_FOUND" | "FEATURED_PRODUCT_NOT_FOUND" | "FEATURED_PRODUCT_CONFLICT" | "SHARE_NOT_FOUND" | "SHARE_SIGNATURE_INVALID" | "SHARE_SIGNATURE_EXPIRED" | "TENANT_SUBSCRIPTION_INACTIVE" | "TENANT_SUBSCRIPTION_PLAN_INSUFFICIENT" | "TENANT_SUBSCRIPTION_QUOTA_EXCEEDED" | "SUBSCRIPTION_ACTIVATION_CODE_INVALID" | "SUBSCRIPTION_ACTIVATION_CODE_EXPIRED" | "SUBSCRIPTION_ACTIVATION_CODE_DISABLED" | "SUBSCRIPTION_ACTIVATION_CODE_REDEEM_LIMIT_REACHED" | "WECHAT_OAUTH_REQUIRED" | "SUBSCRIPTION_ORDER_NOT_FOUND" | "SUBSCRIPTION_ORDER_INVALID_STATE" | "SUBSCRIPTION_ORDER_INVALID_PLAN_DURATION" | "SUBSCRIPTION_ORDER_DEFERRED_EXISTS" | "PAYMENT_SIGNATURE_INVALID" | "PAYMENT_AMOUNT_MISMATCH" | "AI_FEATURE_DISABLED" | "AI_MODEL_NOT_CONFIGURED" | "AI_RATE_LIMITED" | "QUOTA_EXCEEDED" | "AI_PROVIDER_ERROR" | "AI_MODEL_NOT_AVAILABLE" | "POINTS_ACCOUNT_NOT_FOUND" | "POINTS_INSUFFICIENT_BALANCE" | "SIGNIN_ALREADY_COMPLETED" | "USER_NOT_FOUND" | "AI_CHAT_STREAM_ABORTED" | "AI_CHAT_CONVERSATION_NOT_FOUND" | "AI_CHAT_DUPLICATE_REQUEST_IN_FLIGHT";
    status: "ok" | "degraded";
    service: "api" | "web";
    timestamp: string;
}>;
export declare const healthDbResponseSchema: z.ZodDiscriminatedUnion<"status", [z.ZodObject<{
    status: z.ZodLiteral<"ok">;
    database: z.ZodLiteral<"postgres">;
    errorCode: z.ZodLiteral<"NONE">;
    counts: z.ZodOptional<z.ZodObject<{
        users: z.ZodNumber;
        tenants: z.ZodNumber;
        tenantMembers: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tenants: number;
        users: number;
        tenantMembers: number;
    }, {
        tenants: number;
        users: number;
        tenantMembers: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    errorCode: "NONE";
    status: "ok";
    database: "postgres";
    counts?: {
        tenants: number;
        users: number;
        tenantMembers: number;
    } | undefined;
}, {
    errorCode: "NONE";
    status: "ok";
    database: "postgres";
    counts?: {
        tenants: number;
        users: number;
        tenantMembers: number;
    } | undefined;
}>, z.ZodObject<{
    status: z.ZodLiteral<"degraded">;
    database: z.ZodLiteral<"postgres">;
    errorCode: z.ZodLiteral<"API_UNAVAILABLE">;
}, "strip", z.ZodTypeAny, {
    errorCode: "API_UNAVAILABLE";
    status: "degraded";
    database: "postgres";
}, {
    errorCode: "API_UNAVAILABLE";
    status: "degraded";
    database: "postgres";
}>]>;
export type HealthResponse = z.infer<typeof healthResponseSchema>;
export type HealthDbResponse = z.infer<typeof healthDbResponseSchema>;
