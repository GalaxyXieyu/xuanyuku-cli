import { type PlatformBrandingConfig } from './branding';
export declare function getPlatformBrandingApiBaseUrl(): string;
export declare function fetchPlatformBrandingServerConfig(fetchImpl?: typeof fetch): Promise<PlatformBrandingConfig>;
