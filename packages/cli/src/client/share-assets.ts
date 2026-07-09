import * as fs from 'node:fs/promises';
import {
  publicMiniappUrlLinkByTokenQuerySchema,
  publicMiniappUrlLinkResponseSchema,
  publicShareQrCodeByTokenQuerySchema,
} from '@xuanyuku/shared';
import { requestBinary, request } from './http';
import type { z } from 'zod';

// @Public endpoints - no authentication required, no token needed
// These endpoints are directly accessible without login

export async function getShareMiniappUrlLink(
  apiBase: string,
  shareToken: string,
  query?: z.infer<typeof publicMiniappUrlLinkByTokenQuerySchema>
): Promise<z.infer<typeof publicMiniappUrlLinkResponseSchema>> {
  const parsedQuery = query ? publicMiniappUrlLinkByTokenQuerySchema.parse(query) : {};

  const response = await request(apiBase, {
    method: 'GET',
    path: `/shares/by-token/${shareToken}/public/miniapp-url-link`,
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return publicMiniappUrlLinkResponseSchema.parse(response.body);
}

export async function downloadShareQrCode(
  apiBase: string,
  shareToken: string,
  outputPath: string,
  query?: z.infer<typeof publicShareQrCodeByTokenQuerySchema>
): Promise<{ path: string; size: number; source?: string }> {
  const parsedQuery = query ? publicShareQrCodeByTokenQuerySchema.parse(query) : {};

  const binaryResponse = await requestBinary(apiBase, {
    method: 'GET',
    path: `/shares/by-token/${shareToken}/public/qr-code`,
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  if (!binaryResponse.buffer) {
    throw new Error('Failed to download QR code');
  }

  await fs.writeFile(outputPath, binaryResponse.buffer);
  const stats = await fs.stat(outputPath);

  // Extract source from response headers
  const source = binaryResponse.headers.get('X-Eggturtle-Share-Target');

  return {
    path: outputPath,
    size: stats.size,
    ...(source && { source }),
  };
}

export async function downloadShareQrLabelCard(
  apiBase: string,
  shareToken: string,
  outputPath: string,
  query?: z.infer<typeof publicShareQrCodeByTokenQuerySchema>
): Promise<{ path: string; size: number; source?: string }> {
  const parsedQuery = query ? publicShareQrCodeByTokenQuerySchema.parse(query) : {};

  const binaryResponse = await requestBinary(apiBase, {
    method: 'GET',
    path: `/shares/by-token/${shareToken}/public/qr-label-card`,
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  if (!binaryResponse.buffer) {
    throw new Error('Failed to download label card');
  }

  await fs.writeFile(outputPath, binaryResponse.buffer);
  const stats = await fs.stat(outputPath);

  // Extract source from response headers
  const source = binaryResponse.headers.get('X-Eggturtle-Share-Target');

  return {
    path: outputPath,
    size: stats.size,
    ...(source && { source }),
  };
}
