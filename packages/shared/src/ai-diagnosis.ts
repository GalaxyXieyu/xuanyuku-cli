import { z } from 'zod';
import { aiChatStreamChunkSchema } from './ai-chat';

/**
 * 诊断请求 schema。
 *
 * Wave 1：service 仅读 prompt + requestId + modelKey + stream，忽略 persona + imageUrls。
 * Wave 2：imageUrls 将由 service 透传给 GraphRAG 的多模态检索（schema 占位提前）。
 * Wave 3：persona 可由 caller 指定（如 'turtle_breeder'），驱动不同 system prompt 模板。
 */
export const aiDiagnosisStartRequestSchema = z.object({
  requestId: z.string().uuid(),
  prompt: z.string().min(1).max(4000),
  stream: z.boolean().default(true),
  modelKey: z.literal('diagnosis-graphrag').default('diagnosis-graphrag'),
  imageUrls: z.array(z.string().url()).max(9).optional(),  // Wave 2 复用；Wave 1 service 不读取
  persona: z.string().min(1).max(40).optional(),           // Wave 3 复用；Wave 1 service hardcode 系统 prompt
});

export type AiDiagnosisStartRequest = z.infer<typeof aiDiagnosisStartRequestSchema>;

/**
 * 流式 chunk schema：直接复用 ai-chat 的 union（start / token / reasoning / ping / done / error）。
 * Wave 1 不新增 type='evidence' branch —— evidence 写 metadata.evidence，Wave 3 UI 接入时再扩 schema。
 */
export const aiDiagnosisStreamChunkSchema = aiChatStreamChunkSchema;
export type AiDiagnosisStreamChunk = z.infer<typeof aiDiagnosisStreamChunkSchema>;

/**
 * 非流式响应（用于将来非流式调用 / idempotent replay return）。
 */
export const aiDiagnosisNonStreamResponseSchema = z.object({
  requestId: z.string().uuid(),
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
  evidenceSources: z.array(z.string()).default([]),   // 暴露 sources 给 caller，但不暴露完整 chunks
});

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
  sources: string[];           // 去重的 'book / section' 字符串数组
  retrievedAt: string;         // ISOString
};
