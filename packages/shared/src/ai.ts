import { z } from 'zod';

import { ErrorCode } from './error-codes';
import { storageObjectKeySchema } from './storage';

const TEN_MB_BYTES = 10 * 1024 * 1024;
const THIRTY_MB_BYTES = 30 * 1024 * 1024;
const ISO_DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export const aiQuotaScopeSchema = z.enum(['tenant']);
export const aiQuotaPeriodSchema = z.enum(['monthly']);

export const aiQuotaUnitSchema = z.enum(['image_count']);

export const aiInputLimitSchema = z.object({
  maxImages: z.literal(3),
  maxSingleImageBytes: z.literal(TEN_MB_BYTES),
  // Allow up to 3 images at 10MB each.
  maxTotalInputBytes: z.literal(THIRTY_MB_BYTES)
});

export const aiQuotaSummarySchema = z.object({
  scope: aiQuotaScopeSchema,
  period: aiQuotaPeriodSchema,
  unit: aiQuotaUnitSchema,
  limit: z.number().int().positive().nullable(),
  used: z.number().int().nonnegative(),
  remaining: z.number().int().nonnegative().nullable(),
  resetAt: z.string().datetime().nullable()
});

export const aiQuotaStatusResponseSchema = z.object({
  tenantId: z.string().min(1),
  items: z.array(aiQuotaSummarySchema),
  checkedAt: z.string().datetime()
});

export const turtleAnalysisImageInputSchema = z.object({
  key: storageObjectKeySchema,
  contentType: z.string().trim().min(1).max(255).optional(),
  sizeBytes: z.number().int().positive().max(TEN_MB_BYTES).optional()
});

export const turtleAnalysisEnvironmentSchema = z.object({
  waterTempC: z.number().min(0).max(50).optional(),
  baskingTempC: z.number().min(0).max(80).optional(),
  tankSizeLiters: z.number().min(0).max(20000).optional(),
  diet: z.string().trim().min(1).max(500).optional()
});

export const turtleAnalysisRequestSchema = z.object({
  images: z.array(turtleAnalysisImageInputSchema).min(1).max(3),
  species: z.string().trim().min(1).max(120).optional(),
  ageRange: z.string().trim().min(1).max(120).optional(),
  weightGrams: z.number().positive().max(50000).optional(),
  environment: turtleAnalysisEnvironmentSchema.optional(),
  question: z.string().trim().min(1).max(1000).optional()
});

export const turtleAnalysisResultSchema = z.object({
  observations: z.array(z.string().min(1)).min(1),
  riskNotes: z.array(z.string().min(1)).min(1),
  careChecklist: z.array(z.string().min(1)).min(1),
  followUp: z.array(z.string().min(1)).min(1),
  disclaimer: z.string().min(1)
});

export const turtleAnalysisResponseSchema = z.object({
  analysisId: z.string().min(1),
  result: turtleAnalysisResultSchema,
  quotaConsumed: z.number().int().positive(),
  quota: aiQuotaSummarySchema,
  modelId: z.string().min(1),
  limits: aiInputLimitSchema
});

export const aiPurchasePackSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  imageCredits: z.number().int().positive(),
  priceCents: z.number().int().positive(),
  currency: z.string().trim().length(3)
});

export const aiQuotaExceededErrorDataSchema = z.object({
  remaining: z.number().int().nonnegative(),
  resetAt: z.string().datetime().nullable(),
  purchase: z.object({
    packs: z.array(aiPurchasePackSchema)
  })
});

export const aiQuotaExceededErrorResponseSchema = z.object({
  message: z.string().min(1),
  errorCode: z.literal(ErrorCode.QuotaExceeded),
  statusCode: z.union([z.literal(402), z.literal(429)]),
  data: aiQuotaExceededErrorDataSchema
});

export const aiInputTooLargeErrorResponseSchema = z.object({
  message: z.string().min(1),
  errorCode: z.literal(ErrorCode.InvalidRequestPayload),
  statusCode: z.literal(413),
  data: z.object({
    maxSingleImageBytes: z.literal(TEN_MB_BYTES),
    actualSingleImageBytes: z.number().int().positive().optional(),
    maxTotalInputBytes: z.literal(THIRTY_MB_BYTES),
    actualTotalInputBytes: z.number().int().positive().optional(),
    reason: z.enum(['single_image', 'total']).optional()
  })
});

