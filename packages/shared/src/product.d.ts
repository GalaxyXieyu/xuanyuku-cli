import { z } from 'zod';
export declare const productCodeSchema: z.ZodString;
export declare const productDisplayCodeSchema: z.ZodString;
export declare const productIdParamSchema: z.ZodString;
export declare const productNameSchema: z.ZodOptional<z.ZodNullable<z.ZodString>>;
export declare const productDescriptionSchema: z.ZodOptional<z.ZodNullable<z.ZodString>>;
export declare const productSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    identityRank: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    alias: z.ZodNullable<z.ZodString>;
    code: z.ZodNullable<z.ZodString>;
    type: z.ZodEnum<["breeder", "offspring"]>;
    lineageType: z.ZodEnum<["pure", "hybrid"]>;
    crossLabel: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    description: z.ZodNullable<z.ZodString>;
    seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sireProductId: z.ZodNullable<z.ZodString>;
    damProductId: z.ZodNullable<z.ZodString>;
    mateProductId: z.ZodNullable<z.ZodString>;
    requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
    needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
    lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    offspringUnitPrice: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodNumber>, number | null, unknown>>;
    excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
    hasSample: z.ZodOptional<z.ZodBoolean>;
    inStock: z.ZodOptional<z.ZodBoolean>;
    popularityScore: z.ZodOptional<z.ZodNumber>;
    isFeatured: z.ZodOptional<z.ZodBoolean>;
    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodString>;
    updatedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code: string | null;
    type: "breeder" | "offspring";
    id: string;
    alias: string | null;
    name: string | null;
    tenantId: string;
    description: string | null;
    lineageType: "pure" | "hybrid";
    crossLabel: string | null;
    sireProductId: string | null;
    damProductId: string | null;
    mateProductId: string | null;
    coverImageUrl?: string | null | undefined;
    sex?: string | null | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    isFeatured?: boolean | undefined;
    identityRank?: number | null | undefined;
    seriesId?: string | null | undefined;
    requiresIdentityReview?: boolean | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    lastEggAt?: string | null | undefined;
    lastMatingAt?: string | null | undefined;
    daysSinceEgg?: number | null | undefined;
    offspringUnitPrice?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
}, {
    code: string | null;
    type: "breeder" | "offspring";
    id: string;
    alias: string | null;
    name: string | null;
    tenantId: string;
    description: string | null;
    lineageType: "pure" | "hybrid";
    crossLabel: string | null;
    sireProductId: string | null;
    damProductId: string | null;
    mateProductId: string | null;
    coverImageUrl?: string | null | undefined;
    sex?: string | null | undefined;
    createdAt?: string | undefined;
    updatedAt?: string | undefined;
    isFeatured?: boolean | undefined;
    identityRank?: number | null | undefined;
    seriesId?: string | null | undefined;
    requiresIdentityReview?: boolean | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    lastEggAt?: string | null | undefined;
    lastMatingAt?: string | null | undefined;
    daysSinceEgg?: number | null | undefined;
    offspringUnitPrice?: unknown;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
}>;
export declare const productNeedMatingStatusSchema: z.ZodEnum<["normal", "need_mating", "warning"]>;
export declare const createProductRequestSchema: z.ZodEffects<z.ZodEffects<z.ZodObject<{
    archiveCode: z.ZodOptional<z.ZodUnknown>;
    displayCode: z.ZodOptional<z.ZodUnknown>;
    birthCode: z.ZodOptional<z.ZodUnknown>;
    code: z.ZodOptional<z.ZodUnknown>;
    type: z.ZodOptional<z.ZodNullable<z.ZodEnum<["breeder", "offspring"]>>>;
    alias: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sex: z.ZodOptional<z.ZodNullable<z.ZodEnum<["male", "female", "unknown"]>>>;
    sireProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    damProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lineageType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["pure", "hybrid"]>>>;
    crossLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    offspringUnitPrice: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodNumber>, number | null, unknown>>;
    sireCode: z.ZodOptional<z.ZodUnknown>;
    damCode: z.ZodOptional<z.ZodUnknown>;
    mateCode: z.ZodOptional<z.ZodUnknown>;
    excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
    hasSample: z.ZodOptional<z.ZodBoolean>;
    inStock: z.ZodOptional<z.ZodBoolean>;
    popularityScore: z.ZodOptional<z.ZodNumber>;
    isFeatured: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: unknown;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}>, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: unknown;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}>, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: unknown;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}>;
