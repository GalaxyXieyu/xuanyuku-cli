import { z } from 'zod';

// ========== T398-B: 引用参考项 ==========
export const aiChatRefItemSchema = z.object({
  id: z.string(), // 参考唯一标识（如 chunk ID）
  title: z.string(), // 参考标题（如"《龟病图说》/ 厌食症"）
  source: z.string(), // 来源（如"龟病图说"）
  excerpt: z.string(), // 摘录内容
  url: z.string().optional(), // 可选链接
});
export type AiChatRefItem = z.infer<typeof aiChatRefItemSchema>;

// ========== Stream 协议 ==========
export const aiChatStreamChunkSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('start'),
    requestId: z.string(),
    conversationId: z.string(),
    userMessageId: z.string(),
    assistantMessageId: z.string(),
    pointsDeducted: z.number().int(),
    remainingBalance: z.number().int(),
    modelKey: z.string(),
  }),
  z.object({
    type: z.literal('token'),
    content: z.string(),
  }),
  z.object({
    type: z.literal('reasoning'),
    content: z.string(),
  }),
  z.object({
    type: z.literal('ping'),
    timestamp: z.number().int(),
  }),
  z.object({
    type: z.literal('done'),
    finishReason: z.enum(['stop', 'length']),
    inputTokens: z.number().int().nullable(),
    outputTokens: z.number().int().nullable(),
    reasoningTokens: z.number().int().nullable().optional(),
    remainingBalance: z.number().int(),
    suggestions: z.array(z.string()).max(5).optional(), // T398-B: 动态追问建议
    references: z.array(aiChatRefItemSchema).optional(), // T398-B: 参考资料清单
  }),
  z.object({
    type: z.literal('error'),
    code: z.string(),
    message: z.string(),
    refunded: z.boolean(),
    remainingBalance: z.number().int().nullable(),
  }),
]);
export type AiChatStreamChunk = z.infer<typeof aiChatStreamChunkSchema>;

// ========== Start 请求 ==========
export const aiChatStartRequestSchema = z.object({
  requestId: z.string().min(8).max(64),
  // 首条消息无会话时前端发 null；.nullish() 同时接受 string / null / undefined，
  // 避免「Expected string, received null」400(T398-B 多轮回归)。
  conversationId: z.string().nullish(),
  prompt: z.string().min(1).max(2000),
  persona: z.string().max(40).nullable().optional(),
  scenario: z.string().max(40).nullable().optional(),
  stream: z.boolean().default(true),
  modelKey: z.string().max(40).optional(),
}).strict();
export type AiChatStartRequest = z.infer<typeof aiChatStartRequestSchema>;

// ========== 非流式响应（D10 降级） ==========
export const aiChatNonStreamResponseSchema = z.object({
  requestId: z.string(),
  conversationId: z.string(),
  userMessageId: z.string(),
  assistantMessageId: z.string(),
  content: z.string(),
  reasoning: z.string().nullable().optional(),
  finishReason: z.enum(['stop', 'length']),
  inputTokens: z.number().int().nullable(),
  outputTokens: z.number().int().nullable(),
  pointsDeducted: z.number().int(),
  remainingBalance: z.number().int(),
  modelKey: z.string(),
  // T402-B: 非流式响应也携带动态追问 / 参考资料，供不支持 chunked 的客户端使用。
  suggestions: z.array(z.string()).max(5).optional(),
  references: z.array(aiChatRefItemSchema).optional(),
});
export type AiChatNonStreamResponse = z.infer<typeof aiChatNonStreamResponseSchema>;

// ========== Conversation / Message 列表 ==========
export const aiChatConversationDtoSchema = z.object({
  id: z.string(),
  title: z.string().nullable(),
  persona: z.string().nullable(),
  scenario: z.string().nullable().optional(),
  lastMessageAt: z.string().nullable(),    // ISO
  createdAt: z.string(),
});
export type AiChatConversationDto = z.infer<typeof aiChatConversationDtoSchema>;

export const aiChatListConversationsQuerySchema = z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(50).default(20),
  scenario: z.string().max(40).optional(),
});

export const aiChatListConversationsResponseSchema = z.object({
  items: z.array(aiChatConversationDtoSchema),
  nextCursor: z.string().nullable(),
});
export type AiChatListConversationsResponse = z.infer<typeof aiChatListConversationsResponseSchema>;

export const aiChatMessageDtoSchema = z.object({
  id: z.string(),
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string(),
  reasoning: z.string().nullable().optional(),
  references: z.array(aiChatRefItemSchema).optional(), // T425-W3: 引用来源（从 metadata 回填）
  finishReason: z.string().nullable(),
  createdAt: z.string(),
});
export type AiChatMessageDto = z.infer<typeof aiChatMessageDtoSchema>;

export const aiChatListMessagesQuerySchema = z.object({
  cursor: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
});

export const aiChatListMessagesResponseSchema = z.object({
  items: z.array(aiChatMessageDtoSchema),
  nextCursor: z.string().nullable(),
});
export type AiChatListMessagesResponse = z.infer<typeof aiChatListMessagesResponseSchema>;

// ========== Upload Image Response (T386) ==========
export const aiChatUploadImageResponseSchema = z.object({
  url: z.string().url(),
});
export type AiChatUploadImageResponse = z.infer<typeof aiChatUploadImageResponseSchema>;
