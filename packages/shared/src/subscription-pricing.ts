import { z } from 'zod';

import {
  payableTenantSubscriptionPlanSchema,
  SUBSCRIPTION_PRICE_BOOK,
  subscriptionDurationDaysSchema,
} from './subscription-catalog';

export const subscriptionDiscountStatusSchema = z.enum([
  'DISABLED',
  'SCHEDULED',
  'ACTIVE',
  'EXPIRED',
]);

export const subscriptionPricingItemSchema = z.object({
  plan: payableTenantSubscriptionPlanSchema,
  durationDays: subscriptionDurationDaysSchema,
  listPriceCents: z.number().int().nonnegative(),
  effectivePriceCents: z.number().int().nonnegative(),
  payRateBps: z.number().int().min(1).max(10000),
  discountStatus: subscriptionDiscountStatusSchema,
  discountStartsAt: z.string().datetime().nullable(),
  discountEndsAt: z.string().datetime().nullable(),
});

const subscriptionPricingDiscountBaseSchema = z.object({
  enabled: z.boolean(),
  payRateBps: z.number().int().min(1).max(10000),
  startsAt: z.string().datetime().nullable(),
  endsAt: z.string().datetime().nullable(),
  status: subscriptionDiscountStatusSchema,
});

export const subscriptionPricingDiscountSchema = subscriptionPricingDiscountBaseSchema.superRefine((value, ctx) => {
    if (!value.enabled) {
      return;
    }

    if (!value.startsAt) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'startsAt is required when discount is enabled.',
        path: ['startsAt'],
      });
    }

    if (!value.endsAt) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'endsAt is required when discount is enabled.',
        path: ['endsAt'],
      });
    }

    if (value.payRateBps >= 10000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'payRateBps must be less than 10000 when discount is enabled.',
        path: ['payRateBps'],
      });
    }

    if (value.startsAt && value.endsAt && new Date(value.endsAt).getTime() <= new Date(value.startsAt).getTime()) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'endsAt must be greater than startsAt.',
        path: ['endsAt'],
      });
    }
});

export const subscriptionPricingCatalogSchema = z.object({
  generatedAt: z.string().datetime(),
  discount: subscriptionPricingDiscountSchema,
  items: z.array(subscriptionPricingItemSchema),
});

export const subscriptionPricingCatalogResponseSchema = z.object({
  catalog: subscriptionPricingCatalogSchema,
});

export const updateAdminSubscriptionPricingRequestSchema = z.object({
  items: z
    .array(
      z.object({
        plan: payableTenantSubscriptionPlanSchema,
        durationDays: subscriptionDurationDaysSchema,
        listPriceCents: z.number().int().nonnegative(),
      }),
    )
    .length(6),
  discount: subscriptionPricingDiscountBaseSchema.omit({
    status: true,
  }),
});

export const adminSubscriptionPricingResponseSchema = z.object({
  catalog: subscriptionPricingCatalogSchema,
});

export const updateAdminSubscriptionPricingResponseSchema = z.object({
  catalog: subscriptionPricingCatalogSchema,
  auditLogId: z.string().min(1),
});

export const DEFAULT_SUBSCRIPTION_PRICING_ITEMS = [
  { plan: 'BASIC', durationDays: 30, listPriceCents: SUBSCRIPTION_PRICE_BOOK.BASIC[30] },
  { plan: 'BASIC', durationDays: 90, listPriceCents: SUBSCRIPTION_PRICE_BOOK.BASIC[90] },
  { plan: 'BASIC', durationDays: 365, listPriceCents: SUBSCRIPTION_PRICE_BOOK.BASIC[365] },
  { plan: 'PRO', durationDays: 30, listPriceCents: SUBSCRIPTION_PRICE_BOOK.PRO[30] },
  { plan: 'PRO', durationDays: 90, listPriceCents: SUBSCRIPTION_PRICE_BOOK.PRO[90] },
  { plan: 'PRO', durationDays: 365, listPriceCents: SUBSCRIPTION_PRICE_BOOK.PRO[365] },
] as const;

export type SubscriptionDiscountStatus = z.infer<typeof subscriptionDiscountStatusSchema>;
export type SubscriptionPricingItem = z.infer<typeof subscriptionPricingItemSchema>;
export type SubscriptionPricingDiscount = z.infer<typeof subscriptionPricingDiscountSchema>;
export type SubscriptionPricingCatalog = z.infer<typeof subscriptionPricingCatalogSchema>;
export type SubscriptionPricingCatalogResponse = z.infer<typeof subscriptionPricingCatalogResponseSchema>;
export type UpdateAdminSubscriptionPricingRequest = z.infer<
  typeof updateAdminSubscriptionPricingRequestSchema
>;
export type AdminSubscriptionPricingResponse = z.infer<typeof adminSubscriptionPricingResponseSchema>;
export type UpdateAdminSubscriptionPricingResponse = z.infer<
  typeof updateAdminSubscriptionPricingResponseSchema
>;
