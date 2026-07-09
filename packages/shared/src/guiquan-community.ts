import { z } from 'zod';

const optionalTenantIdSchema = z.string().trim().min(1).nullable().optional();
const GUIQUAN_COMMUNITY_IMAGE_PATH_PREFIXES = [
  '/products/',
  '/uploads/',
  '/shares/',
  '/tenant-share-presentation/',
] as const;
const GUIQUAN_COMMUNITY_IMAGE_SUFFIXES = [
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.gif',
  '.bmp',
  '.svg',
  '.avif',
] as const;
const GUIQUAN_COMMUNITY_PRODUCT_CARD_PREFIX = '@eggturtle-product-card ';
const GUIQUAN_COMMUNITY_HEADING_BLOCK_PREFIX = '@eggturtle-heading ';
const GUIQUAN_COMMUNITY_QUOTE_BLOCK_PREFIX = '@eggturtle-quote ';
const GUIQUAN_COMMUNITY_DIVIDER_BLOCK_PREFIX = '@eggturtle-divider';

export const guiquanCommunityTagSchema = z.enum(['精选', '经验', '问答', '官方']);
export const guiquanCommunityPostStatusSchema = z.enum([
  'DRAFT',
  'PENDING_REVIEW',
  'PUBLISHED',
  'REJECTED',
  'ARCHIVED',
]);
export const guiquanCommunityPostSourceTypeSchema = z.enum(['PLATFORM', 'TENANT']);
export const guiquanCommunityCommentStatusSchema = z.enum(['VISIBLE', 'HIDDEN', 'DELETED']);
export const guiquanCommunityReportTargetTypeSchema = z.enum(['POST', 'COMMENT']);
export const guiquanCommunityReportReasonSchema = z.enum([
  'SPAM_AD',
  'ABUSE',
  'FALSE_INFO',
  'ILLEGAL_TRANSACTION',
  'PRIVACY',
  'OTHER',
]);
export const guiquanCommunityReportStatusSchema = z.enum(['OPEN', 'RESOLVED', 'DISMISSED']);
const guiquanCommunityImageUrlSchema = z
  .string()
  .trim()
  .min(1)
  .refine(isLikelyGuiquanCommunityImageUrl, {
    message: 'Invalid guiquan community image url',
  })
;
const guiquanCommunityCoverImageUrlSchema = guiquanCommunityImageUrlSchema
  .nullable()
  .optional();
export const guiquanCommunityReferencedProductSchema = z.object({
  id: z.string().trim().min(1),
  code: z.string().trim().max(80).nullable().optional(),
  alias: z.string().trim().max(120).nullable().optional(),
  name: z.string().trim().max(120).nullable().optional(),
  sex: z.string().trim().max(32).nullable().optional(),
  coverImageUrl: guiquanCommunityImageUrlSchema.nullable().optional(),
  publicShareToken: z.string().nullable().optional(),
  publicCoverImageUrl: guiquanCommunityImageUrlSchema.nullable().optional(),
  publicProductTenantId: z.string().nullable().optional(),
  // 公开摘要:与 shares 公开 feed 同口径,供社区提及卡片展示
  publicSeriesName: z.string().nullable().optional(),
  publicOffspringUnitPrice: z.number().nullable().optional(),
  publicInStock: z.boolean().nullable().optional(),
});
const guiquanCommunityContentBlockIdSchema = z.string().trim().min(1).max(80);
const guiquanCommunityTextBlockSchema = z.string().trim().min(1).max(2000);
const guiquanCommunityHeadingLevelSchema = z.union([z.literal(2), z.literal(3)]);
const guiquanCommunityContentBlockBaseSchema = z.object({
  id: guiquanCommunityContentBlockIdSchema,
});
export const guiquanCommunityParagraphBlockSchema = guiquanCommunityContentBlockBaseSchema.extend({
  type: z.literal('paragraph'),
  text: guiquanCommunityTextBlockSchema,
});
export const guiquanCommunityHeadingBlockSchema = guiquanCommunityContentBlockBaseSchema.extend({
  type: z.literal('heading'),
  text: guiquanCommunityTextBlockSchema,
  level: guiquanCommunityHeadingLevelSchema.default(2),
});
export const guiquanCommunityQuoteBlockSchema = guiquanCommunityContentBlockBaseSchema.extend({
  type: z.literal('quote'),
  text: guiquanCommunityTextBlockSchema,
});
export const guiquanCommunityImageBlockSchema = guiquanCommunityContentBlockBaseSchema.extend({
  type: z.literal('image'),
  url: guiquanCommunityImageUrlSchema,
  alt: z.string().trim().max(240).default(''),
});
export const guiquanCommunityProductCardBlockSchema =
  guiquanCommunityContentBlockBaseSchema.extend({
    type: z.literal('product-card'),
    product: guiquanCommunityReferencedProductSchema,
  });
