// CLI client library - no CLI/console side effects

// Export authentication layer
export { AuthedContext, createAuthContext } from './client/context';
export { passwordLogin, switchTenant, updateProfileFromAuth, refreshAccessToken, logout } from './client/auth';
export { createApiKey, listApiKeys, revokeApiKey, type ApiKeySummary, type CreateApiKeyResult } from './client/apikeys';

// Export error handling
export { ApiError, describeError } from './client/errors';

// Export HTTP layer
export { request, requestBinary, type BinaryResponse } from './client/http';

// Export credential persistence
export { loadProfile, saveProfile, listProfiles, removeProfile, clearProfileToken } from './client/profile-store';

// Export configuration
export { resolveApiBase, loadGlobalConfig, saveGlobalConfig } from './client/config';

// Export domain-specific client functions
export { createShare } from './client/shares';
export {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  addProductEvent,
  listProductEvents,
  updateProductEvent,
  deleteProductEvent,
  uploadProductImage,
  listProductImages,
  setMainProductImage,
  deleteProductImage,
  reorderProductImages,
  listProductGallery,
  createMatingRecord,
  createEggRecord,
  getMatingHistory,
  getFamilyTree,
} from './client/products';
export { parseIntake, submitIntake, submitIntakeWithImages } from './client/ai-assistant';
export {
  listKeywords,
  getKeywordDetail,
  createKeyword,
  updateKeyword,
  batchUpsertSnapshots,
  listPriceSnapshots,
  listReviewQueue,
  approveReview,
  rejectReview,
  publishKeyword,
  listPublishHistory,
  getMarketOverview,
} from './client/market-intelligence';
export { listSaleBatches, createSaleBatch, createSaleAllocation } from './client/sales';
export {
  listFeaturedProducts,
  addFeaturedProduct,
  removeFeaturedProduct,
  reorderFeaturedProducts,
} from './client/featured-products';
export {
  listSeries,
  createSeries,
  getSeries,
  updateSeries,
  deleteSeries,
  reorderSeries,
} from './client/series';
export {
  getDashboardOverview,
  listProductsPublicClicks,
  getProductPublicClicks,
} from './client/stats';
export {
  getAdminActivityOverview,
  getAdminUsageOverview,
  getAdminRevenueOverview,
  getAdminTenantLivestockOverview,
} from './client/admin-analytics';
export {
  listAdminGuiquanPosts,
  getAdminGuiquanPost,
  createAdminGuiquanPost,
  updateAdminGuiquanPost,
  submitAdminGuiquanPost,
  publishAdminGuiquanPost,
  rejectAdminGuiquanPost,
  archiveAdminGuiquanPost,
  updateAdminGuiquanCommentStatus,
  updateAdminGuiquanReportStatus,
} from './client/guiquan-community';
export {
  listAdminUsers,
  getAdminUser,
  setAdminUserSuperAdmin,
  listAdminTenantMembers,
  upsertAdminTenantMember,
  removeAdminTenantMember,
} from './client/admin-users';
export {
  listAnnouncements,
  createAnnouncementDraft,
  publishAnnouncement,
} from './client/announcements';
export {
  getCertificateEligibility,
  previewCertificate,
  confirmCertificate,
  listCertificates,
  listCertificateCenter,
  voidCertificate,
  reissueCertificatePreview,
  reissueCertificateConfirm,
  downloadCertificateContent,
  generateCouplePhoto,
  getCurrentCouplePhoto,
  listCouplePhotoHistory,
  downloadCouplePhotoContent,
  uploadSaleSubjectMedia,
} from './client/certificates';
export {
  getShareMiniappUrlLink,
  downloadShareQrCode,
  downloadShareQrLabelCard,
} from './client/share-assets';

// XuanyukuClient facade for common operations
import type { z } from 'zod';
import { aiProductIntakeSubmitRequestSchema } from '@xuanyuku/shared';
import { AuthedContext } from './client/context';
import * as shares from './client/shares';
import * as products from './client/products';
import * as ai from './client/ai-assistant';
import * as market from './client/market-intelligence';
import * as sales from './client/sales';
import * as featured from './client/featured-products';
import * as series from './client/series';
import * as stats from './client/stats';
import * as adminAnalytics from './client/admin-analytics';
import * as guiquanCommunity from './client/guiquan-community';
import * as announcements from './client/announcements';
import * as certificates from './client/certificates';

/**
 * XuanyukuClient provides a high-level interface for programmatic access to all Xuanyuku CLI operations
 */
