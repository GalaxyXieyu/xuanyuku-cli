import { z } from 'zod';

import { referralRewardSchema } from './referral';

const nullableText = z.string().trim().max(5000).nullable().optional();
const nullableSeriesId = z.string().trim().max(120).nullable().optional();
const nullableParentId = z.string().trim().max(120).nullable().optional();
const nullableType = z.enum(['breeder', 'offspring']).nullable().optional();
const nullableLineageType = z.enum(['pure', 'hybrid']).nullable().optional();
const nullableCrossLabel = z.string().trim().max(240).nullable().optional();
const productType = z.enum(['breeder', 'offspring']);
const productLineageType = z.enum(['pure', 'hybrid']);
const nullableSexInput = z.enum(['male', 'female', 'unknown']).nullable().optional();
const nullableSexResponse = z.string().trim().max(20).nullable().optional();
const needMatingStatusSchema = z.enum(['normal', 'need_mating', 'warning']);
const nullableOffspringUnitPrice = z
  .preprocess((value) => {
    if (value === '' || value === null || value === undefined) {
      return null;
    }

    if (typeof value === 'string') {
      return Number(value);
    }

    return value;
  }, z.number().finite().nonnegative().nullable())
  .optional();

export const productCodeSchema = z.string().trim().min(1).max(120);
export const productDisplayCodeSchema = z.string().trim().min(1).max(120);
export const productIdParamSchema = z.string().trim().min(1).max(120);
export const productNameSchema = z.string().trim().min(1).max(120).nullable().optional();
export const productDescriptionSchema = nullableText;

export const productSchema = z.object({
  id: productIdParamSchema,
  tenantId: z.string().min(1),
  identityRank: z.number().int().positive().nullable().optional(),
  alias: z.string().nullable(),
  code: productCodeSchema.nullable(),
  type: productType,
  lineageType: productLineageType,
  crossLabel: z.string().nullable(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  seriesId: nullableSeriesId,
  sex: nullableSexResponse,
  sireProductId: z.string().nullable(),
  damProductId: z.string().nullable(),
  mateProductId: z.string().nullable(),
  requiresIdentityReview: z.boolean().optional(),
  needMatingStatus: needMatingStatusSchema.nullable().optional(),
  lastEggAt: z.string().datetime().nullable().optional(),
  lastMatingAt: z.string().datetime().nullable().optional(),
  daysSinceEgg: z.number().int().nonnegative().nullable().optional(),
  offspringUnitPrice: nullableOffspringUnitPrice,
  excludeFromBreeding: z.boolean().optional(),
  hasSample: z.boolean().optional(),
  inStock: z.boolean().optional(),
  popularityScore: z.number().int().min(0).max(100).optional(),
  isFeatured: z.boolean().optional(),
  coverImageUrl: z.string().nullable().optional(),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional()
});

export const productNeedMatingStatusSchema = needMatingStatusSchema;

const createProductRequestBaseSchema = z.object({
  archiveCode: z.unknown().optional(),
  displayCode: z.unknown().optional(),
  birthCode: z.unknown().optional(),
  code: z.unknown().optional(),
  type: nullableType,
  alias: productNameSchema,
  name: productNameSchema,
  description: productDescriptionSchema,
  seriesId: nullableSeriesId,
  sex: nullableSexInput,
  sireProductId: nullableParentId,
  damProductId: nullableParentId,
  mateProductId: nullableParentId,
  lineageType: nullableLineageType,
  crossLabel: nullableCrossLabel,
  offspringUnitPrice: nullableOffspringUnitPrice,
  sireCode: z.unknown().optional(),
  damCode: z.unknown().optional(),
  mateCode: z.unknown().optional(),
  excludeFromBreeding: z.boolean().optional(),
  hasSample: z.boolean().optional(),
  inStock: z.boolean().optional(),
  popularityScore: z.number().int().min(0).max(100).optional(),
  isFeatured: z.boolean().optional()
});

function addRemovedProductIdentityFieldIssues(
  payload: {
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
    code?: unknown;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
  },
  ctx: z.RefinementCtx
) {
  const fieldMessages: Array<[keyof typeof payload, string]> = [
    ['archiveCode', 'archiveCode has been removed. Product identity is derived from ids and computed code.'],
    ['displayCode', 'displayCode has been removed. Product code is read-only and computed by the system.'],
    ['birthCode', 'birthCode has been removed. Offspring no longer keep a persistent business code.'],
    ['code', 'code is read-only and cannot be provided.'],
    ['sireCode', 'sireCode has been removed. Use sireProductId instead.'],
    ['damCode', 'damCode has been removed. Use damProductId instead.'],
    ['mateCode', 'mateCode has been removed. Use mateProductId instead.'],
  ];

  for (const [field, message] of fieldMessages) {
    if (payload[field] !== undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: [field],
        message,
      });
    }
  }
}

