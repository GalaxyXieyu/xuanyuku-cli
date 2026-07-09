import { z } from 'zod';

import { auditLogSchema } from './audit';
import {
  authEmailSchema,
  authNullableAccountSchema,
  authNullableWechatIdSchema,
  authPhoneNumberSchema,
  authUserSchema,
} from './auth';
import {
  tenantSubscriptionPlanSchema,
  tenantSubscriptionSchema,
  tenantSubscriptionStatusSchema,
} from './subscription';
import { tenantNameSchema, tenantRoleSchema, tenantSchema, tenantSlugSchema } from './tenant';

export const SuperAdminAuditAction = {
  ListTenants: 'admin.tenants.list',
  CreateTenant: 'admin.tenants.create',
  UpdateTenant: 'admin.tenants.update',
  DeleteTenant: 'admin.tenants.delete',
  ListUsers: 'admin.users.list',
  UpdateUser: 'admin.users.update',
  DeleteUser: 'admin.users.delete',
  UpsertTenantMember: 'admin.tenants.members.upsert',
  RemoveTenantMember: 'admin.tenants.members.remove',
  GetPlatformBranding: 'admin.branding.platform.get',
  UpdatePlatformBranding: 'admin.branding.platform.update',
  GetTenantBranding: 'admin.branding.tenant.get',
  UpdateTenantBranding: 'admin.branding.tenant.update',
  GetMiniappSupportConfig: 'admin.miniapp-support.get',
  UpdateMiniappSupportConfig: 'admin.miniapp-support.update',
  UploadMiniappSupportQrImage: 'admin.miniapp-support.qr-image.upload',
  ListAuditLogs: 'admin.audit-logs.list',
  ExportAuditLogs: 'admin.audit-logs.export',
  GetTenantSubscription: 'admin.tenants.subscription.get',
  UpdateTenantSubscription: 'admin.tenants.subscription.update',
  CreateSubscriptionActivationCode: 'admin.subscription-activation-codes.create',
  SuspendTenantLifecycle: 'admin.tenants.lifecycle.suspend',
  ReactivateTenantLifecycle: 'admin.tenants.lifecycle.reactivate',
  OffboardTenantLifecycle: 'admin.tenants.lifecycle.offboard',
  GetActivityAnalyticsOverview: 'admin.analytics.activity.overview',
  GetActivityOverview: 'admin.analytics.activity.overview.get',
  GetUsageOverview: 'admin.analytics.usage.overview.get',
  GetTenantUsage: 'admin.tenants.usage.get',
  GetRevenueOverview: 'admin.analytics.revenue.overview.get',
  GetSubscriptionPricing: 'admin.subscription-pricing.get',
  UpdateSubscriptionPricing: 'admin.subscription-pricing.update',
  ListMarketKeywords: 'admin.market-intelligence.keywords.list',
  CreateMarketKeyword: 'admin.market-intelligence.keywords.create',
  UpdateMarketKeyword: 'admin.market-intelligence.keywords.update',
  ToggleMarketKeyword: 'admin.market-intelligence.keywords.toggle',
  ListMarketPriceSnapshots: 'admin.market-intelligence.price-snapshots.list',
  BatchUpsertMarketPriceSnapshots: 'admin.market-intelligence.price-snapshots.batch-upsert',
  ListMarketSeedListings: 'admin.market-intelligence.seed-listings.list',
  BatchUpsertMarketSeedListings: 'admin.market-intelligence.seed-listings.batch-upsert',
  GetMarketModuleSwitches: 'admin.market-intelligence.module-switches.get',
  UpdateMarketModuleSwitches: 'admin.market-intelligence.module-switches.update',
  ListMarketReviewQueue: 'admin.market-intelligence.review-queue.list',
  ApproveMarketReviewQueueItem: 'admin.market-intelligence.review-queue.approve',
  RejectMarketReviewQueueItem: 'admin.market-intelligence.review-queue.reject',
  ListMarketPublishHistory: 'admin.market-intelligence.publish-history.list',
  PublishMarketKeyword: 'admin.market-intelligence.keywords.publish',
  ListGuiquanCommunityPosts: 'admin.guiquan-community.posts.list',
  CreateGuiquanCommunityPost: 'admin.guiquan-community.posts.create',
  UpdateGuiquanCommunityPost: 'admin.guiquan-community.posts.update',
  SubmitGuiquanCommunityPost: 'admin.guiquan-community.posts.submit',
  PublishGuiquanCommunityPost: 'admin.guiquan-community.posts.publish',
  RejectGuiquanCommunityPost: 'admin.guiquan-community.posts.reject',
  ArchiveGuiquanCommunityPost: 'admin.guiquan-community.posts.archive',
  ModerateGuiquanCommunityComment: 'admin.guiquan-community.comments.moderate',
  ResolveGuiquanCommunityReport: 'admin.guiquan-community.reports.resolve',
  ListSupplyProducts: 'admin.supply.products.list',
  ListSupplyOrders: 'admin.supply.orders.list',
  ListSupplySupportTickets: 'admin.supply.support-tickets.list',
  ListSupplyRefundRequests: 'admin.supply.refund-requests.list',
  CreateSupplyShipment: 'admin.supply.shipments.create',
  GetSupplyShipmentTracking: 'admin.supply.shipments.tracking.get',
  CreateSupplyProduct: 'admin.supply.products.create',
  UploadSupplyProductImage: 'admin.supply.products.image.upload',
  UpdateSupplyProduct: 'admin.supply.products.update',
  UpdateSupplySupportTicket: 'admin.supply.support-tickets.update',
  UpdateSupplyRefundRequest: 'admin.supply.refund-requests.update',
  DeleteSupplyProduct: 'admin.supply.products.delete',
  ListMarketplaceListings: 'admin.marketplace.listings.list',
  GetMarketplaceListingDetail: 'admin.marketplace.listings.detail.get',
  PublishMarketplaceListing: 'admin.marketplace.listings.publish',
  RejectMarketplaceListing: 'admin.marketplace.listings.reject',
  PauseMarketplaceListing: 'admin.marketplace.listings.pause',
  ArchiveMarketplaceListing: 'admin.marketplace.listings.archive',
  ResolveMarketplaceDispute: 'admin.marketplace.disputes.resolve',
  CreateAnnouncementDraft: 'admin.announcements.create-draft',
  PublishAnnouncement: 'admin.announcements.publish',
  ListFootprintAchievementPresentations: 'admin.footprint-achievements.list',
  UpdateFootprintAchievementPresentation: 'admin.footprint-achievements.update',
  UploadFootprintAchievementPresentationImage: 'admin.footprint-achievements.image.upload',
  ResetFootprintAchievementPresentation: 'admin.footprint-achievements.reset',
  CreateTenantObserveSession: 'admin.tenants.observe-session.create',
  GetTenantLivestockOverview: 'admin.tenants.livestock.overview.get',
  ListTenantLivestockProducts: 'admin.tenants.livestock.products.list',
  GetTenantLivestockProductDetail: 'admin.tenants.livestock.products.detail.get',
} as const;

