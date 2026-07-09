import { z } from 'zod';
export declare const guiquanCommunityTagSchema: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
export declare const guiquanCommunityPostStatusSchema: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
export declare const guiquanCommunityPostSourceTypeSchema: z.ZodEnum<["PLATFORM", "TENANT"]>;
export declare const guiquanCommunityCommentStatusSchema: z.ZodEnum<["VISIBLE", "HIDDEN", "DELETED"]>;
export declare const guiquanCommunityReportTargetTypeSchema: z.ZodEnum<["POST", "COMMENT"]>;
export declare const guiquanCommunityReportReasonSchema: z.ZodEnum<["SPAM_AD", "ABUSE", "FALSE_INFO", "ILLEGAL_TRANSACTION", "PRIVACY", "OTHER"]>;
export declare const guiquanCommunityReportStatusSchema: z.ZodEnum<["OPEN", "RESOLVED", "DISMISSED"]>;
export declare const guiquanCommunityReferencedProductSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    code?: string | null | undefined;
    coverImageUrl?: string | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: string | null | undefined;
    publicShareToken?: string | null | undefined;
    publicCoverImageUrl?: string | null | undefined;
    publicProductTenantId?: string | null | undefined;
    publicSeriesName?: string | null | undefined;
    publicOffspringUnitPrice?: number | null | undefined;
    publicInStock?: boolean | null | undefined;
}, {
    id: string;
    code?: string | null | undefined;
    coverImageUrl?: string | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: string | null | undefined;
    publicShareToken?: string | null | undefined;
    publicCoverImageUrl?: string | null | undefined;
    publicProductTenantId?: string | null | undefined;
    publicSeriesName?: string | null | undefined;
    publicOffspringUnitPrice?: number | null | undefined;
    publicInStock?: boolean | null | undefined;
}>;
export declare const guiquanCommunityParagraphBlockSchema: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"paragraph">;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "paragraph";
    id: string;
    text: string;
}, {
    type: "paragraph";
    id: string;
    text: string;
}>;
export declare const guiquanCommunityHeadingBlockSchema: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"heading">;
    text: z.ZodString;
    level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
}, "strip", z.ZodTypeAny, {
    type: "heading";
    id: string;
    text: string;
    level: 2 | 3;
}, {
    type: "heading";
    id: string;
    text: string;
    level?: 2 | 3 | undefined;
}>;
export declare const guiquanCommunityQuoteBlockSchema: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"quote">;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "quote";
    id: string;
    text: string;
}, {
    type: "quote";
    id: string;
    text: string;
}>;
export declare const guiquanCommunityImageBlockSchema: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"image">;
    url: z.ZodEffects<z.ZodString, string, string>;
    alt: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    id: string;
    url: string;
    alt: string;
}, {
    type: "image";
    id: string;
    url: string;
    alt?: string | undefined;
}>;
export declare const guiquanCommunityProductCardBlockSchema: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"product-card">;
    product: z.ZodObject<{
        id: z.ZodString;
        code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "product-card";
    id: string;
    product: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    };
}, {
    type: "product-card";
    id: string;
    product: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    };
}>;
export declare const guiquanCommunityDividerBlockSchema: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"divider">;
}, "strip", z.ZodTypeAny, {
    type: "divider";
    id: string;
}, {
    type: "divider";
    id: string;
}>;
export declare const guiquanCommunityContentBlockSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"paragraph">;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "paragraph";
    id: string;
    text: string;
}, {
    type: "paragraph";
    id: string;
    text: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"heading">;
    text: z.ZodString;
    level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
}, "strip", z.ZodTypeAny, {
    type: "heading";
    id: string;
    text: string;
    level: 2 | 3;
}, {
    type: "heading";
    id: string;
    text: string;
    level?: 2 | 3 | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"quote">;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "quote";
    id: string;
    text: string;
}, {
    type: "quote";
    id: string;
    text: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"image">;
    url: z.ZodEffects<z.ZodString, string, string>;
    alt: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    id: string;
    url: string;
    alt: string;
}, {
    type: "image";
    id: string;
    url: string;
    alt?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"product-card">;
    product: z.ZodObject<{
        id: z.ZodString;
        code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "product-card";
    id: string;
    product: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    };
}, {
    type: "product-card";
    id: string;
    product: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    };
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"divider">;
}, "strip", z.ZodTypeAny, {
    type: "divider";
    id: string;
}, {
    type: "divider";
    id: string;
}>]>;
export declare const guiquanCommunityContentBlockInputSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"paragraph">;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "paragraph";
    text: string;
    id?: string | undefined;
}, {
    type: "paragraph";
    text: string;
    id?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"heading">;
    text: z.ZodString;
    level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
}, "strip", z.ZodTypeAny, {
    type: "heading";
    text: string;
    id?: string | undefined;
    level?: 2 | 3 | undefined;
}, {
    type: "heading";
    text: string;
    id?: string | undefined;
    level?: 2 | 3 | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"quote">;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "quote";
    text: string;
    id?: string | undefined;
}, {
    type: "quote";
    text: string;
    id?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"image">;
    url: z.ZodString;
    alt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "image";
    url: string;
    id?: string | undefined;
    alt?: string | undefined;
}, {
    type: "image";
    url: string;
    id?: string | undefined;
    alt?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"product-card">;
    product: z.ZodObject<{
        id: z.ZodString;
        code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "product-card";
    product: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    };
    id?: string | undefined;
}, {
    type: "product-card";
    product: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    };
    id?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"divider">;
}, "strip", z.ZodTypeAny, {
    type: "divider";
    id?: string | undefined;
}, {
    type: "divider";
    id?: string | undefined;
}>]>;
export declare const guiquanCommunityContentDocSchema: z.ZodObject<{
    version: z.ZodLiteral<2>;
    blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"paragraph">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "paragraph";
        id: string;
        text: string;
    }, {
        type: "paragraph";
        id: string;
        text: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"heading">;
        text: z.ZodString;
        level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    }, "strip", z.ZodTypeAny, {
        type: "heading";
        id: string;
        text: string;
        level: 2 | 3;
    }, {
        type: "heading";
        id: string;
        text: string;
        level?: 2 | 3 | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"quote">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "quote";
        id: string;
        text: string;
    }, {
        type: "quote";
        id: string;
        text: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"image">;
        url: z.ZodEffects<z.ZodString, string, string>;
        alt: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        id: string;
        url: string;
        alt: string;
    }, {
        type: "image";
        id: string;
        url: string;
        alt?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"product-card">;
        product: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "product-card";
        id: string;
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
    }, {
        type: "product-card";
        id: string;
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"divider">;
    }, "strip", z.ZodTypeAny, {
        type: "divider";
        id: string;
    }, {
        type: "divider";
        id: string;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    version: 2;
    blocks: ({
        type: "paragraph";
        id: string;
        text: string;
    } | {
        type: "heading";
        id: string;
        text: string;
        level: 2 | 3;
    } | {
        type: "quote";
        id: string;
        text: string;
    } | {
        type: "image";
        id: string;
        url: string;
        alt: string;
    } | {
        type: "product-card";
        id: string;
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
    } | {
        type: "divider";
        id: string;
    })[];
}, {
    version: 2;
    blocks: ({
        type: "paragraph";
        id: string;
        text: string;
    } | {
        type: "heading";
        id: string;
        text: string;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        id: string;
        text: string;
    } | {
        type: "image";
        id: string;
        url: string;
        alt?: string | undefined;
    } | {
        type: "product-card";
        id: string;
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
    } | {
        type: "divider";
        id: string;
    })[];
}>;
export declare const guiquanCommunityContentDocInputSchema: z.ZodObject<{
    version: z.ZodOptional<z.ZodLiteral<2>>;
    blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"paragraph">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"heading">;
        text: z.ZodString;
        level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    }, "strip", z.ZodTypeAny, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"quote">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"image">;
        url: z.ZodString;
        alt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"product-card">;
        product: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"divider">;
    }, "strip", z.ZodTypeAny, {
        type: "divider";
        id?: string | undefined;
    }, {
        type: "divider";
        id?: string | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    blocks: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[];
    version?: 2 | undefined;
}, {
    blocks: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[];
    version?: 2 | undefined;
}>;
declare const guiquanCommunityUploadedImageAssetSchema: z.ZodObject<{
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
export declare const guiquanCommunityCommentSchema: z.ZodObject<{
    id: z.ZodString;
    postId: z.ZodString;
    parentCommentId: z.ZodNullable<z.ZodString>;
    tenantId: z.ZodNullable<z.ZodString>;
    authorDisplayName: z.ZodString;
    body: z.ZodString;
    status: z.ZodEnum<["VISIBLE", "HIDDEN", "DELETED"]>;
    hiddenReason: z.ZodNullable<z.ZodString>;
    hiddenAt: z.ZodNullable<z.ZodString>;
    canDelete: z.ZodDefault<z.ZodBoolean>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "VISIBLE" | "HIDDEN" | "DELETED";
    id: string;
    postId: string;
    parentCommentId: string | null;
    tenantId: string | null;
    authorDisplayName: string;
    body: string;
    hiddenReason: string | null;
    hiddenAt: string | null;
    canDelete: boolean;
    createdAt: string;
    updatedAt: string;
}, {
    status: "VISIBLE" | "HIDDEN" | "DELETED";
    id: string;
    postId: string;
    parentCommentId: string | null;
    tenantId: string | null;
    authorDisplayName: string;
    body: string;
    hiddenReason: string | null;
    hiddenAt: string | null;
    createdAt: string;
    updatedAt: string;
    canDelete?: boolean | undefined;
}>;
export declare const guiquanCommunityReportSchema: z.ZodObject<{
    id: z.ZodString;
    targetType: z.ZodEnum<["POST", "COMMENT"]>;
    postId: z.ZodString;
    commentId: z.ZodNullable<z.ZodString>;
    reporterDisplayName: z.ZodString;
    reporterTenantId: z.ZodNullable<z.ZodString>;
    reporterTenantDisplayName: z.ZodNullable<z.ZodString>;
    reason: z.ZodEnum<["SPAM_AD", "ABUSE", "FALSE_INFO", "ILLEGAL_TRANSACTION", "PRIVACY", "OTHER"]>;
    note: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["OPEN", "RESOLVED", "DISMISSED"]>;
    operatorNote: z.ZodNullable<z.ZodString>;
    handledAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "OPEN" | "RESOLVED" | "DISMISSED";
    id: string;
    note: string | null;
    postId: string;
    createdAt: string;
    updatedAt: string;
    targetType: "POST" | "COMMENT";
    commentId: string | null;
    reporterDisplayName: string;
    reporterTenantId: string | null;
    reporterTenantDisplayName: string | null;
    reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
    operatorNote: string | null;
    handledAt: string | null;
}, {
    status: "OPEN" | "RESOLVED" | "DISMISSED";
    id: string;
    note: string | null;
    postId: string;
    createdAt: string;
    updatedAt: string;
    targetType: "POST" | "COMMENT";
    commentId: string | null;
    reporterDisplayName: string;
    reporterTenantId: string | null;
    reporterTenantDisplayName: string | null;
    reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
    operatorNote: string | null;
    handledAt: string | null;
}>;
export declare const guiquanCommunityPostSchema: z.ZodObject<{
    id: z.ZodString;
    sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
    tenantId: z.ZodNullable<z.ZodString>;
    tenantDisplayName: z.ZodNullable<z.ZodString>;
    sourceLabel: z.ZodString;
    tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
    title: z.ZodString;
    summary: z.ZodString;
    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
    content: z.ZodNullable<z.ZodString>;
    contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        version: z.ZodLiteral<2>;
        blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        version: 2;
        blocks: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[];
    }, {
        version: 2;
        blocks: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[];
    }>>>;
    contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"paragraph">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "paragraph";
        id: string;
        text: string;
    }, {
        type: "paragraph";
        id: string;
        text: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"heading">;
        text: z.ZodString;
        level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    }, "strip", z.ZodTypeAny, {
        type: "heading";
        id: string;
        text: string;
        level: 2 | 3;
    }, {
        type: "heading";
        id: string;
        text: string;
        level?: 2 | 3 | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"quote">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "quote";
        id: string;
        text: string;
    }, {
        type: "quote";
        id: string;
        text: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"image">;
        url: z.ZodEffects<z.ZodString, string, string>;
        alt: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        id: string;
        url: string;
        alt: string;
    }, {
        type: "image";
        id: string;
        url: string;
        alt?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"product-card">;
        product: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "product-card";
        id: string;
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
    }, {
        type: "product-card";
        id: string;
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"divider">;
    }, "strip", z.ZodTypeAny, {
        type: "divider";
        id: string;
    }, {
        type: "divider";
        id: string;
    }>]>, "many">>;
    authorName: z.ZodString;
    authorPublicShareToken: z.ZodNullable<z.ZodString>;
    authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    commentCount: z.ZodNumber;
    likeCount: z.ZodNumber;
    isLiked: z.ZodBoolean;
    reportCount: z.ZodNumber;
    unresolvedReportCount: z.ZodNumber;
    resolvedReportCount: z.ZodNumber;
    dismissedReportCount: z.ZodNumber;
    isPinned: z.ZodBoolean;
    isFeatured: z.ZodBoolean;
    canEdit: z.ZodDefault<z.ZodBoolean>;
    canDelete: z.ZodDefault<z.ZodBoolean>;
    status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
    reviewNote: z.ZodNullable<z.ZodString>;
    submittedAt: z.ZodNullable<z.ZodString>;
    reviewedAt: z.ZodNullable<z.ZodString>;
    publishedAt: z.ZodNullable<z.ZodString>;
    archivedAt: z.ZodNullable<z.ZodString>;
    createdByUserId: z.ZodString;
    reviewedByUserId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
    id: string;
    title: string;
    summary: string;
    tenantId: string | null;
    canDelete: boolean;
    createdAt: string;
    updatedAt: string;
    sourceType: "PLATFORM" | "TENANT";
    tenantDisplayName: string | null;
    sourceLabel: string;
    tag: "精选" | "经验" | "问答" | "官方";
    content: string | null;
    authorName: string;
    authorPublicShareToken: string | null;
    commentCount: number;
    likeCount: number;
    isLiked: boolean;
    reportCount: number;
    unresolvedReportCount: number;
    resolvedReportCount: number;
    dismissedReportCount: number;
    isPinned: boolean;
    isFeatured: boolean;
    canEdit: boolean;
    reviewNote: string | null;
    submittedAt: string | null;
    reviewedAt: string | null;
    publishedAt: string | null;
    archivedAt: string | null;
    createdByUserId: string;
    reviewedByUserId: string | null;
    coverImageUrl?: string | null | undefined;
    contentDoc?: {
        version: 2;
        blocks: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[];
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        id: string;
        text: string;
    } | {
        type: "heading";
        id: string;
        text: string;
        level: 2 | 3;
    } | {
        type: "quote";
        id: string;
        text: string;
    } | {
        type: "image";
        id: string;
        url: string;
        alt: string;
    } | {
        type: "product-card";
        id: string;
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
    } | {
        type: "divider";
        id: string;
    })[] | undefined;
    authorAvatarUrl?: string | null | undefined;
}, {
    status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
    id: string;
    title: string;
    summary: string;
    tenantId: string | null;
    createdAt: string;
    updatedAt: string;
    sourceType: "PLATFORM" | "TENANT";
    tenantDisplayName: string | null;
    sourceLabel: string;
    tag: "精选" | "经验" | "问答" | "官方";
    content: string | null;
    authorName: string;
    authorPublicShareToken: string | null;
    commentCount: number;
    likeCount: number;
    isLiked: boolean;
    reportCount: number;
    unresolvedReportCount: number;
    resolvedReportCount: number;
    dismissedReportCount: number;
    isPinned: boolean;
    isFeatured: boolean;
    reviewNote: string | null;
    submittedAt: string | null;
    reviewedAt: string | null;
    publishedAt: string | null;
    archivedAt: string | null;
    createdByUserId: string;
    reviewedByUserId: string | null;
    coverImageUrl?: string | null | undefined;
    canDelete?: boolean | undefined;
    contentDoc?: {
        version: 2;
        blocks: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[];
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        id: string;
        text: string;
    } | {
        type: "heading";
        id: string;
        text: string;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        id: string;
        text: string;
    } | {
        type: "image";
        id: string;
        url: string;
        alt?: string | undefined;
    } | {
        type: "product-card";
        id: string;
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
    } | {
        type: "divider";
        id: string;
    })[] | undefined;
    authorAvatarUrl?: string | null | undefined;
    canEdit?: boolean | undefined;
}>;
export declare const guiquanCommunityFeedItemSchema: z.ZodObject<{
    id: z.ZodString;
    sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
    tenantId: z.ZodNullable<z.ZodString>;
    tenantDisplayName: z.ZodNullable<z.ZodString>;
    sourceLabel: z.ZodString;
    tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
    title: z.ZodString;
    summary: z.ZodString;
    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
    authorName: z.ZodString;
    authorPublicShareToken: z.ZodNullable<z.ZodString>;
    authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    commentCount: z.ZodNumber;
    likeCount: z.ZodNumber;
    isLiked: z.ZodBoolean;
    updatedAt: z.ZodString;
    isPinned: z.ZodBoolean;
    isFeatured: z.ZodBoolean;
    mentionedPets: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }>, "many">>;
    mentionedPetCount: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    summary: string;
    tenantId: string | null;
    updatedAt: string;
    sourceType: "PLATFORM" | "TENANT";
    tenantDisplayName: string | null;
    sourceLabel: string;
    tag: "精选" | "经验" | "问答" | "官方";
    authorName: string;
    authorPublicShareToken: string | null;
    commentCount: number;
    likeCount: number;
    isLiked: boolean;
    isPinned: boolean;
    isFeatured: boolean;
    coverImageUrl?: string | null | undefined;
    authorAvatarUrl?: string | null | undefined;
    mentionedPets?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }[] | undefined;
    mentionedPetCount?: number | undefined;
}, {
    id: string;
    title: string;
    summary: string;
    tenantId: string | null;
    updatedAt: string;
    sourceType: "PLATFORM" | "TENANT";
    tenantDisplayName: string | null;
    sourceLabel: string;
    tag: "精选" | "经验" | "问答" | "官方";
    authorName: string;
    authorPublicShareToken: string | null;
    commentCount: number;
    likeCount: number;
    isLiked: boolean;
    isPinned: boolean;
    isFeatured: boolean;
    coverImageUrl?: string | null | undefined;
    authorAvatarUrl?: string | null | undefined;
    mentionedPets?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }[] | undefined;
    mentionedPetCount?: number | undefined;
}>;
export declare const guiquanCommunityFeedResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        updatedAt: z.ZodString;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        mentionedPets: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }>, "many">>;
        mentionedPetCount: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        isPinned: boolean;
        isFeatured: boolean;
        coverImageUrl?: string | null | undefined;
        authorAvatarUrl?: string | null | undefined;
        mentionedPets?: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }[] | undefined;
        mentionedPetCount?: number | undefined;
    }, {
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        isPinned: boolean;
        isFeatured: boolean;
        coverImageUrl?: string | null | undefined;
        authorAvatarUrl?: string | null | undefined;
        mentionedPets?: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }[] | undefined;
        mentionedPetCount?: number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        isPinned: boolean;
        isFeatured: boolean;
        coverImageUrl?: string | null | undefined;
        authorAvatarUrl?: string | null | undefined;
        mentionedPets?: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }[] | undefined;
        mentionedPetCount?: number | undefined;
    }[];
}, {
    items: {
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        isPinned: boolean;
        isFeatured: boolean;
        coverImageUrl?: string | null | undefined;
        authorAvatarUrl?: string | null | undefined;
        mentionedPets?: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }[] | undefined;
        mentionedPetCount?: number | undefined;
    }[];
}>;
export declare const listTenantGuiquanCommunityPostsResponseSchema: z.ZodObject<{
    posts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        content: z.ZodNullable<z.ZodString>;
        contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<2>;
            blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"paragraph">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "paragraph";
                id: string;
                text: string;
            }, {
                type: "paragraph";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"heading">;
                text: z.ZodString;
                level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            }, "strip", z.ZodTypeAny, {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            }, {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"quote">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "quote";
                id: string;
                text: string;
            }, {
                type: "quote";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"image">;
                url: z.ZodEffects<z.ZodString, string, string>;
                alt: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "image";
                id: string;
                url: string;
                alt: string;
            }, {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"product-card">;
                product: z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"divider">;
            }, "strip", z.ZodTypeAny, {
                type: "divider";
                id: string;
            }, {
                type: "divider";
                id: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }>>>;
        contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        reportCount: z.ZodNumber;
        unresolvedReportCount: z.ZodNumber;
        resolvedReportCount: z.ZodNumber;
        dismissedReportCount: z.ZodNumber;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        canEdit: z.ZodDefault<z.ZodBoolean>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        createdByUserId: z.ZodString;
        reviewedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    posts: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }[];
}, {
    posts: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }[];
}>;
export declare const guiquanCommunityInteractionNotificationTypeSchema: z.ZodEnum<["COMMENT", "REPLY"]>;
export declare const guiquanCommunityInteractionNotificationSchema: z.ZodObject<{
    id: z.ZodString;
    type: z.ZodEnum<["COMMENT", "REPLY"]>;
    postId: z.ZodString;
    postTitle: z.ZodString;
    postSummary: z.ZodNullable<z.ZodString>;
    actorDisplayName: z.ZodString;
    actorAvatarUrl: z.ZodNullable<z.ZodString>;
    body: z.ZodString;
    parentCommentBody: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "COMMENT" | "REPLY";
    id: string;
    postId: string;
    body: string;
    createdAt: string;
    postTitle: string;
    postSummary: string | null;
    actorDisplayName: string;
    actorAvatarUrl: string | null;
    parentCommentBody: string | null;
}, {
    type: "COMMENT" | "REPLY";
    id: string;
    postId: string;
    body: string;
    createdAt: string;
    postTitle: string;
    postSummary: string | null;
    actorDisplayName: string;
    actorAvatarUrl: string | null;
    parentCommentBody: string | null;
}>;
export declare const guiquanCommunityInteractionNotificationsResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["COMMENT", "REPLY"]>;
        postId: z.ZodString;
        postTitle: z.ZodString;
        postSummary: z.ZodNullable<z.ZodString>;
        actorDisplayName: z.ZodString;
        actorAvatarUrl: z.ZodNullable<z.ZodString>;
        body: z.ZodString;
        parentCommentBody: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "COMMENT" | "REPLY";
        id: string;
        postId: string;
        body: string;
        createdAt: string;
        postTitle: string;
        postSummary: string | null;
        actorDisplayName: string;
        actorAvatarUrl: string | null;
        parentCommentBody: string | null;
    }, {
        type: "COMMENT" | "REPLY";
        id: string;
        postId: string;
        body: string;
        createdAt: string;
        postTitle: string;
        postSummary: string | null;
        actorDisplayName: string;
        actorAvatarUrl: string | null;
        parentCommentBody: string | null;
    }>, "many">;
    capabilities: z.ZodObject<{
        comments: z.ZodLiteral<"derived-from-comments">;
        replies: z.ZodLiteral<"derived-from-comments">;
        likes: z.ZodLiteral<"unsupported">;
        unreadState: z.ZodLiteral<"client-local-last-opened-at">;
    }, "strip", z.ZodTypeAny, {
        comments: "derived-from-comments";
        replies: "derived-from-comments";
        likes: "unsupported";
        unreadState: "client-local-last-opened-at";
    }, {
        comments: "derived-from-comments";
        replies: "derived-from-comments";
        likes: "unsupported";
        unreadState: "client-local-last-opened-at";
    }>;
}, "strip", z.ZodTypeAny, {
    items: {
        type: "COMMENT" | "REPLY";
        id: string;
        postId: string;
        body: string;
        createdAt: string;
        postTitle: string;
        postSummary: string | null;
        actorDisplayName: string;
        actorAvatarUrl: string | null;
        parentCommentBody: string | null;
    }[];
    capabilities: {
        comments: "derived-from-comments";
        replies: "derived-from-comments";
        likes: "unsupported";
        unreadState: "client-local-last-opened-at";
    };
}, {
    items: {
        type: "COMMENT" | "REPLY";
        id: string;
        postId: string;
        body: string;
        createdAt: string;
        postTitle: string;
        postSummary: string | null;
        actorDisplayName: string;
        actorAvatarUrl: string | null;
        parentCommentBody: string | null;
    }[];
    capabilities: {
        comments: "derived-from-comments";
        replies: "derived-from-comments";
        likes: "unsupported";
        unreadState: "client-local-last-opened-at";
    };
}>;
export declare const listAdminGuiquanCommunityPostsQuerySchema: z.ZodObject<{
    tenantId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>>;
    sourceType: z.ZodOptional<z.ZodEnum<["PLATFORM", "TENANT"]>>;
    tag: z.ZodOptional<z.ZodEnum<["精选", "经验", "问答", "官方"]>>;
    reportStatus: z.ZodOptional<z.ZodEnum<["OPEN", "RESOLVED", "DISMISSED"]>>;
    keyword: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status?: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | undefined;
    tenantId?: string | undefined;
    sourceType?: "PLATFORM" | "TENANT" | undefined;
    tag?: "精选" | "经验" | "问答" | "官方" | undefined;
    reportStatus?: "OPEN" | "RESOLVED" | "DISMISSED" | undefined;
    keyword?: string | undefined;
}, {
    status?: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED" | undefined;
    tenantId?: string | undefined;
    sourceType?: "PLATFORM" | "TENANT" | undefined;
    tag?: "精选" | "经验" | "问答" | "官方" | undefined;
    reportStatus?: "OPEN" | "RESOLVED" | "DISMISSED" | undefined;
    keyword?: string | undefined;
}>;
export declare const listAdminGuiquanCommunityPostsResponseSchema: z.ZodObject<{
    posts: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        content: z.ZodNullable<z.ZodString>;
        contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<2>;
            blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"paragraph">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "paragraph";
                id: string;
                text: string;
            }, {
                type: "paragraph";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"heading">;
                text: z.ZodString;
                level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            }, "strip", z.ZodTypeAny, {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            }, {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"quote">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "quote";
                id: string;
                text: string;
            }, {
                type: "quote";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"image">;
                url: z.ZodEffects<z.ZodString, string, string>;
                alt: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "image";
                id: string;
                url: string;
                alt: string;
            }, {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"product-card">;
                product: z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"divider">;
            }, "strip", z.ZodTypeAny, {
                type: "divider";
                id: string;
            }, {
                type: "divider";
                id: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }>>>;
        contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        reportCount: z.ZodNumber;
        unresolvedReportCount: z.ZodNumber;
        resolvedReportCount: z.ZodNumber;
        dismissedReportCount: z.ZodNumber;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        canEdit: z.ZodDefault<z.ZodBoolean>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        createdByUserId: z.ZodString;
        reviewedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    posts: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }[];
}, {
    posts: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }[];
}>;
export declare const getGuiquanCommunityPostResponseSchema: z.ZodObject<{
    post: z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        content: z.ZodNullable<z.ZodString>;
        contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<2>;
            blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"paragraph">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "paragraph";
                id: string;
                text: string;
            }, {
                type: "paragraph";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"heading">;
                text: z.ZodString;
                level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            }, "strip", z.ZodTypeAny, {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            }, {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"quote">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "quote";
                id: string;
                text: string;
            }, {
                type: "quote";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"image">;
                url: z.ZodEffects<z.ZodString, string, string>;
                alt: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "image";
                id: string;
                url: string;
                alt: string;
            }, {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"product-card">;
                product: z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"divider">;
            }, "strip", z.ZodTypeAny, {
                type: "divider";
                id: string;
            }, {
                type: "divider";
                id: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }>>>;
        contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        reportCount: z.ZodNumber;
        unresolvedReportCount: z.ZodNumber;
        resolvedReportCount: z.ZodNumber;
        dismissedReportCount: z.ZodNumber;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        canEdit: z.ZodDefault<z.ZodBoolean>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        createdByUserId: z.ZodString;
        reviewedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }>;
    comments: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        postId: z.ZodString;
        parentCommentId: z.ZodNullable<z.ZodString>;
        tenantId: z.ZodNullable<z.ZodString>;
        authorDisplayName: z.ZodString;
        body: z.ZodString;
        status: z.ZodEnum<["VISIBLE", "HIDDEN", "DELETED"]>;
        hiddenReason: z.ZodNullable<z.ZodString>;
        hiddenAt: z.ZodNullable<z.ZodString>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    }, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    comments: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    }[];
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    };
}, {
    comments: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    }[];
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    };
}>;
export declare const getAdminGuiquanCommunityPostResponseSchema: z.ZodObject<{
    post: z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        content: z.ZodNullable<z.ZodString>;
        contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<2>;
            blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"paragraph">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "paragraph";
                id: string;
                text: string;
            }, {
                type: "paragraph";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"heading">;
                text: z.ZodString;
                level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            }, "strip", z.ZodTypeAny, {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            }, {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"quote">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "quote";
                id: string;
                text: string;
            }, {
                type: "quote";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"image">;
                url: z.ZodEffects<z.ZodString, string, string>;
                alt: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "image";
                id: string;
                url: string;
                alt: string;
            }, {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"product-card">;
                product: z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"divider">;
            }, "strip", z.ZodTypeAny, {
                type: "divider";
                id: string;
            }, {
                type: "divider";
                id: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }>>>;
        contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        reportCount: z.ZodNumber;
        unresolvedReportCount: z.ZodNumber;
        resolvedReportCount: z.ZodNumber;
        dismissedReportCount: z.ZodNumber;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        canEdit: z.ZodDefault<z.ZodBoolean>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        createdByUserId: z.ZodString;
        reviewedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }>;
    comments: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        postId: z.ZodString;
        parentCommentId: z.ZodNullable<z.ZodString>;
        tenantId: z.ZodNullable<z.ZodString>;
        authorDisplayName: z.ZodString;
        body: z.ZodString;
        status: z.ZodEnum<["VISIBLE", "HIDDEN", "DELETED"]>;
        hiddenReason: z.ZodNullable<z.ZodString>;
        hiddenAt: z.ZodNullable<z.ZodString>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    }, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    }>, "many">;
    reports: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        targetType: z.ZodEnum<["POST", "COMMENT"]>;
        postId: z.ZodString;
        commentId: z.ZodNullable<z.ZodString>;
        reporterDisplayName: z.ZodString;
        reporterTenantId: z.ZodNullable<z.ZodString>;
        reporterTenantDisplayName: z.ZodNullable<z.ZodString>;
        reason: z.ZodEnum<["SPAM_AD", "ABUSE", "FALSE_INFO", "ILLEGAL_TRANSACTION", "PRIVACY", "OTHER"]>;
        note: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["OPEN", "RESOLVED", "DISMISSED"]>;
        operatorNote: z.ZodNullable<z.ZodString>;
        handledAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    }, {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    comments: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    }[];
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    };
    reports: {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    }[];
}, {
    comments: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    }[];
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    };
    reports: {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    }[];
}>;
export declare const createAdminGuiquanCommunityPostRequestSchema: z.ZodObject<{
    sourceType: z.ZodDefault<z.ZodEnum<["PLATFORM", "TENANT"]>>;
    tenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
    title: z.ZodString;
    summary: z.ZodString;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        version: z.ZodOptional<z.ZodLiteral<2>>;
        blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            text: string;
            id?: string | undefined;
        }, {
            type: "paragraph";
            text: string;
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        }, {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            text: string;
            id?: string | undefined;
        }, {
            type: "quote";
            text: string;
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodString;
            alt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        }, {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        }, {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id?: string | undefined;
        }, {
            type: "divider";
            id?: string | undefined;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    }, {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    }>>>;
    contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"paragraph">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"heading">;
        text: z.ZodString;
        level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    }, "strip", z.ZodTypeAny, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"quote">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"image">;
        url: z.ZodString;
        alt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"product-card">;
        product: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"divider">;
    }, "strip", z.ZodTypeAny, {
        type: "divider";
        id?: string | undefined;
    }, {
        type: "divider";
        id?: string | undefined;
    }>]>, "many">>;
    authorName: z.ZodString;
    isPinned: z.ZodOptional<z.ZodBoolean>;
    isFeatured: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    title: string;
    summary: string;
    sourceType: "PLATFORM" | "TENANT";
    tag: "精选" | "经验" | "问答" | "官方";
    authorName: string;
    tenantId?: string | null | undefined;
    content?: string | null | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    isPinned?: boolean | undefined;
    isFeatured?: boolean | undefined;
}, {
    title: string;
    summary: string;
    tag: "精选" | "经验" | "问答" | "官方";
    authorName: string;
    tenantId?: string | null | undefined;
    sourceType?: "PLATFORM" | "TENANT" | undefined;
    content?: string | null | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    isPinned?: boolean | undefined;
    isFeatured?: boolean | undefined;
}>;
export declare const updateAdminGuiquanCommunityPostRequestSchema: z.ZodObject<{
    sourceType: z.ZodOptional<z.ZodDefault<z.ZodEnum<["PLATFORM", "TENANT"]>>>;
    tenantId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    tag: z.ZodOptional<z.ZodEnum<["精选", "经验", "问答", "官方"]>>;
    title: z.ZodOptional<z.ZodString>;
    summary: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    contentDoc: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodObject<{
        version: z.ZodOptional<z.ZodLiteral<2>>;
        blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            text: string;
            id?: string | undefined;
        }, {
            type: "paragraph";
            text: string;
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        }, {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            text: string;
            id?: string | undefined;
        }, {
            type: "quote";
            text: string;
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodString;
            alt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        }, {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        }, {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id?: string | undefined;
        }, {
            type: "divider";
            id?: string | undefined;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    }, {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    }>>>>;
    contentBlocks: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"paragraph">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"heading">;
        text: z.ZodString;
        level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    }, "strip", z.ZodTypeAny, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"quote">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"image">;
        url: z.ZodString;
        alt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"product-card">;
        product: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"divider">;
    }, "strip", z.ZodTypeAny, {
        type: "divider";
        id?: string | undefined;
    }, {
        type: "divider";
        id?: string | undefined;
    }>]>, "many">>>;
    authorName: z.ZodOptional<z.ZodString>;
    isPinned: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    isFeatured: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    summary?: string | undefined;
    tenantId?: string | null | undefined;
    sourceType?: "PLATFORM" | "TENANT" | undefined;
    tag?: "精选" | "经验" | "问答" | "官方" | undefined;
    content?: string | null | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    authorName?: string | undefined;
    isPinned?: boolean | undefined;
    isFeatured?: boolean | undefined;
}, {
    title?: string | undefined;
    summary?: string | undefined;
    tenantId?: string | null | undefined;
    sourceType?: "PLATFORM" | "TENANT" | undefined;
    tag?: "精选" | "经验" | "问答" | "官方" | undefined;
    content?: string | null | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    authorName?: string | undefined;
    isPinned?: boolean | undefined;
    isFeatured?: boolean | undefined;
}>;
export declare const createTenantGuiquanCommunityPostRequestSchema: z.ZodEffects<z.ZodObject<{
    body: z.ZodOptional<z.ZodString>;
    imageUrls: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    relatedProduct: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }>>>;
    contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        version: z.ZodOptional<z.ZodLiteral<2>>;
        blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            text: string;
            id?: string | undefined;
        }, {
            type: "paragraph";
            text: string;
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        }, {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            text: string;
            id?: string | undefined;
        }, {
            type: "quote";
            text: string;
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodString;
            alt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        }, {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        }, {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id?: string | undefined;
        }, {
            type: "divider";
            id?: string | undefined;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    }, {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    }>>>;
    contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"paragraph">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"heading">;
        text: z.ZodString;
        level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    }, "strip", z.ZodTypeAny, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"quote">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"image">;
        url: z.ZodString;
        alt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"product-card">;
        product: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"divider">;
    }, "strip", z.ZodTypeAny, {
        type: "divider";
        id?: string | undefined;
    }, {
        type: "divider";
        id?: string | undefined;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    body?: string | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    imageUrls?: string[] | undefined;
    relatedProduct?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    } | null | undefined;
}, {
    body?: string | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    imageUrls?: string[] | undefined;
    relatedProduct?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    } | null | undefined;
}>, {
    body?: string | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    imageUrls?: string[] | undefined;
    relatedProduct?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    } | null | undefined;
}, {
    body?: string | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    imageUrls?: string[] | undefined;
    relatedProduct?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    } | null | undefined;
}>;
export declare const updateTenantGuiquanCommunityPostRequestSchema: z.ZodEffects<z.ZodObject<{
    body: z.ZodOptional<z.ZodString>;
    imageUrls: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    relatedProduct: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }, {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    }>>>;
    contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        version: z.ZodOptional<z.ZodLiteral<2>>;
        blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            text: string;
            id?: string | undefined;
        }, {
            type: "paragraph";
            text: string;
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        }, {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            text: string;
            id?: string | undefined;
        }, {
            type: "quote";
            text: string;
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodString;
            alt: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        }, {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        }, {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id?: string | undefined;
        }, {
            type: "divider";
            id?: string | undefined;
        }>]>, "many">;
    }, "strip", z.ZodTypeAny, {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    }, {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    }>>>;
    contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"paragraph">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }, {
        type: "paragraph";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"heading">;
        text: z.ZodString;
        level: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
    }, "strip", z.ZodTypeAny, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }, {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"quote">;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }, {
        type: "quote";
        text: string;
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"image">;
        url: z.ZodString;
        alt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }, {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"product-card">;
        product: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
            publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
            publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        }, "strip", z.ZodTypeAny, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }, {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }, {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"divider">;
    }, "strip", z.ZodTypeAny, {
        type: "divider";
        id?: string | undefined;
    }, {
        type: "divider";
        id?: string | undefined;
    }>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    body?: string | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    imageUrls?: string[] | undefined;
    relatedProduct?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    } | null | undefined;
}, {
    body?: string | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    imageUrls?: string[] | undefined;
    relatedProduct?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    } | null | undefined;
}>, {
    body?: string | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    imageUrls?: string[] | undefined;
    relatedProduct?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    } | null | undefined;
}, {
    body?: string | undefined;
    contentDoc?: {
        blocks: ({
            type: "paragraph";
            text: string;
            id?: string | undefined;
        } | {
            type: "heading";
            text: string;
            id?: string | undefined;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            text: string;
            id?: string | undefined;
        } | {
            type: "image";
            url: string;
            id?: string | undefined;
            alt?: string | undefined;
        } | {
            type: "product-card";
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
            id?: string | undefined;
        } | {
            type: "divider";
            id?: string | undefined;
        })[];
        version?: 2 | undefined;
    } | null | undefined;
    contentBlocks?: ({
        type: "paragraph";
        text: string;
        id?: string | undefined;
    } | {
        type: "heading";
        text: string;
        id?: string | undefined;
        level?: 2 | 3 | undefined;
    } | {
        type: "quote";
        text: string;
        id?: string | undefined;
    } | {
        type: "image";
        url: string;
        id?: string | undefined;
        alt?: string | undefined;
    } | {
        type: "product-card";
        product: {
            id: string;
            code?: string | null | undefined;
            coverImageUrl?: string | null | undefined;
            alias?: string | null | undefined;
            name?: string | null | undefined;
            sex?: string | null | undefined;
            publicShareToken?: string | null | undefined;
            publicCoverImageUrl?: string | null | undefined;
            publicProductTenantId?: string | null | undefined;
            publicSeriesName?: string | null | undefined;
            publicOffspringUnitPrice?: number | null | undefined;
            publicInStock?: boolean | null | undefined;
        };
        id?: string | undefined;
    } | {
        type: "divider";
        id?: string | undefined;
    })[] | undefined;
    imageUrls?: string[] | undefined;
    relatedProduct?: {
        id: string;
        code?: string | null | undefined;
        coverImageUrl?: string | null | undefined;
        alias?: string | null | undefined;
        name?: string | null | undefined;
        sex?: string | null | undefined;
        publicShareToken?: string | null | undefined;
        publicCoverImageUrl?: string | null | undefined;
        publicProductTenantId?: string | null | undefined;
        publicSeriesName?: string | null | undefined;
        publicOffspringUnitPrice?: number | null | undefined;
        publicInStock?: boolean | null | undefined;
    } | null | undefined;
}>;
export declare const rejectAdminGuiquanCommunityPostRequestSchema: z.ZodObject<{
    reviewNote: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    reviewNote?: string | null | undefined;
}, {
    reviewNote?: string | null | undefined;
}>;
export declare const createGuiquanCommunityCommentRequestSchema: z.ZodObject<{
    parentCommentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    body: z.ZodString;
}, "strip", z.ZodTypeAny, {
    body: string;
    parentCommentId?: string | null | undefined;
}, {
    body: string;
    parentCommentId?: string | null | undefined;
}>;
export declare const createGuiquanCommunityCommentResponseSchema: z.ZodObject<{
    comment: z.ZodObject<{
        id: z.ZodString;
        postId: z.ZodString;
        parentCommentId: z.ZodNullable<z.ZodString>;
        tenantId: z.ZodNullable<z.ZodString>;
        authorDisplayName: z.ZodString;
        body: z.ZodString;
        status: z.ZodEnum<["VISIBLE", "HIDDEN", "DELETED"]>;
        hiddenReason: z.ZodNullable<z.ZodString>;
        hiddenAt: z.ZodNullable<z.ZodString>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    }, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    comment: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    };
}, {
    comment: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    };
}>;
export declare const toggleGuiquanCommunityPostLikeResponseSchema: z.ZodObject<{
    postId: z.ZodString;
    likeCount: z.ZodNumber;
    isLiked: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    postId: string;
    likeCount: number;
    isLiked: boolean;
}, {
    postId: string;
    likeCount: number;
    isLiked: boolean;
}>;
export declare const deleteGuiquanCommunityCommentResponseSchema: z.ZodObject<{
    comment: z.ZodObject<{
        id: z.ZodString;
        postId: z.ZodString;
        parentCommentId: z.ZodNullable<z.ZodString>;
        tenantId: z.ZodNullable<z.ZodString>;
        authorDisplayName: z.ZodString;
        body: z.ZodString;
        status: z.ZodEnum<["VISIBLE", "HIDDEN", "DELETED"]>;
        hiddenReason: z.ZodNullable<z.ZodString>;
        hiddenAt: z.ZodNullable<z.ZodString>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    }, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    comment: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    };
}, {
    comment: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    };
}>;
export declare const createGuiquanCommunityReportRequestSchema: z.ZodObject<{
    targetType: z.ZodEnum<["POST", "COMMENT"]>;
    commentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reason: z.ZodEnum<["SPAM_AD", "ABUSE", "FALSE_INFO", "ILLEGAL_TRANSACTION", "PRIVACY", "OTHER"]>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    targetType: "POST" | "COMMENT";
    reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
    note?: string | null | undefined;
    commentId?: string | null | undefined;
}, {
    targetType: "POST" | "COMMENT";
    reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
    note?: string | null | undefined;
    commentId?: string | null | undefined;
}>;
export declare const createGuiquanCommunityReportResponseSchema: z.ZodObject<{
    report: z.ZodObject<{
        id: z.ZodString;
        targetType: z.ZodEnum<["POST", "COMMENT"]>;
        postId: z.ZodString;
        commentId: z.ZodNullable<z.ZodString>;
        reporterDisplayName: z.ZodString;
        reporterTenantId: z.ZodNullable<z.ZodString>;
        reporterTenantDisplayName: z.ZodNullable<z.ZodString>;
        reason: z.ZodEnum<["SPAM_AD", "ABUSE", "FALSE_INFO", "ILLEGAL_TRANSACTION", "PRIVACY", "OTHER"]>;
        note: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["OPEN", "RESOLVED", "DISMISSED"]>;
        operatorNote: z.ZodNullable<z.ZodString>;
        handledAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    }, {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    report: {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    };
}, {
    report: {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    };
}>;
export declare const updateAdminGuiquanCommunityCommentStatusRequestSchema: z.ZodObject<{
    status: z.ZodEnum<["VISIBLE", "HIDDEN", "DELETED"]>;
    hiddenReason: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    status: "VISIBLE" | "HIDDEN" | "DELETED";
    hiddenReason?: string | null | undefined;
}, {
    status: "VISIBLE" | "HIDDEN" | "DELETED";
    hiddenReason?: string | null | undefined;
}>;
export declare const updateAdminGuiquanCommunityCommentStatusResponseSchema: z.ZodObject<{
    comment: z.ZodObject<{
        id: z.ZodString;
        postId: z.ZodString;
        parentCommentId: z.ZodNullable<z.ZodString>;
        tenantId: z.ZodNullable<z.ZodString>;
        authorDisplayName: z.ZodString;
        body: z.ZodString;
        status: z.ZodEnum<["VISIBLE", "HIDDEN", "DELETED"]>;
        hiddenReason: z.ZodNullable<z.ZodString>;
        hiddenAt: z.ZodNullable<z.ZodString>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    }, {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    comment: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
    };
}, {
    comment: {
        status: "VISIBLE" | "HIDDEN" | "DELETED";
        id: string;
        postId: string;
        parentCommentId: string | null;
        tenantId: string | null;
        authorDisplayName: string;
        body: string;
        hiddenReason: string | null;
        hiddenAt: string | null;
        createdAt: string;
        updatedAt: string;
        canDelete?: boolean | undefined;
    };
}>;
export declare const updateAdminGuiquanCommunityReportStatusRequestSchema: z.ZodObject<{
    status: z.ZodEnum<["RESOLVED", "DISMISSED"]>;
    operatorNote: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    status: "RESOLVED" | "DISMISSED";
    operatorNote?: string | null | undefined;
}, {
    status: "RESOLVED" | "DISMISSED";
    operatorNote?: string | null | undefined;
}>;
export declare const updateAdminGuiquanCommunityReportStatusResponseSchema: z.ZodObject<{
    report: z.ZodObject<{
        id: z.ZodString;
        targetType: z.ZodEnum<["POST", "COMMENT"]>;
        postId: z.ZodString;
        commentId: z.ZodNullable<z.ZodString>;
        reporterDisplayName: z.ZodString;
        reporterTenantId: z.ZodNullable<z.ZodString>;
        reporterTenantDisplayName: z.ZodNullable<z.ZodString>;
        reason: z.ZodEnum<["SPAM_AD", "ABUSE", "FALSE_INFO", "ILLEGAL_TRANSACTION", "PRIVACY", "OTHER"]>;
        note: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["OPEN", "RESOLVED", "DISMISSED"]>;
        operatorNote: z.ZodNullable<z.ZodString>;
        handledAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    }, {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    report: {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    };
}, {
    report: {
        status: "OPEN" | "RESOLVED" | "DISMISSED";
        id: string;
        note: string | null;
        postId: string;
        createdAt: string;
        updatedAt: string;
        targetType: "POST" | "COMMENT";
        commentId: string | null;
        reporterDisplayName: string;
        reporterTenantId: string | null;
        reporterTenantDisplayName: string | null;
        reason: "SPAM_AD" | "ABUSE" | "FALSE_INFO" | "ILLEGAL_TRANSACTION" | "PRIVACY" | "OTHER";
        operatorNote: string | null;
        handledAt: string | null;
    };
}>;
export declare const guiquanCommunityPostResponseSchema: z.ZodObject<{
    post: z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        content: z.ZodNullable<z.ZodString>;
        contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<2>;
            blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"paragraph">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "paragraph";
                id: string;
                text: string;
            }, {
                type: "paragraph";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"heading">;
                text: z.ZodString;
                level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            }, "strip", z.ZodTypeAny, {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            }, {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"quote">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "quote";
                id: string;
                text: string;
            }, {
                type: "quote";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"image">;
                url: z.ZodEffects<z.ZodString, string, string>;
                alt: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "image";
                id: string;
                url: string;
                alt: string;
            }, {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"product-card">;
                product: z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"divider">;
            }, "strip", z.ZodTypeAny, {
                type: "divider";
                id: string;
            }, {
                type: "divider";
                id: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }>>>;
        contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        reportCount: z.ZodNumber;
        unresolvedReportCount: z.ZodNumber;
        resolvedReportCount: z.ZodNumber;
        dismissedReportCount: z.ZodNumber;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        canEdit: z.ZodDefault<z.ZodBoolean>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        createdByUserId: z.ZodString;
        reviewedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    };
}, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    };
}>;
export declare const createTenantGuiquanCommunityPostResponseSchema: z.ZodObject<{
    post: z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        content: z.ZodNullable<z.ZodString>;
        contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<2>;
            blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"paragraph">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "paragraph";
                id: string;
                text: string;
            }, {
                type: "paragraph";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"heading">;
                text: z.ZodString;
                level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            }, "strip", z.ZodTypeAny, {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            }, {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"quote">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "quote";
                id: string;
                text: string;
            }, {
                type: "quote";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"image">;
                url: z.ZodEffects<z.ZodString, string, string>;
                alt: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "image";
                id: string;
                url: string;
                alt: string;
            }, {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"product-card">;
                product: z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"divider">;
            }, "strip", z.ZodTypeAny, {
                type: "divider";
                id: string;
            }, {
                type: "divider";
                id: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }>>>;
        contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        reportCount: z.ZodNumber;
        unresolvedReportCount: z.ZodNumber;
        resolvedReportCount: z.ZodNumber;
        dismissedReportCount: z.ZodNumber;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        canEdit: z.ZodDefault<z.ZodBoolean>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        createdByUserId: z.ZodString;
        reviewedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    };
}, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    };
}>;
export declare const updateTenantGuiquanCommunityPostResponseSchema: z.ZodObject<{
    post: z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        content: z.ZodNullable<z.ZodString>;
        contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<2>;
            blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"paragraph">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "paragraph";
                id: string;
                text: string;
            }, {
                type: "paragraph";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"heading">;
                text: z.ZodString;
                level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            }, "strip", z.ZodTypeAny, {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            }, {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"quote">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "quote";
                id: string;
                text: string;
            }, {
                type: "quote";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"image">;
                url: z.ZodEffects<z.ZodString, string, string>;
                alt: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "image";
                id: string;
                url: string;
                alt: string;
            }, {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"product-card">;
                product: z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"divider">;
            }, "strip", z.ZodTypeAny, {
                type: "divider";
                id: string;
            }, {
                type: "divider";
                id: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }>>>;
        contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        reportCount: z.ZodNumber;
        unresolvedReportCount: z.ZodNumber;
        resolvedReportCount: z.ZodNumber;
        dismissedReportCount: z.ZodNumber;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        canEdit: z.ZodDefault<z.ZodBoolean>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        createdByUserId: z.ZodString;
        reviewedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    };
}, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    };
}>;
export declare const deleteTenantGuiquanCommunityPostResponseSchema: z.ZodObject<{
    post: z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        content: z.ZodNullable<z.ZodString>;
        contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<2>;
            blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"paragraph">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "paragraph";
                id: string;
                text: string;
            }, {
                type: "paragraph";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"heading">;
                text: z.ZodString;
                level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            }, "strip", z.ZodTypeAny, {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            }, {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"quote">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "quote";
                id: string;
                text: string;
            }, {
                type: "quote";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"image">;
                url: z.ZodEffects<z.ZodString, string, string>;
                alt: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "image";
                id: string;
                url: string;
                alt: string;
            }, {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"product-card">;
                product: z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"divider">;
            }, "strip", z.ZodTypeAny, {
                type: "divider";
                id: string;
            }, {
                type: "divider";
                id: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }>>>;
        contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        reportCount: z.ZodNumber;
        unresolvedReportCount: z.ZodNumber;
        resolvedReportCount: z.ZodNumber;
        dismissedReportCount: z.ZodNumber;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        canEdit: z.ZodDefault<z.ZodBoolean>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        createdByUserId: z.ZodString;
        reviewedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    };
}, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    };
}>;
export declare const adminGuiquanCommunityPostResponseSchema: z.ZodObject<{
    post: z.ZodObject<{
        id: z.ZodString;
        sourceType: z.ZodEnum<["PLATFORM", "TENANT"]>;
        tenantId: z.ZodNullable<z.ZodString>;
        tenantDisplayName: z.ZodNullable<z.ZodString>;
        sourceLabel: z.ZodString;
        tag: z.ZodEnum<["精选", "经验", "问答", "官方"]>;
        title: z.ZodString;
        summary: z.ZodString;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
        content: z.ZodNullable<z.ZodString>;
        contentDoc: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            version: z.ZodLiteral<2>;
            blocks: z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"paragraph">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "paragraph";
                id: string;
                text: string;
            }, {
                type: "paragraph";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"heading">;
                text: z.ZodString;
                level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
            }, "strip", z.ZodTypeAny, {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            }, {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"quote">;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "quote";
                id: string;
                text: string;
            }, {
                type: "quote";
                id: string;
                text: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"image">;
                url: z.ZodEffects<z.ZodString, string, string>;
                alt: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "image";
                id: string;
                url: string;
                alt: string;
            }, {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"product-card">;
                product: z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                    publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                    publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
                }, "strip", z.ZodTypeAny, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }, {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                }>;
            }, "strip", z.ZodTypeAny, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }, {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"divider">;
            }, "strip", z.ZodTypeAny, {
                type: "divider";
                id: string;
            }, {
                type: "divider";
                id: string;
            }>]>, "many">;
        }, "strip", z.ZodTypeAny, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }, {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        }>>>;
        contentBlocks: z.ZodOptional<z.ZodArray<z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"paragraph">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "paragraph";
            id: string;
            text: string;
        }, {
            type: "paragraph";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"heading">;
            text: z.ZodString;
            level: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>;
        }, "strip", z.ZodTypeAny, {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        }, {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"quote">;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "quote";
            id: string;
            text: string;
        }, {
            type: "quote";
            id: string;
            text: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"image">;
            url: z.ZodEffects<z.ZodString, string, string>;
            alt: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "image";
            id: string;
            url: string;
            alt: string;
        }, {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"product-card">;
            product: z.ZodObject<{
                id: z.ZodString;
                code: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicShareToken: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicCoverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodEffects<z.ZodString, string, string>>>;
                publicProductTenantId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicSeriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                publicOffspringUnitPrice: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                publicInStock: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }, {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }, {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"divider">;
        }, "strip", z.ZodTypeAny, {
            type: "divider";
            id: string;
        }, {
            type: "divider";
            id: string;
        }>]>, "many">>;
        authorName: z.ZodString;
        authorPublicShareToken: z.ZodNullable<z.ZodString>;
        authorAvatarUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        commentCount: z.ZodNumber;
        likeCount: z.ZodNumber;
        isLiked: z.ZodBoolean;
        reportCount: z.ZodNumber;
        unresolvedReportCount: z.ZodNumber;
        resolvedReportCount: z.ZodNumber;
        dismissedReportCount: z.ZodNumber;
        isPinned: z.ZodBoolean;
        isFeatured: z.ZodBoolean;
        canEdit: z.ZodDefault<z.ZodBoolean>;
        canDelete: z.ZodDefault<z.ZodBoolean>;
        status: z.ZodEnum<["DRAFT", "PENDING_REVIEW", "PUBLISHED", "REJECTED", "ARCHIVED"]>;
        reviewNote: z.ZodNullable<z.ZodString>;
        submittedAt: z.ZodNullable<z.ZodString>;
        reviewedAt: z.ZodNullable<z.ZodString>;
        publishedAt: z.ZodNullable<z.ZodString>;
        archivedAt: z.ZodNullable<z.ZodString>;
        createdByUserId: z.ZodString;
        reviewedByUserId: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    }, {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        canDelete: boolean;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        canEdit: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level: 2 | 3;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt: string;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level: 2 | 3;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt: string;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
    };
}, {
    post: {
        status: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED" | "ARCHIVED";
        id: string;
        title: string;
        summary: string;
        tenantId: string | null;
        createdAt: string;
        updatedAt: string;
        sourceType: "PLATFORM" | "TENANT";
        tenantDisplayName: string | null;
        sourceLabel: string;
        tag: "精选" | "经验" | "问答" | "官方";
        content: string | null;
        authorName: string;
        authorPublicShareToken: string | null;
        commentCount: number;
        likeCount: number;
        isLiked: boolean;
        reportCount: number;
        unresolvedReportCount: number;
        resolvedReportCount: number;
        dismissedReportCount: number;
        isPinned: boolean;
        isFeatured: boolean;
        reviewNote: string | null;
        submittedAt: string | null;
        reviewedAt: string | null;
        publishedAt: string | null;
        archivedAt: string | null;
        createdByUserId: string;
        reviewedByUserId: string | null;
        coverImageUrl?: string | null | undefined;
        canDelete?: boolean | undefined;
        contentDoc?: {
            version: 2;
            blocks: ({
                type: "paragraph";
                id: string;
                text: string;
            } | {
                type: "heading";
                id: string;
                text: string;
                level?: 2 | 3 | undefined;
            } | {
                type: "quote";
                id: string;
                text: string;
            } | {
                type: "image";
                id: string;
                url: string;
                alt?: string | undefined;
            } | {
                type: "product-card";
                id: string;
                product: {
                    id: string;
                    code?: string | null | undefined;
                    coverImageUrl?: string | null | undefined;
                    alias?: string | null | undefined;
                    name?: string | null | undefined;
                    sex?: string | null | undefined;
                    publicShareToken?: string | null | undefined;
                    publicCoverImageUrl?: string | null | undefined;
                    publicProductTenantId?: string | null | undefined;
                    publicSeriesName?: string | null | undefined;
                    publicOffspringUnitPrice?: number | null | undefined;
                    publicInStock?: boolean | null | undefined;
                };
            } | {
                type: "divider";
                id: string;
            })[];
        } | null | undefined;
        contentBlocks?: ({
            type: "paragraph";
            id: string;
            text: string;
        } | {
            type: "heading";
            id: string;
            text: string;
            level?: 2 | 3 | undefined;
        } | {
            type: "quote";
            id: string;
            text: string;
        } | {
            type: "image";
            id: string;
            url: string;
            alt?: string | undefined;
        } | {
            type: "product-card";
            id: string;
            product: {
                id: string;
                code?: string | null | undefined;
                coverImageUrl?: string | null | undefined;
                alias?: string | null | undefined;
                name?: string | null | undefined;
                sex?: string | null | undefined;
                publicShareToken?: string | null | undefined;
                publicCoverImageUrl?: string | null | undefined;
                publicProductTenantId?: string | null | undefined;
                publicSeriesName?: string | null | undefined;
                publicOffspringUnitPrice?: number | null | undefined;
                publicInStock?: boolean | null | undefined;
            };
        } | {
            type: "divider";
            id: string;
        })[] | undefined;
        authorAvatarUrl?: string | null | undefined;
        canEdit?: boolean | undefined;
    };
}>;
export declare const uploadGuiquanCommunityImageResponseSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    asset: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    };
}, {
    asset: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    };
}>;
export declare function createGuiquanCommunityProductCardLine(product: GuiquanCommunityReferencedProduct): string;
export declare function createGuiquanCommunityPostContentDoc(input: {
    contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
    contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
    body?: string | null;
    imageUrls?: string[];
    relatedProduct?: GuiquanCommunityReferencedProduct | null;
}): GuiquanCommunityContentDoc;
export declare function deriveGuiquanCommunityPostTitle(input: {
    contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
    contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
    body?: string | null;
    imageUrls?: string[];
    relatedProduct?: GuiquanCommunityReferencedProduct | null;
}): string;
export declare function composeGuiquanCommunityPostContent(input: {
    contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
    contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
    body?: string | null;
    imageUrls?: string[];
    relatedProduct?: GuiquanCommunityReferencedProduct | null;
}): string;
export declare function deriveGuiquanCommunityPostSummary(input: {
    contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
    contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
    body?: string | null;
    imageUrls?: string[];
    relatedProduct?: GuiquanCommunityReferencedProduct | null;
}): string;
export declare function parseGuiquanCommunityContentBlocks(value?: string | null, options?: {
    contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
    contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
}): GuiquanCommunityContentBlock[];
export declare function deriveGuiquanCommunityCoverImageUrl(content?: string | null, options?: {
    contentDoc?: GuiquanCommunityContentDocInput | GuiquanCommunityContentDoc | null;
    contentBlocks?: GuiquanCommunityContentBlockInput[] | GuiquanCommunityContentBlock[] | null;
}): string | null;
export type GuiquanCommunityTag = z.infer<typeof guiquanCommunityTagSchema>;
export type GuiquanCommunityPostStatus = z.infer<typeof guiquanCommunityPostStatusSchema>;
export type GuiquanCommunityPostSourceType = z.infer<typeof guiquanCommunityPostSourceTypeSchema>;
export type GuiquanCommunityCommentStatus = z.infer<typeof guiquanCommunityCommentStatusSchema>;
export type GuiquanCommunityReportTargetType = z.infer<typeof guiquanCommunityReportTargetTypeSchema>;
export type GuiquanCommunityReportReason = z.infer<typeof guiquanCommunityReportReasonSchema>;
export type GuiquanCommunityReportStatus = z.infer<typeof guiquanCommunityReportStatusSchema>;
export type GuiquanCommunityPost = z.infer<typeof guiquanCommunityPostSchema>;
export type GuiquanCommunityComment = z.infer<typeof guiquanCommunityCommentSchema>;
export type GuiquanCommunityReport = z.infer<typeof guiquanCommunityReportSchema>;
export type GuiquanCommunityFeedItem = z.infer<typeof guiquanCommunityFeedItemSchema>;
export type GuiquanCommunityFeedResponse = z.infer<typeof guiquanCommunityFeedResponseSchema>;
export type ListTenantGuiquanCommunityPostsResponse = z.infer<typeof listTenantGuiquanCommunityPostsResponseSchema>;
export type GuiquanCommunityInteractionNotificationType = z.infer<typeof guiquanCommunityInteractionNotificationTypeSchema>;
export type GuiquanCommunityInteractionNotification = z.infer<typeof guiquanCommunityInteractionNotificationSchema>;
export type GuiquanCommunityInteractionNotificationsResponse = z.infer<typeof guiquanCommunityInteractionNotificationsResponseSchema>;
export type ListAdminGuiquanCommunityPostsQuery = z.infer<typeof listAdminGuiquanCommunityPostsQuerySchema>;
export type ListAdminGuiquanCommunityPostsResponse = z.infer<typeof listAdminGuiquanCommunityPostsResponseSchema>;
export type GetGuiquanCommunityPostResponse = z.infer<typeof getGuiquanCommunityPostResponseSchema>;
export type GetAdminGuiquanCommunityPostResponse = z.infer<typeof getAdminGuiquanCommunityPostResponseSchema>;
export type GuiquanCommunityReferencedProduct = z.infer<typeof guiquanCommunityReferencedProductSchema>;
export type GuiquanCommunityParagraphBlock = z.infer<typeof guiquanCommunityParagraphBlockSchema>;
export type GuiquanCommunityHeadingBlock = z.infer<typeof guiquanCommunityHeadingBlockSchema>;
export type GuiquanCommunityQuoteBlock = z.infer<typeof guiquanCommunityQuoteBlockSchema>;
export type GuiquanCommunityImageBlock = z.infer<typeof guiquanCommunityImageBlockSchema>;
export type GuiquanCommunityProductCardBlock = z.infer<typeof guiquanCommunityProductCardBlockSchema>;
export type GuiquanCommunityDividerBlock = z.infer<typeof guiquanCommunityDividerBlockSchema>;
export type GuiquanCommunityContentBlock = z.infer<typeof guiquanCommunityContentBlockSchema>;
export type GuiquanCommunityContentBlockInput = z.infer<typeof guiquanCommunityContentBlockInputSchema>;
export type GuiquanCommunityContentDoc = z.infer<typeof guiquanCommunityContentDocSchema>;
export type GuiquanCommunityContentDocInput = z.infer<typeof guiquanCommunityContentDocInputSchema>;
export type CreateAdminGuiquanCommunityPostRequest = z.infer<typeof createAdminGuiquanCommunityPostRequestSchema>;
export type UpdateAdminGuiquanCommunityPostRequest = z.infer<typeof updateAdminGuiquanCommunityPostRequestSchema>;
export type CreateTenantGuiquanCommunityPostRequest = z.infer<typeof createTenantGuiquanCommunityPostRequestSchema>;
export type UpdateTenantGuiquanCommunityPostRequest = z.infer<typeof updateTenantGuiquanCommunityPostRequestSchema>;
export type RejectAdminGuiquanCommunityPostRequest = z.infer<typeof rejectAdminGuiquanCommunityPostRequestSchema>;
export type CreateGuiquanCommunityCommentRequest = z.infer<typeof createGuiquanCommunityCommentRequestSchema>;
export type CreateGuiquanCommunityCommentResponse = z.infer<typeof createGuiquanCommunityCommentResponseSchema>;
export type ToggleGuiquanCommunityPostLikeResponse = z.infer<typeof toggleGuiquanCommunityPostLikeResponseSchema>;
export type DeleteGuiquanCommunityCommentResponse = z.infer<typeof deleteGuiquanCommunityCommentResponseSchema>;
export type CreateGuiquanCommunityReportRequest = z.infer<typeof createGuiquanCommunityReportRequestSchema>;
export type CreateGuiquanCommunityReportResponse = z.infer<typeof createGuiquanCommunityReportResponseSchema>;
export type UpdateAdminGuiquanCommunityCommentStatusRequest = z.infer<typeof updateAdminGuiquanCommunityCommentStatusRequestSchema>;
export type UpdateAdminGuiquanCommunityCommentStatusResponse = z.infer<typeof updateAdminGuiquanCommunityCommentStatusResponseSchema>;
export type UpdateAdminGuiquanCommunityReportStatusRequest = z.infer<typeof updateAdminGuiquanCommunityReportStatusRequestSchema>;
export type UpdateAdminGuiquanCommunityReportStatusResponse = z.infer<typeof updateAdminGuiquanCommunityReportStatusResponseSchema>;
export type GuiquanCommunityPostResponse = z.infer<typeof guiquanCommunityPostResponseSchema>;
export type CreateTenantGuiquanCommunityPostResponse = z.infer<typeof createTenantGuiquanCommunityPostResponseSchema>;
export type UpdateTenantGuiquanCommunityPostResponse = z.infer<typeof updateTenantGuiquanCommunityPostResponseSchema>;
export type DeleteTenantGuiquanCommunityPostResponse = z.infer<typeof deleteTenantGuiquanCommunityPostResponseSchema>;
export type AdminGuiquanCommunityPostResponse = z.infer<typeof adminGuiquanCommunityPostResponseSchema>;
export type GuiquanCommunityUploadedImageAsset = z.infer<typeof guiquanCommunityUploadedImageAssetSchema>;
export type UploadGuiquanCommunityImageResponse = z.infer<typeof uploadGuiquanCommunityImageResponseSchema>;
export {};
