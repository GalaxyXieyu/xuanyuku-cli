import { z } from 'zod';

import { tenantSubscriptionSchema } from './subscription';
import { subscriptionPricingCatalogSchema } from './subscription-pricing';
import { tenantNameSchema, tenantRoleSchema, tenantSlugSchema } from './tenant';

export const authEmailSchema = z
  .string()
  .trim()
  .email()
  .max(255)
  .transform((email) => email.toLowerCase());
export const authPhoneNumberSchema = z
  .string()
  .trim()
  .regex(/^1\d{10}$/, 'Phone number must be an 11-digit mainland China mobile number.');
export const authAccountSchema = z
  .string()
  .trim()
  .min(4, 'Account must be at least 4 characters.')
  .max(32, 'Account must be at most 32 characters.')
  .regex(
    /^[a-zA-Z][a-zA-Z0-9_-]{2,30}[a-zA-Z0-9]$/,
    'Account must start with a letter, end with a letter or number, and use letters, numbers, underscores, or hyphens only.',
  )
  .transform((value) => value.toLowerCase());
export const authLoginIdentifierSchema = z
  .string()
  .trim()
  .min(1, 'Login identifier is required.')
  .max(255)
  .transform((value) => value.toLowerCase());
export const authCodeSchema = z
  .string()
  .trim()
  .regex(/^\d{6}$/, 'Code must be a 6-digit number.');
// 登录/校验旧密码用：仅限长度，兼容策略收紧前设置的旧密码
export const authPasswordLoginSchema = z
  .string()
  .min(1, 'Password is required.')
  .max(72, 'Password must be at most 72 characters.');