export declare const previewProductCodeRequestSchema: z.ZodObject<{
    type: z.ZodOptional<z.ZodNullable<z.ZodEnum<["breeder", "offspring"]>>>;
    seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seriesName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sex: z.ZodOptional<z.ZodNullable<z.ZodEnum<["male", "female", "unknown"]>>>;
    lineageType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["pure", "hybrid"]>>>;
    crossLabel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type?: "breeder" | "offspring" | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    seriesName?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    seriesId?: string | null | undefined;
}, {
    type?: "breeder" | "offspring" | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    seriesName?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    seriesId?: string | null | undefined;
}>;
export declare const previewProductCodeResponseSchema: z.ZodObject<{
    ready: z.ZodBoolean;
    type: z.ZodEnum<["breeder", "offspring"]>;
    sex: z.ZodEnum<["male", "female", "unknown"]>;
    familyBase: z.ZodNullable<z.ZodString>;
    code: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code: string | null;
    type: "breeder" | "offspring";
    sex: "unknown" | "male" | "female";
    ready: boolean;
    familyBase: string | null;
}, {
    code: string | null;
    type: "breeder" | "offspring";
    sex: "unknown" | "male" | "female";
    ready: boolean;
    familyBase: string | null;
}>;
export declare const updateProductRequestSchema: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
    archiveCode: z.ZodOptional<z.ZodOptional<z.ZodUnknown>>;
    displayCode: z.ZodOptional<z.ZodOptional<z.ZodUnknown>>;
    birthCode: z.ZodOptional<z.ZodOptional<z.ZodUnknown>>;
    code: z.ZodOptional<z.ZodOptional<z.ZodUnknown>>;
    type: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["breeder", "offspring"]>>>>;
    alias: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    name: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    seriesId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    sex: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["male", "female", "unknown"]>>>>;
    sireProductId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    damProductId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    mateProductId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    lineageType: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodEnum<["pure", "hybrid"]>>>>;
    crossLabel: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    offspringUnitPrice: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodNumber>, number | null, unknown>>>;
    sireCode: z.ZodOptional<z.ZodOptional<z.ZodUnknown>>;
    damCode: z.ZodOptional<z.ZodOptional<z.ZodUnknown>>;
    mateCode: z.ZodOptional<z.ZodOptional<z.ZodUnknown>>;
    excludeFromBreeding: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    hasSample: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    inStock: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    popularityScore: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    isFeatured: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: unknown;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}>, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: unknown;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}>, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: unknown;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}>, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: number | null | undefined;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}, {
    code?: unknown;
    type?: "breeder" | "offspring" | null | undefined;
    alias?: string | null | undefined;
    name?: string | null | undefined;
    sex?: "unknown" | "male" | "female" | null | undefined;
    isFeatured?: boolean | undefined;
    description?: string | null | undefined;
    lineageType?: "pure" | "hybrid" | null | undefined;
    crossLabel?: string | null | undefined;
    sireCode?: unknown;
    damCode?: unknown;
    mateCode?: unknown;
    seriesId?: string | null | undefined;
    sireProductId?: string | null | undefined;
    damProductId?: string | null | undefined;
    mateProductId?: string | null | undefined;
    offspringUnitPrice?: unknown;
    excludeFromBreeding?: boolean | undefined;
    hasSample?: boolean | undefined;
    inStock?: boolean | undefined;
    popularityScore?: number | undefined;
    archiveCode?: unknown;
    displayCode?: unknown;
    birthCode?: unknown;
}>;
export declare const PROFILE_CREATED_EVENT_TYPE: "profile_created";
export declare const createMatingRecordRequestSchema: z.ZodObject<{
    femaleProductId: z.ZodString;
    maleProductId: z.ZodString;
    eventDate: z.ZodString;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    femaleProductId: string;
    maleProductId: string;
    eventDate: string;
    note?: string | null | undefined;
}, {
    femaleProductId: string;
    maleProductId: string;
    eventDate: string;
    note?: string | null | undefined;
}>;
export declare const createEggRecordRequestSchema: z.ZodObject<{
    femaleProductId: z.ZodString;
    eventDate: z.ZodString;
    eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    femaleProductId: string;
    eventDate: string;
    note?: string | null | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
}, {
    femaleProductId: string;
    eventDate: string;
    note?: string | null | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
}>;
export declare const createProductEventRequestSchema: z.ZodObject<{
    eventType: z.ZodEnum<["daily", "health", "mating", "egg", "change_mate"]>;
    eventDate: z.ZodString;
    maleProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    oldMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    eventDate: string;
    eventType: "daily" | "health" | "mating" | "egg" | "change_mate";
    note?: string | null | undefined;
    maleProductId?: string | null | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    oldMateProductId?: string | null | undefined;
    newMateProductId?: string | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}, {
    eventDate: string;
    eventType: "daily" | "health" | "mating" | "egg" | "change_mate";
    note?: string | null | undefined;
    maleProductId?: string | null | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    oldMateProductId?: string | null | undefined;
    newMateProductId?: string | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}>;
