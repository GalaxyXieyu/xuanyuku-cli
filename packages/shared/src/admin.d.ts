import { z } from 'zod';
export declare const SuperAdminAuditAction: {
    readonly ListTenants: "admin.tenants.list";
    readonly CreateTenant: "admin.tenants.create";
    readonly UpdateTenant: "admin.tenants.update";
    readonly DeleteTenant: "admin.tenants.delete";
    readonly ListUsers: "admin.users.list";
    readonly UpdateUser: "admin.users.update";
    readonly DeleteUser: "admin.users.delete";
    readonly UpsertTenantMember: "admin.tenants.members.upsert";
    readonly RemoveTenantMember: "admin.tenants.members.remove";
    readonly GetPlatformBranding: "admin.branding.platform.get";
    readonly UpdatePlatformBranding: "admin.branding.platform.update";
    readonly GetTenantBranding: "admin.branding.tenant.get";
    readonly UpdateTenantBranding: "admin.branding.tenant.update";
    readonly GetMiniappSupportConfig: "admin.miniapp-support.get";
    readonly UpdateMiniappSupportConfig: "admin.miniapp-support.update";
    readonly UploadMiniappSupportQrImage: "admin.miniapp-support.qr-image.upload";
    readonly ListAuditLogs: "admin.audit-logs.list";
    readonly ExportAuditLogs: "admin.audit-logs.export";
    readonly GetTenantSubscription: "admin.tenants.subscription.get";
    readonly UpdateTenantSubscription: "admin.tenants.subscription.update";
    readonly CreateSubscriptionActivationCode: "admin.subscription-activation-codes.create";
    readonly SuspendTenantLifecycle: "admin.tenants.lifecycle.suspend";
    readonly ReactivateTenantLifecycle: "admin.tenants.lifecycle.reactivate";
    readonly OffboardTenantLifecycle: "admin.tenants.lifecycle.offboard";
    readonly GetActivityAnalyticsOverview: "admin.analytics.activity.overview";
    readonly GetActivityOverview: "admin.analytics.activity.overview.get";
    readonly GetUsageOverview: "admin.analytics.usage.overview.get";
    readonly GetTenantUsage: "admin.tenants.usage.get";
    readonly GetRevenueOverview: "admin.analytics.revenue.overview.get";
    readonly GetSubscriptionPricing: "admin.subscription-pricing.get";
    readonly UpdateSubscriptionPricing: "admin.subscription-pricing.update";
    readonly ListMarketKeywords: "admin.market-intelligence.keywords.list";
    readonly CreateMarketKeyword: "admin.market-intelligence.keywords.create";
    readonly UpdateMarketKeyword: "admin.market-intelligence.keywords.update";
    readonly ToggleMarketKeyword: "admin.market-intelligence.keywords.toggle";
    readonly ListMarketPriceSnapshots: "admin.market-intelligence.price-snapshots.list";
    readonly BatchUpsertMarketPriceSnapshots: "admin.market-intelligence.price-snapshots.batch-upsert";
    readonly ListMarketSeedListings: "admin.market-intelligence.seed-listings.list";
    readonly BatchUpsertMarketSeedListings: "admin.market-intelligence.seed-listings.batch-upsert";
    readonly GetMarketModuleSwitches: "admin.market-intelligence.module-switches.get";
    readonly UpdateMarketModuleSwitches: "admin.market-intelligence.module-switches.update";
    readonly ListMarketReviewQueue: "admin.market-intelligence.review-queue.list";
    readonly ApproveMarketReviewQueueItem: "admin.market-intelligence.review-queue.approve";
    readonly RejectMarketReviewQueueItem: "admin.market-intelligence.review-queue.reject";
    readonly ListMarketPublishHistory: "admin.market-intelligence.publish-history.list";
    readonly PublishMarketKeyword: "admin.market-intelligence.keywords.publish";
    readonly ListGuiquanCommunityPosts: "admin.guiquan-community.posts.list";
    readonly CreateGuiquanCommunityPost: "admin.guiquan-community.posts.create";
    readonly UpdateGuiquanCommunityPost: "admin.guiquan-community.posts.update";
    readonly SubmitGuiquanCommunityPost: "admin.guiquan-community.posts.submit";
    readonly PublishGuiquanCommunityPost: "admin.guiquan-community.posts.publish";
    readonly RejectGuiquanCommunityPost: "admin.guiquan-community.posts.reject";
    readonly ArchiveGuiquanCommunityPost: "admin.guiquan-community.posts.archive";
    readonly ModerateGuiquanCommunityComment: "admin.guiquan-community.comments.moderate";
    readonly ResolveGuiquanCommunityReport: "admin.guiquan-community.reports.resolve";
    readonly ListSupplyProducts: "admin.supply.products.list";
    readonly ListSupplyOrders: "admin.supply.orders.list";
    readonly ListSupplySupportTickets: "admin.supply.support-tickets.list";
    readonly ListSupplyRefundRequests: "admin.supply.refund-requests.list";
    readonly CreateSupplyShipment: "admin.supply.shipments.create";
    readonly GetSupplyShipmentTracking: "admin.supply.shipments.tracking.get";
    readonly CreateSupplyProduct: "admin.supply.products.create";
    readonly UploadSupplyProductImage: "admin.supply.products.image.upload";
    readonly UpdateSupplyProduct: "admin.supply.products.update";
    readonly UpdateSupplySupportTicket: "admin.supply.support-tickets.update";
    readonly UpdateSupplyRefundRequest: "admin.supply.refund-requests.update";
    readonly DeleteSupplyProduct: "admin.supply.products.delete";
    readonly ListMarketplaceListings: "admin.marketplace.listings.list";
    readonly GetMarketplaceListingDetail: "admin.marketplace.listings.detail.get";
    readonly PublishMarketplaceListing: "admin.marketplace.listings.publish";
    readonly RejectMarketplaceListing: "admin.marketplace.listings.reject";
    readonly PauseMarketplaceListing: "admin.marketplace.listings.pause";
    readonly ArchiveMarketplaceListing: "admin.marketplace.listings.archive";
    readonly ResolveMarketplaceDispute: "admin.marketplace.disputes.resolve";
    readonly CreateAnnouncementDraft: "admin.announcements.create-draft";
    readonly PublishAnnouncement: "admin.announcements.publish";
    readonly ListFootprintAchievementPresentations: "admin.footprint-achievements.list";
    readonly UpdateFootprintAchievementPresentation: "admin.footprint-achievements.update";
    readonly UploadFootprintAchievementPresentationImage: "admin.footprint-achievements.image.upload";
    readonly ResetFootprintAchievementPresentation: "admin.footprint-achievements.reset";
    readonly CreateTenantObserveSession: "admin.tenants.observe-session.create";
    readonly GetTenantLivestockOverview: "admin.tenants.livestock.overview.get";
    readonly ListTenantLivestockProducts: "admin.tenants.livestock.products.list";
    readonly GetTenantLivestockProductDetail: "admin.tenants.livestock.products.detail.get";
};
export declare const superAdminAuditActionSchema: z.ZodEnum<["admin.tenants.list", "admin.tenants.create", "admin.tenants.update", "admin.tenants.delete", "admin.users.list", "admin.users.update", "admin.users.delete", "admin.tenants.members.upsert", "admin.tenants.members.remove", "admin.branding.platform.get", "admin.branding.platform.update", "admin.branding.tenant.get", "admin.branding.tenant.update", "admin.miniapp-support.get", "admin.miniapp-support.update", "admin.miniapp-support.qr-image.upload", "admin.audit-logs.list", "admin.audit-logs.export", "admin.tenants.subscription.get", "admin.tenants.subscription.update", "admin.subscription-activation-codes.create", "admin.tenants.lifecycle.suspend", "admin.tenants.lifecycle.reactivate", "admin.tenants.lifecycle.offboard", "admin.analytics.activity.overview", "admin.analytics.activity.overview.get", "admin.analytics.usage.overview.get", "admin.tenants.usage.get", "admin.analytics.revenue.overview.get", "admin.subscription-pricing.get", "admin.subscription-pricing.update", "admin.market-intelligence.keywords.list", "admin.market-intelligence.keywords.create", "admin.market-intelligence.keywords.update", "admin.market-intelligence.keywords.toggle", "admin.market-intelligence.price-snapshots.list", "admin.market-intelligence.price-snapshots.batch-upsert", "admin.market-intelligence.seed-listings.list", "admin.market-intelligence.seed-listings.batch-upsert", "admin.market-intelligence.module-switches.get", "admin.market-intelligence.module-switches.update", "admin.market-intelligence.review-queue.list", "admin.market-intelligence.review-queue.approve", "admin.market-intelligence.review-queue.reject", "admin.market-intelligence.publish-history.list", "admin.market-intelligence.keywords.publish", "admin.guiquan-community.posts.list", "admin.guiquan-community.posts.create", "admin.guiquan-community.posts.update", "admin.guiquan-community.posts.submit", "admin.guiquan-community.posts.publish", "admin.guiquan-community.posts.reject", "admin.guiquan-community.posts.archive", "admin.guiquan-community.comments.moderate", "admin.guiquan-community.reports.resolve", "admin.supply.products.list", "admin.supply.orders.list", "admin.supply.support-tickets.list", "admin.supply.refund-requests.list", "admin.supply.shipments.create", "admin.supply.shipments.tracking.get", "admin.supply.products.create", "admin.supply.products.image.upload", "admin.supply.products.update", "admin.supply.support-tickets.update", "admin.supply.refund-requests.update", "admin.supply.products.delete", "admin.marketplace.listings.list", "admin.marketplace.listings.detail.get", "admin.marketplace.listings.publish", "admin.marketplace.listings.reject", "admin.marketplace.listings.pause", "admin.marketplace.listings.archive", "admin.marketplace.disputes.resolve", "admin.announcements.create-draft", "admin.announcements.publish", "admin.footprint-achievements.list", "admin.footprint-achievements.update", "admin.footprint-achievements.image.upload", "admin.footprint-achievements.reset", "admin.tenants.observe-session.create", "admin.tenants.livestock.overview.get", "admin.tenants.livestock.products.list", "admin.tenants.livestock.products.detail.get"]>;
export declare const adminUserSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
    name: z.ZodNullable<z.ZodString>;
    wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    isSuperAdmin: z.ZodBoolean;
} & {
    phone: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string | null;
    createdAt: string;
    phone: string | null;
    email: string;
    account: string | null;
    wechatId: string | null;
    isSuperAdmin: boolean;
}, {
    id: string;
    name: string | null;
    createdAt: string;
    phone: string | null;
    email: string;
    isSuperAdmin: boolean;
    account?: string | null | undefined;
    wechatId?: string | null | undefined;
}>;
export declare const adminTenantOwnerSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodEffects<z.ZodString, string, string>;
    account: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    phone: z.ZodNullable<z.ZodString>;
    wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string | null;
    phone: string | null;
    email: string;
    account: string | null;
    wechatId: string | null;
}, {
    id: string;
    name: string | null;
    phone: string | null;
    email: string;
    account: string | null;
    wechatId?: string | null | undefined;
}>;
export declare const adminTenantSubscriptionSummarySchema: z.ZodObject<{
    plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
    status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
    expiresAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED";
    plan: "FREE" | "BASIC" | "PRO";
    expiresAt: string | null;
}, {
    status: "ACTIVE" | "DISABLED" | "EXPIRED";
    plan: "FREE" | "BASIC" | "PRO";
    expiresAt: string | null;
}>;
export declare const adminUserOwnedTenantSchema: z.ZodObject<{
    id: z.ZodString;
    slug: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodString;
    lastActiveAt: z.ZodNullable<z.ZodString>;
    subscription: z.ZodObject<{
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        expiresAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdAt: string;
    subscription: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
    };
    slug: string;
    lastActiveAt: string | null;
}, {
    id: string;
    name: string;
    createdAt: string;
    subscription: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
    };
    slug: string;
    lastActiveAt: string | null;
}>;
export declare const adminUserMetricsSchema: z.ZodObject<{
    tenantCount: z.ZodNumber;
    expiringTenantCount: z.ZodNumber;
    totalProducts: z.ZodNumber;
    totalSeries: z.ZodNumber;
    totalShares: z.ZodNumber;
    lastActiveAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lastActiveAt: string | null;
    tenantCount: number;
    expiringTenantCount: number;
    totalProducts: number;
    totalSeries: number;
    totalShares: number;
}, {
    lastActiveAt: string | null;
    tenantCount: number;
    expiringTenantCount: number;
    totalProducts: number;
    totalSeries: number;
    totalShares: number;
}>;
export declare const adminUserDetailSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
    name: z.ZodNullable<z.ZodString>;
    wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    isSuperAdmin: z.ZodBoolean;
} & {
    phone: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
} & {
    metrics: z.ZodObject<{
        tenantCount: z.ZodNumber;
        expiringTenantCount: z.ZodNumber;
        totalProducts: z.ZodNumber;
        totalSeries: z.ZodNumber;
        totalShares: z.ZodNumber;
        lastActiveAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        lastActiveAt: string | null;
        tenantCount: number;
        expiringTenantCount: number;
        totalProducts: number;
        totalSeries: number;
        totalShares: number;
    }, {
        lastActiveAt: string | null;
        tenantCount: number;
        expiringTenantCount: number;
        totalProducts: number;
        totalSeries: number;
        totalShares: number;
    }>;
    ownedTenants: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodString;
        lastActiveAt: z.ZodNullable<z.ZodString>;
        subscription: z.ZodObject<{
            plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
            status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
            expiresAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        subscription: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        };
        slug: string;
        lastActiveAt: string | null;
    }, {
        id: string;
        name: string;
        createdAt: string;
        subscription: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        };
        slug: string;
        lastActiveAt: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string | null;
    createdAt: string;
    phone: string | null;
    email: string;
    account: string | null;
    wechatId: string | null;
    isSuperAdmin: boolean;
    metrics: {
        lastActiveAt: string | null;
        tenantCount: number;
        expiringTenantCount: number;
        totalProducts: number;
        totalSeries: number;
        totalShares: number;
    };
    ownedTenants: {
        id: string;
        name: string;
        createdAt: string;
        subscription: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        };
        slug: string;
        lastActiveAt: string | null;
    }[];
}, {
    id: string;
    name: string | null;
    createdAt: string;
    phone: string | null;
    email: string;
    isSuperAdmin: boolean;
    metrics: {
        lastActiveAt: string | null;
        tenantCount: number;
        expiringTenantCount: number;
        totalProducts: number;
        totalSeries: number;
        totalShares: number;
    };
    ownedTenants: {
        id: string;
        name: string;
        createdAt: string;
        subscription: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        };
        slug: string;
        lastActiveAt: string | null;
    }[];
    account?: string | null | undefined;
    wechatId?: string | null | undefined;
}>;
export declare const adminTenantAutoTagKeySchema: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
export declare const adminTenantAutoTagToneSchema: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
export declare const adminTenantAutoTagSchema: z.ZodObject<{
    key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
    label: z.ZodString;
    description: z.ZodString;
    tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
    priority: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
    description: string;
    label: string;
    tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
    priority: number;
}, {
    key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
    description: string;
    label: string;
    tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
    priority: number;
}>;
export declare const adminTenantLoginMetricsSchema: z.ZodObject<{
    totalLogins: z.ZodNumber;
    logins30d: z.ZodNumber;
    lastLoginAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    totalLogins: number;
    logins30d: number;
    lastLoginAt: string | null;
}, {
    totalLogins: number;
    logins30d: number;
    lastLoginAt: string | null;
}>;
export declare const adminTenantBusinessMetricsSchema: z.ZodObject<{
    activeDays30d: z.ZodNumber;
    lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
    totalProducts: z.ZodNumber;
    totalSeries: z.ZodNumber;
    totalImages: z.ZodNumber;
    totalShares: z.ZodNumber;
    uploads30d: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    totalProducts: number;
    totalSeries: number;
    totalShares: number;
    activeDays30d: number;
    lastBusinessActivityAt: string | null;
    totalImages: number;
    uploads30d: number;
}, {
    totalProducts: number;
    totalSeries: number;
    totalShares: number;
    activeDays30d: number;
    lastBusinessActivityAt: string | null;
    totalImages: number;
    uploads30d: number;
}>;
export declare const adminTenantRevenueMetricsSchema: z.ZodObject<{
    paidOrderCount: z.ZodNumber;
    paidRevenueCents: z.ZodNumber;
    lastPaidAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    paidOrderCount: number;
    paidRevenueCents: number;
    lastPaidAt: string | null;
}, {
    paidOrderCount: number;
    paidRevenueCents: number;
    lastPaidAt: string | null;
}>;
export declare const adminTenantActivityTrendItemSchema: z.ZodObject<{
    date: z.ZodString;
    businessEvents: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    date: string;
    businessEvents: number;
}, {
    date: string;
    businessEvents: number;
}>;
export declare const adminTenantSchema: z.ZodObject<{
    id: z.ZodString;
    slug: z.ZodString;
    name: z.ZodString;
} & {
    createdAt: z.ZodString;
    lastLoginAt: z.ZodNullable<z.ZodString>;
    lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
    lastActiveAt: z.ZodNullable<z.ZodString>;
    memberCount: z.ZodNumber;
    totalProducts: z.ZodDefault<z.ZodNumber>;
    owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        email: z.ZodEffects<z.ZodString, string, string>;
        account: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        phone: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
    }, {
        id: string;
        name: string | null;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId?: string | null | undefined;
    }>>>;
    subscription: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        expiresAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
    }, {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
    }>>>;
    autoTags: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
        label: z.ZodString;
        description: z.ZodString;
        tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
        priority: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
        description: string;
        label: string;
        tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
        priority: number;
    }, {
        key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
        description: string;
        label: string;
        tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
        priority: number;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    createdAt: string;
    slug: string;
    lastActiveAt: string | null;
    totalProducts: number;
    lastLoginAt: string | null;
    lastBusinessActivityAt: string | null;
    memberCount: number;
    autoTags: {
        key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
        description: string;
        label: string;
        tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
        priority: number;
    }[];
    subscription?: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
    } | null | undefined;
    owner?: {
        id: string;
        name: string | null;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
    } | null | undefined;
}, {
    id: string;
    name: string;
    createdAt: string;
    slug: string;
    lastActiveAt: string | null;
    lastLoginAt: string | null;
    lastBusinessActivityAt: string | null;
    memberCount: number;
    subscription?: {
        status: "ACTIVE" | "DISABLED" | "EXPIRED";
        plan: "FREE" | "BASIC" | "PRO";
        expiresAt: string | null;
    } | null | undefined;
    totalProducts?: number | undefined;
    owner?: {
        id: string;
        name: string | null;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId?: string | null | undefined;
    } | null | undefined;
    autoTags?: {
        key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
        description: string;
        label: string;
        tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
        priority: number;
    }[] | undefined;
}>;
export declare const listAdminTenantsQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    search?: string | undefined;
}, {
    search?: string | undefined;
}>;
export declare const listAdminTenantsResponseSchema: z.ZodObject<{
    tenants: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    } & {
        createdAt: z.ZodString;
        lastLoginAt: z.ZodNullable<z.ZodString>;
        lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
        lastActiveAt: z.ZodNullable<z.ZodString>;
        memberCount: z.ZodNumber;
        totalProducts: z.ZodDefault<z.ZodNumber>;
        owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodEffects<z.ZodString, string, string>;
            account: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            phone: z.ZodNullable<z.ZodString>;
            wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        }, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        }>>>;
        subscription: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
            status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
            expiresAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }>>>;
        autoTags: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
            label: z.ZodString;
            description: z.ZodString;
            tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
            priority: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    }, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    tenants: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    }[];
}, {
    tenants: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    }[];
}>;
export declare const getAdminTenantResponseSchema: z.ZodObject<{
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    } & {
        createdAt: z.ZodString;
        lastLoginAt: z.ZodNullable<z.ZodString>;
        lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
        lastActiveAt: z.ZodNullable<z.ZodString>;
        memberCount: z.ZodNumber;
        totalProducts: z.ZodDefault<z.ZodNumber>;
        owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodEffects<z.ZodString, string, string>;
            account: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            phone: z.ZodNullable<z.ZodString>;
            wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        }, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        }>>>;
        subscription: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
            status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
            expiresAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }>>>;
        autoTags: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
            label: z.ZodString;
            description: z.ZodString;
            tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
            priority: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    }, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    };
}, {
    tenant: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    };
}>;
export declare const createAdminTenantObserveSessionRequestSchema: z.ZodDefault<z.ZodObject<{
    targetPath: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    targetPath?: string | undefined;
}, {
    targetPath?: string | undefined;
}>>;
export declare const createAdminTenantObserveSessionResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
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
    observeUrl: z.ZodString;
    expiresAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    expiresAt: string;
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    observeUrl: string;
}, {
    expiresAt: string;
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    accessToken: string;
    observeUrl: string;
}>;
export declare const createAdminTenantRequestSchema: z.ZodObject<{
    slug: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    slug: string;
}, {
    name: string;
    slug: string;
}>;
export declare const createAdminTenantResponseSchema: z.ZodObject<{
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    } & {
        createdAt: z.ZodString;
        lastLoginAt: z.ZodNullable<z.ZodString>;
        lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
        lastActiveAt: z.ZodNullable<z.ZodString>;
        memberCount: z.ZodNumber;
        totalProducts: z.ZodDefault<z.ZodNumber>;
        owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodEffects<z.ZodString, string, string>;
            account: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            phone: z.ZodNullable<z.ZodString>;
            wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        }, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        }>>>;
        subscription: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
            status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
            expiresAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }>>>;
        autoTags: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
            label: z.ZodString;
            description: z.ZodString;
            tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
            priority: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    }, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    };
}, {
    tenant: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    };
}>;
export declare const updateAdminTenantRequestSchema: z.ZodEffects<z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    slug?: string | undefined;
}, {
    name?: string | undefined;
    slug?: string | undefined;
}>, {
    name?: string | undefined;
    slug?: string | undefined;
}, {
    name?: string | undefined;
    slug?: string | undefined;
}>;
export declare const updateAdminTenantResponseSchema: z.ZodObject<{
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    } & {
        createdAt: z.ZodString;
        lastLoginAt: z.ZodNullable<z.ZodString>;
        lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
        lastActiveAt: z.ZodNullable<z.ZodString>;
        memberCount: z.ZodNumber;
        totalProducts: z.ZodDefault<z.ZodNumber>;
        owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodEffects<z.ZodString, string, string>;
            account: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            phone: z.ZodNullable<z.ZodString>;
            wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        }, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        }>>>;
        subscription: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
            status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
            expiresAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }>>>;
        autoTags: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
            label: z.ZodString;
            description: z.ZodString;
            tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
            priority: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    }, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auditLogId: string;
    tenant: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    };
}, {
    auditLogId: string;
    tenant: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    };
}>;
export declare const suspendAdminTenantRequestSchema: z.ZodObject<{
    reason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reason: string;
}, {
    reason: string;
}>;
export declare const suspendAdminTenantResponseSchema: z.ZodObject<{
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
export declare const reactivateAdminTenantResponseSchema: z.ZodObject<{
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
export declare const offboardAdminTenantRequestSchema: z.ZodObject<{
    reason: z.ZodString;
    confirmTenantSlug: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reason: string;
    confirmTenantSlug: string;
}, {
    reason: string;
    confirmTenantSlug: string;
}>;
export declare const offboardAdminTenantResponseSchema: z.ZodObject<{
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
export declare const listAdminUsersResponseSchema: z.ZodObject<{
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    } & {
        phone: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    users: {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }[];
}, {
    users: {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }[];
}>;
export declare const listAdminUsersQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    search?: string | undefined;
}, {
    search?: string | undefined;
}>;
export declare const getAdminUserResponseSchema: z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    } & {
        phone: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    } & {
        metrics: z.ZodObject<{
            tenantCount: z.ZodNumber;
            expiringTenantCount: z.ZodNumber;
            totalProducts: z.ZodNumber;
            totalSeries: z.ZodNumber;
            totalShares: z.ZodNumber;
            lastActiveAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            lastActiveAt: string | null;
            tenantCount: number;
            expiringTenantCount: number;
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
        }, {
            lastActiveAt: string | null;
            tenantCount: number;
            expiringTenantCount: number;
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
        }>;
        ownedTenants: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            slug: z.ZodString;
            name: z.ZodString;
            createdAt: z.ZodString;
            lastActiveAt: z.ZodNullable<z.ZodString>;
            subscription: z.ZodObject<{
                plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
                status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
                expiresAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            }, {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            createdAt: string;
            subscription: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            };
            slug: string;
            lastActiveAt: string | null;
        }, {
            id: string;
            name: string;
            createdAt: string;
            subscription: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            };
            slug: string;
            lastActiveAt: string | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
        metrics: {
            lastActiveAt: string | null;
            tenantCount: number;
            expiringTenantCount: number;
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
        };
        ownedTenants: {
            id: string;
            name: string;
            createdAt: string;
            subscription: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            };
            slug: string;
            lastActiveAt: string | null;
        }[];
    }, {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        isSuperAdmin: boolean;
        metrics: {
            lastActiveAt: string | null;
            tenantCount: number;
            expiringTenantCount: number;
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
        };
        ownedTenants: {
            id: string;
            name: string;
            createdAt: string;
            subscription: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            };
            slug: string;
            lastActiveAt: string | null;
        }[];
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    user: {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
        metrics: {
            lastActiveAt: string | null;
            tenantCount: number;
            expiringTenantCount: number;
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
        };
        ownedTenants: {
            id: string;
            name: string;
            createdAt: string;
            subscription: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            };
            slug: string;
            lastActiveAt: string | null;
        }[];
    };
}, {
    user: {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        isSuperAdmin: boolean;
        metrics: {
            lastActiveAt: string | null;
            tenantCount: number;
            expiringTenantCount: number;
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
        };
        ownedTenants: {
            id: string;
            name: string;
            createdAt: string;
            subscription: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            };
            slug: string;
            lastActiveAt: string | null;
        }[];
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const updateAdminUserRequestSchema: z.ZodEffects<z.ZodObject<{
    email: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    account: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    wechatId: z.ZodOptional<z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>>;
}, "strip", z.ZodTypeAny, {
    name?: string | null | undefined;
    phone?: string | null | undefined;
    email?: string | undefined;
    account?: string | null | undefined;
    wechatId?: string | null | undefined;
}, {
    name?: string | null | undefined;
    phone?: string | null | undefined;
    email?: string | undefined;
    account?: string | null | undefined;
    wechatId?: string | null | undefined;
}>, {
    name?: string | null | undefined;
    phone?: string | null | undefined;
    email?: string | undefined;
    account?: string | null | undefined;
    wechatId?: string | null | undefined;
}, {
    name?: string | null | undefined;
    phone?: string | null | undefined;
    email?: string | undefined;
    account?: string | null | undefined;
    wechatId?: string | null | undefined;
}>;
export declare const updateAdminUserResponseSchema: z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        account: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>, string | null, string | null | undefined>;
        name: z.ZodNullable<z.ZodString>;
        wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        isSuperAdmin: z.ZodBoolean;
    } & {
        phone: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    }, {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auditLogId: string;
    user: {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
}, {
    auditLogId: string;
    user: {
        id: string;
        name: string | null;
        createdAt: string;
        phone: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
}>;
export declare const deleteAdminTenantRequestSchema: z.ZodObject<{
    confirmTenantSlug: z.ZodString;
}, "strip", z.ZodTypeAny, {
    confirmTenantSlug: string;
}, {
    confirmTenantSlug: string;
}>;
export declare const deleteAdminTenantResponseSchema: z.ZodObject<{
    tenantId: z.ZodString;
    deleted: z.ZodLiteral<true>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    auditLogId: string;
    deleted: true;
}, {
    tenantId: string;
    auditLogId: string;
    deleted: true;
}>;
export declare const deleteAdminUserRequestSchema: z.ZodDefault<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
export declare const deleteAdminUserResponseSchema: z.ZodObject<{
    userId: z.ZodString;
    deleted: z.ZodLiteral<true>;
    deletedTenantId: z.ZodNullable<z.ZodString>;
    deletedTenantSlug: z.ZodNullable<z.ZodString>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auditLogId: string;
    userId: string;
    deleted: true;
    deletedTenantId: string | null;
    deletedTenantSlug: string | null;
}, {
    auditLogId: string;
    userId: string;
    deleted: true;
    deletedTenantId: string | null;
    deletedTenantSlug: string | null;
}>;
export declare const adminTenantMemberSchema: z.ZodObject<{
    tenantId: z.ZodString;
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
    role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
    joinedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
    joinedAt: string;
}, {
    tenantId: string;
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
    joinedAt: string;
}>;
export declare const listAdminTenantMembersQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    search?: string | undefined;
}, {
    search?: string | undefined;
}>;
export declare const listAdminTenantMembersResponseSchema: z.ZodObject<{
    tenantId: z.ZodString;
    members: z.ZodArray<z.ZodObject<{
        tenantId: z.ZodString;
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
        role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
        joinedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tenantId: string;
        role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
        user: {
            id: string;
            name: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
            isSuperAdmin: boolean;
        };
        joinedAt: string;
    }, {
        tenantId: string;
        role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
        user: {
            id: string;
            name: string | null;
            email: string;
            isSuperAdmin: boolean;
            account?: string | null | undefined;
            wechatId?: string | null | undefined;
        };
        joinedAt: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    members: {
        tenantId: string;
        role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
        user: {
            id: string;
            name: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
            isSuperAdmin: boolean;
        };
        joinedAt: string;
    }[];
}, {
    tenantId: string;
    members: {
        tenantId: string;
        role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
        user: {
            id: string;
            name: string | null;
            email: string;
            isSuperAdmin: boolean;
            account?: string | null | undefined;
            wechatId?: string | null | undefined;
        };
        joinedAt: string;
    }[];
}>;
export declare const upsertTenantMemberRequestSchema: z.ZodObject<{
    email: z.ZodEffects<z.ZodString, string, string>;
    role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
}, "strip", z.ZodTypeAny, {
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    email: string;
}, {
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    email: string;
}>;
export declare const upsertTenantMemberResponseSchema: z.ZodObject<{
    tenantId: z.ZodString;
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
    role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
    joinedAt: z.ZodString;
    created: z.ZodBoolean;
    previousRole: z.ZodNullable<z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    auditLogId: string;
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    user: {
        id: string;
        name: string | null;
        email: string;
        account: string | null;
        wechatId: string | null;
        isSuperAdmin: boolean;
    };
    joinedAt: string;
    created: boolean;
    previousRole: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
}, {
    tenantId: string;
    auditLogId: string;
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    user: {
        id: string;
        name: string | null;
        email: string;
        isSuperAdmin: boolean;
        account?: string | null | undefined;
        wechatId?: string | null | undefined;
    };
    joinedAt: string;
    created: boolean;
    previousRole: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
}>;
export declare const deleteTenantMemberResponseSchema: z.ZodObject<{
    tenantId: z.ZodString;
    userId: z.ZodString;
    removed: z.ZodBoolean;
    previousRole: z.ZodNullable<z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    auditLogId: string;
    userId: string;
    previousRole: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
    removed: boolean;
}, {
    tenantId: string;
    auditLogId: string;
    userId: string;
    previousRole: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER" | null;
    removed: boolean;
}>;
export declare const adminTenantLivestockRiskTagSchema: z.ZodEnum<["need_mating", "warning", "missing_image", "missing_lineage", "identity_review"]>;
export declare const adminTenantLivestockStatusSchema: z.ZodEnum<["normal", "need_mating", "warning", "identity_review"]>;
export declare const adminTenantLivestockSeriesOptionSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    productCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    productCount: number;
}, {
    id: string;
    name: string;
    productCount: number;
}>;
export declare const adminTenantLivestockOverviewResponseSchema: z.ZodObject<{
    tenantId: z.ZodString;
    summary: z.ZodObject<{
        totalProducts: z.ZodNumber;
        totalSeries: z.ZodNumber;
        totalImages: z.ZodNumber;
        eventCount30d: z.ZodNumber;
        needMatingCount: z.ZodNumber;
        warningCount: z.ZodNumber;
        missingImageCount: z.ZodNumber;
        withLineageCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        needMatingCount: number;
        warningCount: number;
        totalProducts: number;
        totalSeries: number;
        totalImages: number;
        eventCount30d: number;
        missingImageCount: number;
        withLineageCount: number;
    }, {
        needMatingCount: number;
        warningCount: number;
        totalProducts: number;
        totalSeries: number;
        totalImages: number;
        eventCount30d: number;
        missingImageCount: number;
        withLineageCount: number;
    }>;
    seriesOptions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        productCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        productCount: number;
    }, {
        id: string;
        name: string;
        productCount: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    summary: {
        needMatingCount: number;
        warningCount: number;
        totalProducts: number;
        totalSeries: number;
        totalImages: number;
        eventCount30d: number;
        missingImageCount: number;
        withLineageCount: number;
    };
    tenantId: string;
    seriesOptions: {
        id: string;
        name: string;
        productCount: number;
    }[];
}, {
    summary: {
        needMatingCount: number;
        warningCount: number;
        totalProducts: number;
        totalSeries: number;
        totalImages: number;
        eventCount30d: number;
        missingImageCount: number;
        withLineageCount: number;
    };
    tenantId: string;
    seriesOptions: {
        id: string;
        name: string;
        productCount: number;
    }[];
}>;
export declare const listAdminTenantLivestockProductsQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    sex: z.ZodOptional<z.ZodEnum<["male", "female", "unknown"]>>;
    type: z.ZodOptional<z.ZodString>;
    seriesId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["normal", "need_mating", "warning", "identity_review"]>>;
    missingImages: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, "true" | "false">>;
    hasLineage: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, "true" | "false">>;
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    status?: "warning" | "normal" | "need_mating" | "identity_review" | undefined;
    type?: string | undefined;
    sex?: "unknown" | "male" | "female" | undefined;
    seriesId?: string | undefined;
    search?: string | undefined;
    missingImages?: boolean | undefined;
    hasLineage?: boolean | undefined;
}, {
    status?: "warning" | "normal" | "need_mating" | "identity_review" | undefined;
    type?: string | undefined;
    sex?: "unknown" | "male" | "female" | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
    seriesId?: string | undefined;
    search?: string | undefined;
    missingImages?: "true" | "false" | undefined;
    hasLineage?: "true" | "false" | undefined;
}>;
export declare const adminTenantLivestockListItemSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    type: z.ZodString;
    sex: z.ZodNullable<z.ZodString>;
    seriesId: z.ZodNullable<z.ZodString>;
    seriesName: z.ZodNullable<z.ZodString>;
    needMatingStatus: z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>;
    requiresIdentityReview: z.ZodBoolean;
    hasMainImage: z.ZodBoolean;
    mainImageUrl: z.ZodNullable<z.ZodString>;
    imageCount: z.ZodNumber;
    hasLineage: z.ZodBoolean;
    lastEventAt: z.ZodNullable<z.ZodString>;
    lineage: z.ZodObject<{
        sireLabel: z.ZodNullable<z.ZodString>;
        damLabel: z.ZodNullable<z.ZodString>;
        mateLabel: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        sireLabel: string | null;
        damLabel: string | null;
        mateLabel: string | null;
    }, {
        sireLabel: string | null;
        damLabel: string | null;
        mateLabel: string | null;
    }>;
    riskTags: z.ZodArray<z.ZodEnum<["need_mating", "warning", "missing_image", "missing_lineage", "identity_review"]>, "many">;
}, "strip", z.ZodTypeAny, {
    code: string | null;
    type: string;
    id: string;
    name: string | null;
    sex: string | null;
    seriesName: string | null;
    lastEventAt: string | null;
    seriesId: string | null;
    requiresIdentityReview: boolean;
    needMatingStatus: "warning" | "normal" | "need_mating" | null;
    imageCount: number;
    hasLineage: boolean;
    hasMainImage: boolean;
    mainImageUrl: string | null;
    lineage: {
        sireLabel: string | null;
        damLabel: string | null;
        mateLabel: string | null;
    };
    riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
}, {
    code: string | null;
    type: string;
    id: string;
    name: string | null;
    sex: string | null;
    seriesName: string | null;
    lastEventAt: string | null;
    seriesId: string | null;
    requiresIdentityReview: boolean;
    needMatingStatus: "warning" | "normal" | "need_mating" | null;
    imageCount: number;
    hasLineage: boolean;
    hasMainImage: boolean;
    mainImageUrl: string | null;
    lineage: {
        sireLabel: string | null;
        damLabel: string | null;
        mateLabel: string | null;
    };
    riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
}>;
export declare const listAdminTenantLivestockProductsResponseSchema: z.ZodObject<{
    tenantId: z.ZodString;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    total: z.ZodNumber;
    totalPages: z.ZodNumber;
    products: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        type: z.ZodString;
        sex: z.ZodNullable<z.ZodString>;
        seriesId: z.ZodNullable<z.ZodString>;
        seriesName: z.ZodNullable<z.ZodString>;
        needMatingStatus: z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>;
        requiresIdentityReview: z.ZodBoolean;
        hasMainImage: z.ZodBoolean;
        mainImageUrl: z.ZodNullable<z.ZodString>;
        imageCount: z.ZodNumber;
        hasLineage: z.ZodBoolean;
        lastEventAt: z.ZodNullable<z.ZodString>;
        lineage: z.ZodObject<{
            sireLabel: z.ZodNullable<z.ZodString>;
            damLabel: z.ZodNullable<z.ZodString>;
            mateLabel: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            sireLabel: string | null;
            damLabel: string | null;
            mateLabel: string | null;
        }, {
            sireLabel: string | null;
            damLabel: string | null;
            mateLabel: string | null;
        }>;
        riskTags: z.ZodArray<z.ZodEnum<["need_mating", "warning", "missing_image", "missing_lineage", "identity_review"]>, "many">;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        type: string;
        id: string;
        name: string | null;
        sex: string | null;
        seriesName: string | null;
        lastEventAt: string | null;
        seriesId: string | null;
        requiresIdentityReview: boolean;
        needMatingStatus: "warning" | "normal" | "need_mating" | null;
        imageCount: number;
        hasLineage: boolean;
        hasMainImage: boolean;
        mainImageUrl: string | null;
        lineage: {
            sireLabel: string | null;
            damLabel: string | null;
            mateLabel: string | null;
        };
        riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
    }, {
        code: string | null;
        type: string;
        id: string;
        name: string | null;
        sex: string | null;
        seriesName: string | null;
        lastEventAt: string | null;
        seriesId: string | null;
        requiresIdentityReview: boolean;
        needMatingStatus: "warning" | "normal" | "need_mating" | null;
        imageCount: number;
        hasLineage: boolean;
        hasMainImage: boolean;
        mainImageUrl: string | null;
        lineage: {
            sireLabel: string | null;
            damLabel: string | null;
            mateLabel: string | null;
        };
        riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    products: {
        code: string | null;
        type: string;
        id: string;
        name: string | null;
        sex: string | null;
        seriesName: string | null;
        lastEventAt: string | null;
        seriesId: string | null;
        requiresIdentityReview: boolean;
        needMatingStatus: "warning" | "normal" | "need_mating" | null;
        imageCount: number;
        hasLineage: boolean;
        hasMainImage: boolean;
        mainImageUrl: string | null;
        lineage: {
            sireLabel: string | null;
            damLabel: string | null;
            mateLabel: string | null;
        };
        riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
    }[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}, {
    tenantId: string;
    products: {
        code: string | null;
        type: string;
        id: string;
        name: string | null;
        sex: string | null;
        seriesName: string | null;
        lastEventAt: string | null;
        seriesId: string | null;
        requiresIdentityReview: boolean;
        needMatingStatus: "warning" | "normal" | "need_mating" | null;
        imageCount: number;
        hasLineage: boolean;
        hasMainImage: boolean;
        mainImageUrl: string | null;
        lineage: {
            sireLabel: string | null;
            damLabel: string | null;
            mateLabel: string | null;
        };
        riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
    }[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}>;
export declare const adminTenantLivestockDetailResponseSchema: z.ZodObject<{
    tenantId: z.ZodString;
    product: z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        type: z.ZodString;
        sex: z.ZodNullable<z.ZodString>;
        lineageType: z.ZodString;
        crossLabel: z.ZodNullable<z.ZodString>;
        seriesId: z.ZodNullable<z.ZodString>;
        seriesName: z.ZodNullable<z.ZodString>;
        requiresIdentityReview: z.ZodBoolean;
        excludeFromBreeding: z.ZodBoolean;
        hasSample: z.ZodBoolean;
        inStock: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        mainImageUrl: z.ZodNullable<z.ZodString>;
        images: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            url: z.ZodString;
            isMain: z.ZodBoolean;
            createdAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            url: string;
            createdAt: string;
            isMain: boolean;
        }, {
            id: string;
            url: string;
            createdAt: string;
            isMain: boolean;
        }>, "many">;
        metrics: z.ZodObject<{
            imageCount: z.ZodNumber;
            eventCount: z.ZodNumber;
            certificateCount: z.ZodNumber;
            couplePhotoCount: z.ZodNumber;
            saleBatchCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            eventCount: number;
            imageCount: number;
            certificateCount: number;
            couplePhotoCount: number;
            saleBatchCount: number;
        }, {
            eventCount: number;
            imageCount: number;
            certificateCount: number;
            couplePhotoCount: number;
            saleBatchCount: number;
        }>;
        status: z.ZodObject<{
            needMatingStatus: z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>;
            lastEggAt: z.ZodNullable<z.ZodString>;
            lastMatingAt: z.ZodNullable<z.ZodString>;
            lastEventAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            lastEventAt: string | null;
            needMatingStatus: "warning" | "normal" | "need_mating" | null;
            lastEggAt: string | null;
            lastMatingAt: string | null;
        }, {
            lastEventAt: string | null;
            needMatingStatus: "warning" | "normal" | "need_mating" | null;
            lastEggAt: string | null;
            lastMatingAt: string | null;
        }>;
        lineage: z.ZodObject<{
            sire: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                label: string;
            }, {
                id: string;
                label: string;
            }>>;
            dam: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                label: string;
            }, {
                id: string;
                label: string;
            }>>;
            mate: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                label: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                label: string;
            }, {
                id: string;
                label: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            sire: {
                id: string;
                label: string;
            } | null;
            dam: {
                id: string;
                label: string;
            } | null;
            mate: {
                id: string;
                label: string;
            } | null;
        }, {
            sire: {
                id: string;
                label: string;
            } | null;
            dam: {
                id: string;
                label: string;
            } | null;
            mate: {
                id: string;
                label: string;
            } | null;
        }>;
        recentEvents: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            eventType: z.ZodString;
            eventDate: z.ZodString;
            note: z.ZodNullable<z.ZodString>;
            assetCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: string;
            note: string | null;
            eventDate: string;
            eventType: string;
            assetCount: number;
        }, {
            id: string;
            note: string | null;
            eventDate: string;
            eventType: string;
            assetCount: number;
        }>, "many">;
        assets: z.ZodObject<{
            certificates: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                verifyId: z.ZodString;
                status: z.ZodString;
                issuedAt: z.ZodString;
                imageUrl: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                status: string;
                id: string;
                verifyId: string;
                issuedAt: string;
                imageUrl: string;
            }, {
                status: string;
                id: string;
                verifyId: string;
                issuedAt: string;
                imageUrl: string;
            }>, "many">;
            couplePhotos: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                generatedAt: z.ZodString;
                imageUrl: z.ZodString;
                isCurrent: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                id: string;
                generatedAt: string;
                imageUrl: string;
                isCurrent: boolean;
            }, {
                id: string;
                generatedAt: string;
                imageUrl: string;
                isCurrent: boolean;
            }>, "many">;
            saleBatches: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                batchNo: z.ZodString;
                status: z.ZodString;
                eventDateSnapshot: z.ZodString;
                priceLow: z.ZodNullable<z.ZodNumber>;
                priceHigh: z.ZodNullable<z.ZodNumber>;
            }, "strip", z.ZodTypeAny, {
                status: string;
                id: string;
                batchNo: string;
                priceLow: number | null;
                priceHigh: number | null;
                eventDateSnapshot: string;
            }, {
                status: string;
                id: string;
                batchNo: string;
                priceLow: number | null;
                priceHigh: number | null;
                eventDateSnapshot: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            certificates: {
                status: string;
                id: string;
                verifyId: string;
                issuedAt: string;
                imageUrl: string;
            }[];
            couplePhotos: {
                id: string;
                generatedAt: string;
                imageUrl: string;
                isCurrent: boolean;
            }[];
            saleBatches: {
                status: string;
                id: string;
                batchNo: string;
                priceLow: number | null;
                priceHigh: number | null;
                eventDateSnapshot: string;
            }[];
        }, {
            certificates: {
                status: string;
                id: string;
                verifyId: string;
                issuedAt: string;
                imageUrl: string;
            }[];
            couplePhotos: {
                id: string;
                generatedAt: string;
                imageUrl: string;
                isCurrent: boolean;
            }[];
            saleBatches: {
                status: string;
                id: string;
                batchNo: string;
                priceLow: number | null;
                priceHigh: number | null;
                eventDateSnapshot: string;
            }[];
        }>;
        riskTags: z.ZodArray<z.ZodEnum<["need_mating", "warning", "missing_image", "missing_lineage", "identity_review"]>, "many">;
    }, "strip", z.ZodTypeAny, {
        status: {
            lastEventAt: string | null;
            needMatingStatus: "warning" | "normal" | "need_mating" | null;
            lastEggAt: string | null;
            lastMatingAt: string | null;
        };
        code: string | null;
        type: string;
        id: string;
        name: string | null;
        sex: string | null;
        createdAt: string;
        updatedAt: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            createdAt: string;
            isMain: boolean;
        }[];
        seriesName: string | null;
        lineageType: string;
        crossLabel: string | null;
        seriesId: string | null;
        requiresIdentityReview: boolean;
        excludeFromBreeding: boolean;
        hasSample: boolean;
        inStock: boolean;
        metrics: {
            eventCount: number;
            imageCount: number;
            certificateCount: number;
            couplePhotoCount: number;
            saleBatchCount: number;
        };
        mainImageUrl: string | null;
        lineage: {
            sire: {
                id: string;
                label: string;
            } | null;
            dam: {
                id: string;
                label: string;
            } | null;
            mate: {
                id: string;
                label: string;
            } | null;
        };
        riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
        recentEvents: {
            id: string;
            note: string | null;
            eventDate: string;
            eventType: string;
            assetCount: number;
        }[];
        assets: {
            certificates: {
                status: string;
                id: string;
                verifyId: string;
                issuedAt: string;
                imageUrl: string;
            }[];
            couplePhotos: {
                id: string;
                generatedAt: string;
                imageUrl: string;
                isCurrent: boolean;
            }[];
            saleBatches: {
                status: string;
                id: string;
                batchNo: string;
                priceLow: number | null;
                priceHigh: number | null;
                eventDateSnapshot: string;
            }[];
        };
    }, {
        status: {
            lastEventAt: string | null;
            needMatingStatus: "warning" | "normal" | "need_mating" | null;
            lastEggAt: string | null;
            lastMatingAt: string | null;
        };
        code: string | null;
        type: string;
        id: string;
        name: string | null;
        sex: string | null;
        createdAt: string;
        updatedAt: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            createdAt: string;
            isMain: boolean;
        }[];
        seriesName: string | null;
        lineageType: string;
        crossLabel: string | null;
        seriesId: string | null;
        requiresIdentityReview: boolean;
        excludeFromBreeding: boolean;
        hasSample: boolean;
        inStock: boolean;
        metrics: {
            eventCount: number;
            imageCount: number;
            certificateCount: number;
            couplePhotoCount: number;
            saleBatchCount: number;
        };
        mainImageUrl: string | null;
        lineage: {
            sire: {
                id: string;
                label: string;
            } | null;
            dam: {
                id: string;
                label: string;
            } | null;
            mate: {
                id: string;
                label: string;
            } | null;
        };
        riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
        recentEvents: {
            id: string;
            note: string | null;
            eventDate: string;
            eventType: string;
            assetCount: number;
        }[];
        assets: {
            certificates: {
                status: string;
                id: string;
                verifyId: string;
                issuedAt: string;
                imageUrl: string;
            }[];
            couplePhotos: {
                id: string;
                generatedAt: string;
                imageUrl: string;
                isCurrent: boolean;
            }[];
            saleBatches: {
                status: string;
                id: string;
                batchNo: string;
                priceLow: number | null;
                priceHigh: number | null;
                eventDateSnapshot: string;
            }[];
        };
    }>;
}, "strip", z.ZodTypeAny, {
    product: {
        status: {
            lastEventAt: string | null;
            needMatingStatus: "warning" | "normal" | "need_mating" | null;
            lastEggAt: string | null;
            lastMatingAt: string | null;
        };
        code: string | null;
        type: string;
        id: string;
        name: string | null;
        sex: string | null;
        createdAt: string;
        updatedAt: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            createdAt: string;
            isMain: boolean;
        }[];
        seriesName: string | null;
        lineageType: string;
        crossLabel: string | null;
        seriesId: string | null;
        requiresIdentityReview: boolean;
        excludeFromBreeding: boolean;
        hasSample: boolean;
        inStock: boolean;
        metrics: {
            eventCount: number;
            imageCount: number;
            certificateCount: number;
            couplePhotoCount: number;
            saleBatchCount: number;
        };
        mainImageUrl: string | null;
        lineage: {
            sire: {
                id: string;
                label: string;
            } | null;
            dam: {
                id: string;
                label: string;
            } | null;
            mate: {
                id: string;
                label: string;
            } | null;
        };
        riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
        recentEvents: {
            id: string;
            note: string | null;
            eventDate: string;
            eventType: string;
            assetCount: number;
        }[];
        assets: {
            certificates: {
                status: string;
                id: string;
                verifyId: string;
                issuedAt: string;
                imageUrl: string;
            }[];
            couplePhotos: {
                id: string;
                generatedAt: string;
                imageUrl: string;
                isCurrent: boolean;
            }[];
            saleBatches: {
                status: string;
                id: string;
                batchNo: string;
                priceLow: number | null;
                priceHigh: number | null;
                eventDateSnapshot: string;
            }[];
        };
    };
    tenantId: string;
}, {
    product: {
        status: {
            lastEventAt: string | null;
            needMatingStatus: "warning" | "normal" | "need_mating" | null;
            lastEggAt: string | null;
            lastMatingAt: string | null;
        };
        code: string | null;
        type: string;
        id: string;
        name: string | null;
        sex: string | null;
        createdAt: string;
        updatedAt: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            createdAt: string;
            isMain: boolean;
        }[];
        seriesName: string | null;
        lineageType: string;
        crossLabel: string | null;
        seriesId: string | null;
        requiresIdentityReview: boolean;
        excludeFromBreeding: boolean;
        hasSample: boolean;
        inStock: boolean;
        metrics: {
            eventCount: number;
            imageCount: number;
            certificateCount: number;
            couplePhotoCount: number;
            saleBatchCount: number;
        };
        mainImageUrl: string | null;
        lineage: {
            sire: {
                id: string;
                label: string;
            } | null;
            dam: {
                id: string;
                label: string;
            } | null;
            mate: {
                id: string;
                label: string;
            } | null;
        };
        riskTags: ("warning" | "need_mating" | "missing_image" | "missing_lineage" | "identity_review")[];
        recentEvents: {
            id: string;
            note: string | null;
            eventDate: string;
            eventType: string;
            assetCount: number;
        }[];
        assets: {
            certificates: {
                status: string;
                id: string;
                verifyId: string;
                issuedAt: string;
                imageUrl: string;
            }[];
            couplePhotos: {
                id: string;
                generatedAt: string;
                imageUrl: string;
                isCurrent: boolean;
            }[];
            saleBatches: {
                status: string;
                id: string;
                batchNo: string;
                priceLow: number | null;
                priceHigh: number | null;
                eventDateSnapshot: string;
            }[];
        };
    };
    tenantId: string;
}>;
export declare const superAdminAuditLogSchema: z.ZodObject<{
    id: z.ZodString;
    actorUserId: z.ZodString;
    actorUserEmail: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    targetTenantId: z.ZodNullable<z.ZodString>;
    targetTenantSlug: z.ZodNullable<z.ZodString>;
    action: z.ZodEnum<["admin.tenants.list", "admin.tenants.create", "admin.tenants.update", "admin.tenants.delete", "admin.users.list", "admin.users.update", "admin.users.delete", "admin.tenants.members.upsert", "admin.tenants.members.remove", "admin.branding.platform.get", "admin.branding.platform.update", "admin.branding.tenant.get", "admin.branding.tenant.update", "admin.miniapp-support.get", "admin.miniapp-support.update", "admin.miniapp-support.qr-image.upload", "admin.audit-logs.list", "admin.audit-logs.export", "admin.tenants.subscription.get", "admin.tenants.subscription.update", "admin.subscription-activation-codes.create", "admin.tenants.lifecycle.suspend", "admin.tenants.lifecycle.reactivate", "admin.tenants.lifecycle.offboard", "admin.analytics.activity.overview", "admin.analytics.activity.overview.get", "admin.analytics.usage.overview.get", "admin.tenants.usage.get", "admin.analytics.revenue.overview.get", "admin.subscription-pricing.get", "admin.subscription-pricing.update", "admin.market-intelligence.keywords.list", "admin.market-intelligence.keywords.create", "admin.market-intelligence.keywords.update", "admin.market-intelligence.keywords.toggle", "admin.market-intelligence.price-snapshots.list", "admin.market-intelligence.price-snapshots.batch-upsert", "admin.market-intelligence.seed-listings.list", "admin.market-intelligence.seed-listings.batch-upsert", "admin.market-intelligence.module-switches.get", "admin.market-intelligence.module-switches.update", "admin.market-intelligence.review-queue.list", "admin.market-intelligence.review-queue.approve", "admin.market-intelligence.review-queue.reject", "admin.market-intelligence.publish-history.list", "admin.market-intelligence.keywords.publish", "admin.guiquan-community.posts.list", "admin.guiquan-community.posts.create", "admin.guiquan-community.posts.update", "admin.guiquan-community.posts.submit", "admin.guiquan-community.posts.publish", "admin.guiquan-community.posts.reject", "admin.guiquan-community.posts.archive", "admin.guiquan-community.comments.moderate", "admin.guiquan-community.reports.resolve", "admin.supply.products.list", "admin.supply.orders.list", "admin.supply.support-tickets.list", "admin.supply.refund-requests.list", "admin.supply.shipments.create", "admin.supply.shipments.tracking.get", "admin.supply.products.create", "admin.supply.products.image.upload", "admin.supply.products.update", "admin.supply.support-tickets.update", "admin.supply.refund-requests.update", "admin.supply.products.delete", "admin.marketplace.listings.list", "admin.marketplace.listings.detail.get", "admin.marketplace.listings.publish", "admin.marketplace.listings.reject", "admin.marketplace.listings.pause", "admin.marketplace.listings.archive", "admin.marketplace.disputes.resolve", "admin.announcements.create-draft", "admin.announcements.publish", "admin.footprint-achievements.list", "admin.footprint-achievements.update", "admin.footprint-achievements.image.upload", "admin.footprint-achievements.reset", "admin.tenants.observe-session.create", "admin.tenants.livestock.overview.get", "admin.tenants.livestock.products.list", "admin.tenants.livestock.products.detail.get"]>;
    metadata: z.ZodNullable<z.ZodUnknown>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: string;
    targetTenantId: string | null;
    actorUserId: string;
    action: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get";
    actorUserEmail: string | null;
    targetTenantSlug: string | null;
    metadata?: unknown;
}, {
    id: string;
    createdAt: string;
    targetTenantId: string | null;
    actorUserId: string;
    action: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get";
    actorUserEmail: string | null;
    targetTenantSlug: string | null;
    metadata?: unknown;
}>;
export declare const listSuperAdminAuditLogsQuerySchema: z.ZodObject<{
    tenantId: z.ZodOptional<z.ZodString>;
    actorUserId: z.ZodOptional<z.ZodString>;
    action: z.ZodOptional<z.ZodEnum<["admin.tenants.list", "admin.tenants.create", "admin.tenants.update", "admin.tenants.delete", "admin.users.list", "admin.users.update", "admin.users.delete", "admin.tenants.members.upsert", "admin.tenants.members.remove", "admin.branding.platform.get", "admin.branding.platform.update", "admin.branding.tenant.get", "admin.branding.tenant.update", "admin.miniapp-support.get", "admin.miniapp-support.update", "admin.miniapp-support.qr-image.upload", "admin.audit-logs.list", "admin.audit-logs.export", "admin.tenants.subscription.get", "admin.tenants.subscription.update", "admin.subscription-activation-codes.create", "admin.tenants.lifecycle.suspend", "admin.tenants.lifecycle.reactivate", "admin.tenants.lifecycle.offboard", "admin.analytics.activity.overview", "admin.analytics.activity.overview.get", "admin.analytics.usage.overview.get", "admin.tenants.usage.get", "admin.analytics.revenue.overview.get", "admin.subscription-pricing.get", "admin.subscription-pricing.update", "admin.market-intelligence.keywords.list", "admin.market-intelligence.keywords.create", "admin.market-intelligence.keywords.update", "admin.market-intelligence.keywords.toggle", "admin.market-intelligence.price-snapshots.list", "admin.market-intelligence.price-snapshots.batch-upsert", "admin.market-intelligence.seed-listings.list", "admin.market-intelligence.seed-listings.batch-upsert", "admin.market-intelligence.module-switches.get", "admin.market-intelligence.module-switches.update", "admin.market-intelligence.review-queue.list", "admin.market-intelligence.review-queue.approve", "admin.market-intelligence.review-queue.reject", "admin.market-intelligence.publish-history.list", "admin.market-intelligence.keywords.publish", "admin.guiquan-community.posts.list", "admin.guiquan-community.posts.create", "admin.guiquan-community.posts.update", "admin.guiquan-community.posts.submit", "admin.guiquan-community.posts.publish", "admin.guiquan-community.posts.reject", "admin.guiquan-community.posts.archive", "admin.guiquan-community.comments.moderate", "admin.guiquan-community.reports.resolve", "admin.supply.products.list", "admin.supply.orders.list", "admin.supply.support-tickets.list", "admin.supply.refund-requests.list", "admin.supply.shipments.create", "admin.supply.shipments.tracking.get", "admin.supply.products.create", "admin.supply.products.image.upload", "admin.supply.products.update", "admin.supply.support-tickets.update", "admin.supply.refund-requests.update", "admin.supply.products.delete", "admin.marketplace.listings.list", "admin.marketplace.listings.detail.get", "admin.marketplace.listings.publish", "admin.marketplace.listings.reject", "admin.marketplace.listings.pause", "admin.marketplace.listings.archive", "admin.marketplace.disputes.resolve", "admin.announcements.create-draft", "admin.announcements.publish", "admin.footprint-achievements.list", "admin.footprint-achievements.update", "admin.footprint-achievements.image.upload", "admin.footprint-achievements.reset", "admin.tenants.observe-session.create", "admin.tenants.livestock.overview.get", "admin.tenants.livestock.products.list", "admin.tenants.livestock.products.detail.get"]>>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    tenantId?: string | undefined;
    actorUserId?: string | undefined;
    action?: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get" | undefined;
    from?: string | undefined;
    to?: string | undefined;
}, {
    tenantId?: string | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
    actorUserId?: string | undefined;
    action?: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get" | undefined;
    from?: string | undefined;
    to?: string | undefined;
}>;
export declare const listSuperAdminAuditLogsResponseSchema: z.ZodObject<{
    logs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        actorUserId: z.ZodString;
        actorUserEmail: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        targetTenantId: z.ZodNullable<z.ZodString>;
        targetTenantSlug: z.ZodNullable<z.ZodString>;
        action: z.ZodEnum<["admin.tenants.list", "admin.tenants.create", "admin.tenants.update", "admin.tenants.delete", "admin.users.list", "admin.users.update", "admin.users.delete", "admin.tenants.members.upsert", "admin.tenants.members.remove", "admin.branding.platform.get", "admin.branding.platform.update", "admin.branding.tenant.get", "admin.branding.tenant.update", "admin.miniapp-support.get", "admin.miniapp-support.update", "admin.miniapp-support.qr-image.upload", "admin.audit-logs.list", "admin.audit-logs.export", "admin.tenants.subscription.get", "admin.tenants.subscription.update", "admin.subscription-activation-codes.create", "admin.tenants.lifecycle.suspend", "admin.tenants.lifecycle.reactivate", "admin.tenants.lifecycle.offboard", "admin.analytics.activity.overview", "admin.analytics.activity.overview.get", "admin.analytics.usage.overview.get", "admin.tenants.usage.get", "admin.analytics.revenue.overview.get", "admin.subscription-pricing.get", "admin.subscription-pricing.update", "admin.market-intelligence.keywords.list", "admin.market-intelligence.keywords.create", "admin.market-intelligence.keywords.update", "admin.market-intelligence.keywords.toggle", "admin.market-intelligence.price-snapshots.list", "admin.market-intelligence.price-snapshots.batch-upsert", "admin.market-intelligence.seed-listings.list", "admin.market-intelligence.seed-listings.batch-upsert", "admin.market-intelligence.module-switches.get", "admin.market-intelligence.module-switches.update", "admin.market-intelligence.review-queue.list", "admin.market-intelligence.review-queue.approve", "admin.market-intelligence.review-queue.reject", "admin.market-intelligence.publish-history.list", "admin.market-intelligence.keywords.publish", "admin.guiquan-community.posts.list", "admin.guiquan-community.posts.create", "admin.guiquan-community.posts.update", "admin.guiquan-community.posts.submit", "admin.guiquan-community.posts.publish", "admin.guiquan-community.posts.reject", "admin.guiquan-community.posts.archive", "admin.guiquan-community.comments.moderate", "admin.guiquan-community.reports.resolve", "admin.supply.products.list", "admin.supply.orders.list", "admin.supply.support-tickets.list", "admin.supply.refund-requests.list", "admin.supply.shipments.create", "admin.supply.shipments.tracking.get", "admin.supply.products.create", "admin.supply.products.image.upload", "admin.supply.products.update", "admin.supply.support-tickets.update", "admin.supply.refund-requests.update", "admin.supply.products.delete", "admin.marketplace.listings.list", "admin.marketplace.listings.detail.get", "admin.marketplace.listings.publish", "admin.marketplace.listings.reject", "admin.marketplace.listings.pause", "admin.marketplace.listings.archive", "admin.marketplace.disputes.resolve", "admin.announcements.create-draft", "admin.announcements.publish", "admin.footprint-achievements.list", "admin.footprint-achievements.update", "admin.footprint-achievements.image.upload", "admin.footprint-achievements.reset", "admin.tenants.observe-session.create", "admin.tenants.livestock.overview.get", "admin.tenants.livestock.products.list", "admin.tenants.livestock.products.detail.get"]>;
        metadata: z.ZodNullable<z.ZodUnknown>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        createdAt: string;
        targetTenantId: string | null;
        actorUserId: string;
        action: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get";
        actorUserEmail: string | null;
        targetTenantSlug: string | null;
        metadata?: unknown;
    }, {
        id: string;
        createdAt: string;
        targetTenantId: string | null;
        actorUserId: string;
        action: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get";
        actorUserEmail: string | null;
        targetTenantSlug: string | null;
        metadata?: unknown;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    logs: {
        id: string;
        createdAt: string;
        targetTenantId: string | null;
        actorUserId: string;
        action: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get";
        actorUserEmail: string | null;
        targetTenantSlug: string | null;
        metadata?: unknown;
    }[];
}, {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    logs: {
        id: string;
        createdAt: string;
        targetTenantId: string | null;
        actorUserId: string;
        action: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get";
        actorUserEmail: string | null;
        targetTenantSlug: string | null;
        metadata?: unknown;
    }[];
}>;
export declare const exportSuperAdminAuditLogsQuerySchema: z.ZodObject<{
    tenantId: z.ZodOptional<z.ZodString>;
    actorUserId: z.ZodOptional<z.ZodString>;
    action: z.ZodOptional<z.ZodEnum<["admin.tenants.list", "admin.tenants.create", "admin.tenants.update", "admin.tenants.delete", "admin.users.list", "admin.users.update", "admin.users.delete", "admin.tenants.members.upsert", "admin.tenants.members.remove", "admin.branding.platform.get", "admin.branding.platform.update", "admin.branding.tenant.get", "admin.branding.tenant.update", "admin.miniapp-support.get", "admin.miniapp-support.update", "admin.miniapp-support.qr-image.upload", "admin.audit-logs.list", "admin.audit-logs.export", "admin.tenants.subscription.get", "admin.tenants.subscription.update", "admin.subscription-activation-codes.create", "admin.tenants.lifecycle.suspend", "admin.tenants.lifecycle.reactivate", "admin.tenants.lifecycle.offboard", "admin.analytics.activity.overview", "admin.analytics.activity.overview.get", "admin.analytics.usage.overview.get", "admin.tenants.usage.get", "admin.analytics.revenue.overview.get", "admin.subscription-pricing.get", "admin.subscription-pricing.update", "admin.market-intelligence.keywords.list", "admin.market-intelligence.keywords.create", "admin.market-intelligence.keywords.update", "admin.market-intelligence.keywords.toggle", "admin.market-intelligence.price-snapshots.list", "admin.market-intelligence.price-snapshots.batch-upsert", "admin.market-intelligence.seed-listings.list", "admin.market-intelligence.seed-listings.batch-upsert", "admin.market-intelligence.module-switches.get", "admin.market-intelligence.module-switches.update", "admin.market-intelligence.review-queue.list", "admin.market-intelligence.review-queue.approve", "admin.market-intelligence.review-queue.reject", "admin.market-intelligence.publish-history.list", "admin.market-intelligence.keywords.publish", "admin.guiquan-community.posts.list", "admin.guiquan-community.posts.create", "admin.guiquan-community.posts.update", "admin.guiquan-community.posts.submit", "admin.guiquan-community.posts.publish", "admin.guiquan-community.posts.reject", "admin.guiquan-community.posts.archive", "admin.guiquan-community.comments.moderate", "admin.guiquan-community.reports.resolve", "admin.supply.products.list", "admin.supply.orders.list", "admin.supply.support-tickets.list", "admin.supply.refund-requests.list", "admin.supply.shipments.create", "admin.supply.shipments.tracking.get", "admin.supply.products.create", "admin.supply.products.image.upload", "admin.supply.products.update", "admin.supply.support-tickets.update", "admin.supply.refund-requests.update", "admin.supply.products.delete", "admin.marketplace.listings.list", "admin.marketplace.listings.detail.get", "admin.marketplace.listings.publish", "admin.marketplace.listings.reject", "admin.marketplace.listings.pause", "admin.marketplace.listings.archive", "admin.marketplace.disputes.resolve", "admin.announcements.create-draft", "admin.announcements.publish", "admin.footprint-achievements.list", "admin.footprint-achievements.update", "admin.footprint-achievements.image.upload", "admin.footprint-achievements.reset", "admin.tenants.observe-session.create", "admin.tenants.livestock.overview.get", "admin.tenants.livestock.products.list", "admin.tenants.livestock.products.detail.get"]>>;
    from: z.ZodOptional<z.ZodString>;
    to: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    tenantId?: string | undefined;
    actorUserId?: string | undefined;
    action?: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get" | undefined;
    from?: string | undefined;
    to?: string | undefined;
}, {
    tenantId?: string | undefined;
    limit?: number | undefined;
    actorUserId?: string | undefined;
    action?: "admin.tenants.list" | "admin.tenants.create" | "admin.tenants.update" | "admin.tenants.delete" | "admin.users.list" | "admin.users.update" | "admin.users.delete" | "admin.tenants.members.upsert" | "admin.tenants.members.remove" | "admin.branding.platform.get" | "admin.branding.platform.update" | "admin.branding.tenant.get" | "admin.branding.tenant.update" | "admin.miniapp-support.get" | "admin.miniapp-support.update" | "admin.miniapp-support.qr-image.upload" | "admin.audit-logs.list" | "admin.audit-logs.export" | "admin.tenants.subscription.get" | "admin.tenants.subscription.update" | "admin.subscription-activation-codes.create" | "admin.tenants.lifecycle.suspend" | "admin.tenants.lifecycle.reactivate" | "admin.tenants.lifecycle.offboard" | "admin.analytics.activity.overview" | "admin.analytics.activity.overview.get" | "admin.analytics.usage.overview.get" | "admin.tenants.usage.get" | "admin.analytics.revenue.overview.get" | "admin.subscription-pricing.get" | "admin.subscription-pricing.update" | "admin.market-intelligence.keywords.list" | "admin.market-intelligence.keywords.create" | "admin.market-intelligence.keywords.update" | "admin.market-intelligence.keywords.toggle" | "admin.market-intelligence.price-snapshots.list" | "admin.market-intelligence.price-snapshots.batch-upsert" | "admin.market-intelligence.seed-listings.list" | "admin.market-intelligence.seed-listings.batch-upsert" | "admin.market-intelligence.module-switches.get" | "admin.market-intelligence.module-switches.update" | "admin.market-intelligence.review-queue.list" | "admin.market-intelligence.review-queue.approve" | "admin.market-intelligence.review-queue.reject" | "admin.market-intelligence.publish-history.list" | "admin.market-intelligence.keywords.publish" | "admin.guiquan-community.posts.list" | "admin.guiquan-community.posts.create" | "admin.guiquan-community.posts.update" | "admin.guiquan-community.posts.submit" | "admin.guiquan-community.posts.publish" | "admin.guiquan-community.posts.reject" | "admin.guiquan-community.posts.archive" | "admin.guiquan-community.comments.moderate" | "admin.guiquan-community.reports.resolve" | "admin.supply.products.list" | "admin.supply.orders.list" | "admin.supply.support-tickets.list" | "admin.supply.refund-requests.list" | "admin.supply.shipments.create" | "admin.supply.shipments.tracking.get" | "admin.supply.products.create" | "admin.supply.products.image.upload" | "admin.supply.products.update" | "admin.supply.support-tickets.update" | "admin.supply.refund-requests.update" | "admin.supply.products.delete" | "admin.marketplace.listings.list" | "admin.marketplace.listings.detail.get" | "admin.marketplace.listings.publish" | "admin.marketplace.listings.reject" | "admin.marketplace.listings.pause" | "admin.marketplace.listings.archive" | "admin.marketplace.disputes.resolve" | "admin.announcements.create-draft" | "admin.announcements.publish" | "admin.footprint-achievements.list" | "admin.footprint-achievements.update" | "admin.footprint-achievements.image.upload" | "admin.footprint-achievements.reset" | "admin.tenants.observe-session.create" | "admin.tenants.livestock.overview.get" | "admin.tenants.livestock.products.list" | "admin.tenants.livestock.products.detail.get" | undefined;
    from?: string | undefined;
    to?: string | undefined;
}>;
export declare const adminActivityOverviewWindowSchema: z.ZodEnum<["7d", "30d"]>;
export declare const getAdminActivityOverviewQuerySchema: z.ZodObject<{
    window: z.ZodDefault<z.ZodEnum<["7d", "30d"]>>;
}, "strip", z.ZodTypeAny, {
    window: "7d" | "30d";
}, {
    window?: "7d" | "30d" | undefined;
}>;
export declare const adminActivityOverviewResponseSchema: z.ZodObject<{
    generatedAt: z.ZodString;
    window: z.ZodEnum<["7d", "30d"]>;
    kpis: z.ZodObject<{
        dau: z.ZodNumber;
        wau: z.ZodNumber;
        mau: z.ZodNumber;
        activeTenants7d: z.ZodNumber;
        tenantRetention7d: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        dau: number;
        wau: number;
        mau: number;
        activeTenants7d: number;
        tenantRetention7d: number;
    }, {
        dau: number;
        wau: number;
        mau: number;
        activeTenants7d: number;
        tenantRetention7d: number;
    }>;
    trend: z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        dau: z.ZodNumber;
        activeTenants: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: string;
        dau: number;
        activeTenants: number;
    }, {
        date: string;
        dau: number;
        activeTenants: number;
    }>, "many">;
    definitions: z.ZodObject<{
        activeTenant: z.ZodString;
        tenantRetention7d: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tenantRetention7d: string;
        activeTenant: string;
    }, {
        tenantRetention7d: string;
        activeTenant: string;
    }>;
}, "strip", z.ZodTypeAny, {
    generatedAt: string;
    window: "7d" | "30d";
    trend: {
        date: string;
        dau: number;
        activeTenants: number;
    }[];
    kpis: {
        dau: number;
        wau: number;
        mau: number;
        activeTenants7d: number;
        tenantRetention7d: number;
    };
    definitions: {
        tenantRetention7d: string;
        activeTenant: string;
    };
}, {
    generatedAt: string;
    window: "7d" | "30d";
    trend: {
        date: string;
        dau: number;
        activeTenants: number;
    }[];
    kpis: {
        dau: number;
        wau: number;
        mau: number;
        activeTenants7d: number;
        tenantRetention7d: number;
    };
    definitions: {
        tenantRetention7d: string;
        activeTenant: string;
    };
}>;
export declare const adminUsageLimitStatusSchema: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
export declare const adminUsageMetricKeySchema: z.ZodEnum<["products", "images", "shares", "storageBytes"]>;
export declare const adminUsageCountMetricSchema: z.ZodObject<{
    used: z.ZodNumber;
    limit: z.ZodNullable<z.ZodNumber>;
    utilization: z.ZodNullable<z.ZodNumber>;
    status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
}, "strip", z.ZodTypeAny, {
    status: "ok" | "near_limit" | "exceeded" | "unlimited";
    limit: number | null;
    used: number;
    utilization: number | null;
}, {
    status: "ok" | "near_limit" | "exceeded" | "unlimited";
    limit: number | null;
    used: number;
    utilization: number | null;
}>;
export declare const adminUsageStorageMetricSchema: z.ZodObject<{
    usedBytes: z.ZodString;
    limitBytes: z.ZodNullable<z.ZodString>;
    utilization: z.ZodNullable<z.ZodNumber>;
    status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
}, "strip", z.ZodTypeAny, {
    status: "ok" | "near_limit" | "exceeded" | "unlimited";
    utilization: number | null;
    usedBytes: string;
    limitBytes: string | null;
}, {
    status: "ok" | "near_limit" | "exceeded" | "unlimited";
    utilization: number | null;
    usedBytes: string;
    limitBytes: string | null;
}>;
export declare const adminTenantUsageAlertSchema: z.ZodObject<{
    metric: z.ZodEnum<["products", "images", "shares", "storageBytes"]>;
    status: z.ZodEnum<["near_limit", "exceeded"]>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    status: "near_limit" | "exceeded";
    metric: "images" | "products" | "shares" | "storageBytes";
}, {
    message: string;
    status: "near_limit" | "exceeded";
    metric: "images" | "products" | "shares" | "storageBytes";
}>;
export declare const adminTenantUsageSchema: z.ZodObject<{
    tenantId: z.ZodString;
    tenantSlug: z.ZodString;
    tenantName: z.ZodString;
    plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
    subscriptionStatus: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
    usage: z.ZodObject<{
        products: z.ZodObject<{
            used: z.ZodNumber;
            limit: z.ZodNullable<z.ZodNumber>;
            utilization: z.ZodNullable<z.ZodNumber>;
            status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
        }, "strip", z.ZodTypeAny, {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        }, {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        }>;
        images: z.ZodObject<{
            used: z.ZodNumber;
            limit: z.ZodNullable<z.ZodNumber>;
            utilization: z.ZodNullable<z.ZodNumber>;
            status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
        }, "strip", z.ZodTypeAny, {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        }, {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        }>;
        shares: z.ZodObject<{
            used: z.ZodNumber;
            limit: z.ZodNullable<z.ZodNumber>;
            utilization: z.ZodNullable<z.ZodNumber>;
            status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
        }, "strip", z.ZodTypeAny, {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        }, {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        }>;
        storageBytes: z.ZodObject<{
            usedBytes: z.ZodString;
            limitBytes: z.ZodNullable<z.ZodString>;
            utilization: z.ZodNullable<z.ZodNumber>;
            status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
        }, "strip", z.ZodTypeAny, {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            utilization: number | null;
            usedBytes: string;
            limitBytes: string | null;
        }, {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            utilization: number | null;
            usedBytes: string;
            limitBytes: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        images: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        products: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        shares: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        storageBytes: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            utilization: number | null;
            usedBytes: string;
            limitBytes: string | null;
        };
    }, {
        images: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        products: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        shares: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        storageBytes: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            utilization: number | null;
            usedBytes: string;
            limitBytes: string | null;
        };
    }>;
    alerts: z.ZodArray<z.ZodObject<{
        metric: z.ZodEnum<["products", "images", "shares", "storageBytes"]>;
        status: z.ZodEnum<["near_limit", "exceeded"]>;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        status: "near_limit" | "exceeded";
        metric: "images" | "products" | "shares" | "storageBytes";
    }, {
        message: string;
        status: "near_limit" | "exceeded";
        metric: "images" | "products" | "shares" | "storageBytes";
    }>, "many">;
    usageScore: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    plan: "FREE" | "BASIC" | "PRO";
    tenantSlug: string;
    tenantName: string;
    subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
    usage: {
        images: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        products: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        shares: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        storageBytes: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            utilization: number | null;
            usedBytes: string;
            limitBytes: string | null;
        };
    };
    alerts: {
        message: string;
        status: "near_limit" | "exceeded";
        metric: "images" | "products" | "shares" | "storageBytes";
    }[];
    usageScore: number;
}, {
    tenantId: string;
    plan: "FREE" | "BASIC" | "PRO";
    tenantSlug: string;
    tenantName: string;
    subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
    usage: {
        images: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        products: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        shares: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            limit: number | null;
            used: number;
            utilization: number | null;
        };
        storageBytes: {
            status: "ok" | "near_limit" | "exceeded" | "unlimited";
            utilization: number | null;
            usedBytes: string;
            limitBytes: string | null;
        };
    };
    alerts: {
        message: string;
        status: "near_limit" | "exceeded";
        metric: "images" | "products" | "shares" | "storageBytes";
    }[];
    usageScore: number;
}>;
export declare const getAdminUsageOverviewQuerySchema: z.ZodObject<{
    topN: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    topN: number;
}, {
    topN?: number | undefined;
}>;
export declare const adminUsageOverviewResponseSchema: z.ZodObject<{
    generatedAt: z.ZodString;
    topN: z.ZodNumber;
    summary: z.ZodObject<{
        tenantCount: z.ZodNumber;
        totalProducts: z.ZodNumber;
        totalImages: z.ZodNumber;
        totalShares: z.ZodNumber;
        totalStorageBytes: z.ZodString;
        nearLimitTenantCount: z.ZodNumber;
        exceededTenantCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tenantCount: number;
        totalProducts: number;
        totalShares: number;
        totalImages: number;
        totalStorageBytes: string;
        nearLimitTenantCount: number;
        exceededTenantCount: number;
    }, {
        tenantCount: number;
        totalProducts: number;
        totalShares: number;
        totalImages: number;
        totalStorageBytes: string;
        nearLimitTenantCount: number;
        exceededTenantCount: number;
    }>;
    topTenants: z.ZodArray<z.ZodObject<{
        tenantId: z.ZodString;
        tenantSlug: z.ZodString;
        tenantName: z.ZodString;
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        subscriptionStatus: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        usage: z.ZodObject<{
            products: z.ZodObject<{
                used: z.ZodNumber;
                limit: z.ZodNullable<z.ZodNumber>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }>;
            images: z.ZodObject<{
                used: z.ZodNumber;
                limit: z.ZodNullable<z.ZodNumber>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }>;
            shares: z.ZodObject<{
                used: z.ZodNumber;
                limit: z.ZodNullable<z.ZodNumber>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }>;
            storageBytes: z.ZodObject<{
                usedBytes: z.ZodString;
                limitBytes: z.ZodNullable<z.ZodString>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        }, {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        }>;
        alerts: z.ZodArray<z.ZodObject<{
            metric: z.ZodEnum<["products", "images", "shares", "storageBytes"]>;
            status: z.ZodEnum<["near_limit", "exceeded"]>;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }, {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }>, "many">;
        usageScore: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    }, {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    }>, "many">;
    definitions: z.ZodObject<{
        score: z.ZodString;
        nearLimit: z.ZodString;
        exceeded: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        exceeded: string;
        score: string;
        nearLimit: string;
    }, {
        exceeded: string;
        score: string;
        nearLimit: string;
    }>;
}, "strip", z.ZodTypeAny, {
    summary: {
        tenantCount: number;
        totalProducts: number;
        totalShares: number;
        totalImages: number;
        totalStorageBytes: string;
        nearLimitTenantCount: number;
        exceededTenantCount: number;
    };
    generatedAt: string;
    definitions: {
        exceeded: string;
        score: string;
        nearLimit: string;
    };
    topN: number;
    topTenants: {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    }[];
}, {
    summary: {
        tenantCount: number;
        totalProducts: number;
        totalShares: number;
        totalImages: number;
        totalStorageBytes: string;
        nearLimitTenantCount: number;
        exceededTenantCount: number;
    };
    generatedAt: string;
    definitions: {
        exceeded: string;
        score: string;
        nearLimit: string;
    };
    topN: number;
    topTenants: {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    }[];
}>;
export declare const getAdminTenantUsageResponseSchema: z.ZodObject<{
    generatedAt: z.ZodString;
    tenant: z.ZodObject<{
        tenantId: z.ZodString;
        tenantSlug: z.ZodString;
        tenantName: z.ZodString;
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        subscriptionStatus: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        usage: z.ZodObject<{
            products: z.ZodObject<{
                used: z.ZodNumber;
                limit: z.ZodNullable<z.ZodNumber>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }>;
            images: z.ZodObject<{
                used: z.ZodNumber;
                limit: z.ZodNullable<z.ZodNumber>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }>;
            shares: z.ZodObject<{
                used: z.ZodNumber;
                limit: z.ZodNullable<z.ZodNumber>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }>;
            storageBytes: z.ZodObject<{
                usedBytes: z.ZodString;
                limitBytes: z.ZodNullable<z.ZodString>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        }, {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        }>;
        alerts: z.ZodArray<z.ZodObject<{
            metric: z.ZodEnum<["products", "images", "shares", "storageBytes"]>;
            status: z.ZodEnum<["near_limit", "exceeded"]>;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }, {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }>, "many">;
        usageScore: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    }, {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    }>;
    definitions: z.ZodObject<{
        products: z.ZodString;
        images: z.ZodString;
        shares: z.ZodString;
        storageBytes: z.ZodString;
        nearLimit: z.ZodString;
        exceeded: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        images: string;
        products: string;
        shares: string;
        exceeded: string;
        storageBytes: string;
        nearLimit: string;
    }, {
        images: string;
        products: string;
        shares: string;
        exceeded: string;
        storageBytes: string;
        nearLimit: string;
    }>;
}, "strip", z.ZodTypeAny, {
    generatedAt: string;
    tenant: {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    };
    definitions: {
        images: string;
        products: string;
        shares: string;
        exceeded: string;
        storageBytes: string;
        nearLimit: string;
    };
}, {
    generatedAt: string;
    tenant: {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    };
    definitions: {
        images: string;
        products: string;
        shares: string;
        exceeded: string;
        storageBytes: string;
        nearLimit: string;
    };
}>;
export declare const adminTenantInsightsSchema: z.ZodObject<{
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    } & {
        createdAt: z.ZodString;
        lastLoginAt: z.ZodNullable<z.ZodString>;
        lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
        lastActiveAt: z.ZodNullable<z.ZodString>;
        memberCount: z.ZodNumber;
        totalProducts: z.ZodDefault<z.ZodNumber>;
        owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            email: z.ZodEffects<z.ZodString, string, string>;
            account: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            phone: z.ZodNullable<z.ZodString>;
            wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        }, {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        }>>>;
        subscription: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
            status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
            expiresAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }, {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        }>>>;
        autoTags: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
            label: z.ZodString;
            description: z.ZodString;
            tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
            priority: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    }, {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    }>;
    autoTags: z.ZodArray<z.ZodObject<{
        key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
        label: z.ZodString;
        description: z.ZodString;
        tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
        priority: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
        description: string;
        label: string;
        tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
        priority: number;
    }, {
        key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
        description: string;
        label: string;
        tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
        priority: number;
    }>, "many">;
    loginMetrics: z.ZodObject<{
        totalLogins: z.ZodNumber;
        logins30d: z.ZodNumber;
        lastLoginAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        totalLogins: number;
        logins30d: number;
        lastLoginAt: string | null;
    }, {
        totalLogins: number;
        logins30d: number;
        lastLoginAt: string | null;
    }>;
    businessMetrics: z.ZodObject<{
        activeDays30d: z.ZodNumber;
        lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
        totalProducts: z.ZodNumber;
        totalSeries: z.ZodNumber;
        totalImages: z.ZodNumber;
        totalShares: z.ZodNumber;
        uploads30d: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        totalProducts: number;
        totalSeries: number;
        totalShares: number;
        activeDays30d: number;
        lastBusinessActivityAt: string | null;
        totalImages: number;
        uploads30d: number;
    }, {
        totalProducts: number;
        totalSeries: number;
        totalShares: number;
        activeDays30d: number;
        lastBusinessActivityAt: string | null;
        totalImages: number;
        uploads30d: number;
    }>;
    revenueMetrics: z.ZodObject<{
        paidOrderCount: z.ZodNumber;
        paidRevenueCents: z.ZodNumber;
        lastPaidAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        paidOrderCount: number;
        paidRevenueCents: number;
        lastPaidAt: string | null;
    }, {
        paidOrderCount: number;
        paidRevenueCents: number;
        lastPaidAt: string | null;
    }>;
    usage: z.ZodObject<{
        tenantId: z.ZodString;
        tenantSlug: z.ZodString;
        tenantName: z.ZodString;
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        subscriptionStatus: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
        usage: z.ZodObject<{
            products: z.ZodObject<{
                used: z.ZodNumber;
                limit: z.ZodNullable<z.ZodNumber>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }>;
            images: z.ZodObject<{
                used: z.ZodNumber;
                limit: z.ZodNullable<z.ZodNumber>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }>;
            shares: z.ZodObject<{
                used: z.ZodNumber;
                limit: z.ZodNullable<z.ZodNumber>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            }>;
            storageBytes: z.ZodObject<{
                usedBytes: z.ZodString;
                limitBytes: z.ZodNullable<z.ZodString>;
                utilization: z.ZodNullable<z.ZodNumber>;
                status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
            }, "strip", z.ZodTypeAny, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            }, {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            }>;
        }, "strip", z.ZodTypeAny, {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        }, {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        }>;
        alerts: z.ZodArray<z.ZodObject<{
            metric: z.ZodEnum<["products", "images", "shares", "storageBytes"]>;
            status: z.ZodEnum<["near_limit", "exceeded"]>;
            message: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }, {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }>, "many">;
        usageScore: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    }, {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    }>;
    recentBusinessLogs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        actorUserId: z.ZodString;
        action: z.ZodEnum<["product.create", "product.update", "product.delete", "product.event.create", "product.event.update", "product.event.delete", "product.image.upload", "product.image.delete", "product.image.set_main", "product.image.reorder", "product.certificate.confirm", "product.certificate.void", "product.certificate.reissue", "product.couple_photo.generate", "sale.batch.create", "sale.allocation.create", "sale.subject_media.upload", "guiquan.ledger.entry.create", "share.create", "share.access", "subscription.activation.redeem", "subscription.order.create", "subscription.payment.dialog_open", "subscription.payment.click", "subscription.payment.hesitate", "subscription.payment.cancel", "subscription.payment.success", "subscription.payment.failure", "supply.payment.failure", "auth.login"]>;
        resourceType: z.ZodString;
        resourceId: z.ZodNullable<z.ZodString>;
        metadata: z.ZodNullable<z.ZodUnknown>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        tenantId: string;
        createdAt: string;
        actorUserId: string;
        action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
        resourceType: string;
        resourceId: string | null;
        metadata?: unknown;
    }, {
        id: string;
        tenantId: string;
        createdAt: string;
        actorUserId: string;
        action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
        resourceType: string;
        resourceId: string | null;
        metadata?: unknown;
    }>, "many">;
    activityTrend: z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        businessEvents: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: string;
        businessEvents: number;
    }, {
        date: string;
        businessEvents: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        totalProducts: number;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId: string | null;
        } | null | undefined;
    };
    autoTags: {
        key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
        description: string;
        label: string;
        tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
        priority: number;
    }[];
    usage: {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    };
    loginMetrics: {
        totalLogins: number;
        logins30d: number;
        lastLoginAt: string | null;
    };
    businessMetrics: {
        totalProducts: number;
        totalSeries: number;
        totalShares: number;
        activeDays30d: number;
        lastBusinessActivityAt: string | null;
        totalImages: number;
        uploads30d: number;
    };
    revenueMetrics: {
        paidOrderCount: number;
        paidRevenueCents: number;
        lastPaidAt: string | null;
    };
    recentBusinessLogs: {
        id: string;
        tenantId: string;
        createdAt: string;
        actorUserId: string;
        action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
        resourceType: string;
        resourceId: string | null;
        metadata?: unknown;
    }[];
    activityTrend: {
        date: string;
        businessEvents: number;
    }[];
}, {
    tenant: {
        id: string;
        name: string;
        createdAt: string;
        slug: string;
        lastActiveAt: string | null;
        lastLoginAt: string | null;
        lastBusinessActivityAt: string | null;
        memberCount: number;
        subscription?: {
            status: "ACTIVE" | "DISABLED" | "EXPIRED";
            plan: "FREE" | "BASIC" | "PRO";
            expiresAt: string | null;
        } | null | undefined;
        totalProducts?: number | undefined;
        owner?: {
            id: string;
            name: string | null;
            phone: string | null;
            email: string;
            account: string | null;
            wechatId?: string | null | undefined;
        } | null | undefined;
        autoTags?: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[] | undefined;
    };
    autoTags: {
        key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
        description: string;
        label: string;
        tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
        priority: number;
    }[];
    usage: {
        tenantId: string;
        plan: "FREE" | "BASIC" | "PRO";
        tenantSlug: string;
        tenantName: string;
        subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
        usage: {
            images: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            products: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            shares: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                limit: number | null;
                used: number;
                utilization: number | null;
            };
            storageBytes: {
                status: "ok" | "near_limit" | "exceeded" | "unlimited";
                utilization: number | null;
                usedBytes: string;
                limitBytes: string | null;
            };
        };
        alerts: {
            message: string;
            status: "near_limit" | "exceeded";
            metric: "images" | "products" | "shares" | "storageBytes";
        }[];
        usageScore: number;
    };
    loginMetrics: {
        totalLogins: number;
        logins30d: number;
        lastLoginAt: string | null;
    };
    businessMetrics: {
        totalProducts: number;
        totalSeries: number;
        totalShares: number;
        activeDays30d: number;
        lastBusinessActivityAt: string | null;
        totalImages: number;
        uploads30d: number;
    };
    revenueMetrics: {
        paidOrderCount: number;
        paidRevenueCents: number;
        lastPaidAt: string | null;
    };
    recentBusinessLogs: {
        id: string;
        tenantId: string;
        createdAt: string;
        actorUserId: string;
        action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
        resourceType: string;
        resourceId: string | null;
        metadata?: unknown;
    }[];
    activityTrend: {
        date: string;
        businessEvents: number;
    }[];
}>;
export declare const getAdminTenantInsightsResponseSchema: z.ZodObject<{
    insights: z.ZodObject<{
        tenant: z.ZodObject<{
            id: z.ZodString;
            slug: z.ZodString;
            name: z.ZodString;
        } & {
            createdAt: z.ZodString;
            lastLoginAt: z.ZodNullable<z.ZodString>;
            lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
            lastActiveAt: z.ZodNullable<z.ZodString>;
            memberCount: z.ZodNumber;
            totalProducts: z.ZodDefault<z.ZodNumber>;
            owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                email: z.ZodEffects<z.ZodString, string, string>;
                account: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                phone: z.ZodNullable<z.ZodString>;
                wechatId: z.ZodEffects<z.ZodOptional<z.ZodNullable<z.ZodString>>, string | null, string | null | undefined>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                name: string | null;
                phone: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
            }, {
                id: string;
                name: string | null;
                phone: string | null;
                email: string;
                account: string | null;
                wechatId?: string | null | undefined;
            }>>>;
            subscription: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
                status: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
                expiresAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            }, {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            }>>>;
            autoTags: z.ZodDefault<z.ZodArray<z.ZodObject<{
                key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
                label: z.ZodString;
                description: z.ZodString;
                tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
                priority: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
                description: string;
                label: string;
                tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
                priority: number;
            }, {
                key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
                description: string;
                label: string;
                tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
                priority: number;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            createdAt: string;
            slug: string;
            lastActiveAt: string | null;
            totalProducts: number;
            lastLoginAt: string | null;
            lastBusinessActivityAt: string | null;
            memberCount: number;
            autoTags: {
                key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
                description: string;
                label: string;
                tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
                priority: number;
            }[];
            subscription?: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            } | null | undefined;
            owner?: {
                id: string;
                name: string | null;
                phone: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
            } | null | undefined;
        }, {
            id: string;
            name: string;
            createdAt: string;
            slug: string;
            lastActiveAt: string | null;
            lastLoginAt: string | null;
            lastBusinessActivityAt: string | null;
            memberCount: number;
            subscription?: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            } | null | undefined;
            totalProducts?: number | undefined;
            owner?: {
                id: string;
                name: string | null;
                phone: string | null;
                email: string;
                account: string | null;
                wechatId?: string | null | undefined;
            } | null | undefined;
            autoTags?: {
                key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
                description: string;
                label: string;
                tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
                priority: number;
            }[] | undefined;
        }>;
        autoTags: z.ZodArray<z.ZodObject<{
            key: z.ZodEnum<["high_activity", "low_activity", "silent", "expiring_soon", "frozen", "no_owner", "collaborative", "high_upload", "high_share", "high_storage"]>;
            label: z.ZodString;
            description: z.ZodString;
            tone: z.ZodEnum<["neutral", "accent", "success", "warning", "danger", "info"]>;
            priority: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }, {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }>, "many">;
        loginMetrics: z.ZodObject<{
            totalLogins: z.ZodNumber;
            logins30d: z.ZodNumber;
            lastLoginAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            totalLogins: number;
            logins30d: number;
            lastLoginAt: string | null;
        }, {
            totalLogins: number;
            logins30d: number;
            lastLoginAt: string | null;
        }>;
        businessMetrics: z.ZodObject<{
            activeDays30d: z.ZodNumber;
            lastBusinessActivityAt: z.ZodNullable<z.ZodString>;
            totalProducts: z.ZodNumber;
            totalSeries: z.ZodNumber;
            totalImages: z.ZodNumber;
            totalShares: z.ZodNumber;
            uploads30d: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
            activeDays30d: number;
            lastBusinessActivityAt: string | null;
            totalImages: number;
            uploads30d: number;
        }, {
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
            activeDays30d: number;
            lastBusinessActivityAt: string | null;
            totalImages: number;
            uploads30d: number;
        }>;
        revenueMetrics: z.ZodObject<{
            paidOrderCount: z.ZodNumber;
            paidRevenueCents: z.ZodNumber;
            lastPaidAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            paidOrderCount: number;
            paidRevenueCents: number;
            lastPaidAt: string | null;
        }, {
            paidOrderCount: number;
            paidRevenueCents: number;
            lastPaidAt: string | null;
        }>;
        usage: z.ZodObject<{
            tenantId: z.ZodString;
            tenantSlug: z.ZodString;
            tenantName: z.ZodString;
            plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
            subscriptionStatus: z.ZodEnum<["ACTIVE", "DISABLED", "EXPIRED"]>;
            usage: z.ZodObject<{
                products: z.ZodObject<{
                    used: z.ZodNumber;
                    limit: z.ZodNullable<z.ZodNumber>;
                    utilization: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                }>;
                images: z.ZodObject<{
                    used: z.ZodNumber;
                    limit: z.ZodNullable<z.ZodNumber>;
                    utilization: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                }>;
                shares: z.ZodObject<{
                    used: z.ZodNumber;
                    limit: z.ZodNullable<z.ZodNumber>;
                    utilization: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                }>;
                storageBytes: z.ZodObject<{
                    usedBytes: z.ZodString;
                    limitBytes: z.ZodNullable<z.ZodString>;
                    utilization: z.ZodNullable<z.ZodNumber>;
                    status: z.ZodEnum<["ok", "near_limit", "exceeded", "unlimited"]>;
                }, "strip", z.ZodTypeAny, {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                }, {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                }>;
            }, "strip", z.ZodTypeAny, {
                images: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                products: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                shares: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                storageBytes: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                };
            }, {
                images: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                products: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                shares: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                storageBytes: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                };
            }>;
            alerts: z.ZodArray<z.ZodObject<{
                metric: z.ZodEnum<["products", "images", "shares", "storageBytes"]>;
                status: z.ZodEnum<["near_limit", "exceeded"]>;
                message: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                message: string;
                status: "near_limit" | "exceeded";
                metric: "images" | "products" | "shares" | "storageBytes";
            }, {
                message: string;
                status: "near_limit" | "exceeded";
                metric: "images" | "products" | "shares" | "storageBytes";
            }>, "many">;
            usageScore: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            tenantId: string;
            plan: "FREE" | "BASIC" | "PRO";
            tenantSlug: string;
            tenantName: string;
            subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
            usage: {
                images: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                products: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                shares: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                storageBytes: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                };
            };
            alerts: {
                message: string;
                status: "near_limit" | "exceeded";
                metric: "images" | "products" | "shares" | "storageBytes";
            }[];
            usageScore: number;
        }, {
            tenantId: string;
            plan: "FREE" | "BASIC" | "PRO";
            tenantSlug: string;
            tenantName: string;
            subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
            usage: {
                images: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                products: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                shares: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                storageBytes: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                };
            };
            alerts: {
                message: string;
                status: "near_limit" | "exceeded";
                metric: "images" | "products" | "shares" | "storageBytes";
            }[];
            usageScore: number;
        }>;
        recentBusinessLogs: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            tenantId: z.ZodString;
            actorUserId: z.ZodString;
            action: z.ZodEnum<["product.create", "product.update", "product.delete", "product.event.create", "product.event.update", "product.event.delete", "product.image.upload", "product.image.delete", "product.image.set_main", "product.image.reorder", "product.certificate.confirm", "product.certificate.void", "product.certificate.reissue", "product.couple_photo.generate", "sale.batch.create", "sale.allocation.create", "sale.subject_media.upload", "guiquan.ledger.entry.create", "share.create", "share.access", "subscription.activation.redeem", "subscription.order.create", "subscription.payment.dialog_open", "subscription.payment.click", "subscription.payment.hesitate", "subscription.payment.cancel", "subscription.payment.success", "subscription.payment.failure", "supply.payment.failure", "auth.login"]>;
            resourceType: z.ZodString;
            resourceId: z.ZodNullable<z.ZodString>;
            metadata: z.ZodNullable<z.ZodUnknown>;
            createdAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            tenantId: string;
            createdAt: string;
            actorUserId: string;
            action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
            resourceType: string;
            resourceId: string | null;
            metadata?: unknown;
        }, {
            id: string;
            tenantId: string;
            createdAt: string;
            actorUserId: string;
            action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
            resourceType: string;
            resourceId: string | null;
            metadata?: unknown;
        }>, "many">;
        activityTrend: z.ZodArray<z.ZodObject<{
            date: z.ZodString;
            businessEvents: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            date: string;
            businessEvents: number;
        }, {
            date: string;
            businessEvents: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        tenant: {
            id: string;
            name: string;
            createdAt: string;
            slug: string;
            lastActiveAt: string | null;
            totalProducts: number;
            lastLoginAt: string | null;
            lastBusinessActivityAt: string | null;
            memberCount: number;
            autoTags: {
                key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
                description: string;
                label: string;
                tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
                priority: number;
            }[];
            subscription?: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            } | null | undefined;
            owner?: {
                id: string;
                name: string | null;
                phone: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
            } | null | undefined;
        };
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        usage: {
            tenantId: string;
            plan: "FREE" | "BASIC" | "PRO";
            tenantSlug: string;
            tenantName: string;
            subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
            usage: {
                images: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                products: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                shares: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                storageBytes: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                };
            };
            alerts: {
                message: string;
                status: "near_limit" | "exceeded";
                metric: "images" | "products" | "shares" | "storageBytes";
            }[];
            usageScore: number;
        };
        loginMetrics: {
            totalLogins: number;
            logins30d: number;
            lastLoginAt: string | null;
        };
        businessMetrics: {
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
            activeDays30d: number;
            lastBusinessActivityAt: string | null;
            totalImages: number;
            uploads30d: number;
        };
        revenueMetrics: {
            paidOrderCount: number;
            paidRevenueCents: number;
            lastPaidAt: string | null;
        };
        recentBusinessLogs: {
            id: string;
            tenantId: string;
            createdAt: string;
            actorUserId: string;
            action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
            resourceType: string;
            resourceId: string | null;
            metadata?: unknown;
        }[];
        activityTrend: {
            date: string;
            businessEvents: number;
        }[];
    }, {
        tenant: {
            id: string;
            name: string;
            createdAt: string;
            slug: string;
            lastActiveAt: string | null;
            lastLoginAt: string | null;
            lastBusinessActivityAt: string | null;
            memberCount: number;
            subscription?: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            } | null | undefined;
            totalProducts?: number | undefined;
            owner?: {
                id: string;
                name: string | null;
                phone: string | null;
                email: string;
                account: string | null;
                wechatId?: string | null | undefined;
            } | null | undefined;
            autoTags?: {
                key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
                description: string;
                label: string;
                tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
                priority: number;
            }[] | undefined;
        };
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        usage: {
            tenantId: string;
            plan: "FREE" | "BASIC" | "PRO";
            tenantSlug: string;
            tenantName: string;
            subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
            usage: {
                images: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                products: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                shares: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                storageBytes: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                };
            };
            alerts: {
                message: string;
                status: "near_limit" | "exceeded";
                metric: "images" | "products" | "shares" | "storageBytes";
            }[];
            usageScore: number;
        };
        loginMetrics: {
            totalLogins: number;
            logins30d: number;
            lastLoginAt: string | null;
        };
        businessMetrics: {
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
            activeDays30d: number;
            lastBusinessActivityAt: string | null;
            totalImages: number;
            uploads30d: number;
        };
        revenueMetrics: {
            paidOrderCount: number;
            paidRevenueCents: number;
            lastPaidAt: string | null;
        };
        recentBusinessLogs: {
            id: string;
            tenantId: string;
            createdAt: string;
            actorUserId: string;
            action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
            resourceType: string;
            resourceId: string | null;
            metadata?: unknown;
        }[];
        activityTrend: {
            date: string;
            businessEvents: number;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    insights: {
        tenant: {
            id: string;
            name: string;
            createdAt: string;
            slug: string;
            lastActiveAt: string | null;
            totalProducts: number;
            lastLoginAt: string | null;
            lastBusinessActivityAt: string | null;
            memberCount: number;
            autoTags: {
                key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
                description: string;
                label: string;
                tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
                priority: number;
            }[];
            subscription?: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            } | null | undefined;
            owner?: {
                id: string;
                name: string | null;
                phone: string | null;
                email: string;
                account: string | null;
                wechatId: string | null;
            } | null | undefined;
        };
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        usage: {
            tenantId: string;
            plan: "FREE" | "BASIC" | "PRO";
            tenantSlug: string;
            tenantName: string;
            subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
            usage: {
                images: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                products: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                shares: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                storageBytes: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                };
            };
            alerts: {
                message: string;
                status: "near_limit" | "exceeded";
                metric: "images" | "products" | "shares" | "storageBytes";
            }[];
            usageScore: number;
        };
        loginMetrics: {
            totalLogins: number;
            logins30d: number;
            lastLoginAt: string | null;
        };
        businessMetrics: {
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
            activeDays30d: number;
            lastBusinessActivityAt: string | null;
            totalImages: number;
            uploads30d: number;
        };
        revenueMetrics: {
            paidOrderCount: number;
            paidRevenueCents: number;
            lastPaidAt: string | null;
        };
        recentBusinessLogs: {
            id: string;
            tenantId: string;
            createdAt: string;
            actorUserId: string;
            action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
            resourceType: string;
            resourceId: string | null;
            metadata?: unknown;
        }[];
        activityTrend: {
            date: string;
            businessEvents: number;
        }[];
    };
}, {
    insights: {
        tenant: {
            id: string;
            name: string;
            createdAt: string;
            slug: string;
            lastActiveAt: string | null;
            lastLoginAt: string | null;
            lastBusinessActivityAt: string | null;
            memberCount: number;
            subscription?: {
                status: "ACTIVE" | "DISABLED" | "EXPIRED";
                plan: "FREE" | "BASIC" | "PRO";
                expiresAt: string | null;
            } | null | undefined;
            totalProducts?: number | undefined;
            owner?: {
                id: string;
                name: string | null;
                phone: string | null;
                email: string;
                account: string | null;
                wechatId?: string | null | undefined;
            } | null | undefined;
            autoTags?: {
                key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
                description: string;
                label: string;
                tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
                priority: number;
            }[] | undefined;
        };
        autoTags: {
            key: "high_activity" | "low_activity" | "silent" | "expiring_soon" | "frozen" | "no_owner" | "collaborative" | "high_upload" | "high_share" | "high_storage";
            description: string;
            label: string;
            tone: "accent" | "warning" | "success" | "neutral" | "danger" | "info";
            priority: number;
        }[];
        usage: {
            tenantId: string;
            plan: "FREE" | "BASIC" | "PRO";
            tenantSlug: string;
            tenantName: string;
            subscriptionStatus: "ACTIVE" | "DISABLED" | "EXPIRED";
            usage: {
                images: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                products: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                shares: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    limit: number | null;
                    used: number;
                    utilization: number | null;
                };
                storageBytes: {
                    status: "ok" | "near_limit" | "exceeded" | "unlimited";
                    utilization: number | null;
                    usedBytes: string;
                    limitBytes: string | null;
                };
            };
            alerts: {
                message: string;
                status: "near_limit" | "exceeded";
                metric: "images" | "products" | "shares" | "storageBytes";
            }[];
            usageScore: number;
        };
        loginMetrics: {
            totalLogins: number;
            logins30d: number;
            lastLoginAt: string | null;
        };
        businessMetrics: {
            totalProducts: number;
            totalSeries: number;
            totalShares: number;
            activeDays30d: number;
            lastBusinessActivityAt: string | null;
            totalImages: number;
            uploads30d: number;
        };
        revenueMetrics: {
            paidOrderCount: number;
            paidRevenueCents: number;
            lastPaidAt: string | null;
        };
        recentBusinessLogs: {
            id: string;
            tenantId: string;
            createdAt: string;
            actorUserId: string;
            action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
            resourceType: string;
            resourceId: string | null;
            metadata?: unknown;
        }[];
        activityTrend: {
            date: string;
            businessEvents: number;
        }[];
    };
}>;
export declare const adminRevenueOverviewWindowSchema: z.ZodEnum<["30d", "90d"]>;
export declare const getAdminRevenueOverviewQuerySchema: z.ZodObject<{
    window: z.ZodDefault<z.ZodEnum<["30d", "90d"]>>;
}, "strip", z.ZodTypeAny, {
    window: "30d" | "90d";
}, {
    window?: "30d" | "90d" | undefined;
}>;
export declare const adminRevenueOverviewResponseSchema: z.ZodObject<{
    generatedAt: z.ZodString;
    window: z.ZodEnum<["30d", "90d"]>;
    kpis: z.ZodObject<{
        activeSubscriptionTenantCount: z.ZodNumber;
        payingTenantCount: z.ZodNumber;
        paidOrderCount: z.ZodNumber;
        paidRevenueCents: z.ZodNumber;
        upgradeEvents: z.ZodNumber;
        downgradeEvents: z.ZodNumber;
        churnEvents: z.ZodNumber;
        reactivationEvents: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        paidOrderCount: number;
        paidRevenueCents: number;
        activeSubscriptionTenantCount: number;
        payingTenantCount: number;
        upgradeEvents: number;
        downgradeEvents: number;
        churnEvents: number;
        reactivationEvents: number;
    }, {
        paidOrderCount: number;
        paidRevenueCents: number;
        activeSubscriptionTenantCount: number;
        payingTenantCount: number;
        upgradeEvents: number;
        downgradeEvents: number;
        churnEvents: number;
        reactivationEvents: number;
    }>;
    planBreakdown: z.ZodArray<z.ZodObject<{
        plan: z.ZodEnum<["FREE", "BASIC", "PRO"]>;
        payingTenantCount: z.ZodNumber;
        paidOrderCount: z.ZodNumber;
        paidRevenueCents: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        plan: "FREE" | "BASIC" | "PRO";
        paidOrderCount: number;
        paidRevenueCents: number;
        payingTenantCount: number;
    }, {
        plan: "FREE" | "BASIC" | "PRO";
        paidOrderCount: number;
        paidRevenueCents: number;
        payingTenantCount: number;
    }>, "many">;
    trend: z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        upgrades: z.ZodNumber;
        downgrades: z.ZodNumber;
        churns: z.ZodNumber;
        reactivations: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: string;
        upgrades: number;
        downgrades: number;
        churns: number;
        reactivations: number;
    }, {
        date: string;
        upgrades: number;
        downgrades: number;
        churns: number;
        reactivations: number;
    }>, "many">;
    priceBookMonthlyCents: z.ZodObject<{
        FREE: z.ZodNumber;
        BASIC: z.ZodNumber;
        PRO: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        FREE: number;
        BASIC: number;
        PRO: number;
    }, {
        FREE: number;
        BASIC: number;
        PRO: number;
    }>;
    definitions: z.ZodObject<{
        paidRevenue: z.ZodString;
        paidOrders: z.ZodString;
        payingTenants: z.ZodString;
        activeSubscriptions: z.ZodString;
        trend: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        trend: string;
        paidRevenue: string;
        paidOrders: string;
        payingTenants: string;
        activeSubscriptions: string;
    }, {
        trend: string;
        paidRevenue: string;
        paidOrders: string;
        payingTenants: string;
        activeSubscriptions: string;
    }>;
}, "strip", z.ZodTypeAny, {
    generatedAt: string;
    window: "30d" | "90d";
    trend: {
        date: string;
        upgrades: number;
        downgrades: number;
        churns: number;
        reactivations: number;
    }[];
    kpis: {
        paidOrderCount: number;
        paidRevenueCents: number;
        activeSubscriptionTenantCount: number;
        payingTenantCount: number;
        upgradeEvents: number;
        downgradeEvents: number;
        churnEvents: number;
        reactivationEvents: number;
    };
    definitions: {
        trend: string;
        paidRevenue: string;
        paidOrders: string;
        payingTenants: string;
        activeSubscriptions: string;
    };
    planBreakdown: {
        plan: "FREE" | "BASIC" | "PRO";
        paidOrderCount: number;
        paidRevenueCents: number;
        payingTenantCount: number;
    }[];
    priceBookMonthlyCents: {
        FREE: number;
        BASIC: number;
        PRO: number;
    };
}, {
    generatedAt: string;
    window: "30d" | "90d";
    trend: {
        date: string;
        upgrades: number;
        downgrades: number;
        churns: number;
        reactivations: number;
    }[];
    kpis: {
        paidOrderCount: number;
        paidRevenueCents: number;
        activeSubscriptionTenantCount: number;
        payingTenantCount: number;
        upgradeEvents: number;
        downgradeEvents: number;
        churnEvents: number;
        reactivationEvents: number;
    };
    definitions: {
        trend: string;
        paidRevenue: string;
        paidOrders: string;
        payingTenants: string;
        activeSubscriptions: string;
    };
    planBreakdown: {
        plan: "FREE" | "BASIC" | "PRO";
        paidOrderCount: number;
        paidRevenueCents: number;
        payingTenantCount: number;
    }[];
    priceBookMonthlyCents: {
        FREE: number;
        BASIC: number;
        PRO: number;
    };
}>;
export type SuperAdminAuditActionType = (typeof SuperAdminAuditAction)[keyof typeof SuperAdminAuditAction];
export type AdminUser = z.infer<typeof adminUserSchema>;
export type AdminUserOwnedTenant = z.infer<typeof adminUserOwnedTenantSchema>;
export type AdminUserMetrics = z.infer<typeof adminUserMetricsSchema>;
export type AdminUserDetail = z.infer<typeof adminUserDetailSchema>;
export type AdminTenantOwner = z.infer<typeof adminTenantOwnerSchema>;
export type AdminTenantSubscriptionSummary = z.infer<typeof adminTenantSubscriptionSummarySchema>;
export type AdminTenantAutoTagKey = z.infer<typeof adminTenantAutoTagKeySchema>;
export type AdminTenantAutoTagTone = z.infer<typeof adminTenantAutoTagToneSchema>;
export type AdminTenantAutoTag = z.infer<typeof adminTenantAutoTagSchema>;
export type AdminTenantLoginMetrics = z.infer<typeof adminTenantLoginMetricsSchema>;
export type AdminTenantBusinessMetrics = z.infer<typeof adminTenantBusinessMetricsSchema>;
export type AdminTenant = z.infer<typeof adminTenantSchema>;
export type ListAdminTenantsQuery = z.infer<typeof listAdminTenantsQuerySchema>;
export type ListAdminUsersQuery = z.infer<typeof listAdminUsersQuerySchema>;
export type CreateAdminTenantObserveSessionRequest = z.infer<typeof createAdminTenantObserveSessionRequestSchema>;
export type CreateAdminTenantObserveSessionResponse = z.infer<typeof createAdminTenantObserveSessionResponseSchema>;
export type CreateAdminTenantRequest = z.infer<typeof createAdminTenantRequestSchema>;
export type CreateAdminTenantResponse = z.infer<typeof createAdminTenantResponseSchema>;
export type UpdateAdminTenantRequest = z.infer<typeof updateAdminTenantRequestSchema>;
export type UpdateAdminTenantResponse = z.infer<typeof updateAdminTenantResponseSchema>;
export type SuspendAdminTenantRequest = z.infer<typeof suspendAdminTenantRequestSchema>;
export type SuspendAdminTenantResponse = z.infer<typeof suspendAdminTenantResponseSchema>;
export type ReactivateAdminTenantResponse = z.infer<typeof reactivateAdminTenantResponseSchema>;
export type OffboardAdminTenantRequest = z.infer<typeof offboardAdminTenantRequestSchema>;
export type OffboardAdminTenantResponse = z.infer<typeof offboardAdminTenantResponseSchema>;
export type GetAdminTenantResponse = z.infer<typeof getAdminTenantResponseSchema>;
export type GetAdminUserResponse = z.infer<typeof getAdminUserResponseSchema>;
export type GetAdminTenantInsightsResponse = z.infer<typeof getAdminTenantInsightsResponseSchema>;
export type ListAdminTenantsResponse = z.infer<typeof listAdminTenantsResponseSchema>;
export type ListAdminUsersResponse = z.infer<typeof listAdminUsersResponseSchema>;
export type UpdateAdminUserRequest = z.infer<typeof updateAdminUserRequestSchema>;
export type UpdateAdminUserResponse = z.infer<typeof updateAdminUserResponseSchema>;
export type DeleteAdminTenantRequest = z.infer<typeof deleteAdminTenantRequestSchema>;
export type DeleteAdminTenantResponse = z.infer<typeof deleteAdminTenantResponseSchema>;
export type DeleteAdminUserRequest = z.infer<typeof deleteAdminUserRequestSchema>;
export type DeleteAdminUserResponse = z.infer<typeof deleteAdminUserResponseSchema>;
export type AdminTenantMember = z.infer<typeof adminTenantMemberSchema>;
export type ListAdminTenantMembersQuery = z.infer<typeof listAdminTenantMembersQuerySchema>;
export type ListAdminTenantMembersResponse = z.infer<typeof listAdminTenantMembersResponseSchema>;
export type UpsertTenantMemberRequest = z.infer<typeof upsertTenantMemberRequestSchema>;
export type UpsertTenantMemberResponse = z.infer<typeof upsertTenantMemberResponseSchema>;
export type DeleteTenantMemberResponse = z.infer<typeof deleteTenantMemberResponseSchema>;
export type AdminTenantLivestockRiskTag = z.infer<typeof adminTenantLivestockRiskTagSchema>;
export type AdminTenantLivestockStatus = z.infer<typeof adminTenantLivestockStatusSchema>;
export type AdminTenantLivestockSeriesOption = z.infer<typeof adminTenantLivestockSeriesOptionSchema>;
export type AdminTenantLivestockOverviewResponse = z.infer<typeof adminTenantLivestockOverviewResponseSchema>;
export type ListAdminTenantLivestockProductsQuery = z.infer<typeof listAdminTenantLivestockProductsQuerySchema>;
export type AdminTenantLivestockListItem = z.infer<typeof adminTenantLivestockListItemSchema>;
export type ListAdminTenantLivestockProductsResponse = z.infer<typeof listAdminTenantLivestockProductsResponseSchema>;
export type AdminTenantLivestockDetailResponse = z.infer<typeof adminTenantLivestockDetailResponseSchema>;
export type SuperAdminAuditLog = z.infer<typeof superAdminAuditLogSchema>;
export type ListSuperAdminAuditLogsQuery = z.infer<typeof listSuperAdminAuditLogsQuerySchema>;
export type ListSuperAdminAuditLogsResponse = z.infer<typeof listSuperAdminAuditLogsResponseSchema>;
export type ExportSuperAdminAuditLogsQuery = z.infer<typeof exportSuperAdminAuditLogsQuerySchema>;
export type AdminActivityOverviewWindow = z.infer<typeof adminActivityOverviewWindowSchema>;
export type GetAdminActivityOverviewQuery = z.infer<typeof getAdminActivityOverviewQuerySchema>;
export type AdminActivityOverviewResponse = z.infer<typeof adminActivityOverviewResponseSchema>;
export type AdminUsageLimitStatus = z.infer<typeof adminUsageLimitStatusSchema>;
export type AdminUsageMetricKey = z.infer<typeof adminUsageMetricKeySchema>;
export type AdminUsageCountMetric = z.infer<typeof adminUsageCountMetricSchema>;
export type AdminUsageStorageMetric = z.infer<typeof adminUsageStorageMetricSchema>;
export type AdminTenantUsageAlert = z.infer<typeof adminTenantUsageAlertSchema>;
export type AdminTenantUsage = z.infer<typeof adminTenantUsageSchema>;
export type AdminTenantInsights = z.infer<typeof adminTenantInsightsSchema>;
export type GetAdminUsageOverviewQuery = z.infer<typeof getAdminUsageOverviewQuerySchema>;
export type AdminUsageOverviewResponse = z.infer<typeof adminUsageOverviewResponseSchema>;
export type GetAdminTenantUsageResponse = z.infer<typeof getAdminTenantUsageResponseSchema>;
export type AdminRevenueOverviewWindow = z.infer<typeof adminRevenueOverviewWindowSchema>;
export type GetAdminRevenueOverviewQuery = z.infer<typeof getAdminRevenueOverviewQuerySchema>;
export type AdminRevenueOverviewResponse = z.infer<typeof adminRevenueOverviewResponseSchema>;
