import { z } from 'zod';
import { createApiKeyRequestSchema } from '@xuanyuku/shared';
import { AuthedContext } from './context';

// 后端 /me/api-keys 的响应目前没有共享 schema，这里按控制器返回结构本地约束。
const apiKeySummarySchema = z.object({
  id: z.string(),
  name: z.string(),
  keyPrefix: z.string(),
  scopes: z.array(z.string()).nullable().optional(),
  tenantId: z.string().nullable().optional(),
  lastUsedAt: z.string().nullable().optional(),
  expiresAt: z.string().nullable().optional(),
  createdAt: z.string().nullable().optional(),
});

const listApiKeysResponseSchema = z.object({
  keys: z.array(apiKeySummarySchema),
});

const createApiKeyResponseSchema = z.object({
  id: z.string(),
  apiKey: z.string(), // 明文 key，仅创建时返回一次
  keyPrefix: z.string(),
  name: z.string(),
});

export type ApiKeySummary = z.infer<typeof apiKeySummarySchema>;
export type CreateApiKeyResult = z.infer<typeof createApiKeyResponseSchema>;

export async function createApiKey(
  ctx: AuthedContext,
  payload: z.infer<typeof createApiKeyRequestSchema>
): Promise<CreateApiKeyResult> {
  const body = createApiKeyRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/me/api-keys',
    json: body,
  });

  return createApiKeyResponseSchema.parse(response.body);
}

export async function listApiKeys(ctx: AuthedContext): Promise<ApiKeySummary[]> {
  const response = await ctx.request({
    method: 'GET',
    path: '/me/api-keys',
  });

  return listApiKeysResponseSchema.parse(response.body).keys;
}

export async function revokeApiKey(ctx: AuthedContext, id: string): Promise<void> {
  await ctx.request({
    method: 'DELETE',
    path: `/me/api-keys/${id}`,
  });
}
