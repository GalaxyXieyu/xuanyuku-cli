import { z } from 'zod';
export declare const aiChatRefItemSchema: z.ZodObject<{
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
}>;
export type AiChatRefItem = z.infer<typeof aiChatRefItemSchema>;
export declare const aiChatStreamChunkSchema: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
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
export type AiChatStreamChunk = z.infer<typeof aiChatStreamChunkSchema>;
export declare const aiChatStartRequestSchema: z.ZodObject<{
    requestId: z.ZodString;
    conversationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    prompt: z.ZodString;
    persona: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    scenario: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stream: z.ZodDefault<z.ZodBoolean>;
    modelKey: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    requestId: string;
    prompt: string;
    stream: boolean;
    conversationId?: string | null | undefined;
    modelKey?: string | undefined;
    persona?: string | null | undefined;
    scenario?: string | null | undefined;
}, {
    requestId: string;
    prompt: string;
    conversationId?: string | null | undefined;
    modelKey?: string | undefined;
    persona?: string | null | undefined;
    scenario?: string | null | undefined;
    stream?: boolean | undefined;
}>;
export type AiChatStartRequest = z.infer<typeof aiChatStartRequestSchema>;
export declare const aiChatNonStreamResponseSchema: z.ZodObject<{
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
    suggestions?: string[] | undefined;
    references?: {
        id: string;
        source: string;
        title: string;
        excerpt: string;
        url?: string | undefined;
    }[] | undefined;
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
    suggestions?: string[] | undefined;
    references?: {
        id: string;
        source: string;
        title: string;
        excerpt: string;
        url?: string | undefined;
    }[] | undefined;
}>;
export type AiChatNonStreamResponse = z.infer<typeof aiChatNonStreamResponseSchema>;
export declare const aiChatConversationDtoSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodNullable<z.ZodString>;
    persona: z.ZodNullable<z.ZodString>;
    scenario: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastMessageAt: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string | null;
    createdAt: string;
    persona: string | null;
    lastMessageAt: string | null;
    scenario?: string | null | undefined;
}, {
    id: string;
    title: string | null;
    createdAt: string;
    persona: string | null;
    lastMessageAt: string | null;
    scenario?: string | null | undefined;
}>;
export type AiChatConversationDto = z.infer<typeof aiChatConversationDtoSchema>;
export declare const aiChatListConversationsQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
    scenario: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    cursor?: string | undefined;
    scenario?: string | undefined;
}, {
    limit?: number | undefined;
    cursor?: string | undefined;
    scenario?: string | undefined;
}>;
export declare const aiChatListConversationsResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodNullable<z.ZodString>;
        persona: z.ZodNullable<z.ZodString>;
        scenario: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        lastMessageAt: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        title: string | null;
        createdAt: string;
        persona: string | null;
        lastMessageAt: string | null;
        scenario?: string | null | undefined;
    }, {
        id: string;
        title: string | null;
        createdAt: string;
        persona: string | null;
        lastMessageAt: string | null;
        scenario?: string | null | undefined;
    }>, "many">;
    nextCursor: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        title: string | null;
        createdAt: string;
        persona: string | null;
        lastMessageAt: string | null;
        scenario?: string | null | undefined;
    }[];
    nextCursor: string | null;
}, {
    items: {
        id: string;
        title: string | null;
        createdAt: string;
        persona: string | null;
        lastMessageAt: string | null;
        scenario?: string | null | undefined;
    }[];
    nextCursor: string | null;
}>;
export type AiChatListConversationsResponse = z.infer<typeof aiChatListConversationsResponseSchema>;
export declare const aiChatMessageDtoSchema: z.ZodObject<{
    id: z.ZodString;
    role: z.ZodEnum<["user", "assistant", "system"]>;
    content: z.ZodString;
    reasoning: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    finishReason: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: string;
    content: string;
    role: "user" | "assistant" | "system";
    finishReason: string | null;
    reasoning?: string | null | undefined;
    references?: {
        id: string;
        source: string;
        title: string;
        excerpt: string;
        url?: string | undefined;
    }[] | undefined;
}, {
    id: string;
    createdAt: string;
    content: string;
    role: "user" | "assistant" | "system";
    finishReason: string | null;
    reasoning?: string | null | undefined;
    references?: {
        id: string;
        source: string;
        title: string;
        excerpt: string;
        url?: string | undefined;
    }[] | undefined;
}>;
export type AiChatMessageDto = z.infer<typeof aiChatMessageDtoSchema>;
export declare const aiChatListMessagesQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    cursor?: string | undefined;
}, {
    limit?: number | undefined;
    cursor?: string | undefined;
}>;
export declare const aiChatListMessagesResponseSchema: z.ZodObject<{
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        role: z.ZodEnum<["user", "assistant", "system"]>;
        content: z.ZodString;
        reasoning: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
        finishReason: z.ZodNullable<z.ZodString>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        createdAt: string;
        content: string;
        role: "user" | "assistant" | "system";
        finishReason: string | null;
        reasoning?: string | null | undefined;
        references?: {
            id: string;
            source: string;
            title: string;
            excerpt: string;
            url?: string | undefined;
        }[] | undefined;
    }, {
        id: string;
        createdAt: string;
        content: string;
        role: "user" | "assistant" | "system";
        finishReason: string | null;
        reasoning?: string | null | undefined;
        references?: {
            id: string;
            source: string;
            title: string;
            excerpt: string;
            url?: string | undefined;
        }[] | undefined;
    }>, "many">;
    nextCursor: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    items: {
        id: string;
        createdAt: string;
        content: string;
        role: "user" | "assistant" | "system";
        finishReason: string | null;
        reasoning?: string | null | undefined;
        references?: {
            id: string;
            source: string;
            title: string;
            excerpt: string;
            url?: string | undefined;
        }[] | undefined;
    }[];
    nextCursor: string | null;
}, {
    items: {
        id: string;
        createdAt: string;
        content: string;
        role: "user" | "assistant" | "system";
        finishReason: string | null;
        reasoning?: string | null | undefined;
        references?: {
            id: string;
            source: string;
            title: string;
            excerpt: string;
            url?: string | undefined;
        }[] | undefined;
    }[];
    nextCursor: string | null;
}>;
export type AiChatListMessagesResponse = z.infer<typeof aiChatListMessagesResponseSchema>;
export declare const aiChatUploadImageResponseSchema: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export type AiChatUploadImageResponse = z.infer<typeof aiChatUploadImageResponseSchema>;
