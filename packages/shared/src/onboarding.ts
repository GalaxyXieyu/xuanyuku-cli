import { z } from 'zod';

export const CURRENT_ONBOARDING_FLOW_VERSION = 5 as const;

export const onboardingStepKeySchema = z.enum([
  'welcome_sheet',
  'first_turtle_create',
  'first_turtle_edit_entry',
  'dashboard_overview',
  'dashboard_window_switch',
  'product_event_entry',
  'breeder_event_flow',
  'breeder_family_tree',
  'breeder_share_entry',
  'female_asset_actions',
  'share_customize_entry',
  'pedigree_entry',
  'series_public_share',
]);

export const ONBOARDING_STEP_KEYS = onboardingStepKeySchema.options;

export const onboardingStepStatusSchema = z.enum([
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

export const onboardingEventTypeSchema = z.enum(['shown', 'acted', 'completed', 'blocked']);

export const onboardingDismissScopeSchema = z.enum(['step', 'all']);

export const onboardingDismissModeSchema = z.enum(['snooze', 'dismiss']);

export const onboardingStepProgressSchema = z.object({
  stepKey: onboardingStepKeySchema,
  introducedInVersion: z.number().int().positive(),
  status: onboardingStepStatusSchema,
  shownCount: z.number().int().nonnegative(),
  dismissCount: z.number().int().nonnegative(),
  anchorKey: z.string().trim().max(120).nullable(),
  blockedReason: z.string().trim().max(240).nullable(),
  lastEventAt: z.string().datetime().nullable(),
  lastShownAt: z.string().datetime().nullable(),
  shownAt: z.string().datetime().nullable(),
  actedAt: z.string().datetime().nullable(),
  completedAt: z.string().datetime().nullable(),
  dismissedAt: z.string().datetime().nullable(),
  snoozedUntil: z.string().datetime().nullable(),
});

export const onboardingProgressFactsSchema = z.object({
  productCount: z.number().int().nonnegative(),
  hasDashboardData: z.boolean(),
  hasPedigreeData: z.boolean(),
});

export const onboardingProgressSchema = z.object({
  enabled: z.boolean(),
  flowVersion: z.number().int().positive(),
  dismissedAllAt: z.string().datetime().nullable(),
  lastPromptedStep: onboardingStepKeySchema.nullable(),
  cooldownUntil: z.string().datetime().nullable(),
  createdAt: z.string().datetime().nullable(),
  updatedAt: z.string().datetime().nullable(),
  facts: onboardingProgressFactsSchema,
  steps: z.record(z.string(), onboardingStepProgressSchema),
});

export const getOnboardingProgressQuerySchema = z.object({
  bootstrap: z.coerce.boolean().optional().default(false),
});

export const getOnboardingProgressResponseSchema = z.object({
  progress: onboardingProgressSchema,
});

export const recordOnboardingEventRequestSchema = z.object({
  stepKey: onboardingStepKeySchema,
  event: onboardingEventTypeSchema,
  route: z.string().trim().max(240).optional(),
  anchorKey: z.string().trim().max(120).optional(),
  reason: z.string().trim().max(240).optional(),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

export const recordOnboardingEventResponseSchema = getOnboardingProgressResponseSchema;

export const dismissOnboardingRequestSchema = z
  .object({
    scope: onboardingDismissScopeSchema,
    stepKey: onboardingStepKeySchema.optional(),
    mode: onboardingDismissModeSchema.optional().default('snooze'),
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

export const dismissOnboardingResponseSchema = getOnboardingProgressResponseSchema;

export const resetOnboardingResponseSchema = getOnboardingProgressResponseSchema;

export type OnboardingDismissMode = z.infer<typeof onboardingDismissModeSchema>;
export type OnboardingDismissRequest = z.infer<typeof dismissOnboardingRequestSchema>;
export type OnboardingDismissResponse = z.infer<typeof dismissOnboardingResponseSchema>;
export type OnboardingDismissScope = z.infer<typeof onboardingDismissScopeSchema>;
export type OnboardingEventType = z.infer<typeof onboardingEventTypeSchema>;
export type OnboardingProgress = z.infer<typeof onboardingProgressSchema>;
export type OnboardingProgressFacts = z.infer<typeof onboardingProgressFactsSchema>;
export type OnboardingStepKey = z.infer<typeof onboardingStepKeySchema>;
export type OnboardingStepProgress = z.infer<typeof onboardingStepProgressSchema>;
export type OnboardingStepStatus = z.infer<typeof onboardingStepStatusSchema>;
export type GetOnboardingProgressQuery = z.infer<typeof getOnboardingProgressQuerySchema>;
export type GetOnboardingProgressResponse = z.infer<typeof getOnboardingProgressResponseSchema>;
export type RecordOnboardingEventRequest = z.infer<typeof recordOnboardingEventRequestSchema>;
export type RecordOnboardingEventResponse = z.infer<typeof recordOnboardingEventResponseSchema>;
export type ResetOnboardingResponse = z.infer<typeof resetOnboardingResponseSchema>;
