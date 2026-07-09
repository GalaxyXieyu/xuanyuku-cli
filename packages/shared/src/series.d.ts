import { z } from 'zod';
export declare const seriesNameSchema: z.ZodString;
export declare const seriesSummarySchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    name: z.ZodString;
    sortOrder: z.ZodNumber;
    isActive: z.ZodBoolean;
    isPublicVisible: z.ZodBoolean;
    productCount: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    tenantId: string;
    sortOrder: number;
    isActive: boolean;
    productCount: number;
    isPublicVisible: boolean;
}, {
    id: string;
    name: string;
    tenantId: string;
    sortOrder: number;
    isActive: boolean;
    isPublicVisible: boolean;
    productCount?: number | undefined;
}>;
export declare const seriesSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    name: z.ZodString;
    sortOrder: z.ZodNumber;
    isActive: z.ZodBoolean;
    isPublicVisible: z.ZodBoolean;
    productCount: z.ZodDefault<z.ZodNumber>;
} & {
    description: z.ZodNullable<z.ZodString>;
    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    sortOrder: number;
    isActive: boolean;
    description: string | null;
    productCount: number;
    isPublicVisible: boolean;
    coverImageUrl?: string | null | undefined;
}, {
    id: string;
    name: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    sortOrder: number;
    isActive: boolean;
    description: string | null;
    isPublicVisible: boolean;
    coverImageUrl?: string | null | undefined;
    productCount?: number | undefined;
}>;
export declare const listSeriesQuerySchema: z.ZodObject<{
    search: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    search?: string | undefined;
}, {
    page?: number | undefined;
    pageSize?: number | undefined;
    search?: string | undefined;
}>;
export declare const listSeriesResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        name: z.ZodString;
        sortOrder: z.ZodNumber;
        isActive: z.ZodBoolean;
        isPublicVisible: z.ZodBoolean;
        productCount: z.ZodDefault<z.ZodNumber>;
    } & {
        description: z.ZodNullable<z.ZodString>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    }, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    }[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}, {
    items: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    }[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}>;
export declare const getSeriesResponseSchema: z.ZodObject<{
    series: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        name: z.ZodString;
        sortOrder: z.ZodNumber;
        isActive: z.ZodBoolean;
        isPublicVisible: z.ZodBoolean;
        productCount: z.ZodDefault<z.ZodNumber>;
    } & {
        description: z.ZodNullable<z.ZodString>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    }, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    series: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    };
}, {
    series: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    };
}>;
export declare const createSeriesRequestSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sortOrder: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isPublicVisible: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    description?: string | null | undefined;
    isPublicVisible?: boolean | undefined;
}, {
    name: string;
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    description?: string | null | undefined;
    isPublicVisible?: boolean | undefined;
}>;
export declare const createSeriesResponseSchema: z.ZodObject<{
    series: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        name: z.ZodString;
        sortOrder: z.ZodNumber;
        isActive: z.ZodBoolean;
        isPublicVisible: z.ZodBoolean;
        productCount: z.ZodDefault<z.ZodNumber>;
    } & {
        description: z.ZodNullable<z.ZodString>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    }, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    series: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    };
}, {
    series: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    };
}>;
export declare const updateSeriesRequestSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isPublicVisible: z.ZodOptional<z.ZodBoolean>;
    sortOrder: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    description?: string | null | undefined;
    isPublicVisible?: boolean | undefined;
}, {
    name?: string | undefined;
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    description?: string | null | undefined;
    isPublicVisible?: boolean | undefined;
}>, {
    name?: string | undefined;
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    description?: string | null | undefined;
    isPublicVisible?: boolean | undefined;
}, {
    name?: string | undefined;
    sortOrder?: number | undefined;
    isActive?: boolean | undefined;
    description?: string | null | undefined;
    isPublicVisible?: boolean | undefined;
}>;
export declare const updateSeriesResponseSchema: z.ZodObject<{
    series: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        name: z.ZodString;
        sortOrder: z.ZodNumber;
        isActive: z.ZodBoolean;
        isPublicVisible: z.ZodBoolean;
        productCount: z.ZodDefault<z.ZodNumber>;
    } & {
        description: z.ZodNullable<z.ZodString>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    }, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    series: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    };
}, {
    series: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    };
}>;
export declare const reorderSeriesRequestSchema: z.ZodObject<{
    ids: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    ids: string[];
}, {
    ids: string[];
}>;
export declare const reorderSeriesResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        name: z.ZodString;
        sortOrder: z.ZodNumber;
        isActive: z.ZodBoolean;
        isPublicVisible: z.ZodBoolean;
        productCount: z.ZodDefault<z.ZodNumber>;
    } & {
        description: z.ZodNullable<z.ZodString>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    }, {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        productCount: number;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
    }[];
}, {
    items: {
        id: string;
        name: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        isActive: boolean;
        description: string | null;
        isPublicVisible: boolean;
        coverImageUrl?: string | null | undefined;
        productCount?: number | undefined;
    }[];
}>;
export declare const deleteSeriesResponseSchema: z.ZodObject<{
    deleted: z.ZodLiteral<true>;
    seriesId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    seriesId: string;
    deleted: true;
}, {
    seriesId: string;
    deleted: true;
}>;
export type Series = z.infer<typeof seriesSchema>;
export type SeriesSummary = z.infer<typeof seriesSummarySchema>;
export type ListSeriesQuery = z.infer<typeof listSeriesQuerySchema>;
export type ListSeriesResponse = z.infer<typeof listSeriesResponseSchema>;
export type CreateSeriesRequest = z.infer<typeof createSeriesRequestSchema>;
export type UpdateSeriesRequest = z.infer<typeof updateSeriesRequestSchema>;
export type CreateSeriesResponse = z.infer<typeof createSeriesResponseSchema>;
export type UpdateSeriesResponse = z.infer<typeof updateSeriesResponseSchema>;
export type ReorderSeriesRequest = z.infer<typeof reorderSeriesRequestSchema>;
export type ReorderSeriesResponse = z.infer<typeof reorderSeriesResponseSchema>;
export type DeleteSeriesResponse = z.infer<typeof deleteSeriesResponseSchema>;
