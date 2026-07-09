import { z } from 'zod'

export const announcementAudienceSchema = z.enum(['TENANT_APP', 'PUBLIC_PAGE', 'TENANT_AND_PUBLIC'])
export const announcementStatusSchema = z.enum(['DRAFT', 'PUBLISHED', 'ARCHIVED'])
export const announcementReleaseDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Use YYYY-MM-DD format.')

export const announcementFeatureSchema = z.object({
  title: z.string().trim().min(1).max(40),
  detail: z.string().trim().max(120).default('')
})

export const announcementSchema = z.object({
  id: z.string().min(1),
  releaseDate: announcementReleaseDateSchema,
  audience: announcementAudienceSchema,
  status: announcementStatusSchema,
  title: z.string().trim().min(1).max(60),
  subtitle: z.string().trim().max(120).nullable(),
  summary: z.string().trim().max(160).nullable(),
  features: z.array(announcementFeatureSchema).max(4),
  fixes: z.array(z.string().trim().min(1).max(80)).max(3),
  posterUrl: z.string().trim().max(500).nullable(),
  sourceDate: announcementReleaseDateSchema.nullable(),
  publishedAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
})

export const createAnnouncementDraftRequestSchema = z.object({
  releaseDate: announcementReleaseDateSchema,
  audience: announcementAudienceSchema.default('TENANT_APP'),
  title: z.string().trim().min(1).max(60),
  subtitle: z.string().trim().max(120).nullable().optional(),
  summary: z.string().trim().max(160).nullable().optional(),
  features: z.array(announcementFeatureSchema).max(4),
  fixes: z.array(z.string().trim().min(1).max(80)).max(3).default([]),
  posterUrl: z.string().trim().max(500).nullable().optional(),
  sourceDate: announcementReleaseDateSchema.nullable().optional()
})

export const listAnnouncementsQuerySchema = z.object({
  status: announcementStatusSchema.optional(),
  audience: announcementAudienceSchema.optional(),
  limit: z.coerce.number().int().min(1).max(20).default(10)
})

export const announcementResponseSchema = z.object({
  announcement: announcementSchema.nullable()
})

export const listAnnouncementsResponseSchema = z.object({
  announcements: z.array(announcementSchema)
})

export const createAnnouncementDraftResponseSchema = z.object({
  announcement: announcementSchema
})

export const publishAnnouncementResponseSchema = z.object({
  announcement: announcementSchema
})

export type AnnouncementAudience = z.infer<typeof announcementAudienceSchema>
export type AnnouncementStatus = z.infer<typeof announcementStatusSchema>
export type AnnouncementFeature = z.infer<typeof announcementFeatureSchema>
export type Announcement = z.infer<typeof announcementSchema>
export type CreateAnnouncementDraftRequest = z.infer<typeof createAnnouncementDraftRequestSchema>
export type ListAnnouncementsQuery = z.infer<typeof listAnnouncementsQuerySchema>
export type AnnouncementResponse = z.infer<typeof announcementResponseSchema>
export type ListAnnouncementsResponse = z.infer<typeof listAnnouncementsResponseSchema>
export type CreateAnnouncementDraftResponse = z.infer<typeof createAnnouncementDraftResponseSchema>
export type PublishAnnouncementResponse = z.infer<typeof publishAnnouncementResponseSchema>
