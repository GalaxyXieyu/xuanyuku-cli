import { z } from 'zod';
export declare const storageObjectKeySchema: z.ZodEffects<z.ZodString, string, string>;
export declare const storagePutObjectRequestSchema: z.ZodObject<{
    key: z.ZodEffects<z.ZodString, string, string>;
    contentType: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    key: string;
    contentType?: string | undefined;
}, {
    key: string;
    contentType?: string | undefined;
}>;
export declare const storagePutObjectResponseSchema: z.ZodObject<{
    key: z.ZodEffects<z.ZodString, string, string>;
    url: z.ZodString;
    contentType: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    url: string;
    key: string;
    contentType: string | null;
}, {
    url: string;
    key: string;
    contentType: string | null;
}>;
export declare const storageGetSignedUrlResponseSchema: z.ZodObject<{
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
}, {
    url: string;
}>;
export type StoragePutObjectRequest = z.infer<typeof storagePutObjectRequestSchema>;
export type StoragePutObjectResponse = z.infer<typeof storagePutObjectResponseSchema>;
export type StorageGetSignedUrlResponse = z.infer<typeof storageGetSignedUrlResponseSchema>;