export const superAdminAuditActionSchema = z.enum([
  SuperAdminAuditAction.ListTenants,
  SuperAdminAuditAction.CreateTenant,
  SuperAdminAuditAction.UpdateTenant,
  SuperAdminAuditAction.DeleteTenant,
  SuperAdminAuditAction.ListUsers,
  SuperAdminAuditAction.UpdateUser,
  SuperAdminAuditAction.DeleteUser,
  SuperAdminAuditAction.UpsertTenantMember,
  SuperAdminAuditAction.RemoveTenantMember,
  SuperAdminAuditAction.GetPlatformBranding,
  SuperAdminAuditAction.UpdatePlatformBranding,
  SuperAdminAuditAction.GetTenantBranding,
  SuperAdminAuditAction.UpdateTenantBranding,
  SuperAdminAuditAction.GetMiniappSupportConfig,
  SuperAdminAuditAction.UpdateMiniappSupportConfig,
  SuperAdminAuditAction.UploadMiniappSupportQrImage,
  SuperAdminAuditAction.ListAuditLogs,
  SuperAdminAuditAction.ExportAuditLogs,
  SuperAdminAuditAction.GetTenantSubscription,
  SuperAdminAuditAction.UpdateTenantSubscription,
  SuperAdminAuditAction.CreateSubscriptionActivationCode,
  SuperAdminAuditAction.SuspendTenantLifecycle,
  SuperAdminAuditAction.ReactivateTenantLifecycle,
  SuperAdminAuditAction.OffboardTenantLifecycle,
  SuperAdminAuditAction.GetActivityAnalyticsOverview,
  SuperAdminAuditAction.GetActivityOverview,
  SuperAdminAuditAction.GetUsageOverview,
  SuperAdminAuditAction.GetTenantUsage,
  SuperAdminAuditAction.GetRevenueOverview,
  SuperAdminAuditAction.GetSubscriptionPricing,
  SuperAdminAuditAction.UpdateSubscriptionPricing,
  SuperAdminAuditAction.ListMarketKeywords,
  SuperAdminAuditAction.CreateMarketKeyword,
  SuperAdminAuditAction.UpdateMarketKeyword,
  SuperAdminAuditAction.ToggleMarketKeyword,
  SuperAdminAuditAction.ListMarketPriceSnapshots,
  SuperAdminAuditAction.BatchUpsertMarketPriceSnapshots,
  SuperAdminAuditAction.ListMarketSeedListings,
  SuperAdminAuditAction.BatchUpsertMarketSeedListings,
  SuperAdminAuditAction.GetMarketModuleSwitches,
  SuperAdminAuditAction.UpdateMarketModuleSwitches,
  SuperAdminAuditAction.ListMarketReviewQueue,
  SuperAdminAuditAction.ApproveMarketReviewQueueItem,
  SuperAdminAuditAction.RejectMarketReviewQueueItem,
  SuperAdminAuditAction.ListMarketPublishHistory,
  SuperAdminAuditAction.PublishMarketKeyword,
  SuperAdminAuditAction.ListGuiquanCommunityPosts,
  SuperAdminAuditAction.CreateGuiquanCommunityPost,
  SuperAdminAuditAction.UpdateGuiquanCommunityPost,
  SuperAdminAuditAction.SubmitGuiquanCommunityPost,
  SuperAdminAuditAction.PublishGuiquanCommunityPost,
  SuperAdminAuditAction.RejectGuiquanCommunityPost,
  SuperAdminAuditAction.ArchiveGuiquanCommunityPost,
  SuperAdminAuditAction.ModerateGuiquanCommunityComment,
  SuperAdminAuditAction.ResolveGuiquanCommunityReport,
  SuperAdminAuditAction.ListSupplyProducts,
  SuperAdminAuditAction.ListSupplyOrders,
  SuperAdminAuditAction.ListSupplySupportTickets,
  SuperAdminAuditAction.ListSupplyRefundRequests,
  SuperAdminAuditAction.CreateSupplyShipment,
  SuperAdminAuditAction.GetSupplyShipmentTracking,
  SuperAdminAuditAction.CreateSupplyProduct,
  SuperAdminAuditAction.UploadSupplyProductImage,
  SuperAdminAuditAction.UpdateSupplyProduct,
  SuperAdminAuditAction.UpdateSupplySupportTicket,
  SuperAdminAuditAction.UpdateSupplyRefundRequest,
  SuperAdminAuditAction.DeleteSupplyProduct,
  SuperAdminAuditAction.ListMarketplaceListings,
  SuperAdminAuditAction.GetMarketplaceListingDetail,
  SuperAdminAuditAction.PublishMarketplaceListing,
  SuperAdminAuditAction.RejectMarketplaceListing,
  SuperAdminAuditAction.PauseMarketplaceListing,
  SuperAdminAuditAction.ArchiveMarketplaceListing,
  SuperAdminAuditAction.ResolveMarketplaceDispute,
  SuperAdminAuditAction.CreateAnnouncementDraft,
  SuperAdminAuditAction.PublishAnnouncement,
  SuperAdminAuditAction.ListFootprintAchievementPresentations,
  SuperAdminAuditAction.UpdateFootprintAchievementPresentation,
  SuperAdminAuditAction.UploadFootprintAchievementPresentationImage,
  SuperAdminAuditAction.ResetFootprintAchievementPresentation,
  SuperAdminAuditAction.CreateTenantObserveSession,
  SuperAdminAuditAction.GetTenantLivestockOverview,
  SuperAdminAuditAction.ListTenantLivestockProducts,
  SuperAdminAuditAction.GetTenantLivestockProductDetail,
]);