function stripRemovedProductIdentityFields<
  T extends {
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
    code?: unknown;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
  }
>(payload: T) {
  const rest = { ...payload };
  delete rest.archiveCode;
  delete rest.displayCode;
  delete rest.birthCode;
  delete rest.code;
  delete rest.sireCode;
  delete rest.damCode;
  delete rest.mateCode;
  return rest;
}

export const createProductRequestSchema = createProductRequestBaseSchema.superRefine((payload, ctx) => {
  addRemovedProductIdentityFieldIssues(payload, ctx);
  if (payload.offspringUnitPrice !== null && payload.offspringUnitPrice !== undefined && payload.sex !== 'female') {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ['offspringUnitPrice'],
      message: 'offspringUnitPrice is only allowed when sex is female.'
    });
  }
}).transform(stripRemovedProductIdentityFields);

export const previewProductCodeRequestSchema = z.object({
  type: nullableType,
  seriesId: nullableSeriesId,
  seriesName: z.string().trim().max(120).nullable().optional(),
  sex: nullableSexInput,
  lineageType: nullableLineageType,
  crossLabel: nullableCrossLabel
});

export const previewProductCodeResponseSchema = z.object({
  ready: z.boolean(),
  type: productType,
  sex: z.enum(['male', 'female', 'unknown']),
  familyBase: z.string().trim().min(1).max(240).nullable(),
  code: productCodeSchema.nullable()
});

export const updateProductRequestSchema = createProductRequestBaseSchema
  .partial()
  .refine((payload) => Object.keys(payload).length > 0, {
    message: 'At least one field must be provided for update.'
  })
  .superRefine((payload, ctx) => {
    addRemovedProductIdentityFieldIssues(payload, ctx);
    if (
      payload.offspringUnitPrice !== null &&
      payload.offspringUnitPrice !== undefined &&
      payload.sex !== undefined &&
      payload.sex !== 'female'
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['offspringUnitPrice'],
        message: 'offspringUnitPrice is only allowed when sex is female.'
      });
    }
  })
  .transform(stripRemovedProductIdentityFields);

const eventDateInputSchema = z.string().trim().min(1).max(40);
export const PROFILE_CREATED_EVENT_TYPE = 'profile_created' as const;

export const createMatingRecordRequestSchema = z.object({
  femaleProductId: productIdParamSchema,
  maleProductId: productIdParamSchema,
  eventDate: eventDateInputSchema,
  note: z.string().trim().max(5000).nullable().optional()
});

export const createEggRecordRequestSchema = z.object({
  femaleProductId: productIdParamSchema,
  eventDate: eventDateInputSchema,
  eggCount: z.number().int().min(0).max(999).nullable().optional(),
  fertilizedCount: z.number().int().min(0).max(999).nullable().optional(),
  note: z.string().trim().max(5000).nullable().optional()
});

export const createProductEventRequestSchema = z.object({
  eventType: z.enum(['daily', 'health', 'mating', 'egg', 'change_mate']),
  eventDate: eventDateInputSchema,
  maleProductId: productIdParamSchema.nullable().optional(),
  oldMateProductId: productIdParamSchema.nullable().optional(),
  newMateProductId: productIdParamSchema.nullable().optional(),
  maleCode: z.string().trim().max(120).nullable().optional(),
  eggCount: z.number().int().min(0).max(999).nullable().optional(),
  fertilizedCount: z.number().int().min(0).max(999).nullable().optional(),
  note: z.string().trim().max(5000).nullable().optional(),
  oldMateCode: z.string().trim().max(120).nullable().optional(),
  newMateCode: z.string().trim().max(120).nullable().optional()
});

