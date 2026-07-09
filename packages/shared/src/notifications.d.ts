import { z } from 'zod';
export declare const wechatBindingSubscribeStatusSchema: z.ZodEnum<["UNKNOWN", "SUBSCRIBED", "UNSUBSCRIBED"]>;
export declare const notificationChannelSchema: z.ZodEnum<["WECHAT_OFFICIAL_ACCOUNT", "WECHAT_MINIAPP_SUBSCRIBE"]>;
export declare const notificationSceneSchema: z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>;
export declare const notificationJobStatusSchema: z.ZodEnum<["PENDING", "SENDING", "SENT", "FAILED_RETRYABLE", "FAILED_TERMINAL", "CANCELLED"]>;
export declare const notificationDeliveryResultStatusSchema: z.ZodEnum<["SUCCESS", "FAILED"]>;
export declare const careReminderTypeSchema: z.ZodEnum<["FEEDING", "WATER_CHANGE", "HEALTH_CHECK", "BREEDING_CHECK"]>;
export declare const myWechatBindingSchema: z.ZodObject<{
    appId: z.ZodString;
    openIdTail: z.ZodNullable<z.ZodString>;
    subscribeStatus: z.ZodEnum<["UNKNOWN", "SUBSCRIBED", "UNSUBSCRIBED"]>;
    isReachable: z.ZodBoolean;
    source: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    lastOauthAt: z.ZodNullable<z.ZodString>;
    lastMessageSentAt: z.ZodNullable<z.ZodString>;
    lastMessageErrorCode: z.ZodNullable<z.ZodString>;
    lastMessageErrorAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    source: string | null;
    createdAt: string;
    updatedAt: string;
    appId: string;
    openIdTail: string | null;
    subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
    isReachable: boolean;
    lastOauthAt: string | null;
    lastMessageSentAt: string | null;
    lastMessageErrorCode: string | null;
    lastMessageErrorAt: string | null;
}, {
    source: string | null;
    createdAt: string;
    updatedAt: string;
    appId: string;
    openIdTail: string | null;
    subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
    isReachable: boolean;
    lastOauthAt: string | null;
    lastMessageSentAt: string | null;
    lastMessageErrorCode: string | null;
    lastMessageErrorAt: string | null;
}>;
export declare const myWechatBindingStatusResponseSchema: z.ZodObject<{
    configured: z.ZodBoolean;
    messageEnabled: z.ZodBoolean;
    dryRun: z.ZodBoolean;
    appId: z.ZodNullable<z.ZodString>;
    dailyDigestTemplateConfigured: z.ZodBoolean;
    referralProgressTemplateConfigured: z.ZodBoolean;
    referralProgressTemplateId: z.ZodNullable<z.ZodString>;
    binding: z.ZodNullable<z.ZodObject<{
        appId: z.ZodString;
        openIdTail: z.ZodNullable<z.ZodString>;
        subscribeStatus: z.ZodEnum<["UNKNOWN", "SUBSCRIBED", "UNSUBSCRIBED"]>;
        isReachable: z.ZodBoolean;
        source: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        lastOauthAt: z.ZodNullable<z.ZodString>;
        lastMessageSentAt: z.ZodNullable<z.ZodString>;
        lastMessageErrorCode: z.ZodNullable<z.ZodString>;
        lastMessageErrorAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source: string | null;
        createdAt: string;
        updatedAt: string;
        appId: string;
        openIdTail: string | null;
        subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
        isReachable: boolean;
        lastOauthAt: string | null;
        lastMessageSentAt: string | null;
        lastMessageErrorCode: string | null;
        lastMessageErrorAt: string | null;
    }, {
        source: string | null;
        createdAt: string;
        updatedAt: string;
        appId: string;
        openIdTail: string | null;
        subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
        isReachable: boolean;
        lastOauthAt: string | null;
        lastMessageSentAt: string | null;
        lastMessageErrorCode: string | null;
        lastMessageErrorAt: string | null;
    }>>;
}, "strip", z.ZodTypeAny, {
    appId: string | null;
    binding: {
        source: string | null;
        createdAt: string;
        updatedAt: string;
        appId: string;
        openIdTail: string | null;
        subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
        isReachable: boolean;
        lastOauthAt: string | null;
        lastMessageSentAt: string | null;
        lastMessageErrorCode: string | null;
        lastMessageErrorAt: string | null;
    } | null;
    configured: boolean;
    messageEnabled: boolean;
    dryRun: boolean;
    dailyDigestTemplateConfigured: boolean;
    referralProgressTemplateConfigured: boolean;
    referralProgressTemplateId: string | null;
}, {
    appId: string | null;
    binding: {
        source: string | null;
        createdAt: string;
        updatedAt: string;
        appId: string;
        openIdTail: string | null;
        subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
        isReachable: boolean;
        lastOauthAt: string | null;
        lastMessageSentAt: string | null;
        lastMessageErrorCode: string | null;
        lastMessageErrorAt: string | null;
    } | null;
    configured: boolean;
    messageEnabled: boolean;
    dryRun: boolean;
    dailyDigestTemplateConfigured: boolean;
    referralProgressTemplateConfigured: boolean;
    referralProgressTemplateId: string | null;
}>;
export declare const wechatJsSdkConfigQuerySchema: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export declare const wechatSubscribePromptStatusSchema: z.ZodEnum<["accept", "reject", "cancel", "ban", "filter"]>;
export declare const updateWechatBindingSubscribeStatusRequestSchema: z.ZodObject<{
    sceneCode: z.ZodDefault<z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>>;
    statuses: z.ZodRecord<z.ZodString, z.ZodEnum<["accept", "reject", "cancel", "ban", "filter"]>>;
}, "strip", z.ZodTypeAny, {
    sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
    statuses: Record<string, "filter" | "accept" | "reject" | "cancel" | "ban">;
}, {
    statuses: Record<string, "filter" | "accept" | "reject" | "cancel" | "ban">;
    sceneCode?: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY" | undefined;
}>;
export declare const updateWechatBindingSubscribeStatusResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    bindingStatus: z.ZodObject<{
        configured: z.ZodBoolean;
        messageEnabled: z.ZodBoolean;
        dryRun: z.ZodBoolean;
        appId: z.ZodNullable<z.ZodString>;
        dailyDigestTemplateConfigured: z.ZodBoolean;
        referralProgressTemplateConfigured: z.ZodBoolean;
        referralProgressTemplateId: z.ZodNullable<z.ZodString>;
        binding: z.ZodNullable<z.ZodObject<{
            appId: z.ZodString;
            openIdTail: z.ZodNullable<z.ZodString>;
            subscribeStatus: z.ZodEnum<["UNKNOWN", "SUBSCRIBED", "UNSUBSCRIBED"]>;
            isReachable: z.ZodBoolean;
            source: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            lastOauthAt: z.ZodNullable<z.ZodString>;
            lastMessageSentAt: z.ZodNullable<z.ZodString>;
            lastMessageErrorCode: z.ZodNullable<z.ZodString>;
            lastMessageErrorAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        }, {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        appId: string | null;
        binding: {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        } | null;
        configured: boolean;
        messageEnabled: boolean;
        dryRun: boolean;
        dailyDigestTemplateConfigured: boolean;
        referralProgressTemplateConfigured: boolean;
        referralProgressTemplateId: string | null;
    }, {
        appId: string | null;
        binding: {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        } | null;
        configured: boolean;
        messageEnabled: boolean;
        dryRun: boolean;
        dailyDigestTemplateConfigured: boolean;
        referralProgressTemplateConfigured: boolean;
        referralProgressTemplateId: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    ok: true;
    bindingStatus: {
        appId: string | null;
        binding: {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        } | null;
        configured: boolean;
        messageEnabled: boolean;
        dryRun: boolean;
        dailyDigestTemplateConfigured: boolean;
        referralProgressTemplateConfigured: boolean;
        referralProgressTemplateId: string | null;
    };
}, {
    ok: true;
    bindingStatus: {
        appId: string | null;
        binding: {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        } | null;
        configured: boolean;
        messageEnabled: boolean;
        dryRun: boolean;
        dailyDigestTemplateConfigured: boolean;
        referralProgressTemplateConfigured: boolean;
        referralProgressTemplateId: string | null;
    };
}>;
export declare const careReminderRuleInputSchema: z.ZodObject<{
    type: z.ZodEnum<["FEEDING", "WATER_CHANGE", "HEALTH_CHECK", "BREEDING_CHECK"]>;
    enabled: z.ZodBoolean;
    intervalDays: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
    enabled: boolean;
    intervalDays: number;
}, {
    type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
    enabled: boolean;
    intervalDays: number;
}>;
export declare const careReminderRuleSchema: z.ZodObject<{
    type: z.ZodEnum<["FEEDING", "WATER_CHANGE", "HEALTH_CHECK", "BREEDING_CHECK"]>;
    enabled: z.ZodBoolean;
    intervalDays: z.ZodNumber;
} & {
    anchorDate: z.ZodString;
    updatedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
    updatedAt: string | null;
    enabled: boolean;
    intervalDays: number;
    anchorDate: string;
}, {
    type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
    updatedAt: string | null;
    enabled: boolean;
    intervalDays: number;
    anchorDate: string;
}>;
export declare const todayCareReminderItemSchema: z.ZodObject<{
    productId: z.ZodString;
    productName: z.ZodString;
    reminderType: z.ZodEnum<["FEEDING", "WATER_CHANGE", "HEALTH_CHECK", "BREEDING_CHECK"]>;
    intervalDays: z.ZodNumber;
    anchorDate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    productId: string;
    intervalDays: number;
    anchorDate: string;
    productName: string;
    reminderType: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
}, {
    productId: string;
    intervalDays: number;
    anchorDate: string;
    productName: string;
    reminderType: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
}>;
export declare const getTodayCareRemindersResponseSchema: z.ZodObject<{
    date: z.ZodString;
    totalCount: z.ZodNumber;
    productCount: z.ZodNumber;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        productName: z.ZodString;
        reminderType: z.ZodEnum<["FEEDING", "WATER_CHANGE", "HEALTH_CHECK", "BREEDING_CHECK"]>;
        intervalDays: z.ZodNumber;
        anchorDate: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        productId: string;
        intervalDays: number;
        anchorDate: string;
        productName: string;
        reminderType: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
    }, {
        productId: string;
        intervalDays: number;
        anchorDate: string;
        productName: string;
        reminderType: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    date: string;
    items: {
        productId: string;
        intervalDays: number;
        anchorDate: string;
        productName: string;
        reminderType: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
    }[];
    productCount: number;
    totalCount: number;
}, {
    date: string;
    items: {
        productId: string;
        intervalDays: number;
        anchorDate: string;
        productName: string;
        reminderType: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
    }[];
    productCount: number;
    totalCount: number;
}>;
export declare const careReminderConfigResponseSchema: z.ZodObject<{
    configured: z.ZodBoolean;
    messageEnabled: z.ZodBoolean;
    dryRun: z.ZodBoolean;
    appId: z.ZodNullable<z.ZodString>;
    templateId: z.ZodNullable<z.ZodString>;
    deliveryTimeLocal: z.ZodString;
    binding: z.ZodNullable<z.ZodObject<{
        appId: z.ZodString;
        openIdTail: z.ZodNullable<z.ZodString>;
        subscribeStatus: z.ZodEnum<["UNKNOWN", "SUBSCRIBED", "UNSUBSCRIBED"]>;
        isReachable: z.ZodBoolean;
        source: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        lastOauthAt: z.ZodNullable<z.ZodString>;
        lastMessageSentAt: z.ZodNullable<z.ZodString>;
        lastMessageErrorCode: z.ZodNullable<z.ZodString>;
        lastMessageErrorAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        source: string | null;
        createdAt: string;
        updatedAt: string;
        appId: string;
        openIdTail: string | null;
        subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
        isReachable: boolean;
        lastOauthAt: string | null;
        lastMessageSentAt: string | null;
        lastMessageErrorCode: string | null;
        lastMessageErrorAt: string | null;
    }, {
        source: string | null;
        createdAt: string;
        updatedAt: string;
        appId: string;
        openIdTail: string | null;
        subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
        isReachable: boolean;
        lastOauthAt: string | null;
        lastMessageSentAt: string | null;
        lastMessageErrorCode: string | null;
        lastMessageErrorAt: string | null;
    }>>;
}, "strip", z.ZodTypeAny, {
    appId: string | null;
    binding: {
        source: string | null;
        createdAt: string;
        updatedAt: string;
        appId: string;
        openIdTail: string | null;
        subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
        isReachable: boolean;
        lastOauthAt: string | null;
        lastMessageSentAt: string | null;
        lastMessageErrorCode: string | null;
        lastMessageErrorAt: string | null;
    } | null;
    configured: boolean;
    messageEnabled: boolean;
    dryRun: boolean;
    templateId: string | null;
    deliveryTimeLocal: string;
}, {
    appId: string | null;
    binding: {
        source: string | null;
        createdAt: string;
        updatedAt: string;
        appId: string;
        openIdTail: string | null;
        subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
        isReachable: boolean;
        lastOauthAt: string | null;
        lastMessageSentAt: string | null;
        lastMessageErrorCode: string | null;
        lastMessageErrorAt: string | null;
    } | null;
    configured: boolean;
    messageEnabled: boolean;
    dryRun: boolean;
    templateId: string | null;
    deliveryTimeLocal: string;
}>;
export declare const updateCareReminderSubscribeStatusRequestSchema: z.ZodObject<{
    statuses: z.ZodRecord<z.ZodString, z.ZodEnum<["accept", "reject", "cancel", "ban", "filter"]>>;
}, "strip", z.ZodTypeAny, {
    statuses: Record<string, "filter" | "accept" | "reject" | "cancel" | "ban">;
}, {
    statuses: Record<string, "filter" | "accept" | "reject" | "cancel" | "ban">;
}>;
export declare const updateCareReminderSubscribeStatusResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    config: z.ZodObject<{
        configured: z.ZodBoolean;
        messageEnabled: z.ZodBoolean;
        dryRun: z.ZodBoolean;
        appId: z.ZodNullable<z.ZodString>;
        templateId: z.ZodNullable<z.ZodString>;
        deliveryTimeLocal: z.ZodString;
        binding: z.ZodNullable<z.ZodObject<{
            appId: z.ZodString;
            openIdTail: z.ZodNullable<z.ZodString>;
            subscribeStatus: z.ZodEnum<["UNKNOWN", "SUBSCRIBED", "UNSUBSCRIBED"]>;
            isReachable: z.ZodBoolean;
            source: z.ZodNullable<z.ZodString>;
            createdAt: z.ZodString;
            updatedAt: z.ZodString;
            lastOauthAt: z.ZodNullable<z.ZodString>;
            lastMessageSentAt: z.ZodNullable<z.ZodString>;
            lastMessageErrorCode: z.ZodNullable<z.ZodString>;
            lastMessageErrorAt: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        }, {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        appId: string | null;
        binding: {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        } | null;
        configured: boolean;
        messageEnabled: boolean;
        dryRun: boolean;
        templateId: string | null;
        deliveryTimeLocal: string;
    }, {
        appId: string | null;
        binding: {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        } | null;
        configured: boolean;
        messageEnabled: boolean;
        dryRun: boolean;
        templateId: string | null;
        deliveryTimeLocal: string;
    }>;
}, "strip", z.ZodTypeAny, {
    ok: true;
    config: {
        appId: string | null;
        binding: {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        } | null;
        configured: boolean;
        messageEnabled: boolean;
        dryRun: boolean;
        templateId: string | null;
        deliveryTimeLocal: string;
    };
}, {
    ok: true;
    config: {
        appId: string | null;
        binding: {
            source: string | null;
            createdAt: string;
            updatedAt: string;
            appId: string;
            openIdTail: string | null;
            subscribeStatus: "UNKNOWN" | "SUBSCRIBED" | "UNSUBSCRIBED";
            isReachable: boolean;
            lastOauthAt: string | null;
            lastMessageSentAt: string | null;
            lastMessageErrorCode: string | null;
            lastMessageErrorAt: string | null;
        } | null;
        configured: boolean;
        messageEnabled: boolean;
        dryRun: boolean;
        templateId: string | null;
        deliveryTimeLocal: string;
    };
}>;
export declare const getProductCareReminderRulesResponseSchema: z.ZodObject<{
    productId: z.ZodString;
    rules: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["FEEDING", "WATER_CHANGE", "HEALTH_CHECK", "BREEDING_CHECK"]>;
        enabled: z.ZodBoolean;
        intervalDays: z.ZodNumber;
    } & {
        anchorDate: z.ZodString;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        updatedAt: string | null;
        enabled: boolean;
        intervalDays: number;
        anchorDate: string;
    }, {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        updatedAt: string | null;
        enabled: boolean;
        intervalDays: number;
        anchorDate: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    productId: string;
    rules: {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        updatedAt: string | null;
        enabled: boolean;
        intervalDays: number;
        anchorDate: string;
    }[];
}, {
    productId: string;
    rules: {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        updatedAt: string | null;
        enabled: boolean;
        intervalDays: number;
        anchorDate: string;
    }[];
}>;
export declare const updateProductCareReminderRulesRequestSchema: z.ZodObject<{
    rules: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["FEEDING", "WATER_CHANGE", "HEALTH_CHECK", "BREEDING_CHECK"]>;
        enabled: z.ZodBoolean;
        intervalDays: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        enabled: boolean;
        intervalDays: number;
    }, {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        enabled: boolean;
        intervalDays: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    rules: {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        enabled: boolean;
        intervalDays: number;
    }[];
}, {
    rules: {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        enabled: boolean;
        intervalDays: number;
    }[];
}>;
export declare const updateProductCareReminderRulesResponseSchema: z.ZodObject<{
    productId: z.ZodString;
    rules: z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["FEEDING", "WATER_CHANGE", "HEALTH_CHECK", "BREEDING_CHECK"]>;
        enabled: z.ZodBoolean;
        intervalDays: z.ZodNumber;
    } & {
        anchorDate: z.ZodString;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        updatedAt: string | null;
        enabled: boolean;
        intervalDays: number;
        anchorDate: string;
    }, {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        updatedAt: string | null;
        enabled: boolean;
        intervalDays: number;
        anchorDate: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    productId: string;
    rules: {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        updatedAt: string | null;
        enabled: boolean;
        intervalDays: number;
        anchorDate: string;
    }[];
}, {
    productId: string;
    rules: {
        type: "FEEDING" | "WATER_CHANGE" | "HEALTH_CHECK" | "BREEDING_CHECK";
        updatedAt: string | null;
        enabled: boolean;
        intervalDays: number;
        anchorDate: string;
    }[];
}>;
export declare const reminderPreferencesSchema: z.ZodObject<{
    dailyDigestEnabled: z.ZodBoolean;
    needMatingEnabled: z.ZodBoolean;
    nodeAlertEnabled: z.ZodBoolean;
    sendTimeLocal: z.ZodString;
    timezone: z.ZodString;
    quietHoursStart: z.ZodNullable<z.ZodString>;
    quietHoursEnd: z.ZodNullable<z.ZodString>;
    channel: z.ZodEnum<["WECHAT_OFFICIAL_ACCOUNT", "WECHAT_MINIAPP_SUBSCRIBE"]>;
    language: z.ZodString;
    updatedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
    updatedAt: string | null;
    dailyDigestEnabled: boolean;
    needMatingEnabled: boolean;
    nodeAlertEnabled: boolean;
    sendTimeLocal: string;
    timezone: string;
    quietHoursStart: string | null;
    quietHoursEnd: string | null;
    language: string;
}, {
    channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
    updatedAt: string | null;
    dailyDigestEnabled: boolean;
    needMatingEnabled: boolean;
    nodeAlertEnabled: boolean;
    sendTimeLocal: string;
    timezone: string;
    quietHoursStart: string | null;
    quietHoursEnd: string | null;
    language: string;
}>;
export declare const getReminderPreferencesResponseSchema: z.ZodObject<{
    preferences: z.ZodObject<{
        dailyDigestEnabled: z.ZodBoolean;
        needMatingEnabled: z.ZodBoolean;
        nodeAlertEnabled: z.ZodBoolean;
        sendTimeLocal: z.ZodString;
        timezone: z.ZodString;
        quietHoursStart: z.ZodNullable<z.ZodString>;
        quietHoursEnd: z.ZodNullable<z.ZodString>;
        channel: z.ZodEnum<["WECHAT_OFFICIAL_ACCOUNT", "WECHAT_MINIAPP_SUBSCRIBE"]>;
        language: z.ZodString;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        sendTimeLocal: string;
        timezone: string;
        quietHoursStart: string | null;
        quietHoursEnd: string | null;
        language: string;
    }, {
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        sendTimeLocal: string;
        timezone: string;
        quietHoursStart: string | null;
        quietHoursEnd: string | null;
        language: string;
    }>;
}, "strip", z.ZodTypeAny, {
    preferences: {
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        sendTimeLocal: string;
        timezone: string;
        quietHoursStart: string | null;
        quietHoursEnd: string | null;
        language: string;
    };
}, {
    preferences: {
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        sendTimeLocal: string;
        timezone: string;
        quietHoursStart: string | null;
        quietHoursEnd: string | null;
        language: string;
    };
}>;
export declare const updateReminderPreferencesRequestSchema: z.ZodObject<Pick<{
    dailyDigestEnabled: z.ZodBoolean;
    needMatingEnabled: z.ZodBoolean;
    nodeAlertEnabled: z.ZodBoolean;
    sendTimeLocal: z.ZodString;
    timezone: z.ZodString;
    quietHoursStart: z.ZodNullable<z.ZodString>;
    quietHoursEnd: z.ZodNullable<z.ZodString>;
    channel: z.ZodEnum<["WECHAT_OFFICIAL_ACCOUNT", "WECHAT_MINIAPP_SUBSCRIBE"]>;
    language: z.ZodString;
    updatedAt: z.ZodNullable<z.ZodString>;
}, "dailyDigestEnabled" | "needMatingEnabled" | "nodeAlertEnabled" | "sendTimeLocal" | "timezone" | "quietHoursStart" | "quietHoursEnd" | "language">, "strip", z.ZodTypeAny, {
    dailyDigestEnabled: boolean;
    needMatingEnabled: boolean;
    nodeAlertEnabled: boolean;
    sendTimeLocal: string;
    timezone: string;
    quietHoursStart: string | null;
    quietHoursEnd: string | null;
    language: string;
}, {
    dailyDigestEnabled: boolean;
    needMatingEnabled: boolean;
    nodeAlertEnabled: boolean;
    sendTimeLocal: string;
    timezone: string;
    quietHoursStart: string | null;
    quietHoursEnd: string | null;
    language: string;
}>;
export declare const updateReminderPreferencesResponseSchema: z.ZodObject<{
    preferences: z.ZodObject<{
        dailyDigestEnabled: z.ZodBoolean;
        needMatingEnabled: z.ZodBoolean;
        nodeAlertEnabled: z.ZodBoolean;
        sendTimeLocal: z.ZodString;
        timezone: z.ZodString;
        quietHoursStart: z.ZodNullable<z.ZodString>;
        quietHoursEnd: z.ZodNullable<z.ZodString>;
        channel: z.ZodEnum<["WECHAT_OFFICIAL_ACCOUNT", "WECHAT_MINIAPP_SUBSCRIBE"]>;
        language: z.ZodString;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        sendTimeLocal: string;
        timezone: string;
        quietHoursStart: string | null;
        quietHoursEnd: string | null;
        language: string;
    }, {
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        sendTimeLocal: string;
        timezone: string;
        quietHoursStart: string | null;
        quietHoursEnd: string | null;
        language: string;
    }>;
}, "strip", z.ZodTypeAny, {
    preferences: {
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        sendTimeLocal: string;
        timezone: string;
        quietHoursStart: string | null;
        quietHoursEnd: string | null;
        language: string;
    };
}, {
    preferences: {
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        sendTimeLocal: string;
        timezone: string;
        quietHoursStart: string | null;
        quietHoursEnd: string | null;
        language: string;
    };
}>;
export declare const tenantReminderPolicySchema: z.ZodObject<{
    dailyDigestEnabled: z.ZodBoolean;
    dailyDigestSendTime: z.ZodString;
    needMatingEnabled: z.ZodBoolean;
    needMatingStartDays: z.ZodNumber;
    needMatingWarningDays: z.ZodNumber;
    nodeAlertEnabled: z.ZodBoolean;
    ruleVersion: z.ZodNumber;
    updatedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    updatedAt: string | null;
    dailyDigestEnabled: boolean;
    needMatingEnabled: boolean;
    nodeAlertEnabled: boolean;
    dailyDigestSendTime: string;
    needMatingStartDays: number;
    needMatingWarningDays: number;
    ruleVersion: number;
}, {
    updatedAt: string | null;
    dailyDigestEnabled: boolean;
    needMatingEnabled: boolean;
    nodeAlertEnabled: boolean;
    dailyDigestSendTime: string;
    needMatingStartDays: number;
    needMatingWarningDays: number;
    ruleVersion: number;
}>;
export declare const getTenantReminderPolicyResponseSchema: z.ZodObject<{
    policy: z.ZodObject<{
        dailyDigestEnabled: z.ZodBoolean;
        dailyDigestSendTime: z.ZodString;
        needMatingEnabled: z.ZodBoolean;
        needMatingStartDays: z.ZodNumber;
        needMatingWarningDays: z.ZodNumber;
        nodeAlertEnabled: z.ZodBoolean;
        ruleVersion: z.ZodNumber;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        dailyDigestSendTime: string;
        needMatingStartDays: number;
        needMatingWarningDays: number;
        ruleVersion: number;
    }, {
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        dailyDigestSendTime: string;
        needMatingStartDays: number;
        needMatingWarningDays: number;
        ruleVersion: number;
    }>;
}, "strip", z.ZodTypeAny, {
    policy: {
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        dailyDigestSendTime: string;
        needMatingStartDays: number;
        needMatingWarningDays: number;
        ruleVersion: number;
    };
}, {
    policy: {
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        dailyDigestSendTime: string;
        needMatingStartDays: number;
        needMatingWarningDays: number;
        ruleVersion: number;
    };
}>;
export declare const updateTenantReminderPolicyRequestSchema: z.ZodObject<Pick<{
    dailyDigestEnabled: z.ZodBoolean;
    dailyDigestSendTime: z.ZodString;
    needMatingEnabled: z.ZodBoolean;
    needMatingStartDays: z.ZodNumber;
    needMatingWarningDays: z.ZodNumber;
    nodeAlertEnabled: z.ZodBoolean;
    ruleVersion: z.ZodNumber;
    updatedAt: z.ZodNullable<z.ZodString>;
}, "dailyDigestEnabled" | "needMatingEnabled" | "nodeAlertEnabled" | "dailyDigestSendTime" | "needMatingStartDays" | "needMatingWarningDays">, "strip", z.ZodTypeAny, {
    dailyDigestEnabled: boolean;
    needMatingEnabled: boolean;
    nodeAlertEnabled: boolean;
    dailyDigestSendTime: string;
    needMatingStartDays: number;
    needMatingWarningDays: number;
}, {
    dailyDigestEnabled: boolean;
    needMatingEnabled: boolean;
    nodeAlertEnabled: boolean;
    dailyDigestSendTime: string;
    needMatingStartDays: number;
    needMatingWarningDays: number;
}>;
export declare const updateTenantReminderPolicyResponseSchema: z.ZodObject<{
    policy: z.ZodObject<{
        dailyDigestEnabled: z.ZodBoolean;
        dailyDigestSendTime: z.ZodString;
        needMatingEnabled: z.ZodBoolean;
        needMatingStartDays: z.ZodNumber;
        needMatingWarningDays: z.ZodNumber;
        nodeAlertEnabled: z.ZodBoolean;
        ruleVersion: z.ZodNumber;
        updatedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        dailyDigestSendTime: string;
        needMatingStartDays: number;
        needMatingWarningDays: number;
        ruleVersion: number;
    }, {
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        dailyDigestSendTime: string;
        needMatingStartDays: number;
        needMatingWarningDays: number;
        ruleVersion: number;
    }>;
}, "strip", z.ZodTypeAny, {
    policy: {
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        dailyDigestSendTime: string;
        needMatingStartDays: number;
        needMatingWarningDays: number;
        ruleVersion: number;
    };
}, {
    policy: {
        updatedAt: string | null;
        dailyDigestEnabled: boolean;
        needMatingEnabled: boolean;
        nodeAlertEnabled: boolean;
        dailyDigestSendTime: string;
        needMatingStartDays: number;
        needMatingWarningDays: number;
        ruleVersion: number;
    };
}>;
export declare const notificationJobsQuerySchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodNumber>;
    status: z.ZodOptional<z.ZodEnum<["PENDING", "SENDING", "SENT", "FAILED_RETRYABLE", "FAILED_TERMINAL", "CANCELLED"]>>;
    sceneCode: z.ZodOptional<z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    status?: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL" | undefined;
    sceneCode?: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY" | undefined;
}, {
    status?: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL" | undefined;
    limit?: number | undefined;
    sceneCode?: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY" | undefined;
}>;
export declare const notificationJobListItemSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    userId: z.ZodString;
    userName: z.ZodNullable<z.ZodString>;
    userEmail: z.ZodString;
    channel: z.ZodEnum<["WECHAT_OFFICIAL_ACCOUNT", "WECHAT_MINIAPP_SUBSCRIBE"]>;
    sceneCode: z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>;
    status: z.ZodEnum<["PENDING", "SENDING", "SENT", "FAILED_RETRYABLE", "FAILED_TERMINAL", "CANCELLED"]>;
    dedupeKey: z.ZodString;
    scheduledAt: z.ZodString;
    attemptCount: z.ZodNumber;
    nextRetryAt: z.ZodNullable<z.ZodString>;
    ruleVersion: z.ZodNumber;
    lastErrorCode: z.ZodNullable<z.ZodString>;
    lastErrorMessage: z.ZodNullable<z.ZodString>;
    sentAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
    id: string;
    channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    userName: string | null;
    userEmail: string;
    sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
    ruleVersion: number;
    dedupeKey: string;
    scheduledAt: string;
    attemptCount: number;
    nextRetryAt: string | null;
    lastErrorCode: string | null;
    lastErrorMessage: string | null;
    sentAt: string | null;
}, {
    status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
    id: string;
    channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    userName: string | null;
    userEmail: string;
    sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
    ruleVersion: number;
    dedupeKey: string;
    scheduledAt: string;
    attemptCount: number;
    nextRetryAt: string | null;
    lastErrorCode: string | null;
    lastErrorMessage: string | null;
    sentAt: string | null;
}>;
export declare const listNotificationJobsResponseSchema: z.ZodObject<{
    jobs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userEmail: z.ZodString;
        channel: z.ZodEnum<["WECHAT_OFFICIAL_ACCOUNT", "WECHAT_MINIAPP_SUBSCRIBE"]>;
        sceneCode: z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>;
        status: z.ZodEnum<["PENDING", "SENDING", "SENT", "FAILED_RETRYABLE", "FAILED_TERMINAL", "CANCELLED"]>;
        dedupeKey: z.ZodString;
        scheduledAt: z.ZodString;
        attemptCount: z.ZodNumber;
        nextRetryAt: z.ZodNullable<z.ZodString>;
        ruleVersion: z.ZodNumber;
        lastErrorCode: z.ZodNullable<z.ZodString>;
        lastErrorMessage: z.ZodNullable<z.ZodString>;
        sentAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
        id: string;
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        ruleVersion: number;
        dedupeKey: string;
        scheduledAt: string;
        attemptCount: number;
        nextRetryAt: string | null;
        lastErrorCode: string | null;
        lastErrorMessage: string | null;
        sentAt: string | null;
    }, {
        status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
        id: string;
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        ruleVersion: number;
        dedupeKey: string;
        scheduledAt: string;
        attemptCount: number;
        nextRetryAt: string | null;
        lastErrorCode: string | null;
        lastErrorMessage: string | null;
        sentAt: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    jobs: {
        status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
        id: string;
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        ruleVersion: number;
        dedupeKey: string;
        scheduledAt: string;
        attemptCount: number;
        nextRetryAt: string | null;
        lastErrorCode: string | null;
        lastErrorMessage: string | null;
        sentAt: string | null;
    }[];
}, {
    jobs: {
        status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
        id: string;
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        ruleVersion: number;
        dedupeKey: string;
        scheduledAt: string;
        attemptCount: number;
        nextRetryAt: string | null;
        lastErrorCode: string | null;
        lastErrorMessage: string | null;
        sentAt: string | null;
    }[];
}>;
export declare const notificationDeliveriesQuerySchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodNumber>;
    resultStatus: z.ZodOptional<z.ZodEnum<["SUCCESS", "FAILED"]>>;
    sceneCode: z.ZodOptional<z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    sceneCode?: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY" | undefined;
    resultStatus?: "SUCCESS" | "FAILED" | undefined;
}, {
    limit?: number | undefined;
    sceneCode?: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY" | undefined;
    resultStatus?: "SUCCESS" | "FAILED" | undefined;
}>;
export declare const notificationDeliveryListItemSchema: z.ZodObject<{
    id: z.ZodString;
    jobId: z.ZodString;
    tenantId: z.ZodString;
    userId: z.ZodString;
    userName: z.ZodNullable<z.ZodString>;
    userEmail: z.ZodString;
    sceneCode: z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>;
    templateId: z.ZodString;
    attemptNo: z.ZodNumber;
    resultStatus: z.ZodEnum<["SUCCESS", "FAILED"]>;
    errorCode: z.ZodNullable<z.ZodString>;
    errorMessage: z.ZodNullable<z.ZodString>;
    sentAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    errorCode: string | null;
    id: string;
    tenantId: string;
    createdAt: string;
    userId: string;
    userName: string | null;
    userEmail: string;
    sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
    templateId: string;
    sentAt: string | null;
    resultStatus: "SUCCESS" | "FAILED";
    jobId: string;
    attemptNo: number;
    errorMessage: string | null;
}, {
    errorCode: string | null;
    id: string;
    tenantId: string;
    createdAt: string;
    userId: string;
    userName: string | null;
    userEmail: string;
    sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
    templateId: string;
    sentAt: string | null;
    resultStatus: "SUCCESS" | "FAILED";
    jobId: string;
    attemptNo: number;
    errorMessage: string | null;
}>;
export declare const listNotificationDeliveriesResponseSchema: z.ZodObject<{
    deliveries: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        jobId: z.ZodString;
        tenantId: z.ZodString;
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userEmail: z.ZodString;
        sceneCode: z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>;
        templateId: z.ZodString;
        attemptNo: z.ZodNumber;
        resultStatus: z.ZodEnum<["SUCCESS", "FAILED"]>;
        errorCode: z.ZodNullable<z.ZodString>;
        errorMessage: z.ZodNullable<z.ZodString>;
        sentAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        errorCode: string | null;
        id: string;
        tenantId: string;
        createdAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        templateId: string;
        sentAt: string | null;
        resultStatus: "SUCCESS" | "FAILED";
        jobId: string;
        attemptNo: number;
        errorMessage: string | null;
    }, {
        errorCode: string | null;
        id: string;
        tenantId: string;
        createdAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        templateId: string;
        sentAt: string | null;
        resultStatus: "SUCCESS" | "FAILED";
        jobId: string;
        attemptNo: number;
        errorMessage: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    deliveries: {
        errorCode: string | null;
        id: string;
        tenantId: string;
        createdAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        templateId: string;
        sentAt: string | null;
        resultStatus: "SUCCESS" | "FAILED";
        jobId: string;
        attemptNo: number;
        errorMessage: string | null;
    }[];
}, {
    deliveries: {
        errorCode: string | null;
        id: string;
        tenantId: string;
        createdAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        templateId: string;
        sentAt: string | null;
        resultStatus: "SUCCESS" | "FAILED";
        jobId: string;
        attemptNo: number;
        errorMessage: string | null;
    }[];
}>;
export declare const retryNotificationDeliveryResponseSchema: z.ZodObject<{
    ok: z.ZodLiteral<true>;
    job: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        userId: z.ZodString;
        userName: z.ZodNullable<z.ZodString>;
        userEmail: z.ZodString;
        channel: z.ZodEnum<["WECHAT_OFFICIAL_ACCOUNT", "WECHAT_MINIAPP_SUBSCRIBE"]>;
        sceneCode: z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>;
        status: z.ZodEnum<["PENDING", "SENDING", "SENT", "FAILED_RETRYABLE", "FAILED_TERMINAL", "CANCELLED"]>;
        dedupeKey: z.ZodString;
        scheduledAt: z.ZodString;
        attemptCount: z.ZodNumber;
        nextRetryAt: z.ZodNullable<z.ZodString>;
        ruleVersion: z.ZodNumber;
        lastErrorCode: z.ZodNullable<z.ZodString>;
        lastErrorMessage: z.ZodNullable<z.ZodString>;
        sentAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
        id: string;
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        ruleVersion: number;
        dedupeKey: string;
        scheduledAt: string;
        attemptCount: number;
        nextRetryAt: string | null;
        lastErrorCode: string | null;
        lastErrorMessage: string | null;
        sentAt: string | null;
    }, {
        status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
        id: string;
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        ruleVersion: number;
        dedupeKey: string;
        scheduledAt: string;
        attemptCount: number;
        nextRetryAt: string | null;
        lastErrorCode: string | null;
        lastErrorMessage: string | null;
        sentAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    ok: true;
    job: {
        status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
        id: string;
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        ruleVersion: number;
        dedupeKey: string;
        scheduledAt: string;
        attemptCount: number;
        nextRetryAt: string | null;
        lastErrorCode: string | null;
        lastErrorMessage: string | null;
        sentAt: string | null;
    };
}, {
    ok: true;
    job: {
        status: "PENDING" | "CANCELLED" | "SENDING" | "SENT" | "FAILED_RETRYABLE" | "FAILED_TERMINAL";
        id: string;
        channel: "WECHAT_OFFICIAL_ACCOUNT" | "WECHAT_MINIAPP_SUBSCRIBE";
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        userId: string;
        userName: string | null;
        userEmail: string;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        ruleVersion: number;
        dedupeKey: string;
        scheduledAt: string;
        attemptCount: number;
        nextRetryAt: string | null;
        lastErrorCode: string | null;
        lastErrorMessage: string | null;
        sentAt: string | null;
    };
}>;
export declare const adminNotificationTemplateReadinessSchema: z.ZodObject<{
    sceneCode: z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>;
    sourceEnvKey: z.ZodString;
    templateId: z.ZodNullable<z.ZodString>;
    configured: z.ZodBoolean;
    jumpPathTemplate: z.ZodString;
}, "strip", z.ZodTypeAny, {
    configured: boolean;
    sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
    templateId: string | null;
    sourceEnvKey: string;
    jumpPathTemplate: string;
}, {
    configured: boolean;
    sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
    templateId: string | null;
    sourceEnvKey: string;
    jumpPathTemplate: string;
}>;
export declare const adminNotificationChannelReadinessResponseSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    ready: z.ZodBoolean;
    dryRun: z.ZodBoolean;
    appId: z.ZodNullable<z.ZodString>;
    missingFields: z.ZodArray<z.ZodString, "many">;
    templates: z.ZodArray<z.ZodObject<{
        sceneCode: z.ZodEnum<["DAILY_DIGEST", "REFERRAL_PROGRESS", "CARE_REMINDER_DAILY"]>;
        sourceEnvKey: z.ZodString;
        templateId: z.ZodNullable<z.ZodString>;
        configured: z.ZodBoolean;
        jumpPathTemplate: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        configured: boolean;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        templateId: string | null;
        sourceEnvKey: string;
        jumpPathTemplate: string;
    }, {
        configured: boolean;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        templateId: string | null;
        sourceEnvKey: string;
        jumpPathTemplate: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    enabled: boolean;
    appId: string | null;
    dryRun: boolean;
    ready: boolean;
    missingFields: string[];
    templates: {
        configured: boolean;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        templateId: string | null;
        sourceEnvKey: string;
        jumpPathTemplate: string;
    }[];
}, {
    enabled: boolean;
    appId: string | null;
    dryRun: boolean;
    ready: boolean;
    missingFields: string[];
    templates: {
        configured: boolean;
        sceneCode: "DAILY_DIGEST" | "REFERRAL_PROGRESS" | "CARE_REMINDER_DAILY";
        templateId: string | null;
        sourceEnvKey: string;
        jumpPathTemplate: string;
    }[];
}>;
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
export type UpdateCareReminderSubscribeStatusRequest = z.infer<typeof updateCareReminderSubscribeStatusRequestSchema>;
export type UpdateCareReminderSubscribeStatusResponse = z.infer<typeof updateCareReminderSubscribeStatusResponseSchema>;
export type GetTodayCareRemindersResponse = z.infer<typeof getTodayCareRemindersResponseSchema>;
export type GetProductCareReminderRulesResponse = z.infer<typeof getProductCareReminderRulesResponseSchema>;
export type UpdateProductCareReminderRulesRequest = z.infer<typeof updateProductCareReminderRulesRequestSchema>;
export type UpdateProductCareReminderRulesResponse = z.infer<typeof updateProductCareReminderRulesResponseSchema>;
export type ReminderPreferences = z.infer<typeof reminderPreferencesSchema>;
export type GetReminderPreferencesResponse = z.infer<typeof getReminderPreferencesResponseSchema>;
export type UpdateWechatBindingSubscribeStatusRequest = z.infer<typeof updateWechatBindingSubscribeStatusRequestSchema>;
export type UpdateWechatBindingSubscribeStatusResponse = z.infer<typeof updateWechatBindingSubscribeStatusResponseSchema>;
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
export type AdminNotificationChannelReadinessResponse = z.infer<typeof adminNotificationChannelReadinessResponseSchema>;
