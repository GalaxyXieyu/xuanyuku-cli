import {
  listAnnouncementsQuerySchema,
  listAnnouncementsResponseSchema,
  createAnnouncementDraftRequestSchema,
  createAnnouncementDraftResponseSchema,
  publishAnnouncementResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

// Admin announcements走 /api/proxy 前缀，超管接口

export async function listAnnouncements(
  ctx: AuthedContext,
  query?: z.infer<typeof listAnnouncementsQuerySchema>
): Promise<z.infer<typeof listAnnouncementsResponseSchema>> {
  const parsedQuery = query ? listAnnouncementsQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/announcements',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listAnnouncementsResponseSchema.parse(response.body);
}

export async function createAnnouncementDraft(
  ctx: AuthedContext,
  payload: z.infer<typeof createAnnouncementDraftRequestSchema>
): Promise<z.infer<typeof createAnnouncementDraftResponseSchema>> {
  const body = createAnnouncementDraftRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/api/proxy/admin/announcements',
    json: body,
  });

  return createAnnouncementDraftResponseSchema.parse(response.body);
}

export async function publishAnnouncement(
  ctx: AuthedContext,
  id: string
): Promise<z.infer<typeof publishAnnouncementResponseSchema>> {
  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/announcements/${id}/publish`,
  });

  return publishAnnouncementResponseSchema.parse(response.body);
}