export class XuanyukuClient {
  constructor(private ctx: AuthedContext) {}

  // Share operations
  createShare = (payload: Parameters<typeof shares.createShare>[1]) =>
    shares.createShare(this.ctx, payload);

  // Product operations
  listProducts = (query?: Parameters<typeof products.listProducts>[1]) =>
    products.listProducts(this.ctx, query);

  getProduct = (productId: string) =>
    products.getProduct(this.ctx, productId);

  createProduct = (payload: Parameters<typeof products.createProduct>[1]) =>
    products.createProduct(this.ctx, payload);

  updateProduct = (productId: string, payload: Parameters<typeof products.updateProduct>[2]) =>
    products.updateProduct(this.ctx, productId, payload);

  deleteProduct = (productId: string) =>
    products.deleteProduct(this.ctx, productId);

  addProductEvent = (productId: string, payload: Parameters<typeof products.addProductEvent>[2]) =>
    products.addProductEvent(this.ctx, productId, payload);

  listProductEvents = (productId: string) =>
    products.listProductEvents(this.ctx, productId);

  updateProductEvent = (productId: string, eventId: string, payload: Parameters<typeof products.updateProductEvent>[3]) =>
    products.updateProductEvent(this.ctx, productId, eventId, payload);

  deleteProductEvent = (productId: string, eventId: string) =>
    products.deleteProductEvent(this.ctx, productId, eventId);

  uploadProductImage = (productId: string, filePath: string) =>
    products.uploadProductImage(this.ctx, productId, filePath);

  listProductImages = (productId: string) =>
    products.listProductImages(this.ctx, productId);

  setMainProductImage = (productId: string, imageId: string) =>
    products.setMainProductImage(this.ctx, productId, imageId);

  deleteProductImage = (productId: string, imageId: string) =>
    products.deleteProductImage(this.ctx, productId, imageId);

  reorderProductImages = (productId: string, payload: Parameters<typeof products.reorderProductImages>[2]) =>
    products.reorderProductImages(this.ctx, productId, payload);

  listProductGallery = (productId: string) =>
    products.listProductGallery(this.ctx, productId);

  // AI operations
  parseIntake = (payload: Parameters<typeof ai.parseIntake>[1]) =>
    ai.parseIntake(this.ctx, payload);

  submitIntake = (payload: Parameters<typeof ai.submitIntake>[1]) =>
    ai.submitIntake(this.ctx, payload);

  submitIntakeWithImages = (
    payload: z.infer<typeof aiProductIntakeSubmitRequestSchema>,
    imagePaths: string[]
  ) => ai.submitIntakeWithImages(this.ctx, payload, imagePaths);

  // Market operations
  listKeywords = (opts: Parameters<typeof market.listKeywords>[1]) =>
    market.listKeywords(this.ctx, opts);

  getKeywordDetail = (keywordId: string) =>
    market.getKeywordDetail(this.ctx, keywordId);

  createKeyword = (tenantId: string, payload: Parameters<typeof market.createKeyword>[2]) =>
    market.createKeyword(this.ctx, tenantId, payload);

  updateKeyword = (tenantId: string, keywordId: string, payload: Parameters<typeof market.updateKeyword>[3]) =>
    market.updateKeyword(this.ctx, tenantId, keywordId, payload);

  batchUpsertSnapshots = (tenantId: string, payload: Parameters<typeof market.batchUpsertSnapshots>[2]) =>
    market.batchUpsertSnapshots(this.ctx, tenantId, payload);

  listPriceSnapshots = (query: Parameters<typeof market.listPriceSnapshots>[1]) =>
    market.listPriceSnapshots(this.ctx, query);

  listReviewQueue = (opts: Parameters<typeof market.listReviewQueue>[1]) =>
    market.listReviewQueue(this.ctx, opts);

  approveReview = (id: string, payload?: Parameters<typeof market.approveReview>[2]) =>
    market.approveReview(this.ctx, id, payload);

  rejectReview = (id: string, payload?: Parameters<typeof market.rejectReview>[2]) =>
    market.rejectReview(this.ctx, id, payload);

  publishKeyword = (keywordId: string) =>
    market.publishKeyword(this.ctx, keywordId);

  listPublishHistory = (query: Parameters<typeof market.listPublishHistory>[1]) =>
    market.listPublishHistory(this.ctx, query);

  getMarketOverview = (query?: Parameters<typeof market.getMarketOverview>[1]) =>
    market.getMarketOverview(this.ctx, query);