export const aiPlanTierSchema = z.enum(['FREE', 'BASIC', 'PRO']);
export const aiAssistantCapabilitySchema = z.enum(['auto_record', 'query_only', 'product_intake']);
export const aiAssistantQuotaUnitSchema = z.enum(['action_count', 'query_count']);
export const aiAssistantProviderSchema = z.enum(['siliconflow', 'local_heuristic', 'local_defaults']);

export const aiAssistantQuotaItemSchema = z.object({
  capability: aiAssistantCapabilitySchema,
  period: aiQuotaPeriodSchema,
  unit: aiAssistantQuotaUnitSchema,
  baseLimit: z.number().int().nonnegative(),
  topUpBalance: z.number().int().nonnegative(),
  consumed: z.number().int().nonnegative(),
  remaining: z.number().int().nonnegative(),
  resetAt: z.string().datetime().nullable()
});

export const aiAssistantQuotaHighlightSchema = z.object({
  capability: aiAssistantCapabilitySchema,
  baseLimit: z.number().int().nonnegative(),
  topUpBalance: z.number().int().nonnegative(),
  remaining: z.number().int().nonnegative(),
  consumed: z.number().int().nonnegative()
});

export const aiAssistantQuotaStatusResponseSchema = z.object({
  tenantId: z.string().min(1),
  plan: aiPlanTierSchema,
  allowMultipleTopUps: z.literal(true),
  highlights: z.object({
    autoRecord: aiAssistantQuotaHighlightSchema.extend({
      capability: z.literal('auto_record')
    }),
    queryOnly: aiAssistantQuotaHighlightSchema.extend({
      capability: z.literal('query_only')
    })
  }),
  items: z.array(aiAssistantQuotaItemSchema).min(1),
  checkedAt: z.string().datetime()
});

export const aiReservedStatusSchema = z.literal('reserved');
export const aiReservedTodoCodeSchema = z.enum([
  'NO_DB_PERSISTENCE',
  'PAYMENT_NOT_CONNECTED',
  'AUTO_EXECUTION_NOT_ENABLED',
  'QUERY_ENGINE_NOT_ENABLED'
]);

export const aiReservedTodoItemSchema = z.object({
  code: aiReservedTodoCodeSchema,
  detail: z.string().trim().min(1).max(500)
});

export const aiAutoRecordEventTypeSchema = z.enum(['daily', 'health', 'mating', 'egg', 'change_mate']);
export const aiAutoRecordStatusSchema = z.enum(['success', 'fallback']);

export const aiAutoRecordIntentSchema = z.object({
  eventType: aiAutoRecordEventTypeSchema,
  eggCount: z.number().int().min(0).max(999).nullable().optional(),
  fertilizedCount: z.number().int().min(0).max(999).nullable().optional(),
  confidence: z.number().min(0).max(1),
  reason: z.string().trim().min(1).max(200).nullable().optional(),
  shouldSuggestBreedingDetails: z.boolean()
});

export const aiAutoRecordIntentRequestSchema = z.object({
  input: z.string().trim().min(1).max(2000),
  referenceDate: z.string().regex(ISO_DATE_PATTERN).optional(),
  timezone: z.string().trim().min(1).max(64).optional(),
  productSex: z.enum(['male', 'female', 'unknown']).optional()
});

export const aiAutoRecordIntentResponseSchema = z.object({
  requestId: z.string().min(1),
  status: aiAutoRecordStatusSchema,
  capability: z.literal('auto_record'),
  provider: aiAssistantProviderSchema,
  model: z.string().trim().min(1).max(120),
  result: aiAutoRecordIntentSchema
});

export const aiAudioTranscriptionResponseSchema = z.object({
  requestId: z.string().min(1),
  status: z.literal('success'),
  provider: aiAssistantProviderSchema,
  model: z.string().trim().min(1).max(120),
  text: z.string().max(5000),
  language: z.string().trim().min(1).max(32).nullable().optional()
});