export const adminUserSchema = authUserSchema.extend({
  phone: authPhoneNumberSchema.nullable(),
  createdAt: z.string().datetime(),
});

export const adminTenantOwnerSchema = z.object({
  id: z.string().min(1),
  email: authEmailSchema,
  account: z.string().nullable(),
  name: z.string().nullable(),
  phone: authPhoneNumberSchema.nullable(),
  wechatId: authNullableWechatIdSchema,
});

export const adminTenantSubscriptionSummarySchema = z.object({
  plan: tenantSubscriptionPlanSchema,
  status: tenantSubscriptionStatusSchema,
  expiresAt: z.string().datetime().nullable(),
});

export const adminUserOwnedTenantSchema = z.object({
  id: z.string().min(1),
  slug: tenantSlugSchema,
  name: tenantNameSchema,
  createdAt: z.string().datetime(),
  lastActiveAt: z.string().datetime().nullable(),
  subscription: adminTenantSubscriptionSummarySchema,
});

export const adminUserMetricsSchema = z.object({
  tenantCount: z.number().int().nonnegative(),
  expiringTenantCount: z.number().int().nonnegative(),
  totalProducts: z.number().int().nonnegative(),
  totalSeries: z.number().int().nonnegative(),
  totalShares: z.number().int().nonnegative(),
  lastActiveAt: z.string().datetime().nullable(),
});

