import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import {
  getProductCertificateEligibilityResponseSchema,
  productCertificateGenerateRequestSchema,
  generateProductCertificatePreviewResponseSchema,
  confirmProductCertificateGenerateResponseSchema,
  listProductCertificatesResponseSchema,
  listProductCertificateCenterQuerySchema,
  listProductCertificateCenterResponseSchema,
  voidProductCertificateRequestSchema,
  reissueProductCertificateRequestSchema,
  generateProductCouplePhotoRequestSchema,
  generateProductCouplePhotoResponseSchema,
  getCurrentProductCouplePhotoResponseSchema,
  listProductCouplePhotosResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import { requestBinary } from './http';
import type { z } from 'zod';

const MAX_MEDIA_SIZE = 10 * 1024 * 1024; // 10MB

async function getMimeType(filePath: string): Promise<string> {
  const ext = path.extname(filePath).toLowerCase();
  const mimeMap: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
  };
  return mimeMap[ext] || 'application/octet-stream';
}

// Certificate endpoints - direct (no /api/proxy)

export async function getCertificateEligibility(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof getProductCertificateEligibilityResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/certificates/eligibility`,
  });

  return getProductCertificateEligibilityResponseSchema.parse(response.body);
}

export async function previewCertificate(
  ctx: AuthedContext,
  productId: string,
  payload: z.infer<typeof productCertificateGenerateRequestSchema>
): Promise<z.infer<typeof generateProductCertificatePreviewResponseSchema>> {
  const body = productCertificateGenerateRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: `/products/${productId}/certificates/preview`,
    json: body,
  });

  return generateProductCertificatePreviewResponseSchema.parse(response.body);
}

export async function confirmCertificate(
  ctx: AuthedContext,
  productId: string,
  payload: z.infer<typeof productCertificateGenerateRequestSchema>
): Promise<z.infer<typeof confirmProductCertificateGenerateResponseSchema>> {
  const body = productCertificateGenerateRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: `/products/${productId}/certificates/confirm`,
    json: body,
  });

  return confirmProductCertificateGenerateResponseSchema.parse(response.body);
}

export async function listCertificates(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof listProductCertificatesResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/certificates`,
  });

  return listProductCertificatesResponseSchema.parse(response.body);
}

export async function listCertificateCenter(
  ctx: AuthedContext,
  query?: z.infer<typeof listProductCertificateCenterQuerySchema>
): Promise<z.infer<typeof listProductCertificateCenterResponseSchema>> {
  const parsedQuery = query ? listProductCertificateCenterQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/products/certificates/center',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listProductCertificateCenterResponseSchema.parse(response.body);
}

export async function voidCertificate(
  ctx: AuthedContext,
  certificateId: string,
  payload?: z.infer<typeof voidProductCertificateRequestSchema>
): Promise<Record<string, unknown>> {
  const body = payload ? voidProductCertificateRequestSchema.parse(payload) : {};

  const response = await ctx.request({
    method: 'POST',
    path: `/products/certificates/${certificateId}/void`,
    json: body,
  });

  return response.body as Record<string, unknown>;
}

export async function reissueCertificatePreview(
  ctx: AuthedContext,
  certificateId: string,
  payload?: z.infer<typeof reissueProductCertificateRequestSchema>
): Promise<z.infer<typeof generateProductCertificatePreviewResponseSchema>> {
  const body = payload ? reissueProductCertificateRequestSchema.parse(payload) : {};

  const response = await ctx.request({
    method: 'POST',
    path: `/products/certificates/${certificateId}/reissue/preview`,
    json: body,
  });

  return generateProductCertificatePreviewResponseSchema.parse(response.body);
}

export async function reissueCertificateConfirm(
  ctx: AuthedContext,
  certificateId: string,
  payload?: z.infer<typeof reissueProductCertificateRequestSchema>
): Promise<z.infer<typeof confirmProductCertificateGenerateResponseSchema>> {
  const body = payload ? reissueProductCertificateRequestSchema.parse(payload) : {};

  const response = await ctx.request({
    method: 'POST',
    path: `/products/certificates/${certificateId}/reissue/confirm`,
    json: body,
  });

  return confirmProductCertificateGenerateResponseSchema.parse(response.body);
}

