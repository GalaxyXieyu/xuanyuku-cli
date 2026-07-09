import { z } from 'zod';
export declare const breederCodeSchema: z.ZodString;
export declare const breederIdParamSchema: z.ZodString;
export declare const breederSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    seriesId: z.ZodString;
    code: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    sex: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    sireCode: z.ZodNullable<z.ZodString>;
    damCode: z.ZodNullable<z.ZodString>;
    mateCode: z.ZodNullable<z.ZodString>;
    isActive: z.ZodBoolean;
    linkedProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    series: z.ZodOptional<z.ZodObject<{
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
    }>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    id: string;
    name: string | null;
    sex: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    description: string | null;
    sireCode: string | null;
    damCode: string | null;
    mateCode: string | null;
    seriesId: string;
    coverImageUrl?: string | null | undefined;
    series?: {
        id: string;
        name: string;
        tenantId: string;
        sortOrder: number;
        isActive: boolean;
        productCount: number;
        isPublicVisible: boolean;
    } | undefined;
    linkedProductId?: string | null | undefined;
}, {
    code: string;
    id: string;
    name: string | null;
    sex: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    description: string | null;
    sireCode: string | null;
    damCode: string | null;
    mateCode: string | null;
    seriesId: string;
    coverImageUrl?: string | null | undefined;
    series?: {
        id: string;
        name: string;
        tenantId: string;
        sortOrder: number;
        isActive: boolean;
        isPublicVisible: boolean;
        productCount?: number | undefined;
    } | undefined;
    linkedProductId?: string | null | undefined;
}>;
export declare const listBreedersQuerySchema: z.ZodObject<{
    seriesId: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    code?: string | undefined;
    seriesId?: string | undefined;
    search?: string | undefined;
}, {
    code?: string | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
    seriesId?: string | undefined;
    search?: string | undefined;
}>;
export declare const listBreedersResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        seriesId: z.ZodString;
        code: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        sireCode: z.ZodNullable<z.ZodString>;
        damCode: z.ZodNullable<z.ZodString>;
        mateCode: z.ZodNullable<z.ZodString>;
        isActive: z.ZodBoolean;
        linkedProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        series: z.ZodOptional<z.ZodObject<{
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
        }>>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        description: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
        seriesId: string;
        coverImageUrl?: string | null | undefined;
        series?: {
            id: string;
            name: string;
            tenantId: string;
            sortOrder: number;
            isActive: boolean;
            productCount: number;
            isPublicVisible: boolean;
        } | undefined;
        linkedProductId?: string | null | undefined;
    }, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        description: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
        seriesId: string;
        coverImageUrl?: string | null | undefined;
        series?: {
            id: string;
            name: string;
            tenantId: string;
            sortOrder: number;
            isActive: boolean;
            isPublicVisible: boolean;
            productCount?: number | undefined;
        } | undefined;
        linkedProductId?: string | null | undefined;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    items: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        description: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
        seriesId: string;
        coverImageUrl?: string | null | undefined;
        series?: {
            id: string;
            name: string;
            tenantId: string;
            sortOrder: number;
            isActive: boolean;
            productCount: number;
            isPublicVisible: boolean;
        } | undefined;
        linkedProductId?: string | null | undefined;
    }[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}, {
    items: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        description: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
        seriesId: string;
        coverImageUrl?: string | null | undefined;
        series?: {
            id: string;
            name: string;
            tenantId: string;
            sortOrder: number;
            isActive: boolean;
            isPublicVisible: boolean;
            productCount?: number | undefined;
        } | undefined;
        linkedProductId?: string | null | undefined;
    }[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
}>;
export declare const getBreederResponseSchema: z.ZodObject<{
    breeder: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        seriesId: z.ZodString;
        code: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        sireCode: z.ZodNullable<z.ZodString>;
        damCode: z.ZodNullable<z.ZodString>;
        mateCode: z.ZodNullable<z.ZodString>;
        isActive: z.ZodBoolean;
        linkedProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
        series: z.ZodOptional<z.ZodObject<{
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
        }>>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        description: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
        seriesId: string;
        coverImageUrl?: string | null | undefined;
        series?: {
            id: string;
            name: string;
            tenantId: string;
            sortOrder: number;
            isActive: boolean;
            productCount: number;
            isPublicVisible: boolean;
        } | undefined;
        linkedProductId?: string | null | undefined;
    }, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        description: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
        seriesId: string;
        coverImageUrl?: string | null | undefined;
        series?: {
            id: string;
            name: string;
            tenantId: string;
            sortOrder: number;
            isActive: boolean;
            isPublicVisible: boolean;
            productCount?: number | undefined;
        } | undefined;
        linkedProductId?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    breeder: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        description: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
        seriesId: string;
        coverImageUrl?: string | null | undefined;
        series?: {
            id: string;
            name: string;
            tenantId: string;
            sortOrder: number;
            isActive: boolean;
            productCount: number;
            isPublicVisible: boolean;
        } | undefined;
        linkedProductId?: string | null | undefined;
    };
}, {
    breeder: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        description: string | null;
        sireCode: string | null;
        damCode: string | null;
        mateCode: string | null;
        seriesId: string;
        coverImageUrl?: string | null | undefined;
        series?: {
            id: string;
            name: string;
            tenantId: string;
            sortOrder: number;
            isActive: boolean;
            isPublicVisible: boolean;
            productCount?: number | undefined;
        } | undefined;
        linkedProductId?: string | null | undefined;
    };
}>;
export declare const breederEventSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    breederId: z.ZodString;
    eventType: z.ZodString;
    eventDate: z.ZodString;
    note: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    eventDate: string;
    eventType: string;
    breederId: string;
}, {
    id: string;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    eventDate: string;
    eventType: string;
    breederId: string;
}>;
export declare const listBreederEventsResponseSchema: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        breederId: z.ZodString;
        eventType: z.ZodString;
        eventDate: z.ZodString;
        note: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        eventDate: string;
        eventType: string;
        breederId: string;
    }, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        eventDate: string;
        eventType: string;
        breederId: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    events: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        eventDate: string;
        eventType: string;
        breederId: string;
    }[];
}, {
    events: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        eventDate: string;
        eventType: string;
        breederId: string;
    }[];
}>;
export declare const breederFamilyTreeNodeSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    sex: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code: string;
    id: string;
    name: string | null;
    sex: string | null;
}, {
    code: string;
    id: string;
    name: string | null;
    sex: string | null;
}>;
export declare const breederFamilyTreeLinkSchema: z.ZodObject<{
    code: z.ZodString;
    breeder: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }>>;
}, "strip", z.ZodTypeAny, {
    code: string;
    breeder: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    } | null;
}, {
    code: string;
    breeder: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    } | null;
}>;
export declare const breederFamilyTreeSchema: z.ZodObject<{
    self: z.ZodObject<{
        id: z.ZodString;
        code: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }>;
    sire: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }>>;
    dam: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }>>;
    mate: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }>>;
    children: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodString;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }, {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }>, "many">;
    links: z.ZodObject<{
        sire: z.ZodNullable<z.ZodObject<{
            code: z.ZodString;
            breeder: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodString;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            }, {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            }>>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        }, {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        }>>;
        dam: z.ZodNullable<z.ZodObject<{
            code: z.ZodString;
            breeder: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodString;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            }, {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            }>>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        }, {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        }>>;
        mate: z.ZodNullable<z.ZodObject<{
            code: z.ZodString;
            breeder: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodString;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            }, {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            }>>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        }, {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        sire: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
        dam: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
        mate: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
    }, {
        sire: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
        dam: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
        mate: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
    }>;
    limitations: z.ZodString;
}, "strip", z.ZodTypeAny, {
    self: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    };
    sire: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    } | null;
    dam: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    } | null;
    mate: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    } | null;
    children: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }[];
    links: {
        sire: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
        dam: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
        mate: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
    };
    limitations: string;
}, {
    self: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    };
    sire: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    } | null;
    dam: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    } | null;
    mate: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    } | null;
    children: {
        code: string;
        id: string;
        name: string | null;
        sex: string | null;
    }[];
    links: {
        sire: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
        dam: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
        mate: {
            code: string;
            breeder: {
                code: string;
                id: string;
                name: string | null;
                sex: string | null;
            } | null;
        } | null;
    };
    limitations: string;
}>;
export declare const getBreederFamilyTreeResponseSchema: z.ZodObject<{
    tree: z.ZodObject<{
        self: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }>;
        sire: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }>>;
        dam: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }>>;
        mate: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }>>;
        children: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodString;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }, {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }>, "many">;
        links: z.ZodObject<{
            sire: z.ZodNullable<z.ZodObject<{
                code: z.ZodString;
                breeder: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodString;
                    name: z.ZodNullable<z.ZodString>;
                    sex: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                }, {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                }>>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            }, {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            }>>;
            dam: z.ZodNullable<z.ZodObject<{
                code: z.ZodString;
                breeder: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodString;
                    name: z.ZodNullable<z.ZodString>;
                    sex: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                }, {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                }>>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            }, {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            }>>;
            mate: z.ZodNullable<z.ZodObject<{
                code: z.ZodString;
                breeder: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodString;
                    name: z.ZodNullable<z.ZodString>;
                    sex: z.ZodNullable<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                }, {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                }>>;
            }, "strip", z.ZodTypeAny, {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            }, {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            }>>;
        }, "strip", z.ZodTypeAny, {
            sire: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            dam: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            mate: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
        }, {
            sire: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            dam: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            mate: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
        }>;
        limitations: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        self: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        };
        sire: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        dam: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        mate: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        children: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }[];
        links: {
            sire: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            dam: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            mate: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
        };
        limitations: string;
    }, {
        self: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        };
        sire: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        dam: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        mate: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        children: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }[];
        links: {
            sire: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            dam: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            mate: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
        };
        limitations: string;
    }>;
}, "strip", z.ZodTypeAny, {
    tree: {
        self: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        };
        sire: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        dam: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        mate: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        children: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }[];
        links: {
            sire: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            dam: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            mate: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
        };
        limitations: string;
    };
}, {
    tree: {
        self: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        };
        sire: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        dam: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        mate: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        } | null;
        children: {
            code: string;
            id: string;
            name: string | null;
            sex: string | null;
        }[];
        links: {
            sire: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            dam: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
            mate: {
                code: string;
                breeder: {
                    code: string;
                    id: string;
                    name: string | null;
                    sex: string | null;
                } | null;
            } | null;
        };
        limitations: string;
    };
}>;
export type Breeder = z.infer<typeof breederSchema>;
export type ListBreedersQuery = z.infer<typeof listBreedersQuerySchema>;
export type BreederEvent = z.infer<typeof breederEventSchema>;
export type BreederFamilyTreeLink = z.infer<typeof breederFamilyTreeLinkSchema>;
export type BreederFamilyTree = z.infer<typeof breederFamilyTreeSchema>;
