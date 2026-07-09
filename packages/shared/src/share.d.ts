import { z } from 'zod';
export declare const DEFAULT_TENANT_SHARE_AVATAR_PRESET: "forest";
export declare const DEFAULT_TENANT_SHARE_BRAND_PRIMARY = "#86EFAC";
export declare const DEFAULT_TENANT_SHARE_BRAND_SECONDARY = "#166534";
export declare const tenantShareAvatarPresetSchema: z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>;
export declare const tenantSharePresentationSchema: z.ZodObject<{
    feedTitle: z.ZodNullable<z.ZodString>;
    feedSubtitle: z.ZodNullable<z.ZodString>;
    avatarPreset: z.ZodNullable<z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>>;
    brandPrimary: z.ZodNullable<z.ZodString>;
    brandSecondary: z.ZodNullable<z.ZodString>;
    heroImages: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    shareCardImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    showWechatBlock: z.ZodBoolean;
    wechatQrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    wechatId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    wechatId: string | null;
    feedTitle: string | null;
    feedSubtitle: string | null;
    avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
    brandPrimary: string | null;
    brandSecondary: string | null;
    heroImages: string[];
    shareCardImageUrl: string | null;
    showWechatBlock: boolean;
    wechatQrImageUrl: string | null;
}, {
    wechatId: string | null;
    feedTitle: string | null;
    feedSubtitle: string | null;
    avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
    brandPrimary: string | null;
    brandSecondary: string | null;
    heroImages: string[];
    shareCardImageUrl: string | null;
    showWechatBlock: boolean;
    wechatQrImageUrl: string | null;
}>;
export declare const sharePresentationOverrideSchema: z.ZodObject<{
    feedTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    feedSubtitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    avatarPreset: z.ZodOptional<z.ZodNullable<z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>>>;
    brandPrimary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    brandSecondary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    heroImages: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    shareCardImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
    showWechatBlock: z.ZodOptional<z.ZodBoolean>;
    wechatQrImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
    wechatId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    wechatId?: string | null | undefined;
    feedTitle?: string | null | undefined;
    feedSubtitle?: string | null | undefined;
    avatarPreset?: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null | undefined;
    brandPrimary?: string | null | undefined;
    brandSecondary?: string | null | undefined;
    heroImages?: string[] | undefined;
    shareCardImageUrl?: string | null | undefined;
    showWechatBlock?: boolean | undefined;
    wechatQrImageUrl?: string | null | undefined;
}, {
    wechatId?: string | null | undefined;
    feedTitle?: string | null | undefined;
    feedSubtitle?: string | null | undefined;
    avatarPreset?: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null | undefined;
    brandPrimary?: string | null | undefined;
    brandSecondary?: string | null | undefined;
    heroImages?: string[] | undefined;
    shareCardImageUrl?: string | null | undefined;
    showWechatBlock?: boolean | undefined;
    wechatQrImageUrl?: string | null | undefined;
}>;
export declare const publicSharePresentationSchema: z.ZodObject<{
    feedTitle: z.ZodString;
    feedSubtitle: z.ZodString;
    identity: z.ZodObject<{
        avatarPreset: z.ZodNullable<z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>>;
        avatarUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        avatarUrl: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
    }, {
        avatarUrl: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
    }>;
    theme: z.ZodObject<{
        brandPrimary: z.ZodString;
        brandSecondary: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        brandPrimary: string;
        brandSecondary: string;
    }, {
        brandPrimary: string;
        brandSecondary: string;
    }>;
    hero: z.ZodObject<{
        images: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }, "strip", z.ZodTypeAny, {
        images: string[];
    }, {
        images: string[];
    }>;
    shareCardImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    contact: z.ZodObject<{
        showWechatBlock: z.ZodBoolean;
        wechatQrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        wechatId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        wechatId: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    }, {
        wechatId: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    identity: {
        avatarUrl: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
    };
    feedTitle: string;
    feedSubtitle: string;
    shareCardImageUrl: string | null;
    theme: {
        brandPrimary: string;
        brandSecondary: string;
    };
    hero: {
        images: string[];
    };
    contact: {
        wechatId: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    };
}, {
    identity: {
        avatarUrl: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
    };
    feedTitle: string;
    feedSubtitle: string;
    shareCardImageUrl: string | null;
    theme: {
        brandPrimary: string;
        brandSecondary: string;
    };
    hero: {
        images: string[];
    };
    contact: {
        wechatId: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    };
}>;
export declare const getTenantSharePresentationResponseSchema: z.ZodObject<{
    presentation: z.ZodObject<{
        feedTitle: z.ZodNullable<z.ZodString>;
        feedSubtitle: z.ZodNullable<z.ZodString>;
        avatarPreset: z.ZodNullable<z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>>;
        brandPrimary: z.ZodNullable<z.ZodString>;
        brandSecondary: z.ZodNullable<z.ZodString>;
        heroImages: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        shareCardImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        showWechatBlock: z.ZodBoolean;
        wechatQrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        wechatId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    }, {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    }>;
    shareAvatarUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    presentation: {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    };
    shareAvatarUrl: string | null;
}, {
    presentation: {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    };
    shareAvatarUrl: string | null;
}>;
export declare const updateTenantSharePresentationRequestSchema: z.ZodObject<{
    presentation: z.ZodObject<{
        feedTitle: z.ZodNullable<z.ZodString>;
        feedSubtitle: z.ZodNullable<z.ZodString>;
        avatarPreset: z.ZodNullable<z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>>;
        brandPrimary: z.ZodNullable<z.ZodString>;
        brandSecondary: z.ZodNullable<z.ZodString>;
        heroImages: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        shareCardImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        showWechatBlock: z.ZodBoolean;
        wechatQrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        wechatId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    }, {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    presentation: {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    };
}, {
    presentation: {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    };
}>;
export declare const updateTenantSharePresentationResponseSchema: z.ZodObject<{
    presentation: z.ZodObject<{
        feedTitle: z.ZodNullable<z.ZodString>;
        feedSubtitle: z.ZodNullable<z.ZodString>;
        avatarPreset: z.ZodNullable<z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>>;
        brandPrimary: z.ZodNullable<z.ZodString>;
        brandSecondary: z.ZodNullable<z.ZodString>;
        heroImages: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        shareCardImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        showWechatBlock: z.ZodBoolean;
        wechatQrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        wechatId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    }, {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    presentation: {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    };
}, {
    presentation: {
        wechatId: string | null;
        feedTitle: string | null;
        feedSubtitle: string | null;
        avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        brandPrimary: string | null;
        brandSecondary: string | null;
        heroImages: string[];
        shareCardImageUrl: string | null;
        showWechatBlock: boolean;
        wechatQrImageUrl: string | null;
    };
}>;
export declare const uploadTenantSharePresentationImageResponseSchema: z.ZodObject<{
    asset: z.ZodObject<{
        key: z.ZodString;
        url: z.ZodEffects<z.ZodString, string, string>;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    }, {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    }>;
}, "strip", z.ZodTypeAny, {
    asset: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    };
}, {
    asset: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    };
}>;
export declare const shareResourceTypeSchema: z.ZodEnum<["tenant_feed"]>;
export declare const createShareRequestSchema: z.ZodObject<{
    resourceType: z.ZodEnum<["tenant_feed"]>;
    resourceId: z.ZodString;
    presentationOverride: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        feedTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        feedSubtitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        avatarPreset: z.ZodOptional<z.ZodNullable<z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>>>;
        brandPrimary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        brandSecondary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        heroImages: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        shareCardImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        showWechatBlock: z.ZodOptional<z.ZodBoolean>;
        wechatQrImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        wechatId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        wechatId?: string | null | undefined;
        feedTitle?: string | null | undefined;
        feedSubtitle?: string | null | undefined;
        avatarPreset?: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null | undefined;
        brandPrimary?: string | null | undefined;
        brandSecondary?: string | null | undefined;
        heroImages?: string[] | undefined;
        shareCardImageUrl?: string | null | undefined;
        showWechatBlock?: boolean | undefined;
        wechatQrImageUrl?: string | null | undefined;
    }, {
        wechatId?: string | null | undefined;
        feedTitle?: string | null | undefined;
        feedSubtitle?: string | null | undefined;
        avatarPreset?: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null | undefined;
        brandPrimary?: string | null | undefined;
        brandSecondary?: string | null | undefined;
        heroImages?: string[] | undefined;
        shareCardImageUrl?: string | null | undefined;
        showWechatBlock?: boolean | undefined;
        wechatQrImageUrl?: string | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    resourceType: "tenant_feed";
    resourceId: string;
    presentationOverride?: {
        wechatId?: string | null | undefined;
        feedTitle?: string | null | undefined;
        feedSubtitle?: string | null | undefined;
        avatarPreset?: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null | undefined;
        brandPrimary?: string | null | undefined;
        brandSecondary?: string | null | undefined;
        heroImages?: string[] | undefined;
        shareCardImageUrl?: string | null | undefined;
        showWechatBlock?: boolean | undefined;
        wechatQrImageUrl?: string | null | undefined;
    } | null | undefined;
}, {
    resourceType: "tenant_feed";
    resourceId: string;
    presentationOverride?: {
        wechatId?: string | null | undefined;
        feedTitle?: string | null | undefined;
        feedSubtitle?: string | null | undefined;
        avatarPreset?: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null | undefined;
        brandPrimary?: string | null | undefined;
        brandSecondary?: string | null | undefined;
        heroImages?: string[] | undefined;
        shareCardImageUrl?: string | null | undefined;
        showWechatBlock?: boolean | undefined;
        wechatQrImageUrl?: string | null | undefined;
    } | null | undefined;
}>;
export declare const shareSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    resourceType: z.ZodEnum<["tenant_feed"]>;
    resourceId: z.ZodString;
    shareToken: z.ZodString;
    entryUrl: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    shareToken: string;
    resourceType: "tenant_feed";
    resourceId: string;
    entryUrl: string;
}, {
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    shareToken: string;
    resourceType: "tenant_feed";
    resourceId: string;
    entryUrl: string;
}>;
export declare const createShareResponseSchema: z.ZodObject<{
    share: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        resourceType: z.ZodEnum<["tenant_feed"]>;
        resourceId: z.ZodString;
        shareToken: z.ZodString;
        entryUrl: z.ZodString;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        shareToken: string;
        resourceType: "tenant_feed";
        resourceId: string;
        entryUrl: string;
    }, {
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        shareToken: string;
        resourceType: "tenant_feed";
        resourceId: string;
        entryUrl: string;
    }>;
}, "strip", z.ZodTypeAny, {
    share: {
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        shareToken: string;
        resourceType: "tenant_feed";
        resourceId: string;
        entryUrl: string;
    };
}, {
    share: {
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        shareToken: string;
        resourceType: "tenant_feed";
        resourceId: string;
        entryUrl: string;
    };
}>;
export declare const publicShareQuerySchema: z.ZodObject<{
    tenantId: z.ZodString;
    resourceType: z.ZodEnum<["tenant_feed"]>;
    resourceId: z.ZodString;
    productId: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
    exp: z.ZodString;
    sig: z.ZodString;
    maxEdge: z.ZodOptional<z.ZodEffects<z.ZodNumber, 320 | 480 | 960, number>>;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    resourceType: "tenant_feed";
    resourceId: string;
    exp: string;
    sig: string;
    productId?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
    maxEdge?: 320 | 480 | 960 | undefined;
}, {
    tenantId: string;
    resourceType: "tenant_feed";
    resourceId: string;
    exp: string;
    sig: string;
    productId?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
    maxEdge?: number | undefined;
}>;
export declare const publicShareByTokenQuerySchema: z.ZodObject<{
    productId: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
}, "strip", z.ZodTypeAny, {
    productId?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
}, {
    productId?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
}>;
export declare const publicMiniappUrlLinkByTokenQuerySchema: z.ZodObject<{
    productId: z.ZodOptional<z.ZodString>;
    tab: z.ZodOptional<z.ZodEnum<["series", "features"]>>;
    src: z.ZodOptional<z.ZodString>;
    series: z.ZodOptional<z.ZodString>;
    event: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
    from: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    event?: string | undefined;
    productId?: string | undefined;
    series?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
    tab?: "series" | "features" | undefined;
    src?: string | undefined;
    from?: string | undefined;
}, {
    event?: string | undefined;
    productId?: string | undefined;
    series?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
    tab?: "series" | "features" | undefined;
    src?: string | undefined;
    from?: string | undefined;
}>;
export declare const publicShareQrCodeByTokenQuerySchema: z.ZodObject<{
    productId: z.ZodOptional<z.ZodString>;
    tab: z.ZodOptional<z.ZodEnum<["series", "features"]>>;
    src: z.ZodOptional<z.ZodString>;
    series: z.ZodOptional<z.ZodString>;
    event: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
    from: z.ZodOptional<z.ZodString>;
} & {
    size: z.ZodOptional<z.ZodEffects<z.ZodNumber, 320 | 480 | 640, number>>;
}, "strip", z.ZodTypeAny, {
    event?: string | undefined;
    productId?: string | undefined;
    series?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
    tab?: "series" | "features" | undefined;
    src?: string | undefined;
    from?: string | undefined;
    size?: 320 | 480 | 640 | undefined;
}, {
    event?: string | undefined;
    productId?: string | undefined;
    series?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
    tab?: "series" | "features" | undefined;
    src?: string | undefined;
    from?: string | undefined;
    size?: number | undefined;
}>;
export declare const publicMiniappUrlLinkResponseSchema: z.ZodObject<{
    url: z.ZodString;
    mode: z.ZodEnum<["miniapp_url_link", "web_fallback"]>;
}, "strip", z.ZodTypeAny, {
    url: string;
    mode: "miniapp_url_link" | "web_fallback";
}, {
    url: string;
    mode: "miniapp_url_link" | "web_fallback";
}>;
export declare const publicShareTenantSchema: z.ZodObject<{
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
export declare const publicShareFeedItemSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    alias: z.ZodNullable<z.ZodString>;
    code: z.ZodNullable<z.ZodString>;
    type: z.ZodString;
    lineageType: z.ZodEnum<["pure", "hybrid"]>;
    crossLabel: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    seriesId: z.ZodNullable<z.ZodString>;
    seriesSortOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    seriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seriesDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sex: z.ZodNullable<z.ZodString>;
    sireProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    damProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
    needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
    lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    offspringUnitPrice: z.ZodNullable<z.ZodNumber>;
    coverImageUrl: z.ZodNullable<z.ZodString>;
    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
    popularityScore: z.ZodNumber;
    isFeatured: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    code: string | null;
    type: string;
    id: string;
    coverImageUrl: string | null;
    alias: string | null;
    name: string | null;
    sex: string | null;
    tenantId: string;
    isFeatured: boolean;
    description: string | null;
    lineageType: "pure" | "hybrid";
    crossLabel: string | null;
    seriesId: string | null;
    offspringUnitPrice: number | null;
    popularityScore: number;
    seriesName?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    requiresIdentityReview?: boolean | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    lastEggAt?: string | null | undefined;
    lastMatingAt?: string | null | undefined;
    daysSinceEgg?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    publicUrl?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
    seriesSortOrder?: number | null | undefined;
    seriesDescription?: string | null | undefined;
}, {
    code: string | null;
    type: string;
    id: string;
    coverImageUrl: string | null;
    alias: string | null;
    name: string | null;
    sex: string | null;
    tenantId: string;
    isFeatured: boolean;
    description: string | null;
    lineageType: "pure" | "hybrid";
    crossLabel: string | null;
    seriesId: string | null;
    offspringUnitPrice: number | null;
    popularityScore: number;
    seriesName?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    requiresIdentityReview?: boolean | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    lastEggAt?: string | null | undefined;
    lastMatingAt?: string | null | undefined;
    daysSinceEgg?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    publicUrl?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
    seriesSortOrder?: number | null | undefined;
    seriesDescription?: string | null | undefined;
}>;
export declare const publicShareProductSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    identityRank: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    alias: z.ZodNullable<z.ZodString>;
    code: z.ZodNullable<z.ZodString>;
    type: z.ZodEnum<["breeder", "offspring"]>;
    lineageType: z.ZodEnum<["pure", "hybrid"]>;
    crossLabel: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sireProductId: z.ZodNullable<z.ZodString>;
    damProductId: z.ZodNullable<z.ZodString>;
    mateProductId: z.ZodNullable<z.ZodString>;
    requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
    needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
    lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    offspringUnitPrice: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodNumber>, number | null, unknown>>;
    excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
    hasSample: z.ZodOptional<z.ZodBoolean>;
    inStock: z.ZodOptional<z.ZodBoolean>;
    popularityScore: z.ZodOptional<z.ZodNumber>;
    isFeatured: z.ZodOptional<z.ZodBoolean>;
    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
} & {
    seriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seriesDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    images: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        key: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodString;
        sortOrder: z.ZodNumber;
        isMain: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    code: string | null;
    type: "breeder" | "offspring";
    id: string;
    alias: string | null;
    name: string | null;
    tenantId: string;
    description: string | null;
    images: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }[];
    lineageType: "pure" | "hybrid";
    crossLabel: string | null;
    sireProductId: string | null;
    damProductId: string | null;
    mateProductId: string | null;
    coverImageUrl?: string | null | undefined;
    sex?: string | null | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    isFeatured?: boolean | undefined;
    seriesName?: string | null | undefined;
    identityRank?: number | null | undefined;
    seriesId?: string | null | undefined;
    requiresIdentityReview?: boolean | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    lastEggAt?: string | null | undefined;
    lastMatingAt?: string | null | undefined;
    daysSinceEgg?: number | null | undefined;
    offspringUnitPrice?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    seriesDescription?: string | null | undefined;
}, {
    code: string | null;
    type: "breeder" | "offspring";
    id: string;
    alias: string | null;
    name: string | null;
    tenantId: string;
    description: string | null;
    images: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }[];
    lineageType: "pure" | "hybrid";
    crossLabel: string | null;
    sireProductId: string | null;
    damProductId: string | null;
    mateProductId: string | null;
    coverImageUrl?: string | null | undefined;
    sex?: string | null | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    isFeatured?: boolean | undefined;
    seriesName?: string | null | undefined;
    identityRank?: number | null | undefined;
    seriesId?: string | null | undefined;
    requiresIdentityReview?: boolean | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    lastEggAt?: string | null | undefined;
    lastMatingAt?: string | null | undefined;
    daysSinceEgg?: number | null | undefined;
    offspringUnitPrice?: unknown;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    seriesDescription?: string | null | undefined;
}>;
export declare const publicShareDetailEventTypeSchema: z.ZodString;
export declare const publicShareDetailEventImageSchema: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export declare const publicShareDetailEventSchema: z.ZodObject<{
    id: z.ZodString;
    eventType: z.ZodString;
    eventDate: z.ZodNullable<z.ZodString>;
    maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    images: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
    }, {
        url: string;
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    images: {
        url: string;
    }[];
    eventDate: string | null;
    eventType: string;
    note?: string | null | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}, {
    id: string;
    eventDate: string | null;
    eventType: string;
    note?: string | null | undefined;
    images?: {
        url: string;
    }[] | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}>;