export const adminUserDetailSchema = adminUserSchema.extend({
  metrics: adminUserMetricsSchema,
  ownedTenants: z.array(adminUserOwnedTenantSchema),
});

export const adminTenantAutoTagKeySchema = z.enum([
  'high_activity',
  'low_activity',
  'silent',
  'expiring_soon',
  'frozen',
  'no_owner',
  'collaborative',
  'high_upload',
  'high_share',
  'high_storage',
]);

export const adminTenantAutoTagToneSchema = z.enum([
  'neutral',
  'accent',
  'success',
  'warning',
  'danger',
  'info',
]);

export const adminTenantAutoTagSchema = z.object({
  key: adminTenantAutoTagKeySchema,
  label: z.string().min(1),
  description: z.string().min(1),
  tone: adminTenantAutoTagToneSchema,
  priority: z.number().int().min(0),
});

export const adminTenantLoginMetricsSchema = z.object({
  totalLogins: z.number().int().nonnegative(),
  logins30d: z.number().int().nonnegative(),
  lastLoginAt: z.string().datetime().nullable(),
});

export const adminTenantBusinessMetricsSchema = z.object({
  activeDays30d: z.number().int().nonnegative(),
  lastBusinessActivityAt: z.string().datetime().nullable(),
  totalProducts: z.number().int().nonnegative(),
  totalSeries: z.number().int().nonnegative(),
  totalImages: z.number().int().nonnegative(),
  totalShares: z.number().int().nonnegative(),
  uploads30d: z.number().int().nonnegative(),
});

export const adminTenantRevenueMetricsSchema = z.object({
  paidOrderCount: z.number().int().nonnegative(),
  paidRevenueCents: z.number().int().nonnegative(),
  lastPaidAt: z.string().datetime().nullable(),
});

export const adminTenantActivityTrendItemSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  businessEvents: z.number().int().nonnegative(),
});

export const adminTenantSchema = tenantSchema.extend({
  createdAt: z.string().datetime(),
  lastLoginAt: z.string().datetime().nullable(),
  lastBusinessActivityAt: z.string().datetime().nullable(),
  lastActiveAt: z.string().datetime().nullable(),
  memberCount: z.number().int().nonnegative(),
  totalProducts: z.number().int().nonnegative().default(0),
  owner: adminTenantOwnerSchema.nullable().optional(),
  subscription: adminTenantSubscriptionSummarySchema.nullable().optional(),
  autoTags: z.array(adminTenantAutoTagSchema).default([]),
});

export const listAdminTenantsQuerySchema = z.object({
  search: z.string().trim().min(1).max(120).optional(),
});

export const listAdminTenantsResponseSchema = z.object({
  tenants: z.array(adminTenantSchema),
});

export const getAdminTenantResponseSchema = z.object({
  tenant: adminTenantSchema,
});

export const createAdminTenantObserveSessionRequestSchema = z
  .object({
    targetPath: z.string().trim().min(1).max(512).optional(),
  })
  .default({});

export const createAdminTenantObserveSessionResponseSchema = z.object({
  accessToken: z.string().min(1),
  tenant: tenantSchema,
  observeUrl: z.string().url(),
  expiresAt: z.string().datetime(),
});

export const createAdminTenantRequestSchema = z.object({
  slug: tenantSlugSchema,
  name: tenantNameSchema,
});

export const createAdminTenantResponseSchema = z.object({
  tenant: adminTenantSchema,
});

export const updateAdminTenantRequestSchema = z
  .object({
    slug: tenantSlugSchema.optional(),
    name: tenantNameSchema.optional(),
  })
  .refine((payload) => Boolean(payload.slug || payload.name), {
    message: 'Provide at least one tenant field to update.',
  });

export const updateAdminTenantResponseSchema = z.object({
  tenant: adminTenantSchema,
  auditLogId: z.string().min(1),
});

export const suspendAdminTenantRequestSchema = z.object({
  reason: z.string().trim().min(1).max(255),
});

export const suspendAdminTenantResponseSchema = z.object({
  subscription: tenantSubscriptionSchema,
  auditLogId: z.string().min(1),
});

export const reactivateAdminTenantResponseSchema = z.object({
  subscription: tenantSubscriptionSchema,
  auditLogId: z.string().min(1),
});