export const guiquanCommunityDividerBlockSchema = guiquanCommunityContentBlockBaseSchema.extend({
  type: z.literal('divider'),
});
export const guiquanCommunityContentBlockSchema = z.discriminatedUnion('type', [
  guiquanCommunityParagraphBlockSchema,
  guiquanCommunityHeadingBlockSchema,
  guiquanCommunityQuoteBlockSchema,
  guiquanCommunityImageBlockSchema,
  guiquanCommunityProductCardBlockSchema,
  guiquanCommunityDividerBlockSchema,
]);
const guiquanCommunityContentBlockInputBaseSchema = z.object({
  id: guiquanCommunityContentBlockIdSchema.optional(),
});
export const guiquanCommunityContentBlockInputSchema = z.discriminatedUnion('type', [
  guiquanCommunityContentBlockInputBaseSchema.extend({
    type: z.literal('paragraph'),
    text: z.string().trim().max(2000),
  }),
  guiquanCommunityContentBlockInputBaseSchema.extend({
    type: z.literal('heading'),
    text: z.string().trim().max(2000),
    level: guiquanCommunityHeadingLevelSchema.optional(),
  }),
  guiquanCommunityContentBlockInputBaseSchema.extend({
    type: z.literal('quote'),
    text: z.string().trim().max(2000),
  }),
  guiquanCommunityContentBlockInputBaseSchema.extend({
    type: z.literal('image'),
    url: z.string().trim().min(1).max(2000),
    alt: z.string().trim().max(240).optional(),
  }),
  guiquanCommunityContentBlockInputBaseSchema.extend({
    type: z.literal('product-card'),
    product: guiquanCommunityReferencedProductSchema,
  }),
  guiquanCommunityContentBlockInputBaseSchema.extend({
    type: z.literal('divider'),
  }),
]);
export const guiquanCommunityContentDocSchema = z.object({
  version: z.literal(2),
  blocks: z.array(guiquanCommunityContentBlockSchema).max(50),
});
export const guiquanCommunityContentDocInputSchema = z.object({
  version: z.literal(2).optional(),
  blocks: z.array(guiquanCommunityContentBlockInputSchema).max(50),
});
const guiquanCommunityUploadedImageAssetSchema = z.object({
  key: z.string().min(1),
  url: guiquanCommunityImageUrlSchema,
  contentType: z.string().min(1).nullable(),
  sizeBytes: z.string().regex(/^\d+$/),
});

