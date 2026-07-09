import { z } from 'zod';
export declare const CURRENT_MINIAPP_ONBOARDING_FLOW_VERSION: 1;
export declare const miniappOnboardingStepKeySchema: z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>;
export declare const MINIAPP_ONBOARDING_STEP_KEYS: ["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"];
export declare const miniappOnboardingStepStatusSchema: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
export declare const miniappOnboardingEventTypeSchema: z.ZodEnum<["shown", "acted", "completed", "blocked"]>;
export declare const miniappOnboardingDismissScopeSchema: z.ZodEnum<["step", "all"]>;
export declare const miniappOnboardingDismissModeSchema: z.ZodEnum<["snooze", "dismiss"]>;
export declare const miniappOnboardingStepProgressSchema: z.ZodObject<{
    stepKey: z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>;
    introducedInVersion: z.ZodNumber;
    status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
    shownCount: z.ZodNumber;
    dismissCount: z.ZodNumber;
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
    stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
    introducedInVersion: number;
    shownCount: number;
    dismissCount: number;
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
    stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
    introducedInVersion: number;
    shownCount: number;
    dismissCount: number;
    blockedReason: string | null;
    lastEventAt: string | null;
    lastShownAt: string | null;
    shownAt: string | null;
    actedAt: string | null;
    dismissedAt: string | null;
    snoozedUntil: string | null;
}>;
export declare const miniappOnboardingProgressFactsSchema: z.ZodObject<{
    productCount: z.ZodNumber;
    hasRelationData: z.ZodBoolean;
    hasPublicProfileReady: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    productCount: number;
    hasRelationData: boolean;
    hasPublicProfileReady: boolean;
}, {
    productCount: number;
    hasRelationData: boolean;
    hasPublicProfileReady: boolean;
}>;
export declare const miniappOnboardingProgressSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    flowVersion: z.ZodNumber;
    firstMiniappEntryAt: z.ZodNullable<z.ZodString>;
    autoWindowEndsAt: z.ZodNullable<z.ZodString>;
    manuallyRestartedAt: z.ZodNullable<z.ZodString>;
    dismissedAllAt: z.ZodNullable<z.ZodString>;
    lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>>;
    cooldownUntil: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodNullable<z.ZodString>;
    updatedAt: z.ZodNullable<z.ZodString>;
    facts: z.ZodObject<{
        productCount: z.ZodNumber;
        hasRelationData: z.ZodBoolean;
        hasPublicProfileReady: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        productCount: number;
        hasRelationData: boolean;
        hasPublicProfileReady: boolean;
    }, {
        productCount: number;
        hasRelationData: boolean;
        hasPublicProfileReady: boolean;
    }>;
    steps: z.ZodRecord<z.ZodString, z.ZodObject<{
        stepKey: z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>;
        introducedInVersion: z.ZodNumber;
        status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
        shownCount: z.ZodNumber;
        dismissCount: z.ZodNumber;
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
        stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
        introducedInVersion: number;
        shownCount: number;
        dismissCount: number;
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
        stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
        introducedInVersion: number;
        shownCount: number;
        dismissCount: number;
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
    lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
    cooldownUntil: string | null;
    facts: {
        productCount: number;
        hasRelationData: boolean;
        hasPublicProfileReady: boolean;
    };
    steps: Record<string, {
        status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
        completedAt: string | null;
        stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
        introducedInVersion: number;
        shownCount: number;
        dismissCount: number;
        blockedReason: string | null;
        lastEventAt: string | null;
        lastShownAt: string | null;
        shownAt: string | null;
        actedAt: string | null;
        dismissedAt: string | null;
        snoozedUntil: string | null;
    }>;
    firstMiniappEntryAt: string | null;
    autoWindowEndsAt: string | null;
    manuallyRestartedAt: string | null;
}, {
    createdAt: string | null;
    updatedAt: string | null;
    enabled: boolean;
    flowVersion: number;
    dismissedAllAt: string | null;
    lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
    cooldownUntil: string | null;
    facts: {
        productCount: number;
        hasRelationData: boolean;
        hasPublicProfileReady: boolean;
    };
    steps: Record<string, {
        status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
        completedAt: string | null;
        stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
        introducedInVersion: number;
        shownCount: number;
        dismissCount: number;
        blockedReason: string | null;
        lastEventAt: string | null;
        lastShownAt: string | null;
        shownAt: string | null;
        actedAt: string | null;
        dismissedAt: string | null;
        snoozedUntil: string | null;
    }>;
    firstMiniappEntryAt: string | null;
    autoWindowEndsAt: string | null;
    manuallyRestartedAt: string | null;
}>;
export declare const getMiniappOnboardingProgressQuerySchema: z.ZodObject<{
    bootstrap: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    bootstrap: boolean;
}, {
    bootstrap?: boolean | undefined;
}>;
export declare const getMiniappOnboardingProgressResponseSchema: z.ZodObject<{
    progress: z.ZodObject<{
        enabled: z.ZodBoolean;
        flowVersion: z.ZodNumber;
        firstMiniappEntryAt: z.ZodNullable<z.ZodString>;
        autoWindowEndsAt: z.ZodNullable<z.ZodString>;
        manuallyRestartedAt: z.ZodNullable<z.ZodString>;
        dismissedAllAt: z.ZodNullable<z.ZodString>;
        lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>>;
        cooldownUntil: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
        facts: z.ZodObject<{
            productCount: z.ZodNumber;
            hasRelationData: z.ZodBoolean;
            hasPublicProfileReady: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }>;
        steps: z.ZodRecord<z.ZodString, z.ZodObject<{
            stepKey: z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>;
            introducedInVersion: z.ZodNumber;
            status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
            shownCount: z.ZodNumber;
            dismissCount: z.ZodNumber;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}>;
export declare const recordMiniappOnboardingEventRequestSchema: z.ZodObject<{
    stepKey: z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>;
    event: z.ZodEnum<["shown", "acted", "completed", "blocked"]>;
    route: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    event: "shown" | "acted" | "completed" | "blocked";
    stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
    reason?: string | undefined;
    route?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}, {
    event: "shown" | "acted" | "completed" | "blocked";
    stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
    reason?: string | undefined;
    route?: string | undefined;
    metadata?: Record<string, unknown> | undefined;
}>;
export declare const recordMiniappOnboardingEventResponseSchema: z.ZodObject<{
    progress: z.ZodObject<{
        enabled: z.ZodBoolean;
        flowVersion: z.ZodNumber;
        firstMiniappEntryAt: z.ZodNullable<z.ZodString>;
        autoWindowEndsAt: z.ZodNullable<z.ZodString>;
        manuallyRestartedAt: z.ZodNullable<z.ZodString>;
        dismissedAllAt: z.ZodNullable<z.ZodString>;
        lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>>;
        cooldownUntil: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
        facts: z.ZodObject<{
            productCount: z.ZodNumber;
            hasRelationData: z.ZodBoolean;
            hasPublicProfileReady: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }>;
        steps: z.ZodRecord<z.ZodString, z.ZodObject<{
            stepKey: z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>;
            introducedInVersion: z.ZodNumber;
            status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
            shownCount: z.ZodNumber;
            dismissCount: z.ZodNumber;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}>;
export declare const dismissMiniappOnboardingRequestSchema: z.ZodEffects<z.ZodObject<{
    scope: z.ZodEnum<["step", "all"]>;
    stepKey: z.ZodOptional<z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>>;
    mode: z.ZodDefault<z.ZodOptional<z.ZodEnum<["snooze", "dismiss"]>>>;
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    scope: "step" | "all";
    mode: "snooze" | "dismiss";
    reason?: string | undefined;
    stepKey?: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | undefined;
}, {
    scope: "step" | "all";
    reason?: string | undefined;
    stepKey?: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | undefined;
    mode?: "snooze" | "dismiss" | undefined;
}>, {
    scope: "step" | "all";
    mode: "snooze" | "dismiss";
    reason?: string | undefined;
    stepKey?: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | undefined;
}, {
    scope: "step" | "all";
    reason?: string | undefined;
    stepKey?: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | undefined;
    mode?: "snooze" | "dismiss" | undefined;
}>;
export declare const dismissMiniappOnboardingResponseSchema: z.ZodObject<{
    progress: z.ZodObject<{
        enabled: z.ZodBoolean;
        flowVersion: z.ZodNumber;
        firstMiniappEntryAt: z.ZodNullable<z.ZodString>;
        autoWindowEndsAt: z.ZodNullable<z.ZodString>;
        manuallyRestartedAt: z.ZodNullable<z.ZodString>;
        dismissedAllAt: z.ZodNullable<z.ZodString>;
        lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>>;
        cooldownUntil: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
        facts: z.ZodObject<{
            productCount: z.ZodNumber;
            hasRelationData: z.ZodBoolean;
            hasPublicProfileReady: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }>;
        steps: z.ZodRecord<z.ZodString, z.ZodObject<{
            stepKey: z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>;
            introducedInVersion: z.ZodNumber;
            status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
            shownCount: z.ZodNumber;
            dismissCount: z.ZodNumber;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}>;
export declare const resetMiniappOnboardingResponseSchema: z.ZodObject<{
    progress: z.ZodObject<{
        enabled: z.ZodBoolean;
        flowVersion: z.ZodNumber;
        firstMiniappEntryAt: z.ZodNullable<z.ZodString>;
        autoWindowEndsAt: z.ZodNullable<z.ZodString>;
        manuallyRestartedAt: z.ZodNullable<z.ZodString>;
        dismissedAllAt: z.ZodNullable<z.ZodString>;
        lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>>;
        cooldownUntil: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
        facts: z.ZodObject<{
            productCount: z.ZodNumber;
            hasRelationData: z.ZodBoolean;
            hasPublicProfileReady: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }>;
        steps: z.ZodRecord<z.ZodString, z.ZodObject<{
            stepKey: z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>;
            introducedInVersion: z.ZodNumber;
            status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
            shownCount: z.ZodNumber;
            dismissCount: z.ZodNumber;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}>;
export declare const manualRestartMiniappOnboardingResponseSchema: z.ZodObject<{
    progress: z.ZodObject<{
        enabled: z.ZodBoolean;
        flowVersion: z.ZodNumber;
        firstMiniappEntryAt: z.ZodNullable<z.ZodString>;
        autoWindowEndsAt: z.ZodNullable<z.ZodString>;
        manuallyRestartedAt: z.ZodNullable<z.ZodString>;
        dismissedAllAt: z.ZodNullable<z.ZodString>;
        lastPromptedStep: z.ZodNullable<z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>>;
        cooldownUntil: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodNullable<z.ZodString>;
        updatedAt: z.ZodNullable<z.ZodString>;
        facts: z.ZodObject<{
            productCount: z.ZodNumber;
            hasRelationData: z.ZodBoolean;
            hasPublicProfileReady: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }, {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        }>;
        steps: z.ZodRecord<z.ZodString, z.ZodObject<{
            stepKey: z.ZodEnum<["welcome_sheet", "first_pet_create", "first_pet_enrich", "first_record_entry", "footprint_overview", "relation_preview", "public_profile_preview", "share_settings_entry"]>;
            introducedInVersion: z.ZodNumber;
            status: z.ZodEnum<["idle", "eligible", "scheduled", "shown", "acted", "completed", "snoozed", "blocked", "dismissed"]>;
            shownCount: z.ZodNumber;
            dismissCount: z.ZodNumber;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
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
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }, {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}, {
    progress: {
        createdAt: string | null;
        updatedAt: string | null;
        enabled: boolean;
        flowVersion: number;
        dismissedAllAt: string | null;
        lastPromptedStep: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry" | null;
        cooldownUntil: string | null;
        facts: {
            productCount: number;
            hasRelationData: boolean;
            hasPublicProfileReady: boolean;
        };
        steps: Record<string, {
            status: "eligible" | "idle" | "scheduled" | "shown" | "acted" | "completed" | "snoozed" | "blocked" | "dismissed";
            completedAt: string | null;
            stepKey: "welcome_sheet" | "first_pet_create" | "first_pet_enrich" | "first_record_entry" | "footprint_overview" | "relation_preview" | "public_profile_preview" | "share_settings_entry";
            introducedInVersion: number;
            shownCount: number;
            dismissCount: number;
            blockedReason: string | null;
            lastEventAt: string | null;
            lastShownAt: string | null;
            shownAt: string | null;
            actedAt: string | null;
            dismissedAt: string | null;
            snoozedUntil: string | null;
        }>;
        firstMiniappEntryAt: string | null;
        autoWindowEndsAt: string | null;
        manuallyRestartedAt: string | null;
    };
}>;
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
export type ManualRestartMiniappOnboardingResponse = z.infer<typeof manualRestartMiniappOnboardingResponseSchema>;
export type RecordMiniappOnboardingEventRequest = z.infer<typeof recordMiniappOnboardingEventRequestSchema>;
export type RecordMiniappOnboardingEventResponse = z.infer<typeof recordMiniappOnboardingEventResponseSchema>;
export type ResetMiniappOnboardingResponse = z.infer<typeof resetMiniappOnboardingResponseSchema>;
