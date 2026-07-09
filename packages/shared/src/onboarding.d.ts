import { z } from 'zod';
export declare const CURRENT_ONBOARDING_FLOW_VERSION: 5;
export declare const onboardingStepKeySchema: z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>;
export declare const ONBOARDING_STEP_KEYS: ["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"];
export declare const onboardingStepStatusSchema: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
export declare const onboardingEventTypeSchema: z.ZodEnum<["shown", "acted", "completed", "blocked"]>;
export declare const onboardingDismissScopeSchema: z.ZodEnum<["step", "all"]>;
export declare const onboardingDismissModeSchema: z.ZodEnum<["snooze", "dismiss"]>;
export declare const onboardingStepProgressSchema: z.ZodObject<{
    stepKey: z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>;
    introducedInVersion: z.ZodNumber;
    status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
    shownCount: z.ZodNumber;
    dismissCount: z.ZodNumber;
    anchorKey: z.ZodNullable<z.ZodString>;
    blockedReason: z.ZodNullable<z.ZodString>;
    lastEventAt: z.ZodNullable<z.ZodString>;
    lastShownAt: z.ZodNullable<z.ZodString>;
    shownAt: z.ZodNullable<z.ZodString>;
    actedAt: z.ZodNullable<z.ZodString>;
    completedAt: z.ZodNullable<z.ZodString>;
    dismissedAt: z.ZodNullable<z.ZodString>;
    snoozedUntil: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
    completedAt: string | null;
    stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
    introducedInVersion: number;
    shownCount: number;
    dismissCount: number;
    anchorKey: string | null;
    blockedReason: string | null;
    lastEventAt: string | null;
    lastShownAt: string | null;
    shownAt: string | null;
    actedAt: string | null;
    dismissedAt: string | null;
    snoozedUntil: string | null;
}, {
    status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
    completedAt: string | null;
    stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
    introducedInVersion: number;
    shownCount: number;
    dismissCount: number;
    anchorKey: string | null;
    blockedReason: string | null;
    lastEventAt: string | null;
    lastShownAt: string | null;
    shownAt: string | null;
    actedAt: string | null;
    dismissedAt: string | null;
    snoozedUntil: string | null;
}>;
export declare const onboardingProgressFactsSchema: z.ZodObject<{
    productCount: z.ZodNumber;
    hasDashboardData: z.ZodBoolean;
    hasPedigreeData: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    productCount: number;
    hasDashboardData: boolean;
    hasPedigreeData: boolean;
}, {
    productCount: number;
    hasDashboardData: boolean;
    hasPedigreeData: boolean;
}>;
export declare const onboardingProgressSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    flowVersion: z.ZodNumber;
    dismissedAllAt: z.ZodNullable<z.ZodString>;
    lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>>;
    cooldownUntil: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodNullable<z.ZodString>;
    updatedAt: z.ZodNullable<z.ZodString>;
    facts: z.ZodObject<{
        productCount: z.ZodNumber;
        hasDashboardData: z.ZodBoolean;
        hasPedigreeData: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        productCount: number;
        hasDashboardData: boolean;
        hasPedigreeData: boolean;
    }, {
        productCount: number;
        hasDashboardData: boolean;
        hasPedigreeData: boolean;
    }>;
    steps: z.ZodRecord<z.ZodString, z.ZodObject<{
        stepKey: z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>;
        introducedInVersion: z.ZodNumber;
        status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
        shownCount: z.ZodNumber;
        dismissCount: z.ZodNumber;
        anchorKey: z.ZodNullable<z.ZodString>;
        blockedReason: z.ZodNullable<z.ZodString>;
        lastEventAt: z.ZodNullable<z.ZodString>;
        lastShownAt: z.ZodNullable<z.ZodString>;
        shownAt: z.ZodNullable<z.ZodString>;
        actedAt: z.ZodNullable<z.ZodString>;
        completedAt: z.ZodNullable<z.ZodString>;
        dismissedAt: z.ZodNullable<z.ZodString>;
        snoozedUntil: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
        completedAt: string | null;
        stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
        introducedInVersion: number;
        shownCount: number;
        dismissCount: number;
        anchorKey: string | null;
        blockedReason: string | null;
        lastEventAt: string | null;
        lastShownAt: string | null;
        shownAt: string | null;
        actedAt: string | null;
        dismissedAt: string | null;
        snoozedUntil: string | null;
    }, {
        status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
        completedAt: string | null;
        stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
        introducedInVersion: number;
        shownCount: number;
        dismissCount: number;
        anchorKey: string | null;
        blockedReason: string | null;
        lastEventAt: string | null;
        lastShownAt: string | null;
        shownAt: string | null;
        actedAt: string | null;
        dismissedAt: string | null;
        snoozedUntil: string | null;
    }>>;
}, "strip", z.ZodTypeAny, {
    createdAt: string | null;
    updatedAt: string | null;
    enabled: boolean;
    flowVersion: number;
    dismissedAllAt: string | null;
    lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
    cooldownUntil: string | null;
    facts: {
        productCount: number;
        hasDashboardData: boolean;
        hasPedigreeData: boolean;
    };
    steps: Record<string, {
        status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
        completedAt: string | null;
        stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
        introducedInVersion: number;
        shownCount: number;
        dismissCount: number;
        anchorKey: string | null;
        blockedReason: string | null;
        lastEventAt: string | null;
        lastShownAt: string | null;
        shownAt: string | null;
        actedAt: string | null;
        dismissedAt: string | null;
        snoozedUntil: string | null;
    }>;
}, {
    createdAt: string | null;
    updatedAt: string | null;
    enabled: boolean;
    flowVersion: number;
    dismissedAllAt: string | null;
    lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
    cooldownUntil: string | null;
    facts: {
        productCount: number;
        hasDashboardData: boolean;
        hasPedigreeData: boolean;
    };
    steps: Record<string, {
        status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
        completedAt: string | null;
        stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
        introducedInVersion: number;
        shownCount: number;
        dismissCount: number;
        anchorKey: string | null;
        blockedReason: string | null;
        lastEventAt: string | null;
        lastShownAt: string | null;
        shownAt: string | null;
        actedAt: string | null;
        dismissedAt: string | null;
        snoozedUntil: string | null;
    }>;
}>;
export declare const getOnboardingProgressQuerySchema: z.ZodObject<{
    bootstrap: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    bootstrap: boolean;
}, {
    bootstrap?: boolean | undefined;
}>;
export declare const getOnboardingProgressResponseSchema: z.ZodObject<{
    progress: z.ZodObject<{
        enabled: z.ZodBoolean;
        flowVersion: z.ZodNumber;
        dismissedAllAt: z.ZodNullable<z.ZodString>;
        lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>>;
        cooldownUntil: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
        facts: z.ZodObject<{
            productCount: z.ZodNumber;
            hasDashboardData: z.ZodBoolean;
            hasPedigreeData: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        }, {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        }>;
        steps: z.ZodRecord<z.ZodString, z.ZodObject<{
            stepKey: z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>;
            introducedInVersion: z.ZodNumber;
            status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
            shownCount: z.ZodNumber;
            dismissCount: z.ZodNumber;
            anchorKey: z.ZodNullable<z.ZodString>;
            blockedReason: z.ZodNullable<z.ZodString>;
            lastEventAt: z.ZodNullable<z.ZodString>;
            lastShownAt: z.ZodNullable<z.ZodString>;
            shownAt: z.ZodNullable<z.ZodString>;
            actedAt: z.ZodNullable<z.ZodString>;
            completedAt: z.ZodNullable<z.ZodString>;
            dismissedAt: z.ZodNullable<z.ZodString>;
            snoozedUntil: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    }, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    }>;
}, "strip", z.ZodTypeAny, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    };
}, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    };
}>;
export declare const recordOnboardingEventRequestSchema: z.ZodObject<{
    stepKey: z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>;
    event: z.ZodEnum<["shown", "acted", "completed", "blocked"]>;
    route: z.ZodOptional<z.ZodString>;
    anchorKey: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    event: "shown" | "acted" | "completed" | "blocked";
    stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
    reason?: string | undefined;
    anchorKey?: string | undefined;
    route?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    event: "shown" | "acted" | "completed" | "blocked";
    stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
    reason?: string | undefined;
    anchorKey?: string | undefined;
    route?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export declare const recordOnboardingEventResponseSchema: z.ZodObject<{
    progress: z.ZodObject<{
        enabled: z.ZodBoolean;
        flowVersion: z.ZodNumber;
        dismissedAllAt: z.ZodNullable<z.ZodString>;
        lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>>;
        cooldownUntil: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
        facts: z.ZodObject<{
            productCount: z.ZodNumber;
            hasDashboardData: z.ZodBoolean;
            hasPedigreeData: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        }, {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        }>;
        steps: z.ZodRecord<z.ZodString, z.ZodObject<{
            stepKey: z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>;
            introducedInVersion: z.ZodNumber;
            status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
            shownCount: z.ZodNumber;
            dismissCount: z.ZodNumber;
            anchorKey: z.ZodNullable<z.ZodString>;
            blockedReason: z.ZodNullable<z.ZodString>;
            lastEventAt: z.ZodNullable<z.ZodString>;
            lastShownAt: z.ZodNullable<z.ZodString>;
            shownAt: z.ZodNullable<z.ZodString>;
            actedAt: z.ZodNullable<z.ZodString>;
            completedAt: z.ZodNullable<z.ZodString>;
            dismissedAt: z.ZodNullable<z.ZodString>;
            snoozedUntil: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    }, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    }>;
}, "strip", z.ZodTypeAny, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    };
}, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    };
}>;
export declare const dismissOnboardingRequestSchema: z.ZodEffects<z.ZodObject<{
    scope: z.ZodEnum<["step", "all"]>;
    stepKey: z.ZodOptional<z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>>;
    mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<["snooze", "dismiss"]>>>;
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    scope: "step" | "all";
    mode: "snooze" | "dismiss";
    reason?: string | undefined;
    stepKey?: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | undefined;
}, {
    scope: "step" | "all";
    reason?: string | undefined;
    stepKey?: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | undefined;
    mode?: "snooze" | "dismiss" | undefined;
}>, {
    scope: "step" | "all";
    mode: "snooze" | "dismiss";
    reason?: string | undefined;
    stepKey?: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | undefined;
}, {
    scope: "step" | "all";
    reason?: string | undefined;
    stepKey?: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | undefined;
    mode?: "snooze" | "dismiss" | undefined;
}>;
export declare const dismissOnboardingResponseSchema: z.ZodObject<{
    progress: z.ZodObject<{
        enabled: z.ZodBoolean;
        flowVersion: z.ZodNumber;
        dismissedAllAt: z.ZodNullable<z.ZodString>;
        lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>>;
        cooldownUntil: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
        facts: z.ZodObject<{
            productCount: z.ZodNumber;
            hasDashboardData: z.ZodBoolean;
            hasPedigreeData: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        }, {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        }>;
        steps: z.ZodRecord<z.ZodString, z.ZodObject<{
            stepKey: z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>;
            introducedInVersion: z.ZodNumber;
            status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
            shownCount: z.ZodNumber;
            dismissCount: z.ZodNumber;
            anchorKey: z.ZodNullable<z.ZodString>;
            blockedReason: z.ZodNullable<z.ZodString>;
            lastEventAt: z.ZodNullable<z.ZodString>;
            lastShownAt: z.ZodNullable<z.ZodString>;
            shownAt: z.ZodNullable<z.ZodString>;
            actedAt: z.ZodNullable<z.ZodString>;
            completedAt: z.ZodNullable<z.ZodString>;
            dismissedAt: z.ZodNullable<z.ZodString>;
            snoozedUntil: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    }, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    }>;
}, "strip", z.ZodTypeAny, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    };
}, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    };
}>;
export declare const resetOnboardingResponseSchema: z.ZodObject<{
    progress: z.ZodObject<{
        enabled: z.ZodBoolean;
        flowVersion: z.ZodNumber;
        dismissedAllAt: z.ZodNullable<z.ZodString>;
        lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>>;
        cooldownUntil: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
        facts: z.ZodObject<{
            productCount: z.ZodNumber;
            hasDashboardData: z.ZodBoolean;
            hasPedigreeData: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        }, {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        }>;
        steps: z.ZodRecord<z.ZodString, z.ZodObject<{
            stepKey: z.ZodEnum<["welcome_sheet", "first_turtle_create", "first_turtle_edit_entry", "dashboard_overview", "dashboard_window_switch", "product_event_entry", "breeder_event_flow", "breeder_family_tree", "breeder_share_entry", "female_asset_actions", "share_customize_entry", "pedigree_entry", "series_public_share"]>;
            introducedInVersion: z.ZodNumber;
            status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
            shownCount: z.ZodNumber;
            dismissCount: z.ZodNumber;
            anchorKey: z.ZodNullable<z.ZodString>;
            blockedReason: z.ZodNullable<z.ZodString>;
            lastEventAt: z.ZodNullable<z.ZodString>;
            lastShownAt: z.ZodNullable<z.ZodString>;
            shownAt: z.ZodNullable<z.ZodString>;
            actedAt: z.ZodNullable<z.ZodString>;
            completedAt: z.ZodNullable<z.ZodString>;
            dismissedAt: z.ZodNullable<z.ZodString>;
            snoozedUntil: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    }, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    }>;
}, "strip", z.ZodTypeAny, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    };
}, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasDashboardData: boolean;
            hasPedigreeData: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_turtle_create" | "first_turtle_edit_entry" | "dashboard_overview" | "dashboard_window_switch" | "product_event_entry" | "breeder_event_flow" | "breeder_family_tree" | "breeder_share_entry" | "female_asset_actions" | "share_customize_entry" | "pedigree_entry" | "series_public_share";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            anchorKey: string | null;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
    };
}>;
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
