import { z } from 'zod';

const hhmmSchema = z.string().trim().regex(/^([01]\d|2[0-3]):([0-5]\d)$/);
const isoDateSchema = z.string().trim().regex(/^\d{4}-\d{2}-\d{2}$/);

export const wechatBindingSubscribeStatusSchema = z.enum(['UNKNOWN', 'SUBSCRIBED', 'UNSUBSCRIBED']);
export const notificationChannelSchema = z.enum([
  'WECHAT_OFFICIAL_ACCOUNT',
  'WECHAT_MINIAPP_SUBSCRIBE',
]);
export const notificationSceneSchema = z.enum([
  'DAILY_DIGEST',
  'REFERRAL_PROGRESS',
  'CARE_REMINDER_DAILY',
]);
export const notificationJobStatusSchema = z.enum([
  'PENDING',
  'SENDING',
  'SENT',
  'FAILED_RETRYABLE',
  'FAILED_TERMINAL',
  'CANCELLED',
]);
export const notificationDeliveryResultStatusSchema = z.enum(['SUCCESS', 'FAILED']);
export const careReminderTypeSchema = z.enum([
  'FEEDING',
  'WATER_CHANGE',
  'HEALTH_CHECK',
  'BREEDING_CHECK',
]);

export const myWechatBindingSchema = z.object({
  appId: z.string().min(1),
  openIdTail: z.string().min(1).nullable(),
  subscribeStatus: wechatBindingSubscribeStatusSchema,
  isReachable: z.boolean(),
  source: z.string().min(1).nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  lastOauthAt: z.string().datetime().nullable(),
  lastMessageSentAt: z.string().datetime().nullable(),
  lastMessageErrorCode: z.string().min(1).nullable(),
  lastMessageErrorAt: z.string().datetime().nullable(),
});

export const myWechatBindingStatusResponseSchema = z.object({
  configured: z.boolean(),
  messageEnabled: z.boolean(),
  dryRun: z.boolean(),
  appId: z.string().min(1).nullable(),
  dailyDigestTemplateConfigured: z.boolean(),
  referralProgressTemplateConfigured: z.boolean(),
  referralProgressTemplateId: z.string().min(1).nullable(),
  binding: myWechatBindingSchema.nullable(),
});

export const wechatJsSdkConfigQuerySchema = z.object({
  url: z.string().trim().url(),
});

export const wechatSubscribePromptStatusSchema = z.enum([
  'accept',
  'reject',
  'cancel',
  'ban',
  'filter',
]);

export const updateWechatBindingSubscribeStatusRequestSchema = z.object({
  sceneCode: notificationSceneSchema.default('REFERRAL_PROGRESS'),
  statuses: z.record(z.string().trim().min(1), wechatSubscribePromptStatusSchema),
});

export const updateWechatBindingSubscribeStatusResponseSchema = z.object({
  ok: z.literal(true),
  bindingStatus: myWechatBindingStatusResponseSchema,
});

export const careReminderRuleInputSchema = z.object({
  type: careReminderTypeSchema,
  enabled: z.boolean(),
  intervalDays: z.number().int().min(1).max(365),
});

export const careReminderRuleSchema = careReminderRuleInputSchema.extend({
  anchorDate: isoDateSchema,
  updatedAt: z.string().datetime().nullable(),
});

export const todayCareReminderItemSchema = z.object({
  productId: z.string().trim().min(1),
  productName: z.string().trim().min(1),
  reminderType: careReminderTypeSchema,
  intervalDays: z.number().int().min(1).max(365),
  anchorDate: isoDateSchema,
});

export const getTodayCareRemindersResponseSchema = z.object({
  date: isoDateSchema,
  totalCount: z.number().int().nonnegative(),
  productCount: z.number().int().nonnegative(),
  items: z.array(todayCareReminderItemSchema).max(20),
});

export const careReminderConfigResponseSchema = z.object({
  configured: z.boolean(),
  messageEnabled: z.boolean(),
  dryRun: z.boolean(),
  appId: z.string().min(1).nullable(),
  templateId: z.string().min(1).nullable(),
  deliveryTimeLocal: hhmmSchema,
  binding: myWechatBindingSchema.nullable(),
});

export const updateCareReminderSubscribeStatusRequestSchema = z.object({
  statuses: z.record(z.string().trim().min(1), wechatSubscribePromptStatusSchema),
});

export const updateCareReminderSubscribeStatusResponseSchema = z.object({
  ok: z.literal(true),
  config: careReminderConfigResponseSchema,
});

export const getProductCareReminderRulesResponseSchema = z.object({
  productId: z.string().trim().min(1),
  rules: z.array(careReminderRuleSchema).min(1).max(4),
});

