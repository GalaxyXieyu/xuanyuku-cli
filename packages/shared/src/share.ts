import { z } from 'zod';

import {
  footprintAchievementKeySchema,
  footprintAchievementShareBannerSchema,
} from './footprint-achievements';
import {
  productFamilyTreeSchema,
  productImageSchema,
  productNeedMatingStatusSchema,
  productSchema,
} from './product';

const COLOR_HEX_PATTERN = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;
const MAX_HERO_IMAGES = 10;

const nullableTextSchema = z.string().trim().max(240).nullable();
const nullableShortTextSchema = z.string().trim().max(120).nullable();
const nullableWechatIdSchema = z.string().trim().max(64).nullable();
export const DEFAULT_TENANT_SHARE_AVATAR_PRESET = 'forest' as const;
export const DEFAULT_TENANT_SHARE_BRAND_PRIMARY = '#86EFAC';
export const DEFAULT_TENANT_SHARE_BRAND_SECONDARY = '#166534';
export const tenantShareAvatarPresetSchema = z.enum([
  'amber',
  'ocean',
  'forest',
  'plum',
  'graphite',
  'sunrise',
]);
const nullableAvatarPresetSchema = tenantShareAvatarPresetSchema.nullable();
const colorTokenSchema = z.string().trim().regex(COLOR_HEX_PATTERN);
const shareAssetUrlSchema = z
  .string()
  .trim()
  .min(1)
  .max(1000)
  .refine(
    (value) => value.startsWith('/') || value.startsWith('http://') || value.startsWith('https://'),
    'Share asset URL must be an absolute URL or an absolute path.',
  );

export const tenantSharePresentationSchema = z.object({
  feedTitle: nullableShortTextSchema,
  feedSubtitle: nullableTextSchema,
  avatarPreset: nullableAvatarPresetSchema,
  brandPrimary: colorTokenSchema.nullable(),
  brandSecondary: colorTokenSchema.nullable(),
  heroImages: z.array(shareAssetUrlSchema).max(MAX_HERO_IMAGES),
  shareCardImageUrl: shareAssetUrlSchema.nullable(),
  showWechatBlock: z.boolean(),
  wechatQrImageUrl: shareAssetUrlSchema.nullable(),
  wechatId: nullableWechatIdSchema,
});

export const sharePresentationOverrideSchema = z.object({
  feedTitle: nullableShortTextSchema.optional(),
  feedSubtitle: nullableTextSchema.optional(),
  avatarPreset: nullableAvatarPresetSchema.optional(),
  brandPrimary: colorTokenSchema.nullable().optional(),
  brandSecondary: colorTokenSchema.nullable().optional(),
  heroImages: z.array(shareAssetUrlSchema).max(MAX_HERO_IMAGES).optional(),
  shareCardImageUrl: shareAssetUrlSchema.nullable().optional(),
  showWechatBlock: z.boolean().optional(),
  wechatQrImageUrl: shareAssetUrlSchema.nullable().optional(),
  wechatId: nullableWechatIdSchema.optional(),
});

export const publicSharePresentationSchema = z.object({
  feedTitle: z.string().trim().min(1).max(120),
  feedSubtitle: z.string().trim().min(1).max(240),
  identity: z.object({
    avatarPreset: nullableAvatarPresetSchema,
    avatarUrl: shareAssetUrlSchema.nullable(),
  }),
  theme: z.object({
    brandPrimary: colorTokenSchema,
    brandSecondary: colorTokenSchema,
  }),
  hero: z.object({
    images: z.array(shareAssetUrlSchema).max(MAX_HERO_IMAGES),
  }),
  shareCardImageUrl: shareAssetUrlSchema.nullable(),
  contact: z.object({
    showWechatBlock: z.boolean(),
    wechatQrImageUrl: shareAssetUrlSchema.nullable(),
    wechatId: nullableWechatIdSchema,
  }),
});

export const getTenantSharePresentationResponseSchema = z.object({
  presentation: tenantSharePresentationSchema,
  shareAvatarUrl: shareAssetUrlSchema.nullable(),
});

export const updateTenantSharePresentationRequestSchema = z.object({
  presentation: tenantSharePresentationSchema,
});

export const updateTenantSharePresentationResponseSchema = z.object({
  presentation: tenantSharePresentationSchema,
});

export const uploadTenantSharePresentationImageResponseSchema = z.object({
  asset: z.object({
    key: z.string().min(1),
    url: shareAssetUrlSchema,
    contentType: z.string().min(1).nullable(),
    sizeBytes: z.string().regex(/^\d+$/),
  }),
});

export const shareResourceTypeSchema = z.enum(['tenant_feed']);

export const createShareRequestSchema = z.object({
  resourceType: shareResourceTypeSchema,
  resourceId: z.string().trim().min(1),
  presentationOverride: sharePresentationOverrideSchema.nullable().optional(),
});

