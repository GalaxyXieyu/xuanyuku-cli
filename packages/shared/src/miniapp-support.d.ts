import { z } from 'zod';
export declare const miniappSupportConfigSchema: z.ZodObject<{
    enabled: z.ZodBoolean;
    title: z.ZodString;
    description: z.ZodString;
    wechatId: z.ZodNullable<z.ZodString>;
    qrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    enabled: boolean;
    description: string;
    wechatId: string | null;
    qrImageUrl: string | null;
}, {
    title: string;
    enabled: boolean;
    description: string;
    wechatId: string | null;
    qrImageUrl: string | null;
}>;
export declare const getMiniappSupportConfigResponseSchema: z.ZodObject<{
    config: z.ZodObject<{
        enabled: z.ZodBoolean;
        title: z.ZodString;
        description: z.ZodString;
        wechatId: z.ZodNullable<z.ZodString>;
        qrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    }, {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    config: {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    };
}, {
    config: {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    };
}>;
export declare const updateMiniappSupportConfigRequestSchema: z.ZodObject<{
    config: z.ZodObject<Omit<{
        enabled: z.ZodBoolean;
        title: z.ZodString;
        description: z.ZodString;
        wechatId: z.ZodNullable<z.ZodString>;
        qrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    }, "qrImageUrl"> & {
        qrImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl?: string | null | undefined;
    }, {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    config: {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl?: string | null | undefined;
    };
}, {
    config: {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl?: string | null | undefined;
    };
}>;
export declare const updateMiniappSupportConfigResponseSchema: z.ZodObject<{
    config: z.ZodObject<{
        enabled: z.ZodBoolean;
        title: z.ZodString;
        description: z.ZodString;
        wechatId: z.ZodNullable<z.ZodString>;
        qrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    }, {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    auditLogId: string;
    config: {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    };
}, {
    auditLogId: string;
    config: {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    };
}>;
export declare const uploadMiniappSupportQrImageResponseSchema: z.ZodObject<{
    asset: z.ZodObject<{
        key: z.ZodString;
        url: z.ZodEffects<z.ZodString, string, string>;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    }, {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    }>;
    config: z.ZodObject<{
        enabled: z.ZodBoolean;
        title: z.ZodString;
        description: z.ZodString;
        wechatId: z.ZodNullable<z.ZodString>;
        qrImageUrl: z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    }, {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    }>;
    auditLogId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    asset: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    };
    auditLogId: string;
    config: {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    };
}, {
    asset: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    };
    auditLogId: string;
    config: {
        title: string;
        enabled: boolean;
        description: string;
        wechatId: string | null;
        qrImageUrl: string | null;
    };
}>;
export declare const DEFAULT_MINIAPP_SUPPORT_CONFIG: {
    title: string;
    enabled: boolean;
    description: string;
    wechatId: string | null;
    qrImageUrl: string | null;
};
export type MiniappSupportConfig = z.infer<typeof miniappSupportConfigSchema>;
export type GetMiniappSupportConfigResponse = z.infer<typeof getMiniappSupportConfigResponseSchema>;
export type UpdateMiniappSupportConfigRequest = z.infer<typeof updateMiniappSupportConfigRequestSchema>;
export type UpdateMiniappSupportConfigResponse = z.infer<typeof updateMiniappSupportConfigResponseSchema>;
export type UploadMiniappSupportQrImageResponse = z.infer<typeof uploadMiniappSupportQrImageResponseSchema>;
