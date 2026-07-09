import { z } from 'zod';
export declare const marketplaceListingKindSchema: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
export declare const marketplaceSaleModeSchema: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
export declare const marketplaceReviewStatusSchema: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>;
export declare const marketplaceListingLifecycleStatusSchema: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>;
export declare const marketplaceTransactionStatusSchema: z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>;
export declare const marketplaceAuctionStatusSchema: z.ZodEnum<["NONE", "SCHEDULED", "LIVE", "ENDED", "WON_PENDING_SETTLEMENT", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CLOSED"]>;
export declare const marketplaceBidStatusSchema: z.ZodEnum<["ACTIVE", "OUTBID", "WINNING", "RETRACTED", "INVALIDATED"]>;
export declare const marketplaceDealStatusSchema: z.ZodEnum<["PENDING_CONFIRMATION", "SELLER_CONFIRMED", "BUYER_CONFIRMED", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CANCELLED", "CLOSED"]>;
export declare const marketplaceDisputeStatusSchema: z.ZodEnum<["OPEN", "UNDER_REVIEW", "RESOLVED", "REJECTED", "CLOSED"]>;
export declare const marketplaceSnapshotFieldOriginSchema: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
export declare const marketplaceBuyerToneSchema: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
export declare const marketplaceBuyerTrustSignalKeySchema: z.ZodEnum<["LINEAGE", "CERTIFICATE", "HEALTH", "DELIVERY", "AUCTION_RULE", "RECENT_ACTIVITY"]>;
export declare const marketplaceListingSourceSchema: z.ZodObject<{
    listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
    sourceProductId: z.ZodNullable<z.ZodString>;
    sourceBreederId: z.ZodNullable<z.ZodString>;
    sourceBatchId: z.ZodNullable<z.ZodString>;
    sourceProductCode: z.ZodNullable<z.ZodString>;
    sourceBreederCode: z.ZodNullable<z.ZodString>;
    sourceBatchNo: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    sourceProductId: string | null;
    sourceBreederId: string | null;
    sourceBatchId: string | null;
    sourceProductCode: string | null;
    sourceBreederCode: string | null;
    sourceBatchNo: string | null;
}, {
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    sourceProductId: string | null;
    sourceBreederId: string | null;
    sourceBatchId: string | null;
    sourceProductCode: string | null;
    sourceBreederCode: string | null;
    sourceBatchNo: string | null;
}>;
export declare const marketplaceCertificateRefSchema: z.ZodObject<{
    certificateId: z.ZodString;
    productId: z.ZodNullable<z.ZodString>;
    saleBatchId: z.ZodNullable<z.ZodString>;
    verifyId: z.ZodNullable<z.ZodString>;
    certNo: z.ZodNullable<z.ZodString>;
    issuedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    saleBatchId: string | null;
    productId: string | null;
    certificateId: string;
    verifyId: string | null;
    certNo: string | null;
    issuedAt: string | null;
}, {
    saleBatchId: string | null;
    productId: string | null;
    certificateId: string;
    verifyId: string | null;
    certNo: string | null;
    issuedAt: string | null;
}>;
export declare const marketplaceLineageSummarySchema: z.ZodObject<{
    seriesName: z.ZodNullable<z.ZodString>;
    lineageType: z.ZodNullable<z.ZodString>;
    crossLabel: z.ZodNullable<z.ZodString>;
    selfCode: z.ZodNullable<z.ZodString>;
    sireCode: z.ZodNullable<z.ZodString>;
    damCode: z.ZodNullable<z.ZodString>;
    mateCode: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    seriesName: string | null;
    lineageType: string | null;
    crossLabel: string | null;
    selfCode: string | null;
    sireCode: string | null;
    damCode: string | null;
    mateCode: string | null;
}, {
    seriesName: string | null;
    lineageType: string | null;
    crossLabel: string | null;
    selfCode: string | null;
    sireCode: string | null;
    damCode: string | null;
    mateCode: string | null;
}>;
export declare const marketplaceHealthSummarySchema: z.ZodObject<{
    summary: z.ZodNullable<z.ZodString>;
    latestEventType: z.ZodNullable<z.ZodString>;
    latestEventAt: z.ZodNullable<z.ZodString>;
    tags: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    summary: string | null;
    latestEventType: string | null;
    latestEventAt: string | null;
    tags: string[];
}, {
    summary: string | null;
    latestEventType: string | null;
    latestEventAt: string | null;
    tags: string[];
}>;
export declare const marketplacePriceSummarySchema: z.ZodObject<{
    saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
    currency: z.ZodString;
    fixedPriceCents: z.ZodNullable<z.ZodNumber>;
    openingBidCents: z.ZodNullable<z.ZodNumber>;
    reservePriceCents: z.ZodNullable<z.ZodNumber>;
    bidIncrementCents: z.ZodNullable<z.ZodNumber>;
    auctionStartsAt: z.ZodNullable<z.ZodString>;
    auctionEndsAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    saleMode: "FIXED_PRICE" | "AUCTION";
    fixedPriceCents: number | null;
    openingBidCents: number | null;
    reservePriceCents: number | null;
    bidIncrementCents: number | null;
    auctionStartsAt: string | null;
    auctionEndsAt: string | null;
}, {
    currency: string;
    saleMode: "FIXED_PRICE" | "AUCTION";
    fixedPriceCents: number | null;
    openingBidCents: number | null;
    reservePriceCents: number | null;
    bidIncrementCents: number | null;
    auctionStartsAt: string | null;
    auctionEndsAt: string | null;
}>;
export declare const marketplaceSnapshotFieldOriginsSchema: z.ZodObject<{
    title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
    coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
    gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
    lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
    certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
    healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
    sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
    deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
    priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
}, "strip", z.ZodTypeAny, {
    coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
}, {
    coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
}>;
export declare const marketplaceListingSnapshotPayloadSchema: z.ZodObject<{
    source: z.ZodObject<{
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        sourceProductId: z.ZodNullable<z.ZodString>;
        sourceBreederId: z.ZodNullable<z.ZodString>;
        sourceBatchId: z.ZodNullable<z.ZodString>;
        sourceProductCode: z.ZodNullable<z.ZodString>;
        sourceBreederCode: z.ZodNullable<z.ZodString>;
        sourceBatchNo: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        sourceProductCode: string | null;
        sourceBreederCode: string | null;
        sourceBatchNo: string | null;
    }, {
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        sourceProductCode: string | null;
        sourceBreederCode: string | null;
        sourceBatchNo: string | null;
    }>;
    title: z.ZodString;
    subtitle: z.ZodNullable<z.ZodString>;
    coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    lineageSummary: z.ZodObject<{
        seriesName: z.ZodNullable<z.ZodString>;
        lineageType: z.ZodNullable<z.ZodString>;
        crossLabel: z.ZodNullable<z.ZodString>;
        selfCode: z.ZodNullable<z.ZodString>;
        sireCode: z.ZodNullable<z.ZodString>;
        damCode: z.ZodNullable<z.ZodString>;
        mateCode: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        seriesName: string | null;
        lineageType: string | null;
        crossLabel: string | null;
        selfCode: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
    }, {
        seriesName: string | null;
        lineageType: string | null;
        crossLabel: string | null;
        selfCode: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
    }>;
    certificateRefs: z.ZodArray<z.ZodObject<{
        certificateId: z.ZodString;
        productId: z.ZodNullable<z.ZodString>;
        saleBatchId: z.ZodNullable<z.ZodString>;
        verifyId: z.ZodNullable<z.ZodString>;
        certNo: z.ZodNullable<z.ZodString>;
        issuedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        saleBatchId: string | null;
        productId: string | null;
        certificateId: string;
        verifyId: string | null;
        certNo: string | null;
        issuedAt: string | null;
    }, {
        saleBatchId: string | null;
        productId: string | null;
        certificateId: string;
        verifyId: string | null;
        certNo: string | null;
        issuedAt: string | null;
    }>, "many">;
    healthSummary: z.ZodObject<{
        summary: z.ZodNullable<z.ZodString>;
        latestEventType: z.ZodNullable<z.ZodString>;
        latestEventAt: z.ZodNullable<z.ZodString>;
        tags: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        summary: string | null;
        latestEventType: string | null;
        latestEventAt: string | null;
        tags: string[];
    }, {
        summary: string | null;
        latestEventType: string | null;
        latestEventAt: string | null;
        tags: string[];
    }>;
    sellerNotice: z.ZodNullable<z.ZodString>;
    deliveryNotice: z.ZodNullable<z.ZodString>;
    priceSummary: z.ZodObject<{
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        currency: z.ZodString;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        reservePriceCents: z.ZodNullable<z.ZodNumber>;
        bidIncrementCents: z.ZodNullable<z.ZodNumber>;
        auctionStartsAt: z.ZodNullable<z.ZodString>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        currency: string;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
    }, {
        currency: string;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
    }>;
    fieldOrigins: z.ZodObject<{
        title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
    }, "strip", z.ZodTypeAny, {
        coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    }, {
        coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    }>;
    assembledAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    coverImageUrl: string | null;
    source: {
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        sourceProductCode: string | null;
        sourceBreederCode: string | null;
        sourceBatchNo: string | null;
    };
    title: string;
    subtitle: string | null;
    gallery: string[];
    lineageSummary: {
        seriesName: string | null;
        lineageType: string | null;
        crossLabel: string | null;
        selfCode: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
    };
    certificateRefs: {
        saleBatchId: string | null;
        productId: string | null;
        certificateId: string;
        verifyId: string | null;
        certNo: string | null;
        issuedAt: string | null;
    }[];
    healthSummary: {
        summary: string | null;
        latestEventType: string | null;
        latestEventAt: string | null;
        tags: string[];
    };
    sellerNotice: string | null;
    deliveryNotice: string | null;
    priceSummary: {
        currency: string;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
    };
    fieldOrigins: {
        coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    };
    assembledAt: string;
}, {
    coverImageUrl: string | null;
    source: {
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        sourceProductCode: string | null;
        sourceBreederCode: string | null;
        sourceBatchNo: string | null;
    };
    title: string;
    subtitle: string | null;
    gallery: string[];
    lineageSummary: {
        seriesName: string | null;
        lineageType: string | null;
        crossLabel: string | null;
        selfCode: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
    };
    certificateRefs: {
        saleBatchId: string | null;
        productId: string | null;
        certificateId: string;
        verifyId: string | null;
        certNo: string | null;
        issuedAt: string | null;
    }[];
    healthSummary: {
        summary: string | null;
        latestEventType: string | null;
        latestEventAt: string | null;
        tags: string[];
    };
    sellerNotice: string | null;
    deliveryNotice: string | null;
    priceSummary: {
        currency: string;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
    };
    fieldOrigins: {
        coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
    };
    assembledAt: string;
}>;
export declare const marketplaceSellerProfileSchema: z.ZodObject<{
    tenantId: z.ZodString;
    tenantSlug: z.ZodString;
    tenantName: z.ZodString;
    userId: z.ZodString;
    userName: z.ZodNullable<z.ZodString>;
    userAccount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tenantId: string;
    userId: string;
    tenantSlug: string;
    tenantName: string;
    userName: string | null;
    userAccount: string | null;
}, {
    tenantId: string;
    userId: string;
    tenantSlug: string;
    tenantName: string;
    userName: string | null;
    userAccount: string | null;
}>;
export declare const marketplaceReviewerSchema: z.ZodObject<{
    userId: z.ZodString;
    userName: z.ZodNullable<z.ZodString>;
    userEmail: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    userName: string | null;
    userEmail: string | null;
}, {
    userId: string;
    userName: string | null;
    userEmail: string | null;
}>;
export declare const marketplaceBidderSchema: z.ZodObject<{
    userId: z.ZodString;
    userName: z.ZodNullable<z.ZodString>;
    userAccount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    userName: string | null;
    userAccount: string | null;
}, {
    userId: string;
    userName: string | null;
    userAccount: string | null;
}>;
export declare const marketplaceListingSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    sellerUserId: z.ZodString;
    sourceProductId: z.ZodNullable<z.ZodString>;
    sourceBreederId: z.ZodNullable<z.ZodString>;
    sourceBatchId: z.ZodNullable<z.ZodString>;
    listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
    saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
    reviewStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>;
    lifecycleStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>;
    transactionStatus: z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>;
    auctionStatus: z.ZodEnum<["NONE", "SCHEDULED", "LIVE", "ENDED", "WON_PENDING_SETTLEMENT", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CLOSED"]>;
    currency: z.ZodString;
    title: z.ZodString;
    coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    fixedPriceCents: z.ZodNullable<z.ZodNumber>;
    openingBidCents: z.ZodNullable<z.ZodNumber>;
    reservePriceCents: z.ZodNullable<z.ZodNumber>;
    bidIncrementCents: z.ZodNullable<z.ZodNumber>;
    currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
    winnerBidId: z.ZodNullable<z.ZodString>;
    statusReason: z.ZodNullable<z.ZodString>;
    reviewNote: z.ZodNullable<z.ZodString>;
    submittedAt: z.ZodNullable<z.ZodString>;
    reviewedAt: z.ZodNullable<z.ZodString>;
    publishedAt: z.ZodNullable<z.ZodString>;
    pausedAt: z.ZodNullable<z.ZodString>;
    archivedAt: z.ZodNullable<z.ZodString>;
    closedAt: z.ZodNullable<z.ZodString>;
    auctionStartsAt: z.ZodNullable<z.ZodString>;
    auctionEndsAt: z.ZodNullable<z.ZodString>;
    snapshotVersion: z.ZodNumber;
    snapshot: z.ZodObject<{
        source: z.ZodObject<{
            listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
            sourceProductId: z.ZodNullable<z.ZodString>;
            sourceBreederId: z.ZodNullable<z.ZodString>;
            sourceBatchId: z.ZodNullable<z.ZodString>;
            sourceProductCode: z.ZodNullable<z.ZodString>;
            sourceBreederCode: z.ZodNullable<z.ZodString>;
            sourceBatchNo: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        }, {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        }>;
        title: z.ZodString;
        subtitle: z.ZodNullable<z.ZodString>;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        lineageSummary: z.ZodObject<{
            seriesName: z.ZodNullable<z.ZodString>;
            lineageType: z.ZodNullable<z.ZodString>;
            crossLabel: z.ZodNullable<z.ZodString>;
            selfCode: z.ZodNullable<z.ZodString>;
            sireCode: z.ZodNullable<z.ZodString>;
            damCode: z.ZodNullable<z.ZodString>;
            mateCode: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        }, {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        }>;
        certificateRefs: z.ZodArray<z.ZodObject<{
            certificateId: z.ZodString;
            productId: z.ZodNullable<z.ZodString>;
            saleBatchId: z.ZodNullable<z.ZodString>;
            verifyId: z.ZodNullable<z.ZodString>;
            certNo: z.ZodNullable<z.ZodString>;
            issuedAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }, {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }>, "many">;
        healthSummary: z.ZodObject<{
            summary: z.ZodNullable<z.ZodString>;
            latestEventType: z.ZodNullable<z.ZodString>;
            latestEventAt: z.ZodNullable<z.ZodString>;
            tags: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        }, {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        }>;
        sellerNotice: z.ZodNullable<z.ZodString>;
        deliveryNotice: z.ZodNullable<z.ZodString>;
        priceSummary: z.ZodObject<{
            saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
            currency: z.ZodString;
            fixedPriceCents: z.ZodNullable<z.ZodNumber>;
            openingBidCents: z.ZodNullable<z.ZodNumber>;
            reservePriceCents: z.ZodNullable<z.ZodNumber>;
            bidIncrementCents: z.ZodNullable<z.ZodNumber>;
            auctionStartsAt: z.ZodNullable<z.ZodString>;
            auctionEndsAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        }, {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        }>;
        fieldOrigins: z.ZodObject<{
            title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        }, "strip", z.ZodTypeAny, {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        }, {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        }>;
        assembledAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        coverImageUrl: string | null;
        source: {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        };
        title: string;
        subtitle: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        priceSummary: {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        };
        fieldOrigins: {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        };
        assembledAt: string;
    }, {
        coverImageUrl: string | null;
        source: {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        };
        title: string;
        subtitle: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        priceSummary: {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        };
        fieldOrigins: {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        };
        assembledAt: string;
    }>;
    seller: z.ZodObject<{
        tenantId: z.ZodString;
        tenantSlug: z.ZodString;
        tenantName: z.ZodString;
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userAccount: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        tenantId: string;
        userId: string;
        tenantSlug: string;
        tenantName: string;
        userName: string | null;
        userAccount: string | null;
    }, {
        tenantId: string;
        userId: string;
        tenantSlug: string;
        tenantName: string;
        userName: string | null;
        userAccount: string | null;
    }>;
    reviewer: z.ZodNullable<z.ZodObject<{
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userEmail: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userName: string | null;
        userEmail: string | null;
    }, {
        userId: string;
        userName: string | null;
        userEmail: string | null;
    }>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    coverImageUrl: string | null;
    title: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    reviewNote: string | null;
    submittedAt: string | null;
    reviewedAt: string | null;
    publishedAt: string | null;
    archivedAt: string | null;
    currency: string;
    statusReason: string | null;
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    sourceProductId: string | null;
    sourceBreederId: string | null;
    sourceBatchId: string | null;
    saleMode: "FIXED_PRICE" | "AUCTION";
    fixedPriceCents: number | null;
    openingBidCents: number | null;
    reservePriceCents: number | null;
    bidIncrementCents: number | null;
    auctionStartsAt: string | null;
    auctionEndsAt: string | null;
    sellerUserId: string;
    reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
    lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
    transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
    auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
    currentBidAmountCents: number | null;
    winnerBidId: string | null;
    pausedAt: string | null;
    closedAt: string | null;
    snapshotVersion: number;
    snapshot: {
        coverImageUrl: string | null;
        source: {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        };
        title: string;
        subtitle: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        priceSummary: {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        };
        fieldOrigins: {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        };
        assembledAt: string;
    };
    seller: {
        tenantId: string;
        userId: string;
        tenantSlug: string;
        tenantName: string;
        userName: string | null;
        userAccount: string | null;
    };
    reviewer: {
        userId: string;
        userName: string | null;
        userEmail: string | null;
    } | null;
}, {
    id: string;
    coverImageUrl: string | null;
    title: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    reviewNote: string | null;
    submittedAt: string | null;
    reviewedAt: string | null;
    publishedAt: string | null;
    archivedAt: string | null;
    currency: string;
    statusReason: string | null;
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    sourceProductId: string | null;
    sourceBreederId: string | null;
    sourceBatchId: string | null;
    saleMode: "FIXED_PRICE" | "AUCTION";
    fixedPriceCents: number | null;
    openingBidCents: number | null;
    reservePriceCents: number | null;
    bidIncrementCents: number | null;
    auctionStartsAt: string | null;
    auctionEndsAt: string | null;
    sellerUserId: string;
    reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
    lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
    transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
    auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
    currentBidAmountCents: number | null;
    winnerBidId: string | null;
    pausedAt: string | null;
    closedAt: string | null;
    snapshotVersion: number;
    snapshot: {
        coverImageUrl: string | null;
        source: {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        };
        title: string;
        subtitle: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        priceSummary: {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        };
        fieldOrigins: {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        };
        assembledAt: string;
    };
    seller: {
        tenantId: string;
        userId: string;
        tenantSlug: string;
        tenantName: string;
        userName: string | null;
        userAccount: string | null;
    };
    reviewer: {
        userId: string;
        userName: string | null;
        userEmail: string | null;
    } | null;
}>;
export declare const marketplaceListingSnapshotSchema: z.ZodObject<{
    id: z.ZodString;
    listingId: z.ZodString;
    tenantId: z.ZodString;
    version: z.ZodNumber;
    snapshot: z.ZodObject<{
        source: z.ZodObject<{
            listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
            sourceProductId: z.ZodNullable<z.ZodString>;
            sourceBreederId: z.ZodNullable<z.ZodString>;
            sourceBatchId: z.ZodNullable<z.ZodString>;
            sourceProductCode: z.ZodNullable<z.ZodString>;
            sourceBreederCode: z.ZodNullable<z.ZodString>;
            sourceBatchNo: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        }, {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        }>;
        title: z.ZodString;
        subtitle: z.ZodNullable<z.ZodString>;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        lineageSummary: z.ZodObject<{
            seriesName: z.ZodNullable<z.ZodString>;
            lineageType: z.ZodNullable<z.ZodString>;
            crossLabel: z.ZodNullable<z.ZodString>;
            selfCode: z.ZodNullable<z.ZodString>;
            sireCode: z.ZodNullable<z.ZodString>;
            damCode: z.ZodNullable<z.ZodString>;
            mateCode: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        }, {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        }>;
        certificateRefs: z.ZodArray<z.ZodObject<{
            certificateId: z.ZodString;
            productId: z.ZodNullable<z.ZodString>;
            saleBatchId: z.ZodNullable<z.ZodString>;
            verifyId: z.ZodNullable<z.ZodString>;
            certNo: z.ZodNullable<z.ZodString>;
            issuedAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }, {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }>, "many">;
        healthSummary: z.ZodObject<{
            summary: z.ZodNullable<z.ZodString>;
            latestEventType: z.ZodNullable<z.ZodString>;
            latestEventAt: z.ZodNullable<z.ZodString>;
            tags: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        }, {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        }>;
        sellerNotice: z.ZodNullable<z.ZodString>;
        deliveryNotice: z.ZodNullable<z.ZodString>;
        priceSummary: z.ZodObject<{
            saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
            currency: z.ZodString;
            fixedPriceCents: z.ZodNullable<z.ZodNumber>;
            openingBidCents: z.ZodNullable<z.ZodNumber>;
            reservePriceCents: z.ZodNullable<z.ZodNumber>;
            bidIncrementCents: z.ZodNullable<z.ZodNumber>;
            auctionStartsAt: z.ZodNullable<z.ZodString>;
            auctionEndsAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        }, {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        }>;
        fieldOrigins: z.ZodObject<{
            title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
        }, "strip", z.ZodTypeAny, {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        }, {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        }>;
        assembledAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        coverImageUrl: string | null;
        source: {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        };
        title: string;
        subtitle: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        priceSummary: {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        };
        fieldOrigins: {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        };
        assembledAt: string;
    }, {
        coverImageUrl: string | null;
        source: {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        };
        title: string;
        subtitle: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        priceSummary: {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        };
        fieldOrigins: {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        };
        assembledAt: string;
    }>;
    createdByUserId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    version: number;
    tenantId: string;
    createdAt: string;
    createdByUserId: string | null;
    snapshot: {
        coverImageUrl: string | null;
        source: {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        };
        title: string;
        subtitle: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        priceSummary: {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        };
        fieldOrigins: {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        };
        assembledAt: string;
    };
    listingId: string;
}, {
    id: string;
    version: number;
    tenantId: string;
    createdAt: string;
    createdByUserId: string | null;
    snapshot: {
        coverImageUrl: string | null;
        source: {
            listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
            sourceProductId: string | null;
            sourceBreederId: string | null;
            sourceBatchId: string | null;
            sourceProductCode: string | null;
            sourceBreederCode: string | null;
            sourceBatchNo: string | null;
        };
        title: string;
        subtitle: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        priceSummary: {
            currency: string;
            saleMode: "FIXED_PRICE" | "AUCTION";
            fixedPriceCents: number | null;
            openingBidCents: number | null;
            reservePriceCents: number | null;
            bidIncrementCents: number | null;
            auctionStartsAt: string | null;
            auctionEndsAt: string | null;
        };
        fieldOrigins: {
            coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
        };
        assembledAt: string;
    };
    listingId: string;
}>;
export declare const marketplaceBidSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    listingId: z.ZodString;
    bidderUserId: z.ZodString;
    amountCents: z.ZodNumber;
    status: z.ZodEnum<["ACTIVE", "OUTBID", "WINNING", "RETRACTED", "INVALIDATED"]>;
    isWinning: z.ZodBoolean;
    invalidatedReason: z.ZodNullable<z.ZodString>;
    bidder: z.ZodObject<{
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userAccount: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    listingId: string;
    bidderUserId: string;
    amountCents: number;
    isWinning: boolean;
    invalidatedReason: string | null;
    bidder: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    };
}, {
    status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    listingId: string;
    bidderUserId: string;
    amountCents: number;
    isWinning: boolean;
    invalidatedReason: string | null;
    bidder: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    };
}>;
export declare const marketplaceDealPartySchema: z.ZodObject<{
    userId: z.ZodString;
    userName: z.ZodNullable<z.ZodString>;
    userAccount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    userName: string | null;
    userAccount: string | null;
}, {
    userId: string;
    userName: string | null;
    userAccount: string | null;
}>;
export declare const marketplaceDealSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    listingId: z.ZodString;
    buyerUserId: z.ZodNullable<z.ZodString>;
    sellerUserId: z.ZodString;
    winnerBidId: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["PENDING_CONFIRMATION", "SELLER_CONFIRMED", "BUYER_CONFIRMED", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CANCELLED", "CLOSED"]>;
    agreedAmountCents: z.ZodNumber;
    currency: z.ZodString;
    defaultReason: z.ZodNullable<z.ZodString>;
    sellerConfirmedAt: z.ZodNullable<z.ZodString>;
    buyerConfirmedAt: z.ZodNullable<z.ZodString>;
    settledAt: z.ZodNullable<z.ZodString>;
    closedAt: z.ZodNullable<z.ZodString>;
    seller: z.ZodObject<{
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userAccount: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }>;
    buyer: z.ZodNullable<z.ZodObject<{
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userAccount: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    currency: string;
    sellerUserId: string;
    winnerBidId: string | null;
    closedAt: string | null;
    seller: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    };
    listingId: string;
    buyerUserId: string | null;
    agreedAmountCents: number;
    defaultReason: string | null;
    sellerConfirmedAt: string | null;
    buyerConfirmedAt: string | null;
    settledAt: string | null;
    buyer: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    } | null;
}, {
    status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    currency: string;
    sellerUserId: string;
    winnerBidId: string | null;
    closedAt: string | null;
    seller: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    };
    listingId: string;
    buyerUserId: string | null;
    agreedAmountCents: number;
    defaultReason: string | null;
    sellerConfirmedAt: string | null;
    buyerConfirmedAt: string | null;
    settledAt: string | null;
    buyer: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    } | null;
}>;
export declare const marketplaceDisputePartySchema: z.ZodObject<{
    userId: z.ZodString;
    userName: z.ZodNullable<z.ZodString>;
    userAccount: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    userName: string | null;
    userAccount: string | null;
}, {
    userId: string;
    userName: string | null;
    userAccount: string | null;
}>;
export declare const marketplaceDisputeSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    listingId: z.ZodString;
    dealId: z.ZodNullable<z.ZodString>;
    openedByUserId: z.ZodString;
    handledByUserId: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["OPEN", "UNDER_REVIEW", "RESOLVED", "REJECTED", "CLOSED"]>;
    reason: z.ZodString;
    resolutionNote: z.ZodNullable<z.ZodString>;
    evidenceRefs: z.ZodArray<z.ZodString, "many">;
    opener: z.ZodObject<{
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userAccount: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }>;
    handler: z.ZodNullable<z.ZodObject<{
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userAccount: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }, {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    }>>;
    openedAt: z.ZodString;
    resolvedAt: z.ZodNullable<z.ZodString>;
    closedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    reason: string;
    resolvedAt: string | null;
    closedAt: string | null;
    listingId: string;
    dealId: string | null;
    openedByUserId: string;
    handledByUserId: string | null;
    resolutionNote: string | null;
    evidenceRefs: string[];
    opener: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    };
    handler: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    } | null;
    openedAt: string;
}, {
    status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
    id: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    reason: string;
    resolvedAt: string | null;
    closedAt: string | null;
    listingId: string;
    dealId: string | null;
    openedByUserId: string;
    handledByUserId: string | null;
    resolutionNote: string | null;
    evidenceRefs: string[];
    opener: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    };
    handler: {
        userId: string;
        userName: string | null;
        userAccount: string | null;
    } | null;
    openedAt: string;
}>;
export declare const createMarketplaceSellerListingRequestSchema: z.ZodEffects<z.ZodObject<{
    sourceProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceBreederId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceBatchId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    fixedPriceCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    openingBidCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    reservePriceCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    bidIncrementCents: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    auctionStartsAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    auctionEndsAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodDefault<z.ZodString>;
} & {
    titleOverride: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subtitleOverride: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coverImageUrlOverride: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
    galleryOverride: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    sellerNotice: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    deliveryNotice: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
    saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
}, "strip", z.ZodTypeAny, {
    currency: string;
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    saleMode: "FIXED_PRICE" | "AUCTION";
    sourceProductId?: string | null | undefined;
    sourceBreederId?: string | null | undefined;
    sourceBatchId?: string | null | undefined;
    fixedPriceCents?: number | null | undefined;
    openingBidCents?: number | null | undefined;
    reservePriceCents?: number | null | undefined;
    bidIncrementCents?: number | null | undefined;
    auctionStartsAt?: string | null | undefined;
    auctionEndsAt?: string | null | undefined;
    sellerNotice?: string | null | undefined;
    deliveryNotice?: string | null | undefined;
    titleOverride?: string | null | undefined;
    subtitleOverride?: string | null | undefined;
    coverImageUrlOverride?: string | null | undefined;
    galleryOverride?: string[] | undefined;
}, {
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    saleMode: "FIXED_PRICE" | "AUCTION";
    currency?: string | undefined;
    sourceProductId?: string | null | undefined;
    sourceBreederId?: string | null | undefined;
    sourceBatchId?: string | null | undefined;
    fixedPriceCents?: number | null | undefined;
    openingBidCents?: number | null | undefined;
    reservePriceCents?: number | null | undefined;
    bidIncrementCents?: number | null | undefined;
    auctionStartsAt?: string | null | undefined;
    auctionEndsAt?: string | null | undefined;
    sellerNotice?: string | null | undefined;
    deliveryNotice?: string | null | undefined;
    titleOverride?: string | null | undefined;
    subtitleOverride?: string | null | undefined;
    coverImageUrlOverride?: string | null | undefined;
    galleryOverride?: string[] | undefined;
}>, {
    currency: string;
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    saleMode: "FIXED_PRICE" | "AUCTION";
    sourceProductId?: string | null | undefined;
    sourceBreederId?: string | null | undefined;
    sourceBatchId?: string | null | undefined;
    fixedPriceCents?: number | null | undefined;
    openingBidCents?: number | null | undefined;
    reservePriceCents?: number | null | undefined;
    bidIncrementCents?: number | null | undefined;
    auctionStartsAt?: string | null | undefined;
    auctionEndsAt?: string | null | undefined;
    sellerNotice?: string | null | undefined;
    deliveryNotice?: string | null | undefined;
    titleOverride?: string | null | undefined;
    subtitleOverride?: string | null | undefined;
    coverImageUrlOverride?: string | null | undefined;
    galleryOverride?: string[] | undefined;
}, {
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    saleMode: "FIXED_PRICE" | "AUCTION";
    currency?: string | undefined;
    sourceProductId?: string | null | undefined;
    sourceBreederId?: string | null | undefined;
    sourceBatchId?: string | null | undefined;
    fixedPriceCents?: number | null | undefined;
    openingBidCents?: number | null | undefined;
    reservePriceCents?: number | null | undefined;
    bidIncrementCents?: number | null | undefined;
    auctionStartsAt?: string | null | undefined;
    auctionEndsAt?: string | null | undefined;
    sellerNotice?: string | null | undefined;
    deliveryNotice?: string | null | undefined;
    titleOverride?: string | null | undefined;
    subtitleOverride?: string | null | undefined;
    coverImageUrlOverride?: string | null | undefined;
    galleryOverride?: string[] | undefined;
}>;
export declare const updateMarketplaceSellerListingRequestSchema: z.ZodEffects<z.ZodObject<{
    sourceProductId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    sourceBreederId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    sourceBatchId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    fixedPriceCents: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    openingBidCents: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    reservePriceCents: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    bidIncrementCents: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    auctionStartsAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    auctionEndsAt: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    currency: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    titleOverride: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    subtitleOverride: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    coverImageUrlOverride: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>>;
    galleryOverride: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>>;
    sellerNotice: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    deliveryNotice: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    listingKind: z.ZodOptional<z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>>;
    saleMode: z.ZodOptional<z.ZodEnum<["FIXED_PRICE", "AUCTION"]>>;
}, "strip", z.ZodTypeAny, {
    currency?: string | undefined;
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    sourceProductId?: string | null | undefined;
    sourceBreederId?: string | null | undefined;
    sourceBatchId?: string | null | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
    fixedPriceCents?: number | null | undefined;
    openingBidCents?: number | null | undefined;
    reservePriceCents?: number | null | undefined;
    bidIncrementCents?: number | null | undefined;
    auctionStartsAt?: string | null | undefined;
    auctionEndsAt?: string | null | undefined;
    sellerNotice?: string | null | undefined;
    deliveryNotice?: string | null | undefined;
    titleOverride?: string | null | undefined;
    subtitleOverride?: string | null | undefined;
    coverImageUrlOverride?: string | null | undefined;
    galleryOverride?: string[] | undefined;
}, {
    currency?: string | undefined;
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    sourceProductId?: string | null | undefined;
    sourceBreederId?: string | null | undefined;
    sourceBatchId?: string | null | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
    fixedPriceCents?: number | null | undefined;
    openingBidCents?: number | null | undefined;
    reservePriceCents?: number | null | undefined;
    bidIncrementCents?: number | null | undefined;
    auctionStartsAt?: string | null | undefined;
    auctionEndsAt?: string | null | undefined;
    sellerNotice?: string | null | undefined;
    deliveryNotice?: string | null | undefined;
    titleOverride?: string | null | undefined;
    subtitleOverride?: string | null | undefined;
    coverImageUrlOverride?: string | null | undefined;
    galleryOverride?: string[] | undefined;
}>, {
    currency?: string | undefined;
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    sourceProductId?: string | null | undefined;
    sourceBreederId?: string | null | undefined;
    sourceBatchId?: string | null | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
    fixedPriceCents?: number | null | undefined;
    openingBidCents?: number | null | undefined;
    reservePriceCents?: number | null | undefined;
    bidIncrementCents?: number | null | undefined;
    auctionStartsAt?: string | null | undefined;
    auctionEndsAt?: string | null | undefined;
    sellerNotice?: string | null | undefined;
    deliveryNotice?: string | null | undefined;
    titleOverride?: string | null | undefined;
    subtitleOverride?: string | null | undefined;
    coverImageUrlOverride?: string | null | undefined;
    galleryOverride?: string[] | undefined;
}, {
    currency?: string | undefined;
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    sourceProductId?: string | null | undefined;
    sourceBreederId?: string | null | undefined;
    sourceBatchId?: string | null | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
    fixedPriceCents?: number | null | undefined;
    openingBidCents?: number | null | undefined;
    reservePriceCents?: number | null | undefined;
    bidIncrementCents?: number | null | undefined;
    auctionStartsAt?: string | null | undefined;
    auctionEndsAt?: string | null | undefined;
    sellerNotice?: string | null | undefined;
    deliveryNotice?: string | null | undefined;
    titleOverride?: string | null | undefined;
    subtitleOverride?: string | null | undefined;
    coverImageUrlOverride?: string | null | undefined;
    galleryOverride?: string[] | undefined;
}>;
export declare const marketplaceSellerListListingsQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
    listingKind: z.ZodOptional<z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>>;
    saleMode: z.ZodOptional<z.ZodEnum<["FIXED_PRICE", "AUCTION"]>>;
    reviewStatus: z.ZodOptional<z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>>;
    lifecycleStatus: z.ZodOptional<z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>>;
    transactionStatus: z.ZodOptional<z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
    reviewStatus?: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED" | undefined;
    lifecycleStatus?: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED" | undefined;
    transactionStatus?: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION" | undefined;
}, {
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
    reviewStatus?: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED" | undefined;
    lifecycleStatus?: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED" | undefined;
    transactionStatus?: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION" | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
}>;
export declare const marketplaceAdminListListingsQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
    listingKind: z.ZodOptional<z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>>;
    saleMode: z.ZodOptional<z.ZodEnum<["FIXED_PRICE", "AUCTION"]>>;
    reviewStatus: z.ZodOptional<z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>>;
    lifecycleStatus: z.ZodOptional<z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>>;
    transactionStatus: z.ZodOptional<z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>>;
} & {
    tenantId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    tenantId?: string | undefined;
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
    reviewStatus?: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED" | undefined;
    lifecycleStatus?: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED" | undefined;
    transactionStatus?: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION" | undefined;
}, {
    tenantId?: string | undefined;
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
    reviewStatus?: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED" | undefined;
    lifecycleStatus?: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED" | undefined;
    transactionStatus?: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION" | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
}>;
export declare const marketplaceBuyerListListingsQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
    listingKind: z.ZodOptional<z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>>;
    saleMode: z.ZodOptional<z.ZodEnum<["FIXED_PRICE", "AUCTION"]>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
}, {
    listingKind?: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH" | undefined;
    saleMode?: "FIXED_PRICE" | "AUCTION" | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
}>;
export declare const marketplaceBuyerTrustSignalSchema: z.ZodObject<{
    key: z.ZodEnum<["LINEAGE", "CERTIFICATE", "HEALTH", "DELIVERY", "AUCTION_RULE", "RECENT_ACTIVITY"]>;
    label: z.ZodString;
    detail: z.ZodNullable<z.ZodString>;
    tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
}, "strip", z.ZodTypeAny, {
    key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
    label: string;
    detail: string | null;
    tone: "accent" | "soft" | "warning" | "ink";
}, {
    key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
    label: string;
    detail: string | null;
    tone: "accent" | "soft" | "warning" | "ink";
}>;
export declare const marketplaceBuyerStatusBadgeSchema: z.ZodObject<{
    label: z.ZodString;
    detail: z.ZodNullable<z.ZodString>;
    tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
}, "strip", z.ZodTypeAny, {
    label: string;
    detail: string | null;
    tone: "accent" | "soft" | "warning" | "ink";
}, {
    label: string;
    detail: string | null;
    tone: "accent" | "soft" | "warning" | "ink";
}>;
export declare const marketplaceBuyerRecentBidSnippetSchema: z.ZodObject<{
    bidId: z.ZodString;
    bidderLabel: z.ZodString;
    amountCents: z.ZodNumber;
    amountLabel: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: string;
    amountCents: number;
    bidId: string;
    bidderLabel: string;
    amountLabel: string;
}, {
    createdAt: string;
    amountCents: number;
    bidId: string;
    bidderLabel: string;
    amountLabel: string;
}>;
export declare const marketplaceBuyerAuctionRuleSummarySchema: z.ZodObject<{
    openingBidLabel: z.ZodNullable<z.ZodString>;
    reservePriceLabel: z.ZodNullable<z.ZodString>;
    bidIncrementLabel: z.ZodNullable<z.ZodString>;
    scheduleLabel: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    openingBidLabel: string | null;
    reservePriceLabel: string | null;
    bidIncrementLabel: string | null;
    scheduleLabel: string | null;
}, {
    openingBidLabel: string | null;
    reservePriceLabel: string | null;
    bidIncrementLabel: string | null;
    scheduleLabel: string | null;
}>;
export declare const marketplaceBuyerListingCardSchema: z.ZodObject<{
    id: z.ZodString;
    listingId: z.ZodString;
    tenantSlug: z.ZodString;
    tenantName: z.ZodString;
    saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
    listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
    title: z.ZodString;
    coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    sellerLabel: z.ZodString;
    priceLabel: z.ZodString;
    currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
    fixedPriceCents: z.ZodNullable<z.ZodNumber>;
    openingBidCents: z.ZodNullable<z.ZodNumber>;
    auctionEndsAt: z.ZodNullable<z.ZodString>;
    bidCount: z.ZodNumber;
    publishedAt: z.ZodNullable<z.ZodString>;
    trustSignals: z.ZodArray<z.ZodObject<{
        key: z.ZodEnum<["LINEAGE", "CERTIFICATE", "HEALTH", "DELIVERY", "AUCTION_RULE", "RECENT_ACTIVITY"]>;
        label: z.ZodString;
        detail: z.ZodNullable<z.ZodString>;
        tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
    }, "strip", z.ZodTypeAny, {
        key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }, {
        key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }>, "many">;
    statusBadge: z.ZodObject<{
        label: z.ZodString;
        detail: z.ZodNullable<z.ZodString>;
        tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }, {
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }>;
    permalinkPath: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    coverImageUrl: string | null;
    title: string;
    publishedAt: string | null;
    tenantSlug: string;
    tenantName: string;
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    saleMode: "FIXED_PRICE" | "AUCTION";
    fixedPriceCents: number | null;
    openingBidCents: number | null;
    auctionEndsAt: string | null;
    currentBidAmountCents: number | null;
    listingId: string;
    sellerLabel: string;
    priceLabel: string;
    bidCount: number;
    trustSignals: {
        key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }[];
    statusBadge: {
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    };
    permalinkPath: string;
}, {
    id: string;
    coverImageUrl: string | null;
    title: string;
    publishedAt: string | null;
    tenantSlug: string;
    tenantName: string;
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    saleMode: "FIXED_PRICE" | "AUCTION";
    fixedPriceCents: number | null;
    openingBidCents: number | null;
    auctionEndsAt: string | null;
    currentBidAmountCents: number | null;
    listingId: string;
    sellerLabel: string;
    priceLabel: string;
    bidCount: number;
    trustSignals: {
        key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }[];
    statusBadge: {
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    };
    permalinkPath: string;
}>;
export declare const marketplaceBuyerListingDetailSchema: z.ZodObject<{
    id: z.ZodString;
    listingId: z.ZodString;
    tenantSlug: z.ZodString;
    tenantName: z.ZodString;
    saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
    listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
    title: z.ZodString;
    coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    sellerLabel: z.ZodString;
    priceLabel: z.ZodString;
    currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
    fixedPriceCents: z.ZodNullable<z.ZodNumber>;
    openingBidCents: z.ZodNullable<z.ZodNumber>;
    auctionEndsAt: z.ZodNullable<z.ZodString>;
    bidCount: z.ZodNumber;
    publishedAt: z.ZodNullable<z.ZodString>;
    trustSignals: z.ZodArray<z.ZodObject<{
        key: z.ZodEnum<["LINEAGE", "CERTIFICATE", "HEALTH", "DELIVERY", "AUCTION_RULE", "RECENT_ACTIVITY"]>;
        label: z.ZodString;
        detail: z.ZodNullable<z.ZodString>;
        tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
    }, "strip", z.ZodTypeAny, {
        key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }, {
        key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }>, "many">;
    statusBadge: z.ZodObject<{
        label: z.ZodString;
        detail: z.ZodNullable<z.ZodString>;
        tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }, {
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }>;
    permalinkPath: z.ZodString;
} & {
    subtitle: z.ZodNullable<z.ZodString>;
    gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    sellerNotice: z.ZodNullable<z.ZodString>;
    deliveryNotice: z.ZodNullable<z.ZodString>;
    certificateRefs: z.ZodArray<z.ZodObject<{
        certificateId: z.ZodString;
        productId: z.ZodNullable<z.ZodString>;
        saleBatchId: z.ZodNullable<z.ZodString>;
        verifyId: z.ZodNullable<z.ZodString>;
        certNo: z.ZodNullable<z.ZodString>;
        issuedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        saleBatchId: string | null;
        productId: string | null;
        certificateId: string;
        verifyId: string | null;
        certNo: string | null;
        issuedAt: string | null;
    }, {
        saleBatchId: string | null;
        productId: string | null;
        certificateId: string;
        verifyId: string | null;
        certNo: string | null;
        issuedAt: string | null;
    }>, "many">;
    lineageSummary: z.ZodObject<{
        seriesName: z.ZodNullable<z.ZodString>;
        lineageType: z.ZodNullable<z.ZodString>;
        crossLabel: z.ZodNullable<z.ZodString>;
        selfCode: z.ZodNullable<z.ZodString>;
        sireCode: z.ZodNullable<z.ZodString>;
        damCode: z.ZodNullable<z.ZodString>;
        mateCode: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        seriesName: string | null;
        lineageType: string | null;
        crossLabel: string | null;
        selfCode: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
    }, {
        seriesName: string | null;
        lineageType: string | null;
        crossLabel: string | null;
        selfCode: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
    }>;
    healthSummary: z.ZodObject<{
        summary: z.ZodNullable<z.ZodString>;
        latestEventType: z.ZodNullable<z.ZodString>;
        latestEventAt: z.ZodNullable<z.ZodString>;
        tags: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        summary: string | null;
        latestEventType: string | null;
        latestEventAt: string | null;
        tags: string[];
    }, {
        summary: string | null;
        latestEventType: string | null;
        latestEventAt: string | null;
        tags: string[];
    }>;
    auctionRuleSummary: z.ZodNullable<z.ZodObject<{
        openingBidLabel: z.ZodNullable<z.ZodString>;
        reservePriceLabel: z.ZodNullable<z.ZodString>;
        bidIncrementLabel: z.ZodNullable<z.ZodString>;
        scheduleLabel: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        openingBidLabel: string | null;
        reservePriceLabel: string | null;
        bidIncrementLabel: string | null;
        scheduleLabel: string | null;
    }, {
        openingBidLabel: string | null;
        reservePriceLabel: string | null;
        bidIncrementLabel: string | null;
        scheduleLabel: string | null;
    }>>;
    recentBidSnippets: z.ZodArray<z.ZodObject<{
        bidId: z.ZodString;
        bidderLabel: z.ZodString;
        amountCents: z.ZodNumber;
        amountLabel: z.ZodString;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        createdAt: string;
        amountCents: number;
        bidId: string;
        bidderLabel: string;
        amountLabel: string;
    }, {
        createdAt: string;
        amountCents: number;
        bidId: string;
        bidderLabel: string;
        amountLabel: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    coverImageUrl: string | null;
    title: string;
    publishedAt: string | null;
    subtitle: string | null;
    tenantSlug: string;
    tenantName: string;
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    saleMode: "FIXED_PRICE" | "AUCTION";
    fixedPriceCents: number | null;
    openingBidCents: number | null;
    auctionEndsAt: string | null;
    gallery: string[];
    lineageSummary: {
        seriesName: string | null;
        lineageType: string | null;
        crossLabel: string | null;
        selfCode: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
    };
    certificateRefs: {
        saleBatchId: string | null;
        productId: string | null;
        certificateId: string;
        verifyId: string | null;
        certNo: string | null;
        issuedAt: string | null;
    }[];
    healthSummary: {
        summary: string | null;
        latestEventType: string | null;
        latestEventAt: string | null;
        tags: string[];
    };
    sellerNotice: string | null;
    deliveryNotice: string | null;
    currentBidAmountCents: number | null;
    listingId: string;
    sellerLabel: string;
    priceLabel: string;
    bidCount: number;
    trustSignals: {
        key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }[];
    statusBadge: {
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    };
    permalinkPath: string;
    auctionRuleSummary: {
        openingBidLabel: string | null;
        reservePriceLabel: string | null;
        bidIncrementLabel: string | null;
        scheduleLabel: string | null;
    } | null;
    recentBidSnippets: {
        createdAt: string;
        amountCents: number;
        bidId: string;
        bidderLabel: string;
        amountLabel: string;
    }[];
}, {
    id: string;
    coverImageUrl: string | null;
    title: string;
    publishedAt: string | null;
    subtitle: string | null;
    tenantSlug: string;
    tenantName: string;
    listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
    saleMode: "FIXED_PRICE" | "AUCTION";
    fixedPriceCents: number | null;
    openingBidCents: number | null;
    auctionEndsAt: string | null;
    gallery: string[];
    lineageSummary: {
        seriesName: string | null;
        lineageType: string | null;
        crossLabel: string | null;
        selfCode: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
    };
    certificateRefs: {
        saleBatchId: string | null;
        productId: string | null;
        certificateId: string;
        verifyId: string | null;
        certNo: string | null;
        issuedAt: string | null;
    }[];
    healthSummary: {
        summary: string | null;
        latestEventType: string | null;
        latestEventAt: string | null;
        tags: string[];
    };
    sellerNotice: string | null;
    deliveryNotice: string | null;
    currentBidAmountCents: number | null;
    listingId: string;
    sellerLabel: string;
    priceLabel: string;
    bidCount: number;
    trustSignals: {
        key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    }[];
    statusBadge: {
        label: string;
        detail: string | null;
        tone: "accent" | "soft" | "warning" | "ink";
    };
    permalinkPath: string;
    auctionRuleSummary: {
        openingBidLabel: string | null;
        reservePriceLabel: string | null;
        bidIncrementLabel: string | null;
        scheduleLabel: string | null;
    } | null;
    recentBidSnippets: {
        createdAt: string;
        amountCents: number;
        bidId: string;
        bidderLabel: string;
        amountLabel: string;
    }[];
}>;
export declare const marketplacePlaceBidRequestSchema: z.ZodObject<{
    amountCents: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    amountCents: number;
}, {
    amountCents: number;
}>;
export declare const marketplaceOpenDisputeRequestSchema: z.ZodObject<{
    reason: z.ZodString;
    evidenceRefs: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    reason: string;
    evidenceRefs: string[];
}, {
    reason: string;
    evidenceRefs?: string[] | undefined;
}>;
export declare const marketplaceResolveDisputeRequestSchema: z.ZodObject<{
    status: z.ZodEnum<["UNDER_REVIEW", "RESOLVED", "REJECTED", "CLOSED"]>;
    resolutionNote: z.ZodString;
    closeDealAsDefaulted: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    status: "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
    resolutionNote: string;
    closeDealAsDefaulted: boolean;
}, {
    status: "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
    resolutionNote: string;
    closeDealAsDefaulted?: boolean | undefined;
}>;
export declare const marketplaceListingStatusReasonRequestSchema: z.ZodObject<{
    reason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reason: string;
}, {
    reason: string;
}>;
export declare const marketplaceBuyerActionStateSchema: z.ZodObject<{
    actorBid: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        listingId: z.ZodString;
        bidderUserId: z.ZodString;
        amountCents: z.ZodNumber;
        status: z.ZodEnum<["ACTIVE", "OUTBID", "WINNING", "RETRACTED", "INVALIDATED"]>;
        isWinning: z.ZodBoolean;
        invalidatedReason: z.ZodNullable<z.ZodString>;
        bidder: z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }, {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }>>;
    highestBid: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        listingId: z.ZodString;
        bidderUserId: z.ZodString;
        amountCents: z.ZodNumber;
        status: z.ZodEnum<["ACTIVE", "OUTBID", "WINNING", "RETRACTED", "INVALIDATED"]>;
        isWinning: z.ZodBoolean;
        invalidatedReason: z.ZodNullable<z.ZodString>;
        bidder: z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }, {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }>>;
    minimumNextBidCents: z.ZodNullable<z.ZodNumber>;
    minimumNextBidLabel: z.ZodNullable<z.ZodString>;
    endedReason: z.ZodNullable<z.ZodString>;
    placeBidDisabledReason: z.ZodNullable<z.ZodString>;
    canPlaceBid: z.ZodBoolean;
    canSellerConfirmDeal: z.ZodBoolean;
    canBuyerConfirmDeal: z.ZodBoolean;
    canSellerMarkSettled: z.ZodBoolean;
    canSellerMarkDefaulted: z.ZodBoolean;
    canOpenDispute: z.ZodBoolean;
    activeDisputeId: z.ZodNullable<z.ZodString>;
    bidCount: z.ZodNumber;
    isHighestBidder: z.ZodBoolean;
    isSeller: z.ZodBoolean;
    isWinner: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    bidCount: number;
    actorBid: {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    } | null;
    highestBid: {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    } | null;
    minimumNextBidCents: number | null;
    minimumNextBidLabel: string | null;
    endedReason: string | null;
    placeBidDisabledReason: string | null;
    canPlaceBid: boolean;
    canSellerConfirmDeal: boolean;
    canBuyerConfirmDeal: boolean;
    canSellerMarkSettled: boolean;
    canSellerMarkDefaulted: boolean;
    canOpenDispute: boolean;
    activeDisputeId: string | null;
    isHighestBidder: boolean;
    isSeller: boolean;
    isWinner: boolean;
}, {
    bidCount: number;
    actorBid: {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    } | null;
    highestBid: {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    } | null;
    minimumNextBidCents: number | null;
    minimumNextBidLabel: string | null;
    endedReason: string | null;
    placeBidDisabledReason: string | null;
    canPlaceBid: boolean;
    canSellerConfirmDeal: boolean;
    canBuyerConfirmDeal: boolean;
    canSellerMarkSettled: boolean;
    canSellerMarkDefaulted: boolean;
    canOpenDispute: boolean;
    activeDisputeId: string | null;
    isHighestBidder: boolean;
    isSeller: boolean;
    isWinner: boolean;
}>;
export declare const marketplaceListingMutationResponseSchema: z.ZodObject<{
    listing: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        sellerUserId: z.ZodString;
        sourceProductId: z.ZodNullable<z.ZodString>;
        sourceBreederId: z.ZodNullable<z.ZodString>;
        sourceBatchId: z.ZodNullable<z.ZodString>;
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        reviewStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>;
        lifecycleStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>;
        transactionStatus: z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>;
        auctionStatus: z.ZodEnum<["NONE", "SCHEDULED", "LIVE", "ENDED", "WON_PENDING_SETTLEMENT", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CLOSED"]>;
        currency: z.ZodString;
        title: z.ZodString;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        reservePriceCents: z.ZodNullable<z.ZodNumber>;
        bidIncrementCents: z.ZodNullable<z.ZodNumber>;
        currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
        winnerBidId: z.ZodNullable<z.ZodString>;
        statusReason: z.ZodNullable<z.ZodString>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        auctionStartsAt: z.ZodNullable<z.ZodString>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
        snapshotVersion: z.ZodNumber;
        snapshot: z.ZodObject<{
            source: z.ZodObject<{
                listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
                sourceProductId: z.ZodNullable<z.ZodString>;
                sourceBreederId: z.ZodNullable<z.ZodString>;
                sourceBatchId: z.ZodNullable<z.ZodString>;
                sourceProductCode: z.ZodNullable<z.ZodString>;
                sourceBreederCode: z.ZodNullable<z.ZodString>;
                sourceBatchNo: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }>;
            title: z.ZodString;
            subtitle: z.ZodNullable<z.ZodString>;
            coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
            gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
            lineageSummary: z.ZodObject<{
                seriesName: z.ZodNullable<z.ZodString>;
                lineageType: z.ZodNullable<z.ZodString>;
                crossLabel: z.ZodNullable<z.ZodString>;
                selfCode: z.ZodNullable<z.ZodString>;
                sireCode: z.ZodNullable<z.ZodString>;
                damCode: z.ZodNullable<z.ZodString>;
                mateCode: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }>;
            certificateRefs: z.ZodArray<z.ZodObject<{
                certificateId: z.ZodString;
                productId: z.ZodNullable<z.ZodString>;
                saleBatchId: z.ZodNullable<z.ZodString>;
                verifyId: z.ZodNullable<z.ZodString>;
                certNo: z.ZodNullable<z.ZodString>;
                issuedAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }>, "many">;
            healthSummary: z.ZodObject<{
                summary: z.ZodNullable<z.ZodString>;
                latestEventType: z.ZodNullable<z.ZodString>;
                latestEventAt: z.ZodNullable<z.ZodString>;
                tags: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }>;
            sellerNotice: z.ZodNullable<z.ZodString>;
            deliveryNotice: z.ZodNullable<z.ZodString>;
            priceSummary: z.ZodObject<{
                saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
                currency: z.ZodString;
                fixedPriceCents: z.ZodNullable<z.ZodNumber>;
                openingBidCents: z.ZodNullable<z.ZodNumber>;
                reservePriceCents: z.ZodNullable<z.ZodNumber>;
                bidIncrementCents: z.ZodNullable<z.ZodNumber>;
                auctionStartsAt: z.ZodNullable<z.ZodString>;
                auctionEndsAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }>;
            fieldOrigins: z.ZodObject<{
                title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            }, "strip", z.ZodTypeAny, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }>;
            assembledAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }>;
        seller: z.ZodObject<{
            tenantId: z.ZodString;
            tenantSlug: z.ZodString;
            tenantName: z.ZodString;
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        reviewer: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userEmail: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }>;
}, "strip", z.ZodTypeAny, {
    listing: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    };
}, {
    listing: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    };
}>;
export declare const marketplaceListingDetailResponseSchema: z.ZodObject<{
    listing: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        sellerUserId: z.ZodString;
        sourceProductId: z.ZodNullable<z.ZodString>;
        sourceBreederId: z.ZodNullable<z.ZodString>;
        sourceBatchId: z.ZodNullable<z.ZodString>;
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        reviewStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>;
        lifecycleStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>;
        transactionStatus: z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>;
        auctionStatus: z.ZodEnum<["NONE", "SCHEDULED", "LIVE", "ENDED", "WON_PENDING_SETTLEMENT", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CLOSED"]>;
        currency: z.ZodString;
        title: z.ZodString;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        reservePriceCents: z.ZodNullable<z.ZodNumber>;
        bidIncrementCents: z.ZodNullable<z.ZodNumber>;
        currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
        winnerBidId: z.ZodNullable<z.ZodString>;
        statusReason: z.ZodNullable<z.ZodString>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        auctionStartsAt: z.ZodNullable<z.ZodString>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
        snapshotVersion: z.ZodNumber;
        snapshot: z.ZodObject<{
            source: z.ZodObject<{
                listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
                sourceProductId: z.ZodNullable<z.ZodString>;
                sourceBreederId: z.ZodNullable<z.ZodString>;
                sourceBatchId: z.ZodNullable<z.ZodString>;
                sourceProductCode: z.ZodNullable<z.ZodString>;
                sourceBreederCode: z.ZodNullable<z.ZodString>;
                sourceBatchNo: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }>;
            title: z.ZodString;
            subtitle: z.ZodNullable<z.ZodString>;
            coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
            gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
            lineageSummary: z.ZodObject<{
                seriesName: z.ZodNullable<z.ZodString>;
                lineageType: z.ZodNullable<z.ZodString>;
                crossLabel: z.ZodNullable<z.ZodString>;
                selfCode: z.ZodNullable<z.ZodString>;
                sireCode: z.ZodNullable<z.ZodString>;
                damCode: z.ZodNullable<z.ZodString>;
                mateCode: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }>;
            certificateRefs: z.ZodArray<z.ZodObject<{
                certificateId: z.ZodString;
                productId: z.ZodNullable<z.ZodString>;
                saleBatchId: z.ZodNullable<z.ZodString>;
                verifyId: z.ZodNullable<z.ZodString>;
                certNo: z.ZodNullable<z.ZodString>;
                issuedAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }>, "many">;
            healthSummary: z.ZodObject<{
                summary: z.ZodNullable<z.ZodString>;
                latestEventType: z.ZodNullable<z.ZodString>;
                latestEventAt: z.ZodNullable<z.ZodString>;
                tags: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }>;
            sellerNotice: z.ZodNullable<z.ZodString>;
            deliveryNotice: z.ZodNullable<z.ZodString>;
            priceSummary: z.ZodObject<{
                saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
                currency: z.ZodString;
                fixedPriceCents: z.ZodNullable<z.ZodNumber>;
                openingBidCents: z.ZodNullable<z.ZodNumber>;
                reservePriceCents: z.ZodNullable<z.ZodNumber>;
                bidIncrementCents: z.ZodNullable<z.ZodNumber>;
                auctionStartsAt: z.ZodNullable<z.ZodString>;
                auctionEndsAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }>;
            fieldOrigins: z.ZodObject<{
                title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            }, "strip", z.ZodTypeAny, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }>;
            assembledAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }>;
        seller: z.ZodObject<{
            tenantId: z.ZodString;
            tenantSlug: z.ZodString;
            tenantName: z.ZodString;
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        reviewer: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userEmail: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }>;
    bids: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        listingId: z.ZodString;
        bidderUserId: z.ZodString;
        amountCents: z.ZodNumber;
        status: z.ZodEnum<["ACTIVE", "OUTBID", "WINNING", "RETRACTED", "INVALIDATED"]>;
        isWinning: z.ZodBoolean;
        invalidatedReason: z.ZodNullable<z.ZodString>;
        bidder: z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }, {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }>, "many">;
    deal: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        listingId: z.ZodString;
        buyerUserId: z.ZodNullable<z.ZodString>;
        sellerUserId: z.ZodString;
        winnerBidId: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["PENDING_CONFIRMATION", "SELLER_CONFIRMED", "BUYER_CONFIRMED", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CANCELLED", "CLOSED"]>;
        agreedAmountCents: z.ZodNumber;
        currency: z.ZodString;
        defaultReason: z.ZodNullable<z.ZodString>;
        sellerConfirmedAt: z.ZodNullable<z.ZodString>;
        buyerConfirmedAt: z.ZodNullable<z.ZodString>;
        settledAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        seller: z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        buyer: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        currency: string;
        sellerUserId: string;
        winnerBidId: string | null;
        closedAt: string | null;
        seller: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        listingId: string;
        buyerUserId: string | null;
        agreedAmountCents: number;
        defaultReason: string | null;
        sellerConfirmedAt: string | null;
        buyerConfirmedAt: string | null;
        settledAt: string | null;
        buyer: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
    }, {
        status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        currency: string;
        sellerUserId: string;
        winnerBidId: string | null;
        closedAt: string | null;
        seller: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        listingId: string;
        buyerUserId: string | null;
        agreedAmountCents: number;
        defaultReason: string | null;
        sellerConfirmedAt: string | null;
        buyerConfirmedAt: string | null;
        settledAt: string | null;
        buyer: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
    }>>;
    disputes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        listingId: z.ZodString;
        dealId: z.ZodNullable<z.ZodString>;
        openedByUserId: z.ZodString;
        handledByUserId: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["OPEN", "UNDER_REVIEW", "RESOLVED", "REJECTED", "CLOSED"]>;
        reason: z.ZodString;
        resolutionNote: z.ZodNullable<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString, "many">;
        opener: z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        handler: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>>;
        openedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reason: string;
        resolvedAt: string | null;
        closedAt: string | null;
        listingId: string;
        dealId: string | null;
        openedByUserId: string;
        handledByUserId: string | null;
        resolutionNote: string | null;
        evidenceRefs: string[];
        opener: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        handler: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
        openedAt: string;
    }, {
        status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reason: string;
        resolvedAt: string | null;
        closedAt: string | null;
        listingId: string;
        dealId: string | null;
        openedByUserId: string;
        handledByUserId: string | null;
        resolutionNote: string | null;
        evidenceRefs: string[];
        opener: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        handler: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
        openedAt: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    listing: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    };
    bids: {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }[];
    deal: {
        status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        currency: string;
        sellerUserId: string;
        winnerBidId: string | null;
        closedAt: string | null;
        seller: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        listingId: string;
        buyerUserId: string | null;
        agreedAmountCents: number;
        defaultReason: string | null;
        sellerConfirmedAt: string | null;
        buyerConfirmedAt: string | null;
        settledAt: string | null;
        buyer: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
    } | null;
    disputes: {
        status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reason: string;
        resolvedAt: string | null;
        closedAt: string | null;
        listingId: string;
        dealId: string | null;
        openedByUserId: string;
        handledByUserId: string | null;
        resolutionNote: string | null;
        evidenceRefs: string[];
        opener: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        handler: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
        openedAt: string;
    }[];
}, {
    listing: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    };
    bids: {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }[];
    deal: {
        status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        currency: string;
        sellerUserId: string;
        winnerBidId: string | null;
        closedAt: string | null;
        seller: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        listingId: string;
        buyerUserId: string | null;
        agreedAmountCents: number;
        defaultReason: string | null;
        sellerConfirmedAt: string | null;
        buyerConfirmedAt: string | null;
        settledAt: string | null;
        buyer: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
    } | null;
    disputes: {
        status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reason: string;
        resolvedAt: string | null;
        closedAt: string | null;
        listingId: string;
        dealId: string | null;
        openedByUserId: string;
        handledByUserId: string | null;
        resolutionNote: string | null;
        evidenceRefs: string[];
        opener: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        handler: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
        openedAt: string;
    }[];
}>;
export declare const marketplaceListingsPageSchema: z.ZodObject<{
    listings: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        sellerUserId: z.ZodString;
        sourceProductId: z.ZodNullable<z.ZodString>;
        sourceBreederId: z.ZodNullable<z.ZodString>;
        sourceBatchId: z.ZodNullable<z.ZodString>;
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        reviewStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>;
        lifecycleStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>;
        transactionStatus: z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>;
        auctionStatus: z.ZodEnum<["NONE", "SCHEDULED", "LIVE", "ENDED", "WON_PENDING_SETTLEMENT", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CLOSED"]>;
        currency: z.ZodString;
        title: z.ZodString;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        reservePriceCents: z.ZodNullable<z.ZodNumber>;
        bidIncrementCents: z.ZodNullable<z.ZodNumber>;
        currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
        winnerBidId: z.ZodNullable<z.ZodString>;
        statusReason: z.ZodNullable<z.ZodString>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        auctionStartsAt: z.ZodNullable<z.ZodString>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
        snapshotVersion: z.ZodNumber;
        snapshot: z.ZodObject<{
            source: z.ZodObject<{
                listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
                sourceProductId: z.ZodNullable<z.ZodString>;
                sourceBreederId: z.ZodNullable<z.ZodString>;
                sourceBatchId: z.ZodNullable<z.ZodString>;
                sourceProductCode: z.ZodNullable<z.ZodString>;
                sourceBreederCode: z.ZodNullable<z.ZodString>;
                sourceBatchNo: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }>;
            title: z.ZodString;
            subtitle: z.ZodNullable<z.ZodString>;
            coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
            gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
            lineageSummary: z.ZodObject<{
                seriesName: z.ZodNullable<z.ZodString>;
                lineageType: z.ZodNullable<z.ZodString>;
                crossLabel: z.ZodNullable<z.ZodString>;
                selfCode: z.ZodNullable<z.ZodString>;
                sireCode: z.ZodNullable<z.ZodString>;
                damCode: z.ZodNullable<z.ZodString>;
                mateCode: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }>;
            certificateRefs: z.ZodArray<z.ZodObject<{
                certificateId: z.ZodString;
                productId: z.ZodNullable<z.ZodString>;
                saleBatchId: z.ZodNullable<z.ZodString>;
                verifyId: z.ZodNullable<z.ZodString>;
                certNo: z.ZodNullable<z.ZodString>;
                issuedAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }>, "many">;
            healthSummary: z.ZodObject<{
                summary: z.ZodNullable<z.ZodString>;
                latestEventType: z.ZodNullable<z.ZodString>;
                latestEventAt: z.ZodNullable<z.ZodString>;
                tags: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }>;
            sellerNotice: z.ZodNullable<z.ZodString>;
            deliveryNotice: z.ZodNullable<z.ZodString>;
            priceSummary: z.ZodObject<{
                saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
                currency: z.ZodString;
                fixedPriceCents: z.ZodNullable<z.ZodNumber>;
                openingBidCents: z.ZodNullable<z.ZodNumber>;
                reservePriceCents: z.ZodNullable<z.ZodNumber>;
                bidIncrementCents: z.ZodNullable<z.ZodNumber>;
                auctionStartsAt: z.ZodNullable<z.ZodString>;
                auctionEndsAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }>;
            fieldOrigins: z.ZodObject<{
                title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            }, "strip", z.ZodTypeAny, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }>;
            assembledAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }>;
        seller: z.ZodObject<{
            tenantId: z.ZodString;
            tenantSlug: z.ZodString;
            tenantName: z.ZodString;
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        reviewer: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userEmail: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }[];
    total: number;
    totalPages: number;
}, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }[];
    total: number;
    totalPages: number;
}>;
export declare const marketplaceBuyerListingDetailResponseSchema: z.ZodObject<{
    listing: z.ZodObject<{
        id: z.ZodString;
        listingId: z.ZodString;
        tenantSlug: z.ZodString;
        tenantName: z.ZodString;
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        title: z.ZodString;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        sellerLabel: z.ZodString;
        priceLabel: z.ZodString;
        currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
        bidCount: z.ZodNumber;
        publishedAt: z.ZodNullable<z.ZodString>;
        trustSignals: z.ZodArray<z.ZodObject<{
            key: z.ZodEnum<["LINEAGE", "CERTIFICATE", "HEALTH", "DELIVERY", "AUCTION_RULE", "RECENT_ACTIVITY"]>;
            label: z.ZodString;
            detail: z.ZodNullable<z.ZodString>;
            tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
        }, "strip", z.ZodTypeAny, {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }, {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }>, "many">;
        statusBadge: z.ZodObject<{
            label: z.ZodString;
            detail: z.ZodNullable<z.ZodString>;
            tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }, {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }>;
        permalinkPath: z.ZodString;
    } & {
        subtitle: z.ZodNullable<z.ZodString>;
        gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
        sellerNotice: z.ZodNullable<z.ZodString>;
        deliveryNotice: z.ZodNullable<z.ZodString>;
        certificateRefs: z.ZodArray<z.ZodObject<{
            certificateId: z.ZodString;
            productId: z.ZodNullable<z.ZodString>;
            saleBatchId: z.ZodNullable<z.ZodString>;
            verifyId: z.ZodNullable<z.ZodString>;
            certNo: z.ZodNullable<z.ZodString>;
            issuedAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }, {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }>, "many">;
        lineageSummary: z.ZodObject<{
            seriesName: z.ZodNullable<z.ZodString>;
            lineageType: z.ZodNullable<z.ZodString>;
            crossLabel: z.ZodNullable<z.ZodString>;
            selfCode: z.ZodNullable<z.ZodString>;
            sireCode: z.ZodNullable<z.ZodString>;
            damCode: z.ZodNullable<z.ZodString>;
            mateCode: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        }, {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        }>;
        healthSummary: z.ZodObject<{
            summary: z.ZodNullable<z.ZodString>;
            latestEventType: z.ZodNullable<z.ZodString>;
            latestEventAt: z.ZodNullable<z.ZodString>;
            tags: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        }, {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        }>;
        auctionRuleSummary: z.ZodNullable<z.ZodObject<{
            openingBidLabel: z.ZodNullable<z.ZodString>;
            reservePriceLabel: z.ZodNullable<z.ZodString>;
            bidIncrementLabel: z.ZodNullable<z.ZodString>;
            scheduleLabel: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            openingBidLabel: string | null;
            reservePriceLabel: string | null;
            bidIncrementLabel: string | null;
            scheduleLabel: string | null;
        }, {
            openingBidLabel: string | null;
            reservePriceLabel: string | null;
            bidIncrementLabel: string | null;
            scheduleLabel: string | null;
        }>>;
        recentBidSnippets: z.ZodArray<z.ZodObject<{
            bidId: z.ZodString;
            bidderLabel: z.ZodString;
            amountCents: z.ZodNumber;
            amountLabel: z.ZodString;
            createdAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            createdAt: string;
            amountCents: number;
            bidId: string;
            bidderLabel: string;
            amountLabel: string;
        }, {
            createdAt: string;
            amountCents: number;
            bidId: string;
            bidderLabel: string;
            amountLabel: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        subtitle: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
        auctionRuleSummary: {
            openingBidLabel: string | null;
            reservePriceLabel: string | null;
            bidIncrementLabel: string | null;
            scheduleLabel: string | null;
        } | null;
        recentBidSnippets: {
            createdAt: string;
            amountCents: number;
            bidId: string;
            bidderLabel: string;
            amountLabel: string;
        }[];
    }, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        subtitle: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
        auctionRuleSummary: {
            openingBidLabel: string | null;
            reservePriceLabel: string | null;
            bidIncrementLabel: string | null;
            scheduleLabel: string | null;
        } | null;
        recentBidSnippets: {
            createdAt: string;
            amountCents: number;
            bidId: string;
            bidderLabel: string;
            amountLabel: string;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    listing: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        subtitle: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
        auctionRuleSummary: {
            openingBidLabel: string | null;
            reservePriceLabel: string | null;
            bidIncrementLabel: string | null;
            scheduleLabel: string | null;
        } | null;
        recentBidSnippets: {
            createdAt: string;
            amountCents: number;
            bidId: string;
            bidderLabel: string;
            amountLabel: string;
        }[];
    };
}, {
    listing: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        subtitle: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        gallery: string[];
        lineageSummary: {
            seriesName: string | null;
            lineageType: string | null;
            crossLabel: string | null;
            selfCode: string | null;
            sireCode: string | null;
            damCode: string | null;
            mateCode: string | null;
        };
        certificateRefs: {
            saleBatchId: string | null;
            productId: string | null;
            certificateId: string;
            verifyId: string | null;
            certNo: string | null;
            issuedAt: string | null;
        }[];
        healthSummary: {
            summary: string | null;
            latestEventType: string | null;
            latestEventAt: string | null;
            tags: string[];
        };
        sellerNotice: string | null;
        deliveryNotice: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
        auctionRuleSummary: {
            openingBidLabel: string | null;
            reservePriceLabel: string | null;
            bidIncrementLabel: string | null;
            scheduleLabel: string | null;
        } | null;
        recentBidSnippets: {
            createdAt: string;
            amountCents: number;
            bidId: string;
            bidderLabel: string;
            amountLabel: string;
        }[];
    };
}>;
export declare const marketplaceBuyerActionDetailResponseSchema: z.ZodObject<{
    listing: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        sellerUserId: z.ZodString;
        sourceProductId: z.ZodNullable<z.ZodString>;
        sourceBreederId: z.ZodNullable<z.ZodString>;
        sourceBatchId: z.ZodNullable<z.ZodString>;
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        reviewStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>;
        lifecycleStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>;
        transactionStatus: z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>;
        auctionStatus: z.ZodEnum<["NONE", "SCHEDULED", "LIVE", "ENDED", "WON_PENDING_SETTLEMENT", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CLOSED"]>;
        currency: z.ZodString;
        title: z.ZodString;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        reservePriceCents: z.ZodNullable<z.ZodNumber>;
        bidIncrementCents: z.ZodNullable<z.ZodNumber>;
        currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
        winnerBidId: z.ZodNullable<z.ZodString>;
        statusReason: z.ZodNullable<z.ZodString>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        auctionStartsAt: z.ZodNullable<z.ZodString>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
        snapshotVersion: z.ZodNumber;
        snapshot: z.ZodObject<{
            source: z.ZodObject<{
                listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
                sourceProductId: z.ZodNullable<z.ZodString>;
                sourceBreederId: z.ZodNullable<z.ZodString>;
                sourceBatchId: z.ZodNullable<z.ZodString>;
                sourceProductCode: z.ZodNullable<z.ZodString>;
                sourceBreederCode: z.ZodNullable<z.ZodString>;
                sourceBatchNo: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }>;
            title: z.ZodString;
            subtitle: z.ZodNullable<z.ZodString>;
            coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
            gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
            lineageSummary: z.ZodObject<{
                seriesName: z.ZodNullable<z.ZodString>;
                lineageType: z.ZodNullable<z.ZodString>;
                crossLabel: z.ZodNullable<z.ZodString>;
                selfCode: z.ZodNullable<z.ZodString>;
                sireCode: z.ZodNullable<z.ZodString>;
                damCode: z.ZodNullable<z.ZodString>;
                mateCode: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }>;
            certificateRefs: z.ZodArray<z.ZodObject<{
                certificateId: z.ZodString;
                productId: z.ZodNullable<z.ZodString>;
                saleBatchId: z.ZodNullable<z.ZodString>;
                verifyId: z.ZodNullable<z.ZodString>;
                certNo: z.ZodNullable<z.ZodString>;
                issuedAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }>, "many">;
            healthSummary: z.ZodObject<{
                summary: z.ZodNullable<z.ZodString>;
                latestEventType: z.ZodNullable<z.ZodString>;
                latestEventAt: z.ZodNullable<z.ZodString>;
                tags: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }>;
            sellerNotice: z.ZodNullable<z.ZodString>;
            deliveryNotice: z.ZodNullable<z.ZodString>;
            priceSummary: z.ZodObject<{
                saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
                currency: z.ZodString;
                fixedPriceCents: z.ZodNullable<z.ZodNumber>;
                openingBidCents: z.ZodNullable<z.ZodNumber>;
                reservePriceCents: z.ZodNullable<z.ZodNumber>;
                bidIncrementCents: z.ZodNullable<z.ZodNumber>;
                auctionStartsAt: z.ZodNullable<z.ZodString>;
                auctionEndsAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }>;
            fieldOrigins: z.ZodObject<{
                title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            }, "strip", z.ZodTypeAny, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }>;
            assembledAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }>;
        seller: z.ZodObject<{
            tenantId: z.ZodString;
            tenantSlug: z.ZodString;
            tenantName: z.ZodString;
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        reviewer: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userEmail: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }>;
    actionState: z.ZodObject<{
        actorBid: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            tenantId: z.ZodString;
            listingId: z.ZodString;
            bidderUserId: z.ZodString;
            amountCents: z.ZodNumber;
            status: z.ZodEnum<["ACTIVE", "OUTBID", "WINNING", "RETRACTED", "INVALIDATED"]>;
            isWinning: z.ZodBoolean;
            invalidatedReason: z.ZodNullable<z.ZodString>;
            bidder: z.ZodObject<{
                userId: z.ZodString;
                userName: z.ZodNullable<z.ZodString>;
                userAccount: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            }, {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            }>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        }, {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        }>>;
        highestBid: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            tenantId: z.ZodString;
            listingId: z.ZodString;
            bidderUserId: z.ZodString;
            amountCents: z.ZodNumber;
            status: z.ZodEnum<["ACTIVE", "OUTBID", "WINNING", "RETRACTED", "INVALIDATED"]>;
            isWinning: z.ZodBoolean;
            invalidatedReason: z.ZodNullable<z.ZodString>;
            bidder: z.ZodObject<{
                userId: z.ZodString;
                userName: z.ZodNullable<z.ZodString>;
                userAccount: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            }, {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            }>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        }, {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        }>>;
        minimumNextBidCents: z.ZodNullable<z.ZodNumber>;
        minimumNextBidLabel: z.ZodNullable<z.ZodString>;
        endedReason: z.ZodNullable<z.ZodString>;
        placeBidDisabledReason: z.ZodNullable<z.ZodString>;
        canPlaceBid: z.ZodBoolean;
        canSellerConfirmDeal: z.ZodBoolean;
        canBuyerConfirmDeal: z.ZodBoolean;
        canSellerMarkSettled: z.ZodBoolean;
        canSellerMarkDefaulted: z.ZodBoolean;
        canOpenDispute: z.ZodBoolean;
        activeDisputeId: z.ZodNullable<z.ZodString>;
        bidCount: z.ZodNumber;
        isHighestBidder: z.ZodBoolean;
        isSeller: z.ZodBoolean;
        isWinner: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        bidCount: number;
        actorBid: {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        } | null;
        highestBid: {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        } | null;
        minimumNextBidCents: number | null;
        minimumNextBidLabel: string | null;
        endedReason: string | null;
        placeBidDisabledReason: string | null;
        canPlaceBid: boolean;
        canSellerConfirmDeal: boolean;
        canBuyerConfirmDeal: boolean;
        canSellerMarkSettled: boolean;
        canSellerMarkDefaulted: boolean;
        canOpenDispute: boolean;
        activeDisputeId: string | null;
        isHighestBidder: boolean;
        isSeller: boolean;
        isWinner: boolean;
    }, {
        bidCount: number;
        actorBid: {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        } | null;
        highestBid: {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        } | null;
        minimumNextBidCents: number | null;
        minimumNextBidLabel: string | null;
        endedReason: string | null;
        placeBidDisabledReason: string | null;
        canPlaceBid: boolean;
        canSellerConfirmDeal: boolean;
        canBuyerConfirmDeal: boolean;
        canSellerMarkSettled: boolean;
        canSellerMarkDefaulted: boolean;
        canOpenDispute: boolean;
        activeDisputeId: string | null;
        isHighestBidder: boolean;
        isSeller: boolean;
        isWinner: boolean;
    }>;
    bids: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        listingId: z.ZodString;
        bidderUserId: z.ZodString;
        amountCents: z.ZodNumber;
        status: z.ZodEnum<["ACTIVE", "OUTBID", "WINNING", "RETRACTED", "INVALIDATED"]>;
        isWinning: z.ZodBoolean;
        invalidatedReason: z.ZodNullable<z.ZodString>;
        bidder: z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }, {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }>, "many">;
    deal: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        listingId: z.ZodString;
        buyerUserId: z.ZodNullable<z.ZodString>;
        sellerUserId: z.ZodString;
        winnerBidId: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["PENDING_CONFIRMATION", "SELLER_CONFIRMED", "BUYER_CONFIRMED", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CANCELLED", "CLOSED"]>;
        agreedAmountCents: z.ZodNumber;
        currency: z.ZodString;
        defaultReason: z.ZodNullable<z.ZodString>;
        sellerConfirmedAt: z.ZodNullable<z.ZodString>;
        buyerConfirmedAt: z.ZodNullable<z.ZodString>;
        settledAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        seller: z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        buyer: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        currency: string;
        sellerUserId: string;
        winnerBidId: string | null;
        closedAt: string | null;
        seller: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        listingId: string;
        buyerUserId: string | null;
        agreedAmountCents: number;
        defaultReason: string | null;
        sellerConfirmedAt: string | null;
        buyerConfirmedAt: string | null;
        settledAt: string | null;
        buyer: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
    }, {
        status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        currency: string;
        sellerUserId: string;
        winnerBidId: string | null;
        closedAt: string | null;
        seller: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        listingId: string;
        buyerUserId: string | null;
        agreedAmountCents: number;
        defaultReason: string | null;
        sellerConfirmedAt: string | null;
        buyerConfirmedAt: string | null;
        settledAt: string | null;
        buyer: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
    }>>;
    disputes: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        listingId: z.ZodString;
        dealId: z.ZodNullable<z.ZodString>;
        openedByUserId: z.ZodString;
        handledByUserId: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["OPEN", "UNDER_REVIEW", "RESOLVED", "REJECTED", "CLOSED"]>;
        reason: z.ZodString;
        resolutionNote: z.ZodNullable<z.ZodString>;
        evidenceRefs: z.ZodArray<z.ZodString, "many">;
        opener: z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        handler: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        }>>;
        openedAt: z.ZodString;
        resolvedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reason: string;
        resolvedAt: string | null;
        closedAt: string | null;
        listingId: string;
        dealId: string | null;
        openedByUserId: string;
        handledByUserId: string | null;
        resolutionNote: string | null;
        evidenceRefs: string[];
        opener: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        handler: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
        openedAt: string;
    }, {
        status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reason: string;
        resolvedAt: string | null;
        closedAt: string | null;
        listingId: string;
        dealId: string | null;
        openedByUserId: string;
        handledByUserId: string | null;
        resolutionNote: string | null;
        evidenceRefs: string[];
        opener: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        handler: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
        openedAt: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    listing: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    };
    bids: {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }[];
    deal: {
        status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        currency: string;
        sellerUserId: string;
        winnerBidId: string | null;
        closedAt: string | null;
        seller: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        listingId: string;
        buyerUserId: string | null;
        agreedAmountCents: number;
        defaultReason: string | null;
        sellerConfirmedAt: string | null;
        buyerConfirmedAt: string | null;
        settledAt: string | null;
        buyer: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
    } | null;
    disputes: {
        status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reason: string;
        resolvedAt: string | null;
        closedAt: string | null;
        listingId: string;
        dealId: string | null;
        openedByUserId: string;
        handledByUserId: string | null;
        resolutionNote: string | null;
        evidenceRefs: string[];
        opener: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        handler: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
        openedAt: string;
    }[];
    actionState: {
        bidCount: number;
        actorBid: {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        } | null;
        highestBid: {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        } | null;
        minimumNextBidCents: number | null;
        minimumNextBidLabel: string | null;
        endedReason: string | null;
        placeBidDisabledReason: string | null;
        canPlaceBid: boolean;
        canSellerConfirmDeal: boolean;
        canBuyerConfirmDeal: boolean;
        canSellerMarkSettled: boolean;
        canSellerMarkDefaulted: boolean;
        canOpenDispute: boolean;
        activeDisputeId: string | null;
        isHighestBidder: boolean;
        isSeller: boolean;
        isWinner: boolean;
    };
}, {
    listing: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    };
    bids: {
        status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        listingId: string;
        bidderUserId: string;
        amountCents: number;
        isWinning: boolean;
        invalidatedReason: string | null;
        bidder: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
    }[];
    deal: {
        status: "CLOSED" | "CANCELLED" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED" | "PENDING_CONFIRMATION" | "SELLER_CONFIRMED" | "BUYER_CONFIRMED";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        currency: string;
        sellerUserId: string;
        winnerBidId: string | null;
        closedAt: string | null;
        seller: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        listingId: string;
        buyerUserId: string | null;
        agreedAmountCents: number;
        defaultReason: string | null;
        sellerConfirmedAt: string | null;
        buyerConfirmedAt: string | null;
        settledAt: string | null;
        buyer: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
    } | null;
    disputes: {
        status: "OPEN" | "CLOSED" | "REJECTED" | "RESOLVED" | "UNDER_REVIEW";
        id: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reason: string;
        resolvedAt: string | null;
        closedAt: string | null;
        listingId: string;
        dealId: string | null;
        openedByUserId: string;
        handledByUserId: string | null;
        resolutionNote: string | null;
        evidenceRefs: string[];
        opener: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        };
        handler: {
            userId: string;
            userName: string | null;
            userAccount: string | null;
        } | null;
        openedAt: string;
    }[];
    actionState: {
        bidCount: number;
        actorBid: {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        } | null;
        highestBid: {
            status: "ACTIVE" | "OUTBID" | "WINNING" | "RETRACTED" | "INVALIDATED";
            id: string;
            tenantId: string;
            createdAt: string;
            updatedAt: string;
            listingId: string;
            bidderUserId: string;
            amountCents: number;
            isWinning: boolean;
            invalidatedReason: string | null;
            bidder: {
                userId: string;
                userName: string | null;
                userAccount: string | null;
            };
        } | null;
        minimumNextBidCents: number | null;
        minimumNextBidLabel: string | null;
        endedReason: string | null;
        placeBidDisabledReason: string | null;
        canPlaceBid: boolean;
        canSellerConfirmDeal: boolean;
        canBuyerConfirmDeal: boolean;
        canSellerMarkSettled: boolean;
        canSellerMarkDefaulted: boolean;
        canOpenDispute: boolean;
        activeDisputeId: string | null;
        isHighestBidder: boolean;
        isSeller: boolean;
        isWinner: boolean;
    };
}>;
export declare const marketplaceBuyerListingsPageSchema: z.ZodObject<{
    listings: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        listingId: z.ZodString;
        tenantSlug: z.ZodString;
        tenantName: z.ZodString;
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        title: z.ZodString;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        sellerLabel: z.ZodString;
        priceLabel: z.ZodString;
        currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
        bidCount: z.ZodNumber;
        publishedAt: z.ZodNullable<z.ZodString>;
        trustSignals: z.ZodArray<z.ZodObject<{
            key: z.ZodEnum<["LINEAGE", "CERTIFICATE", "HEALTH", "DELIVERY", "AUCTION_RULE", "RECENT_ACTIVITY"]>;
            label: z.ZodString;
            detail: z.ZodNullable<z.ZodString>;
            tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
        }, "strip", z.ZodTypeAny, {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }, {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }>, "many">;
        statusBadge: z.ZodObject<{
            label: z.ZodString;
            detail: z.ZodNullable<z.ZodString>;
            tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }, {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }>;
        permalinkPath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
    }, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
    }[];
    total: number;
    totalPages: number;
}, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
    }[];
    total: number;
    totalPages: number;
}>;
export declare const listMarketplaceSellerListingsResponseSchema: z.ZodObject<{
    listings: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        sellerUserId: z.ZodString;
        sourceProductId: z.ZodNullable<z.ZodString>;
        sourceBreederId: z.ZodNullable<z.ZodString>;
        sourceBatchId: z.ZodNullable<z.ZodString>;
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        reviewStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>;
        lifecycleStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>;
        transactionStatus: z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>;
        auctionStatus: z.ZodEnum<["NONE", "SCHEDULED", "LIVE", "ENDED", "WON_PENDING_SETTLEMENT", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CLOSED"]>;
        currency: z.ZodString;
        title: z.ZodString;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        reservePriceCents: z.ZodNullable<z.ZodNumber>;
        bidIncrementCents: z.ZodNullable<z.ZodNumber>;
        currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
        winnerBidId: z.ZodNullable<z.ZodString>;
        statusReason: z.ZodNullable<z.ZodString>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        auctionStartsAt: z.ZodNullable<z.ZodString>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
        snapshotVersion: z.ZodNumber;
        snapshot: z.ZodObject<{
            source: z.ZodObject<{
                listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
                sourceProductId: z.ZodNullable<z.ZodString>;
                sourceBreederId: z.ZodNullable<z.ZodString>;
                sourceBatchId: z.ZodNullable<z.ZodString>;
                sourceProductCode: z.ZodNullable<z.ZodString>;
                sourceBreederCode: z.ZodNullable<z.ZodString>;
                sourceBatchNo: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }>;
            title: z.ZodString;
            subtitle: z.ZodNullable<z.ZodString>;
            coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
            gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
            lineageSummary: z.ZodObject<{
                seriesName: z.ZodNullable<z.ZodString>;
                lineageType: z.ZodNullable<z.ZodString>;
                crossLabel: z.ZodNullable<z.ZodString>;
                selfCode: z.ZodNullable<z.ZodString>;
                sireCode: z.ZodNullable<z.ZodString>;
                damCode: z.ZodNullable<z.ZodString>;
                mateCode: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }>;
            certificateRefs: z.ZodArray<z.ZodObject<{
                certificateId: z.ZodString;
                productId: z.ZodNullable<z.ZodString>;
                saleBatchId: z.ZodNullable<z.ZodString>;
                verifyId: z.ZodNullable<z.ZodString>;
                certNo: z.ZodNullable<z.ZodString>;
                issuedAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }>, "many">;
            healthSummary: z.ZodObject<{
                summary: z.ZodNullable<z.ZodString>;
                latestEventType: z.ZodNullable<z.ZodString>;
                latestEventAt: z.ZodNullable<z.ZodString>;
                tags: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }>;
            sellerNotice: z.ZodNullable<z.ZodString>;
            deliveryNotice: z.ZodNullable<z.ZodString>;
            priceSummary: z.ZodObject<{
                saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
                currency: z.ZodString;
                fixedPriceCents: z.ZodNullable<z.ZodNumber>;
                openingBidCents: z.ZodNullable<z.ZodNumber>;
                reservePriceCents: z.ZodNullable<z.ZodNumber>;
                bidIncrementCents: z.ZodNullable<z.ZodNumber>;
                auctionStartsAt: z.ZodNullable<z.ZodString>;
                auctionEndsAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }>;
            fieldOrigins: z.ZodObject<{
                title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            }, "strip", z.ZodTypeAny, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }>;
            assembledAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }>;
        seller: z.ZodObject<{
            tenantId: z.ZodString;
            tenantSlug: z.ZodString;
            tenantName: z.ZodString;
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        reviewer: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userEmail: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }[];
    total: number;
    totalPages: number;
}, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }[];
    total: number;
    totalPages: number;
}>;
export declare const listMarketplaceAdminListingsResponseSchema: z.ZodObject<{
    listings: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        sellerUserId: z.ZodString;
        sourceProductId: z.ZodNullable<z.ZodString>;
        sourceBreederId: z.ZodNullable<z.ZodString>;
        sourceBatchId: z.ZodNullable<z.ZodString>;
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        reviewStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "APPROVED", "REJECTED"]>;
        lifecycleStatus: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "PAUSED", "ARCHIVED", "CLOSED"]>;
        transactionStatus: z.ZodEnum<["UNSOLD", "IN_TRANSACTION", "SOLD", "CLOSED"]>;
        auctionStatus: z.ZodEnum<["NONE", "SCHEDULED", "LIVE", "ENDED", "WON_PENDING_SETTLEMENT", "SETTLING", "SETTLED", "DEFAULTED", "DISPUTED", "CLOSED"]>;
        currency: z.ZodString;
        title: z.ZodString;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        reservePriceCents: z.ZodNullable<z.ZodNumber>;
        bidIncrementCents: z.ZodNullable<z.ZodNumber>;
        currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
        winnerBidId: z.ZodNullable<z.ZodString>;
        statusReason: z.ZodNullable<z.ZodString>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        pausedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        closedAt: z.ZodNullable<z.ZodString>;
        auctionStartsAt: z.ZodNullable<z.ZodString>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
        snapshotVersion: z.ZodNumber;
        snapshot: z.ZodObject<{
            source: z.ZodObject<{
                listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
                sourceProductId: z.ZodNullable<z.ZodString>;
                sourceBreederId: z.ZodNullable<z.ZodString>;
                sourceBatchId: z.ZodNullable<z.ZodString>;
                sourceProductCode: z.ZodNullable<z.ZodString>;
                sourceBreederCode: z.ZodNullable<z.ZodString>;
                sourceBatchNo: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }, {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            }>;
            title: z.ZodString;
            subtitle: z.ZodNullable<z.ZodString>;
            coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
            gallery: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
            lineageSummary: z.ZodObject<{
                seriesName: z.ZodNullable<z.ZodString>;
                lineageType: z.ZodNullable<z.ZodString>;
                crossLabel: z.ZodNullable<z.ZodString>;
                selfCode: z.ZodNullable<z.ZodString>;
                sireCode: z.ZodNullable<z.ZodString>;
                damCode: z.ZodNullable<z.ZodString>;
                mateCode: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }, {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            }>;
            certificateRefs: z.ZodArray<z.ZodObject<{
                certificateId: z.ZodString;
                productId: z.ZodNullable<z.ZodString>;
                saleBatchId: z.ZodNullable<z.ZodString>;
                verifyId: z.ZodNullable<z.ZodString>;
                certNo: z.ZodNullable<z.ZodString>;
                issuedAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }, {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }>, "many">;
            healthSummary: z.ZodObject<{
                summary: z.ZodNullable<z.ZodString>;
                latestEventType: z.ZodNullable<z.ZodString>;
                latestEventAt: z.ZodNullable<z.ZodString>;
                tags: z.ZodArray<z.ZodString, "many">;
            }, "strip", z.ZodTypeAny, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }, {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            }>;
            sellerNotice: z.ZodNullable<z.ZodString>;
            deliveryNotice: z.ZodNullable<z.ZodString>;
            priceSummary: z.ZodObject<{
                saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
                currency: z.ZodString;
                fixedPriceCents: z.ZodNullable<z.ZodNumber>;
                openingBidCents: z.ZodNullable<z.ZodNumber>;
                reservePriceCents: z.ZodNullable<z.ZodNumber>;
                bidIncrementCents: z.ZodNullable<z.ZodNumber>;
                auctionStartsAt: z.ZodNullable<z.ZodString>;
                auctionEndsAt: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }, {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            }>;
            fieldOrigins: z.ZodObject<{
                title: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                coverImageUrl: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                gallery: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                lineageSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                certificateRefs: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                healthSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                sellerNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                deliveryNotice: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
                priceSummary: z.ZodEnum<["SOURCE", "SELLER_OVERRIDE", "SYSTEM", "HYBRID"]>;
            }, "strip", z.ZodTypeAny, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }, {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            }>;
            assembledAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }, {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        }>;
        seller: z.ZodObject<{
            tenantId: z.ZodString;
            tenantSlug: z.ZodString;
            tenantName: z.ZodString;
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userAccount: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }, {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        }>;
        reviewer: z.ZodNullable<z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodNullable<z.ZodString>;
            userEmail: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }, {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        }>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }[];
    total: number;
    totalPages: number;
}, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        currency: string;
        statusReason: string | null;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        sourceProductId: string | null;
        sourceBreederId: string | null;
        sourceBatchId: string | null;
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        reservePriceCents: number | null;
        bidIncrementCents: number | null;
        auctionStartsAt: string | null;
        auctionEndsAt: string | null;
        sellerUserId: string;
        reviewStatus: "DRAFT" | "PENDING_REVIEW" | "REJECTED" | "APPROVED";
        lifecycleStatus: "CLOSED" | "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | "PAUSED";
        transactionStatus: "SOLD" | "CLOSED" | "UNSOLD" | "IN_TRANSACTION";
        auctionStatus: "NONE" | "CLOSED" | "SCHEDULED" | "LIVE" | "ENDED" | "WON_PENDING_SETTLEMENT" | "SETTLING" | "SETTLED" | "DEFAULTED" | "DISPUTED";
        currentBidAmountCents: number | null;
        winnerBidId: string | null;
        pausedAt: string | null;
        closedAt: string | null;
        snapshotVersion: number;
        snapshot: {
            coverImageUrl: string | null;
            source: {
                listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
                sourceProductId: string | null;
                sourceBreederId: string | null;
                sourceBatchId: string | null;
                sourceProductCode: string | null;
                sourceBreederCode: string | null;
                sourceBatchNo: string | null;
            };
            title: string;
            subtitle: string | null;
            gallery: string[];
            lineageSummary: {
                seriesName: string | null;
                lineageType: string | null;
                crossLabel: string | null;
                selfCode: string | null;
                sireCode: string | null;
                damCode: string | null;
                mateCode: string | null;
            };
            certificateRefs: {
                saleBatchId: string | null;
                productId: string | null;
                certificateId: string;
                verifyId: string | null;
                certNo: string | null;
                issuedAt: string | null;
            }[];
            healthSummary: {
                summary: string | null;
                latestEventType: string | null;
                latestEventAt: string | null;
                tags: string[];
            };
            sellerNotice: string | null;
            deliveryNotice: string | null;
            priceSummary: {
                currency: string;
                saleMode: "FIXED_PRICE" | "AUCTION";
                fixedPriceCents: number | null;
                openingBidCents: number | null;
                reservePriceCents: number | null;
                bidIncrementCents: number | null;
                auctionStartsAt: string | null;
                auctionEndsAt: string | null;
            };
            fieldOrigins: {
                coverImageUrl: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                title: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                gallery: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                lineageSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                certificateRefs: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                healthSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                sellerNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                deliveryNotice: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
                priceSummary: "SOURCE" | "SELLER_OVERRIDE" | "SYSTEM" | "HYBRID";
            };
            assembledAt: string;
        };
        seller: {
            tenantId: string;
            userId: string;
            tenantSlug: string;
            tenantName: string;
            userName: string | null;
            userAccount: string | null;
        };
        reviewer: {
            userId: string;
            userName: string | null;
            userEmail: string | null;
        } | null;
    }[];
    total: number;
    totalPages: number;
}>;
export declare const listMarketplaceBuyerListingsResponseSchema: z.ZodObject<{
    listings: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        listingId: z.ZodString;
        tenantSlug: z.ZodString;
        tenantName: z.ZodString;
        saleMode: z.ZodEnum<["FIXED_PRICE", "AUCTION"]>;
        listingKind: z.ZodEnum<["TURTLE", "EGG_BATCH", "HATCHLING_BATCH"]>;
        title: z.ZodString;
        coverImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
        sellerLabel: z.ZodString;
        priceLabel: z.ZodString;
        currentBidAmountCents: z.ZodNullable<z.ZodNumber>;
        fixedPriceCents: z.ZodNullable<z.ZodNumber>;
        openingBidCents: z.ZodNullable<z.ZodNumber>;
        auctionEndsAt: z.ZodNullable<z.ZodString>;
        bidCount: z.ZodNumber;
        publishedAt: z.ZodNullable<z.ZodString>;
        trustSignals: z.ZodArray<z.ZodObject<{
            key: z.ZodEnum<["LINEAGE", "CERTIFICATE", "HEALTH", "DELIVERY", "AUCTION_RULE", "RECENT_ACTIVITY"]>;
            label: z.ZodString;
            detail: z.ZodNullable<z.ZodString>;
            tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
        }, "strip", z.ZodTypeAny, {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }, {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }>, "many">;
        statusBadge: z.ZodObject<{
            label: z.ZodString;
            detail: z.ZodNullable<z.ZodString>;
            tone: z.ZodEnum<["accent", "soft", "warning", "ink"]>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }, {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }>;
        permalinkPath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
    }, {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
    }[];
    total: number;
    totalPages: number;
}, {
    page: number;
    pageSize: number;
    listings: {
        id: string;
        coverImageUrl: string | null;
        title: string;
        publishedAt: string | null;
        tenantSlug: string;
        tenantName: string;
        listingKind: "TURTLE" | "EGG_BATCH" | "HATCHLING_BATCH";
        saleMode: "FIXED_PRICE" | "AUCTION";
        fixedPriceCents: number | null;
        openingBidCents: number | null;
        auctionEndsAt: string | null;
        currentBidAmountCents: number | null;
        listingId: string;
        sellerLabel: string;
        priceLabel: string;
        bidCount: number;
        trustSignals: {
            key: "LINEAGE" | "CERTIFICATE" | "HEALTH" | "DELIVERY" | "AUCTION_RULE" | "RECENT_ACTIVITY";
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        }[];
        statusBadge: {
            label: string;
            detail: string | null;
            tone: "accent" | "soft" | "warning" | "ink";
        };
        permalinkPath: string;
    }[];
    total: number;
    totalPages: number;
}>;
export type MarketplaceListingKind = z.infer<typeof marketplaceListingKindSchema>;
export type MarketplaceSaleMode = z.infer<typeof marketplaceSaleModeSchema>;
export type MarketplaceReviewStatus = z.infer<typeof marketplaceReviewStatusSchema>;
export type MarketplaceListingLifecycleStatus = z.infer<typeof marketplaceListingLifecycleStatusSchema>;
export type MarketplaceTransactionStatus = z.infer<typeof marketplaceTransactionStatusSchema>;
export type MarketplaceAuctionStatus = z.infer<typeof marketplaceAuctionStatusSchema>;
export type MarketplaceBidStatus = z.infer<typeof marketplaceBidStatusSchema>;
export type MarketplaceDealStatus = z.infer<typeof marketplaceDealStatusSchema>;
export type MarketplaceDisputeStatus = z.infer<typeof marketplaceDisputeStatusSchema>;
export type MarketplaceSnapshotFieldOrigin = z.infer<typeof marketplaceSnapshotFieldOriginSchema>;
export type MarketplaceBuyerTone = z.infer<typeof marketplaceBuyerToneSchema>;
export type MarketplaceBuyerTrustSignalKey = z.infer<typeof marketplaceBuyerTrustSignalKeySchema>;
export type MarketplaceListingSource = z.infer<typeof marketplaceListingSourceSchema>;
export type MarketplaceCertificateRef = z.infer<typeof marketplaceCertificateRefSchema>;
export type MarketplaceLineageSummary = z.infer<typeof marketplaceLineageSummarySchema>;
export type MarketplaceHealthSummary = z.infer<typeof marketplaceHealthSummarySchema>;
export type MarketplacePriceSummary = z.infer<typeof marketplacePriceSummarySchema>;
export type MarketplaceListingSnapshotPayload = z.infer<typeof marketplaceListingSnapshotPayloadSchema>;
export type MarketplaceSellerProfile = z.infer<typeof marketplaceSellerProfileSchema>;
export type MarketplaceReviewer = z.infer<typeof marketplaceReviewerSchema>;
export type MarketplaceListing = z.infer<typeof marketplaceListingSchema>;
export type MarketplaceListingSnapshot = z.infer<typeof marketplaceListingSnapshotSchema>;
export type MarketplaceBid = z.infer<typeof marketplaceBidSchema>;
export type MarketplaceDeal = z.infer<typeof marketplaceDealSchema>;
export type MarketplaceDispute = z.infer<typeof marketplaceDisputeSchema>;
export type CreateMarketplaceSellerListingRequest = z.infer<typeof createMarketplaceSellerListingRequestSchema>;
export type UpdateMarketplaceSellerListingRequest = z.infer<typeof updateMarketplaceSellerListingRequestSchema>;
export type MarketplaceSellerListListingsQuery = z.infer<typeof marketplaceSellerListListingsQuerySchema>;
export type MarketplaceAdminListListingsQuery = z.infer<typeof marketplaceAdminListListingsQuerySchema>;
export type MarketplaceBuyerListListingsQuery = z.infer<typeof marketplaceBuyerListListingsQuerySchema>;
export type MarketplaceBuyerTrustSignal = z.infer<typeof marketplaceBuyerTrustSignalSchema>;
export type MarketplaceBuyerStatusBadge = z.infer<typeof marketplaceBuyerStatusBadgeSchema>;
export type MarketplaceBuyerRecentBidSnippet = z.infer<typeof marketplaceBuyerRecentBidSnippetSchema>;
export type MarketplaceBuyerAuctionRuleSummary = z.infer<typeof marketplaceBuyerAuctionRuleSummarySchema>;
export type MarketplaceBuyerListingCard = z.infer<typeof marketplaceBuyerListingCardSchema>;
export type MarketplaceBuyerListingDetail = z.infer<typeof marketplaceBuyerListingDetailSchema>;
export type MarketplacePlaceBidRequest = z.infer<typeof marketplacePlaceBidRequestSchema>;
export type MarketplaceOpenDisputeRequest = z.infer<typeof marketplaceOpenDisputeRequestSchema>;
export type MarketplaceResolveDisputeRequest = z.infer<typeof marketplaceResolveDisputeRequestSchema>;
export type MarketplaceListingStatusReasonRequest = z.infer<typeof marketplaceListingStatusReasonRequestSchema>;
export type MarketplaceBuyerActionState = z.infer<typeof marketplaceBuyerActionStateSchema>;
export type MarketplaceListingMutationResponse = z.infer<typeof marketplaceListingMutationResponseSchema>;
export type MarketplaceListingDetailResponse = z.infer<typeof marketplaceListingDetailResponseSchema>;
export type MarketplaceListingsPage = z.infer<typeof marketplaceListingsPageSchema>;
export type MarketplaceBuyerListingDetailResponse = z.infer<typeof marketplaceBuyerListingDetailResponseSchema>;
export type MarketplaceBuyerActionDetailResponse = z.infer<typeof marketplaceBuyerActionDetailResponseSchema>;
export type MarketplaceBuyerListingsPage = z.infer<typeof marketplaceBuyerListingsPageSchema>;
