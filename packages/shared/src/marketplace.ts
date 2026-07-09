import { z } from 'zod';

import { tenantNameSchema, tenantSlugSchema } from './tenant';

const nullableIdSchema = z.string().trim().min(1).nullable().optional();
const nullableText120Schema = z.string().trim().max(120).nullable().optional();
const nullableText240Schema = z.string().trim().max(240).nullable().optional();
const nullableText1000Schema = z.string().trim().max(1000).nullable().optional();
const nullableDateTimeSchema = z.string().datetime().nullable().optional();
const marketplaceDisputeEvidenceRefSchema = z.string().trim().min(1).max(240);

function isAbsoluteUrl(value: string) {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}

const marketplaceAssetUrlSchema = z
  .string()
  .trim()
  .min(1)
  .refine((value) => value.startsWith('/') || isAbsoluteUrl(value), {
    message: 'Expected an absolute URL or root-relative asset path.',
  });
const nullableMarketplaceAssetUrlSchema = marketplaceAssetUrlSchema.nullable();
const optionalNullableMarketplaceAssetUrlSchema = nullableMarketplaceAssetUrlSchema.optional();

export const marketplaceListingKindSchema = z.enum(['TURTLE', 'EGG_BATCH', 'HATCHLING_BATCH']);
export const marketplaceSaleModeSchema = z.enum(['FIXED_PRICE', 'AUCTION']);
export const marketplaceReviewStatusSchema = z.enum([
  'DRAFT',
  'PENDING_REVIEW',
  'APPROVED',
  'REJECTED',
]);
export const marketplaceListingLifecycleStatusSchema = z.enum([
  'DRAFT',
  'PENDING_REVIEW',
  'PUBLISHED',
  'REJECTED',
  'PAUSED',
  'ARCHIVED',
  'CLOSED',
]);
export const marketplaceTransactionStatusSchema = z.enum([
  'UNSOLD',
  'IN_TRANSACTION',
  'SOLD',
  'CLOSED',
]);
export const marketplaceAuctionStatusSchema = z.enum([
  'NONE',
  'SCHEDULED',
  'LIVE',
  'ENDED',
  'WON_PENDING_SETTLEMENT',
  'SETTLING',
  'SETTLED',
  'DEFAULTED',
  'DISPUTED',
  'CLOSED',
]);
export const marketplaceBidStatusSchema = z.enum([
  'ACTIVE',
  'OUTBID',
  'WINNING',
  'RETRACTED',
  'INVALIDATED',
]);
export const marketplaceDealStatusSchema = z.enum([
  'PENDING_CONFIRMATION',
  'SELLER_CONFIRMED',
  'BUYER_CONFIRMED',
  'SETTLING',
  'SETTLED',
  'DEFAULTED',
  'DISPUTED',
  'CANCELLED',
  'CLOSED',
]);
export const marketplaceDisputeStatusSchema = z.enum([
  'OPEN',
  'UNDER_REVIEW',
  'RESOLVED',
  'REJECTED',
  'CLOSED',
]);
export const marketplaceSnapshotFieldOriginSchema = z.enum([
  'SOURCE',
  'SELLER_OVERRIDE',
  'SYSTEM',
  'HYBRID',
]);
export const marketplaceBuyerToneSchema = z.enum(['accent', 'soft', 'warning', 'ink']);
export const marketplaceBuyerTrustSignalKeySchema = z.enum([
  'LINEAGE',
  'CERTIFICATE',
  'HEALTH',
  'DELIVERY',
  'AUCTION_RULE',
  'RECENT_ACTIVITY',
]);

export const marketplaceListingSourceSchema = z.object({
  listingKind: marketplaceListingKindSchema,
  sourceProductId: z.string().min(1).nullable(),
  sourceBreederId: z.string().min(1).nullable(),
  sourceBatchId: z.string().min(1).nullable(),
  sourceProductCode: z.string().trim().max(120).nullable(),
  sourceBreederCode: z.string().trim().max(120).nullable(),
  sourceBatchNo: z.string().trim().max(120).nullable(),
});