export declare const createProductResponseSchema: z.ZodObject<{
    product: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        identityRank: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        alias: z.ZodNullable<z.ZodString>;
        code: z.ZodNullable<z.ZodString>;
        type: z.ZodEnum<["breeder", "offspring"]>;
        lineageType: z.ZodEnum<["pure", "hybrid"]>;
        crossLabel: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sireProductId: z.ZodNullable<z.ZodString>;
        damProductId: z.ZodNullable<z.ZodString>;
        mateProductId: z.ZodNullable<z.ZodString>;
        requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
        needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        offspringUnitPrice: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodNumber>, number | null, unknown>>;
        excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
        hasSample: z.ZodOptional<z.ZodBoolean>;
        inStock: z.ZodOptional<z.ZodBoolean>;
        popularityScore: z.ZodOptional<z.ZodNumber>;
        isFeatured: z.ZodOptional<z.ZodBoolean>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    }, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    }>;
    referralReward: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodEnum<["PENDING", "AWARDED", "SKIPPED"]>;
        triggerType: z.ZodEnum<["first_payment", "renewal", "first_product_create"]>;
        statusReason: z.ZodNullable<z.ZodString>;
        referrerUserId: z.ZodString;
        inviteeUserId: z.ZodString;
        paymentProvider: z.ZodNullable<z.ZodString>;
        paymentId: z.ZodNullable<z.ZodString>;
        orderId: z.ZodNullable<z.ZodString>;
        rewardDaysReferrer: z.ZodNumber;
        rewardDaysInvitee: z.ZodNumber;
        awardedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }, {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }>>>;
}, "strip", z.ZodTypeAny, {
    product: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    };
    referralReward?: {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    } | null | undefined;
}, {
    product: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    };
    referralReward?: {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    } | null | undefined;
}>;
export declare const getProductResponseSchema: z.ZodObject<{
    product: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        identityRank: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        alias: z.ZodNullable<z.ZodString>;
        code: z.ZodNullable<z.ZodString>;
        type: z.ZodEnum<["breeder", "offspring"]>;
        lineageType: z.ZodEnum<["pure", "hybrid"]>;
        crossLabel: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sireProductId: z.ZodNullable<z.ZodString>;
        damProductId: z.ZodNullable<z.ZodString>;
        mateProductId: z.ZodNullable<z.ZodString>;
        requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
        needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        offspringUnitPrice: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodNumber>, number | null, unknown>>;
        excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
        hasSample: z.ZodOptional<z.ZodBoolean>;
        inStock: z.ZodOptional<z.ZodBoolean>;
        popularityScore: z.ZodOptional<z.ZodNumber>;
        isFeatured: z.ZodOptional<z.ZodBoolean>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    }, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    product: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    };
}, {
    product: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    };
}>;
export declare const listProductsQuerySchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
    search: z.ZodOptional<z.ZodString>;
    type: z.ZodOptional<z.ZodString>;
    sex: z.ZodOptional<z.ZodString>;
    seriesId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["normal", "need_mating", "warning"]>>;
    sortBy: z.ZodOptional<z.ZodEnum<["updatedAt", "createdAt", "id", "identity"]>>;
    sortDir: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    status?: "warning" | "normal" | "need_mating" | undefined;
    type?: string | undefined;
    sex?: string | undefined;
    seriesId?: string | undefined;
    search?: string | undefined;
    sortBy?: "id" | "createdAt" | "updatedAt" | "identity" | undefined;
    sortDir?: "asc" | "desc" | undefined;
}, {
    status?: "warning" | "normal" | "need_mating" | undefined;
    type?: string | undefined;
    sex?: string | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
    seriesId?: string | undefined;
    search?: string | undefined;
    sortBy?: "id" | "createdAt" | "updatedAt" | "identity" | undefined;
    sortDir?: "asc" | "desc" | undefined;
}>;
export declare const listProductsResponseSchema: z.ZodObject<{
    products: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        identityRank: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        alias: z.ZodNullable<z.ZodString>;
        code: z.ZodNullable<z.ZodString>;
        type: z.ZodEnum<["breeder", "offspring"]>;
        lineageType: z.ZodEnum<["pure", "hybrid"]>;
        crossLabel: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        description: z.ZodNullable<z.ZodString>;
        seriesId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sex: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        sireProductId: z.ZodNullable<z.ZodString>;
        damProductId: z.ZodNullable<z.ZodString>;
        mateProductId: z.ZodNullable<z.ZodString>;
        requiresIdentityReview: z.ZodOptional<z.ZodBoolean>;
        needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        offspringUnitPrice: z.ZodOptional<z.ZodEffects<z.ZodNullable<z.ZodNumber>, number | null, unknown>>;
        excludeFromBreeding: z.ZodOptional<z.ZodBoolean>;
        hasSample: z.ZodOptional<z.ZodBoolean>;
        inStock: z.ZodOptional<z.ZodBoolean>;
        popularityScore: z.ZodOptional<z.ZodNumber>;
        isFeatured: z.ZodOptional<z.ZodBoolean>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    }, {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
    stats: z.ZodObject<{
        maleCount: z.ZodNumber;
        femaleCount: z.ZodNumber;
        unknownCount: z.ZodNumber;
        yearEggCount: z.ZodNumber;
        needMatingCount: z.ZodNumber;
        warningCount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        maleCount: number;
        femaleCount: number;
        unknownCount: number;
        yearEggCount: number;
        needMatingCount: number;
        warningCount: number;
    }, {
        maleCount: number;
        femaleCount: number;
        unknownCount: number;
        yearEggCount: number;
        needMatingCount: number;
        warningCount: number;
    }>;
}, "strip", z.ZodTypeAny, {
    products: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: number | null | undefined;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    }[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    stats: {
        maleCount: number;
        femaleCount: number;
        unknownCount: number;
        yearEggCount: number;
        needMatingCount: number;
        warningCount: number;
    };
}, {
    products: {
        code: string | null;
        type: "breeder" | "offspring";
        id: string;
        alias: string | null;
        name: string | null;
        tenantId: string;
        description: string | null;
        lineageType: "pure" | "hybrid";
        crossLabel: string | null;
        sireProductId: string | null;
        damProductId: string | null;
        mateProductId: string | null;
        coverImageUrl?: string | null | undefined;
        sex?: string | null | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        isFeatured?: boolean | undefined;
        identityRank?: number | null | undefined;
        seriesId?: string | null | undefined;
        requiresIdentityReview?: boolean | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        offspringUnitPrice?: unknown;
        excludeFromBreeding?: boolean | undefined;
        hasSample?: boolean | undefined;
        inStock?: boolean | undefined;
        popularityScore?: number | undefined;
    }[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    stats: {
        maleCount: number;
        femaleCount: number;
        unknownCount: number;
        yearEggCount: number;
        needMatingCount: number;
        warningCount: number;
    };
}>;
export declare const productImageSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    productId: z.ZodString;
    key: z.ZodString;
    url: z.ZodString;
    contentType: z.ZodNullable<z.ZodString>;
    sizeBytes: z.ZodString;
    sortOrder: z.ZodNumber;
    isMain: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    url: string;
    key: string;
    contentType: string | null;
    sizeBytes: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    sortOrder: number;
    productId: string;
    isMain: boolean;
}, {
    id: string;
    url: string;
    key: string;
    contentType: string | null;
    sizeBytes: string;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    sortOrder: number;
    productId: string;
    isMain: boolean;
}>;
export declare const productEventImageSchema: z.ZodObject<{
    key: z.ZodString;
    url: z.ZodString;
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
export declare const productGallerySourceTypeSchema: z.ZodEnum<["profile", "event"]>;
export declare const productGalleryItemSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    productId: z.ZodString;
    sourceType: z.ZodEnum<["profile", "event"]>;
    sourceEventId: z.ZodString;
    sourceImageId: z.ZodNullable<z.ZodString>;
    eventType: z.ZodString;
    eventDate: z.ZodString;
    imageKey: z.ZodString;
    imageUrl: z.ZodString;
    contentType: z.ZodNullable<z.ZodString>;
    sizeBytes: z.ZodString;
    sortOrder: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    contentType: string | null;
    sizeBytes: string;
    tenantId: string;
    sourceType: "event" | "profile";
    sortOrder: number;
    productId: string;
    imageUrl: string;
    eventDate: string;
    eventType: string;
    sourceEventId: string;
    sourceImageId: string | null;
    imageKey: string;
}, {
    id: string;
    contentType: string | null;
    sizeBytes: string;
    tenantId: string;
    sourceType: "event" | "profile";
    sortOrder: number;
    productId: string;
    imageUrl: string;
    eventDate: string;
    eventType: string;
    sourceEventId: string;
    sourceImageId: string | null;
    imageKey: string;
}>;
export declare const listProductImagesResponseSchema: z.ZodObject<{
    images: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        key: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodString;
        sortOrder: z.ZodNumber;
        isMain: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    images: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }[];
}, {
    images: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }[];
}>;
export declare const listProductGalleryResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        sourceType: z.ZodEnum<["profile", "event"]>;
        sourceEventId: z.ZodString;
        sourceImageId: z.ZodNullable<z.ZodString>;
        eventType: z.ZodString;
        eventDate: z.ZodString;
        imageKey: z.ZodString;
        imageUrl: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodString;
        sortOrder: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        sourceType: "event" | "profile";
        sortOrder: number;
        productId: string;
        imageUrl: string;
        eventDate: string;
        eventType: string;
        sourceEventId: string;
        sourceImageId: string | null;
        imageKey: string;
    }, {
        id: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        sourceType: "event" | "profile";
        sortOrder: number;
        productId: string;
        imageUrl: string;
        eventDate: string;
        eventType: string;
        sourceEventId: string;
        sourceImageId: string | null;
        imageKey: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        sourceType: "event" | "profile";
        sortOrder: number;
        productId: string;
        imageUrl: string;
        eventDate: string;
        eventType: string;
        sourceEventId: string;
        sourceImageId: string | null;
        imageKey: string;
    }[];
}, {
    items: {
        id: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        sourceType: "event" | "profile";
        sortOrder: number;
        productId: string;
        imageUrl: string;
        eventDate: string;
        eventType: string;
        sourceEventId: string;
        sourceImageId: string | null;
        imageKey: string;
    }[];
}>;
export declare const uploadProductImageResponseSchema: z.ZodObject<{
    image: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        key: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodString;
        sortOrder: z.ZodNumber;
        isMain: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }>;
    referralReward: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodEnum<["PENDING", "AWARDED", "SKIPPED"]>;
        triggerType: z.ZodEnum<["first_payment", "renewal", "first_product_create"]>;
        statusReason: z.ZodNullable<z.ZodString>;
        referrerUserId: z.ZodString;
        inviteeUserId: z.ZodString;
        paymentProvider: z.ZodNullable<z.ZodString>;
        paymentId: z.ZodNullable<z.ZodString>;
        orderId: z.ZodNullable<z.ZodString>;
        rewardDaysReferrer: z.ZodNumber;
        rewardDaysInvitee: z.ZodNumber;
        awardedAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }, {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    }>>>;
}, "strip", z.ZodTypeAny, {
    image: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    };
    referralReward?: {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    } | null | undefined;
}, {
    image: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    };
    referralReward?: {
        status: "PENDING" | "AWARDED" | "SKIPPED";
        id: string;
        createdAt: string;
        orderId: string | null;
        paymentProvider: string | null;
        paymentId: string | null;
        statusReason: string | null;
        referrerUserId: string;
        inviteeUserId: string;
        triggerType: "first_product_create" | "first_payment" | "renewal";
        rewardDaysReferrer: number;
        rewardDaysInvitee: number;
        awardedAt: string | null;
    } | null | undefined;
}>;
export declare const setMainProductImageResponseSchema: z.ZodObject<{
    image: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        key: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodString;
        sortOrder: z.ZodNumber;
        isMain: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    image: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    };
}, {
    image: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    };
}>;
export declare const deleteProductImageResponseSchema: z.ZodObject<{
    deleted: z.ZodBoolean;
    imageId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    deleted: boolean;
    imageId: string;
}, {
    deleted: boolean;
    imageId: string;
}>;
export declare const deleteProductResponseSchema: z.ZodObject<{
    deleted: z.ZodBoolean;
    productId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    productId: string;
    deleted: boolean;
}, {
    productId: string;
    deleted: boolean;
}>;
export declare const reorderProductImagesRequestSchema: z.ZodObject<{
    imageIds: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    imageIds: string[];
}, {
    imageIds: string[];
}>;
export declare const reorderProductImagesResponseSchema: z.ZodObject<{
    images: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        key: z.ZodString;
        url: z.ZodString;
        contentType: z.ZodNullable<z.ZodString>;
        sizeBytes: z.ZodString;
        sortOrder: z.ZodNumber;
        isMain: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }, {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    images: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }[];
}, {
    images: {
        id: string;
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        sortOrder: number;
        productId: string;
        isMain: boolean;
    }[];
}>;
export declare const productEventSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    productId: z.ZodString;
    eventType: z.ZodString;
    eventDate: z.ZodString;
    maleProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    oldMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    note: z.ZodNullable<z.ZodString>;
    images: z.ZodDefault<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        url: z.ZodString;
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
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    images: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    }[];
    productId: string;
    eventDate: string;
    eventType: string;
    maleProductId?: string | null | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    oldMateProductId?: string | null | undefined;
    newMateProductId?: string | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}, {
    id: string;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    productId: string;
    eventDate: string;
    eventType: string;
    images?: {
        url: string;
        key: string;
        contentType: string | null;
        sizeBytes: string;
    }[] | undefined;
    maleProductId?: string | null | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    oldMateProductId?: string | null | undefined;
    newMateProductId?: string | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}>;
