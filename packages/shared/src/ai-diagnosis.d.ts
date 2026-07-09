import { z } from 'zod';
/**
 * 诊断请求 schema。
 *
 * Wave 1：service 仅读 prompt + requestId + modelKey + stream，忽略 persona + imageUrls。
 * Wave 2：imageUrls 将由 service 透传给 GraphRAG 的多模态检索（schema 占位提前）。
 * Wave 3：persona 可由 caller 指定（如 'turtle_breeder'），驱动不同 system prompt 模板。
 */
export declare const aiDiagnosisStartRequestSchema: z.ZodObject<{
    requestId: z.ZodString;
    prompt: z.ZodString;
    stream: z.ZodDefault<z.ZodBoolean>;
    modelKey: z.ZodDefault<z.ZodLiteral<"diagnosis-graphrag">>;
    imageUrls: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    persona: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    requestId: string;
    modelKey: "diagnosis-graphrag";
    prompt: string;
    stream: boolean;
    imageUrls?: string[] | undefined;
    persona?: string | undefined;
}, {
    requestId: string;
    prompt: string;
    imageUrls?: string[] | undefined;
    modelKey?: "diagnosis-graphrag" | undefined;
    persona?: string | undefined;
    stream?: boolean | undefined;
}>;
export type AiDiagnosisStartRequest = z.infer<typeof aiDiagnosisStartRequestSchema>;
/**
 * 流式 chunk schema：直接复用 ai-chat 的 union（start / token / reasoning / ping / done / error）。
 * Wave 1 不新增 type='evidence' branch —— evidence 写 metadata.evidence，Wave 3 UI 接入时再扩 schema。
 */
export declare const aiDiagnosisStreamChunkSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"start">;
    requestId: z.ZodString;
    conversationId: z.ZodString;
    userMessageId: z.ZodString;
    assistantMessageId: z.ZodString;
    pointsDeducted: z.ZodNumber;
    remainingBalance: z.ZodNumber;
    modelKey: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "start";
    requestId: string;
    conversationId: string;
    userMessageId: string;
    assistantMessageId: string;
    pointsDeducted: number;
    remainingBalance: number;
    modelKey: string;
}, {
    type: "start";
    requestId: string;
    conversationId: string;
    userMessageId: string;
    assistantMessageId: string;
    pointsDeducted: number;
    remainingBalance: number;
    modelKey: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"token">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "token";
    content: string;
}, {
    type: "token";
    content: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"reasoning">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "reasoning";
    content: string;
}, {
    type: "reasoning";
    content: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"ping">;
    timestamp: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "ping";
    timestamp: number;
}, {
    type: "ping";
    timestamp: number;
}>, z.ZodObject<{
    type: z.ZodLiteral<"done">;
    finishReason: z.ZodEnum<["stop", "length"]>;
    inputTokens: z.ZodNullable<z.ZodNumber>;
    outputTokens: z.ZodNullable<z.ZodNumber>;
    reasoningTokens: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    remainingBalance: z.ZodNumber;
    suggestions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    references: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        source: z.ZodString;
        excerpt: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        source: string;
        title: string;
        excerpt: string;
        url?: string | undefined;
    }, {
        id: string;
        source: string;
        title: string;
        excerpt: string;
        url?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    type: "done";
    remainingBalance: number;
    finishReason: "length" | "stop";
    inputTokens: number | null;
    outputTokens: number | null;
    reasoningTokens?: number | null | undefined;
    suggestions?: string[] | undefined;
    references?: {
        id: string;
        source: string;
        title: string;
        excerpt: string;
        url?: string | undefined;
    }[] | undefined;
}, {
    type: "done";
    remainingBalance: number;
    finishReason: "length" | "stop";
    inputTokens: number | null;
    outputTokens: number | null;
    reasoningTokens?: number | null | undefined;
    suggestions?: string[] | undefined;
    references?: {
        id: string;
        source: string;
        title: string;
        excerpt: string;
        url?: string | undefined;
    }[] | undefined;
}>, z.ZodObject<{
    type: z.ZodLiteral<"error">;
    code: z.ZodString;
    message: z.ZodString;
    refunded: z.ZodBoolean;
    remainingBalance: z.ZodNullable<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    message: string;
    code: string;
    type: "error";
    remainingBalance: number | null;
    refunded: boolean;
}, {
    message: string;
    code: string;
    type: "error";
    remainingBalance: number | null;
    refunded: boolean;
}>]>;
export type AiDiagnosisStreamChunk = z.infer<typeof aiDiagnosisStreamChunkSchema>;
/**
 * 非流式响应（用于将来非流式调用 / idempotent replay return）。
 */
export declare const aiDiagnosisNonStreamResponseSchema: z.ZodObject<{
    requestId: z.ZodString;
    conversationId: z.ZodString;
    userMessageId: z.ZodString;
    assistantMessageId: z.ZodString;
    content: z.ZodString;
    reasoning: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    finishReason: z.ZodEnum<["stop", "length"]>;
    inputTokens: z.ZodNullable<z.ZodNumber>;
    outputTokens: z.ZodNullable<z.ZodNumber>;
    pointsDeducted: z.ZodNumber;
    remainingBalance: z.ZodNumber;
    modelKey: z.ZodString;
    evidenceSources: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    content: string;
    requestId: string;
    conversationId: string;
    userMessageId: string;
    assistantMessageId: string;
    pointsDeducted: number;
    remainingBalance: number;
    modelKey: string;
    finishReason: "length" | "stop";
    inputTokens: number | null;
    outputTokens: number | null;
    evidenceSources: string[];
    reasoning?: string | null | undefined;
}, {
    content: string;
    requestId: string;
    conversationId: string;
    userMessageId: string;
    assistantMessageId: string;
    pointsDeducted: number;
    remainingBalance: number;
    modelKey: string;
    finishReason: "length" | "stop";
    inputTokens: number | null;
    outputTokens: number | null;
    reasoning?: string | null | undefined;
    evidenceSources?: string[] | undefined;
}>;
export type AiDiagnosisNonStreamResponse = z.infer<typeof aiDiagnosisNonStreamResponseSchema>;
/**
 * AiMessage.metadata.evidence 持久化结构（service 内部用，未暴露到 message DTO）。
 */
export type EvidencePersistedChunk = {
    chunkId: string;
    book: string;
    section: string;
    excerpt: string;
    score: number;
};
export type EvidencePersisted = {
    chunks: EvidencePersistedChunk[];
    sources: string[];
    retrievedAt: string;
};