export const updateProductCareReminderRulesRequestSchema = z.object({
  rules: z.array(careReminderRuleInputSchema).min(1).max(4),
});

export const updateProductCareReminderRulesResponseSchema = z.object({
  productId: z.string().trim().min(1),
  rules: z.array(careReminderRuleSchema).min(1).max(4),
});

export const reminderPreferencesSchema = z.object({
  dailyDigestEnabled: z.boolean(),
  needMatingEnabled: z.boolean(),
  nodeAlertEnabled: z.boolean(),
  sendTimeLocal: hhmmSchema,
  timezone: z.string().trim().min(1).max(64),
  quietHoursStart: hhmmSchema.nullable(),
  quietHoursEnd: hhmmSchema.nullable(),
  channel: notificationChannelSchema,
  language: z.string().trim().min(1).max(16),
  updatedAt: z.string().datetime().nullable(),
});

export const getReminderPreferencesResponseSchema = z.object({
  preferences: reminderPreferencesSchema,
});

export const updateReminderPreferencesRequestSchema = reminderPreferencesSchema.pick({
  dailyDigestEnabled: true,
  needMatingEnabled: true,
  nodeAlertEnabled: true,
  sendTimeLocal: true,
  timezone: true,
  quietHoursStart: true,
  quietHoursEnd: true,
  language: true,
});

export const updateReminderPreferencesResponseSchema = z.object({
  preferences: reminderPreferencesSchema,
});

export const tenantReminderPolicySchema = z.object({
  dailyDigestEnabled: z.boolean(),
  dailyDigestSendTime: hhmmSchema,
  needMatingEnabled: z.boolean(),
  needMatingStartDays: z.number().int().min(1).max(365),
  needMatingWarningDays: z.number().int().min(1).max(365),
  nodeAlertEnabled: z.boolean(),
  ruleVersion: z.number().int().min(1),
  updatedAt: z.string().datetime().nullable(),
});

export const getTenantReminderPolicyResponseSchema = z.object({
  policy: tenantReminderPolicySchema,
});

export const updateTenantReminderPolicyRequestSchema = tenantReminderPolicySchema.pick({
  dailyDigestEnabled: true,
  dailyDigestSendTime: true,
  needMatingEnabled: true,
  needMatingStartDays: true,
  needMatingWarningDays: true,
  nodeAlertEnabled: true,
});

export const updateTenantReminderPolicyResponseSchema = z.object({
  policy: tenantReminderPolicySchema,
});

export const notificationJobsQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  status: notificationJobStatusSchema.optional(),
  sceneCode: notificationSceneSchema.optional(),
});

export const notificationJobListItemSchema = z.object({
  id: z.string().min(1),
  tenantId: z.string().min(1),
  userId: z.string().min(1),
  userName: z.string().nullable(),
  userEmail: z.string().email(),
  channel: notificationChannelSchema,
  sceneCode: notificationSceneSchema,
  status: notificationJobStatusSchema,
  dedupeKey: z.string().min(1),
  scheduledAt: z.string().datetime(),
  attemptCount: z.number().int().nonnegative(),
  nextRetryAt: z.string().datetime().nullable(),
  ruleVersion: z.number().int().min(1),
  lastErrorCode: z.string().nullable(),
  lastErrorMessage: z.string().nullable(),
  sentAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const listNotificationJobsResponseSchema = z.object({
  jobs: z.array(notificationJobListItemSchema),
});

export const notificationDeliveriesQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(20),
  resultStatus: notificationDeliveryResultStatusSchema.optional(),
  sceneCode: notificationSceneSchema.optional(),
});

export const notificationDeliveryListItemSchema = z.object({
  id: z.string().min(1),
  jobId: z.string().min(1),
  tenantId: z.string().min(1),
  userId: z.string().min(1),
  userName: z.string().nullable(),
  userEmail: z.string().email(),
  sceneCode: notificationSceneSchema,
  templateId: z.string().min(1),
  attemptNo: z.number().int().positive(),
  resultStatus: notificationDeliveryResultStatusSchema,
  errorCode: z.string().nullable(),
  errorMessage: z.string().nullable(),
  sentAt: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
});

export const listNotificationDeliveriesResponseSchema = z.object({
  deliveries: z.array(notificationDeliveryListItemSchema),
});

export const retryNotificationDeliveryResponseSchema = z.object({
  ok: z.literal(true),
  job: notificationJobListItemSchema,
});