export const shareSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  resourceType: shareResourceTypeSchema,
  resourceId: z.string().min(1),
  shareToken: z.string().min(1),
  entryUrl: z.string().url(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const createShareResponseSchema = z.object({
  share: shareSchema,
});

export const publicShareQuerySchema = z.object({
  tenantId: z.string().trim().min(1),
  resourceType: shareResourceTypeSchema,
  resourceId: z.string().trim().min(1),
  productId: z.string().trim().min(1).optional(),
  badge: footprintAchievementKeySchema.optional(),
  exp: z.string().trim().min(1),
  sig: z.string().trim().min(1),

  // Optional: request a fixed, token-safe resized image variant from `/shares/:shareId/public/assets`.
  // Keep the allowlist strict to prevent arbitrary resize abuse.
  maxEdge: z.coerce
    .number()
    .int()
    .refine((value) => value === 320 || value === 480 || value === 960, {
      message: 'maxEdge must be 320, 480 or 960.',
    })
    .optional(),
});

export const publicShareByTokenQuerySchema = z.object({
  productId: z.string().trim().min(1).optional(),
  badge: footprintAchievementKeySchema.optional(),
});

export const publicMiniappUrlLinkByTokenQuerySchema = z.object({
  productId: z.string().trim().min(1).optional(),
  tab: z.enum(['series', 'features']).optional(),
  src: z.string().trim().min(1).max(120).optional(),
  series: z.string().trim().min(1).max(120).optional(),
  event: z.string().trim().min(1).max(120).optional(),
  badge: footprintAchievementKeySchema.optional(),
  from: z.string().trim().min(1).max(120).optional(),
});

export const publicShareQrCodeByTokenQuerySchema = publicMiniappUrlLinkByTokenQuerySchema.extend({
  size: z.coerce
    .number()
    .int()
    .refine((value) => value === 320 || value === 480 || value === 640, {
      message: 'size must be 320, 480 or 640.',
    })
    .optional(),
});

export const publicMiniappUrlLinkResponseSchema = z.object({
  url: z.string().url(),
  mode: z.enum(['miniapp_url_link', 'web_fallback']),
});

export const publicShareTenantSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  name: z.string().min(1),
});

export const publicShareFeedItemSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  alias: z.string().nullable(),
  code: z.string().min(1).nullable(),
  type: z.string().trim().min(1).max(80),
  lineageType: z.enum(['pure', 'hybrid']),
  crossLabel: z.string().nullable(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  seriesId: z.string().nullable(),
  seriesSortOrder: z.number().int().nullable().optional(),
  seriesName: z.string().nullable().optional(),
  seriesDescription: z.string().nullable().optional(),
  sex: z.string().nullable(),
  sireProductId: z.string().nullable().optional(),
  damProductId: z.string().nullable().optional(),
  mateProductId: z.string().nullable().optional(),
  requiresIdentityReview: z.boolean().optional(),
  needMatingStatus: productNeedMatingStatusSchema.nullable().optional(),
  lastEggAt: z.string().datetime().nullable().optional(),
  lastMatingAt: z.string().datetime().nullable().optional(),
  daysSinceEgg: z.number().int().nonnegative().nullable().optional(),
  offspringUnitPrice: z.number().finite().nonnegative().nullable(),
  coverImageUrl: z.string().nullable(),
  publicUrl: z.string().nullable().optional(),
  thumbnailUrl: z.string().nullable().optional(),
  excludeFromBreeding: z.boolean().optional(),
  popularityScore: z.number().int().min(0).max(100),
  isFeatured: z.boolean(),
});

export const publicShareProductSchema = productSchema.extend({
  seriesName: z.string().nullable().optional(),
  seriesDescription: z.string().nullable().optional(),
  images: z.array(productImageSchema),
});

export const publicShareDetailEventTypeSchema = z.string().trim().min(1).max(40);

export const publicShareDetailEventImageSchema = z.object({
  url: z.string().min(1),
});

export const publicShareDetailEventSchema = z.object({
  id: z.string().min(1),
  eventType: publicShareDetailEventTypeSchema,
  eventDate: z.string().datetime().nullable(),
  maleCode: z.string().nullable().optional(),
  eggCount: z.number().int().nullable().optional(),
  fertilizedCount: z.number().int().nullable().optional(),
  note: z.string().nullable().optional(),
  oldMateCode: z.string().nullable().optional(),
  newMateCode: z.string().nullable().optional(),
  images: z.array(publicShareDetailEventImageSchema).optional().default([]),
});

export const publicShareMateLoadStatusSchema = z.enum(['normal', 'need_mating', 'warning']);

export const publicShareMateLoadItemSchema = z.object({
  femaleId: z.string().min(1),
  femaleCode: z.string().min(1),
  femaleMainImageUrl: z.string().nullable().optional(),
  femaleThumbnailUrl: z.string().nullable().optional(),
  lastEggAt: z.string().datetime().nullable(),
  lastMatingWithThisMaleAt: z.string().datetime().nullable(),
  daysSinceEgg: z.number().int().nonnegative().nullable().optional(),
  status: publicShareMateLoadStatusSchema,
  excludeFromBreeding: z.boolean().optional(),
});