export const offboardAdminTenantRequestSchema = z.object({
  reason: z.string().trim().min(1).max(255),
  confirmTenantSlug: tenantSlugSchema,
});

export const offboardAdminTenantResponseSchema = z.object({
  subscription: tenantSubscriptionSchema,
  auditLogId: z.string().min(1),
});

export const listAdminUsersResponseSchema = z.object({
  users: z.array(adminUserSchema),
});

export const listAdminUsersQuerySchema = z.object({
  search: z.string().trim().min(1).max(120).optional(),
});

export const getAdminUserResponseSchema = z.object({
  user: adminUserDetailSchema,
});

export const updateAdminUserRequestSchema = z
  .object({
    email: authEmailSchema.optional(),
    account: authNullableAccountSchema.optional(),
    name: z.string().trim().max(120).nullable().optional(),
    phone: authPhoneNumberSchema.nullable().optional(),
    wechatId: authNullableWechatIdSchema.optional(),
  })
  .refine(
    (payload) =>
      Object.prototype.hasOwnProperty.call(payload, 'email') ||
      Object.prototype.hasOwnProperty.call(payload, 'account') ||
      Object.prototype.hasOwnProperty.call(payload, 'name') ||
      Object.prototype.hasOwnProperty.call(payload, 'phone') ||
      Object.prototype.hasOwnProperty.call(payload, 'wechatId'),
    {
      message: 'Provide at least one user field to update.',
    },
  );

export const updateAdminUserResponseSchema = z.object({
  user: adminUserSchema,
  auditLogId: z.string().min(1),
});

export const deleteAdminTenantRequestSchema = z.object({
  confirmTenantSlug: tenantSlugSchema,
});

export const deleteAdminTenantResponseSchema = z.object({
  tenantId: z.string().min(1),
  deleted: z.literal(true),
  auditLogId: z.string().min(1),
});

export const deleteAdminUserRequestSchema = z.object({}).default({});

export const deleteAdminUserResponseSchema = z.object({
  userId: z.string().min(1),
  deleted: z.literal(true),
  deletedTenantId: z.string().min(1).nullable(),
  deletedTenantSlug: tenantSlugSchema.nullable(),
  auditLogId: z.string().min(1),
});

export const adminTenantMemberSchema = z.object({
  tenantId: z.string().min(1),
  user: authUserSchema,
  role: tenantRoleSchema,
  joinedAt: z.string().datetime(),
});

export const listAdminTenantMembersQuerySchema = z.object({
  search: z.string().trim().min(1).max(120).optional(),
});

export const listAdminTenantMembersResponseSchema = z.object({
  tenantId: z.string().min(1),
  members: z.array(adminTenantMemberSchema),
});

export const upsertTenantMemberRequestSchema = z.object({
  email: authEmailSchema,
  role: tenantRoleSchema,
});

export const upsertTenantMemberResponseSchema = z.object({
  tenantId: z.string().min(1),
  user: authUserSchema,
  role: tenantRoleSchema,
  joinedAt: z.string().datetime(),
  created: z.boolean(),
  previousRole: tenantRoleSchema.nullable(),
  auditLogId: z.string().min(1),
});

export const deleteTenantMemberResponseSchema = z.object({
  tenantId: z.string().min(1),
  userId: z.string().min(1),
  removed: z.boolean(),
  previousRole: tenantRoleSchema.nullable(),
  auditLogId: z.string().min(1),
});

export const adminTenantLivestockRiskTagSchema = z.enum([
  'need_mating',
  'warning',
  'missing_image',
  'missing_lineage',
  'identity_review',
]);

export const adminTenantLivestockStatusSchema = z.enum([
  'normal',
  'need_mating',
  'warning',
  'identity_review',
]);

export const adminTenantLivestockSeriesOptionSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  productCount: z.number().int().nonnegative(),
});

export const adminTenantLivestockOverviewResponseSchema = z.object({
  tenantId: z.string().min(1),
  summary: z.object({
    totalProducts: z.number().int().nonnegative(),
    totalSeries: z.number().int().nonnegative(),
    totalImages: z.number().int().nonnegative(),
    eventCount30d: z.number().int().nonnegative(),
    needMatingCount: z.number().int().nonnegative(),
    warningCount: z.number().int().nonnegative(),
    missingImageCount: z.number().int().nonnegative(),
    withLineageCount: z.number().int().nonnegative(),
  }),
  seriesOptions: z.array(adminTenantLivestockSeriesOptionSchema),
});