export const aiProductIntakeStatusSchema = z.enum(['success', 'fallback']);
export const aiProductIntakeSexSchema = z.enum(['male', 'female', 'unknown']);
export const aiProductIntakeSeriesResolutionModeSchema = z.enum(['matched', 'created_needed', 'defaulted']);
export const aiProductIntakeDefaultCodeSchema = z.enum(['sex', 'series', 'alias', 'description']);
export const aiProductEnrichmentJobStatusSchema = z.enum(['PENDING', 'PROCESSING', 'SUCCEEDED', 'FAILED']);

export const aiProductIntakeParseRequestSchema = z.object({
  input: z.string().trim().min(1).max(5000),
  referenceDate: z.string().regex(ISO_DATE_PATTERN).optional(),
  timezone: z.string().trim().min(1).max(64).optional(),
  imageCount: z.number().int().min(0).max(9).optional()
});

export const aiProductIntakeParsedFieldsSchema = z.object({
  sex: aiProductIntakeSexSchema.nullable(),
  alias: z.string().trim().min(1).max(120).nullable(),
  seriesName: z.string().trim().min(1).max(120).nullable(),
  description: z.string().trim().min(1).max(5000).nullable()
});

export const aiProductIntakeSeriesResolutionSchema = z.object({
  mode: aiProductIntakeSeriesResolutionModeSchema,
  matchedSeriesId: z.string().trim().min(1).max(120).nullable(),
  matchedSeriesName: z.string().trim().min(1).max(120).nullable(),
  suggestedNewSeriesName: z.string().trim().min(1).max(120).nullable()
});

export const aiProductIntakeParseResultSchema = z.object({
  normalizedInput: z.string().trim().min(1).max(5000),
  confidence: z.number().min(0).max(1),
  fields: aiProductIntakeParsedFieldsSchema,
  seriesResolution: aiProductIntakeSeriesResolutionSchema,
  defaultsApplied: z.array(aiProductIntakeDefaultCodeSchema),
  warnings: z.array(z.string().trim().min(1).max(240)).max(8)
});

export const aiProductIntakeParseResponseSchema = z.object({
  requestId: z.string().min(1),
  status: aiProductIntakeStatusSchema,
  capability: z.literal('product_intake'),
  provider: aiAssistantProviderSchema,
  model: z.string().trim().min(1).max(120),
  result: aiProductIntakeParseResultSchema
});

export const aiProductIntakeSubmitRequestSchema = aiProductIntakeParseRequestSchema.extend({
  imageCount: z.number().int().min(1).max(9)
});

export const aiProductEnrichmentJobSchema = z.object({
  jobId: z.string().min(1),
  status: aiProductEnrichmentJobStatusSchema,
  scheduledAt: z.string().datetime(),
  processedAt: z.string().datetime().nullable()
});

export const aiProductIntakeSubmitResponseSchema = z.object({
  requestId: z.string().min(1),
  status: z.literal('accepted'),
  capability: z.literal('product_intake'),
  productId: z.string().min(1),
  job: aiProductEnrichmentJobSchema
});

export const aiQueryRequestSchema = z.object({
  question: z.string().trim().min(1).max(2000),
  timezone: z.string().trim().min(1).max(64).optional()
});

export const aiQueryResponseSchema = z.object({
  requestId: z.string().min(1),
  status: aiReservedStatusSchema,
  capability: z.literal('query_only'),
  message: z.string().trim().min(1).max(500),
  suggestedMetrics: z.array(z.string().trim().min(1).max(80)).max(8),
  todo: z.array(aiReservedTodoItemSchema).min(1)
});

export const aiTopUpPaymentChannelSchema = z.enum(['wechat', 'alipay']);

export const aiTopUpPackSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  capability: aiAssistantCapabilitySchema,
  credits: z.number().int().positive(),
  priceCents: z.number().int().positive(),
  currency: z.string().trim().length(3)
});

export const aiListTopUpPacksResponseSchema = z.object({
  allowMultipleTopUps: z.literal(true),
  packs: z.array(aiTopUpPackSchema).min(1)
});

export const aiCreateTopUpOrderRequestSchema = z.object({
  packId: z.string().trim().min(1),
  quantity: z.number().int().min(1).max(100).default(1),
  paymentChannel: aiTopUpPaymentChannelSchema
});

export const aiTopUpOrderSchema = z.object({
  orderId: z.string().min(1),
  packId: z.string().min(1),
  capability: aiAssistantCapabilitySchema,
  quantity: z.number().int().min(1).max(100),
  totalCredits: z.number().int().positive(),
  totalPriceCents: z.number().int().positive(),
  currency: z.string().trim().length(3),
  paymentChannel: aiTopUpPaymentChannelSchema,
  createdAt: z.string().datetime(),
  expiresAt: z.string().datetime()
});

