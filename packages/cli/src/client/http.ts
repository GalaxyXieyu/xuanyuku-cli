import { ApiError } from './errors';

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  token?: string;
  apiKey?: string;
  json?: unknown;
  formData?: FormData;
  query?: Record<string, string | number | boolean | undefined>;
  headers?: Record<string, string>;
}

export interface ApiResponse {
  status: number;
  body: unknown;
}

export interface BinaryResponse {
  status: number;
  buffer: Buffer;
  headers: Headers;
}

/**
 * Core HTTP wrapper using Node.js native fetch
 * Handles request signing, response parsing, and error normalization
 */
export async function request(apiBase: string, opts: RequestOptions): Promise<ApiResponse> {
  // Build URL with query parameters
  let url = `${apiBase}${opts.path}`;
  if (opts.query) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(opts.query)) {
      if (value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    }
    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  // Build headers
  const headers: Record<string, string> = { ...opts.headers };
  if (opts.token) {
    headers['Authorization'] = `Bearer ${opts.token}`;
  }
  if (opts.apiKey) {
    headers['x-api-key'] = opts.apiKey;
  }

  // Handle request body
  let body: BodyInit | undefined;
  if (opts.json) {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(opts.json);
  } else if (opts.formData) {
    // Do NOT set Content-Type for FormData - fetch will set it with correct boundary
    body = opts.formData;
  }

  // Perform request
  const res = await fetch(url, {
    method: opts.method,
    headers,
    body,
  });

  // Parse response body
  let responseBody: unknown;
  const contentType = res.headers.get('content-type');

  if (contentType?.includes('application/json')) {
    try {
      responseBody = await res.json();
    } catch {
      responseBody = await res.text();
    }
  } else {
    responseBody = await res.text();
  }

  // Handle error responses
  if (!res.ok) {
    const errorCode = (responseBody as Record<string, unknown>)?.errorCode as string | undefined;
    const message = (responseBody as Record<string, unknown>)?.message as string | undefined;

    throw new ApiError(res.status, errorCode, message, responseBody);
  }

  return {
    status: res.status,
    body: responseBody,
  };
}

/**
 * Binary download wrapper - fetches and returns raw binary data
 * Follows redirects but does NOT forward Authorization header on cross-origin redirects (prevent token leakage)
 */
export async function requestBinary(apiBase: string, opts: RequestOptions): Promise<BinaryResponse> {
  // Build URL with query parameters (same as request())
  let url = `${apiBase}${opts.path}`;
  if (opts.query) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(opts.query)) {
      if (value !== undefined && value !== null) {
        params.append(key, String(value));
      }
    }
    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  // Build headers
  const headers: Record<string, string> = { ...opts.headers };
  if (opts.token) {
    headers['Authorization'] = `Bearer ${opts.token}`;
  }
  if (opts.apiKey) {
    headers['x-api-key'] = opts.apiKey;
  }

  // Perform request with manual redirect handling to avoid leaking token on cross-origin
  const res = await fetch(url, {
    method: opts.method,
    headers,
    redirect: 'manual', // Handle redirects manually
  });

  // Handle redirects without Authorization header for cross-origin requests
  if (res.status >= 300 && res.status < 400) {
    const location = res.headers.get('location');
    if (location) {
      const redirectUrl = new URL(location, url);
      // Only forward Authorization if redirect stays on same origin
      const isSameOrigin = new URL(url).origin === redirectUrl.origin;
      const redirectHeaders: Record<string, string> = { ...opts.headers };
      if (isSameOrigin && opts.token) {
        redirectHeaders['Authorization'] = `Bearer ${opts.token}`;
      }
      if (isSameOrigin && opts.apiKey) {
        redirectHeaders['x-api-key'] = opts.apiKey;
      }

      const redirectRes = await fetch(location, {
        method: opts.method,
        headers: redirectHeaders,
      });

      if (!redirectRes.ok) {
        const errorBody = await redirectRes.text();
        throw new ApiError(redirectRes.status, undefined, errorBody, errorBody);
      }

      const buffer = Buffer.from(await redirectRes.arrayBuffer());
      return {
        status: redirectRes.status,
        buffer,
        headers: redirectRes.headers,
      };
    }
  }

  // Parse error responses
  if (!res.ok) {
    const errorBody = await res.text();
    throw new ApiError(res.status, undefined, errorBody, errorBody);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  return {
    status: res.status,
    buffer,
    headers: res.headers,
  };
}