export const createProductResponseSchema = z.object({
  product: productSchema,
  referralReward: referralRewardSchema.nullable().optional(),
});

export const getProductResponseSchema = z.object({
  product: productSchema
});

export const listProductsQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
  search: z.string().trim().min(1).max(120).optional(),
  type: z.string().trim().min(1).max(80).optional(),
  sex: z.string().trim().min(1).max(20).optional(),
  seriesId: z.string().trim().min(1).max(120).optional(),
  status: needMatingStatusSchema.optional(),
  sortBy: z.enum(['updatedAt', 'createdAt', 'id', 'identity']).optional(),
  sortDir: z.enum(['asc', 'desc']).optional()
});

export const listProductsResponseSchema = z.object({
  products: z.array(productSchema),
  total: z.number().int().nonnegative(),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  totalPages: z.number().int().min(1),
  stats: z.object({
    maleCount: z.number().int().nonnegative(),
    femaleCount: z.number().int().nonnegative(),
    unknownCount: z.number().int().nonnegative(),
    yearEggCount: z.number().int().nonnegative(),
    needMatingCount: z.number().int().nonnegative(),
    warningCount: z.number().int().nonnegative()
  })
});

export const productImageSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  productId: z.string().min(1),
  key: z.string().min(1),
  url: z.string().min(1),
  contentType: z.string().min(1).nullable(),
  sizeBytes: z.string().regex(/^\d+$/),
  sortOrder: z.number().int().nonnegative(),
  isMain: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const productEventImageSchema = z.object({
  key: z.string().min(1),
  url: z.string().min(1),
  contentType: z.string().min(1).nullable(),
  sizeBytes: z.string().regex(/^\d+$/),
});

export const productGallerySourceTypeSchema = z.enum(['profile', 'event']);

export const productGalleryItemSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  productId: z.string().min(1),
  sourceType: productGallerySourceTypeSchema,
  sourceEventId: z.string().min(1),
  sourceImageId: z.string().min(1).nullable(),
  eventType: z.string().min(1),
  eventDate: z.string().datetime(),
  imageKey: z.string().min(1),
  imageUrl: z.string().min(1),
  contentType: z.string().min(1).nullable(),
  sizeBytes: z.string().regex(/^\d+$/),
  sortOrder: z.number().int().nonnegative(),
});

export const listProductImagesResponseSchema = z.object({
  images: z.array(productImageSchema)
});

export const listProductGalleryResponseSchema = z.object({
  items: z.array(productGalleryItemSchema),
});

export const uploadProductImageResponseSchema = z.object({
  image: productImageSchema,
  referralReward: referralRewardSchema.nullable().optional()
});

export const setMainProductImageResponseSchema = z.object({
  image: productImageSchema
});

export const deleteProductImageResponseSchema = z.object({
  deleted: z.boolean(),
  imageId: z.string().min(1)
});

export const deleteProductResponseSchema = z.object({
  deleted: z.boolean(),
  productId: z.string().min(1)
});

export const reorderProductImagesRequestSchema = z.object({
  imageIds: z.array(z.string().trim().min(1)).min(1)
});

export const reorderProductImagesResponseSchema = z.object({
  images: z.array(productImageSchema)
});

