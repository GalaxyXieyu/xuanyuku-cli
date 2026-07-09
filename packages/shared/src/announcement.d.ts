import { z } from 'zod';
export declare const announcementAudienceSchema: z.ZodEnum<["TENANT_APP", "PUBLIC_PAGE", "TENANT_AND_PUBLIC"]>;
export declare const announcementStatusSchema: z.ZodEnum<["DRAFT", "PUBLISHED", "ARCHIVED"]>;
export declare const announcementReleaseDateSchema: z.ZodString;
export declare const announcementFeatureSchema: z.ZodObject<{
    title: z.ZodString;
    detail: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    detail: string;
}, {
    title: string;
    detail?: string | undefined;
}>;
export declare const announcementSchema: z.ZodObject<{
    id: z.ZodString;
    releaseDate: z.ZodString;
    audience: z.ZodEnum<["TENANT_APP", "PUBLIC_PAGE", "TENANT_AND_PUBLIC"]>;
    status: z.ZodEnum<["DRAFT", "PUBLISHED", "ARCHIVED"]>;
    title: z.ZodString;
    subtitle: z.ZodNullable<z.ZodString>;
    summary: z.ZodNullable<z.ZodString>;
    features: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        detail: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        detail: string;
    }, {
        title: string;
        detail?: string | undefined;
    }>, "many">;
    fixes: z.ZodArray<z.ZodString, "many">;
    posterUrl: z.ZodNullable<z.ZodString>;
    sourceDate: z.ZodNullable<z.ZodString>;
    publishedAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    id: string;
    title: string;
    summary: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    subtitle: string | null;
    features: {
        title: string;
        detail: string;
    }[];
    releaseDate: string;
    audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
    fixes: string[];
    posterUrl: string | null;
    sourceDate: string | null;
}, {
    status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    id: string;
    title: string;
    summary: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    subtitle: string | null;
    features: {
        title: string;
        detail?: string | undefined;
    }[];
    releaseDate: string;
    audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
    fixes: string[];
    posterUrl: string | null;
    sourceDate: string | null;
}>;
export declare const createAnnouncementDraftRequestSchema: z.ZodObject<{
    releaseDate: z.ZodString;
    audience: z.ZodDefault<z.ZodEnum<["TENANT_APP", "PUBLIC_PAGE", "TENANT_AND_PUBLIC"]>>;
    title: z.ZodString;
    subtitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    features: z.ZodArray<z.ZodObject<{
        title: z.ZodString;
        detail: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title: string;
        detail: string;
    }, {
        title: string;
        detail?: string | undefined;
    }>, "many">;
    fixes: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    posterUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sourceDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    features: {
        title: string;
        detail: string;
    }[];
    releaseDate: string;
    audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
    fixes: string[];
    summary?: string | null | undefined;
    subtitle?: string | null | undefined;
    posterUrl?: string | null | undefined;
    sourceDate?: string | null | undefined;
}, {
    title: string;
    features: {
        title: string;
        detail?: string | undefined;
    }[];
    releaseDate: string;
    summary?: string | null | undefined;
    subtitle?: string | null | undefined;
    audience?: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC" | undefined;
    fixes?: string[] | undefined;
    posterUrl?: string | null | undefined;
    sourceDate?: string | null | undefined;
}>;
export declare const listAnnouncementsQuerySchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["DRAFT", "PUBLISHED", "ARCHIVED"]>>;
    audience: z.ZodOptional<z.ZodEnum<["TENANT_APP", "PUBLIC_PAGE", "TENANT_AND_PUBLIC"]>>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED" | undefined;
    audience?: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC" | undefined;
}, {
    status?: "DRAFT" | "PUBLISHED" | "ARCHIVED" | undefined;
    limit?: number | undefined;
    audience?: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC" | undefined;
}>;
export declare const announcementResponseSchema: z.ZodObject<{
    announcement: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        releaseDate: z.ZodString;
        audience: z.ZodEnum<["TENANT_APP", "PUBLIC_PAGE", "TENANT_AND_PUBLIC"]>;
        status: z.ZodEnum<["DRAFT", "PUBLISHED", "ARCHIVED"]>;
        title: z.ZodString;
        subtitle: z.ZodNullable<z.ZodString>;
        summary: z.ZodNullable<z.ZodString>;
        features: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            detail: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            detail: string;
        }, {
            title: string;
            detail?: string | undefined;
        }>, "many">;
        fixes: z.ZodArray<z.ZodString, "many">;
        posterUrl: z.ZodNullable<z.ZodString>;
        sourceDate: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail: string;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }, {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail?: string | undefined;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }>>;
}, "strip", z.ZodTypeAny, {
    announcement: {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail: string;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    } | null;
}, {
    announcement: {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail?: string | undefined;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    } | null;
}>;
export declare const listAnnouncementsResponseSchema: z.ZodObject<{
    announcements: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        releaseDate: z.ZodString;
        audience: z.ZodEnum<["TENANT_APP", "PUBLIC_PAGE", "TENANT_AND_PUBLIC"]>;
        status: z.ZodEnum<["DRAFT", "PUBLISHED", "ARCHIVED"]>;
        title: z.ZodString;
        subtitle: z.ZodNullable<z.ZodString>;
        summary: z.ZodNullable<z.ZodString>;
        features: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            detail: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            detail: string;
        }, {
            title: string;
            detail?: string | undefined;
        }>, "many">;
        fixes: z.ZodArray<z.ZodString, "many">;
        posterUrl: z.ZodNullable<z.ZodString>;
        sourceDate: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail: string;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }, {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail?: string | undefined;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    announcements: {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail: string;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }[];
}, {
    announcements: {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail?: string | undefined;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }[];
}>;
export declare const createAnnouncementDraftResponseSchema: z.ZodObject<{
    announcement: z.ZodObject<{
        id: z.ZodString;
        releaseDate: z.ZodString;
        audience: z.ZodEnum<["TENANT_APP", "PUBLIC_PAGE", "TENANT_AND_PUBLIC"]>;
        status: z.ZodEnum<["DRAFT", "PUBLISHED", "ARCHIVED"]>;
        title: z.ZodString;
        subtitle: z.ZodNullable<z.ZodString>;
        summary: z.ZodNullable<z.ZodString>;
        features: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            detail: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            detail: string;
        }, {
            title: string;
            detail?: string | undefined;
        }>, "many">;
        fixes: z.ZodArray<z.ZodString, "many">;
        posterUrl: z.ZodNullable<z.ZodString>;
        sourceDate: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail: string;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }, {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail?: string | undefined;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    announcement: {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail: string;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    };
}, {
    announcement: {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail?: string | undefined;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    };
}>;
export declare const publishAnnouncementResponseSchema: z.ZodObject<{
    announcement: z.ZodObject<{
        id: z.ZodString;
        releaseDate: z.ZodString;
        audience: z.ZodEnum<["TENANT_APP", "PUBLIC_PAGE", "TENANT_AND_PUBLIC"]>;
        status: z.ZodEnum<["DRAFT", "PUBLISHED", "ARCHIVED"]>;
        title: z.ZodString;
        subtitle: z.ZodNullable<z.ZodString>;
        summary: z.ZodNullable<z.ZodString>;
        features: z.ZodArray<z.ZodObject<{
            title: z.ZodString;
            detail: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            detail: string;
        }, {
            title: string;
            detail?: string | undefined;
        }>, "many">;
        fixes: z.ZodArray<z.ZodString, "many">;
        posterUrl: z.ZodNullable<z.ZodString>;
        sourceDate: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail: string;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }, {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail?: string | undefined;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    announcement: {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail: string;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    };
}, {
    announcement: {
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string | null;
        createdAt: string;
        updatedAt: string;
        publishedAt: string | null;
        subtitle: string | null;
        features: {
            title: string;
            detail?: string | undefined;
        }[];
        releaseDate: string;
        audience: "TENANT_APP" | "PUBLIC_PAGE" | "TENANT_AND_PUBLIC";
        fixes: string[];
        posterUrl: string | null;
        sourceDate: string | null;
    };
}>;
export type AnnouncementAudience = z.infer<typeof announcementAudienceSchema>;
export type AnnouncementStatus = z.infer<typeof announcementStatusSchema>;
export type AnnouncementFeature = z.infer<typeof announcementFeatureSchema>;
export type Announcement = z.infer<typeof announcementSchema>;
export type CreateAnnouncementDraftRequest = z.infer<typeof createAnnouncementDraftRequestSchema>;
export type ListAnnouncementsQuery = z.infer<typeof listAnnouncementsQuerySchema>;
export type AnnouncementResponse = z.infer<typeof announcementResponseSchema>;
export type ListAnnouncementsResponse = z.infer<typeof listAnnouncementsResponseSchema>;
export type CreateAnnouncementDraftResponse = z.infer<typeof createAnnouncementDraftResponseSchema>;
export type PublishAnnouncementResponse = z.infer<typeof publishAnnouncementResponseSchema>;