export const marketplaceCertificateRefSchema = z.object({
  certificateId: z.string().min(1),
  productId: z.string().min(1).nullable(),
  saleBatchId: z.string().min(1).nullable(),
  verifyId: z.string().trim().max(40).nullable(),
  certNo: z.string().trim().max(120).nullable(),
  issuedAt: z.string().datetime().nullable(),
});

export const marketplaceLineageSummarySchema = z.object({
  seriesName: z.string().trim().max(120).nullable(),
  lineageType: z.string().trim().max(40).nullable(),
  crossLabel: z.string().trim().max(240).nullable(),
  selfCode: z.string().trim().max(120).nullable(),
  sireCode: z.string().trim().max(120).nullable(),
  damCode: z.string().trim().max(120).nullable(),
  mateCode: z.string().trim().max(120).nullable(),
});

export const marketplaceHealthSummarySchema = z.object({
  summary: z.string().trim().max(1000).nullable(),
  latestEventType: z.string().trim().max(40).nullable(),
  latestEventAt: z.string().datetime().nullable(),
  tags: z.array(z.string().trim().min(1).max(80)).max(12),
});

export const marketplacePriceSummarySchema = z.object({
  saleMode: marketplaceSaleModeSchema,
  currency: z.string().trim().length(3),
  fixedPriceCents: z.number().int().nonnegative().nullable(),
  openingBidCents: z.number().int().nonnegative().nullable(),
  reservePriceCents: z.number().int().nonnegative().nullable(),
  bidIncrementCents: z.number().int().positive().nullable(),
  auctionStartsAt: z.string().datetime().nullable(),
  auctionEndsAt: z.string().datetime().nullable(),
});

export const marketplaceSnapshotFieldOriginsSchema = z.object({
  title: marketplaceSnapshotFieldOriginSchema,
  coverImageUrl: marketplaceSnapshotFieldOriginSchema,
  gallery: marketplaceSnapshotFieldOriginSchema,
  lineageSummary: marketplaceSnapshotFieldOriginSchema,
  certificateRefs: marketplaceSnapshotFieldOriginSchema,
  healthSummary: marketplaceSnapshotFieldOriginSchema,
  sellerNotice: marketplaceSnapshotFieldOriginSchema,
  deliveryNotice: marketplaceSnapshotFieldOriginSchema,
  priceSummary: marketplaceSnapshotFieldOriginSchema,
});

export const marketplaceListingSnapshotPayloadSchema = z.object({
  source: marketplaceListingSourceSchema,
  title: z.string().trim().min(1).max(120),
  subtitle: z.string().trim().max(180).nullable(),
  coverImageUrl: nullableMarketplaceAssetUrlSchema,
  gallery: z.array(marketplaceAssetUrlSchema).max(12),
  lineageSummary: marketplaceLineageSummarySchema,
  certificateRefs: z.array(marketplaceCertificateRefSchema).max(12),
  healthSummary: marketplaceHealthSummarySchema,
  sellerNotice: z.string().trim().max(1000).nullable(),
  deliveryNotice: z.string().trim().max(1000).nullable(),
  priceSummary: marketplacePriceSummarySchema,
  fieldOrigins: marketplaceSnapshotFieldOriginsSchema,
  assembledAt: z.string().datetime(),
});

export const marketplaceSellerProfileSchema = z.object({
  tenantId: z.string().min(1),
  tenantSlug: tenantSlugSchema,
  tenantName: tenantNameSchema,
  userId: z.string().min(1),
  userName: z.string().trim().max(120).nullable(),
  userAccount: z.string().trim().max(32).nullable(),
});

export const marketplaceReviewerSchema = z.object({
  userId: z.string().min(1),
  userName: z.string().trim().max(120).nullable(),
  userEmail: z.string().email().nullable(),
});