export const listAdminTenantLivestockProductsQuerySchema = z.object({
  search: z.string().trim().min(1).max(120).optional(),
  sex: z.enum(['male', 'female', 'unknown']).optional(),
  type: z.string().trim().min(1).max(80).optional(),
  seriesId: z.string().trim().min(1).optional(),
  status: adminTenantLivestockStatusSchema.optional(),
  missingImages: z
    .union([z.literal('true'), z.literal('false')])
    .transform((value) => value === 'true')
    .optional(),
  hasLineage: z
    .union([z.literal('true'), z.literal('false')])
    .transform((value) => value === 'true')
    .optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

export const adminTenantLivestockListItemSchema = z.object({
  id: z.string().min(1),
  code: z.string().min(1).nullable(),
  name: z.string().min(1).nullable(),
  type: z.string().min(1),
  sex: z.string().min(1).nullable(),
  seriesId: z.string().min(1).nullable(),
  seriesName: z.string().min(1).nullable(),
  needMatingStatus: z.enum(['normal', 'need_mating', 'warning']).nullable(),
  requiresIdentityReview: z.boolean(),
  hasMainImage: z.boolean(),
  mainImageUrl: z.string().min(1).nullable(),
  imageCount: z.number().int().nonnegative(),
  hasLineage: z.boolean(),
  lastEventAt: z.string().datetime().nullable(),
  lineage: z.object({
    sireLabel: z.string().min(1).nullable(),
    damLabel: z.string().min(1).nullable(),
    mateLabel: z.string().min(1).nullable(),
  }),
  riskTags: z.array(adminTenantLivestockRiskTagSchema),
});

export const listAdminTenantLivestockProductsResponseSchema = z.object({
  tenantId: z.string().min(1),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().nonnegative(),
  totalPages: z.number().int().min(1),
  products: z.array(adminTenantLivestockListItemSchema),
});

const adminTenantLivestockImageSchema = z.object({
  id: z.string().min(1),
  url: z.string().min(1),
  isMain: z.boolean(),
  createdAt: z.string().datetime(),
});

const adminTenantLivestockRelatedProductSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
});

const adminTenantLivestockEventSchema = z.object({
  id: z.string().min(1),
  eventType: z.string().min(1),
  eventDate: z.string().datetime(),
  note: z.string().nullable(),
  assetCount: z.number().int().nonnegative(),
});

const adminTenantLivestockCertificateSchema = z.object({
  id: z.string().min(1),
  verifyId: z.string().min(1),
  status: z.string().min(1),
  issuedAt: z.string().datetime(),
  imageUrl: z.string().min(1),
});

const adminTenantLivestockCouplePhotoSchema = z.object({
  id: z.string().min(1),
  generatedAt: z.string().datetime(),
  imageUrl: z.string().min(1),
  isCurrent: z.boolean(),
});

const adminTenantLivestockSaleBatchSchema = z.object({
  id: z.string().min(1),
  batchNo: z.string().min(1),
  status: z.string().min(1),
  eventDateSnapshot: z.string().datetime(),
  priceLow: z.number().nullable(),
  priceHigh: z.number().nullable(),
});