export const productEventSchema = z.object({
  id: z.string().trim().min(1).max(120),
  tenantId: z.string().min(1),
  productId: productIdParamSchema,
  eventType: z.string().min(1),
  eventDate: z.string().datetime(),
  maleProductId: productIdParamSchema.nullable().optional(),
  oldMateProductId: productIdParamSchema.nullable().optional(),
  newMateProductId: productIdParamSchema.nullable().optional(),

  // Computed from tagged lines in note (e.g. "#maleCode=GH-M01").
  maleCode: z.string().trim().max(120).nullable().optional(),
  eggCount: z.number().int().min(0).max(999).nullable().optional(),
  fertilizedCount: z.number().int().min(0).max(999).nullable().optional(),
  oldMateCode: z.string().trim().max(120).nullable().optional(),
  newMateCode: z.string().trim().max(120).nullable().optional(),

  note: z.string().nullable(),
  images: z.array(productEventImageSchema).default([]),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const createProductEventResponseSchema = z.object({
  event: productEventSchema
});

export const updateProductEventRequestSchema = z
  .object({
    eventDate: eventDateInputSchema.optional(),
    maleProductId: productIdParamSchema.nullable().optional(),
    oldMateProductId: productIdParamSchema.nullable().optional(),
    newMateProductId: productIdParamSchema.nullable().optional(),
    maleCode: z.string().trim().max(120).nullable().optional(),
    eggCount: z.number().int().min(0).max(999).nullable().optional(),
    fertilizedCount: z.number().int().min(0).max(999).nullable().optional(),
    note: z.string().trim().max(5000).nullable().optional(),
    oldMateCode: z.string().trim().max(120).nullable().optional(),
    newMateCode: z.string().trim().max(120).nullable().optional()
  })
  .refine((value) => Object.keys(value).length > 0, {
    message: '至少需要提供一个可更新字段。'
  });

export const updateProductEventResponseSchema = z.object({
  event: productEventSchema
});

export const deleteProductEventResponseSchema = z.object({
  deleted: z.boolean(),
  eventId: z.string().trim().min(1)
});

export const uploadProductEventImageResponseSchema = z.object({
  event: productEventSchema
});

export const listProductEventsResponseSchema = z.object({
  events: z.array(productEventSchema)
});

export const productMaleMatingHistoryItemSchema = z.object({
  id: z.string().trim().min(1).max(120),
  tenantId: z.string().min(1),
  maleProductId: productIdParamSchema,
  maleCode: z.string().trim().max(120).nullable(),
  femaleProductId: productIdParamSchema,
  femaleCode: productCodeSchema.nullable(),
  femaleName: z.string().nullable(),
  femaleNeedMatingStatus: needMatingStatusSchema.nullable().optional(),
  femaleDaysSinceEgg: z.number().int().nonnegative().nullable().optional(),
  eventDate: z.string().datetime(),
  note: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const listProductMaleMatingHistoryResponseSchema = z.object({
  items: z.array(productMaleMatingHistoryItemSchema)
});

export const productFamilyTreeNodeSchema = z.object({
  id: productIdParamSchema,
  code: productCodeSchema.nullable(),
  name: z.string().nullable(),
  sex: z.string().nullable(),
  // Prefer these on public/share pages so images don't go through auth-only content routes.
  publicUrl: z.string().nullable().optional(),
  thumbnailUrl: z.string().nullable().optional(),
  coverImageUrl: z.string().nullable().optional()
});

export const productFamilyTreeLinkSchema = z.object({
  code: productCodeSchema.nullable(),
  product: productFamilyTreeNodeSchema.nullable()
});

export const productFamilyTreeMateSchema = productFamilyTreeNodeSchema.extend({
  needMatingStatus: needMatingStatusSchema.nullable().optional(),
  lastEggAt: z.string().datetime().nullable().optional(),
  lastMatingAt: z.string().datetime().nullable().optional(),
  daysSinceEgg: z.number().int().nonnegative().nullable().optional()
});

export const productFamilyTreeSchema = z.object({
  self: productFamilyTreeNodeSchema,
  sire: productFamilyTreeNodeSchema.nullable(),
  dam: productFamilyTreeNodeSchema.nullable(),
  mate: productFamilyTreeNodeSchema.nullable(),
  mates: z.array(productFamilyTreeMateSchema),
  children: z.array(productFamilyTreeNodeSchema),
  // Grandparents
  paternalGrandfather: productFamilyTreeNodeSchema.nullable().optional(), // 祖父 (父本的父本)
  paternalGrandmother: productFamilyTreeNodeSchema.nullable().optional(), // 祖母 (父本的母本)
  maternalGrandfather: productFamilyTreeNodeSchema.nullable().optional(), // 外祖父 (母本的父本)
  maternalGrandmother: productFamilyTreeNodeSchema.nullable().optional(), // 外祖母 (母本的母本)
  links: z.object({
    sire: productFamilyTreeLinkSchema.nullable(),
    dam: productFamilyTreeLinkSchema.nullable(),
    mate: productFamilyTreeLinkSchema.nullable()
  }),
  limitations: z.string().min(1)
});

export const getProductFamilyTreeResponseSchema = z.object({
  tree: productFamilyTreeSchema
});

export const productPublicClicksQuerySchema = z.object({
  days: z.coerce.number().int().min(1).max(365).default(30)
});

export const productPublicClicksSummarySchema = z.object({
  productId: productIdParamSchema,
  totalClicks: z.number().int().nonnegative(),
  uniqueVisitors: z.number().int().nonnegative(),
  days: z.number().int().min(1).max(365),
  lastClickedAt: z.string().datetime().nullable()
});

export const getProductPublicClicksResponseSchema = z.object({
  stats: productPublicClicksSummarySchema
});

export const listProductsPublicClicksQuerySchema = z.object({
  days: z.coerce.number().int().min(1).max(365).default(30),
  limit: z.coerce.number().int().min(1).max(200).default(50)
});

export const productPublicClicksItemSchema = z.object({
  productId: productIdParamSchema,
  code: productCodeSchema.nullable(),
  name: z.string().nullable(),
  totalClicks: z.number().int().nonnegative(),
  uniqueVisitors: z.number().int().nonnegative(),
  lastClickedAt: z.string().datetime().nullable()
});

export const listProductsPublicClicksResponseSchema = z.object({
  days: z.number().int().min(1).max(365),
  items: z.array(productPublicClicksItemSchema)
});

function normalizeGalleryEventType(eventType: string) {
  return eventType.trim().toLowerCase();
}

function toSortableTimestamp(value: string | null | undefined) {
  const timestamp = value ? Date.parse(value) : Number.NaN;
  return Number.isFinite(timestamp) ? timestamp : 0;
}

type GalleryEventGroup = {
  eventId: string;
  tenantId: string;
  productId: string;
  sourceType: 'profile' | 'event';
  eventType: string;
  eventDate: string;
  createdAt: string;
  images: Array<
    | (ProductImage & { sourceImageId: string | null })
    | (ProductEventImage & { key: string; sourceImageId: string | null })
  >;
};

function compareGalleryGroups(left: GalleryEventGroup, right: GalleryEventGroup) {
  const eventDateDiff = toSortableTimestamp(left.eventDate) - toSortableTimestamp(right.eventDate);
  if (eventDateDiff !== 0) {
    return eventDateDiff;
  }

  const leftIsProfile = normalizeGalleryEventType(left.eventType) === PROFILE_CREATED_EVENT_TYPE;
  const rightIsProfile = normalizeGalleryEventType(right.eventType) === PROFILE_CREATED_EVENT_TYPE;
  if (leftIsProfile !== rightIsProfile) {
    return leftIsProfile ? -1 : 1;
  }

  const createdAtDiff = toSortableTimestamp(left.createdAt) - toSortableTimestamp(right.createdAt);
  if (createdAtDiff !== 0) {
    return createdAtDiff;
  }

  return left.eventId.localeCompare(right.eventId);
}

export function buildProductGallery(input: {
  events: ProductEvent[];
  images: ProductImage[];
}): ProductGalleryItem[] {
  const profileImages = [...input.images]
    .sort((left, right) => {
      const sortOrderDiff = left.sortOrder - right.sortOrder;
      if (sortOrderDiff !== 0) {
        return sortOrderDiff;
      }

      const createdAtDiff = toSortableTimestamp(left.createdAt) - toSortableTimestamp(right.createdAt);
      if (createdAtDiff !== 0) {
        return createdAtDiff;
      }

      return left.id.localeCompare(right.id);
    })
    .map((image) => ({
      ...image,
      sourceImageId: image.id,
    }));

  const profileEvent =
    input.events.find((event) => normalizeGalleryEventType(event.eventType) === PROFILE_CREATED_EVENT_TYPE) ??
    null;

  const profileGroup =
    profileImages.length > 0
      ? {
          eventId: profileEvent?.id ?? `profile:${profileImages[0]!.productId}`,
          tenantId: profileEvent?.tenantId ?? profileImages[0]!.tenantId,
          productId: profileEvent?.productId ?? profileImages[0]!.productId,
          sourceType: 'profile' as const,
          eventType: PROFILE_CREATED_EVENT_TYPE,
          eventDate: profileEvent?.eventDate ?? profileImages[0]!.createdAt,
          createdAt: profileEvent?.createdAt ?? profileImages[0]!.createdAt,
          images: profileImages,
        }
      : null;

  const eventGroups = input.events
    .filter((event) => normalizeGalleryEventType(event.eventType) !== PROFILE_CREATED_EVENT_TYPE)
    .map((event) => ({
      eventId: event.id,
      tenantId: event.tenantId,
      productId: event.productId,
      sourceType: 'event' as const,
      eventType: event.eventType,
      eventDate: event.eventDate,
      createdAt: event.createdAt,
      images: event.images.map((image) => ({
        ...image,
        sourceImageId: null,
      })),
    }))
    .filter((group) => group.images.length > 0);

  const groups = [...(profileGroup ? [profileGroup] : []), ...eventGroups].sort(compareGalleryGroups);

  return groups.flatMap((group) =>
    group.images.map((image, indexWithinGroup) => ({
      id:
        image.sourceImageId ??
        `${group.eventId}:${indexWithinGroup}:${image.key}`,
      tenantId: group.tenantId,
      productId: group.productId,
      sourceType: group.sourceType,
      sourceEventId: group.eventId,
      sourceImageId: image.sourceImageId,
      eventType: group.eventType,
      eventDate: group.eventDate,
      imageKey: image.key,
      imageUrl: image.url,
      contentType: image.contentType,
      sizeBytes: image.sizeBytes,
      sortOrder: 0,
    })),
  ).map((item, index) => ({
    ...item,
    sortOrder: index,
  }));
}

export type Product = z.infer<typeof productSchema>;
export type CreateProductRequest = z.infer<typeof createProductRequestSchema>;
export type GetProductResponse = z.infer<typeof getProductResponseSchema>;
export type ListProductsResponse = z.infer<typeof listProductsResponseSchema>;
export type PreviewProductCodeRequest = z.infer<typeof previewProductCodeRequestSchema>;
export type PreviewProductCodeResponse = z.infer<typeof previewProductCodeResponseSchema>;
export type UpdateProductRequest = z.infer<typeof updateProductRequestSchema>;
export type CreateMatingRecordRequest = z.infer<typeof createMatingRecordRequestSchema>;
export type CreateEggRecordRequest = z.infer<typeof createEggRecordRequestSchema>;
export type CreateProductEventRequest = z.infer<typeof createProductEventRequestSchema>;
export type UpdateProductEventRequest = z.infer<typeof updateProductEventRequestSchema>;
export type ListProductsQuery = z.infer<typeof listProductsQuerySchema>;
export type ProductListStats = z.infer<typeof listProductsResponseSchema.shape.stats>;
export type ProductImage = z.infer<typeof productImageSchema>;
export type ProductEventImage = z.infer<typeof productEventImageSchema>;
export type ProductGallerySourceType = z.infer<typeof productGallerySourceTypeSchema>;
export type ProductGalleryItem = z.infer<typeof productGalleryItemSchema>;
export type ReorderProductImagesRequest = z.infer<typeof reorderProductImagesRequestSchema>;
export type ProductEvent = z.infer<typeof productEventSchema>;
export type ProductMaleMatingHistoryItem = z.infer<typeof productMaleMatingHistoryItemSchema>;
export type ProductFamilyTreeLink = z.infer<typeof productFamilyTreeLinkSchema>;
export type ProductFamilyTree = z.infer<typeof productFamilyTreeSchema>;
export type ProductPublicClicksQuery = z.infer<typeof productPublicClicksQuerySchema>;
export type ProductPublicClicksSummary = z.infer<typeof productPublicClicksSummarySchema>;
export type ListProductsPublicClicksQuery = z.infer<typeof listProductsPublicClicksQuerySchema>;
export type ProductPublicClicksItem = z.infer<typeof productPublicClicksItemSchema>;