export const marketplaceBidderSchema = z.object({
  userId: z.string().min(1),
  userName: z.string().trim().max(120).nullable(),
  userAccount: z.string().trim().max(32).nullable(),
});

export const marketplaceListingSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  sellerUserId: z.string().min(1),
  sourceProductId: z.string().min(1).nullable(),
  sourceBreederId: z.string().min(1).nullable(),
  sourceBatchId: z.string().min(1).nullable(),
  listingKind: marketplaceListingKindSchema,
  saleMode: marketplaceSaleModeSchema,
  reviewStatus: marketplaceReviewStatusSchema,
  lifecycleStatus: marketplaceListingLifecycleStatusSchema,
  transactionStatus: marketplaceTransactionStatusSchema,
  auctionStatus: marketplaceAuctionStatusSchema,
  currency: z.string().trim().length(3),
  title: z.string().trim().min(1).max(120),
  coverImageUrl: nullableMarketplaceAssetUrlSchema,
  fixedPriceCents: z.number().int().nonnegative().nullable(),
  openingBidCents: z.number().int().nonnegative().nullable(),
  reservePriceCents: z.number().int().nonnegative().nullable(),
  bidIncrementCents: z.number().int().positive().nullable(),
  currentBidAmountCents: z.number().int().nonnegative().nullable(),
  winnerBidId: z.string().min(1).nullable(),
  statusReason: z.string().trim().max(1000).nullable(),
  reviewNote: z.string().trim().max(1000).nullable(),
  submittedAt: z.string().datetime().nullable(),
  reviewedAt: z.string().datetime().nullable(),
  publishedAt: z.string().datetime().nullable(),
  pausedAt: z.string().datetime().nullable(),
  archivedAt: z.string().datetime().nullable(),
  closedAt: z.string().datetime().nullable(),
  auctionStartsAt: z.string().datetime().nullable(),
  auctionEndsAt: z.string().datetime().nullable(),
  snapshotVersion: z.number().int().positive(),
  snapshot: marketplaceListingSnapshotPayloadSchema,
  seller: marketplaceSellerProfileSchema,
  reviewer: marketplaceReviewerSchema.nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const marketplaceListingSnapshotSchema = z.object({
  id: z.string().min(1),
  listingId: z.string().min(1),
  tenantId: z.string().min(1),
  version: z.number().int().positive(),
  snapshot: marketplaceListingSnapshotPayloadSchema,
  createdByUserId: z.string().min(1).nullable(),
  createdAt: z.string().datetime(),
});

export const marketplaceBidSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  listingId: z.string().min(1),
  bidderUserId: z.string().min(1),
  amountCents: z.number().int().nonnegative(),
  status: marketplaceBidStatusSchema,
  isWinning: z.boolean(),
  invalidatedReason: z.string().trim().max(1000).nullable(),
  bidder: marketplaceBidderSchema,
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const marketplaceDealPartySchema = z.object({
  userId: z.string().min(1),
  userName: z.string().trim().max(120).nullable(),
  userAccount: z.string().trim().max(32).nullable(),
});

export const marketplaceDealSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  listingId: z.string().min(1),
  buyerUserId: z.string().min(1).nullable(),
  sellerUserId: z.string().min(1),
  winnerBidId: z.string().min(1).nullable(),
  status: marketplaceDealStatusSchema,
  agreedAmountCents: z.number().int().nonnegative(),
  currency: z.string().trim().length(3),
  defaultReason: z.string().trim().max(1000).nullable(),
  sellerConfirmedAt: z.string().datetime().nullable(),
  buyerConfirmedAt: z.string().datetime().nullable(),
  settledAt: z.string().datetime().nullable(),
  closedAt: z.string().datetime().nullable(),
  seller: marketplaceDealPartySchema,
  buyer: marketplaceDealPartySchema.nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const marketplaceDisputePartySchema = z.object({
  userId: z.string().min(1),
  userName: z.string().trim().max(120).nullable(),
  userAccount: z.string().trim().max(32).nullable(),
});

