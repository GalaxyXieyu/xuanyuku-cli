import { ErrorCode } from '@xuanyuku/shared';

export class ApiError extends Error {
  constructor(
    public httpStatus: number,
    public errorCode?: ErrorCode | string,
    public message: string = '',
    public rawBody?: unknown,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Convert known error codes to user-friendly Chinese messages
 */
export function describeError(err: unknown): string {
  if (!(err instanceof ApiError)) {
    return err instanceof Error ? err.message : String(err);
  }

  // Handle known business error codes
  switch (err.errorCode) {
    case 'TENANT_SUBSCRIPTION_INACTIVE':
      return '该租户订阅未激活/已过期，无法写入。请确认订阅状态后重试。';

    case 'TENANT_SUBSCRIPTION_QUOTA_EXCEEDED':
    case 'QUOTA_EXCEEDED':
      return '已达配额上限，本次操作被拒绝（不自动重试）。';

    case 'AUTH_ACCOUNT_LOCKED':
      // 后端 message 通常带剩余锁定分钟数，优先透出
      return err.message
        ? `账户已被锁定：${err.message}。请勿重复尝试，等待锁定解除或改用 API Key。`
        : '账户因连续多次登录失败被锁定（默认 15 分钟）。请勿重复尝试，等待解除或改用 API Key。';

    default:
      // For 409 errors, try to use the error message from the server
      if (err.httpStatus === 409 && err.message) {
        return err.message;
      }
      break;
  }

  // 429 限流：读 Retry-After（若有），明确提示不自动重试
  if (err.httpStatus === 429) {
    const retryAfter =
      typeof (err.rawBody as Record<string, unknown>)?.retryAfter === 'number'
        ? (err.rawBody as Record<string, number>).retryAfter
        : undefined;
    const seconds = retryAfter ?? 60;
    return `触发接口限流（HTTP 429），请 ${seconds} 秒后再试。已停止自动重试以免加重限流。`;
  }

  // Fallback to original message or HTTP status description
  if (err.message) {
    return err.message;
  }

  switch (err.httpStatus) {
    case 400:
      return '请求参数错误';
    case 401:
      return '登录已过期，请重新 `xuanyuku login`';
    case 403:
      return '没有权限执行此操作';
    case 404:
      return '资源不存在';
    case 409:
      return '操作冲突，请检查数据状态后重试';
    case 500:
      return '服务器错误，请稍后重试';
    default:
      return `请求失败 (HTTP ${err.httpStatus})`;
  }
}