export const adminTenantLivestockDetailResponseSchema = z.object({
  tenantId: z.string().min(1),
  product: z.object({
    id: z.string().min(1),
    code: z.string().min(1).nullable(),
    name: z.string().min(1).nullable(),
    description: z.string().nullable(),
    type: z.string().min(1),
    sex: z.string().min(1).nullable(),
    lineageType: z.string().min(1),
    crossLabel: z.string().min(1).nullable(),
    seriesId: z.string().min(1).nullable(),
    seriesName: z.string().min(1).nullable(),
    requiresIdentityReview: z.boolean(),
    excludeFromBreeding: z.boolean(),
    hasSample: z.boolean(),
    inStock: z.boolean(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    mainImageUrl: z.string().min(1).nullable(),
    images: z.array(adminTenantLivestockImageSchema),
    metrics: z.object({
      imageCount: z.number().int().nonnegative(),
      eventCount: z.number().int().nonnegative(),
      certificateCount: z.number().int().nonnegative(),
      couplePhotoCount: z.number().int().nonnegative(),
      saleBatchCount: z.number().int().nonnegative(),
    }),
    status: z.object({
      needMatingStatus: z.enum(['normal', 'need_mating', 'warning']).nullable(),
      lastEggAt: z.string().datetime().nullable(),
      lastMatingAt: z.string().datetime().nullable(),
      lastEventAt: z.string().datetime().nullable(),
    }),
    lineage: z.object({
      sire: adminTenantLivestockRelatedProductSchema.nullable(),
      dam: adminTenantLivestockRelatedProductSchema.nullable(),
      mate: adminTenantLivestockRelatedProductSchema.nullable(),
    }),
    recentEvents: z.array(adminTenantLivestockEventSchema),
    assets: z.object({
      certificates: z.array(adminTenantLivestockCertificateSchema),
      couplePhotos: z.array(adminTenantLivestockCouplePhotoSchema),
      saleBatches: z.array(adminTenantLivestockSaleBatchSchema),
    }),
    riskTags: z.array(adminTenantLivestockRiskTagSchema),
  }),
});

export const superAdminAuditLogSchema = z.object({
  id: z.string().min(1),
  actorUserId: z.string().min(1),
  actorUserEmail: authEmailSchema.nullable(),
  targetTenantId: z.string().min(1).nullable(),
  targetTenantSlug: tenantSlugSchema.nullable(),
  action: superAdminAuditActionSchema,
  metadata: z.unknown().nullable(),
  createdAt: z.string().datetime(),
});

export const listSuperAdminAuditLogsQuerySchema = z.object({
  tenantId: z.string().trim().min(1).optional(),
  actorUserId: z.string().trim().min(1).optional(),
  action: superAdminAuditActionSchema.optional(),
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

export const listSuperAdminAuditLogsResponseSchema = z.object({
  logs: z.array(superAdminAuditLogSchema),
  total: z.number().int().nonnegative(),
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  totalPages: z.number().int().min(1),
});

export const exportSuperAdminAuditLogsQuerySchema = z.object({
  tenantId: z.string().trim().min(1).optional(),
  actorUserId: z.string().trim().min(1).optional(),
  action: superAdminAuditActionSchema.optional(),
  from: z.string().datetime().optional(),
  to: z.string().datetime().optional(),
  limit: z.coerce.number().int().min(1).max(5000).default(2000),
});

export const adminActivityOverviewWindowSchema = z.enum(['7d', '30d']);

export const getAdminActivityOverviewQuerySchema = z.object({
  window: adminActivityOverviewWindowSchema.default('30d'),
});

export const adminActivityOverviewResponseSchema = z.object({
  generatedAt: z.string().datetime(),
  window: adminActivityOverviewWindowSchema,
  kpis: z.object({
    dau: z.number().int().nonnegative(),
    wau: z.number().int().nonnegative(),
    mau: z.number().int().nonnegative(),
    activeTenants7d: z.number().int().nonnegative(),
    tenantRetention7d: z.number().min(0).max(1),
  }),
  trend: z.array(
    z.object({
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      dau: z.number().int().nonnegative(),
      activeTenants: z.number().int().nonnegative(),
    }),
  ),
  definitions: z.object({
    activeTenant: z.string().min(1),
    tenantRetention7d: z.string().min(1),
  }),
});

export const adminUsageLimitStatusSchema = z.enum(['ok', 'near_limit', 'exceeded', 'unlimited']);
export const adminUsageMetricKeySchema = z.enum(['products', 'images', 'shares', 'storageBytes']);

export const adminUsageCountMetricSchema = z.object({
  used: z.number().int().nonnegative(),
  limit: z.number().int().nonnegative().nullable(),
  utilization: z.number().min(0).nullable(),
  status: adminUsageLimitStatusSchema,
});

export const adminUsageStorageMetricSchema = z.object({
  usedBytes: z.string().regex(/^\d+$/),
  limitBytes: z.string().regex(/^\d+$/).nullable(),
  utilization: z.number().min(0).nullable(),
  status: adminUsageLimitStatusSchema,
});

export const adminTenantUsageAlertSchema = z.object({
  metric: adminUsageMetricKeySchema,
  status: z.enum(['near_limit', 'exceeded']),
  message: z.string().min(1),
});

export const adminTenantUsageSchema = z.object({
  tenantId: z.string().min(1),
  tenantSlug: tenantSlugSchema,
  tenantName: tenantNameSchema,
  plan: tenantSubscriptionPlanSchema,
  subscriptionStatus: tenantSubscriptionStatusSchema,
  usage: z.object({
    products: adminUsageCountMetricSchema,
    images: adminUsageCountMetricSchema,
    shares: adminUsageCountMetricSchema,
    storageBytes: adminUsageStorageMetricSchema,
  }),
  alerts: z.array(adminTenantUsageAlertSchema),
  usageScore: z.number().nonnegative(),
});

export const getAdminUsageOverviewQuerySchema = z.object({
  topN: z.coerce.number().int().min(1).max(50).default(10),
});

export const adminUsageOverviewResponseSchema = z.object({
  generatedAt: z.string().datetime(),
  topN: z.number().int().min(1),
  summary: z.object({
    tenantCount: z.number().int().nonnegative(),
    totalProducts: z.number().int().nonnegative(),
    totalImages: z.number().int().nonnegative(),
    totalShares: z.number().int().nonnegative(),
    totalStorageBytes: z.string().regex(/^\d+$/),
    nearLimitTenantCount: z.number().int().nonnegative(),
    exceededTenantCount: z.number().int().nonnegative(),
  }),
  topTenants: z.array(adminTenantUsageSchema),
  definitions: z.object({
    score: z.string().min(1),
    nearLimit: z.string().min(1),
    exceeded: z.string().min(1),
  }),
});

export const getAdminTenantUsageResponseSchema = z.object({
  generatedAt: z.string().datetime(),
  tenant: adminTenantUsageSchema,
  definitions: z.object({
    products: z.string().min(1),
    images: z.string().min(1),
    shares: z.string().min(1),
    storageBytes: z.string().min(1),
    nearLimit: z.string().min(1),
    exceeded: z.string().min(1),
  }),
});

export const adminTenantInsightsSchema = z.object({
  tenant: adminTenantSchema,
  autoTags: z.array(adminTenantAutoTagSchema),
  loginMetrics: adminTenantLoginMetricsSchema,
  businessMetrics: adminTenantBusinessMetricsSchema,
  revenueMetrics: adminTenantRevenueMetricsSchema,
  usage: adminTenantUsageSchema,
  recentBusinessLogs: z.array(auditLogSchema),
  activityTrend: z.array(adminTenantActivityTrendItemSchema),
});

export const getAdminTenantInsightsResponseSchema = z.object({
  insights: adminTenantInsightsSchema,
});

export const adminRevenueOverviewWindowSchema = z.enum(['30d', '90d']);

export const getAdminRevenueOverviewQuerySchema = z.object({
  window: adminRevenueOverviewWindowSchema.default('30d'),
});

export const adminRevenueOverviewResponseSchema = z.object({
  generatedAt: z.string().datetime(),
  window: adminRevenueOverviewWindowSchema,
  kpis: z.object({
    activeSubscriptionTenantCount: z.number().int().nonnegative(),
    payingTenantCount: z.number().int().nonnegative(),
    paidOrderCount: z.number().int().nonnegative(),
    paidRevenueCents: z.number().int().nonnegative(),
    upgradeEvents: z.number().int().nonnegative(),
    downgradeEvents: z.number().int().nonnegative(),
    churnEvents: z.number().int().nonnegative(),
    reactivationEvents: z.number().int().nonnegative(),
  }),
  planBreakdown: z.array(
    z.object({
      plan: tenantSubscriptionPlanSchema,
      payingTenantCount: z.number().int().nonnegative(),
      paidOrderCount: z.number().int().nonnegative(),
      paidRevenueCents: z.number().int().nonnegative(),
    }),
  ),
  trend: z.array(
    z.object({
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
      upgrades: z.number().int().nonnegative(),
      downgrades: z.number().int().nonnegative(),
      churns: z.number().int().nonnegative(),
      reactivations: z.number().int().nonnegative(),
    }),
  ),
  priceBookMonthlyCents: z.object({
    FREE: z.number().int().nonnegative(),
    BASIC: z.number().int().nonnegative(),
    PRO: z.number().int().nonnegative(),
  }),
  definitions: z.object({
    paidRevenue: z.string().min(1),
    paidOrders: z.string().min(1),
    payingTenants: z.string().min(1),
    activeSubscriptions: z.string().min(1),
    trend: z.string().min(1),
  }),
});

export type SuperAdminAuditActionType =
  (typeof SuperAdminAuditAction)[keyof typeof SuperAdminAuditAction];
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
export type CreateAdminTenantObserveSessionRequest = z.infer<
  typeof createAdminTenantObserveSessionRequestSchema
>;
export type CreateAdminTenantObserveSessionResponse = z.infer<
  typeof createAdminTenantObserveSessionResponseSchema
>;
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
export type AdminTenantLivestockSeriesOption = z.infer<
  typeof adminTenantLivestockSeriesOptionSchema
>;
export type AdminTenantLivestockOverviewResponse = z.infer<
  typeof adminTenantLivestockOverviewResponseSchema
>;
export type ListAdminTenantLivestockProductsQuery = z.infer<
  typeof listAdminTenantLivestockProductsQuerySchema
>;
export type AdminTenantLivestockListItem = z.infer<typeof adminTenantLivestockListItemSchema>;
export type ListAdminTenantLivestockProductsResponse = z.infer<
  typeof listAdminTenantLivestockProductsResponseSchema
>;
export type AdminTenantLivestockDetailResponse = z.infer<
  typeof adminTenantLivestockDetailResponseSchema
>;
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