export const marketplaceDisputeSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  listingId: z.string().min(1),
  dealId: z.string().min(1).nullable(),
  openedByUserId: z.string().min(1),
  handledByUserId: z.string().min(1).nullable(),
  status: marketplaceDisputeStatusSchema,
  reason: z.string().trim().min(1).max(1000),
  resolutionNote: z.string().trim().max(2000).nullable(),
  evidenceRefs: z.array(marketplaceDisputeEvidenceRefSchema).max(8),
  opener: marketplaceDisputePartySchema,
  handler: marketplaceDisputePartySchema.nullable(),
  openedAt: z.string().datetime(),
  resolvedAt: z.string().datetime().nullable(),
  closedAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

const marketplaceSourceWriteSchema = z.object({
  sourceProductId: nullableIdSchema,
  sourceBreederId: nullableIdSchema,
  sourceBatchId: nullableIdSchema,
});

const marketplacePricingWriteSchema = z.object({
  fixedPriceCents: z.number().int().nonnegative().nullable().optional(),
  openingBidCents: z.number().int().nonnegative().nullable().optional(),
  reservePriceCents: z.number().int().nonnegative().nullable().optional(),
  bidIncrementCents: z.number().int().positive().nullable().optional(),
  auctionStartsAt: nullableDateTimeSchema,
  auctionEndsAt: nullableDateTimeSchema,
  currency: z.string().trim().length(3).default('CNY'),
});

const marketplaceSnapshotOverrideWriteSchema = z.object({
  titleOverride: nullableText120Schema,
  subtitleOverride: nullableText240Schema,
  coverImageUrlOverride: optionalNullableMarketplaceAssetUrlSchema,
  galleryOverride: z.array(marketplaceAssetUrlSchema).max(12).optional(),
  sellerNotice: nullableText1000Schema,
  deliveryNotice: nullableText1000Schema,
});

const marketplaceSellerListingWriteSchema = marketplaceSourceWriteSchema
  .merge(marketplacePricingWriteSchema)
  .merge(marketplaceSnapshotOverrideWriteSchema)
  .extend({
    listingKind: marketplaceListingKindSchema,
    saleMode: marketplaceSaleModeSchema,
  });

export const createMarketplaceSellerListingRequestSchema = marketplaceSellerListingWriteSchema
  .superRefine((payload, ctx) => {
    if (!payload.sourceProductId && !payload.sourceBreederId && !payload.sourceBatchId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['sourceProductId'],
        message: 'At least one marketplace source reference is required.',
      });
    }

    if (payload.listingKind === 'TURTLE' && !payload.sourceProductId && !payload.sourceBreederId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['sourceProductId'],
        message: 'TURTLE listing requires sourceProductId or sourceBreederId.',
      });
    }

    if (
      (payload.listingKind === 'EGG_BATCH' || payload.listingKind === 'HATCHLING_BATCH') &&
      !payload.sourceBatchId
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['sourceBatchId'],
        message: 'Batch listing requires sourceBatchId.',
      });
    }

    if (payload.saleMode === 'FIXED_PRICE' && payload.fixedPriceCents == null) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['fixedPriceCents'],
        message: 'FIXED_PRICE listing requires fixedPriceCents.',
      });
    }

    if (payload.saleMode === 'AUCTION') {
      if (payload.openingBidCents == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['openingBidCents'],
          message: 'AUCTION listing requires openingBidCents.',
        });
      }

      if (payload.bidIncrementCents == null) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['bidIncrementCents'],
          message: 'AUCTION listing requires bidIncrementCents.',
        });
      }

      if (payload.auctionStartsAt && payload.auctionEndsAt) {
        const startsAt = new Date(payload.auctionStartsAt);
        const endsAt = new Date(payload.auctionEndsAt);

        if (startsAt.getTime() >= endsAt.getTime()) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['auctionEndsAt'],
            message: 'auctionEndsAt must be later than auctionStartsAt.',
          });
        }
      }
    }
  });

