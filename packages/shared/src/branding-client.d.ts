import { type PlatformBrandingConfig, type ResolvedTenantBranding } from './branding';
type SchemaParser<T> = {
    parse(input: unknown): T;
};
type BrandingApiRequest = <TResponse>(path: string, options: {
    auth: false;
    responseSchema: SchemaParser<TResponse>;
}) => Promise<TResponse>;
export declare function buildDefaultTenantBranding(tenantSlug: string): ResolvedTenantBranding;
export declare function loadPlatformBranding(request: BrandingApiRequest): Promise<PlatformBrandingConfig>;
export declare function loadResolvedTenantBranding(tenantSlug: string, request: BrandingApiRequest): Promise<ResolvedTenantBranding>;
export {};
