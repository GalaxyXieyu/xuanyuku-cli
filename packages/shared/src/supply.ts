import { z } from 'zod';

import { subscriptionOrderWechatJsapiParamsSchema } from './subscription-order';

export const supplyProductStatusSchema = z.enum(['DRAFT', 'ACTIVE', 'INACTIVE', 'ARCHIVED']);
export const supplyProductSaleTypeSchema = z.enum([
  'CONSULT_ONLY',
  'IN_STOCK',
  'PREORDER',
  'DEPOSIT',
]);
export const supplyProductShippingTypeSchema = z.enum([
  'FREE',
  'FIXED_FEE',
  'COLLECT',
  'CONTACT_US',
]);
export const supplyProductInventoryPolicySchema = z.enum([
  'DENY_WHEN_OUT_OF_STOCK',
  'ALLOW_BACKORDER',
  'CONTACT_US',
]);
export const supplyOrderStatusSchema = z.enum([
  'PENDING_PAYMENT',
  'PAID',
  'PROCESSING',
  'SHIPPED',
  'COMPLETED',
  'CANCELLED',
  'REFUND_REQUESTED',
  'REFUNDED',
  'CLOSED',
]);
export const supplyPaymentProviderSchema = z.enum(['WECHAT', 'ALIPAY']);
export const supplyPaymentChannelSchema = z.enum(['JSAPI', 'MINIAPP', 'H5']);
export const supplyRefundStatusSchema = z.enum([
  'REQUESTED',
  'REVIEWING',
  'APPROVED',
  'REJECTED',
  'REFUNDED',
  'CLOSED',
]);
export const supplySupportTicketStatusSchema = z.enum([
  'OPEN',
  'IN_PROGRESS',
  'WAITING_USER',
  'RESOLVED',
  'CLOSED',
]);

export const supplyAddressSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  userId: z.string().min(1).nullable(),
  recipientName: z.string().trim().min(1).max(80),
  phone: z.string().trim().min(1).max(32),
  province: z.string().trim().min(1).max(80),
  city: z.string().trim().min(1).max(80),
  district: z.string().trim().min(1).max(80),
  detailAddress: z.string().trim().min(1).max(240),
  postalCode: z.string().trim().min(1).max(20).nullable(),
  isDefault: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const supplyCategorySchema = z.object({
  id: z.string().min(1),
  code: z.string().trim().min(1).max(64),
  name: z.string().trim().min(1).max(120),
  sortOrder: z.number().int().min(0),
  isActive: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const supplyProductSchema = z.object({
  id: z.string().min(1),
  categoryId: z.string().min(1).nullable(),
  categoryCode: z.string().nullable(),
  categoryName: z.string().nullable(),
  code: z.string().trim().min(1).max(64),
  title: z.string().trim().min(1).max(120),
  subtitle: z.string().trim().max(180).nullable(),
  description: z.string().trim().max(5000).nullable(),
  coverImageUrl: z.string().url().nullable(),
  images: z.array(z.string().url()).max(12),
  priceCents: z.number().int().nonnegative(),
  compareAtPriceCents: z.number().int().nonnegative().nullable(),
  currency: z.string().trim().length(3),
  status: supplyProductStatusSchema,
  saleType: supplyProductSaleTypeSchema,
  purchaseNotice: z.string().trim().max(2000).nullable(),
  shippingType: supplyProductShippingTypeSchema,
  shippingFeeCents: z.number().int().nonnegative().nullable(),
  inventoryPolicy: supplyProductInventoryPolicySchema,
  maxPurchaseQuantity: z.number().int().positive().nullable(),
  hasVariants: z.boolean(),
  salesLabel: z.string().trim().max(80).nullable(),
  servicePromise: z.string().trim().max(500).nullable(),
  isFeatured: z.boolean(),
  sortOrder: z.number().int().min(0),
  stockQuantity: z.number().int().nullable(),
  restockNote: z.string().trim().max(240).nullable(),
  consultationLabel: z.string().trim().max(80).nullable(),
  detailHighlights: z.array(z.string().trim().min(1).max(120)).max(12),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const adminSupplyProductSchema = supplyProductSchema.extend({
  merchantRemark: z.string().trim().max(1000).nullable(),
  costCents: z.number().int().nonnegative().nullable(),
});

export const adminSupplyProductImageAssetSchema = z.object({
  key: z.string().trim().min(1),
  url: z.string().url(),
  contentType: z.string().trim().min(1).nullable(),
  sizeBytes: z.string().regex(/^\d+$/),
});

export const supplySupportTicketSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  orderId: z.string().min(1).nullable(),
  orderNo: z.string().trim().min(1).max(80).nullable(),
  productId: z.string().min(1).nullable(),
  productTitle: z.string().trim().min(1).max(120).nullable(),
  subject: z.string().trim().min(1).max(120),
  content: z.string().trim().min(1).max(2000),
  status: supplySupportTicketStatusSchema,
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  resolvedAt: z.string().datetime().nullable(),
});

export const adminSupplySupportTicketSchema = supplySupportTicketSchema.extend({
  tenantSlug: z.string().trim().min(1).max(80),
  tenantName: z.string().trim().min(1).max(120),
  userId: z.string().min(1).nullable(),
  userLabel: z.string().trim().min(1).max(255).nullable(),
});

export const supplyRefundRequestSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  orderId: z.string().min(1),
  orderNo: z.string().trim().min(1).max(80).nullable(),
  orderItemId: z.string().min(1).nullable(),
  supportTicketId: z.string().min(1).nullable(),
  status: supplyRefundStatusSchema,
  reason: z.string().trim().min(1).max(240),
  requestedAmountCents: z.number().int().nonnegative().nullable(),
  resolvedAmountCents: z.number().int().nonnegative().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  resolvedAt: z.string().datetime().nullable(),
});

