import { createShareRequestSchema, createShareResponseSchema } from '@xuanyuku/shared';
import { AuthedContext } from './context';
import type { z } from 'zod';

export async function createShare(
  ctx: AuthedContext,
  payload: Omit<z.infer<typeof createShareRequestSchema>, 'resourceId'> & { resourceId?: string }
): Promise<z.infer<typeof createShareResponseSchema>> {
  // Default resourceId to current tenant ID
  const tenantId = ctx.getTenantId();
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