export const updateMarketplaceSellerListingRequestSchema =
  marketplaceSellerListingWriteSchema.partial().refine((payload) => Object.keys(payload).length > 0, {
    message: 'At least one field must be provided for update.',
  });

export const marketplaceSellerListListingsQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  listingKind: marketplaceListingKindSchema.optional(),
  saleMode: marketplaceSaleModeSchema.optional(),
  reviewStatus: marketplaceReviewStatusSchema.optional(),
  lifecycleStatus: marketplaceListingLifecycleStatusSchema.optional(),
  transactionStatus: marketplaceTransactionStatusSchema.optional(),
});

export const marketplaceAdminListListingsQuerySchema =
  marketplaceSellerListListingsQuerySchema.extend({
    tenantId: z.string().trim().min(1).optional(),
  });

export const marketplaceBuyerListListingsQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  listingKind: marketplaceListingKindSchema.optional(),
  saleMode: marketplaceSaleModeSchema.optional(),
});

export const marketplaceBuyerTrustSignalSchema = z.object({
  key: marketplaceBuyerTrustSignalKeySchema,
  label: z.string().trim().min(1).max(40),
  detail: z.string().trim().max(160).nullable(),
  tone: marketplaceBuyerToneSchema,
});

export const marketplaceBuyerStatusBadgeSchema = z.object({
  label: z.string().trim().min(1).max(40),
  detail: z.string().trim().max(160).nullable(),
  tone: marketplaceBuyerToneSchema,
});

export const marketplaceBuyerRecentBidSnippetSchema = z.object({
  bidId: z.string().min(1),
  bidderLabel: z.string().trim().min(1).max(80),
  amountCents: z.number().int().nonnegative(),
  amountLabel: z.string().trim().min(1).max(40),
  createdAt: z.string().datetime(),
});

export const marketplaceBuyerAuctionRuleSummarySchema = z.object({
  openingBidLabel: z.string().trim().max(40).nullable(),
  reservePriceLabel: z.string().trim().max(40).nullable(),
  bidIncrementLabel: z.string().trim().max(40).nullable(),
  scheduleLabel: z.string().trim().max(120).nullable(),
});

export const marketplaceBuyerListingCardSchema = z.object({
  id: z.string().min(1),
  listingId: z.string().min(1),
  tenantSlug: tenantSlugSchema,
  tenantName: tenantNameSchema,
  saleMode: marketplaceSaleModeSchema,
  listingKind: marketplaceListingKindSchema,
  title: z.string().trim().min(1).max(120),
  coverImageUrl: nullableMarketplaceAssetUrlSchema,
  sellerLabel: z.string().trim().min(1).max(120),
  priceLabel: z.string().trim().min(1).max(80),
  currentBidAmountCents: z.number().int().nonnegative().nullable(),
  fixedPriceCents: z.number().int().nonnegative().nullable(),
  openingBidCents: z.number().int().nonnegative().nullable(),
  auctionEndsAt: z.string().datetime().nullable(),
  bidCount: z.number().int().nonnegative(),
  publishedAt: z.string().datetime().nullable(),
  trustSignals: z.array(marketplaceBuyerTrustSignalSchema).max(6),
  statusBadge: marketplaceBuyerStatusBadgeSchema,
  permalinkPath: z.string().trim().min(1).max(240),
});

