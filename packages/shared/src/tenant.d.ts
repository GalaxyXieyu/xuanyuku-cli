import { z } from 'zod';
export declare const tenantSlugSchema: z.ZodString;
export declare const tenantNameSchema: z.ZodString;
export declare const tenantRoleSchema: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
export declare const effectiveTenantRoleSchema: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
export declare const tenantSchema: z.ZodObject<{
    id: z.ZodString;
    slug: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    slug: string;
}, {
    id: string;
    name: string;
    slug: string;
}>;
export declare const tenantMembershipSchema: z.ZodObject<{
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
    role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
}>;
export declare const createTenantRequestSchema: z.ZodObject<{
    slug: z.ZodString;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    slug: string;
}, {
    name: string;
    slug: string;
}>;
export declare const createTenantResponseSchema: z.ZodObject<{
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
    role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
}>;
export declare const myTenantsResponseSchema: z.ZodObject<{
    tenants: z.ZodArray<z.ZodObject<{
        tenant: z.ZodObject<{
            id: z.ZodString;
            slug: z.ZodString;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            slug: string;
        }, {
            id: string;
            name: string;
            slug: string;
        }>;
        role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
    }, "strip", z.ZodTypeAny, {
        tenant: {
            id: string;
            name: string;
            slug: string;
        };
        role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    }, {
        tenant: {
            id: string;
            name: string;
            slug: string;
        };
        role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    tenants: {
        tenant: {
            id: string;
            name: string;
            slug: string;
        };
        role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    }[];
}, {
    tenants: {
        tenant: {
            id: string;
            name: string;
            slug: string;
        };
        role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    }[];
}>;
export declare const switchTenantRequestSchema: z.ZodEffects<z.ZodObject<{
    tenantId: z.ZodOptional<z.ZodString>;
    slug: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tenantId?: string | undefined;
    slug?: string | undefined;
}, {
    tenantId?: string | undefined;
    slug?: string | undefined;
}>, {
    tenantId?: string | undefined;
    slug?: string | undefined;
}, {
    tenantId?: string | undefined;
    slug?: string | undefined;
}>;
export declare const switchTenantResponseSchema: z.ZodObject<{
    accessToken: z.ZodString;
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
    role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    accessToken: string;
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
    accessToken: string;
}>;
export declare const currentTenantResponseSchema: z.ZodObject<{
    tenant: z.ZodObject<{
        id: z.ZodString;
        slug: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        slug: string;
    }, {
        id: string;
        name: string;
        slug: string;
    }>;
    role: z.ZodEnum<["OWNER", "ADMIN", "EDITOR", "VIEWER"]>;
}, "strip", z.ZodTypeAny, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
}, {
    tenant: {
        id: string;
        name: string;
        slug: string;
    };
    role: "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
}>;
export declare function normalizeTenantRole(role: TenantRole): EffectiveTenantRole;
export type CreateTenantRequest = z.infer<typeof createTenantRequestSchema>;
export type CreateTenantResponse = z.infer<typeof createTenantResponseSchema>;
export type MyTenantsResponse = z.infer<typeof myTenantsResponseSchema>;
export type SwitchTenantRequest = z.infer<typeof switchTenantRequestSchema>;
export type SwitchTenantResponse = z.infer<typeof switchTenantResponseSchema>;
export type CurrentTenantResponse = z.infer<typeof currentTenantResponseSchema>;
export type Tenant = z.infer<typeof tenantSchema>;
export type TenantMembership = z.infer<typeof tenantMembershipSchema>;
export type TenantRole = z.infer<typeof tenantRoleSchema>;
export type EffectiveTenantRole = z.infer<typeof effectiveTenantRoleSchema>;