// 注册/改密用：完整复杂度策略
export const authPasswordPolicySchema = z
  .string()
  .min(8, 'Password must be at least 8 characters.')
  .max(72, 'Password must be at most 72 characters.')
  .refine((password) => /[a-zA-Z]/.test(password), 'Password must contain at least one letter.')
  .refine((password) => /\d/.test(password), 'Password must contain at least one digit.')
  .refine((password) => {
    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~`]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    return hasSpecial || (hasUpper && hasLower);
  }, 'Password must contain a special character or both upper and lower case letters.');
export const authPasswordSchema = authPasswordPolicySchema;
export const authWechatIdSchema = z
  .string()
  .trim()
  .min(2, 'WeChat ID must be at least 2 characters.')
  .max(64, 'WeChat ID must be at most 64 characters.')
  .regex(/^[a-zA-Z][-_a-zA-Z0-9]{1,63}$/, 'WeChat ID format is invalid.');
export const authNullableWechatIdSchema = authWechatIdSchema
  .nullable()
  .optional()
  .transform((value) => value ?? null);
export const authNullableAccountSchema = authAccountSchema
  .nullable()
  .optional()
  .transform((value) => value ?? null);
const authAssetUrlSchema = z
  .string()
  .trim()
  .min(1)
  .max(1000)
  .refine(
    (value) => value.startsWith('/') || value.startsWith('http://') || value.startsWith('https://'),
    'Asset URL must be an absolute URL or an absolute path.',
  );

export const authUserSchema = z.object({
  id: z.string().min(1),
  email: z.string().email(),
  account: authNullableAccountSchema,
  name: z.string().nullable(),
  wechatId: authNullableWechatIdSchema,
  isSuperAdmin: z.boolean(),
});

export const requestCodeRequestSchema = z.object({
  email: authEmailSchema,
});

export const requestCodeResponseSchema = z.object({
  ok: z.literal(true),
  expiresAt: z.string().datetime(),
  devCode: authCodeSchema.optional(),
});

export const requestSmsCodePurposeSchema = z.enum(['register', 'login', 'binding', 'replace', 'reset-password']);

export const requestSmsCodeRequestSchema = z.object({
  phoneNumber: authPhoneNumberSchema,
  purpose: requestSmsCodePurposeSchema.default('register'),
});

export const requestSmsCodeResponseSchema = z.object({
  ok: z.literal(true),
  expiresAt: z.string().datetime(),
  devCode: authCodeSchema.optional(),
});

export const verifyCodeRequestSchema = z.object({
  email: authEmailSchema,
  code: authCodeSchema,
  password: authPasswordSchema.optional(),
});

export const verifyCodeResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1).optional(),
  user: authUserSchema,
});

export const passwordLoginRequestSchema = z
  .object({
    account: authAccountSchema.optional(),
    phoneNumber: authPhoneNumberSchema.optional(),
    login: authLoginIdentifierSchema.optional(),
    email: authLoginIdentifierSchema.optional(),
    password: authPasswordLoginSchema,
  })
  .refine(
    (payload) => Boolean(payload.account ?? payload.phoneNumber ?? payload.login ?? payload.email),
    {
      message: 'Login identifier is required.',
      path: ['account'],
    },
  )
  .transform((payload) => ({
    account: payload.account ?? null,
    phoneNumber: payload.phoneNumber ?? null,
    login: payload.phoneNumber ?? payload.account ?? payload.login ?? payload.email ?? '',
    password: payload.password,
  }));

export const passwordLoginResponseSchema = verifyCodeResponseSchema;

export const phoneLoginRequestSchema = z.object({
  phoneNumber: authPhoneNumberSchema,
  code: authCodeSchema,
});

export const phoneLoginResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1).optional(),
  user: authUserSchema,
  tenant: z.object({
    id: z.string().min(1),
    slug: tenantSlugSchema,
    name: tenantNameSchema,
  }),
  isNewUser: z.boolean(),
});

export const authTenantSchema = z.object({
  id: z.string().min(1),
  slug: tenantSlugSchema,
  name: tenantNameSchema,
});

export const weappLoginCodeSchema = z.string().trim().min(1).max(255);
export const weappSessionTokenSchema = z.string().trim().min(1).max(2048);

export const weappLoginRequestSchema = z.object({
  code: weappLoginCodeSchema,
});

export const weappLoginResponseSchema = z.discriminatedUnion('status', [
  z.object({
    status: z.literal('authenticated'),
    accessToken: z.string().min(1),
    refreshToken: z.string().min(1).optional(),
    user: authUserSchema,
    tenant: authTenantSchema,
  }),
  z.object({
    status: z.literal('binding_required'),
    weappSessionToken: weappSessionTokenSchema,
  }),
]);

export const weappBindPhoneLoginRequestSchema = z.object({
  weappSessionToken: weappSessionTokenSchema,
  phoneNumber: authPhoneNumberSchema,
  code: authCodeSchema,
});

export const weappBindPhoneLoginResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1).optional(),
  user: authUserSchema,
  tenant: authTenantSchema,
});

export const weappBindRealtimePhoneLoginRequestSchema = z.object({
  weappSessionToken: weappSessionTokenSchema,
  phoneCode: z.string().trim().min(1).max(255),
});

export const weappBindRealtimePhoneLoginResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1).optional(),
  user: authUserSchema,
  tenant: authTenantSchema,
});

export const weappMigrationCandidateSchema = z.object({
  eligible: z.boolean(),
  reason: z.string().trim().max(120).nullable(),
  sourceTenant: authTenantSchema.nullable(),
});

export const weappMigrationCandidateResponseSchema = z.object({
  candidate: weappMigrationCandidateSchema,
});

export const weappMigratePhoneAccountRequestSchema = z.object({
  phoneNumber: authPhoneNumberSchema,
  code: authCodeSchema,
});

export const weappMigratePhoneAccountResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1).optional(),
  user: authUserSchema,
  tenant: authTenantSchema,
  migratedFromTenant: authTenantSchema,
});

export const accountMergeChoiceSchema = z.enum(['current', 'phone_owner']);
export const accountMergeDecisionSchema = z.enum([
  'phone_available',
  'same_account',
  'auto_merge_keep_current',
  'auto_merge_keep_phone_owner',
  'selection_required',
]);

export const accountMergeDataSummarySchema = z.object({
  hasWorkspace: z.boolean(),
  hasBusinessData: z.boolean(),
  productCount: z.number().int().min(0),
  seriesCount: z.number().int().min(0),
  eventCount: z.number().int().min(0),
  shareCount: z.number().int().min(0),
  subscriptionOrderCount: z.number().int().min(0),
  referralBindingCount: z.number().int().min(0),
  referralRewardCount: z.number().int().min(0),
  hasPresentationConfig: z.boolean(),
  hasBrandingConfig: z.boolean(),
  hasWatermarkConfig: z.boolean(),
});

export const accountMergeAccountSummarySchema = z.object({
  user: authUserSchema,
  tenant: authTenantSchema.nullable(),
  role: tenantRoleSchema.nullable(),
  phoneNumber: authPhoneNumberSchema.nullable(),
  hasPassword: z.boolean(),
  isWeappShadow: z.boolean(),
  dataSummary: accountMergeDataSummarySchema,
});

export const accountMergePreviewRequestSchema = z.object({
  phoneNumber: authPhoneNumberSchema,
});

export const accountMergePreviewResponseSchema = z.object({
  preview: z.object({
    phoneNumber: authPhoneNumberSchema,
    decision: accountMergeDecisionSchema,
    current: accountMergeAccountSummarySchema,
    phoneOwner: accountMergeAccountSummarySchema.nullable(),
  }),
});

export const accountMergeExecuteRequestSchema = z.object({
  phoneNumber: authPhoneNumberSchema,
  code: authCodeSchema,
  oldCode: authCodeSchema.optional(),
  keep: accountMergeChoiceSchema.optional(),
});

export const accountMergeExecuteResponseSchema = z.object({
  accessToken: z.string().min(1),
  user: authUserSchema,
  tenant: authTenantSchema,
  decision: accountMergeDecisionSchema,
  merged: z.boolean(),
  kept: accountMergeChoiceSchema,
});

export const weappRegisterRequestSchema = z.object({
  weappSessionToken: weappSessionTokenSchema,
  tenantName: tenantNameSchema,
  displayName: z
    .string()
    .trim()
    .max(120)
    .nullable()
    .optional()
    .transform((value) => value?.trim() || null),
});

export const weappRegisterResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1).optional(),
  user: authUserSchema,
  tenant: authTenantSchema,
  role: z.enum(['OWNER', 'ADMIN', 'EDITOR', 'VIEWER']),
});

export const meResponseSchema = z.object({
  user: authUserSchema,
  tenantId: z.string().min(1).nullable().optional(),
});

export const meProfileSchema = z.object({
  id: z.string().min(1),
  email: z.string().email(),
  account: authNullableAccountSchema,
  name: z.string().nullable(),
  wechatId: authNullableWechatIdSchema,
  avatarUrl: authAssetUrlSchema.nullable(),
  createdAt: z.string().datetime(),
  passwordUpdatedAt: z.string().datetime().nullable(),
});

export const meProfileResponseSchema = z.object({
  profile: meProfileSchema,
});

export const updateMeProfileRequestSchema = z.object({
  name: z.string().trim().max(120).nullable(),
  wechatId: authNullableWechatIdSchema,
});

export const updateMeProfileResponseSchema = z.object({
  profile: meProfileSchema,
});

export const uploadMyAvatarResponseSchema = z.object({
  profile: meProfileSchema,
});

export const deleteMyAvatarResponseSchema = z.object({
  profile: meProfileSchema,
});

export const updateMyPasswordRequestSchema = z.object({
  currentPassword: authPasswordLoginSchema.optional(),
  newPassword: authPasswordPolicySchema,
  smsCode: authCodeSchema.optional(),
});

export const updateMyPasswordResponseSchema = z.object({
  ok: z.literal(true),
  passwordUpdatedAt: z.string().datetime(),
});

export const securityProfileQuestionSchema = z.string().trim().min(2).max(120);
export const securityProfileAnswerSchema = z.string().trim().min(2).max(120);

export const mySecurityProfileSchema = z.object({
  question: securityProfileQuestionSchema,
  updatedAt: z.string().datetime(),
});

export const mySecurityProfileResponseSchema = z.object({
  profile: mySecurityProfileSchema.nullable(),
});

export const upsertMySecurityProfileRequestSchema = z.object({
  question: securityProfileQuestionSchema,
  answer: securityProfileAnswerSchema,
});

export const upsertMySecurityProfileResponseSchema = z.object({
  ok: z.literal(true),
  updatedAt: z.string().datetime(),
});

export const myPhoneBindingSchema = z.object({
  phoneNumber: authPhoneNumberSchema,
  updatedAt: z.string().datetime(),
});

export const myPhoneBindingResponseSchema = z.object({
  binding: myPhoneBindingSchema.nullable(),
});

export const upsertMyPhoneBindingRequestSchema = z.object({
  phoneNumber: authPhoneNumberSchema,
  code: authCodeSchema,
  oldCode: authCodeSchema.optional(),
});

export const upsertMyPhoneBindingResponseSchema = z.object({
  ok: z.literal(true),
  binding: myPhoneBindingSchema,
});

export const meSubscriptionResponseSchema = z.object({
  subscription: tenantSubscriptionSchema,
  pricingCatalog: subscriptionPricingCatalogSchema,
});

export const createWechatAuthorizeUrlRequestSchema = z.object({
  returnPath: z
    .string()
    .trim()
    .min(1)
    .max(500)
    .refine((value) => value.startsWith('/'), {
      message: 'returnPath must start with /.',
    }),
});

export const createWechatAuthorizeUrlResponseSchema = z.object({
  authorizeUrl: z.string().url(),
  expiresAt: z.string().datetime(),
});

// Registration schemas
export const registerRequestSchema = z.object({
  account: authAccountSchema,
  phoneNumber: authPhoneNumberSchema,
  code: authCodeSchema,
  password: authPasswordSchema,
  wechatId: authNullableWechatIdSchema.optional(),
});

export const registerResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1).optional(),
  user: authUserSchema,
  tenant: z.object({
    id: z.string().min(1),
    slug: tenantSlugSchema,
    name: tenantNameSchema,
  }),
  role: z.enum(['OWNER', 'ADMIN', 'EDITOR', 'VIEWER']),
});

export const refreshTokenRequestSchema = z.object({
  refreshToken: z.string().min(1),
});

export const refreshTokenResponseSchema = z.object({
  accessToken: z.string().min(1),
  refreshToken: z.string().min(1),
});

export const logoutRequestSchema = z.object({
  refreshToken: z.string().min(1).optional(),
}).optional();

export const createApiKeyRequestSchema = z.object({
  name: z.string().trim().min(1).max(120),
  scopes: z.array(z.string()).optional(),
  tenantId: z.string().optional(),
  expiresInSeconds: z
    .number()
    .int()
    .positive()
    .max(365 * 24 * 60 * 60)
    .optional(),
});

export type CreateApiKeyRequest = z.infer<typeof createApiKeyRequestSchema>;

export type RequestCodeRequest = z.infer<typeof requestCodeRequestSchema>;
export type RequestCodeResponse = z.infer<typeof requestCodeResponseSchema>;
export type RequestSmsCodeRequest = z.infer<typeof requestSmsCodeRequestSchema>;
export type RequestSmsCodePurpose = z.infer<typeof requestSmsCodePurposeSchema>;
export type RequestSmsCodeResponse = z.infer<typeof requestSmsCodeResponseSchema>;
export type VerifyCodeRequest = z.infer<typeof verifyCodeRequestSchema>;
export type VerifyCodeResponse = z.infer<typeof verifyCodeResponseSchema>;
export type PasswordLoginRequest = z.infer<typeof passwordLoginRequestSchema>;
export type PasswordLoginResponse = z.infer<typeof passwordLoginResponseSchema>;
export type PhoneLoginRequest = z.infer<typeof phoneLoginRequestSchema>;
export type PhoneLoginResponse = z.infer<typeof phoneLoginResponseSchema>;
export type AuthTenant = z.infer<typeof authTenantSchema>;
export type WeappLoginRequest = z.infer<typeof weappLoginRequestSchema>;
export type WeappLoginResponse = z.infer<typeof weappLoginResponseSchema>;
export type WeappBindPhoneLoginRequest = z.infer<typeof weappBindPhoneLoginRequestSchema>;
export type WeappBindPhoneLoginResponse = z.infer<typeof weappBindPhoneLoginResponseSchema>;
export type WeappBindRealtimePhoneLoginRequest = z.infer<typeof weappBindRealtimePhoneLoginRequestSchema>;
export type WeappBindRealtimePhoneLoginResponse = z.infer<typeof weappBindRealtimePhoneLoginResponseSchema>;
export type WeappMigrationCandidate = z.infer<typeof weappMigrationCandidateSchema>;
export type WeappMigrationCandidateResponse = z.infer<typeof weappMigrationCandidateResponseSchema>;
export type WeappMigratePhoneAccountRequest = z.infer<typeof weappMigratePhoneAccountRequestSchema>;
export type WeappMigratePhoneAccountResponse = z.infer<typeof weappMigratePhoneAccountResponseSchema>;
export type AccountMergeChoice = z.infer<typeof accountMergeChoiceSchema>;
export type AccountMergeDecision = z.infer<typeof accountMergeDecisionSchema>;
export type AccountMergeDataSummary = z.infer<typeof accountMergeDataSummarySchema>;
export type AccountMergeAccountSummary = z.infer<typeof accountMergeAccountSummarySchema>;
export type AccountMergePreviewRequest = z.infer<typeof accountMergePreviewRequestSchema>;
export type AccountMergePreviewResponse = z.infer<typeof accountMergePreviewResponseSchema>;
export type AccountMergeExecuteRequest = z.infer<typeof accountMergeExecuteRequestSchema>;
export type AccountMergeExecuteResponse = z.infer<typeof accountMergeExecuteResponseSchema>;
export type WeappRegisterRequest = z.infer<typeof weappRegisterRequestSchema>;
export type WeappRegisterResponse = z.infer<typeof weappRegisterResponseSchema>;
export type AuthUser = z.infer<typeof authUserSchema>;
export type MeResponse = z.infer<typeof meResponseSchema>;
export type MeProfile = z.infer<typeof meProfileSchema>;
export type MeProfileResponse = z.infer<typeof meProfileResponseSchema>;
export type UpdateMeProfileRequest = z.infer<typeof updateMeProfileRequestSchema>;
export type UpdateMeProfileResponse = z.infer<typeof updateMeProfileResponseSchema>;
export type UploadMyAvatarResponse = z.infer<typeof uploadMyAvatarResponseSchema>;
export type DeleteMyAvatarResponse = z.infer<typeof deleteMyAvatarResponseSchema>;
export type UpdateMyPasswordRequest = z.infer<typeof updateMyPasswordRequestSchema>;
export type UpdateMyPasswordResponse = z.infer<typeof updateMyPasswordResponseSchema>;
export type MySecurityProfile = z.infer<typeof mySecurityProfileSchema>;
export type MySecurityProfileResponse = z.infer<typeof mySecurityProfileResponseSchema>;
export type UpsertMySecurityProfileRequest = z.infer<typeof upsertMySecurityProfileRequestSchema>;
export type UpsertMySecurityProfileResponse = z.infer<typeof upsertMySecurityProfileResponseSchema>;
export type MyPhoneBinding = z.infer<typeof myPhoneBindingSchema>;
export type MyPhoneBindingResponse = z.infer<typeof myPhoneBindingResponseSchema>;
export type UpsertMyPhoneBindingRequest = z.infer<typeof upsertMyPhoneBindingRequestSchema>;
export type UpsertMyPhoneBindingResponse = z.infer<typeof upsertMyPhoneBindingResponseSchema>;
export type MeSubscriptionResponse = z.infer<typeof meSubscriptionResponseSchema>;
export type CreateWechatAuthorizeUrlRequest = z.infer<typeof createWechatAuthorizeUrlRequestSchema>;
export type CreateWechatAuthorizeUrlResponse = z.infer<
  typeof createWechatAuthorizeUrlResponseSchema
>;
export type RegisterRequest = z.infer<typeof registerRequestSchema>;
export type RegisterResponse = z.infer<typeof registerResponseSchema>;
export type RefreshTokenRequest = z.infer<typeof refreshTokenRequestSchema>;
export type RefreshTokenResponse = z.infer<typeof refreshTokenResponseSchema>;
export type LogoutRequest = z.infer<typeof logoutRequestSchema>;
