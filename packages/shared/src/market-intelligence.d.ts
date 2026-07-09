import { z } from 'zod';
export declare const marketSourcePlatformSchema: z.ZodEnum<["MANUAL", "XIANYU_DETAIL_POC"]>;
export declare const marketSeedListingStatusSchema: z.ZodEnum<["ACTIVE", "INVALID", "REPLACED", "PENDING_REVIEW"]>;
export declare const marketReviewStatusSchema: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
export declare const marketConfidenceLevelSchema: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
export declare const marketOverviewWindowSchema: z.ZodEnum<["7d", "30d"]>;
export declare const marketPublicationStatusSchema: z.ZodEnum<["DRAFT", "PUBLISHED"]>;
export declare const marketPriceSourceTypeSchema: z.ZodEnum<["MANUAL", "AUTO"]>;
export declare const marketPublicModuleStateSchema: z.ZodObject<{
    marketReferenceEnabled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    marketReferenceEnabled: boolean;
}, {
    marketReferenceEnabled: boolean;
}>;
export declare const marketModuleSwitchesSchema: z.ZodObject<{
    tenantId: z.ZodString;
    marketReferenceEnabled: z.ZodBoolean;
    reviewQueueEnabled: z.ZodBoolean;
    publishEnabled: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    marketReferenceEnabled: boolean;
    reviewQueueEnabled: boolean;
    publishEnabled: boolean;
}, {
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    marketReferenceEnabled: boolean;
    reviewQueueEnabled: boolean;
    publishEnabled: boolean;
}>;
export declare const marketKeywordSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    code: z.ZodString;
    displayName: z.ZodString;
    canonicalKeyword: z.ZodString;
    species: z.ZodNullable<z.ZodString>;
    gradeHint: z.ZodNullable<z.ZodString>;
    aliases: z.ZodArray<z.ZodString, "many">;
    isActive: z.ZodBoolean;
    publicationStatus: z.ZodEnum<["DRAFT", "PUBLISHED"]>;
    sortOrder: z.ZodNumber;
    lastPublishedAt: z.ZodNullable<z.ZodString>;
    publishedByUserId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    sortOrder: number;
    isActive: boolean;
    displayName: string;
    canonicalKeyword: string;
    species: string | null;
    gradeHint: string | null;
    aliases: string[];
    publicationStatus: "DRAFT" | "PUBLISHED";
    lastPublishedAt: string | null;
    publishedByUserId: string | null;
}, {
    code: string;
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    sortOrder: number;
    isActive: boolean;
    displayName: string;
    canonicalKeyword: string;
    species: string | null;
    gradeHint: string | null;
    aliases: string[];
    publicationStatus: "DRAFT" | "PUBLISHED";
    lastPublishedAt: string | null;
    publishedByUserId: string | null;
}>;
export declare const marketSeedListingSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    keywordId: z.ZodString;
    sourcePlatform: z.ZodEnum<["MANUAL", "XIANYU_DETAIL_POC"]>;
    listingId: z.ZodString;
    listingTitle: z.ZodNullable<z.ZodString>;
    snapshotUrl: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INVALID", "REPLACED", "PENDING_REVIEW"]>;
    priority: z.ZodNumber;
    note: z.ZodNullable<z.ZodString>;
    lastObservedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
    id: string;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    listingId: string;
    keywordId: string;
    sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
    listingTitle: string | null;
    snapshotUrl: string | null;
    priority: number;
    lastObservedAt: string | null;
}, {
    status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
    id: string;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    listingId: string;
    keywordId: string;
    sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
    listingTitle: string | null;
    snapshotUrl: string | null;
    priority: number;
    lastObservedAt: string | null;
}>;
export declare const marketPriceSnapshotSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    keywordId: z.ZodString;
    day: z.ZodString;
    observedAt: z.ZodString;
    priceCents: z.ZodNumber;
    note: z.ZodNullable<z.ZodString>;
    sourceType: z.ZodEnum<["MANUAL", "AUTO"]>;
    createdByUserId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    sourceType: "MANUAL" | "AUTO";
    createdByUserId: string | null;
    priceCents: number;
    keywordId: string;
    day: string;
    observedAt: string;
}, {
    id: string;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    sourceType: "MANUAL" | "AUTO";
    createdByUserId: string | null;
    priceCents: number;
    keywordId: string;
    day: string;
    observedAt: string;
}>;
export declare const listMarketKeywordsQuerySchema: z.ZodObject<{
    tenantId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
}, {
    tenantId: string;
}>;
export declare const listMarketKeywordsResponseSchema: z.ZodObject<{
    keywords: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        code: z.ZodString;
        displayName: z.ZodString;
        canonicalKeyword: z.ZodString;
        species: z.ZodNullable<z.ZodString>;
        gradeHint: z.ZodNullable<z.ZodString>;
        aliases: z.ZodArray<z.ZodString, "many">;
        isActive: z.ZodBoolean;
        publicationStatus: z.ZodEnum<["DRAFT", "PUBLISHED"]>;
        sortOrder: z.ZodNumber;
        lastPublishedAt: z.ZodNullable<z.ZodString>;
        publishedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    keywords: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }[];
}, {
    keywords: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }[];
}>;
export declare const createMarketKeywordRequestSchema: z.ZodObject<{
    code: z.ZodString;
    displayName: z.ZodString;
    canonicalKeyword: z.ZodString;
    species: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gradeHint: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    aliases: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    sortOrder: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    code: string;
    displayName: string;
    canonicalKeyword: string;
    aliases: string[];
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    species?: string | null | undefined;
    gradeHint?: string | null | undefined;
}, {
    code: string;
    displayName: string;
    canonicalKeyword: string;
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    species?: string | null | undefined;
    gradeHint?: string | null | undefined;
    aliases?: string[] | undefined;
}>;
export declare const updateMarketKeywordRequestSchema: z.ZodObject<{
    code: z.ZodOptional<z.ZodString>;
    displayName: z.ZodOptional<z.ZodString>;
    canonicalKeyword: z.ZodOptional<z.ZodString>;
    species: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    gradeHint: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    aliases: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodString, "many">>>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    sortOrder: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    code?: string | undefined;
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    displayName?: string | undefined;
    canonicalKeyword?: string | undefined;
    species?: string | null | undefined;
    gradeHint?: string | null | undefined;
    aliases?: string[] | undefined;
}, {
    code?: string | undefined;
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    displayName?: string | undefined;
    canonicalKeyword?: string | undefined;
    species?: string | null | undefined;
    gradeHint?: string | null | undefined;
    aliases?: string[] | undefined;
}>;
export declare const createMarketKeywordResponseSchema: z.ZodObject<{
    keyword: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        code: z.ZodString;
        displayName: z.ZodString;
        canonicalKeyword: z.ZodString;
        species: z.ZodNullable<z.ZodString>;
        gradeHint: z.ZodNullable<z.ZodString>;
        aliases: z.ZodArray<z.ZodString, "many">;
        isActive: z.ZodBoolean;
        publicationStatus: z.ZodEnum<["DRAFT", "PUBLISHED"]>;
        sortOrder: z.ZodNumber;
        lastPublishedAt: z.ZodNullable<z.ZodString>;
        publishedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
}, {
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
}>;
export declare const updateMarketKeywordResponseSchema: z.ZodObject<{
    keyword: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        code: z.ZodString;
        displayName: z.ZodString;
        canonicalKeyword: z.ZodString;
        species: z.ZodNullable<z.ZodString>;
        gradeHint: z.ZodNullable<z.ZodString>;
        aliases: z.ZodArray<z.ZodString, "many">;
        isActive: z.ZodBoolean;
        publicationStatus: z.ZodEnum<["DRAFT", "PUBLISHED"]>;
        sortOrder: z.ZodNumber;
        lastPublishedAt: z.ZodNullable<z.ZodString>;
        publishedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
}, {
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
}>;
export declare const marketSeedListingInputSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    keywordId: z.ZodString;
    sourcePlatform: z.ZodDefault<z.ZodEnum<["MANUAL", "XIANYU_DETAIL_POC"]>>;
    listingId: z.ZodString;
    listingTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    snapshotUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodDefault<z.ZodEnum<["ACTIVE", "INVALID", "REPLACED", "PENDING_REVIEW"]>>;
    priority: z.ZodDefault<z.ZodNumber>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
    listingId: string;
    keywordId: string;
    sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
    priority: number;
    id?: string | undefined;
    note?: string | null | undefined;
    listingTitle?: string | null | undefined;
    snapshotUrl?: string | null | undefined;
}, {
    listingId: string;
    keywordId: string;
    status?: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED" | undefined;
    id?: string | undefined;
    note?: string | null | undefined;
    sourcePlatform?: "MANUAL" | "XIANYU_DETAIL_POC" | undefined;
    listingTitle?: string | null | undefined;
    snapshotUrl?: string | null | undefined;
    priority?: number | undefined;
}>;
export declare const upsertMarketSeedListingsRequestSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        keywordId: z.ZodString;
        sourcePlatform: z.ZodDefault<z.ZodEnum<["MANUAL", "XIANYU_DETAIL_POC"]>>;
        listingId: z.ZodString;
        listingTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        snapshotUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        status: z.ZodDefault<z.ZodEnum<["ACTIVE", "INVALID", "REPLACED", "PENDING_REVIEW"]>>;
        priority: z.ZodDefault<z.ZodNumber>;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        priority: number;
        id?: string | undefined;
        note?: string | null | undefined;
        listingTitle?: string | null | undefined;
        snapshotUrl?: string | null | undefined;
    }, {
        listingId: string;
        keywordId: string;
        status?: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED" | undefined;
        id?: string | undefined;
        note?: string | null | undefined;
        sourcePlatform?: "MANUAL" | "XIANYU_DETAIL_POC" | undefined;
        listingTitle?: string | null | undefined;
        snapshotUrl?: string | null | undefined;
        priority?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        priority: number;
        id?: string | undefined;
        note?: string | null | undefined;
        listingTitle?: string | null | undefined;
        snapshotUrl?: string | null | undefined;
    }[];
}, {
    items: {
        listingId: string;
        keywordId: string;
        status?: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED" | undefined;
        id?: string | undefined;
        note?: string | null | undefined;
        sourcePlatform?: "MANUAL" | "XIANYU_DETAIL_POC" | undefined;
        listingTitle?: string | null | undefined;
        snapshotUrl?: string | null | undefined;
        priority?: number | undefined;
    }[];
}>;
export declare const listMarketSeedListingsQuerySchema: z.ZodObject<{
    tenantId: z.ZodString;
    keywordId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    keywordId?: string | undefined;
}, {
    tenantId: string;
    keywordId?: string | undefined;
}>;
export declare const listMarketSeedListingsResponseSchema: z.ZodObject<{
    seedListings: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        keywordId: z.ZodString;
        sourcePlatform: z.ZodEnum<["MANUAL", "XIANYU_DETAIL_POC"]>;
        listingId: z.ZodString;
        listingTitle: z.ZodNullable<z.ZodString>;
        snapshotUrl: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["ACTIVE", "INVALID", "REPLACED", "PENDING_REVIEW"]>;
        priority: z.ZodNumber;
        note: z.ZodNullable<z.ZodString>;
        lastObservedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        listingTitle: string | null;
        snapshotUrl: string | null;
        priority: number;
        lastObservedAt: string | null;
    }, {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        listingTitle: string | null;
        snapshotUrl: string | null;
        priority: number;
        lastObservedAt: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    seedListings: {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        listingTitle: string | null;
        snapshotUrl: string | null;
        priority: number;
        lastObservedAt: string | null;
    }[];
}, {
    seedListings: {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        listingTitle: string | null;
        snapshotUrl: string | null;
        priority: number;
        lastObservedAt: string | null;
    }[];
}>;
export declare const upsertMarketSeedListingsResponseSchema: z.ZodObject<{
    seedListings: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        keywordId: z.ZodString;
        sourcePlatform: z.ZodEnum<["MANUAL", "XIANYU_DETAIL_POC"]>;
        listingId: z.ZodString;
        listingTitle: z.ZodNullable<z.ZodString>;
        snapshotUrl: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["ACTIVE", "INVALID", "REPLACED", "PENDING_REVIEW"]>;
        priority: z.ZodNumber;
        note: z.ZodNullable<z.ZodString>;
        lastObservedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        listingTitle: string | null;
        snapshotUrl: string | null;
        priority: number;
        lastObservedAt: string | null;
    }, {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        listingTitle: string | null;
        snapshotUrl: string | null;
        priority: number;
        lastObservedAt: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    seedListings: {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        listingTitle: string | null;
        snapshotUrl: string | null;
        priority: number;
        lastObservedAt: string | null;
    }[];
}, {
    seedListings: {
        status: "PENDING_REVIEW" | "ACTIVE" | "INVALID" | "REPLACED";
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        keywordId: string;
        sourcePlatform: "MANUAL" | "XIANYU_DETAIL_POC";
        listingTitle: string | null;
        snapshotUrl: string | null;
        priority: number;
        lastObservedAt: string | null;
    }[];
}>;
export declare const marketPriceSnapshotInputSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    keywordId: z.ZodString;
    observedAt: z.ZodString;
    priceCents: z.ZodNumber;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    priceCents: number;
    keywordId: string;
    observedAt: string;
    id?: string | undefined;
    note?: string | null | undefined;
}, {
    priceCents: number;
    keywordId: string;
    observedAt: string;
    id?: string | undefined;
    note?: string | null | undefined;
}>;
export declare const listMarketPriceSnapshotsQuerySchema: z.ZodObject<{
    tenantId: z.ZodString;
    keywordId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    limit: number;
    keywordId?: string | undefined;
}, {
    tenantId: string;
    keywordId?: string | undefined;
    limit?: number | undefined;
}>;
export declare const listMarketPriceSnapshotsResponseSchema: z.ZodObject<{
    snapshots: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        keywordId: z.ZodString;
        day: z.ZodString;
        observedAt: z.ZodString;
        priceCents: z.ZodNumber;
        note: z.ZodNullable<z.ZodString>;
        sourceType: z.ZodEnum<["MANUAL", "AUTO"]>;
        createdByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sourceType: "MANUAL" | "AUTO";
        createdByUserId: string | null;
        priceCents: number;
        keywordId: string;
        day: string;
        observedAt: string;
    }, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sourceType: "MANUAL" | "AUTO";
        createdByUserId: string | null;
        priceCents: number;
        keywordId: string;
        day: string;
        observedAt: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    snapshots: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sourceType: "MANUAL" | "AUTO";
        createdByUserId: string | null;
        priceCents: number;
        keywordId: string;
        day: string;
        observedAt: string;
    }[];
}, {
    snapshots: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sourceType: "MANUAL" | "AUTO";
        createdByUserId: string | null;
        priceCents: number;
        keywordId: string;
        day: string;
        observedAt: string;
    }[];
}>;
export declare const upsertMarketPriceSnapshotsRequestSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        keywordId: z.ZodString;
        observedAt: z.ZodString;
        priceCents: z.ZodNumber;
        note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        priceCents: number;
        keywordId: string;
        observedAt: string;
        id?: string | undefined;
        note?: string | null | undefined;
    }, {
        priceCents: number;
        keywordId: string;
        observedAt: string;
        id?: string | undefined;
        note?: string | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        priceCents: number;
        keywordId: string;
        observedAt: string;
        id?: string | undefined;
        note?: string | null | undefined;
    }[];
}, {
    items: {
        priceCents: number;
        keywordId: string;
        observedAt: string;
        id?: string | undefined;
        note?: string | null | undefined;
    }[];
}>;
export declare const upsertMarketPriceSnapshotsResponseSchema: z.ZodObject<{
    snapshots: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        keywordId: z.ZodString;
        day: z.ZodString;
        observedAt: z.ZodString;
        priceCents: z.ZodNumber;
        note: z.ZodNullable<z.ZodString>;
        sourceType: z.ZodEnum<["MANUAL", "AUTO"]>;
        createdByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sourceType: "MANUAL" | "AUTO";
        createdByUserId: string | null;
        priceCents: number;
        keywordId: string;
        day: string;
        observedAt: string;
    }, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sourceType: "MANUAL" | "AUTO";
        createdByUserId: string | null;
        priceCents: number;
        keywordId: string;
        day: string;
        observedAt: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    snapshots: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sourceType: "MANUAL" | "AUTO";
        createdByUserId: string | null;
        priceCents: number;
        keywordId: string;
        day: string;
        observedAt: string;
    }[];
}, {
    snapshots: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sourceType: "MANUAL" | "AUTO";
        createdByUserId: string | null;
        priceCents: number;
        keywordId: string;
        day: string;
        observedAt: string;
    }[];
}>;
export declare const marketReviewQueueItemSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    keywordId: z.ZodString;
    snapshotId: z.ZodNullable<z.ZodString>;
    normalizedId: z.ZodNullable<z.ZodString>;
    reasonCode: z.ZodString;
    reasonText: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
    keywordDisplayName: z.ZodString;
    listingId: z.ZodNullable<z.ZodString>;
    snapshotAt: z.ZodNullable<z.ZodString>;
    normalizedTitle: z.ZodNullable<z.ZodString>;
    effectivePriceCents: z.ZodNullable<z.ZodNumber>;
    confidenceLevel: z.ZodNullable<z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
    sellerCity: z.ZodNullable<z.ZodString>;
    resolvedByUserId: z.ZodNullable<z.ZodString>;
    resolvedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "REJECTED" | "PENDING" | "APPROVED";
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    effectivePriceCents: number | null;
    resolvedAt: string | null;
    listingId: string | null;
    keywordId: string;
    snapshotId: string | null;
    normalizedId: string | null;
    reasonCode: string;
    reasonText: string | null;
    keywordDisplayName: string;
    snapshotAt: string | null;
    normalizedTitle: string | null;
    confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
    sellerCity: string | null;
    resolvedByUserId: string | null;
}, {
    status: "REJECTED" | "PENDING" | "APPROVED";
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    effectivePriceCents: number | null;
    resolvedAt: string | null;
    listingId: string | null;
    keywordId: string;
    snapshotId: string | null;
    normalizedId: string | null;
    reasonCode: string;
    reasonText: string | null;
    keywordDisplayName: string;
    snapshotAt: string | null;
    normalizedTitle: string | null;
    confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
    sellerCity: string | null;
    resolvedByUserId: string | null;
}>;
export declare const listMarketReviewQueueQuerySchema: z.ZodObject<{
    tenantId: z.ZodString;
    keywordId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>>;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    status?: "REJECTED" | "PENDING" | "APPROVED" | undefined;
    keywordId?: string | undefined;
}, {
    tenantId: string;
    status?: "REJECTED" | "PENDING" | "APPROVED" | undefined;
    keywordId?: string | undefined;
}>;
export declare const listMarketReviewQueueResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        keywordId: z.ZodString;
        snapshotId: z.ZodNullable<z.ZodString>;
        normalizedId: z.ZodNullable<z.ZodString>;
        reasonCode: z.ZodString;
        reasonText: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
        keywordDisplayName: z.ZodString;
        listingId: z.ZodNullable<z.ZodString>;
        snapshotAt: z.ZodNullable<z.ZodString>;
        normalizedTitle: z.ZodNullable<z.ZodString>;
        effectivePriceCents: z.ZodNullable<z.ZodNumber>;
        confidenceLevel: z.ZodNullable<z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
        sellerCity: z.ZodNullable<z.ZodString>;
        resolvedByUserId: z.ZodNullable<z.ZodString>;
        resolvedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "REJECTED" | "PENDING" | "APPROVED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        effectivePriceCents: number | null;
        resolvedAt: string | null;
        listingId: string | null;
        keywordId: string;
        snapshotId: string | null;
        normalizedId: string | null;
        reasonCode: string;
        reasonText: string | null;
        keywordDisplayName: string;
        snapshotAt: string | null;
        normalizedTitle: string | null;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
        sellerCity: string | null;
        resolvedByUserId: string | null;
    }, {
        status: "REJECTED" | "PENDING" | "APPROVED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        effectivePriceCents: number | null;
        resolvedAt: string | null;
        listingId: string | null;
        keywordId: string;
        snapshotId: string | null;
        normalizedId: string | null;
        reasonCode: string;
        reasonText: string | null;
        keywordDisplayName: string;
        snapshotAt: string | null;
        normalizedTitle: string | null;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
        sellerCity: string | null;
        resolvedByUserId: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        status: "REJECTED" | "PENDING" | "APPROVED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        effectivePriceCents: number | null;
        resolvedAt: string | null;
        listingId: string | null;
        keywordId: string;
        snapshotId: string | null;
        normalizedId: string | null;
        reasonCode: string;
        reasonText: string | null;
        keywordDisplayName: string;
        snapshotAt: string | null;
        normalizedTitle: string | null;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
        sellerCity: string | null;
        resolvedByUserId: string | null;
    }[];
}, {
    items: {
        status: "REJECTED" | "PENDING" | "APPROVED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        effectivePriceCents: number | null;
        resolvedAt: string | null;
        listingId: string | null;
        keywordId: string;
        snapshotId: string | null;
        normalizedId: string | null;
        reasonCode: string;
        reasonText: string | null;
        keywordDisplayName: string;
        snapshotAt: string | null;
        normalizedTitle: string | null;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
        sellerCity: string | null;
        resolvedByUserId: string | null;
    }[];
}>;
export declare const decideMarketReviewQueueRequestSchema: z.ZodObject<{
    reasonText: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    reasonText?: string | null | undefined;
}, {
    reasonText?: string | null | undefined;
}>;
export declare const decideMarketReviewQueueResponseSchema: z.ZodObject<{
    item: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        keywordId: z.ZodString;
        snapshotId: z.ZodNullable<z.ZodString>;
        normalizedId: z.ZodNullable<z.ZodString>;
        reasonCode: z.ZodString;
        reasonText: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["PENDING", "APPROVED", "REJECTED"]>;
        keywordDisplayName: z.ZodString;
        listingId: z.ZodNullable<z.ZodString>;
        snapshotAt: z.ZodNullable<z.ZodString>;
        normalizedTitle: z.ZodNullable<z.ZodString>;
        effectivePriceCents: z.ZodNullable<z.ZodNumber>;
        confidenceLevel: z.ZodNullable<z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
        sellerCity: z.ZodNullable<z.ZodString>;
        resolvedByUserId: z.ZodNullable<z.ZodString>;
        resolvedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "REJECTED" | "PENDING" | "APPROVED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        effectivePriceCents: number | null;
        resolvedAt: string | null;
        listingId: string | null;
        keywordId: string;
        snapshotId: string | null;
        normalizedId: string | null;
        reasonCode: string;
        reasonText: string | null;
        keywordDisplayName: string;
        snapshotAt: string | null;
        normalizedTitle: string | null;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
        sellerCity: string | null;
        resolvedByUserId: string | null;
    }, {
        status: "REJECTED" | "PENDING" | "APPROVED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        effectivePriceCents: number | null;
        resolvedAt: string | null;
        listingId: string | null;
        keywordId: string;
        snapshotId: string | null;
        normalizedId: string | null;
        reasonCode: string;
        reasonText: string | null;
        keywordDisplayName: string;
        snapshotAt: string | null;
        normalizedTitle: string | null;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
        sellerCity: string | null;
        resolvedByUserId: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    item: {
        status: "REJECTED" | "PENDING" | "APPROVED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        effectivePriceCents: number | null;
        resolvedAt: string | null;
        listingId: string | null;
        keywordId: string;
        snapshotId: string | null;
        normalizedId: string | null;
        reasonCode: string;
        reasonText: string | null;
        keywordDisplayName: string;
        snapshotAt: string | null;
        normalizedTitle: string | null;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
        sellerCity: string | null;
        resolvedByUserId: string | null;
    };
}, {
    item: {
        status: "REJECTED" | "PENDING" | "APPROVED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        effectivePriceCents: number | null;
        resolvedAt: string | null;
        listingId: string | null;
        keywordId: string;
        snapshotId: string | null;
        normalizedId: string | null;
        reasonCode: string;
        reasonText: string | null;
        keywordDisplayName: string;
        snapshotAt: string | null;
        normalizedTitle: string | null;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH" | null;
        sellerCity: string | null;
        resolvedByUserId: string | null;
    };
}>;
export declare const marketTrendPointSchema: z.ZodObject<{
    day: z.ZodString;
    priceCents: z.ZodNullable<z.ZodNumber>;
    priceMedianCents: z.ZodNullable<z.ZodNumber>;
    sampleCount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    priceCents: number | null;
    day: string;
    priceMedianCents: number | null;
    sampleCount: number;
}, {
    priceCents: number | null;
    day: string;
    priceMedianCents: number | null;
    sampleCount: number;
}>;
export declare const marketPublishRecordSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    keywordId: z.ZodString;
    keywordDisplayName: z.ZodString;
    latestDay: z.ZodString;
    latestObservedAt: z.ZodNullable<z.ZodString>;
    priceCents: z.ZodNullable<z.ZodNumber>;
    sampleCount: z.ZodNumber;
    priceMedianCents: z.ZodNullable<z.ZodNumber>;
    priceAvgCents: z.ZodNullable<z.ZodNumber>;
    priceLowCents: z.ZodNullable<z.ZodNumber>;
    priceHighCents: z.ZodNullable<z.ZodNumber>;
    confidenceLevel: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
    trend7d: z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        priceCents: z.ZodNullable<z.ZodNumber>;
        priceMedianCents: z.ZodNullable<z.ZodNumber>;
        sampleCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }, {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }>, "many">;
    trend30d: z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        priceCents: z.ZodNullable<z.ZodNumber>;
        priceMedianCents: z.ZodNullable<z.ZodNumber>;
        sampleCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }, {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }>, "many">;
    referenceNote: z.ZodNullable<z.ZodString>;
    reviewQueuePendingCount: z.ZodNumber;
    publishedAt: z.ZodString;
    publishedByUserId: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    referenceNote: string | null;
    tenantId: string;
    publishedAt: string;
    priceCents: number | null;
    publishedByUserId: string | null;
    keywordId: string;
    keywordDisplayName: string;
    confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
    priceMedianCents: number | null;
    sampleCount: number;
    latestDay: string;
    latestObservedAt: string | null;
    priceAvgCents: number | null;
    priceLowCents: number | null;
    priceHighCents: number | null;
    trend7d: {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }[];
    trend30d: {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }[];
    reviewQueuePendingCount: number;
}, {
    id: string;
    referenceNote: string | null;
    tenantId: string;
    publishedAt: string;
    priceCents: number | null;
    publishedByUserId: string | null;
    keywordId: string;
    keywordDisplayName: string;
    confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
    priceMedianCents: number | null;
    sampleCount: number;
    latestDay: string;
    latestObservedAt: string | null;
    priceAvgCents: number | null;
    priceLowCents: number | null;
    priceHighCents: number | null;
    trend7d: {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }[];
    trend30d: {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }[];
    reviewQueuePendingCount: number;
}>;
export declare const listMarketPublishHistoryQuerySchema: z.ZodObject<{
    tenantId: z.ZodString;
    keywordId: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    limit: number;
    keywordId?: string | undefined;
}, {
    tenantId: string;
    keywordId?: string | undefined;
    limit?: number | undefined;
}>;
export declare const listMarketPublishHistoryResponseSchema: z.ZodObject<{
    records: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        keywordId: z.ZodString;
        keywordDisplayName: z.ZodString;
        latestDay: z.ZodString;
        latestObservedAt: z.ZodNullable<z.ZodString>;
        priceCents: z.ZodNullable<z.ZodNumber>;
        sampleCount: z.ZodNumber;
        priceMedianCents: z.ZodNullable<z.ZodNumber>;
        priceAvgCents: z.ZodNullable<z.ZodNumber>;
        priceLowCents: z.ZodNullable<z.ZodNumber>;
        priceHighCents: z.ZodNullable<z.ZodNumber>;
        confidenceLevel: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        trend7d: z.ZodArray<z.ZodObject<{
            day: z.ZodString;
            priceCents: z.ZodNullable<z.ZodNumber>;
            priceMedianCents: z.ZodNullable<z.ZodNumber>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }>, "many">;
        trend30d: z.ZodArray<z.ZodObject<{
            day: z.ZodString;
            priceCents: z.ZodNullable<z.ZodNumber>;
            priceMedianCents: z.ZodNullable<z.ZodNumber>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }>, "many">;
        referenceNote: z.ZodNullable<z.ZodString>;
        reviewQueuePendingCount: z.ZodNumber;
        publishedAt: z.ZodString;
        publishedByUserId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        referenceNote: string | null;
        tenantId: string;
        publishedAt: string;
        priceCents: number | null;
        publishedByUserId: string | null;
        keywordId: string;
        keywordDisplayName: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestDay: string;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        trend30d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        reviewQueuePendingCount: number;
    }, {
        id: string;
        referenceNote: string | null;
        tenantId: string;
        publishedAt: string;
        priceCents: number | null;
        publishedByUserId: string | null;
        keywordId: string;
        keywordDisplayName: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestDay: string;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        trend30d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        reviewQueuePendingCount: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    records: {
        id: string;
        referenceNote: string | null;
        tenantId: string;
        publishedAt: string;
        priceCents: number | null;
        publishedByUserId: string | null;
        keywordId: string;
        keywordDisplayName: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestDay: string;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        trend30d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        reviewQueuePendingCount: number;
    }[];
}, {
    records: {
        id: string;
        referenceNote: string | null;
        tenantId: string;
        publishedAt: string;
        priceCents: number | null;
        publishedByUserId: string | null;
        keywordId: string;
        keywordDisplayName: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestDay: string;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        trend30d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        reviewQueuePendingCount: number;
    }[];
}>;
export declare const publishMarketKeywordResponseSchema: z.ZodObject<{
    keyword: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        code: z.ZodString;
        displayName: z.ZodString;
        canonicalKeyword: z.ZodString;
        species: z.ZodNullable<z.ZodString>;
        gradeHint: z.ZodNullable<z.ZodString>;
        aliases: z.ZodArray<z.ZodString, "many">;
        isActive: z.ZodBoolean;
        publicationStatus: z.ZodEnum<["DRAFT", "PUBLISHED"]>;
        sortOrder: z.ZodNumber;
        lastPublishedAt: z.ZodNullable<z.ZodString>;
        publishedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }>;
    record: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        keywordId: z.ZodString;
        keywordDisplayName: z.ZodString;
        latestDay: z.ZodString;
        latestObservedAt: z.ZodNullable<z.ZodString>;
        priceCents: z.ZodNullable<z.ZodNumber>;
        sampleCount: z.ZodNumber;
        priceMedianCents: z.ZodNullable<z.ZodNumber>;
        priceAvgCents: z.ZodNullable<z.ZodNumber>;
        priceLowCents: z.ZodNullable<z.ZodNumber>;
        priceHighCents: z.ZodNullable<z.ZodNumber>;
        confidenceLevel: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        trend7d: z.ZodArray<z.ZodObject<{
            day: z.ZodString;
            priceCents: z.ZodNullable<z.ZodNumber>;
            priceMedianCents: z.ZodNullable<z.ZodNumber>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }>, "many">;
        trend30d: z.ZodArray<z.ZodObject<{
            day: z.ZodString;
            priceCents: z.ZodNullable<z.ZodNumber>;
            priceMedianCents: z.ZodNullable<z.ZodNumber>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }>, "many">;
        referenceNote: z.ZodNullable<z.ZodString>;
        reviewQueuePendingCount: z.ZodNumber;
        publishedAt: z.ZodString;
        publishedByUserId: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        referenceNote: string | null;
        tenantId: string;
        publishedAt: string;
        priceCents: number | null;
        publishedByUserId: string | null;
        keywordId: string;
        keywordDisplayName: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestDay: string;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        trend30d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        reviewQueuePendingCount: number;
    }, {
        id: string;
        referenceNote: string | null;
        tenantId: string;
        publishedAt: string;
        priceCents: number | null;
        publishedByUserId: string | null;
        keywordId: string;
        keywordDisplayName: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestDay: string;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        trend30d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        reviewQueuePendingCount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
    record: {
        id: string;
        referenceNote: string | null;
        tenantId: string;
        publishedAt: string;
        priceCents: number | null;
        publishedByUserId: string | null;
        keywordId: string;
        keywordDisplayName: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestDay: string;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        trend30d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        reviewQueuePendingCount: number;
    };
}, {
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
    record: {
        id: string;
        referenceNote: string | null;
        tenantId: string;
        publishedAt: string;
        priceCents: number | null;
        publishedByUserId: string | null;
        keywordId: string;
        keywordDisplayName: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestDay: string;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        trend30d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
        reviewQueuePendingCount: number;
    };
}>;
export declare const getMarketModuleSwitchesQuerySchema: z.ZodObject<{
    tenantId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
}, {
    tenantId: string;
}>;
export declare const getMarketModuleSwitchesResponseSchema: z.ZodObject<{
    switches: z.ZodObject<{
        tenantId: z.ZodString;
        marketReferenceEnabled: z.ZodBoolean;
        reviewQueueEnabled: z.ZodBoolean;
        publishEnabled: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        marketReferenceEnabled: boolean;
        reviewQueueEnabled: boolean;
        publishEnabled: boolean;
    }, {
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        marketReferenceEnabled: boolean;
        reviewQueueEnabled: boolean;
        publishEnabled: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    switches: {
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        marketReferenceEnabled: boolean;
        reviewQueueEnabled: boolean;
        publishEnabled: boolean;
    };
}, {
    switches: {
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        marketReferenceEnabled: boolean;
        reviewQueueEnabled: boolean;
        publishEnabled: boolean;
    };
}>;
export declare const updateMarketModuleSwitchesRequestSchema: z.ZodObject<{
    marketReferenceEnabled: z.ZodOptional<z.ZodBoolean>;
    reviewQueueEnabled: z.ZodOptional<z.ZodBoolean>;
    publishEnabled: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    marketReferenceEnabled?: boolean | undefined;
    reviewQueueEnabled?: boolean | undefined;
    publishEnabled?: boolean | undefined;
}, {
    marketReferenceEnabled?: boolean | undefined;
    reviewQueueEnabled?: boolean | undefined;
    publishEnabled?: boolean | undefined;
}>;
export declare const updateMarketModuleSwitchesResponseSchema: z.ZodObject<{
    switches: z.ZodObject<{
        tenantId: z.ZodString;
        marketReferenceEnabled: z.ZodBoolean;
        reviewQueueEnabled: z.ZodBoolean;
        publishEnabled: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        marketReferenceEnabled: boolean;
        reviewQueueEnabled: boolean;
        publishEnabled: boolean;
    }, {
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        marketReferenceEnabled: boolean;
        reviewQueueEnabled: boolean;
        publishEnabled: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    switches: {
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        marketReferenceEnabled: boolean;
        reviewQueueEnabled: boolean;
        publishEnabled: boolean;
    };
}, {
    switches: {
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        marketReferenceEnabled: boolean;
        reviewQueueEnabled: boolean;
        publishEnabled: boolean;
    };
}>;
export declare const toggleMarketKeywordResponseSchema: z.ZodObject<{
    keyword: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        code: z.ZodString;
        displayName: z.ZodString;
        canonicalKeyword: z.ZodString;
        species: z.ZodNullable<z.ZodString>;
        gradeHint: z.ZodNullable<z.ZodString>;
        aliases: z.ZodArray<z.ZodString, "many">;
        isActive: z.ZodBoolean;
        publicationStatus: z.ZodEnum<["DRAFT", "PUBLISHED"]>;
        sortOrder: z.ZodNumber;
        lastPublishedAt: z.ZodNullable<z.ZodString>;
        publishedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
}, {
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
}>;
export declare const marketOverviewQuerySchema: z.ZodObject<{
    window: z.ZodDefault<z.ZodEnum<["7d", "30d"]>>;
}, "strip", z.ZodTypeAny, {
    window: "7d" | "30d";
}, {
    window?: "7d" | "30d" | undefined;
}>;
export declare const marketOverviewItemSchema: z.ZodObject<{
    keywordId: z.ZodString;
    displayName: z.ZodString;
    priceCents: z.ZodNullable<z.ZodNumber>;
    priceMedianCents: z.ZodNullable<z.ZodNumber>;
    priceAvgCents: z.ZodNullable<z.ZodNumber>;
    priceLowCents: z.ZodNullable<z.ZodNumber>;
    priceHighCents: z.ZodNullable<z.ZodNumber>;
    sampleCount: z.ZodNumber;
    confidenceLevel: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
    latestObservedAt: z.ZodNullable<z.ZodString>;
    trend7d: z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        priceCents: z.ZodNullable<z.ZodNumber>;
        priceMedianCents: z.ZodNullable<z.ZodNumber>;
        sampleCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }, {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    priceCents: number | null;
    displayName: string;
    keywordId: string;
    confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
    priceMedianCents: number | null;
    sampleCount: number;
    latestObservedAt: string | null;
    priceAvgCents: number | null;
    priceLowCents: number | null;
    priceHighCents: number | null;
    trend7d: {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }[];
}, {
    priceCents: number | null;
    displayName: string;
    keywordId: string;
    confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
    priceMedianCents: number | null;
    sampleCount: number;
    latestObservedAt: string | null;
    priceAvgCents: number | null;
    priceLowCents: number | null;
    priceHighCents: number | null;
    trend7d: {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }[];
}>;
export declare const marketOverviewResponseSchema: z.ZodObject<{
    moduleState: z.ZodObject<{
        marketReferenceEnabled: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        marketReferenceEnabled: boolean;
    }, {
        marketReferenceEnabled: boolean;
    }>;
    items: z.ZodArray<z.ZodObject<{
        keywordId: z.ZodString;
        displayName: z.ZodString;
        priceCents: z.ZodNullable<z.ZodNumber>;
        priceMedianCents: z.ZodNullable<z.ZodNumber>;
        priceAvgCents: z.ZodNullable<z.ZodNumber>;
        priceLowCents: z.ZodNullable<z.ZodNumber>;
        priceHighCents: z.ZodNullable<z.ZodNumber>;
        sampleCount: z.ZodNumber;
        confidenceLevel: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        latestObservedAt: z.ZodNullable<z.ZodString>;
        trend7d: z.ZodArray<z.ZodObject<{
            day: z.ZodString;
            priceCents: z.ZodNullable<z.ZodNumber>;
            priceMedianCents: z.ZodNullable<z.ZodNumber>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        priceCents: number | null;
        displayName: string;
        keywordId: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
    }, {
        priceCents: number | null;
        displayName: string;
        keywordId: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        priceCents: number | null;
        displayName: string;
        keywordId: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
    }[];
    moduleState: {
        marketReferenceEnabled: boolean;
    };
}, {
    items: {
        priceCents: number | null;
        displayName: string;
        keywordId: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
    }[];
    moduleState: {
        marketReferenceEnabled: boolean;
    };
}>;
export declare const marketKeywordDetailResponseSchema: z.ZodObject<{
    keyword: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        code: z.ZodString;
        displayName: z.ZodString;
        canonicalKeyword: z.ZodString;
        species: z.ZodNullable<z.ZodString>;
        gradeHint: z.ZodNullable<z.ZodString>;
        aliases: z.ZodArray<z.ZodString, "many">;
        isActive: z.ZodBoolean;
        publicationStatus: z.ZodEnum<["DRAFT", "PUBLISHED"]>;
        sortOrder: z.ZodNumber;
        lastPublishedAt: z.ZodNullable<z.ZodString>;
        publishedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }, {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    }>;
    latestMetrics: z.ZodObject<{
        keywordId: z.ZodString;
        displayName: z.ZodString;
        priceCents: z.ZodNullable<z.ZodNumber>;
        priceMedianCents: z.ZodNullable<z.ZodNumber>;
        priceAvgCents: z.ZodNullable<z.ZodNumber>;
        priceLowCents: z.ZodNullable<z.ZodNumber>;
        priceHighCents: z.ZodNullable<z.ZodNumber>;
        sampleCount: z.ZodNumber;
        confidenceLevel: z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>;
        latestObservedAt: z.ZodNullable<z.ZodString>;
    } & {
        trend7d: z.ZodArray<z.ZodObject<{
            day: z.ZodString;
            priceCents: z.ZodNullable<z.ZodNumber>;
            priceMedianCents: z.ZodNullable<z.ZodNumber>;
            sampleCount: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }, {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        priceCents: number | null;
        displayName: string;
        keywordId: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
    }, {
        priceCents: number | null;
        displayName: string;
        keywordId: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
    }>;
    trend30d: z.ZodArray<z.ZodObject<{
        day: z.ZodString;
        priceCents: z.ZodNullable<z.ZodNumber>;
        priceMedianCents: z.ZodNullable<z.ZodNumber>;
        sampleCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }, {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }>, "many">;
    referenceNote: z.ZodNullable<z.ZodString>;
    publishedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    referenceNote: string | null;
    publishedAt: string;
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
    trend30d: {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }[];
    latestMetrics: {
        priceCents: number | null;
        displayName: string;
        keywordId: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
    };
}, {
    referenceNote: string | null;
    publishedAt: string;
    keyword: {
        code: string;
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        displayName: string;
        canonicalKeyword: string;
        species: string | null;
        gradeHint: string | null;
        aliases: string[];
        publicationStatus: "DRAFT" | "PUBLISHED";
        lastPublishedAt: string | null;
        publishedByUserId: string | null;
    };
    trend30d: {
        priceCents: number | null;
        day: string;
        priceMedianCents: number | null;
        sampleCount: number;
    }[];
    latestMetrics: {
        priceCents: number | null;
        displayName: string;
        keywordId: string;
        confidenceLevel: "LOW" | "MEDIUM" | "HIGH";
        priceMedianCents: number | null;
        sampleCount: number;
        latestObservedAt: string | null;
        priceAvgCents: number | null;
        priceLowCents: number | null;
        priceHighCents: number | null;
        trend7d: {
            priceCents: number | null;
            day: string;
            priceMedianCents: number | null;
            sampleCount: number;
        }[];
    };
}>;
export type MarketSourcePlatform = z.infer<typeof marketSourcePlatformSchema>;
export type MarketSeedListingStatus = z.infer<typeof marketSeedListingStatusSchema>;
export type MarketReviewStatus = z.infer<typeof marketReviewStatusSchema>;
export type MarketConfidenceLevel = z.infer<typeof marketConfidenceLevelSchema>;
export type MarketOverviewWindow = z.infer<typeof marketOverviewWindowSchema>;
export type MarketPublicationStatus = z.infer<typeof marketPublicationStatusSchema>;
export type MarketPriceSourceType = z.infer<typeof marketPriceSourceTypeSchema>;
export type MarketPublicModuleState = z.infer<typeof marketPublicModuleStateSchema>;
export type MarketModuleSwitches = z.infer<typeof marketModuleSwitchesSchema>;
export type MarketKeyword = z.infer<typeof marketKeywordSchema>;
export type MarketSeedListing = z.infer<typeof marketSeedListingSchema>;
export type MarketPriceSnapshot = z.infer<typeof marketPriceSnapshotSchema>;
export type ListMarketKeywordsQuery = z.infer<typeof listMarketKeywordsQuerySchema>;
export type ListMarketKeywordsResponse = z.infer<typeof listMarketKeywordsResponseSchema>;
export type CreateMarketKeywordRequest = z.infer<typeof createMarketKeywordRequestSchema>;
export type UpdateMarketKeywordRequest = z.infer<typeof updateMarketKeywordRequestSchema>;
export type CreateMarketKeywordResponse = z.infer<typeof createMarketKeywordResponseSchema>;
export type UpdateMarketKeywordResponse = z.infer<typeof updateMarketKeywordResponseSchema>;
export type MarketSeedListingInput = z.infer<typeof marketSeedListingInputSchema>;
export type ListMarketSeedListingsQuery = z.infer<typeof listMarketSeedListingsQuerySchema>;
export type ListMarketSeedListingsResponse = z.infer<typeof listMarketSeedListingsResponseSchema>;
export type UpsertMarketSeedListingsRequest = z.infer<typeof upsertMarketSeedListingsRequestSchema>;
export type UpsertMarketSeedListingsResponse = z.infer<typeof upsertMarketSeedListingsResponseSchema>;
export type MarketPriceSnapshotInput = z.infer<typeof marketPriceSnapshotInputSchema>;
export type ListMarketPriceSnapshotsQuery = z.infer<typeof listMarketPriceSnapshotsQuerySchema>;
export type ListMarketPriceSnapshotsResponse = z.infer<typeof listMarketPriceSnapshotsResponseSchema>;
export type UpsertMarketPriceSnapshotsRequest = z.infer<typeof upsertMarketPriceSnapshotsRequestSchema>;
export type UpsertMarketPriceSnapshotsResponse = z.infer<typeof upsertMarketPriceSnapshotsResponseSchema>;
export type MarketReviewQueueItem = z.infer<typeof marketReviewQueueItemSchema>;
export type ListMarketReviewQueueQuery = z.infer<typeof listMarketReviewQueueQuerySchema>;
export type ListMarketReviewQueueResponse = z.infer<typeof listMarketReviewQueueResponseSchema>;
export type DecideMarketReviewQueueRequest = z.infer<typeof decideMarketReviewQueueRequestSchema>;
export type DecideMarketReviewQueueResponse = z.infer<typeof decideMarketReviewQueueResponseSchema>;
export type MarketTrendPoint = z.infer<typeof marketTrendPointSchema>;
export type MarketPublishRecord = z.infer<typeof marketPublishRecordSchema>;
export type ListMarketPublishHistoryQuery = z.infer<typeof listMarketPublishHistoryQuerySchema>;
export type ListMarketPublishHistoryResponse = z.infer<typeof listMarketPublishHistoryResponseSchema>;
export type PublishMarketKeywordResponse = z.infer<typeof publishMarketKeywordResponseSchema>;
export type GetMarketModuleSwitchesQuery = z.infer<typeof getMarketModuleSwitchesQuerySchema>;
export type GetMarketModuleSwitchesResponse = z.infer<typeof getMarketModuleSwitchesResponseSchema>;
export type UpdateMarketModuleSwitchesRequest = z.infer<typeof updateMarketModuleSwitchesRequestSchema>;
export type UpdateMarketModuleSwitchesResponse = z.infer<typeof updateMarketModuleSwitchesResponseSchema>;
export type ToggleMarketKeywordResponse = z.infer<typeof toggleMarketKeywordResponseSchema>;
export type MarketOverviewQuery = z.infer<typeof marketOverviewQuerySchema>;
export type MarketOverviewItem = z.infer<typeof marketOverviewItemSchema>;
export type MarketOverviewResponse = z.infer<typeof marketOverviewResponseSchema>;
export type MarketKeywordDetailResponse = z.infer<typeof marketKeywordDetailResponseSchema>;