export const adminNotificationTemplateReadinessSchema = z.object({
  sceneCode: notificationSceneSchema,
  sourceEnvKey: z.string().min(1),
  templateId: z.string().nullable(),
  configured: z.boolean(),
  jumpPathTemplate: z.string().min(1),
});

export const adminNotificationChannelReadinessResponseSchema = z.object({
  enabled: z.boolean(),
  ready: z.boolean(),
  dryRun: z.boolean(),
  appId: z.string().nullable(),
  missingFields: z.array(z.string()),
  templates: z.array(adminNotificationTemplateReadinessSchema),
});

export type WechatBindingSubscribeStatus = z.infer<typeof wechatBindingSubscribeStatusSchema>;
export type NotificationChannel = z.infer<typeof notificationChannelSchema>;
export type NotificationScene = z.infer<typeof notificationSceneSchema>;
export type NotificationJobStatus = z.infer<typeof notificationJobStatusSchema>;
export type NotificationDeliveryResultStatus = z.infer<typeof notificationDeliveryResultStatusSchema>;
export type CareReminderType = z.infer<typeof careReminderTypeSchema>;
export type MyWechatBinding = z.infer<typeof myWechatBindingSchema>;
export type MyWechatBindingStatusResponse = z.infer<typeof myWechatBindingStatusResponseSchema>;
export type WechatJsSdkConfigQuery = z.infer<typeof wechatJsSdkConfigQuerySchema>;
export type WechatSubscribePromptStatus = z.infer<typeof wechatSubscribePromptStatusSchema>;
export type CareReminderRuleInput = z.infer<typeof careReminderRuleInputSchema>;
export type CareReminderRule = z.infer<typeof careReminderRuleSchema>;
export type TodayCareReminderItem = z.infer<typeof todayCareReminderItemSchema>;
export type CareReminderConfigResponse = z.infer<typeof careReminderConfigResponseSchema>;
export type UpdateCareReminderSubscribeStatusRequest = z.infer<
  typeof updateCareReminderSubscribeStatusRequestSchema
>;
export type UpdateCareReminderSubscribeStatusResponse = z.infer<
  typeof updateCareReminderSubscribeStatusResponseSchema
>;
export type GetTodayCareRemindersResponse = z.infer<
  typeof getTodayCareRemindersResponseSchema
>;
export type GetProductCareReminderRulesResponse = z.infer<
  typeof getProductCareReminderRulesResponseSchema
>;
export type UpdateProductCareReminderRulesRequest = z.infer<
  typeof updateProductCareReminderRulesRequestSchema
>;
export type UpdateProductCareReminderRulesResponse = z.infer<
  typeof updateProductCareReminderRulesResponseSchema
>;
export type ReminderPreferences = z.infer<typeof reminderPreferencesSchema>;
export type GetReminderPreferencesResponse = z.infer<typeof getReminderPreferencesResponseSchema>;
export type UpdateWechatBindingSubscribeStatusRequest = z.infer<
  typeof updateWechatBindingSubscribeStatusRequestSchema
>;
export type UpdateWechatBindingSubscribeStatusResponse = z.infer<
  typeof updateWechatBindingSubscribeStatusResponseSchema
>;
export type UpdateReminderPreferencesRequest = z.infer<typeof updateReminderPreferencesRequestSchema>;
export type UpdateReminderPreferencesResponse = z.infer<typeof updateReminderPreferencesResponseSchema>;
export type TenantReminderPolicy = z.infer<typeof tenantReminderPolicySchema>;
export type GetTenantReminderPolicyResponse = z.infer<typeof getTenantReminderPolicyResponseSchema>;
export type UpdateTenantReminderPolicyRequest = z.infer<typeof updateTenantReminderPolicyRequestSchema>;
export type UpdateTenantReminderPolicyResponse = z.infer<typeof updateTenantReminderPolicyResponseSchema>;
export type NotificationJobsQuery = z.infer<typeof notificationJobsQuerySchema>;
export type NotificationJobListItem = z.infer<typeof notificationJobListItemSchema>;
export type ListNotificationJobsResponse = z.infer<typeof listNotificationJobsResponseSchema>;
export type NotificationDeliveriesQuery = z.infer<typeof notificationDeliveriesQuerySchema>;
export type NotificationDeliveryListItem = z.infer<typeof notificationDeliveryListItemSchema>;
export type ListNotificationDeliveriesResponse = z.infer<typeof listNotificationDeliveriesResponseSchema>;
export type RetryNotificationDeliveryResponse = z.infer<typeof retryNotificationDeliveryResponseSchema>;
export type AdminNotificationChannelReadinessResponse = z.infer<
  typeof adminNotificationChannelReadinessResponseSchema
>;
