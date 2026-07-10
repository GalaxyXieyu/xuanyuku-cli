import { createShareRequestSchema, createShareResponseSchema } from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

export async function createShare(
  ctx: AuthedContext,
  payload: Omit<z.infer<typeof createShareRequestSchema>, 'resourceId'> & { resourceId?: string }
): Promise<z.infer<typeof createShareResponseSchema>> {
  // API Key profiles may not carry tenant metadata initially. Resolve it from the server before
  // constructing the tenant_feed resource, then persist it for subsequent commands.
  const tenantId = await ctx.resolveTenantId();
  const resourceId = payload.resourceId || tenantId;

  const body = createShareRequestSchema.parse({
    ...payload,
    resourceId,
  });

  const response = await ctx.request({
    method: 'POST',
    path: '/shares',
    json: body,
  });

  return createShareResponseSchema.parse(response.body);
}