  // Sales operations
  listSaleBatches = (productId: string) =>
    sales.listSaleBatches(this.ctx, productId);

  createSaleBatch = (productId: string, payload: Parameters<typeof sales.createSaleBatch>[2]) =>
    sales.createSaleBatch(this.ctx, productId, payload);

  createSaleAllocation = (productId: string, payload: Parameters<typeof sales.createSaleAllocation>[2]) =>
    sales.createSaleAllocation(this.ctx, productId, payload);

  // Featured operations
  listFeaturedProducts = () =>
    featured.listFeaturedProducts(this.ctx);

  addFeaturedProduct = (payload: Parameters<typeof featured.addFeaturedProduct>[1]) =>
    featured.addFeaturedProduct(this.ctx, payload);

  removeFeaturedProduct = (id: string) =>
    featured.removeFeaturedProduct(this.ctx, id);

  reorderFeaturedProducts = (payload: Parameters<typeof featured.reorderFeaturedProducts>[1]) =>
    featured.reorderFeaturedProducts(this.ctx, payload);

  // Series operations
  listSeries = (query?: Parameters<typeof series.listSeries>[1]) =>
    series.listSeries(this.ctx, query);

  createSeries = (payload: Parameters<typeof series.createSeries>[1]) =>
    series.createSeries(this.ctx, payload);

  getSeries = (id: string) =>
    series.getSeries(this.ctx, id);

  updateSeries = (id: string, payload: Parameters<typeof series.updateSeries>[2]) =>
    series.updateSeries(this.ctx, id, payload);

  deleteSeries = (id: string) =>
    series.deleteSeries(this.ctx, id);

  reorderSeries = (payload: Parameters<typeof series.reorderSeries>[1]) =>
    series.reorderSeries(this.ctx, payload);

  // Product mating/egg operations
  createMatingRecord = (payload: Parameters<typeof products.createMatingRecord>[1]) =>
    products.createMatingRecord(this.ctx, payload);

  createEggRecord = (payload: Parameters<typeof products.createEggRecord>[1]) =>
    products.createEggRecord(this.ctx, payload);

  getMatingHistory = (productId: string) =>
    products.getMatingHistory(this.ctx, productId);

  getFamilyTree = (productId: string) =>
    products.getFamilyTree(this.ctx, productId);

  // Statistics operations
  getDashboardOverview = (query?: Parameters<typeof stats.getDashboardOverview>[1]) =>
    stats.getDashboardOverview(this.ctx, query);

  listProductsPublicClicks = (query?: Parameters<typeof stats.listProductsPublicClicks>[1]) =>
    stats.listProductsPublicClicks(this.ctx, query);

  getProductPublicClicks = (productId: string, query?: Parameters<typeof stats.getProductPublicClicks>[2]) =>
    stats.getProductPublicClicks(this.ctx, productId, query);

  // Admin analytics operations
  getAdminActivityOverview = (query?: Parameters<typeof adminAnalytics.getAdminActivityOverview>[1]) =>
    adminAnalytics.getAdminActivityOverview(this.ctx, query);

  getAdminUsageOverview = (query?: Parameters<typeof adminAnalytics.getAdminUsageOverview>[1]) =>
    adminAnalytics.getAdminUsageOverview(this.ctx, query);

  getAdminRevenueOverview = (query?: Parameters<typeof adminAnalytics.getAdminRevenueOverview>[1]) =>
    adminAnalytics.getAdminRevenueOverview(this.ctx, query);

  getAdminTenantLivestockOverview = (tenantId: string) =>
    adminAnalytics.getAdminTenantLivestockOverview(this.ctx, tenantId);

  // Guiquan community operations
  listAdminGuiquanPosts = (query?: Parameters<typeof guiquanCommunity.listAdminGuiquanPosts>[1]) =>
    guiquanCommunity.listAdminGuiquanPosts(this.ctx, query);

  getAdminGuiquanPost = (postId: string) =>
    guiquanCommunity.getAdminGuiquanPost(this.ctx, postId);

  createAdminGuiquanPost = (payload: Parameters<typeof guiquanCommunity.createAdminGuiquanPost>[1]) =>
    guiquanCommunity.createAdminGuiquanPost(this.ctx, payload);

  updateAdminGuiquanPost = (postId: string, payload: Parameters<typeof guiquanCommunity.updateAdminGuiquanPost>[2]) =>
    guiquanCommunity.updateAdminGuiquanPost(this.ctx, postId, payload);

