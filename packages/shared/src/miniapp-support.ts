import { z } from 'zod';

const supportAssetUrlSchema = z
  .string()
  .trim()
  .min(1)
  .max(1000)
  .refine(
    (value) => value.startsWith('/') || value.startsWith('http://') || value.startsWith('https://'),
    'Support asset URL must be an absolute URL or an absolute path.',
  );

export const miniappSupportConfigSchema = z.object({
  enabled: z.boolean(),
  title: z.string().trim().min(1).max(80),
  description: z.string().trim().min(1).max(240),
  wechatId: z.string().trim().max(64).nullable(),
  qrImageUrl: supportAssetUrlSchema.nullable(),
});

export const getMiniappSupportConfigResponseSchema = z.object({
  config: miniappSupportConfigSchema,
});

export const updateMiniappSupportConfigRequestSchema = z.object({
  config: miniappSupportConfigSchema.omit({ qrImageUrl: true }).extend({
    qrImageUrl: supportAssetUrlSchema.nullable().optional(),
  }),
});

export const updateMiniappSupportConfigResponseSchema = z.object({
  config: miniappSupportConfigSchema,
  auditLogId: z.string().min(1),
});

export const uploadMiniappSupportQrImageResponseSchema = z.object({
  asset: z.object({
    key: z.string().min(1),
    url: supportAssetUrlSchema,
    contentType: z.string().min(1).nullable(),
    sizeBytes: z.string().regex(/^\d+$/),
  }),
  config: miniappSupportConfigSchema,
  auditLogId: z.string().min(1),
});

export const DEFAULT_MINIAPP_SUPPORT_CONFIG = miniappSupportConfigSchema.parse({
  enabled: true,
  title: '用户反馈与客服',
  description: '有建议、遇到 bug，或想进用户交流群，都可以先添加客服微信。',
  wechatId: null,
  qrImageUrl: null,
});

export type MiniappSupportConfig = z.infer<typeof miniappSupportConfigSchema>;
export type GetMiniappSupportConfigResponse = z.infer<typeof getMiniappSupportConfigResponseSchema>;
export type UpdateMiniappSupportConfigRequest = z.infer<typeof updateMiniappSupportConfigRequestSchema>;
export type UpdateMiniappSupportConfigResponse = z.infer<typeof updateMiniappSupportConfigResponseSchema>;
export type UploadMiniappSupportQrImageResponse = z.infer<typeof uploadMiniappSupportQrImageResponseSchema>;