export const marketplaceBuyerListingDetailSchema = marketplaceBuyerListingCardSchema.extend({
  subtitle: z.string().trim().max(180).nullable(),
  gallery: z.array(marketplaceAssetUrlSchema).max(12),
  sellerNotice: z.string().trim().max(1000).nullable(),
  deliveryNotice: z.string().trim().max(1000).nullable(),
  certificateRefs: z.array(marketplaceCertificateRefSchema).max(12),
  lineageSummary: marketplaceLineageSummarySchema,
  healthSummary: marketplaceHealthSummarySchema,
  auctionRuleSummary: marketplaceBuyerAuctionRuleSummarySchema.nullable(),
  recentBidSnippets: z.array(marketplaceBuyerRecentBidSnippetSchema).max(12),
});

export const marketplacePlaceBidRequestSchema = z.object({
  amountCents: z.number().int().positive(),
});

export const marketplaceOpenDisputeRequestSchema = z.object({
  reason: z.string().trim().min(1).max(1000),
  evidenceRefs: z.array(marketplaceDisputeEvidenceRefSchema).max(8).default([]),
});

export const marketplaceResolveDisputeRequestSchema = z.object({
  status: z.enum(['UNDER_REVIEW', 'RESOLVED', 'REJECTED', 'CLOSED']),
  resolutionNote: z.string().trim().min(1).max(2000),
  closeDealAsDefaulted: z.boolean().default(false),
});

export const marketplaceListingStatusReasonRequestSchema = z.object({
  reason: z.string().trim().min(1).max(1000),
});

export const marketplaceBuyerActionStateSchema = z.object({
  actorBid: marketplaceBidSchema.nullable(),
  highestBid: marketplaceBidSchema.nullable(),
  minimumNextBidCents: z.number().int().nonnegative().nullable(),
  minimumNextBidLabel: z.string().trim().max(40).nullable(),
  endedReason: z.string().trim().max(160).nullable(),
  placeBidDisabledReason: z.string().trim().max(160).nullable(),
  canPlaceBid: z.boolean(),
  canSellerConfirmDeal: z.boolean(),
  canBuyerConfirmDeal: z.boolean(),
  canSellerMarkSettled: z.boolean(),
  canSellerMarkDefaulted: z.boolean(),
  canOpenDispute: z.boolean(),
  activeDisputeId: z.string().min(1).nullable(),
  bidCount: z.number().int().nonnegative(),
  isHighestBidder: z.boolean(),
  isSeller: z.boolean(),
  isWinner: z.boolean(),
});

export const marketplaceListingMutationResponseSchema = z.object({
  listing: marketplaceListingSchema,
});

export const marketplaceListingDetailResponseSchema = z.object({
  listing: marketplaceListingSchema,
  bids: z.array(marketplaceBidSchema).max(100),
  deal: marketplaceDealSchema.nullable(),
  disputes: z.array(marketplaceDisputeSchema).max(50),
});

export const marketplaceListingsPageSchema = z.object({
  listings: z.array(marketplaceListingSchema).max(200),
  total: z.number().int().nonnegative(),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  totalPages: z.number().int().min(1),
});

export const marketplaceBuyerListingDetailResponseSchema = z.object({
  listing: marketplaceBuyerListingDetailSchema,
});

export const marketplaceBuyerActionDetailResponseSchema = z.object({
  listing: marketplaceListingSchema,
  actionState: marketplaceBuyerActionStateSchema,
  bids: z.array(marketplaceBidSchema).max(100),
  deal: marketplaceDealSchema.nullable(),
  disputes: z.array(marketplaceDisputeSchema).max(50),
});

export const marketplaceBuyerListingsPageSchema = z.object({
  listings: z.array(marketplaceBuyerListingCardSchema).max(200),
  total: z.number().int().nonnegative(),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  totalPages: z.number().int().min(1),
});

export const listMarketplaceSellerListingsResponseSchema = marketplaceListingsPageSchema;
export const listMarketplaceAdminListingsResponseSchema = marketplaceListingsPageSchema;
export const listMarketplaceBuyerListingsResponseSchema = marketplaceBuyerListingsPageSchema;

