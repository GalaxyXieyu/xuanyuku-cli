import { z } from 'zod';

export const CURRENT_MINIAPP_ONBOARDING_FLOW_VERSION = 1 as const;

export const miniappOnboardingStepKeySchema = z.enum([
  'welcome_sheet',
  'first_pet_create',
  'first_pet_enrich',
  'first_record_entry',
  'footprint_overview',
  'relation_preview',
  'public_profile_preview',
  'share_settings_entry',
]);

export const MINIAPP_ONBOARDING_STEP_KEYS = miniappOnboardingStepKeySchema.options;

export const miniappOnboardingStepStatusSchema = z.enum([
  'idle',
  'eligible',
  'scheduled',
  'shown',
  'acted',
  'completed',
  'snoozed',
  'blocked',
  'dismissed',
]);

export const miniappOnboardingEventTypeSchema = z.enum(['shown', 'acted', 'completed', 'blocked']);

export const miniappOnboardingDismissScopeSchema = z.enum(['step', 'all']);

export const miniappOnboardingDismissModeSchema = z.enum(['snooze', 'dismiss']);

export const miniappOnboardingStepProgressSchema = z.object({
  stepKey: miniappOnboardingStepKeySchema,
  introducedInVersion: z.number().int().positive(),
  status: miniappOnboardingStepStatusSchema,
  shownCount: z.number().int().nonnegative(),
  dismissCount: z.number().int().nonnegative(),
  blockedReason: z.string().trim().max(240).nullable(),
  lastEventAt: z.string().datetime().nullable(),
  lastShownAt: z.string().datetime().nullable(),
  shownAt: z.string().datetime().nullable(),
  actedAt: z.string().datetime().nullable(),
  completedAt: z.string().datetime().nullable(),
  dismissedAt: z.string().datetime().nullable(),
  snoozedUntil: z.string().datetime().nullable(),
});

export const miniappOnboardingProgressFactsSchema = z.object({
  productCount: z.number().int().nonnegative(),
  hasRelationData: z.boolean(),
  hasPublicProfileReady: z.boolean(),
});

export const miniappOnboardingProgressSchema = z.object({
  enabled: z.boolean(),
  flowVersion: z.number().int().positive(),
  firstMiniappEntryAt: z.string().datetime().nullable(),
  autoWindowEndsAt: z.string().datetime().nullable(),
  manuallyRestartedAt: z.string().datetime().nullable(),
  dismissedAllAt: z.string().datetime().nullable(),
  lastPromptedStep: miniappOnboardingStepKeySchema.nullable(),
  cooldownUntil: z.string().datetime().nullable(),
  createdAt: z.string().datetime().nullable(),
  updatedAt: z.string().datetime().nullable(),
  facts: miniappOnboardingProgressFactsSchema,
  steps: z.record(z.string(), miniappOnboardingStepProgressSchema),
});

export const getMiniappOnboardingProgressQuerySchema = z.object({
  bootstrap: z.coerce.boolean().optional().default(false),
});

export const getMiniappOnboardingProgressResponseSchema = z.object({
  progress: miniappOnboardingProgressSchema,
});

export const recordMiniappOnboardingEventRequestSchema = z.object({
  stepKey: miniappOnboardingStepKeySchema,
  event: miniappOnboardingEventTypeSchema,
  route: z.string().trim().max(240).optional(),
  reason: z.string().trim().max(240).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const recordMiniappOnboardingEventResponseSchema = getMiniappOnboardingProgressResponseSchema;

export const dismissMiniappOnboardingRequestSchema = z
  .object({
    scope: miniappOnboardingDismissScopeSchema,
    stepKey: miniappOnboardingStepKeySchema.optional(),
    mode: miniappOnboardingDismissModeSchema.optional().default('snooze'),
    reason: z.string().trim().max(240).optional(),
  })
  .superRefine((value, ctx) => {
    if (value.scope === 'step' && !value.stepKey) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['stepKey'],
        message: 'stepKey is required when scope is step.',
      });
    }
  });

export const dismissMiniappOnboardingResponseSchema = getMiniappOnboardingProgressResponseSchema;

export const resetMiniappOnboardingResponseSchema = getMiniappOnboardingProgressResponseSchema;

export const manualRestartMiniappOnboardingResponseSchema = getMiniappOnboardingProgressResponseSchema;

export type MiniappOnboardingDismissMode = z.infer<typeof miniappOnboardingDismissModeSchema>;
export type MiniappOnboardingDismissRequest = z.infer<typeof dismissMiniappOnboardingRequestSchema>;
export type MiniappOnboardingDismissResponse = z.infer<typeof dismissMiniappOnboardingResponseSchema>;
export type MiniappOnboardingDismissScope = z.infer<typeof miniappOnboardingDismissScopeSchema>;
export type MiniappOnboardingEventType = z.infer<typeof miniappOnboardingEventTypeSchema>;
export type MiniappOnboardingProgress = z.infer<typeof miniappOnboardingProgressSchema>;
export type MiniappOnboardingProgressFacts = z.infer<typeof miniappOnboardingProgressFactsSchema>;
export type MiniappOnboardingStepKey = z.infer<typeof miniappOnboardingStepKeySchema>;
export type MiniappOnboardingStepProgress = z.infer<typeof miniappOnboardingStepProgressSchema>;
export type MiniappOnboardingStepStatus = z.infer<typeof miniappOnboardingStepStatusSchema>;
export type GetMiniappOnboardingProgressQuery = z.infer<typeof getMiniappOnboardingProgressQuerySchema>;
export type GetMiniappOnboardingProgressResponse = z.infer<typeof getMiniappOnboardingProgressResponseSchema>;
export type ManualRestartMiniappOnboardingResponse = z.infer<
  typeof manualRestartMiniappOnboardingResponseSchema
>;
export type RecordMiniappOnboardingEventRequest = z.infer<typeof recordMiniappOnboardingEventRequestSchema>;
export type RecordMiniappOnboardingEventResponse = z.infer<typeof recordMiniappOnboardingEventResponseSchema>;
export type ResetMiniappOnboardingResponse = z.infer<typeof resetMiniappOnboardingResponseSchema>;