export const aiCreateTopUpOrderResponseSchema = z.object({
  status: aiReservedStatusSchema,
  message: z.string().trim().min(1).max(500),
  order: aiTopUpOrderSchema,
  todo: z.array(aiReservedTodoItemSchema).min(1)
});

export type AiQuotaSummary = z.infer<typeof aiQuotaSummarySchema>;
export type AiQuotaStatusResponse = z.infer<typeof aiQuotaStatusResponseSchema>;
export type TurtleAnalysisRequest = z.infer<typeof turtleAnalysisRequestSchema>;
export type TurtleAnalysisResponse = z.infer<typeof turtleAnalysisResponseSchema>;
export type AiQuotaExceededErrorResponse = z.infer<typeof aiQuotaExceededErrorResponseSchema>;
export type AiInputTooLargeErrorResponse = z.infer<typeof aiInputTooLargeErrorResponseSchema>;
export type AiPlanTier = z.infer<typeof aiPlanTierSchema>;
export type AiAssistantCapability = z.infer<typeof aiAssistantCapabilitySchema>;
export type AiAssistantQuotaItem = z.infer<typeof aiAssistantQuotaItemSchema>;
export type AiAssistantQuotaHighlight = z.infer<typeof aiAssistantQuotaHighlightSchema>;
export type AiAssistantQuotaStatusResponse = z.infer<typeof aiAssistantQuotaStatusResponseSchema>;
export type AiAssistantProvider = z.infer<typeof aiAssistantProviderSchema>;
export type AiReservedTodoItem = z.infer<typeof aiReservedTodoItemSchema>;
export type AiAutoRecordIntent = z.infer<typeof aiAutoRecordIntentSchema>;
export type AiAutoRecordIntentRequest = z.infer<typeof aiAutoRecordIntentRequestSchema>;
export type AiAutoRecordIntentResponse = z.infer<typeof aiAutoRecordIntentResponseSchema>;
export type AiAudioTranscriptionResponse = z.infer<typeof aiAudioTranscriptionResponseSchema>;
export type AiProductIntakeDefaultCode = z.infer<typeof aiProductIntakeDefaultCodeSchema>;
export type AiProductIntakeStatus = z.infer<typeof aiProductIntakeStatusSchema>;
export type AiProductIntakeSex = z.infer<typeof aiProductIntakeSexSchema>;
export type AiProductIntakeParseRequest = z.infer<typeof aiProductIntakeParseRequestSchema>;
export type AiProductIntakeParsedFields = z.infer<typeof aiProductIntakeParsedFieldsSchema>;
export type AiProductIntakeSeriesResolution = z.infer<typeof aiProductIntakeSeriesResolutionSchema>;
export type AiProductIntakeParseResult = z.infer<typeof aiProductIntakeParseResultSchema>;
export type AiProductIntakeParseResponse = z.infer<typeof aiProductIntakeParseResponseSchema>;
export type AiProductIntakeSubmitRequest = z.infer<typeof aiProductIntakeSubmitRequestSchema>;
export type AiProductEnrichmentJobStatus = z.infer<typeof aiProductEnrichmentJobStatusSchema>;
export type AiProductEnrichmentJob = z.infer<typeof aiProductEnrichmentJobSchema>;
export type AiProductIntakeSubmitResponse = z.infer<typeof aiProductIntakeSubmitResponseSchema>;
export type AiQueryRequest = z.infer<typeof aiQueryRequestSchema>;
export type AiQueryResponse = z.infer<typeof aiQueryResponseSchema>;
export type AiTopUpPack = z.infer<typeof aiTopUpPackSchema>;
export type AiListTopUpPacksResponse = z.infer<typeof aiListTopUpPacksResponseSchema>;
export type AiCreateTopUpOrderRequest = z.infer<typeof aiCreateTopUpOrderRequestSchema>;
export type AiTopUpOrder = z.infer<typeof aiTopUpOrderSchema>;
export type AiCreateTopUpOrderResponse = z.infer<typeof aiCreateTopUpOrderResponseSchema>;
