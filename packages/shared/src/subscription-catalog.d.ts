import { z } from 'zod';
import { tenantSubscriptionPlanSchema } from './subscription';
export declare const payableTenantSubscriptionPlanSchema: z.ZodEnum<["BASIC", "PRO"]>;
export declare const subscriptionDurationDaysSchema: z.ZodUnion<[z.ZodLiteral<30>, z.ZodLiteral<90>, z.ZodLiteral<365>]>;
export declare const SUBSCRIPTION_PLAN_PRODUCT_LIMITS: {
    readonly FREE: 10;
    readonly BASIC: 30;
    readonly PRO: 200;
};
export declare const SUBSCRIPTION_PLAN_MONTHLY_PRICE_CENTS: {
    readonly FREE: 0;
    readonly BASIC: 2800;
    readonly PRO: 4900;
};
export declare const SUBSCRIPTION_PRICE_BOOK: {
    readonly BASIC: {
        readonly 30: 2800;
        readonly 90: 7900;
        readonly 365: 29900;
    };
    readonly PRO: {
        readonly 30: 4900;
        readonly 90: 12900;
        readonly 365: 49900;
    };
};
export declare function isPayableTenantSubscriptionPlan(plan: z.infer<typeof tenantSubscriptionPlanSchema>): plan is z.infer<typeof payableTenantSubscriptionPlanSchema>;
export declare function resolveSubscriptionPriceCents(plan: z.infer<typeof payableTenantSubscriptionPlanSchema>, durationDays: z.infer<typeof subscriptionDurationDaysSchema>): number;
export type PayableTenantSubscriptionPlan = z.infer<typeof payableTenantSubscriptionPlanSchema>;
export type SubscriptionDurationDays = z.infer<typeof subscriptionDurationDaysSchema>;