  submitAdminGuiquanPost = (postId: string) =>
    guiquanCommunity.submitAdminGuiquanPost(this.ctx, postId);

  publishAdminGuiquanPost = (postId: string) =>
    guiquanCommunity.publishAdminGuiquanPost(this.ctx, postId);

  rejectAdminGuiquanPost = (postId: string, payload?: Parameters<typeof guiquanCommunity.rejectAdminGuiquanPost>[2]) =>
    guiquanCommunity.rejectAdminGuiquanPost(this.ctx, postId, payload);

  archiveAdminGuiquanPost = (postId: string) =>
    guiquanCommunity.archiveAdminGuiquanPost(this.ctx, postId);

  updateAdminGuiquanCommentStatus = (
    postId: string,
    commentId: string,
    payload: Parameters<typeof guiquanCommunity.updateAdminGuiquanCommentStatus>[3]
  ) => guiquanCommunity.updateAdminGuiquanCommentStatus(this.ctx, postId, commentId, payload);

  updateAdminGuiquanReportStatus = (
    reportId: string,
    payload: Parameters<typeof guiquanCommunity.updateAdminGuiquanReportStatus>[2]
  ) => guiquanCommunity.updateAdminGuiquanReportStatus(this.ctx, reportId, payload);

  // Announcements operations
  listAnnouncements = (query?: Parameters<typeof announcements.listAnnouncements>[1]) =>
    announcements.listAnnouncements(this.ctx, query);

  createAnnouncementDraft = (payload: Parameters<typeof announcements.createAnnouncementDraft>[1]) =>
    announcements.createAnnouncementDraft(this.ctx, payload);

  publishAnnouncement = (id: string) =>
    announcements.publishAnnouncement(this.ctx, id);

  // Certificate operations
  getCertificateEligibility = (productId: string) =>
    certificates.getCertificateEligibility(this.ctx, productId);

  previewCertificate = (productId: string, payload: Parameters<typeof certificates.previewCertificate>[2]) =>
    certificates.previewCertificate(this.ctx, productId, payload);

  confirmCertificate = (productId: string, payload: Parameters<typeof certificates.confirmCertificate>[2]) =>
    certificates.confirmCertificate(this.ctx, productId, payload);

  listCertificates = (productId: string) =>
    certificates.listCertificates(this.ctx, productId);

  listCertificateCenter = (query?: Parameters<typeof certificates.listCertificateCenter>[1]) =>
    certificates.listCertificateCenter(this.ctx, query);

  voidCertificate = (certificateId: string, payload?: Parameters<typeof certificates.voidCertificate>[2]) =>
    certificates.voidCertificate(this.ctx, certificateId, payload);

  reissueCertificatePreview = (certificateId: string, payload?: Parameters<typeof certificates.reissueCertificatePreview>[2]) =>
    certificates.reissueCertificatePreview(this.ctx, certificateId, payload);

  reissueCertificateConfirm = (certificateId: string, payload?: Parameters<typeof certificates.reissueCertificateConfirm>[2]) =>
    certificates.reissueCertificateConfirm(this.ctx, certificateId, payload);

  downloadCertificateContent = (productId: string, certificateId: string, outputPath: string, maxEdge?: number) =>
    certificates.downloadCertificateContent(this.ctx, productId, certificateId, outputPath, maxEdge);

  generateCouplePhoto = (productId: string, payload?: Parameters<typeof certificates.generateCouplePhoto>[2]) =>
    certificates.generateCouplePhoto(this.ctx, productId, payload);

  getCurrentCouplePhoto = (productId: string) =>
    certificates.getCurrentCouplePhoto(this.ctx, productId);

  listCouplePhotoHistory = (productId: string) =>
    certificates.listCouplePhotoHistory(this.ctx, productId);

  downloadCouplePhotoContent = (productId: string, photoId: string, outputPath: string, maxEdge?: number) =>
    certificates.downloadCouplePhotoContent(this.ctx, productId, photoId, outputPath, maxEdge);

  uploadSaleSubjectMedia = (productId: string, filePath: string, meta?: Parameters<typeof certificates.uploadSaleSubjectMedia>[3]) =>
    certificates.uploadSaleSubjectMedia(this.ctx, productId, filePath, meta);
}

// Re-export types
export type { Profile } from './client/profile-store';
export type { RequestOptions, ApiResponse } from './client/http';
export type { Config } from './client/config';