export const guiquanCommunityCommentSchema = z.object({
  id: z.string().min(1),
  postId: z.string().min(1),
  parentCommentId: z.string().min(1).nullable(),
  tenantId: z.string().min(1).nullable(),
  authorDisplayName: z.string().trim().min(1).max(80),
  body: z.string().trim().min(1).max(1000),
  status: guiquanCommunityCommentStatusSchema,
  hiddenReason: z.string().trim().max(240).nullable(),
  hiddenAt: z.string().datetime().nullable(),
  canDelete: z.boolean().default(false),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const guiquanCommunityReportSchema = z.object({
  id: z.string().min(1),
  targetType: guiquanCommunityReportTargetTypeSchema,
  postId: z.string().min(1),
  commentId: z.string().min(1).nullable(),
  reporterDisplayName: z.string().trim().min(1).max(80),
  reporterTenantId: z.string().min(1).nullable(),
  reporterTenantDisplayName: z.string().trim().max(120).nullable(),
  reason: guiquanCommunityReportReasonSchema,
  note: z.string().trim().max(500).nullable(),
  status: guiquanCommunityReportStatusSchema,
  operatorNote: z.string().trim().max(500).nullable(),
  handledAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const guiquanCommunityPostSchema = z.object({
  id: z.string().min(1),
  sourceType: guiquanCommunityPostSourceTypeSchema,
  tenantId: z.string().min(1).nullable(),
  tenantDisplayName: z.string().trim().max(120).nullable(),
  sourceLabel: z.string().trim().min(1).max(80),
  tag: guiquanCommunityTagSchema,
  title: z.string().trim().min(1).max(120),
  summary: z.string().trim().min(1).max(240),
  coverImageUrl: guiquanCommunityCoverImageUrlSchema,
  content: z.string().trim().max(12000).nullable(),
  contentDoc: guiquanCommunityContentDocSchema.nullable().optional(),
  contentBlocks: z.array(guiquanCommunityContentBlockSchema).max(50).optional(),
  authorName: z.string().trim().min(1).max(40),
  authorPublicShareToken: z.string().trim().min(1).max(120).nullable(),
  authorAvatarUrl: z.string().trim().min(1).max(500).nullable().optional(),
  commentCount: z.number().int().nonnegative(),
  likeCount: z.number().int().nonnegative(),
  isLiked: z.boolean(),
  reportCount: z.number().int().nonnegative(),
  unresolvedReportCount: z.number().int().nonnegative(),
  resolvedReportCount: z.number().int().nonnegative(),
  dismissedReportCount: z.number().int().nonnegative(),
  isPinned: z.boolean(),
  isFeatured: z.boolean(),
  canEdit: z.boolean().default(false),
  canDelete: z.boolean().default(false),
  status: guiquanCommunityPostStatusSchema,
  reviewNote: z.string().trim().max(240).nullable(),
  submittedAt: z.string().datetime().nullable(),
  reviewedAt: z.string().datetime().nullable(),
  publishedAt: z.string().datetime().nullable(),
  archivedAt: z.string().datetime().nullable(),
  createdByUserId: z.string().min(1),
  reviewedByUserId: z.string().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const guiquanCommunityFeedItemSchema = z.object({
  id: z.string().min(1),
  sourceType: guiquanCommunityPostSourceTypeSchema,
  tenantId: z.string().min(1).nullable(),
  tenantDisplayName: z.string().trim().max(120).nullable(),
  sourceLabel: z.string().trim().min(1).max(80),
  tag: guiquanCommunityTagSchema,
  title: z.string().trim().min(1).max(120),
  summary: z.string().trim().min(1).max(240),
  coverImageUrl: guiquanCommunityCoverImageUrlSchema,
  authorName: z.string().trim().min(1).max(40),
  authorPublicShareToken: z.string().trim().min(1).max(120).nullable(),
  authorAvatarUrl: z.string().trim().min(1).max(500).nullable().optional(),
  commentCount: z.number().int().nonnegative(),
  likeCount: z.number().int().nonnegative(),
  isLiked: z.boolean(),
  updatedAt: z.string().datetime(),
  isPinned: z.boolean(),
  isFeatured: z.boolean(),
  // 不设上限:弹层展示帖内全部提及(feed 卡片只渲染第一只)
  mentionedPets: z.array(guiquanCommunityReferencedProductSchema).optional(),
  mentionedPetCount: z.number().int().nonnegative().optional(),
});

export const guiquanCommunityFeedResponseSchema = z.object({
  items: z.array(guiquanCommunityFeedItemSchema).max(50),
});

export const listTenantGuiquanCommunityPostsResponseSchema = z.object({
  posts: z.array(guiquanCommunityPostSchema).max(100),
});

export const guiquanCommunityInteractionNotificationTypeSchema = z.enum(['COMMENT', 'REPLY']);

export const guiquanCommunityInteractionNotificationSchema = z.object({
  id: z.string().min(1),
  type: guiquanCommunityInteractionNotificationTypeSchema,
  postId: z.string().min(1),
  postTitle: z.string().trim().min(1).max(120),
  postSummary: z.string().trim().max(240).nullable(),
  actorDisplayName: z.string().trim().min(1).max(80),
  actorAvatarUrl: z.string().trim().min(1).max(500).nullable(),
  body: z.string().trim().min(1).max(1000),
  parentCommentBody: z.string().trim().max(1000).nullable(),
  createdAt: z.string().datetime(),
});

export const guiquanCommunityInteractionNotificationsResponseSchema = z.object({
  items: z.array(guiquanCommunityInteractionNotificationSchema).max(50),
  capabilities: z.object({
    comments: z.literal('derived-from-comments'),
    replies: z.literal('derived-from-comments'),
    likes: z.literal('unsupported'),
    unreadState: z.literal('client-local-last-opened-at'),
  }),
});

export const listAdminGuiquanCommunityPostsQuerySchema = z.object({
  tenantId: z.string().trim().min(1).optional(),
  status: guiquanCommunityPostStatusSchema.optional(),
  sourceType: guiquanCommunityPostSourceTypeSchema.optional(),
  tag: guiquanCommunityTagSchema.optional(),
  reportStatus: guiquanCommunityReportStatusSchema.optional(),
  keyword: z.string().trim().max(120).optional(),
});

export const listAdminGuiquanCommunityPostsResponseSchema = z.object({
  posts: z.array(guiquanCommunityPostSchema).max(200),
});

export const getGuiquanCommunityPostResponseSchema = z.object({
  post: guiquanCommunityPostSchema,
  comments: z.array(guiquanCommunityCommentSchema).max(200),
});

export const getAdminGuiquanCommunityPostResponseSchema = z.object({
  post: guiquanCommunityPostSchema,
  comments: z.array(guiquanCommunityCommentSchema).max(500),
  reports: z.array(guiquanCommunityReportSchema).max(500),
});

export const createAdminGuiquanCommunityPostRequestSchema = z.object({
  sourceType: guiquanCommunityPostSourceTypeSchema.default('TENANT'),
  tenantId: optionalTenantIdSchema,
  tag: guiquanCommunityTagSchema,
  title: z.string().trim().min(1).max(120),
  summary: z.string().trim().min(1).max(240),
  content: z.string().trim().max(12000).nullable().optional(),
  contentDoc: guiquanCommunityContentDocInputSchema.nullable().optional(),
  contentBlocks: z.array(guiquanCommunityContentBlockInputSchema).max(50).optional(),
  authorName: z.string().trim().min(1).max(40),
  isPinned: z.boolean().optional(),
  isFeatured: z.boolean().optional(),
});

export const updateAdminGuiquanCommunityPostRequestSchema =
  createAdminGuiquanCommunityPostRequestSchema.partial();

const tenantGuiquanCommunityPostMutationRequestSchema = z
  .object({
    body: z.string().trim().max(4000).optional(),
    imageUrls: z.array(guiquanCommunityImageUrlSchema).max(12).optional(),
    relatedProduct: guiquanCommunityReferencedProductSchema.nullable().optional(),
    contentDoc: guiquanCommunityContentDocInputSchema.nullable().optional(),
    contentBlocks: z.array(guiquanCommunityContentBlockInputSchema).max(50).optional(),
  })
  .superRefine((value, ctx) => {
    const hasLegacyBody = Boolean(value.body?.trim());
    const hasLegacyImages = (value.imageUrls?.length ?? 0) > 0;
    const hasLegacyProduct = Boolean(value.relatedProduct);
    const hasContentDoc = (value.contentDoc?.blocks.length ?? 0) > 0;
    const hasContentBlocks = (value.contentBlocks?.length ?? 0) > 0;

    if (hasLegacyBody || hasLegacyImages || hasLegacyProduct || hasContentDoc || hasContentBlocks) {
      return;
    }

    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Post content is required',
      path: ['contentBlocks'],
    });
  });

export const createTenantGuiquanCommunityPostRequestSchema = tenantGuiquanCommunityPostMutationRequestSchema;
export const updateTenantGuiquanCommunityPostRequestSchema = tenantGuiquanCommunityPostMutationRequestSchema;

export const rejectAdminGuiquanCommunityPostRequestSchema = z.object({
  reviewNote: z.string().trim().max(240).nullable().optional(),
});

export const createGuiquanCommunityCommentRequestSchema = z.object({
  parentCommentId: z.string().trim().min(1).nullable().optional(),
  body: z.string().trim().min(1).max(1000),
});

export const createGuiquanCommunityCommentResponseSchema = z.object({
  comment: guiquanCommunityCommentSchema,
});

export const toggleGuiquanCommunityPostLikeResponseSchema = z.object({
  postId: z.string().min(1),
  likeCount: z.number().int().nonnegative(),
  isLiked: z.boolean(),
});

export const deleteGuiquanCommunityCommentResponseSchema = z.object({
  comment: guiquanCommunityCommentSchema,
});

export const createGuiquanCommunityReportRequestSchema = z.object({
  targetType: guiquanCommunityReportTargetTypeSchema,
  commentId: z.string().trim().min(1).nullable().optional(),
  reason: guiquanCommunityReportReasonSchema,
  note: z.string().trim().max(500).nullable().optional(),
});

export const createGuiquanCommunityReportResponseSchema = z.object({
  report: guiquanCommunityReportSchema,
});

export const updateAdminGuiquanCommunityCommentStatusRequestSchema = z.object({
  status: z.enum(['VISIBLE', 'HIDDEN', 'DELETED']),
  hiddenReason: z.string().trim().max(240).nullable().optional(),
});

export const updateAdminGuiquanCommunityCommentStatusResponseSchema = z.object({
  comment: guiquanCommunityCommentSchema,
});

export const updateAdminGuiquanCommunityReportStatusRequestSchema = z.object({
  status: z.enum(['RESOLVED', 'DISMISSED']),
  operatorNote: z.string().trim().max(500).nullable().optional(),
});

export const updateAdminGuiquanCommunityReportStatusResponseSchema = z.object({
  report: guiquanCommunityReportSchema,
});

export const guiquanCommunityPostResponseSchema = z.object({
  post: guiquanCommunityPostSchema,
});

export const createTenantGuiquanCommunityPostResponseSchema = guiquanCommunityPostResponseSchema;
export const updateTenantGuiquanCommunityPostResponseSchema = guiquanCommunityPostResponseSchema;
export const deleteTenantGuiquanCommunityPostResponseSchema = guiquanCommunityPostResponseSchema;

export const adminGuiquanCommunityPostResponseSchema = z.object({
  post: guiquanCommunityPostSchema,
});

export const uploadGuiquanCommunityImageResponseSchema = z.object({
  asset: guiquanCommunityUploadedImageAssetSchema,
});

function normalizeGuiquanCommunityContentLines(value?: string | null) {
  return String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function normalizeGuiquanCommunityBodyLines(value?: string | null) {
  return String(value ?? '')
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function truncateGuiquanCommunityText(value: string, maxLength: number) {
  const normalized = value.trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, Math.max(1, maxLength - 1)).trimEnd()}…`;
}

function isLikelyGuiquanCommunityImageUrl(value: string) {
  const normalized = value.trim();
  if (!normalized) {
    return false;
  }

  if (normalized.startsWith('data:image/')) {
    return true;
  }

  try {
    const parsed = normalized.startsWith('http://') || normalized.startsWith('https://')
      ? new URL(normalized)
      : new URL(normalized, 'https://eggturtle.local');
    const pathname = parsed.pathname.toLowerCase();

    if (pathname.includes('/products/') && pathname.includes('/images/') && pathname.endsWith('/content')) {
      return true;
    }

    if (GUIQUAN_COMMUNITY_IMAGE_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
      return true;
    }

    return GUIQUAN_COMMUNITY_IMAGE_SUFFIXES.some((suffix) => pathname.endsWith(suffix));
  } catch {
    return false;
  }
}

function buildGuiquanCommunityReferencedProductLabel(product: GuiquanCommunityReferencedProduct) {
  return product.code?.trim() || product.alias?.trim() || product.name?.trim() || '这只种龟';
}

function buildGuiquanCommunityBlockId(
  type: GuiquanCommunityContentBlock['type'],
  index: number,
) {
  return `${type}-${index + 1}`;
}

function extractGuiquanCommunityBlockText(block: GuiquanCommunityContentBlock) {
  if (block.type === 'paragraph' || block.type === 'heading' || block.type === 'quote') {
    return block.text.trim();
  }

  if (block.type === 'product-card') {
    return buildGuiquanCommunityReferencedProductLabel(block.product);
  }

  return '';
}

function parseGuiquanCommunityProductCardLine(
  line: string,
): Extract<GuiquanCommunityContentBlock, { type: 'product-card' }> | null {
  const normalized = line.trim();
  if (!normalized.startsWith(GUIQUAN_COMMUNITY_PRODUCT_CARD_PREFIX)) {
    return null;
  }

  const rawPayload = normalized.slice(GUIQUAN_COMMUNITY_PRODUCT_CARD_PREFIX.length).trim();
  if (!rawPayload) {
    return null;
  }

  try {
    const product = guiquanCommunityReferencedProductSchema.parse(JSON.parse(rawPayload));
    return {
      id: '',
      type: 'product-card',
      product,
    };
  } catch {
    return null;
  }
}

function parseGuiquanCommunityHeadingLine(
  line: string,
): Extract<GuiquanCommunityContentBlock, { type: 'heading' }> | null {
  const normalized = line.trim();
  if (!normalized.startsWith(GUIQUAN_COMMUNITY_HEADING_BLOCK_PREFIX)) {
    return null;
  }

  const rawPayload = normalized.slice(GUIQUAN_COMMUNITY_HEADING_BLOCK_PREFIX.length).trim();
  if (!rawPayload) {
    return null;
  }

  try {
    const payload = JSON.parse(rawPayload);
    const parsed = z
      .object({
        text: guiquanCommunityTextBlockSchema,
        level: guiquanCommunityHeadingLevelSchema.optional(),
      })
      .parse(payload);
    return {
      id: '',
      type: 'heading',
      text: parsed.text,
      level: parsed.level ?? 2,
    };
  } catch {
    return null;
  }
}

function parseGuiquanCommunityQuoteLine(
  line: string,
): Extract<GuiquanCommunityContentBlock, { type: 'quote' }> | null {
  const normalized = line.trim();
  if (!normalized.startsWith(GUIQUAN_COMMUNITY_QUOTE_BLOCK_PREFIX)) {
    return null;
  }

  const rawPayload = normalized.slice(GUIQUAN_COMMUNITY_QUOTE_BLOCK_PREFIX.length).trim();
  if (!rawPayload) {
    return null;
  }

  try {
    const payload = JSON.parse(rawPayload);
    const parsed = z.object({ text: guiquanCommunityTextBlockSchema }).parse(payload);
    return {
      id: '',
      type: 'quote',
      text: parsed.text,
    };
  } catch {
    return null;
  }
}

function parseGuiquanCommunityDividerLine(
  line: string,
): Extract<GuiquanCommunityContentBlock, { type: 'divider' }> | null {
  return line.trim() === GUIQUAN_COMMUNITY_DIVIDER_BLOCK_PREFIX
    ? {
        id: '',
        type: 'divider',
      }
    : null;
}

function parseGuiquanCommunityImageLine(line: string): { url: string; alt: string } | null {
  const normalized = line.trim();
  if (!normalized) {
    return null;
  }

  const markdownMatch = normalized.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
  if (markdownMatch) {
    const url = markdownMatch[2]?.trim() ?? '';
    if (!isLikelyGuiquanCommunityImageUrl(url)) {
      return null;
    }
    return {
      url,
      alt: markdownMatch[1]?.trim() ?? '',
    };
  }

  if (!isLikelyGuiquanCommunityImageUrl(normalized)) {
    return null;
  }

  return {
    url: normalized,
    alt: '',
  };
}

export function createGuiquanCommunityProductCardLine(
  product: GuiquanCommunityReferencedProduct,
) {
  const normalizedProduct = guiquanCommunityReferencedProductSchema.parse(product);
  return `${GUIQUAN_COMMUNITY_PRODUCT_CARD_PREFIX}${JSON.stringify(normalizedProduct)}`;
}

function createGuiquanCommunityHeadingLine(
  block: Extract<GuiquanCommunityContentBlock, { type: 'heading' }>,
) {
  return `${GUIQUAN_COMMUNITY_HEADING_BLOCK_PREFIX}${JSON.stringify({
    text: block.text,
    level: block.level,
  })}`;
}

function createGuiquanCommunityQuoteLine(
  block: Extract<GuiquanCommunityContentBlock, { type: 'quote' }>,
) {
  return `${GUIQUAN_COMMUNITY_QUOTE_BLOCK_PREFIX}${JSON.stringify({
    text: block.text,
  })}`;
}

function createGuiquanCommunityLegacyBlocks(input: {
  body?: string | null;
  imageUrls?: string[];
  relatedProduct?: GuiquanCommunityReferencedProduct | null;
}) {
  const blocks: GuiquanCommunityContentBlockInput[] = normalizeGuiquanCommunityBodyLines(
    input.body,
  ).map((text) => ({
    type: 'paragraph',
    text,
  }));
  const imageUrls = Array.from(
    new Set((input.imageUrls ?? []).map((value) => value.trim()).filter(Boolean)),
  );

  if (input.relatedProduct) {
    blocks.push({
      type: 'product-card',
      product: input.relatedProduct,
    });
  }

  blocks.push(
    ...imageUrls.map((url) => ({
      type: 'image' as const,
      url,
      alt: '',
    })),
  );

  return blocks;
}

function normalizeGuiquanCommunityContentBlocksInput(
  blocks: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[],
): GuiquanCommunityContentBlock[] {
  const normalizedBlocks = blocks
    .map((block) => {
      if (block.type === 'paragraph') {
        const text = block.text.trim();
        if (!text) {
          return null;
        }
        return {
          id: block.id?.trim() || '',
          type: 'paragraph' as const,
          text,
        };
      }

      if (block.type === 'heading') {
        const text = block.text.trim();
        if (!text) {
          return null;
        }
        return {
          id: block.id?.trim() || '',
          type: 'heading' as const,
          text,
          level: block.level ?? 2,
        };
      }

      if (block.type === 'quote') {
        const text = block.text.trim();
        if (!text) {
          return null;
        }
        return {
          id: block.id?.trim() || '',
          type: 'quote' as const,
          text,
        };
      }

      if (block.type === 'image') {
        const url = block.url.trim();
        if (!url) {
          return null;
        }
        return {
          id: block.id?.trim() || '',
          type: 'image' as const,
          url,
          alt: block.alt?.trim() ?? '',
        };
      }

      if (block.type === 'product-card') {
        return {
          id: block.id?.trim() || '',
          type: 'product-card' as const,
          product: guiquanCommunityReferencedProductSchema.parse(block.product),
        };
      }

      return {
        id: block.id?.trim() || '',
        type: 'divider' as const,
      };
    })
    .filter((block): block is GuiquanCommunityContentBlock => Boolean(block));

  return normalizedBlocks.map((block, index) =>
    guiquanCommunityContentBlockSchema.parse({
      ...block,
      id: block.id || buildGuiquanCommunityBlockId(block.type, index),
    }),
  );
}

export function createGuiquanCommunityPostContentDoc(input: {
  contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
  contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
  body?: string | null;
  imageUrls?: string[];
  relatedProduct?: GuiquanCommunityReferencedProduct | null;
}): GuiquanCommunityContentDoc {
  const docBlocks = input.contentDoc?.blocks;
  const rawBlocks =
    (docBlocks && docBlocks.length > 0
      ? docBlocks
      : input.contentBlocks && input.contentBlocks.length > 0
        ? input.contentBlocks
        : createGuiquanCommunityLegacyBlocks(input)) ?? [];

  return {
    version: 2,
    blocks: normalizeGuiquanCommunityContentBlocksInput(rawBlocks),
  };
}

export function deriveGuiquanCommunityPostTitle(input: {
  contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
  contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
  body?: string | null;
  imageUrls?: string[];
  relatedProduct?: GuiquanCommunityReferencedProduct | null;
}) {
  const blocks = createGuiquanCommunityPostContentDoc(input).blocks;
  const bodyLines = blocks
    .map((block) => extractGuiquanCommunityBlockText(block))
    .filter(Boolean);
  const fallbackTitle = input.relatedProduct
    ? `关于${buildGuiquanCommunityReferencedProductLabel(input.relatedProduct)}的经验分享`
    : '龟圈新帖';

  return truncateGuiquanCommunityText(bodyLines[0] ?? fallbackTitle, 120);
}

export function composeGuiquanCommunityPostContent(input: {
  contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
  contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
  body?: string | null;
  imageUrls?: string[];
  relatedProduct?: GuiquanCommunityReferencedProduct | null;
}) {
  return createGuiquanCommunityPostContentDoc(input).blocks
    .map((block) => {
      if (block.type === 'paragraph') {
        return block.text;
      }
      if (block.type === 'heading') {
        return createGuiquanCommunityHeadingLine(block);
      }
      if (block.type === 'quote') {
        return createGuiquanCommunityQuoteLine(block);
      }
      if (block.type === 'divider') {
        return GUIQUAN_COMMUNITY_DIVIDER_BLOCK_PREFIX;
      }
      if (block.type === 'product-card') {
        return createGuiquanCommunityProductCardLine(block.product);
      }
      return block.alt ? `![${block.alt}](${block.url})` : block.url;
    })
    .join('\n');
}

export function deriveGuiquanCommunityPostSummary(input: {
  contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
  contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
  body?: string | null;
  imageUrls?: string[];
  relatedProduct?: GuiquanCommunityReferencedProduct | null;
}) {
  const bodyText = createGuiquanCommunityPostContentDoc(input).blocks
    .map((block) => extractGuiquanCommunityBlockText(block))
    .filter(Boolean)
    .join(' ');
  const fallbackSummary = input.relatedProduct
    ? `${buildGuiquanCommunityReferencedProductLabel(input.relatedProduct)} · 养殖记录与阶段观察`
    : '分享一条新的龟圈记录';

  return truncateGuiquanCommunityText(bodyText || fallbackSummary, 240);
}

export function parseGuiquanCommunityContentBlocks(
  value?: string | null,
  options?: {
    contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
    contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
  },
): GuiquanCommunityContentBlock[] {
  if ((options?.contentDoc?.blocks.length ?? 0) > 0 || (options?.contentBlocks?.length ?? 0) > 0) {
    return createGuiquanCommunityPostContentDoc({
      contentDoc: options?.contentDoc,
      contentBlocks: options?.contentBlocks,
    }).blocks;
  }

  return normalizeGuiquanCommunityContentLines(value).map((line, index) => {
    const productCard = parseGuiquanCommunityProductCardLine(line);
    if (productCard) {
      return {
        ...productCard,
        id: buildGuiquanCommunityBlockId(productCard.type, index),
      };
    }

    const heading = parseGuiquanCommunityHeadingLine(line);
    if (heading) {
      return {
        ...heading,
        id: buildGuiquanCommunityBlockId(heading.type, index),
      };
    }

    const quote = parseGuiquanCommunityQuoteLine(line);
    if (quote) {
      return {
        ...quote,
        id: buildGuiquanCommunityBlockId(quote.type, index),
      };
    }

    const divider = parseGuiquanCommunityDividerLine(line);
    if (divider) {
      return {
        ...divider,
        id: buildGuiquanCommunityBlockId(divider.type, index),
      };
    }

    const image = parseGuiquanCommunityImageLine(line);
    if (image) {
      return {
        id: buildGuiquanCommunityBlockId('image', index),
        type: 'image',
        url: image.url,
        alt: image.alt,
      };
    }

    return {
      id: buildGuiquanCommunityBlockId('paragraph', index),
      type: 'paragraph',
      text: line,
    };
  });
}

export function deriveGuiquanCommunityCoverImageUrl(
  content?: string | null,
  options?: {
    contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
    contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
  },
): string | null {
  const firstImageBlock = parseGuiquanCommunityContentBlocks(content, options).find(
    (block): block is Extract<GuiquanCommunityContentBlock, { type: 'image' }> =>
      block.type === 'image',
  );

  return firstImageBlock?.url ?? null;
}

export type GuiquanCommunityTag = z.infer<typeof guiquanCommunityTagSchema>;
export type GuiquanCommunityPostStatus = z.infer<typeof guiquanCommunityPostStatusSchema>;
export type GuiquanCommunityPostSourceType = z.infer<typeof guiquanCommunityPostSourceTypeSchema>;
export type GuiquanCommunityCommentStatus = z.infer<typeof guiquanCommunityCommentStatusSchema>;
export type GuiquanCommunityReportTargetType = z.infer<
  typeof guiquanCommunityReportTargetTypeSchema
>;
export type GuiquanCommunityReportReason = z.infer<typeof guiquanCommunityReportReasonSchema>;
export type GuiquanCommunityReportStatus = z.infer<typeof guiquanCommunityReportStatusSchema>;
export type GuiquanCommunityPost = z.infer<typeof guiquanCommunityPostSchema>;
export type GuiquanCommunityComment = z.infer<typeof guiquanCommunityCommentSchema>;
export type GuiquanCommunityReport = z.infer<typeof guiquanCommunityReportSchema>;
export type GuiquanCommunityFeedItem = z.infer<typeof guiquanCommunityFeedItemSchema>;
export type GuiquanCommunityFeedResponse = z.infer<typeof guiquanCommunityFeedResponseSchema>;
export type ListTenantGuiquanCommunityPostsResponse = z.infer<
  typeof listTenantGuiquanCommunityPostsResponseSchema
>;
export type GuiquanCommunityInteractionNotificationType = z.infer<
  typeof guiquanCommunityInteractionNotificationTypeSchema
>;
export type GuiquanCommunityInteractionNotification = z.infer<
  typeof guiquanCommunityInteractionNotificationSchema
>;
export type GuiquanCommunityInteractionNotificationsResponse = z.infer<
  typeof guiquanCommunityInteractionNotificationsResponseSchema
>;
export type ListAdminGuiquanCommunityPostsQuery = z.infer<
  typeof listAdminGuiquanCommunityPostsQuerySchema
>;
export type ListAdminGuiquanCommunityPostsResponse = z.infer<
  typeof listAdminGuiquanCommunityPostsResponseSchema
>;
export type GetGuiquanCommunityPostResponse = z.infer<typeof getGuiquanCommunityPostResponseSchema>;
export type GetAdminGuiquanCommunityPostResponse = z.infer<
  typeof getAdminGuiquanCommunityPostResponseSchema
>;
export type GuiquanCommunityReferencedProduct = z.infer<typeof guiquanCommunityReferencedProductSchema>;
export type GuiquanCommunityParagraphBlock = z.infer<typeof guiquanCommunityParagraphBlockSchema>;
export type GuiquanCommunityHeadingBlock = z.infer<typeof guiquanCommunityHeadingBlockSchema>;
export type GuiquanCommunityQuoteBlock = z.infer<typeof guiquanCommunityQuoteBlockSchema>;
export type GuiquanCommunityImageBlock = z.infer<typeof guiquanCommunityImageBlockSchema>;
export type GuiquanCommunityProductCardBlock = z.infer<
  typeof guiquanCommunityProductCardBlockSchema
>;
export type GuiquanCommunityDividerBlock = z.infer<typeof guiquanCommunityDividerBlockSchema>;
export type GuiquanCommunityContentBlock = z.infer<typeof guiquanCommunityContentBlockSchema>;
export type GuiquanCommunityContentBlockInput = z.infer<
  typeof guiquanCommunityContentBlockInputSchema
>;
export type GuiquanCommunityContentDoc = z.infer<typeof guiquanCommunityContentDocSchema>;
export type GuiquanCommunityContentDocInput = z.infer<
  typeof guiquanCommunityContentDocInputSchema
>;
export type CreateAdminGuiquanCommunityPostRequest = z.infer<
  typeof createAdminGuiquanCommunityPostRequestSchema
>;
export type UpdateAdminGuiquanCommunityPostRequest = z.infer<
  typeof updateAdminGuiquanCommunityPostRequestSchema
>;
export type CreateTenantGuiquanCommunityPostRequest = z.infer<
  typeof createTenantGuiquanCommunityPostRequestSchema
>;
export type UpdateTenantGuiquanCommunityPostRequest = z.infer<
  typeof updateTenantGuiquanCommunityPostRequestSchema
>;
export type RejectAdminGuiquanCommunityPostRequest = z.infer<
  typeof rejectAdminGuiquanCommunityPostRequestSchema
>;
export type CreateGuiquanCommunityCommentRequest = z.infer<
  typeof createGuiquanCommunityCommentRequestSchema
>;
export type CreateGuiquanCommunityCommentResponse = z.infer<
  typeof createGuiquanCommunityCommentResponseSchema
>;
export type ToggleGuiquanCommunityPostLikeResponse = z.infer<
  typeof toggleGuiquanCommunityPostLikeResponseSchema
>;
export type DeleteGuiquanCommunityCommentResponse = z.infer<
  typeof deleteGuiquanCommunityCommentResponseSchema
>;
export type CreateGuiquanCommunityReportRequest = z.infer<
  typeof createGuiquanCommunityReportRequestSchema
>;
export type CreateGuiquanCommunityReportResponse = z.infer<
  typeof createGuiquanCommunityReportResponseSchema
>;
export type UpdateAdminGuiquanCommunityCommentStatusRequest = z.infer<
  typeof updateAdminGuiquanCommunityCommentStatusRequestSchema
>;
export type UpdateAdminGuiquanCommunityCommentStatusResponse = z.infer<
  typeof updateAdminGuiquanCommunityCommentStatusResponseSchema
>;
export type UpdateAdminGuiquanCommunityReportStatusRequest = z.infer<
  typeof updateAdminGuiquanCommunityReportStatusRequestSchema
>;
export type UpdateAdminGuiquanCommunityReportStatusResponse = z.infer<
  typeof updateAdminGuiquanCommunityReportStatusResponseSchema
>;
export type GuiquanCommunityPostResponse = z.infer<typeof guiquanCommunityPostResponseSchema>;
export type CreateTenantGuiquanCommunityPostResponse = z.infer<
  typeof createTenantGuiquanCommunityPostResponseSchema
>;
export type UpdateTenantGuiquanCommunityPostResponse = z.infer<
  typeof updateTenantGuiquanCommunityPostResponseSchema
>;
export type DeleteTenantGuiquanCommunityPostResponse = z.infer<
  typeof deleteTenantGuiquanCommunityPostResponseSchema
>;
export type AdminGuiquanCommunityPostResponse = z.infer<
  typeof adminGuiquanCommunityPostResponseSchema
>;
export type GuiquanCommunityUploadedImageAsset = z.infer<typeof guiquanCommunityUploadedImageAssetSchema>;
export type UploadGuiquanCommunityImageResponse = z.infer<
  typeof uploadGuiquanCommunityImageResponseSchema
>;
