import {
  listAdminGuiquanCommunityPostsQuerySchema,
  listAdminGuiquanCommunityPostsResponseSchema,
  getAdminGuiquanCommunityPostResponseSchema,
  createAdminGuiquanCommunityPostRequestSchema,
  updateAdminGuiquanCommunityPostRequestSchema,
  rejectAdminGuiquanCommunityPostRequestSchema,
  updateAdminGuiquanCommunityCommentStatusRequestSchema,
  updateAdminGuiquanCommunityCommentStatusResponseSchema,
  updateAdminGuiquanCommunityReportStatusRequestSchema,
  updateAdminGuiquanCommunityReportStatusResponseSchema,
  adminGuiquanCommunityPostResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

// Admin guiquan community posts走 /api/proxy 前缀，与 market-intelligence.ts 同一组
// 全部超管 + @UseGuards 约束

export async function listAdminGuiquanPosts(
  ctx: AuthedContext,
  query?: z.infer<typeof listAdminGuiquanCommunityPostsQuerySchema>
): Promise<z.infer<typeof listAdminGuiquanCommunityPostsResponseSchema>> {
  const parsedQuery = query ? listAdminGuiquanCommunityPostsQuerySchema.parse(query) : {};

  const response = await ctx.request({
    method: 'GET',
    path: '/api/proxy/admin/guiquan/community/posts',
    query: parsedQuery as Record<string, string | number | boolean | undefined>,
  });

  return listAdminGuiquanCommunityPostsResponseSchema.parse(response.body);
}

export async function getAdminGuiquanPost(
  ctx: AuthedContext,
  postId: string
): Promise<z.infer<typeof getAdminGuiquanCommunityPostResponseSchema>> {
  const response = await ctx.request({
    method: 'GET',
    path: `/api/proxy/admin/guiquan/community/posts/${postId}`,
  });

  return getAdminGuiquanCommunityPostResponseSchema.parse(response.body);
}

export async function createAdminGuiquanPost(
  ctx: AuthedContext,
  payload: z.infer<typeof createAdminGuiquanCommunityPostRequestSchema>
): Promise<z.infer<typeof adminGuiquanCommunityPostResponseSchema>> {
  const body = createAdminGuiquanCommunityPostRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/api/proxy/admin/guiquan/community/posts',
    json: body,
  });

  return adminGuiquanCommunityPostResponseSchema.parse(response.body);
}

export async function updateAdminGuiquanPost(
  ctx: AuthedContext,
  postId: string,
  payload: z.infer<typeof updateAdminGuiquanCommunityPostRequestSchema>
): Promise<z.infer<typeof adminGuiquanCommunityPostResponseSchema>> {
  const body = updateAdminGuiquanCommunityPostRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PUT',
    path: `/api/proxy/admin/guiquan/community/posts/${postId}`,
    json: body,
  });

  return adminGuiquanCommunityPostResponseSchema.parse(response.body);
}

export async function submitAdminGuiquanPost(
  ctx: AuthedContext,
  postId: string
): Promise<z.infer<typeof adminGuiquanCommunityPostResponseSchema>> {
  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/guiquan/community/posts/${postId}/submit`,
  });

  return adminGuiquanCommunityPostResponseSchema.parse(response.body);
}

export async function publishAdminGuiquanPost(
  ctx: AuthedContext,
  postId: string
): Promise<z.infer<typeof adminGuiquanCommunityPostResponseSchema>> {
  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/guiquan/community/posts/${postId}/publish`,
  });

  return adminGuiquanCommunityPostResponseSchema.parse(response.body);
}

export async function rejectAdminGuiquanPost(
  ctx: AuthedContext,
  postId: string,
  payload?: z.infer<typeof rejectAdminGuiquanCommunityPostRequestSchema>
): Promise<z.infer<typeof adminGuiquanCommunityPostResponseSchema>> {
  const body = payload ? rejectAdminGuiquanCommunityPostRequestSchema.parse(payload) : {};

  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/guiquan/community/posts/${postId}/reject`,
    json: body,
  });

  return adminGuiquanCommunityPostResponseSchema.parse(response.body);
}

export async function archiveAdminGuiquanPost(
  ctx: AuthedContext,
  postId: string
): Promise<z.infer<typeof adminGuiquanCommunityPostResponseSchema>> {
  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/guiquan/community/posts/${postId}/archive`,
  });

  return adminGuiquanCommunityPostResponseSchema.parse(response.body);
}

export async function restoreAdminGuiquanPost(
  ctx: AuthedContext,
  postId: string
): Promise<z.infer<typeof adminGuiquanCommunityPostResponseSchema>> {
  const response = await ctx.request({
    method: 'POST',
    path: `/api/proxy/admin/guiquan/community/posts/${postId}/restore`,
  });

  return adminGuiquanCommunityPostResponseSchema.parse(response.body);
}

export async function updateAdminGuiquanCommentStatus(
  ctx: AuthedContext,
  postId: string,
  commentId: string,
  payload: z.infer<typeof updateAdminGuiquanCommunityCommentStatusRequestSchema>
): Promise<z.infer<typeof updateAdminGuiquanCommunityCommentStatusResponseSchema>> {
  const body = updateAdminGuiquanCommunityCommentStatusRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PATCH',
    path: `/api/proxy/admin/guiquan/community/comments/${commentId}/status`,
    json: body,
  });

  return updateAdminGuiquanCommunityCommentStatusResponseSchema.parse(response.body);
}

export async function updateAdminGuiquanReportStatus(
  ctx: AuthedContext,
  reportId: string,
  payload: z.infer<typeof updateAdminGuiquanCommunityReportStatusRequestSchema>
): Promise<z.infer<typeof updateAdminGuiquanCommunityReportStatusResponseSchema>> {
  const body = updateAdminGuiquanCommunityReportStatusRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'PATCH',
    path: `/api/proxy/admin/guiquan/community/reports/${reportId}/status`,
    json: body,
  });

  return updateAdminGuiquanCommunityReportStatusResponseSchema.parse(response.body);
}
