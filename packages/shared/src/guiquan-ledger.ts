import { z } from 'zod';

export const guiquanLedgerMonthKeySchema = z.string().regex(/^\d{4}-\d{2}$/);
export const guiquanLedgerBatchStatusSchema = z.enum(['OPEN', 'PARTIAL', 'SOLD', 'CLOSED']);
export const guiquanLedgerEntryDirectionSchema = z.enum(['INCOME', 'EXPENSE']);
export const guiquanLedgerEntryKindSchema = z.enum(['SALE_TURTLE', 'SALE_OFFSPRING', 'MANUAL_INCOME', 'MANUAL_EXPENSE']);
export const guiquanLedgerEntrySourceSchema = z.enum(['SALE_ALLOCATION', 'LEDGER_ENTRY']);
export const guiquanLedgerQuickEntryKindSchema = z.enum([
  'SALE_TURTLE',
  'SALE_OFFSPRING_BATCH',
  'SALE_OFFSPRING_MANUAL',
  'MANUAL_INCOME',
  'MANUAL_EXPENSE',
]);

const moneySchema = z.preprocess((value) => {
  if (value === '' || value === null || value === undefined) {
    return value;
  }
  if (typeof value === 'string') {
    return Number(value);
  }
  return value;
}, z.number().finite().nonnegative());

const nullableMoneySchema = z.preprocess((value) => {
  if (value === '' || value === null || value === undefined) {
    return null;
  }
  if (typeof value === 'string') {
    return Number(value);
  }
  return value;
}, z.number().finite().nonnegative().nullable());

export const guiquanLedgerSummarySchema = z.object({
  monthKey: guiquanLedgerMonthKeySchema,
  allocationCount: z.number().int().nonnegative(),
  soldQuantity: z.number().int().nonnegative(),
  realizedRevenue: z.number().finite().nonnegative(),
  incomeAmount: z.number().finite().nonnegative(),
  expenseAmount: z.number().finite().nonnegative(),
  netAmount: z.number().finite(),
  ledgerEntryCount: z.number().int().nonnegative(),
  activeBatchCount: z.number().int().nonnegative(),
  remainingQuantity: z.number().int().nonnegative(),
  eggsEventCount30d: z.number().int().nonnegative(),
  matingsEventCount30d: z.number().int().nonnegative(),
  allocationsMissingPriceCount: z.number().int().nonnegative(),
});

export const guiquanLedgerAllocationItemSchema = z.object({
  id: z.string().min(1),
  batchNo: z.string().min(1),
  femaleProductId: z.string().min(1),
  femaleCode: z.string().min(1),
  coverImageUrl: z.string().nullable(),
  quantity: z.number().int().positive(),
  unitPrice: z.number().finite().nonnegative().nullable(),
  amount: z.number().finite().nonnegative().nullable(),
  buyerName: z.string().nullable(),
  channel: z.string().nullable(),
  soldAt: z.string().datetime(),
});

export const guiquanLedgerBatchItemSchema = z.object({
  id: z.string().min(1),
  femaleProductId: z.string().min(1),
  batchNo: z.string().min(1),
  femaleCode: z.string().min(1),
  coverImageUrl: z.string().nullable(),
  status: guiquanLedgerBatchStatusSchema,
  plannedQuantity: z.number().int().positive(),
  soldQuantity: z.number().int().nonnegative(),
  remainingQuantity: z.number().int().nonnegative(),
  priceLow: z.number().finite().nonnegative().nullable(),
  priceHigh: z.number().finite().nonnegative().nullable(),
  eventDateSnapshot: z.string().datetime(),
});

export const guiquanLedgerEntryItemSchema = z.object({
  id: z.string().min(1),
  source: guiquanLedgerEntrySourceSchema,
  direction: guiquanLedgerEntryDirectionSchema,
  kind: guiquanLedgerEntryKindSchema,
  title: z.string().trim().min(1).max(120),
  subjectProductId: z.string().trim().min(1).nullable(),
  subjectCode: z.string().trim().min(1).nullable(),
  coverImageUrl: z.string().nullable(),
  quantity: z.number().int().positive().nullable(),
  unitPrice: z.number().finite().nonnegative().nullable(),
  amount: z.number().finite().nonnegative().nullable(),
  counterpartyName: z.string().trim().min(1).max(120).nullable(),
  note: z.string().trim().min(1).max(5000).nullable(),
  occurredAt: z.string().datetime(),
});

