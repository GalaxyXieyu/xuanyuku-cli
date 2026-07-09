import { z } from 'zod';
export declare const cardTitlePrioritySchema: z.ZodEnum<["alias", "code"]>;
export declare const listSortModeSchema: z.ZodEnum<["time", "identity"]>;
export declare const petAssistantPreferencesSchema: z.ZodObject<{
    enabled: z.ZodCatch<z.ZodDefault<z.ZodBoolean>>;
    mute: z.ZodCatch<z.ZodDefault<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    mute: boolean;
}, {
    enabled?: unknown;
    mute?: unknown;
}>;
export declare const userViewPreferencesSchema: z.ZodObject<{
    cardTitlePriority: z.ZodCatch<z.ZodDefault<z.ZodEnum<["alias", "code"]>>>;
    listSortMode: z.ZodCatch<z.ZodDefault<z.ZodEnum<["time", "identity"]>>>;
    petAssistant: z.ZodCatch<z.ZodDefault<z.ZodObject<{
        enabled: z.ZodCatch<z.ZodDefault<z.ZodBoolean>>;
        mute: z.ZodCatch<z.ZodDefault<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        enabled: boolean;
        mute: boolean;
    }, {
        enabled?: unknown;
        mute?: unknown;
    }>>>;
}, "strip", z.ZodTypeAny, {
    cardTitlePriority: "code" | "alias";
    listSortMode: "time" | "identity";
    petAssistant: {
        enabled: boolean;
        mute: boolean;
    };
}, {
    cardTitlePriority?: unknown;
    listSortMode?: unknown;
    petAssistant?: unknown;
}>;
export declare const userViewPreferencesPatchSchema: z.ZodObject<{
    cardTitlePriority: z.ZodOptional<z.ZodCatch<z.ZodDefault<z.ZodEnum<["alias", "code"]>>>>;
    listSortMode: z.ZodOptional<z.ZodCatch<z.ZodDefault<z.ZodEnum<["time", "identity"]>>>>;
} & {
    petAssistant: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodCatch<z.ZodDefault<z.ZodBoolean>>>;
        mute: z.ZodOptional<z.ZodCatch<z.ZodDefault<z.ZodBoolean>>>;
    }, "strip", z.ZodTypeAny, {
        enabled?: boolean | undefined;
        mute?: boolean | undefined;
    }, {
        enabled?: unknown;
        mute?: unknown;
    }>>;
}, "strip", z.ZodTypeAny, {
    cardTitlePriority?: "code" | "alias" | undefined;
    listSortMode?: "time" | "identity" | undefined;
    petAssistant?: {
        enabled?: boolean | undefined;
        mute?: boolean | undefined;
    } | undefined;
}, {
    cardTitlePriority?: unknown;
    listSortMode?: unknown;
    petAssistant?: {
        enabled?: unknown;
        mute?: unknown;
    } | undefined;
}>;
export declare const getUserViewPreferencesResponseSchema: z.ZodObject<{
    preferences: z.ZodObject<{
        cardTitlePriority: z.ZodCatch<z.ZodDefault<z.ZodEnum<["alias", "code"]>>>;
        listSortMode: z.ZodCatch<z.ZodDefault<z.ZodEnum<["time", "identity"]>>>;
        petAssistant: z.ZodCatch<z.ZodDefault<z.ZodObject<{
            enabled: z.ZodCatch<z.ZodDefault<z.ZodBoolean>>;
            mute: z.ZodCatch<z.ZodDefault<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            mute: boolean;
        }, {
            enabled?: unknown;
            mute?: unknown;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        cardTitlePriority: "code" | "alias";
        listSortMode: "time" | "identity";
        petAssistant: {
            enabled: boolean;
            mute: boolean;
        };
    }, {
        cardTitlePriority?: unknown;
        listSortMode?: unknown;
        petAssistant?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    preferences: {
        cardTitlePriority: "code" | "alias";
        listSortMode: "time" | "identity";
        petAssistant: {
            enabled: boolean;
            mute: boolean;
        };
    };
}, {
    preferences: {
        cardTitlePriority?: unknown;
        listSortMode?: unknown;
        petAssistant?: unknown;
    };
}>;
export declare const updateUserViewPreferencesResponseSchema: z.ZodObject<{
    preferences: z.ZodObject<{
        cardTitlePriority: z.ZodCatch<z.ZodDefault<z.ZodEnum<["alias", "code"]>>>;
        listSortMode: z.ZodCatch<z.ZodDefault<z.ZodEnum<["time", "identity"]>>>;
        petAssistant: z.ZodCatch<z.ZodDefault<z.ZodObject<{
            enabled: z.ZodCatch<z.ZodDefault<z.ZodBoolean>>;
            mute: z.ZodCatch<z.ZodDefault<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            enabled: boolean;
            mute: boolean;
        }, {
            enabled?: unknown;
            mute?: unknown;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        cardTitlePriority: "code" | "alias";
        listSortMode: "time" | "identity";
        petAssistant: {
            enabled: boolean;
            mute: boolean;
        };
    }, {
        cardTitlePriority?: unknown;
        listSortMode?: unknown;
        petAssistant?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    preferences: {
        cardTitlePriority: "code" | "alias";
        listSortMode: "time" | "identity";
        petAssistant: {
            enabled: boolean;
            mute: boolean;
        };
    };
}, {
    preferences: {
        cardTitlePriority?: unknown;
        listSortMode?: unknown;
        petAssistant?: unknown;
    };
}>;
export type CardTitlePriority = z.infer<typeof cardTitlePrioritySchema>;
export type ListSortMode = z.infer<typeof listSortModeSchema>;
export type PetAssistantPreferences = z.infer<typeof petAssistantPreferencesSchema>;
export type UserViewPreferences = z.infer<typeof userViewPreferencesSchema>;
export type UserViewPreferencesPatch = z.infer<typeof userViewPreferencesPatchSchema>;
export type GetUserViewPreferencesResponse = z.infer<typeof getUserViewPreferencesResponseSchema>;
export type UpdateUserViewPreferencesResponse = z.infer<typeof updateUserViewPreferencesResponseSchema>;