export declare const publicShareMateLoadStatusSchema: z.ZodEnum<["normal", "need_mating", "warning"]>;
export declare const publicShareMateLoadItemSchema: z.ZodObject<{
    femaleId: z.ZodString;
    femaleCode: z.ZodString;
    femaleMainImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    femaleThumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastEggAt: z.ZodNullable<z.ZodString>;
    lastMatingWithThisMaleAt: z.ZodNullable<z.ZodString>;
    daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    status: z.ZodEnum<["normal", "need_mating", "warning"]>;
    excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    status: "warning" | "normal" | "need_mating";
    femaleCode: string;
    lastEggAt: string | null;
    femaleId: string;
    lastMatingWithThisMaleAt: string | null;
    daysSinceEgg?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    femaleMainImageUrl?: string | null | undefined;
    femaleThumbnailUrl?: string | null | undefined;
}, {
    status: "warning" | "normal" | "need_mating";
    femaleCode: string;
    lastEggAt: string | null;
    femaleId: string;
    lastMatingWithThisMaleAt: string | null;
    daysSinceEgg?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    femaleMainImageUrl?: string | null | undefined;
    femaleThumbnailUrl?: string | null | undefined;
}>;
export declare const publicShareDetailRelationRoleSchema: z.ZodEnum<["sire", "dam", "mate"]>;
export declare const publicShareDetailRelationVisibilitySchema: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
export declare const publicShareDetailRelationSchema: z.ZodObject<{
    role: z.ZodEnum<["sire", "dam", "mate"]>;
    label: z.ZodString;
    displayValue: z.ZodString;
    visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
    productId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId: string | null;
    role: "sire" | "dam" | "mate";
    label: string;
    displayValue: string;
    visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
}, {
    productId: string | null;
    role: "sire" | "dam" | "mate";
    label: string;
    displayValue: string;
    visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
}>;
export declare const publicShareDetailRelationsSchema: z.ZodObject<{
    sire: z.ZodObject<{
        role: z.ZodEnum<["sire", "dam", "mate"]>;
        label: z.ZodString;
        displayValue: z.ZodString;
        visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
        productId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    }, {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    }>;
    dam: z.ZodObject<{
        role: z.ZodEnum<["sire", "dam", "mate"]>;
        label: z.ZodString;
        displayValue: z.ZodString;
        visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
        productId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    }, {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    }>;
    mate: z.ZodObject<{
        role: z.ZodEnum<["sire", "dam", "mate"]>;
        label: z.ZodString;
        displayValue: z.ZodString;
        visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
        productId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    }, {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    }>;
}, "strip", z.ZodTypeAny, {
    sire: {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    };
    dam: {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    };
    mate: {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    };
}, {
    sire: {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    };
    dam: {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    };
    mate: {
        productId: string | null;
        role: "sire" | "dam" | "mate";
        label: string;
        displayValue: string;
        visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
    };
}>;
export declare const publicShareDetailSchema: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        eventType: z.ZodString;
        eventDate: z.ZodNullable<z.ZodString>;
        maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        images: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
        }, {
            url: string;
        }>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        images: {
            url: string;
        }[];
        eventDate: string | null;
        eventType: string;
        note?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }, {
        id: string;
        eventDate: string | null;
        eventType: string;
        note?: string | null | undefined;
        images?: {
            url: string;
        }[] | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }>, "many">;
    familyTree: z.ZodNullable<z.ZodObject<{
        self: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>;
        sire: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>;
        dam: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>;
        mate: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>;
        mates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        } & {
            needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
            lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>, "many">;
        children: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>, "many">;
        paternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>>;
        paternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>>;
        maternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>>;
        maternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>>;
        links: z.ZodObject<{
            sire: z.ZodNullable<z.ZodObject<{
                code: z.ZodNullable<z.ZodString>;
                product: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodNullable<z.ZodString>;
                    name: z.ZodNullable<z.ZodString>;
                    sex: z.ZodNullable<z.ZodString>;
                    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }>>;
            dam: z.ZodNullable<z.ZodObject<{
                code: z.ZodNullable<z.ZodString>;
                product: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodNullable<z.ZodString>;
                    name: z.ZodNullable<z.ZodString>;
                    sex: z.ZodNullable<z.ZodString>;
                    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }>>;
            mate: z.ZodNullable<z.ZodObject<{
                code: z.ZodNullable<z.ZodString>;
                product: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodNullable<z.ZodString>;
                    name: z.ZodNullable<z.ZodString>;
                    sex: z.ZodNullable<z.ZodString>;
                    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }>>;
        }, "strip", z.ZodTypeAny, {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        }, {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        }>;
        limitations: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        self: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        };
        sire: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        dam: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mate: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mates: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        children: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        links: {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        };
        limitations: string;
        paternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        paternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
    }, {
        self: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        };
        sire: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        dam: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mate: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mates: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        children: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        links: {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        };
        limitations: string;
        paternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        paternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
    }>>;
    maleMateLoad: z.ZodArray<z.ZodObject<{
        femaleId: z.ZodString;
        femaleCode: z.ZodString;
        femaleMainImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        femaleThumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastEggAt: z.ZodNullable<z.ZodString>;
        lastMatingWithThisMaleAt: z.ZodNullable<z.ZodString>;
        daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        status: z.ZodEnum<["normal", "need_mating", "warning"]>;
        excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        status: "warning" | "normal" | "need_mating";
        femaleCode: string;
        lastEggAt: string | null;
        femaleId: string;
        lastMatingWithThisMaleAt: string | null;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        femaleMainImageUrl?: string | null | undefined;
        femaleThumbnailUrl?: string | null | undefined;
    }, {
        status: "warning" | "normal" | "need_mating";
        femaleCode: string;
        lastEggAt: string | null;
        femaleId: string;
        lastMatingWithThisMaleAt: string | null;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        femaleMainImageUrl?: string | null | undefined;
        femaleThumbnailUrl?: string | null | undefined;
    }>, "many">;
    relations: z.ZodObject<{
        sire: z.ZodObject<{
            role: z.ZodEnum<["sire", "dam", "mate"]>;
            label: z.ZodString;
            displayValue: z.ZodString;
            visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
            productId: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        }, {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        }>;
        dam: z.ZodObject<{
            role: z.ZodEnum<["sire", "dam", "mate"]>;
            label: z.ZodString;
            displayValue: z.ZodString;
            visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
            productId: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        }, {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        }>;
        mate: z.ZodObject<{
            role: z.ZodEnum<["sire", "dam", "mate"]>;
            label: z.ZodString;
            displayValue: z.ZodString;
            visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
            productId: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        }, {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        }>;
    }, "strip", z.ZodTypeAny, {
        sire: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
        dam: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
        mate: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
    }, {
        sire: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
        dam: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
        mate: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
    }>;
}, "strip", z.ZodTypeAny, {
    events: {
        id: string;
        images: {
            url: string;
        }[];
        eventDate: string | null;
        eventType: string;
        note?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }[];
    familyTree: {
        self: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        };
        sire: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        dam: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mate: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mates: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        children: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        links: {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        };
        limitations: string;
        paternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        paternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
    } | null;
    maleMateLoad: {
        status: "warning" | "normal" | "need_mating";
        femaleCode: string;
        lastEggAt: string | null;
        femaleId: string;
        lastMatingWithThisMaleAt: string | null;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        femaleMainImageUrl?: string | null | undefined;
        femaleThumbnailUrl?: string | null | undefined;
    }[];
    relations: {
        sire: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
        dam: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
        mate: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
    };
}, {
    events: {
        id: string;
        eventDate: string | null;
        eventType: string;
        note?: string | null | undefined;
        images?: {
            url: string;
        }[] | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }[];
    familyTree: {
        self: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        };
        sire: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        dam: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mate: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mates: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        children: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        links: {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        };
        limitations: string;
        paternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        paternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
    } | null;
    maleMateLoad: {
        status: "warning" | "normal" | "need_mating";
        femaleCode: string;
        lastEggAt: string | null;
        femaleId: string;
        lastMatingWithThisMaleAt: string | null;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        femaleMainImageUrl?: string | null | undefined;
        femaleThumbnailUrl?: string | null | undefined;
    }[];
    relations: {
        sire: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
        dam: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
        mate: {
            productId: string | null;
            role: "sire" | "dam" | "mate";
            label: string;
            displayValue: string;
            visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
        };
    };
}>;
export declare const publicShareMerchantWatermarkSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    text: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    text: string | null;
    enabled: boolean;
}, {
    text: string | null;
    enabled: boolean;
}>;
export declare const publicShareTenantFeedStatsSchema: z.ZodObject<{
    breederCount: z.ZodNumber;
    maleCount: z.ZodNumber;
    femaleCount: z.ZodNumber;
    seriesCount: z.ZodNumber;
    needMatingCount: z.ZodNumber;
    eggsThisYear: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    seriesCount: number;
    maleCount: number;
    femaleCount: number;
    needMatingCount: number;
    breederCount: number;
    eggsThisYear: number;
}, {
    seriesCount: number;
    maleCount: number;
    femaleCount: number;
    needMatingCount: number;
    breederCount: number;
    eggsThisYear: number;
}>;
export declare const publicTenantFeedShareResponseSchema: z.ZodObject<{
    shareId: z.ZodString;
    shareToken: z.ZodString;
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
    merchantWatermark: z.ZodObject<{
        enabled: z.ZodBoolean;
        text: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        text: string | null;
        enabled: boolean;
    }, {
        text: string | null;
        enabled: boolean;
    }>;
    expiresAt: z.ZodString;
} & {
    resourceType: z.ZodLiteral<"tenant_feed">;
    presentation: z.ZodObject<{
        feedTitle: z.ZodString;
        feedSubtitle: z.ZodString;
        identity: z.ZodObject<{
            avatarPreset: z.ZodNullable<z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>>;
            avatarUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        }, {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        }>;
        theme: z.ZodObject<{
            brandPrimary: z.ZodString;
            brandSecondary: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            brandPrimary: string;
            brandSecondary: string;
        }, {
            brandPrimary: string;
            brandSecondary: string;
        }>;
        hero: z.ZodObject<{
            images: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        }, "strip", z.ZodTypeAny, {
            images: string[];
        }, {
            images: string[];
        }>;
        shareCardImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        contact: z.ZodObject<{
            showWechatBlock: z.ZodBoolean;
            wechatQrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
            wechatId: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        }, {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        identity: {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        };
        feedTitle: string;
        feedSubtitle: string;
        shareCardImageUrl: string | null;
        theme: {
            brandPrimary: string;
            brandSecondary: string;
        };
        hero: {
            images: string[];
        };
        contact: {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        };
    }, {
        identity: {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        };
        feedTitle: string;
        feedSubtitle: string;
        shareCardImageUrl: string | null;
        theme: {
            brandPrimary: string;
            brandSecondary: string;
        };
        hero: {
            images: string[];
        };
        contact: {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        };
    }>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        alias: z.ZodNullable<z.ZodString>;
        code: z.ZodNullable<z.ZodString>;
        type: z.ZodString;
        lineageType: z.ZodEnum<["pure", "hybrid"]>;
        crossLabel: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        seriesId: z.ZodNullable<z.ZodString>;
        seriesSortOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        seriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        seriesDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodNullable<z.ZodString>;
        sireProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        damProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
        needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        offspringUnitPrice: z.ZodNullable<z.ZodNumber>;
        coverImageUrl: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
        popularityScore: z.ZodNumber;
        isFeatured: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        type: string;
        id: string;
        coverImageUrl: string | null;
        alias: string | null;
        name: string | null;
        sex: string | null;
        tenantId: string;
        isFeatured: boolean;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        seriesId: string | null;
        offspringUnitPrice: number | null;
        popularityScore: number;
        seriesName?: string | null | undefined;
        sireProductId?: string | null | undefined;
        damProductId?: string | null | undefined;
        mateProductId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
        seriesSortOrder?: number | null | undefined;
        seriesDescription?: string | null | undefined;
    }, {
        code: string | null;
        type: string;
        id: string;
        coverImageUrl: string | null;
        alias: string | null;
        name: string | null;
        sex: string | null;
        tenantId: string;
        isFeatured: boolean;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        seriesId: string | null;
        offspringUnitPrice: number | null;
        popularityScore: number;
        seriesName?: string | null | undefined;
        sireProductId?: string | null | undefined;
        damProductId?: string | null | undefined;
        mateProductId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
        seriesSortOrder?: number | null | undefined;
        seriesDescription?: string | null | undefined;
    }>, "many">;
    product: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        identityRank: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        alias: z.ZodNullable<z.ZodString>;
        code: z.ZodNullable<z.ZodString>;
        type: z.ZodEnum<["breeder", "offspring"]>;
        lineageType: z.ZodEnum<["pure", "hybrid"]>;
        crossLabel: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sireProductId: z.ZodNullable<z.ZodString>;
        damProductId: z.ZodNullable<z.ZodString>;
        mateProductId: z.ZodNullable<z.ZodString>;
        requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
        needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        offspringUnitPrice: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodNumber>, number | null, unknown>>;
        excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
        hasSample: z.ZodOptional<z.ZodBoolean>;
        inStock: z.ZodOptional<z.ZodBoolean>;
        popularityScore: z.ZodOptional<z.ZodNumber>;
        isFeatured: z.ZodOptional<z.ZodBoolean>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    } & {
        seriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        seriesDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        images: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            tenantId: z.ZodString;
            productId: z.ZodString;
            key: z.ZodString;
            url: z.ZodString;
            contentType: z.ZodNullable<z.ZodString>;
            sizeBytes: z.ZodString;
            sortOrder: z.ZodNumber;
            isMain: z.ZodBoolean;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }, {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }[];
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        seriesName?: string | null | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
        seriesDescription?: string | null | undefined;
    }, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }[];
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        seriesName?: string | null | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
        seriesDescription?: string | null | undefined;
    }>>>;
    detail: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        events: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            eventType: z.ZodString;
            eventDate: z.ZodNullable<z.ZodString>;
            maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            images: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>, "many">>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            images: {
                url: string;
            }[];
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }, {
            id: string;
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            images?: {
                url: string;
            }[] | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }>, "many">;
        familyTree: z.ZodNullable<z.ZodObject<{
            self: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>;
            sire: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>;
            dam: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>;
            mate: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>;
            mates: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            } & {
                needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
                lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>, "many">;
            children: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>, "many">;
            paternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>>;
            paternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>>;
            maternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>>;
            maternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>>;
            links: z.ZodObject<{
                sire: z.ZodNullable<z.ZodObject<{
                    code: z.ZodNullable<z.ZodString>;
                    product: z.ZodNullable<z.ZodObject<{
                        id: z.ZodString;
                        code: z.ZodNullable<z.ZodString>;
                        name: z.ZodNullable<z.ZodString>;
                        sex: z.ZodNullable<z.ZodString>;
                        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }>>;
                dam: z.ZodNullable<z.ZodObject<{
                    code: z.ZodNullable<z.ZodString>;
                    product: z.ZodNullable<z.ZodObject<{
                        id: z.ZodString;
                        code: z.ZodNullable<z.ZodString>;
                        name: z.ZodNullable<z.ZodString>;
                        sex: z.ZodNullable<z.ZodString>;
                        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }>>;
                mate: z.ZodNullable<z.ZodObject<{
                    code: z.ZodNullable<z.ZodString>;
                    product: z.ZodNullable<z.ZodObject<{
                        id: z.ZodString;
                        code: z.ZodNullable<z.ZodString>;
                        name: z.ZodNullable<z.ZodString>;
                        sex: z.ZodNullable<z.ZodString>;
                        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }>>;
            }, "strip", z.ZodTypeAny, {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            }, {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            }>;
            limitations: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        }, {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        }>>;
        maleMateLoad: z.ZodArray<z.ZodObject<{
            femaleId: z.ZodString;
            femaleCode: z.ZodString;
            femaleMainImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            femaleThumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            lastEggAt: z.ZodNullable<z.ZodString>;
            lastMatingWithThisMaleAt: z.ZodNullable<z.ZodString>;
            daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            status: z.ZodEnum<["normal", "need_mating", "warning"]>;
            excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }, {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }>, "many">;
        relations: z.ZodObject<{
            sire: z.ZodObject<{
                role: z.ZodEnum<["sire", "dam", "mate"]>;
                label: z.ZodString;
                displayValue: z.ZodString;
                visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
                productId: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }>;
            dam: z.ZodObject<{
                role: z.ZodEnum<["sire", "dam", "mate"]>;
                label: z.ZodString;
                displayValue: z.ZodString;
                visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
                productId: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }>;
            mate: z.ZodObject<{
                role: z.ZodEnum<["sire", "dam", "mate"]>;
                label: z.ZodString;
                displayValue: z.ZodString;
                visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
                productId: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }>;
        }, "strip", z.ZodTypeAny, {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        }, {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        events: {
            id: string;
            images: {
                url: string;
            }[];
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }[];
        familyTree: {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        } | null;
        maleMateLoad: {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }[];
        relations: {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        };
    }, {
        events: {
            id: string;
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            images?: {
                url: string;
            }[] | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }[];
        familyTree: {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        } | null;
        maleMateLoad: {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }[];
        relations: {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        };
    }>>>;
    stats: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        breederCount: z.ZodNumber;
        maleCount: z.ZodNumber;
        femaleCount: z.ZodNumber;
        seriesCount: z.ZodNumber;
        needMatingCount: z.ZodNumber;
        eggsThisYear: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        seriesCount: number;
        maleCount: number;
        femaleCount: number;
        needMatingCount: number;
        breederCount: number;
        eggsThisYear: number;
    }, {
        seriesCount: number;
        maleCount: number;
        femaleCount: number;
        needMatingCount: number;
        breederCount: number;
        eggsThisYear: number;
    }>>>;
    badgeBanner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
        achievementTitle: z.ZodString;
        achievementSubtitle: z.ZodString;
        shareHeadline: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        percentileOvercome: z.ZodNumber;
        unlockedCount: z.ZodNumber;
        totalCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    }, {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    items: {
        code: string | null;
        type: string;
        id: string;
        coverImageUrl: string | null;
        alias: string | null;
        name: string | null;
        sex: string | null;
        tenantId: string;
        isFeatured: boolean;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        seriesId: string | null;
        offspringUnitPrice: number | null;
        popularityScore: number;
        seriesName?: string | null | undefined;
        sireProductId?: string | null | undefined;
        damProductId?: string | null | undefined;
        mateProductId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
        seriesSortOrder?: number | null | undefined;
        seriesDescription?: string | null | undefined;
    }[];
    expiresAt: string;
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    presentation: {
        identity: {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        };
        feedTitle: string;
        feedSubtitle: string;
        shareCardImageUrl: string | null;
        theme: {
            brandPrimary: string;
            brandSecondary: string;
        };
        hero: {
            images: string[];
        };
        contact: {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        };
    };
    shareToken: string;
    resourceType: "tenant_feed";
    shareId: string;
    merchantWatermark: {
        text: string | null;
        enabled: boolean;
    };
    product?: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }[];
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        seriesName?: string | null | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
        seriesDescription?: string | null | undefined;
    } | null | undefined;
    detail?: {
        events: {
            id: string;
            images: {
                url: string;
            }[];
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }[];
        familyTree: {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        } | null;
        maleMateLoad: {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }[];
        relations: {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        };
    } | null | undefined;
    stats?: {
        seriesCount: number;
        maleCount: number;
        femaleCount: number;
        needMatingCount: number;
        breederCount: number;
        eggsThisYear: number;
    } | null | undefined;
    badgeBanner?: {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    } | null | undefined;
}, {
    items: {
        code: string | null;
        type: string;
        id: string;
        coverImageUrl: string | null;
        alias: string | null;
        name: string | null;
        sex: string | null;
        tenantId: string;
        isFeatured: boolean;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        seriesId: string | null;
        offspringUnitPrice: number | null;
        popularityScore: number;
        seriesName?: string | null | undefined;
        sireProductId?: string | null | undefined;
        damProductId?: string | null | undefined;
        mateProductId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
        seriesSortOrder?: number | null | undefined;
        seriesDescription?: string | null | undefined;
    }[];
    expiresAt: string;
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    presentation: {
        identity: {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        };
        feedTitle: string;
        feedSubtitle: string;
        shareCardImageUrl: string | null;
        theme: {
            brandPrimary: string;
            brandSecondary: string;
        };
        hero: {
            images: string[];
        };
        contact: {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        };
    };
    shareToken: string;
    resourceType: "tenant_feed";
    shareId: string;
    merchantWatermark: {
        text: string | null;
        enabled: boolean;
    };
    product?: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }[];
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        seriesName?: string | null | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
        seriesDescription?: string | null | undefined;
    } | null | undefined;
    detail?: {
        events: {
            id: string;
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            images?: {
                url: string;
            }[] | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }[];
        familyTree: {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        } | null;
        maleMateLoad: {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }[];
        relations: {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        };
    } | null | undefined;
    stats?: {
        seriesCount: number;
        maleCount: number;
        femaleCount: number;
        needMatingCount: number;
        breederCount: number;
        eggsThisYear: number;
    } | null | undefined;
    badgeBanner?: {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    } | null | undefined;
}>;
export declare const publicShareResponseSchema: z.ZodObject<{
    shareId: z.ZodString;
    shareToken: z.ZodString;
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
    merchantWatermark: z.ZodObject<{
        enabled: z.ZodBoolean;
        text: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        text: string | null;
        enabled: boolean;
    }, {
        text: string | null;
        enabled: boolean;
    }>;
    expiresAt: z.ZodString;
} & {
    resourceType: z.ZodLiteral<"tenant_feed">;
    presentation: z.ZodObject<{
        feedTitle: z.ZodString;
        feedSubtitle: z.ZodString;
        identity: z.ZodObject<{
            avatarPreset: z.ZodNullable<z.ZodEnum<["amber", "ocean", "forest", "plum", "graphite", "sunrise"]>>;
            avatarUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        }, {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        }>;
        theme: z.ZodObject<{
            brandPrimary: z.ZodString;
            brandSecondary: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            brandPrimary: string;
            brandSecondary: string;
        }, {
            brandPrimary: string;
            brandSecondary: string;
        }>;
        hero: z.ZodObject<{
            images: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        }, "strip", z.ZodTypeAny, {
            images: string[];
        }, {
            images: string[];
        }>;
        shareCardImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        contact: z.ZodObject<{
            showWechatBlock: z.ZodBoolean;
            wechatQrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
            wechatId: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        }, {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        }>;
    }, "strip", z.ZodTypeAny, {
        identity: {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        };
        feedTitle: string;
        feedSubtitle: string;
        shareCardImageUrl: string | null;
        theme: {
            brandPrimary: string;
            brandSecondary: string;
        };
        hero: {
            images: string[];
        };
        contact: {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        };
    }, {
        identity: {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        };
        feedTitle: string;
        feedSubtitle: string;
        shareCardImageUrl: string | null;
        theme: {
            brandPrimary: string;
            brandSecondary: string;
        };
        hero: {
            images: string[];
        };
        contact: {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        };
    }>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        alias: z.ZodNullable<z.ZodString>;
        code: z.ZodNullable<z.ZodString>;
        type: z.ZodString;
        lineageType: z.ZodEnum<["pure", "hybrid"]>;
        crossLabel: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        seriesId: z.ZodNullable<z.ZodString>;
        seriesSortOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        seriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        seriesDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodNullable<z.ZodString>;
        sireProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        damProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
        needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        offspringUnitPrice: z.ZodNullable<z.ZodNumber>;
        coverImageUrl: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
        popularityScore: z.ZodNumber;
        isFeatured: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        type: string;
        id: string;
        coverImageUrl: string | null;
        alias: string | null;
        name: string | null;
        sex: string | null;
        tenantId: string;
        isFeatured: boolean;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        seriesId: string | null;
        offspringUnitPrice: number | null;
        popularityScore: number;
        seriesName?: string | null | undefined;
        sireProductId?: string | null | undefined;
        damProductId?: string | null | undefined;
        mateProductId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
        seriesSortOrder?: number | null | undefined;
        seriesDescription?: string | null | undefined;
    }, {
        code: string | null;
        type: string;
        id: string;
        coverImageUrl: string | null;
        alias: string | null;
        name: string | null;
        sex: string | null;
        tenantId: string;
        isFeatured: boolean;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        seriesId: string | null;
        offspringUnitPrice: number | null;
        popularityScore: number;
        seriesName?: string | null | undefined;
        sireProductId?: string | null | undefined;
        damProductId?: string | null | undefined;
        mateProductId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
        seriesSortOrder?: number | null | undefined;
        seriesDescription?: string | null | undefined;
    }>, "many">;
    product: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        identityRank: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        alias: z.ZodNullable<z.ZodString>;
        code: z.ZodNullable<z.ZodString>;
        type: z.ZodEnum<["breeder", "offspring"]>;
        lineageType: z.ZodEnum<["pure", "hybrid"]>;
        crossLabel: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sireProductId: z.ZodNullable<z.ZodString>;
        damProductId: z.ZodNullable<z.ZodString>;
        mateProductId: z.ZodNullable<z.ZodString>;
        requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
        needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        offspringUnitPrice: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodNumber>, number | null, unknown>>;
        excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
        hasSample: z.ZodOptional<z.ZodBoolean>;
        inStock: z.ZodOptional<z.ZodBoolean>;
        popularityScore: z.ZodOptional<z.ZodNumber>;
        isFeatured: z.ZodOptional<z.ZodBoolean>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    } & {
        seriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        seriesDescription: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        images: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            tenantId: z.ZodString;
            productId: z.ZodString;
            key: z.ZodString;
            url: z.ZodString;
            contentType: z.ZodNullable<z.ZodString>;
            sizeBytes: z.ZodString;
            sortOrder: z.ZodNumber;
            isMain: z.ZodBoolean;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }, {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }[];
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        seriesName?: string | null | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
        seriesDescription?: string | null | undefined;
    }, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }[];
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        seriesName?: string | null | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
        seriesDescription?: string | null | undefined;
    }>>>;
    detail: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        events: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            eventType: z.ZodString;
            eventDate: z.ZodNullable<z.ZodString>;
            maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            images: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                url: string;
            }, {
                url: string;
            }>, "many">>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            images: {
                url: string;
            }[];
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }, {
            id: string;
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            images?: {
                url: string;
            }[] | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }>, "many">;
        familyTree: z.ZodNullable<z.ZodObject<{
            self: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>;
            sire: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>;
            dam: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>;
            mate: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>;
            mates: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            } & {
                needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
                lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>, "many">;
            children: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>, "many">;
            paternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>>;
            paternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>>;
            maternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>>;
            maternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>>;
            links: z.ZodObject<{
                sire: z.ZodNullable<z.ZodObject<{
                    code: z.ZodNullable<z.ZodString>;
                    product: z.ZodNullable<z.ZodObject<{
                        id: z.ZodString;
                        code: z.ZodNullable<z.ZodString>;
                        name: z.ZodNullable<z.ZodString>;
                        sex: z.ZodNullable<z.ZodString>;
                        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }>>;
                dam: z.ZodNullable<z.ZodObject<{
                    code: z.ZodNullable<z.ZodString>;
                    product: z.ZodNullable<z.ZodObject<{
                        id: z.ZodString;
                        code: z.ZodNullable<z.ZodString>;
                        name: z.ZodNullable<z.ZodString>;
                        sex: z.ZodNullable<z.ZodString>;
                        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }>>;
                mate: z.ZodNullable<z.ZodObject<{
                    code: z.ZodNullable<z.ZodString>;
                    product: z.ZodNullable<z.ZodObject<{
                        id: z.ZodString;
                        code: z.ZodNullable<z.ZodString>;
                        name: z.ZodNullable<z.ZodString>;
                        sex: z.ZodNullable<z.ZodString>;
                        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }, {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }, {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                }>>;
            }, "strip", z.ZodTypeAny, {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            }, {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            }>;
            limitations: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        }, {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        }>>;
        maleMateLoad: z.ZodArray<z.ZodObject<{
            femaleId: z.ZodString;
            femaleCode: z.ZodString;
            femaleMainImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            femaleThumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            lastEggAt: z.ZodNullable<z.ZodString>;
            lastMatingWithThisMaleAt: z.ZodNullable<z.ZodString>;
            daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            status: z.ZodEnum<["normal", "need_mating", "warning"]>;
            excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }, {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }>, "many">;
        relations: z.ZodObject<{
            sire: z.ZodObject<{
                role: z.ZodEnum<["sire", "dam", "mate"]>;
                label: z.ZodString;
                displayValue: z.ZodString;
                visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
                productId: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }>;
            dam: z.ZodObject<{
                role: z.ZodEnum<["sire", "dam", "mate"]>;
                label: z.ZodString;
                displayValue: z.ZodString;
                visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
                productId: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }>;
            mate: z.ZodObject<{
                role: z.ZodEnum<["sire", "dam", "mate"]>;
                label: z.ZodString;
                displayValue: z.ZodString;
                visibilityStatus: z.ZodEnum<["linked_visible", "linked_hidden", "unlinked"]>;
                productId: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }, {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            }>;
        }, "strip", z.ZodTypeAny, {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        }, {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        }>;
    }, "strip", z.ZodTypeAny, {
        events: {
            id: string;
            images: {
                url: string;
            }[];
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }[];
        familyTree: {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        } | null;
        maleMateLoad: {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }[];
        relations: {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        };
    }, {
        events: {
            id: string;
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            images?: {
                url: string;
            }[] | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }[];
        familyTree: {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        } | null;
        maleMateLoad: {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }[];
        relations: {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        };
    }>>>;
    stats: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        breederCount: z.ZodNumber;
        maleCount: z.ZodNumber;
        femaleCount: z.ZodNumber;
        seriesCount: z.ZodNumber;
        needMatingCount: z.ZodNumber;
        eggsThisYear: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        seriesCount: number;
        maleCount: number;
        femaleCount: number;
        needMatingCount: number;
        breederCount: number;
        eggsThisYear: number;
    }, {
        seriesCount: number;
        maleCount: number;
        femaleCount: number;
        needMatingCount: number;
        breederCount: number;
        eggsThisYear: number;
    }>>>;
    badgeBanner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        achievementKey: z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>;
        achievementTitle: z.ZodString;
        achievementSubtitle: z.ZodString;
        shareHeadline: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        percentileOvercome: z.ZodNumber;
        unlockedCount: z.ZodNumber;
        totalCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    }, {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    }>>>;
}, "strip", z.ZodTypeAny, {
    items: {
        code: string | null;
        type: string;
        id: string;
        coverImageUrl: string | null;
        alias: string | null;
        name: string | null;
        sex: string | null;
        tenantId: string;
        isFeatured: boolean;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        seriesId: string | null;
        offspringUnitPrice: number | null;
        popularityScore: number;
        seriesName?: string | null | undefined;
        sireProductId?: string | null | undefined;
        damProductId?: string | null | undefined;
        mateProductId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
        seriesSortOrder?: number | null | undefined;
        seriesDescription?: string | null | undefined;
    }[];
    expiresAt: string;
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    presentation: {
        identity: {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        };
        feedTitle: string;
        feedSubtitle: string;
        shareCardImageUrl: string | null;
        theme: {
            brandPrimary: string;
            brandSecondary: string;
        };
        hero: {
            images: string[];
        };
        contact: {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        };
    };
    shareToken: string;
    resourceType: "tenant_feed";
    shareId: string;
    merchantWatermark: {
        text: string | null;
        enabled: boolean;
    };
    product?: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }[];
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        seriesName?: string | null | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
        seriesDescription?: string | null | undefined;
    } | null | undefined;
    detail?: {
        events: {
            id: string;
            images: {
                url: string;
            }[];
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }[];
        familyTree: {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        } | null;
        maleMateLoad: {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }[];
        relations: {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        };
    } | null | undefined;
    stats?: {
        seriesCount: number;
        maleCount: number;
        femaleCount: number;
        needMatingCount: number;
        breederCount: number;
        eggsThisYear: number;
    } | null | undefined;
    badgeBanner?: {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    } | null | undefined;
}, {
    items: {
        code: string | null;
        type: string;
        id: string;
        coverImageUrl: string | null;
        alias: string | null;
        name: string | null;
        sex: string | null;
        tenantId: string;
        isFeatured: boolean;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        seriesId: string | null;
        offspringUnitPrice: number | null;
        popularityScore: number;
        seriesName?: string | null | undefined;
        sireProductId?: string | null | undefined;
        damProductId?: string | null | undefined;
        mateProductId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
        seriesSortOrder?: number | null | undefined;
        seriesDescription?: string | null | undefined;
    }[];
    expiresAt: string;
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    presentation: {
        identity: {
            avatarUrl: string | null;
            avatarPreset: "forest" | "amber" | "ocean" | "plum" | "graphite" | "sunrise" | null;
        };
        feedTitle: string;
        feedSubtitle: string;
        shareCardImageUrl: string | null;
        theme: {
            brandPrimary: string;
            brandSecondary: string;
        };
        hero: {
            images: string[];
        };
        contact: {
            wechatId: string | null;
            showWechatBlock: boolean;
            wechatQrImageUrl: string | null;
        };
    };
    shareToken: string;
    resourceType: "tenant_feed";
    shareId: string;
    merchantWatermark: {
        text: string | null;
        enabled: boolean;
    };
    product?: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        images: {
            id: string;
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            sortOrder: number;
            productId: string;
            isMain: boolean;
        }[];
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        seriesName?: string | null | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
        seriesDescription?: string | null | undefined;
    } | null | undefined;
    detail?: {
        events: {
            id: string;
            eventDate: string | null;
            eventType: string;
            note?: string | null | undefined;
            images?: {
                url: string;
            }[] | undefined;
            eggCount?: number | null | undefined;
            fertilizedCount?: number | null | undefined;
            maleCode?: string | null | undefined;
            oldMateCode?: string | null | undefined;
            newMateCode?: string | null | undefined;
        }[];
        familyTree: {
            self: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            };
            sire: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            dam: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mate: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
            mates: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
                lastEggAt?: string | null | undefined;
                lastMatingAt?: string | null | undefined;
                daysSinceEgg?: number | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            children: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }[];
            links: {
                sire: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                dam: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
                mate: {
                    code: string | null;
                    product: {
                        code: string | null;
                        id: string;
                        name: string | null;
                        sex: string | null;
                        coverImageUrl?: string | null | undefined;
                        publicUrl?: string | null | undefined;
                        thumbnailUrl?: string | null | undefined;
                    } | null;
                } | null;
            };
            limitations: string;
            paternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            paternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandfather?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
            maternalGrandmother?: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null | undefined;
        } | null;
        maleMateLoad: {
            status: "warning" | "normal" | "need_mating";
            femaleCode: string;
            lastEggAt: string | null;
            femaleId: string;
            lastMatingWithThisMaleAt: string | null;
            daysSinceEgg?: number | null | undefined;
            excludeFromBreeding?: boolean | undefined;
            femaleMainImageUrl?: string | null | undefined;
            femaleThumbnailUrl?: string | null | undefined;
        }[];
        relations: {
            sire: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            dam: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
            mate: {
                productId: string | null;
                role: "sire" | "dam" | "mate";
                label: string;
                displayValue: string;
                visibilityStatus: "linked_visible" | "linked_hidden" | "unlinked";
            };
        };
    } | null | undefined;
    stats?: {
        seriesCount: number;
        maleCount: number;
        femaleCount: number;
        needMatingCount: number;
        breederCount: number;
        eggsThisYear: number;
    } | null | undefined;
    badgeBanner?: {
        totalCount: number;
        shareHeadline: string;
        imageUrl: string | null;
        unlockedCount: number;
        percentileOvercome: number;
        achievementKey: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase";
        achievementTitle: string;
        achievementSubtitle: string;
    } | null | undefined;
}>;
export declare const publicWechatJsSdkConfigQuerySchema: z.ZodObject<{
    tenantId: z.ZodString;
    resourceType: z.ZodEnum<["tenant_feed"]>;
    resourceId: z.ZodString;
    productId: z.ZodOptional<z.ZodString>;
    badge: z.ZodOptional<z.ZodEnum<["archive_first_pet", "archive_triple_collection", "archive_profile_writer", "archive_portrait_wall", "archive_series_curator", "archive_certificate_debut", "record_first_log", "record_steady_7d", "record_steady_30d", "record_health_guard", "record_pair_timeline", "record_egg_ledger", "relation_first_pair", "relation_lineage_root", "relation_double_parent", "relation_grandline_map", "relation_family_network", "relation_pair_strategist", "share_first_public", "share_featured_window", "share_viewer_breakthrough", "share_popular_pick", "share_social_spread", "share_trust_showcase"]>>;
    exp: z.ZodString;
    sig: z.ZodString;
    maxEdge: z.ZodOptional<z.ZodEffects<z.ZodNumber, 320 | 480 | 960, number>>;
} & {
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    tenantId: string;
    resourceType: "tenant_feed";
    resourceId: string;
    exp: string;
    sig: string;
    productId?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
    maxEdge?: 320 | 480 | 960 | undefined;
}, {
    url: string;
    tenantId: string;
    resourceType: "tenant_feed";
    resourceId: string;
    exp: string;
    sig: string;
    productId?: string | undefined;
    badge?: "archive_first_pet" | "archive_triple_collection" | "archive_profile_writer" | "archive_portrait_wall" | "archive_series_curator" | "archive_certificate_debut" | "record_first_log" | "record_steady_7d" | "record_steady_30d" | "record_health_guard" | "record_pair_timeline" | "record_egg_ledger" | "relation_first_pair" | "relation_lineage_root" | "relation_double_parent" | "relation_grandline_map" | "relation_family_network" | "relation_pair_strategist" | "share_first_public" | "share_featured_window" | "share_viewer_breakthrough" | "share_popular_pick" | "share_social_spread" | "share_trust_showcase" | undefined;
    maxEdge?: number | undefined;
}>;
export declare const publicWechatJsSdkConfigByTokenQuerySchema: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export declare const publicWechatJsSdkConfigResponseSchema: z.ZodObject<{
    appId: z.ZodString;
    timestamp: z.ZodNumber;
    nonceStr: z.ZodString;
    signature: z.ZodString;
}, "strip", z.ZodTypeAny, {
    appId: string;
    nonceStr: string;
    timestamp: number;
    signature: string;
}, {
    appId: string;
    nonceStr: string;
    timestamp: number;
    signature: string;
}>;
export type ShareResourceType = z.infer<typeof shareResourceTypeSchema>;
export type CreateShareRequest = z.infer<typeof createShareRequestSchema>;
export type Share = z.infer<typeof shareSchema>;
export type TenantSharePresentation = z.infer<typeof tenantSharePresentationSchema>;
export type TenantShareAvatarPreset = z.infer<typeof tenantShareAvatarPresetSchema>;
export type SharePresentationOverride = z.infer<typeof sharePresentationOverrideSchema>;
export type PublicSharePresentation = z.infer<typeof publicSharePresentationSchema>;
export type PublicShareQuery = z.infer<typeof publicShareQuerySchema>;
export type PublicShareByTokenQuery = z.infer<typeof publicShareByTokenQuerySchema>;
export type PublicMiniappUrlLinkByTokenQuery = z.infer<typeof publicMiniappUrlLinkByTokenQuerySchema>;
export type PublicShareQrCodeByTokenQuery = z.infer<typeof publicShareQrCodeByTokenQuerySchema>;
export type PublicMiniappUrlLinkResponse = z.infer<typeof publicMiniappUrlLinkResponseSchema>;
export type PublicShareResponse = z.infer<typeof publicShareResponseSchema>;
export type PublicWechatJsSdkConfigQuery = z.infer<typeof publicWechatJsSdkConfigQuerySchema>;
export type PublicWechatJsSdkConfigByTokenQuery = z.infer<typeof publicWechatJsSdkConfigByTokenQuerySchema>;
export type PublicWechatJsSdkConfigResponse = z.infer<typeof publicWechatJsSdkConfigResponseSchema>;
export type PublicShareMerchantWatermark = z.infer<typeof publicShareMerchantWatermarkSchema>;
export type PublicShareFeedItem = z.infer<typeof publicShareFeedItemSchema>;
export type PublicShareDetail = z.infer<typeof publicShareDetailSchema>;
export type PublicShareDetailEvent = z.infer<typeof publicShareDetailEventSchema>;
export type PublicShareDetailEventImage = z.infer<typeof publicShareDetailEventImageSchema>;
export type PublicShareDetailRelation = z.infer<typeof publicShareDetailRelationSchema>;
export type PublicShareDetailRelations = z.infer<typeof publicShareDetailRelationsSchema>;
export type PublicShareMateLoadItem = z.infer<typeof publicShareMateLoadItemSchema>;
export type PublicShareTenantFeedStats = z.infer<typeof publicShareTenantFeedStatsSchema>;
export type UpdateTenantSharePresentationRequest = z.infer<typeof updateTenantSharePresentationRequestSchema>;
export type UploadTenantSharePresentationImageResponse = z.infer<typeof uploadTenantSharePresentationImageResponseSchema>;