export declare const createProductEventResponseSchema: z.ZodObject<{
    event: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        eventType: z.ZodString;
        eventDate: z.ZodString;
        maleProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        oldMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodNullable<z.ZodString>;
        images: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            url: z.ZodString;
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
        }>, "many">>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        images: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[];
        productId: string;
        eventDate: string;
        eventType: string;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        productId: string;
        eventDate: string;
        eventType: string;
        images?: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[] | undefined;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    event: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        images: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[];
        productId: string;
        eventDate: string;
        eventType: string;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    };
}, {
    event: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        productId: string;
        eventDate: string;
        eventType: string;
        images?: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[] | undefined;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    };
}>;
export declare const updateProductEventRequestSchema: z.ZodEffects<z.ZodObject<{
    eventDate: z.ZodOptional<z.ZodString>;
    maleProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    oldMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    note: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    note?: string | null | undefined;
    maleProductId?: string | null | undefined;
    eventDate?: string | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    oldMateProductId?: string | null | undefined;
    newMateProductId?: string | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}, {
    note?: string | null | undefined;
    maleProductId?: string | null | undefined;
    eventDate?: string | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    oldMateProductId?: string | null | undefined;
    newMateProductId?: string | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}>, {
    note?: string | null | undefined;
    maleProductId?: string | null | undefined;
    eventDate?: string | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    oldMateProductId?: string | null | undefined;
    newMateProductId?: string | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}, {
    note?: string | null | undefined;
    maleProductId?: string | null | undefined;
    eventDate?: string | undefined;
    eggCount?: number | null | undefined;
    fertilizedCount?: number | null | undefined;
    oldMateProductId?: string | null | undefined;
    newMateProductId?: string | null | undefined;
    maleCode?: string | null | undefined;
    oldMateCode?: string | null | undefined;
    newMateCode?: string | null | undefined;
}>;
export declare const updateProductEventResponseSchema: z.ZodObject<{
    event: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        eventType: z.ZodString;
        eventDate: z.ZodString;
        maleProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        oldMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodNullable<z.ZodString>;
        images: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            url: z.ZodString;
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
        }>, "many">>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        images: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[];
        productId: string;
        eventDate: string;
        eventType: string;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        productId: string;
        eventDate: string;
        eventType: string;
        images?: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[] | undefined;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    event: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        images: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[];
        productId: string;
        eventDate: string;
        eventType: string;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    };
}, {
    event: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        productId: string;
        eventDate: string;
        eventType: string;
        images?: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[] | undefined;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    };
}>;
export declare const deleteProductEventResponseSchema: z.ZodObject<{
    deleted: z.ZodBoolean;
    eventId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    deleted: boolean;
    eventId: string;
}, {
    deleted: boolean;
    eventId: string;
}>;
export declare const uploadProductEventImageResponseSchema: z.ZodObject<{
    event: z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        eventType: z.ZodString;
        eventDate: z.ZodString;
        maleProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        oldMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodNullable<z.ZodString>;
        images: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            url: z.ZodString;
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
        }>, "many">>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        images: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[];
        productId: string;
        eventDate: string;
        eventType: string;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        productId: string;
        eventDate: string;
        eventType: string;
        images?: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[] | undefined;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    event: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        images: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[];
        productId: string;
        eventDate: string;
        eventType: string;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    };
}, {
    event: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        productId: string;
        eventDate: string;
        eventType: string;
        images?: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[] | undefined;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    };
}>;
export declare const listProductEventsResponseSchema: z.ZodObject<{
    events: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        productId: z.ZodString;
        eventType: z.ZodString;
        eventDate: z.ZodString;
        maleProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        oldMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newMateProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        maleCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        eggCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        fertilizedCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        oldMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        newMateCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        note: z.ZodNullable<z.ZodString>;
        images: z.ZodDefault<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            url: z.ZodString;
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
        }>, "many">>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        images: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[];
        productId: string;
        eventDate: string;
        eventType: string;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }, {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        productId: string;
        eventDate: string;
        eventType: string;
        images?: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[] | undefined;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    events: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        images: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[];
        productId: string;
        eventDate: string;
        eventType: string;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }[];
}, {
    events: {
        id: string;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        productId: string;
        eventDate: string;
        eventType: string;
        images?: {
            url: string;
            key: string;
            contentType: string | null;
            sizeBytes: string;
        }[] | undefined;
        maleProductId?: string | null | undefined;
        eggCount?: number | null | undefined;
        fertilizedCount?: number | null | undefined;
        oldMateProductId?: string | null | undefined;
        newMateProductId?: string | null | undefined;
        maleCode?: string | null | undefined;
        oldMateCode?: string | null | undefined;
        newMateCode?: string | null | undefined;
    }[];
}>;
export declare const productMaleMatingHistoryItemSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    maleProductId: z.ZodString;
    maleCode: z.ZodNullable<z.ZodString>;
    femaleProductId: z.ZodString;
    femaleCode: z.ZodNullable<z.ZodString>;
    femaleName: z.ZodNullable<z.ZodString>;
    femaleNeedMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
    femaleDaysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    eventDate: z.ZodString;
    note: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    femaleProductId: string;
    femaleCode: string | null;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    maleProductId: string;
    eventDate: string;
    maleCode: string | null;
    femaleName: string | null;
    femaleNeedMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    femaleDaysSinceEgg?: number | null | undefined;
}, {
    id: string;
    femaleProductId: string;
    femaleCode: string | null;
    note: string | null;
    tenantId: string;
    createdAt: string;
    updatedAt: string;
    maleProductId: string;
    eventDate: string;
    maleCode: string | null;
    femaleName: string | null;
    femaleNeedMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    femaleDaysSinceEgg?: number | null | undefined;
}>;
export declare const listProductMaleMatingHistoryResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        maleProductId: z.ZodString;
        maleCode: z.ZodNullable<z.ZodString>;
        femaleProductId: z.ZodString;
        femaleCode: z.ZodNullable<z.ZodString>;
        femaleName: z.ZodNullable<z.ZodString>;
        femaleNeedMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        femaleDaysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        eventDate: z.ZodString;
        note: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        femaleProductId: string;
        femaleCode: string | null;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        maleProductId: string;
        eventDate: string;
        maleCode: string | null;
        femaleName: string | null;
        femaleNeedMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        femaleDaysSinceEgg?: number | null | undefined;
    }, {
        id: string;
        femaleProductId: string;
        femaleCode: string | null;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        maleProductId: string;
        eventDate: string;
        maleCode: string | null;
        femaleName: string | null;
        femaleNeedMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        femaleDaysSinceEgg?: number | null | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        femaleProductId: string;
        femaleCode: string | null;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        maleProductId: string;
        eventDate: string;
        maleCode: string | null;
        femaleName: string | null;
        femaleNeedMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        femaleDaysSinceEgg?: number | null | undefined;
    }[];
}, {
    items: {
        id: string;
        femaleProductId: string;
        femaleCode: string | null;
        note: string | null;
        tenantId: string;
        createdAt: string;
        updatedAt: string;
        maleProductId: string;
        eventDate: string;
        maleCode: string | null;
        femaleName: string | null;
        femaleNeedMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        femaleDaysSinceEgg?: number | null | undefined;
    }[];
}>;
export declare const productFamilyTreeNodeSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    sex: z.ZodNullable<z.ZodString>;
    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    code: string | null;
    id: string;
    name: string | null;
    sex: string | null;
    coverImageUrl?: string | null | undefined;
    publicUrl?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
}, {
    code: string | null;
    id: string;
    name: string | null;
    sex: string | null;
    coverImageUrl?: string | null | undefined;
    publicUrl?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
}>;
export declare const productFamilyTreeLinkSchema: z.ZodObject<{
    code: z.ZodNullable<z.ZodString>;
    product: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    code: string | null;
    product: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null;
}, {
    code: string | null;
    product: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null;
}>;
export declare const productFamilyTreeMateSchema: z.ZodObject<{
    id: z.ZodString;
    code: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    sex: z.ZodNullable<z.ZodString>;
    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
} & {
    needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
    lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    code: string | null;
    id: string;
    name: string | null;
    sex: string | null;
    coverImageUrl?: string | null | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    lastEggAt?: string | null | undefined;
    lastMatingAt?: string | null | undefined;
    daysSinceEgg?: number | null | undefined;
    publicUrl?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
}, {
    code: string | null;
    id: string;
    name: string | null;
    sex: string | null;
    coverImageUrl?: string | null | undefined;
    needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
    lastEggAt?: string | null | undefined;
    lastMatingAt?: string | null | undefined;
    daysSinceEgg?: number | null | undefined;
    publicUrl?: string | null | undefined;
    thumbnailUrl?: string | null | undefined;
}>;
export declare const productFamilyTreeSchema: z.ZodObject<{
    self: z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>;
    sire: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>>;
    dam: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>>;
    mate: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>>;
    mates: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    } & {
        needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
        lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>, "many">;
    children: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>, "many">;
    paternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>>>;
    paternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>>>;
    maternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>>>;
    maternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        sex: z.ZodNullable<z.ZodString>;
        publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }, {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }>>>;
    links: z.ZodObject<{
        sire: z.ZodNullable<z.ZodObject<{
            code: z.ZodNullable<z.ZodString>;
            product: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        }, {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        }>>;
        dam: z.ZodNullable<z.ZodObject<{
            code: z.ZodNullable<z.ZodString>;
            product: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        }, {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        }>>;
        mate: z.ZodNullable<z.ZodObject<{
            code: z.ZodNullable<z.ZodString>;
            product: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                code: z.ZodNullable<z.ZodString>;
                name: z.ZodNullable<z.ZodString>;
                sex: z.ZodNullable<z.ZodString>;
                publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }, {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        }, {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        sire: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
        dam: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
        mate: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
    }, {
        sire: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
        dam: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
        mate: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
    }>;
    limitations: z.ZodString;
}, "strip", z.ZodTypeAny, {
    self: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    };
    sire: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null;
    dam: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null;
    mate: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null;
    mates: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }[];
    children: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }[];
    links: {
        sire: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
        dam: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
        mate: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
    };
    limitations: string;
    paternalGrandfather?: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null | undefined;
    paternalGrandmother?: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null | undefined;
    maternalGrandfather?: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null | undefined;
    maternalGrandmother?: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null | undefined;
}, {
    self: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    };
    sire: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null;
    dam: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null;
    mate: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null;
    mates: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
        lastEggAt?: string | null | undefined;
        lastMatingAt?: string | null | undefined;
        daysSinceEgg?: number | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }[];
    children: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    }[];
    links: {
        sire: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
        dam: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
        mate: {
            code: string | null;
            product: {
                code: string | null;
                id: string;
                name: string | null;
                sex: string | null;
                coverImageUrl?: string | null | undefined;
                publicUrl?: string | null | undefined;
                thumbnailUrl?: string | null | undefined;
            } | null;
        } | null;
    };
    limitations: string;
    paternalGrandfather?: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null | undefined;
    paternalGrandmother?: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null | undefined;
    maternalGrandfather?: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null | undefined;
    maternalGrandmother?: {
        code: string | null;
        id: string;
        name: string | null;
        sex: string | null;
        coverImageUrl?: string | null | undefined;
        publicUrl?: string | null | undefined;
        thumbnailUrl?: string | null | undefined;
    } | null | undefined;
}>;
export declare const getProductFamilyTreeResponseSchema: z.ZodObject<{
    tree: z.ZodObject<{
        self: z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>;
        sire: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>;
        dam: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>;
        mate: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>;
        mates: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        } & {
            needMatingStatus: z.ZodOptional<z.ZodNullable<z.ZodEnum<["normal", "need_mating", "warning"]>>>;
            lastEggAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            lastMatingAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            daysSinceEgg: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>, "many">;
        children: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>, "many">;
        paternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>>;
        paternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>>;
        maternalGrandfather: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>>;
        maternalGrandmother: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            code: z.ZodNullable<z.ZodString>;
            name: z.ZodNullable<z.ZodString>;
            sex: z.ZodNullable<z.ZodString>;
            publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }, {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }>>>;
        links: z.ZodObject<{
            sire: z.ZodNullable<z.ZodObject<{
                code: z.ZodNullable<z.ZodString>;
                product: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodNullable<z.ZodString>;
                    name: z.ZodNullable<z.ZodString>;
                    sex: z.ZodNullable<z.ZodString>;
                    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }>>;
            dam: z.ZodNullable<z.ZodObject<{
                code: z.ZodNullable<z.ZodString>;
                product: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodNullable<z.ZodString>;
                    name: z.ZodNullable<z.ZodString>;
                    sex: z.ZodNullable<z.ZodString>;
                    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }>>;
            mate: z.ZodNullable<z.ZodObject<{
                code: z.ZodNullable<z.ZodString>;
                product: z.ZodNullable<z.ZodObject<{
                    id: z.ZodString;
                    code: z.ZodNullable<z.ZodString>;
                    name: z.ZodNullable<z.ZodString>;
                    sex: z.ZodNullable<z.ZodString>;
                    publicUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    thumbnailUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    coverImageUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                }, "strip", z.ZodTypeAny, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }, {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }, {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            }>>;
        }, "strip", z.ZodTypeAny, {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        }, {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        }>;
        limitations: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        self: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        };
        sire: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        dam: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mate: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mates: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        children: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        links: {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        };
        limitations: string;
        paternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        paternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
    }, {
        self: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        };
        sire: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        dam: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mate: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mates: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        children: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        links: {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        };
        limitations: string;
        paternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        paternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    tree: {
        self: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        };
        sire: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        dam: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mate: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mates: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        children: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        links: {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        };
        limitations: string;
        paternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        paternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
    };
}, {
    tree: {
        self: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        };
        sire: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        dam: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mate: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null;
        mates: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            needMatingStatus?: "warning" | "normal" | "need_mating" | null | undefined;
            lastEggAt?: string | null | undefined;
            lastMatingAt?: string | null | undefined;
            daysSinceEgg?: number | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        children: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        }[];
        links: {
            sire: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            dam: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
            mate: {
                code: string | null;
                product: {
                    code: string | null;
                    id: string;
                    name: string | null;
                    sex: string | null;
                    coverImageUrl?: string | null | undefined;
                    publicUrl?: string | null | undefined;
                    thumbnailUrl?: string | null | undefined;
                } | null;
            } | null;
        };
        limitations: string;
        paternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        paternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandfather?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
        maternalGrandmother?: {
            code: string | null;
            id: string;
            name: string | null;
            sex: string | null;
            coverImageUrl?: string | null | undefined;
            publicUrl?: string | null | undefined;
            thumbnailUrl?: string | null | undefined;
        } | null | undefined;
    };
}>;
export declare const productPublicClicksQuerySchema: z.ZodObject<{
    days: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    days: number;
}, {
    days?: number | undefined;
}>;
export declare const productPublicClicksSummarySchema: z.ZodObject<{
    productId: z.ZodString;
    totalClicks: z.ZodNumber;
    uniqueVisitors: z.ZodNumber;
    days: z.ZodNumber;
    lastClickedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId: string;
    days: number;
    totalClicks: number;
    uniqueVisitors: number;
    lastClickedAt: string | null;
}, {
    productId: string;
    days: number;
    totalClicks: number;
    uniqueVisitors: number;
    lastClickedAt: string | null;
}>;
export declare const getProductPublicClicksResponseSchema: z.ZodObject<{
    stats: z.ZodObject<{
        productId: z.ZodString;
        totalClicks: z.ZodNumber;
        uniqueVisitors: z.ZodNumber;
        days: z.ZodNumber;
        lastClickedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId: string;
        days: number;
        totalClicks: number;
        uniqueVisitors: number;
        lastClickedAt: string | null;
    }, {
        productId: string;
        days: number;
        totalClicks: number;
        uniqueVisitors: number;
        lastClickedAt: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    stats: {
        productId: string;
        days: number;
        totalClicks: number;
        uniqueVisitors: number;
        lastClickedAt: string | null;
    };
}, {
    stats: {
        productId: string;
        days: number;
        totalClicks: number;
        uniqueVisitors: number;
        lastClickedAt: string | null;
    };
}>;
export declare const listProductsPublicClicksQuerySchema: z.ZodObject<{
    days: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    days: number;
}, {
    limit?: number | undefined;
    days?: number | undefined;
}>;
export declare const productPublicClicksItemSchema: z.ZodObject<{
    productId: z.ZodString;
    code: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    totalClicks: z.ZodNumber;
    uniqueVisitors: z.ZodNumber;
    lastClickedAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    code: string | null;
    name: string | null;
    productId: string;
    totalClicks: number;
    uniqueVisitors: number;
    lastClickedAt: string | null;
}, {
    code: string | null;
    name: string | null;
    productId: string;
    totalClicks: number;
    uniqueVisitors: number;
    lastClickedAt: string | null;
}>;
export declare const listProductsPublicClicksResponseSchema: z.ZodObject<{
    days: z.ZodNumber;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        code: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        totalClicks: z.ZodNumber;
        uniqueVisitors: z.ZodNumber;
        lastClickedAt: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        code: string | null;
        name: string | null;
        productId: string;
        totalClicks: number;
        uniqueVisitors: number;
        lastClickedAt: string | null;
    }, {
        code: string | null;
        name: string | null;
        productId: string;
        totalClicks: number;
        uniqueVisitors: number;
        lastClickedAt: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    items: {
        code: string | null;
        name: string | null;
        productId: string;
        totalClicks: number;
        uniqueVisitors: number;
        lastClickedAt: string | null;
    }[];
    days: number;
}, {
    items: {
        code: string | null;
        name: string | null;
        productId: string;
        totalClicks: number;
        uniqueVisitors: number;
        lastClickedAt: string | null;
    }[];
    days: number;
}>;
export declare function buildProductGallery(input: {
    events: ProductEvent[];
    images: ProductImage[];
}): ProductGalleryItem[];
export type Product = z.infer<typeof productSchema>;
export type CreateProductRequest = z.infer<typeof createProductRequestSchema>;
export type GetProductResponse = z.infer<typeof getProductResponseSchema>;
export type ListProductsResponse = z.infer<typeof listProductsResponseSchema>;
export type PreviewProductCodeRequest = z.infer<typeof previewProductCodeRequestSchema>;
export type PreviewProductCodeResponse = z.infer<typeof previewProductCodeResponseSchema>;
export type UpdateProductRequest = z.infer<typeof updateProductRequestSchema>;
export type CreateMatingRecordRequest = z.infer<typeof createMatingRecordRequestSchema>;
export type CreateEggRecordRequest = z.infer<typeof createEggRecordRequestSchema>;
export type CreateProductEventRequest = z.infer<typeof createProductEventRequestSchema>;
export type UpdateProductEventRequest = z.infer<typeof updateProductEventRequestSchema>;
export type ListProductsQuery = z.infer<typeof listProductsQuerySchema>;
export type ProductListStats = z.infer<typeof listProductsResponseSchema.shape.stats>;
export type ProductImage = z.infer<typeof productImageSchema>;
export type ProductEventImage = z.infer<typeof productEventImageSchema>;
export type ProductGallerySourceType = z.infer<typeof productGallerySourceTypeSchema>;
export type ProductGalleryItem = z.infer<typeof productGalleryItemSchema>;
export type ReorderProductImagesRequest = z.infer<typeof reorderProductImagesRequestSchema>;
export type ProductEvent = z.infer<typeof productEventSchema>;
export type ProductMaleMatingHistoryItem = z.infer<typeof productMaleMatingHistoryItemSchema>;
export type ProductFamilyTreeLink = z.infer<typeof productFamilyTreeLinkSchema>;
export type ProductFamilyTree = z.infer<typeof productFamilyTreeSchema>;
export type ProductPublicClicksQuery = z.infer<typeof productPublicClicksQuerySchema>;
export type ProductPublicClicksSummary = z.infer<typeof productPublicClicksSummarySchema>;
export type ListProductsPublicClicksQuery = z.infer<typeof listProductsPublicClicksQuerySchema>;
export type ProductPublicClicksItem = z.infer<typeof productPublicClicksItemSchema>;
