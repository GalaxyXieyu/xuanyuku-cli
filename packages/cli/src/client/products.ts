import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import {
  createProductRequestSchema,
  createProductResponseSchema,
  getProductResponseSchema,
  listProductsQuerySchema,
  listProductsResponseSchema,
  updateProductRequestSchema,
  deleteProductResponseSchema,
  createProductEventRequestSchema,
  createProductEventResponseSchema,
  listProductEventsResponseSchema,
  updateProductEventRequestSchema,
  updateProductEventResponseSchema,
  deleteProductEventResponseSchema,
  uploadProductImageResponseSchema,
  listProductImagesResponseSchema,
  setMainProductImageResponseSchema,
  deleteProductImageResponseSchema,
  reorderProductImagesRequestSchema,
  reorderProductImagesResponseSchema,
  listProductGalleryResponseSchema,
  createMatingRecordRequestSchema,
  createEggRecordRequestSchema,
  listProductMaleMatingHistoryResponseSchema,
  getProductFamilyTreeResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

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

export async function listProducts(
  ctx: AuthedContext,
  query?: z.input<typeof listProductsQuerySchema>
): Promise<z.infer<typeof listProductsResponseSchema>> {
  const parsedQuery = query ? listProductsQuerySchema.parse(query) : listProductsQuerySchema.parse({});

  const response = await ctx.request({
    method: 'GET',
    path: '/products',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listProductsResponseSchema.parse(response.body);
}

export async function getProduct(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof getProductResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}`,
  });

  return getProductResponseSchema.parse(response.body);
}

export async function createProduct(
  ctx: AuthedContext,
  payload: z.infer<typeof createProductRequestSchema>
): Promise<z.infer<typeof createProductResponseSchema>> {
  const body = createProductRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/products',
    json: body,
  });

  return createProductResponseSchema.parse(response.body);
}

export async function updateProduct(
  ctx: AuthedContext,
  productId: string,
  payload: z.input<typeof updateProductRequestSchema>
): Promise<z.infer<typeof createProductResponseSchema>> {
  const body = updateProductRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PUT',
    path: `/products/${productId}`,
    json: body,
  });

  return createProductResponseSchema.parse(response.body);
}

export async function deleteProduct(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof deleteProductResponseSchema>> {
  const response = await ctx.request({
    method: 'DELETE',
    path: `/products/${productId}`,
  });

  return deleteProductResponseSchema.parse(response.body);
}

export async function addProductEvent(
  ctx: AuthedContext,
  productId: string,
  payload: z.infer<typeof createProductEventRequestSchema>
): Promise<z.infer<typeof createProductEventResponseSchema>> {
  const body = createProductEventRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: `/products/${productId}/events`,
    json: body,
  });

  return createProductEventResponseSchema.parse(response.body);
}

export async function listProductEvents(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof listProductEventsResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/events`,
  });

  return listProductEventsResponseSchema.parse(response.body);
}

export async function updateProductEvent(
  ctx: AuthedContext,
  productId: string,
  eventId: string,
  payload: z.infer<typeof updateProductEventRequestSchema>
): Promise<z.infer<typeof updateProductEventResponseSchema>> {
  const body = updateProductEventRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PATCH',
    path: `/products/${productId}/events/${eventId}`,
    json: body,
  });

  return updateProductEventResponseSchema.parse(response.body);
}

export async function deleteProductEvent(
  ctx: AuthedContext,
  productId: string,
  eventId: string
): Promise<z.infer<typeof deleteProductEventResponseSchema>> {
  const response = await ctx.request({
    method: 'DELETE',
    path: `/products/${productId}/events/${eventId}`,
  });

  return deleteProductEventResponseSchema.parse(response.body);
}

export async function uploadProductImage(
  ctx: AuthedContext,
  productId: string,
  filePath: string
): Promise<z.infer<typeof uploadProductImageResponseSchema>> {
  const stats = await fs.stat(filePath);
  if (stats.size > MAX_IMAGE_SIZE) {
    throw new Error(`图片文件过大 (${stats.size} bytes > ${MAX_IMAGE_SIZE} bytes)`);
  }

  const fileBuffer = await fs.readFile(filePath);
  const mimeType = await getMimeType(filePath);
  const filename = path.basename(filePath);

  const formData = new FormData();
  formData.append('file', new Blob([fileBuffer], { type: mimeType }), filename);

  const response = await ctx.request({
    method: 'POST',
    path: `/products/${productId}/images`,
    formData,
  });

  return uploadProductImageResponseSchema.parse(response.body);
}

export async function listProductImages(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof listProductImagesResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/images`,
  });

  return listProductImagesResponseSchema.parse(response.body);
}

export async function setMainProductImage(
  ctx: AuthedContext,
  productId: string,
  imageId: string
): Promise<z.infer<typeof setMainProductImageResponseSchema>> {
  const response = await ctx.request({
    method: 'PUT',
    path: `/products/${productId}/images/${imageId}/main`,
  });

  return setMainProductImageResponseSchema.parse(response.body);
}

export async function deleteProductImage(
  ctx: AuthedContext,
  productId: string,
  imageId: string
): Promise<z.infer<typeof deleteProductImageResponseSchema>> {
  const response = await ctx.request({
    method: 'DELETE',
    path: `/products/${productId}/images/${imageId}`,
  });

  return deleteProductImageResponseSchema.parse(response.body);
}

export async function reorderProductImages(
  ctx: AuthedContext,
  productId: string,
  payload: z.infer<typeof reorderProductImagesRequestSchema>
): Promise<z.infer<typeof reorderProductImagesResponseSchema>> {
  const body = reorderProductImagesRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PUT',
    path: `/products/${productId}/images/reorder`,
    json: body,
  });

  return reorderProductImagesResponseSchema.parse(response.body);
}

export async function listProductGallery(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof listProductGalleryResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/gallery`,
  });

  return listProductGalleryResponseSchema.parse(response.body);
}

export async function createMatingRecord(
  ctx: AuthedContext,
  payload: z.infer<typeof createMatingRecordRequestSchema>
): Promise<z.infer<typeof createProductEventResponseSchema>> {
  const body = createMatingRecordRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/products/mating-records',
    json: body,
  });

  return createProductEventResponseSchema.parse(response.body);
}

export async function createEggRecord(
  ctx: AuthedContext,
  payload: z.infer<typeof createEggRecordRequestSchema>
): Promise<z.infer<typeof createProductEventResponseSchema>> {
  const body = createEggRecordRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/products/egg-records',
    json: body,
  });

  return createProductEventResponseSchema.parse(response.body);
}

export async function getMatingHistory(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof listProductMaleMatingHistoryResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/mating-history`,
  });

  return listProductMaleMatingHistoryResponseSchema.parse(response.body);
}

export async function getFamilyTree(
  ctx: AuthedContext,
  productId: string
): Promise<z.infer<typeof getProductFamilyTreeResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/products/${productId}/family-tree`,
  });

  return getProductFamilyTreeResponseSchema.parse(response.body);
}