export const publicShareDetailRelationRoleSchema = z.enum(['sire', 'dam', 'mate']);
export const publicShareDetailRelationVisibilitySchema = z.enum([
  'linked_visible',
  'linked_hidden',
  'unlinked',
]);

export const publicShareDetailRelationSchema = z.object({
  role: publicShareDetailRelationRoleSchema,
  label: z.string().trim().min(1).max(20),
  displayValue: z.string().trim().min(1).max(120),
  visibilityStatus: publicShareDetailRelationVisibilitySchema,
  productId: z.string().min(1).nullable(),
});

export const publicShareDetailRelationsSchema = z.object({
  sire: publicShareDetailRelationSchema,
  dam: publicShareDetailRelationSchema,
  mate: publicShareDetailRelationSchema,
});

export const publicShareDetailSchema = z.object({
  events: z.array(publicShareDetailEventSchema),
  familyTree: productFamilyTreeSchema.nullable(),
  maleMateLoad: z.array(publicShareMateLoadItemSchema),
  relations: publicShareDetailRelationsSchema,
});

export const publicShareMerchantWatermarkSchema = z.object({
  enabled: z.boolean(),
  text: z.string().trim().max(64).nullable(),
});

export const publicShareTenantFeedStatsSchema = z.object({
  breederCount: z.number().int().nonnegative(),
  maleCount: z.number().int().nonnegative(),
  femaleCount: z.number().int().nonnegative(),
  seriesCount: z.number().int().nonnegative(),
  needMatingCount: z.number().int().nonnegative(),
  eggsThisYear: z.number().int().nonnegative(),
});

const publicShareBaseSchema = z.object({
  shareId: z.string().min(1),
  shareToken: z.string().min(1),
  tenant: publicShareTenantSchema,
  merchantWatermark: publicShareMerchantWatermarkSchema,
  expiresAt: z.string().datetime(),
});

export const publicTenantFeedShareResponseSchema = publicShareBaseSchema.extend({
  resourceType: z.literal('tenant_feed'),
  presentation: publicSharePresentationSchema,
  items: z.array(publicShareFeedItemSchema),
  product: publicShareProductSchema.nullable().optional(),
  detail: publicShareDetailSchema.nullable().optional(),
  stats: publicShareTenantFeedStatsSchema.nullable().optional(),
  badgeBanner: footprintAchievementShareBannerSchema.nullable().optional(),
});

export const publicShareResponseSchema = publicTenantFeedShareResponseSchema;

export const publicWechatJsSdkConfigQuerySchema = publicShareQuerySchema.extend({
  url: z.string().trim().url(),
});

export const publicWechatJsSdkConfigByTokenQuerySchema = z.object({
  url: z.string().trim().url(),
});

export const publicWechatJsSdkConfigResponseSchema = z.object({
  appId: z.string().trim().min(1),
  timestamp: z.number().int().positive(),
  nonceStr: z.string().trim().min(1),
  signature: z.string().trim().min(1),
});

export type ShareResourceType = z.infer<typeof shareResourceTypeSchema>;
export type CreateShareRequest = z.infer<typeof createShareRequestSchema>;
export type Share = z.infer<typeof shareSchema>;
export type TenantSharePresentation = z.infer<typeof tenantSharePresentationSchema>;
export type TenantShareAvatarPreset = z.infer<typeof tenantShareAvatarPresetSchema>;
export type SharePresentationOverride = z.infer<typeof sharePresentationOverrideSchema>;
export type PublicSharePresentation = z.infer<typeof publicSharePresentationSchema>;
export type PublicShareQuery = z.infer<typeof publicShareQuerySchema>;
export type PublicShareByTokenQuery = z.infer<typeof publicShareByTokenQuerySchema>;
export type PublicMiniappUrlLinkByTokenQuery = z.infer<
  typeof publicMiniappUrlLinkByTokenQuerySchema
>;
export type PublicShareQrCodeByTokenQuery = z.infer<typeof publicShareQrCodeByTokenQuerySchema>;
export type PublicMiniappUrlLinkResponse = z.infer<typeof publicMiniappUrlLinkResponseSchema>;
export type PublicShareResponse = z.infer<typeof publicShareResponseSchema>;
export type PublicWechatJsSdkConfigQuery = z.infer<typeof publicWechatJsSdkConfigQuerySchema>;
export type PublicWechatJsSdkConfigByTokenQuery = z.infer<
  typeof publicWechatJsSdkConfigByTokenQuerySchema
>;
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
export type UpdateTenantSharePresentationRequest = z.infer<
  typeof updateTenantSharePresentationRequestSchema
>;
export type UploadTenantSharePresentationImageResponse = z.infer<
  typeof uploadTenantSharePresentationImageResponseSchema
>;