const createSaleTurtleEntryRequestSchema = z.object({
  kind: z.literal('SALE_TURTLE'),
  subjectProductId: z.string().trim().min(1).max(120),
  amount: moneySchema,
  counterpartyName: z.string().trim().max(120).optional(),
  note: z.string().trim().max(5000).optional(),
});

const createSaleOffspringBatchEntryRequestSchema = z.object({
  kind: z.literal('SALE_OFFSPRING_BATCH'),
  subjectProductId: z.string().trim().min(1).max(120),
  saleBatchId: z.string().trim().min(1).max(120),
  quantity: z.coerce.number().int().positive().max(999),
  unitPrice: moneySchema,
  counterpartyName: z.string().trim().max(120).optional(),
  note: z.string().trim().max(5000).optional(),
});

const createSaleOffspringManualEntryRequestSchema = z.object({
  kind: z.literal('SALE_OFFSPRING_MANUAL'),
  subjectProductId: z.string().trim().max(120).optional(),
  subjectLabel: z.string().trim().max(120).optional(),
  quantity: z.coerce.number().int().positive().max(999).optional(),
  unitPrice: nullableMoneySchema.optional(),
  amount: moneySchema,
  counterpartyName: z.string().trim().max(120).optional(),
  note: z.string().trim().max(5000).optional(),
});

const createManualIncomeEntryRequestSchema = z.object({
  kind: z.literal('MANUAL_INCOME'),
  title: z.string().trim().min(1).max(120),
  amount: moneySchema,
  note: z.string().trim().max(5000).optional(),
});

const createManualExpenseEntryRequestSchema = z.object({
  kind: z.literal('MANUAL_EXPENSE'),
  title: z.string().trim().min(1).max(120),
  amount: moneySchema,
  note: z.string().trim().max(5000).optional(),
});

export const createGuiquanLedgerEntryRequestSchema = z
  .discriminatedUnion('kind', [
    createSaleTurtleEntryRequestSchema,
    createSaleOffspringBatchEntryRequestSchema,
    createSaleOffspringManualEntryRequestSchema,
    createManualIncomeEntryRequestSchema,
    createManualExpenseEntryRequestSchema,
  ])
  .superRefine((value, ctx) => {
    if (value.kind !== 'SALE_OFFSPRING_MANUAL') {
      return;
    }

    const hasSubjectProductId = Boolean(value.subjectProductId?.trim());
    const hasSubjectLabel = Boolean(value.subjectLabel?.trim());
    if (!hasSubjectProductId && !hasSubjectLabel) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'subjectProductId or subjectLabel is required.',
        path: ['subjectLabel'],
      });
    }
  });

export const createGuiquanLedgerEntryResponseSchema = z.object({
  entry: guiquanLedgerEntryItemSchema,
});

export const guiquanLedgerOverviewResponseSchema = z.object({
  summary: guiquanLedgerSummarySchema,
  recentEntries: z.array(guiquanLedgerEntryItemSchema).max(12),
  recentAllocations: z.array(guiquanLedgerAllocationItemSchema).max(10),
  activeBatches: z.array(guiquanLedgerBatchItemSchema).max(10),
  referenceNote: z.string().trim().max(240).nullable(),
});

export type GuiquanLedgerMonthKey = z.infer<typeof guiquanLedgerMonthKeySchema>;
export type GuiquanLedgerBatchStatus = z.infer<typeof guiquanLedgerBatchStatusSchema>;
export type GuiquanLedgerEntryDirection = z.infer<typeof guiquanLedgerEntryDirectionSchema>;
export type GuiquanLedgerEntryKind = z.infer<typeof guiquanLedgerEntryKindSchema>;
export type GuiquanLedgerEntrySource = z.infer<typeof guiquanLedgerEntrySourceSchema>;
export type GuiquanLedgerQuickEntryKind = z.infer<typeof guiquanLedgerQuickEntryKindSchema>;
export type GuiquanLedgerSummary = z.infer<typeof guiquanLedgerSummarySchema>;
export type GuiquanLedgerAllocationItem = z.infer<typeof guiquanLedgerAllocationItemSchema>;
export type GuiquanLedgerBatchItem = z.infer<typeof guiquanLedgerBatchItemSchema>;
export type GuiquanLedgerEntryItem = z.infer<typeof guiquanLedgerEntryItemSchema>;
export type CreateGuiquanLedgerEntryRequest = z.infer<typeof createGuiquanLedgerEntryRequestSchema>;
export type CreateGuiquanLedgerEntryResponse = z.infer<typeof createGuiquanLedgerEntryResponseSchema>;
export type GuiquanLedgerOverviewResponse = z.infer<typeof guiquanLedgerOverviewResponseSchema>;