export const supplyOrderItemSchema = z.object({
  id: z.string().min(1),
  productId: z.string().min(1).nullable(),
  productCodeSnapshot: z.string().trim().min(1).max(64),
  productTitleSnapshot: z.string().trim().min(1).max(120),
  productCoverImageUrl: z.string().url().nullable(),
  quantity: z.number().int().positive(),
  unitPriceCents: z.number().int().nonnegative(),
  totalAmountCents: z.number().int().nonnegative(),
});

export const supplyShipmentSchema = z.object({
  id: z.string().min(1),
  carrierCode: z.string().trim().min(1).max(64).nullable(),
  carrierName: z.string().trim().min(1).max(80).nullable(),
  trackingNo: z.string().trim().min(1).max(120).nullable(),
  statusSummary: z.string().trim().min(1).max(120).nullable(),
  providerCode: z.string().trim().min(1).max(64).nullable(),
  shippedAt: z.string().datetime().nullable(),
  deliveredAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const supplyShipmentTrackingEventSchema = z.object({
  eventAt: z.string().datetime().nullable(),
  rawTime: z.string().trim().min(1).max(120).nullable(),
  statusCode: z.string().trim().min(1).max(64).nullable(),
  statusLabel: z.string().trim().min(1).max(120).nullable(),
  description: z.string().trim().min(1).max(500),
  location: z.string().trim().min(1).max(240).nullable(),
});

export const supplyShipmentTrackingSchema = z.object({
  shipmentId: z.string().min(1),
  providerCode: z.string().trim().min(1).max(64).nullable(),
  providerName: z.string().trim().min(1).max(120).nullable(),
  carrierCode: z.string().trim().min(1).max(64).nullable(),
  carrierName: z.string().trim().min(1).max(80).nullable(),
  trackingNo: z.string().trim().min(1).max(120).nullable(),
  statusSummary: z.string().trim().min(1).max(240).nullable(),
  stateCode: z.string().trim().min(1).max(64).nullable(),
  stateLabel: z.string().trim().min(1).max(120).nullable(),
  providerConfigured: z.boolean(),
  providerMessage: z.string().trim().min(1).max(500).nullable(),
  queriedAt: z.string().datetime(),
  events: z.array(supplyShipmentTrackingEventSchema).max(200),
});

export const supplyOrderSchema = z.object({
  id: z.string().min(1),
  orderNo: z.string().trim().min(1).max(80),
  tenantId: z.string().min(1),
  userId: z.string().min(1).nullable(),
  addressId: z.string().min(1).nullable(),
  address: supplyAddressSchema.nullable(),
  paymentProvider: supplyPaymentProviderSchema.nullable(),
  paymentChannel: supplyPaymentChannelSchema.nullable(),
  paymentId: z.string().trim().min(1).max(120).nullable(),
  paymentPrepayId: z.string().trim().min(1).max(120).nullable(),
  paymentExpiresAt: z.string().datetime().nullable(),
  status: supplyOrderStatusSchema,
  statusReason: z.string().trim().min(1).max(255).nullable(),
  totalAmountCents: z.number().int().nonnegative(),
  currency: z.string().trim().length(3),
  itemCount: z.number().int().nonnegative(),
  contactNote: z.string().trim().min(1).max(240).nullable(),
  items: z.array(supplyOrderItemSchema).max(50),
  shipments: z.array(supplyShipmentSchema).max(20),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  paidAt: z.string().datetime().nullable(),
  cancelledAt: z.string().datetime().nullable(),
  completedAt: z.string().datetime().nullable(),
});

export const adminSupplyRefundRequestSchema = supplyRefundRequestSchema.extend({
  tenantSlug: z.string().trim().min(1).max(80),
  tenantName: z.string().trim().min(1).max(120),
  userId: z.string().min(1).nullable(),
  userLabel: z.string().trim().min(1).max(255).nullable(),
});

export const adminSupplyOrderSchema = supplyOrderSchema.extend({
  tenantSlug: z.string().trim().min(1).max(80),
  tenantName: z.string().trim().min(1).max(120),
  userId: z.string().min(1).nullable(),
  userLabel: z.string().trim().min(1).max(255).nullable(),
});

export const supplyOrderBoundarySchema = z.object({
  orderStatus: supplyOrderStatusSchema,
  refundStatus: supplyRefundStatusSchema.nullable(),
  supportTicketStatus: supplySupportTicketStatusSchema.nullable(),
});

export const listSupplyProductsResponseSchema = z.object({
  products: z.array(supplyProductSchema).max(100),
});

export const getSupplyProductResponseSchema = z.object({
  product: supplyProductSchema,
  orderBoundary: supplyOrderBoundarySchema,
});

export const listSupplyAddressesResponseSchema = z.object({
  addresses: z.array(supplyAddressSchema).max(20),
});

export const createSupplyAddressRequestSchema = z.object({
  recipientName: z.string().trim().min(1).max(80),
  phone: z.string().trim().min(1).max(32),
  province: z.string().trim().min(1).max(80),
  city: z.string().trim().min(1).max(80),
  district: z.string().trim().min(1).max(80),
  detailAddress: z.string().trim().min(1).max(240),
  postalCode: z.string().trim().max(20).nullish(),
  isDefault: z.boolean().default(false),
});

export const createSupplyAddressResponseSchema = z.object({
  address: supplyAddressSchema,
});

export const updateSupplyAddressRequestSchema = z.object({
  recipientName: z.string().trim().min(1).max(80).optional(),
  phone: z.string().trim().min(1).max(32).optional(),
  province: z.string().trim().min(1).max(80).optional(),
  city: z.string().trim().min(1).max(80).optional(),
  district: z.string().trim().min(1).max(80).optional(),
  detailAddress: z.string().trim().min(1).max(240).optional(),
  postalCode: z.string().trim().max(20).nullish(),
  isDefault: z.boolean().optional(),
});

export const updateSupplyAddressResponseSchema = z.object({
  address: supplyAddressSchema,
});

export const deleteSupplyAddressResponseSchema = z.object({
  ok: z.literal(true),
});

export const supplyOrderCreateItemSchema = z.object({
  productId: z.string().trim().min(1),
  quantity: z.number().int().positive().max(99),
});

export const listSupplyOrdersResponseSchema = z.object({
  orders: z.array(supplyOrderSchema).max(100),
});

export const getSupplyOrderResponseSchema = z.object({
  order: supplyOrderSchema,
});

export const createSupplyOrderRequestSchema = z.object({
  addressId: z.string().trim().min(1),
  contactNote: z.string().trim().max(240).nullish(),
  items: z.array(supplyOrderCreateItemSchema).min(1).max(20),
});

export const createSupplyOrderResponseSchema = z.object({
  order: supplyOrderSchema,
});

export const paySupplyOrderRequestSchema = z.object({
  paymentChannel: supplyPaymentChannelSchema.default('MINIAPP'),
});

export const paySupplyOrderResponseSchema = z.object({
  order: supplyOrderSchema,
  jsapiParams: subscriptionOrderWechatJsapiParamsSchema,
});

export const trackSupplyOrderPaymentFailureRequestSchema = z.object({
  sourcePath: z.string().trim().min(1).max(255),
  entryPoint: z.string().trim().min(1).max(64),
  reason: z.string().trim().min(1).max(120),
  result: z.string().trim().min(1).max(2000),
  rawError: z.string().trim().min(1).max(4000).optional(),
});

export const trackSupplyOrderPaymentFailureResponseSchema = z.object({
  recorded: z.literal(true),
});

export const cancelSupplyOrderResponseSchema = z.object({
  order: supplyOrderSchema,
});

export const listSupplySupportTicketsResponseSchema = z.object({
  supportTickets: z.array(supplySupportTicketSchema).max(100),
});

export const createSupplySupportTicketRequestSchema = z.object({
  productId: z.string().trim().min(1).optional(),
  orderId: z.string().trim().min(1).optional(),
  subject: z.string().trim().min(1).max(120).optional(),
  content: z.string().trim().min(1).max(2000),
});

export const createSupplySupportTicketResponseSchema = z.object({
  supportTicket: supplySupportTicketSchema,
});

export const listSupplyRefundRequestsResponseSchema = z.object({
  refundRequests: z.array(supplyRefundRequestSchema).max(100),
});

export const createSupplyRefundRequestRequestSchema = z.object({
  orderItemId: z.string().trim().min(1).optional(),
  supportTicketId: z.string().trim().min(1).optional(),
  reason: z.string().trim().min(1).max(240),
  requestedAmountCents: z.number().int().nonnegative().optional().nullable(),
});

export const createSupplyRefundRequestResponseSchema = z.object({
  refundRequest: supplyRefundRequestSchema,
});

export const listAdminSupplyProductsQuerySchema = z.object({
  tenantId: z.string().trim().min(1).optional(),
});

export const listAdminSupplyProductsResponseSchema = z.object({
  categories: z.array(supplyCategorySchema).max(100),
  products: z.array(adminSupplyProductSchema).max(200),
});

export const listAdminSupplySupportTicketsResponseSchema = z.object({
  supportTickets: z.array(adminSupplySupportTicketSchema).max(200),
});

export const listAdminSupplyRefundRequestsResponseSchema = z.object({
  refundRequests: z.array(adminSupplyRefundRequestSchema).max(200),
});

export const listAdminSupplyOrdersResponseSchema = z.object({
  orders: z.array(adminSupplyOrderSchema).max(200),
});

export const updateAdminSupplySupportTicketRequestSchema = z.object({
  status: supplySupportTicketStatusSchema,
});

export const updateAdminSupplySupportTicketResponseSchema = z.object({
  supportTicket: adminSupplySupportTicketSchema,
});

export const updateAdminSupplyRefundRequestRequestSchema = z.object({
  status: supplyRefundStatusSchema,
  resolvedAmountCents: z.number().int().nonnegative().nullable().optional(),
});

export const updateAdminSupplyRefundRequestResponseSchema = z.object({
  refundRequest: adminSupplyRefundRequestSchema,
});

export const createAdminSupplyShipmentRequestSchema = z.object({
  carrierCode: z.string().trim().min(1).max(64),
  carrierName: z.string().trim().min(1).max(80),
  trackingNo: z.string().trim().min(6).max(120),
  providerCode: z.string().trim().max(64).nullish(),
  shippedAt: z.string().datetime().nullish(),
  statusSummary: z.string().trim().max(120).nullish(),
});

export const createAdminSupplyShipmentResponseSchema = z.object({
  order: adminSupplyOrderSchema,
  shipment: supplyShipmentSchema,
});

export const listSupplyShipmentTrackingResponseSchema = z.object({
  tracking: z.array(supplyShipmentTrackingSchema).max(20),
});

export const createAdminSupplyProductRequestSchema = z.object({
  categoryCode: z.string().trim().min(1).max(64),
  categoryName: z.string().trim().min(1).max(120),
  code: z.string().trim().min(1).max(64),
  title: z.string().trim().min(1).max(120),
  subtitle: z.string().trim().max(180).nullish(),
  description: z.string().trim().max(5000).nullish(),
  coverImageUrl: z.string().url().nullish(),
  images: z.array(z.string().url()).max(12).default([]),
  priceCents: z.number().int().nonnegative(),
  compareAtPriceCents: z.number().int().nonnegative().nullish(),
  currency: z.string().trim().length(3).default('CNY'),
  status: supplyProductStatusSchema.default('DRAFT'),
  saleType: supplyProductSaleTypeSchema.default('CONSULT_ONLY'),
  purchaseNotice: z.string().trim().max(2000).nullish(),
  shippingType: supplyProductShippingTypeSchema.default('CONTACT_US'),
  shippingFeeCents: z.number().int().nonnegative().nullish(),
  inventoryPolicy: supplyProductInventoryPolicySchema.default('CONTACT_US'),
  maxPurchaseQuantity: z.number().int().positive().nullish(),
  hasVariants: z.boolean().default(false),
  merchantRemark: z.string().trim().max(1000).nullish(),
  costCents: z.number().int().nonnegative().nullish(),
  salesLabel: z.string().trim().max(80).nullish(),
  servicePromise: z.string().trim().max(500).nullish(),
  isFeatured: z.boolean().default(false),
  sortOrder: z.number().int().min(0).default(0),
  stockQuantity: z.number().int().optional().nullable(),
  restockNote: z.string().trim().max(240).nullish(),
  consultationLabel: z.string().trim().max(80).nullish(),
  detailHighlights: z.array(z.string().trim().min(1).max(120)).max(12).default([]),
});

export const updateAdminSupplyProductRequestSchema = createAdminSupplyProductRequestSchema.partial();

export const createAdminSupplyProductResponseSchema = z.object({
  product: adminSupplyProductSchema,
});

export const updateAdminSupplyProductResponseSchema = z.object({
  product: adminSupplyProductSchema,
});

export const deleteAdminSupplyProductResponseSchema = z.object({
  deletedProductId: z.string().min(1),
});

export const uploadAdminSupplyProductImageResponseSchema = z.object({
  asset: adminSupplyProductImageAssetSchema,
});

export type SupplyProductStatus = z.infer<typeof supplyProductStatusSchema>;
export type SupplyProductSaleType = z.infer<typeof supplyProductSaleTypeSchema>;
export type SupplyProductShippingType = z.infer<typeof supplyProductShippingTypeSchema>;
export type SupplyProductInventoryPolicy = z.infer<typeof supplyProductInventoryPolicySchema>;
export type SupplyOrderStatus = z.infer<typeof supplyOrderStatusSchema>;
export type SupplyPaymentProvider = z.infer<typeof supplyPaymentProviderSchema>;
export type SupplyPaymentChannel = z.infer<typeof supplyPaymentChannelSchema>;
export type SupplyRefundStatus = z.infer<typeof supplyRefundStatusSchema>;
export type SupplySupportTicketStatus = z.infer<typeof supplySupportTicketStatusSchema>;
export type SupplyAddress = z.infer<typeof supplyAddressSchema>;
export type SupplyCategory = z.infer<typeof supplyCategorySchema>;
export type SupplyProduct = z.infer<typeof supplyProductSchema>;
export type AdminSupplyProduct = z.infer<typeof adminSupplyProductSchema>;
export type AdminSupplySupportTicket = z.infer<typeof adminSupplySupportTicketSchema>;
export type AdminSupplyRefundRequest = z.infer<typeof adminSupplyRefundRequestSchema>;
export type AdminSupplyOrder = z.infer<typeof adminSupplyOrderSchema>;
export type SupplyOrderItem = z.infer<typeof supplyOrderItemSchema>;
export type SupplyShipment = z.infer<typeof supplyShipmentSchema>;
export type SupplyShipmentTrackingEvent = z.infer<typeof supplyShipmentTrackingEventSchema>;
export type SupplyShipmentTracking = z.infer<typeof supplyShipmentTrackingSchema>;
export type SupplyOrder = z.infer<typeof supplyOrderSchema>;
export type SupplySupportTicket = z.infer<typeof supplySupportTicketSchema>;
export type SupplyRefundRequest = z.infer<typeof supplyRefundRequestSchema>;
export type SupplyOrderBoundary = z.infer<typeof supplyOrderBoundarySchema>;
export type ListSupplyProductsResponse = z.infer<typeof listSupplyProductsResponseSchema>;
export type GetSupplyProductResponse = z.infer<typeof getSupplyProductResponseSchema>;
export type ListSupplyAddressesResponse = z.infer<typeof listSupplyAddressesResponseSchema>;
export type CreateSupplyAddressRequest = z.infer<typeof createSupplyAddressRequestSchema>;
export type CreateSupplyAddressResponse = z.infer<typeof createSupplyAddressResponseSchema>;
export type UpdateSupplyAddressRequest = z.infer<typeof updateSupplyAddressRequestSchema>;
export type UpdateSupplyAddressResponse = z.infer<typeof updateSupplyAddressResponseSchema>;
export type DeleteSupplyAddressResponse = z.infer<typeof deleteSupplyAddressResponseSchema>;
export type SupplyOrderCreateItem = z.infer<typeof supplyOrderCreateItemSchema>;
export type ListSupplyOrdersResponse = z.infer<typeof listSupplyOrdersResponseSchema>;
export type GetSupplyOrderResponse = z.infer<typeof getSupplyOrderResponseSchema>;
export type CreateSupplyOrderRequest = z.infer<typeof createSupplyOrderRequestSchema>;
export type CreateSupplyOrderResponse = z.infer<typeof createSupplyOrderResponseSchema>;
export type PaySupplyOrderRequest = z.infer<typeof paySupplyOrderRequestSchema>;
export type PaySupplyOrderResponse = z.infer<typeof paySupplyOrderResponseSchema>;
export type TrackSupplyOrderPaymentFailureRequest = z.infer<
  typeof trackSupplyOrderPaymentFailureRequestSchema
>;
export type TrackSupplyOrderPaymentFailureResponse = z.infer<
  typeof trackSupplyOrderPaymentFailureResponseSchema
>;
export type CancelSupplyOrderResponse = z.infer<typeof cancelSupplyOrderResponseSchema>;
export type ListSupplySupportTicketsResponse = z.infer<typeof listSupplySupportTicketsResponseSchema>;
export type CreateSupplySupportTicketRequest = z.infer<typeof createSupplySupportTicketRequestSchema>;
export type CreateSupplySupportTicketResponse = z.infer<typeof createSupplySupportTicketResponseSchema>;
export type ListSupplyRefundRequestsResponse = z.infer<typeof listSupplyRefundRequestsResponseSchema>;
export type CreateSupplyRefundRequestRequest = z.infer<typeof createSupplyRefundRequestRequestSchema>;
export type CreateSupplyRefundRequestResponse = z.infer<typeof createSupplyRefundRequestResponseSchema>;
export type ListAdminSupplyProductsQuery = z.infer<typeof listAdminSupplyProductsQuerySchema>;
export type ListAdminSupplyProductsResponse = z.infer<typeof listAdminSupplyProductsResponseSchema>;
export type ListAdminSupplySupportTicketsResponse = z.infer<typeof listAdminSupplySupportTicketsResponseSchema>;
export type ListAdminSupplyRefundRequestsResponse = z.infer<typeof listAdminSupplyRefundRequestsResponseSchema>;
export type ListAdminSupplyOrdersResponse = z.infer<typeof listAdminSupplyOrdersResponseSchema>;
export type UpdateAdminSupplySupportTicketRequest = z.infer<typeof updateAdminSupplySupportTicketRequestSchema>;
export type UpdateAdminSupplySupportTicketResponse = z.infer<typeof updateAdminSupplySupportTicketResponseSchema>;
export type UpdateAdminSupplyRefundRequestRequest = z.infer<typeof updateAdminSupplyRefundRequestRequestSchema>;
export type UpdateAdminSupplyRefundRequestResponse = z.infer<typeof updateAdminSupplyRefundRequestResponseSchema>;
export type CreateAdminSupplyShipmentRequest = z.infer<typeof createAdminSupplyShipmentRequestSchema>;
export type CreateAdminSupplyShipmentResponse = z.infer<typeof createAdminSupplyShipmentResponseSchema>;
export type ListSupplyShipmentTrackingResponse = z.infer<typeof listSupplyShipmentTrackingResponseSchema>;
export type CreateAdminSupplyProductRequest = z.infer<typeof createAdminSupplyProductRequestSchema>;
export type UpdateAdminSupplyProductRequest = z.infer<typeof updateAdminSupplyProductRequestSchema>;
export type CreateAdminSupplyProductResponse = z.infer<typeof createAdminSupplyProductResponseSchema>;
export type UpdateAdminSupplyProductResponse = z.infer<typeof updateAdminSupplyProductResponseSchema>;
export type DeleteAdminSupplyProductResponse = z.infer<typeof deleteAdminSupplyProductResponseSchema>;
export type AdminSupplyProductImageAsset = z.infer<typeof adminSupplyProductImageAssetSchema>;
export type UploadAdminSupplyProductImageResponse = z.infer<typeof uploadAdminSupplyProductImageResponseSchema>;