export async function downloadCertificateContent(
  ctx: AuthedContext,
  productId: string,
  certificateId: string,
  outputPath: string,
  maxEdge?: number
): Promise<{ path: string; size: number }> {
  const query: Record<string, string | number | boolean | undefined> = {};
  if (maxEdge) {
    query.maxEdge = maxEdge;
  }

  const binaryResponse = await requestBinary(ctx.apiBase, {
    method: 'GET',
    path: `/products/${productId}/certificates/${certificateId}/content`,
    query,
    token: ctx.profile.accessToken,
  });

  if (!binaryResponse.buffer) {
    throw new Error('Failed to download certificate content');
  }

  await fs.writeFile(outputPath, binaryResponse.buffer);
  const stats = await fs.stat(outputPath);

  return {
    path: outputPath,
    size: stats.size,
  };
}

// Couple-photo endpoints - direct (no /api/proxy)

export async function generateCouplePhoto(
  ctx: AuthedContext,
  productId: string,
  payload?: z.infer<typeof generateProductCouplePhotoRequestSchema>
): Promise<z.infer<typeof generateProductCouplePhotoResponseSchema>> {
  const body = payload ? generateProductCouplePhotoRequestSchema.parse(payload) : {};

  const response = await ctx.request({
    method: 'POST',
    path: `/products/${productId}/couple-photos/generate`,
    json: body,
  });

  return generateProductCouplePhotoResponseSchema.parse(response.body);
}

export async function getCurrentCouplePhoto(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof getCurrentProductCouplePhotoResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/couple-photos/current`,
  });

  return getCurrentProductCouplePhotoResponseSchema.parse(response.body);
}

export async function listCouplePhotoHistory(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof listProductCouplePhotosResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/couple-photos/history`,
  });

  return listProductCouplePhotosResponseSchema.parse(response.body);
}

export async function downloadCouplePhotoContent(
  ctx: AuthedContext,
  productId: string,
  photoId: string,
  outputPath: string,
  maxEdge?: number
): Promise<{ path: string; size: number }> {
  const query: Record<string, string | number | boolean | undefined> = {};
  if (maxEdge) {
    query.maxEdge = maxEdge;
  }

  const binaryResponse = await requestBinary(ctx.apiBase, {
    method: 'GET',
    path: `/products/${productId}/couple-photos/${photoId}/content`,
    query,
    token: ctx.profile.accessToken,
  });

  if (!binaryResponse.buffer) {
    throw new Error('Failed to download couple photo content');
  }

  await fs.writeFile(outputPath, binaryResponse.buffer);
  const stats = await fs.stat(outputPath);

  return {
    path: outputPath,
    size: stats.size,
  };
}

// sale-subject-media upload

export async function uploadSaleSubjectMedia(
  ctx: AuthedContext,
  productId: string,
  filePath: string,
  meta?: {
    saleBatchId?: string;
    eggEventId?: string;
    label?: string;
    isPrimary?: boolean;
  }
): Promise<Record<string, unknown>> {
  // Check file exists and size
  const stats = await fs.stat(filePath);
  if (stats.size > MAX_MEDIA_SIZE) {
    throw new Error(`文件过大 (${stats.size} bytes > ${MAX_MEDIA_SIZE} bytes)`);
  }

  // Read file
  const fileBuffer = await fs.readFile(filePath);
  const mimeType = await getMimeType(filePath);
  const filename = path.basename(filePath);

  // Create FormData
  const formData = new FormData();
  formData.append('file', new Blob([fileBuffer], { type: mimeType }), filename);
  if (meta?.saleBatchId) {
    formData.append('saleBatchId', meta.saleBatchId);
  }
  if (meta?.eggEventId) {
    formData.append('eggEventId', meta.eggEventId);
  }
  if (meta?.label) {
    formData.append('label', meta.label);
  }
  if (meta?.isPrimary) {
    formData.append('isPrimary', 'true');
  }

  const response = await ctx.request({
    method: 'POST',
    path: `/products/${productId}/sale-subject-media`,
    formData,
  });

  return response.body as Record<string, unknown>;
}