export type MarketplaceListingKind = z.infer<typeof marketplaceListingKindSchema>;
export type MarketplaceSaleMode = z.infer<typeof marketplaceSaleModeSchema>;
export type MarketplaceReviewStatus = z.infer<typeof marketplaceReviewStatusSchema>;
export type MarketplaceListingLifecycleStatus = z.infer<
  typeof marketplaceListingLifecycleStatusSchema
>;
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
export type MarketplaceListingSnapshotPayload = z.infer<
  typeof marketplaceListingSnapshotPayloadSchema
>;
export type MarketplaceSellerProfile = z.infer<typeof marketplaceSellerProfileSchema>;
export type MarketplaceReviewer = z.infer<typeof marketplaceReviewerSchema>;
export type MarketplaceListing = z.infer<typeof marketplaceListingSchema>;
export type MarketplaceListingSnapshot = z.infer<typeof marketplaceListingSnapshotSchema>;
export type MarketplaceBid = z.infer<typeof marketplaceBidSchema>;
export type MarketplaceDeal = z.infer<typeof marketplaceDealSchema>;
export type MarketplaceDispute = z.infer<typeof marketplaceDisputeSchema>;
export type CreateMarketplaceSellerListingRequest = z.infer<
  typeof createMarketplaceSellerListingRequestSchema
>;
export type UpdateMarketplaceSellerListingRequest = z.infer<
  typeof updateMarketplaceSellerListingRequestSchema
>;
export type MarketplaceSellerListListingsQuery = z.infer<
  typeof marketplaceSellerListListingsQuerySchema
>;
export type MarketplaceAdminListListingsQuery = z.infer<
  typeof marketplaceAdminListListingsQuerySchema
>;
export type MarketplaceBuyerListListingsQuery = z.infer<
  typeof marketplaceBuyerListListingsQuerySchema
>;
export type MarketplaceBuyerTrustSignal = z.infer<typeof marketplaceBuyerTrustSignalSchema>;
export type MarketplaceBuyerStatusBadge = z.infer<typeof marketplaceBuyerStatusBadgeSchema>;
export type MarketplaceBuyerRecentBidSnippet = z.infer<
  typeof marketplaceBuyerRecentBidSnippetSchema
>;
export type MarketplaceBuyerAuctionRuleSummary = z.infer<
  typeof marketplaceBuyerAuctionRuleSummarySchema
>;
export type MarketplaceBuyerListingCard = z.infer<typeof marketplaceBuyerListingCardSchema>;
export type MarketplaceBuyerListingDetail = z.infer<typeof marketplaceBuyerListingDetailSchema>;
export type MarketplacePlaceBidRequest = z.infer<typeof marketplacePlaceBidRequestSchema>;
export type MarketplaceOpenDisputeRequest = z.infer<typeof marketplaceOpenDisputeRequestSchema>;
export type MarketplaceResolveDisputeRequest = z.infer<
  typeof marketplaceResolveDisputeRequestSchema
>;
export type MarketplaceListingStatusReasonRequest = z.infer<
  typeof marketplaceListingStatusReasonRequestSchema
>;
export type MarketplaceBuyerActionState = z.infer<typeof marketplaceBuyerActionStateSchema>;
export type MarketplaceListingMutationResponse = z.infer<
  typeof marketplaceListingMutationResponseSchema
>;
export type MarketplaceListingDetailResponse = z.infer<
  typeof marketplaceListingDetailResponseSchema
>;
export type MarketplaceListingsPage = z.infer<typeof marketplaceListingsPageSchema>;
export type MarketplaceBuyerListingDetailResponse = z.infer<
  typeof marketplaceBuyerListingDetailResponseSchema
>;
export type MarketplaceBuyerActionDetailResponse = z.infer<
  typeof marketplaceBuyerActionDetailResponseSchema
>;
export type MarketplaceBuyerListingsPage = z.infer<typeof marketplaceBuyerListingsPageSchema>;
