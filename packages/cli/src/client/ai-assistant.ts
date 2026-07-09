import {
  aiProductIntakeParseRequestSchema,
  aiProductIntakeParseResponseSchema,
  aiProductIntakeSubmitRequestSchema,
  aiProductIntakeSubmitResponseSchema,
} from '@xuanyuku/shared';
import { AuthedContext } from './context';
import { uploadProductImage } from './products';
import type { z } from 'zod';

export async function parseIntake(
  ctx: AuthedContext,
  payload: z.infer<typeof aiProductIntakeParseRequestSchema>
): Promise<z.infer<typeof aiProductIntakeParseResponseSchema>> {
  const body = aiProductIntakeParseRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/ai-assistant/product-intake/parse',
    json: body,
  });

  return aiProductIntakeParseResponseSchema.parse(response.body);
}

export async function submitIntake(
  ctx: AuthedContext,
  payload: z.infer<typeof aiProductIntakeSubmitRequestSchema>
): Promise<z.infer<typeof aiProductIntakeSubmitResponseSchema>> {
  const body = aiProductIntakeSubmitRequestSchema.parse(payload);

  const response = await ctx.request({
    method: 'POST',
    path: '/ai-assistant/product-intake/submit',
    json: body,
  });

  return aiProductIntakeSubmitResponseSchema.parse(response.body);
}

export async function submitIntakeWithImages(
  ctx: AuthedContext,
  payload: z.infer<typeof aiProductIntakeSubmitRequestSchema>,
  imagePaths: string[]
): Promise<{ productId: string; uploadedCount: number }> {
  // Validate image count matches
  if (payload.imageCount && imagePaths.length !== payload.imageCount) {
    throw new Error(
      `图片数量不匹配: 声明 ${payload.imageCount} 张，实际 ${imagePaths.length} 张`
    );
  }

  // Submit intake to create product
  const submitResult = await submitIntake(ctx, payload);

  if (!submitResult.productId) {
    throw new Error('建档失败: 未返回产品 ID');
  }

  // Upload each image
  let uploadedCount = 0;
  for (const imagePath of imagePaths) {
    try {
      await uploadProductImage(ctx, submitResult.productId, imagePath);
      uploadedCount++;
    } catch (err) {
      console.error(`图片上传失败 (${imagePath}): ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  return {
    productId: submitResult.productId,
    uploadedCount,
  };
}
