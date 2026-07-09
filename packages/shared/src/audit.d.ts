import { z } from 'zod';
export declare const AuditAction: {
    readonly ProductCreate: "product.create";
    readonly ProductUpdate: "product.update";
    readonly ProductDelete: "product.delete";
    readonly ProductEventCreate: "product.event.create";
    readonly ProductEventUpdate: "product.event.update";
    readonly ProductEventDelete: "product.event.delete";
    readonly ProductImageUpload: "product.image.upload";
    readonly ProductImageDelete: "product.image.delete";
    readonly ProductImageSetMain: "product.image.set_main";
    readonly ProductImageReorder: "product.image.reorder";
    readonly ProductCertificateConfirm: "product.certificate.confirm";
    readonly ProductCertificateVoid: "product.certificate.void";
    readonly ProductCertificateReissue: "product.certificate.reissue";
    readonly ProductCouplePhotoGenerate: "product.couple_photo.generate";
    readonly SaleBatchCreate: "sale.batch.create";
    readonly SaleAllocationCreate: "sale.allocation.create";
    readonly SaleSubjectMediaUpload: "sale.subject_media.upload";
    readonly GuiquanLedgerEntryCreate: "guiquan.ledger.entry.create";
    readonly ShareCreate: "share.create";
    readonly ShareAccess: "share.access";
    readonly SubscriptionActivationRedeem: "subscription.activation.redeem";
    readonly SubscriptionOrderCreate: "subscription.order.create";
    readonly SubscriptionPaymentDialogOpen: "subscription.payment.dialog_open";
    readonly SubscriptionPaymentClick: "subscription.payment.click";
    readonly SubscriptionPaymentHesitate: "subscription.payment.hesitate";
    readonly SubscriptionPaymentCancel: "subscription.payment.cancel";
    readonly SubscriptionPaymentSuccess: "subscription.payment.success";
    readonly SubscriptionPaymentFailure: "subscription.payment.failure";
    readonly SupplyPaymentFailure: "supply.payment.failure";
    readonly AuthLogin: "auth.login";
};
export declare const auditActionSchema: z.ZodEnum<["product.create", "product.update", "product.delete", "product.event.create", "product.event.update", "product.event.delete", "product.image.upload", "product.image.delete", "product.image.set_main", "product.image.reorder", "product.certificate.confirm", "product.certificate.void", "product.certificate.reissue", "product.couple_photo.generate", "sale.batch.create", "sale.allocation.create", "sale.subject_media.upload", "guiquan.ledger.entry.create", "share.create", "share.access", "subscription.activation.redeem", "subscription.order.create", "subscription.payment.dialog_open", "subscription.payment.click", "subscription.payment.hesitate", "subscription.payment.cancel", "subscription.payment.success", "subscription.payment.failure", "supply.payment.failure", "auth.login"]>;
export declare const auditLogSchema: z.ZodObject<{
    id: z.ZodString;
    tenantId: z.ZodString;
    actorUserId: z.ZodString;
    action: z.ZodEnum<["product.create", "product.update", "product.delete", "product.event.create", "product.event.update", "product.event.delete", "product.image.upload", "product.image.delete", "product.image.set_main", "product.image.reorder", "product.certificate.confirm", "product.certificate.void", "product.certificate.reissue", "product.couple_photo.generate", "sale.batch.create", "sale.allocation.create", "sale.subject_media.upload", "guiquan.ledger.entry.create", "share.create", "share.access", "subscription.activation.redeem", "subscription.order.create", "subscription.payment.dialog_open", "subscription.payment.click", "subscription.payment.hesitate", "subscription.payment.cancel", "subscription.payment.success", "subscription.payment.failure", "supply.payment.failure", "auth.login"]>;
    resourceType: z.ZodString;
    resourceId: z.ZodNullable<z.ZodString>;
    metadata: z.ZodNullable<z.ZodUnknown>;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    tenantId: string;
    createdAt: string;
    actorUserId: string;
    action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
    resourceType: string;
    resourceId: string | null;
    metadata?: unknown;
}, {
    id: string;
    tenantId: string;
    createdAt: string;
    actorUserId: string;
    action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
    resourceType: string;
    resourceId: string | null;
    metadata?: unknown;
}>;
export declare const listAuditLogsQuerySchema: z.ZodObject<{
    tenantId: z.ZodOptional<z.ZodString>;
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    tenantId?: string | undefined;
}, {
    tenantId?: string | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
}>;
export declare const listAuditLogsResponseSchema: z.ZodObject<{
    logs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        tenantId: z.ZodString;
        actorUserId: z.ZodString;
        action: z.ZodEnum<["product.create", "product.update", "product.delete", "product.event.create", "product.event.update", "product.event.delete", "product.image.upload", "product.image.delete", "product.image.set_main", "product.image.reorder", "product.certificate.confirm", "product.certificate.void", "product.certificate.reissue", "product.couple_photo.generate", "sale.batch.create", "sale.allocation.create", "sale.subject_media.upload", "guiquan.ledger.entry.create", "share.create", "share.access", "subscription.activation.redeem", "subscription.order.create", "subscription.payment.dialog_open", "subscription.payment.click", "subscription.payment.hesitate", "subscription.payment.cancel", "subscription.payment.success", "subscription.payment.failure", "supply.payment.failure", "auth.login"]>;
        resourceType: z.ZodString;
        resourceId: z.ZodNullable<z.ZodString>;
        metadata: z.ZodNullable<z.ZodUnknown>;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        tenantId: string;
        createdAt: string;
        actorUserId: string;
        action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
        resourceType: string;
        resourceId: string | null;
        metadata?: unknown;
    }, {
        id: string;
        tenantId: string;
        createdAt: string;
        actorUserId: string;
        action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
        resourceType: string;
        resourceId: string | null;
        metadata?: unknown;
    }>, "many">;
    total: z.ZodNumber;
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalPages: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    logs: {
        id: string;
        tenantId: string;
        createdAt: string;
        actorUserId: string;
        action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
        resourceType: string;
        resourceId: string | null;
        metadata?: unknown;
    }[];
}, {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    logs: {
        id: string;
        tenantId: string;
        createdAt: string;
        actorUserId: string;
        action: "product.create" | "product.update" | "product.delete" | "product.event.create" | "product.event.update" | "product.event.delete" | "product.image.upload" | "product.image.delete" | "product.image.set_main" | "product.image.reorder" | "product.certificate.confirm" | "product.certificate.void" | "product.certificate.reissue" | "product.couple_photo.generate" | "sale.batch.create" | "sale.allocation.create" | "sale.subject_media.upload" | "guiquan.ledger.entry.create" | "share.create" | "share.access" | "subscription.activation.redeem" | "subscription.order.create" | "subscription.payment.dialog_open" | "subscription.payment.click" | "subscription.payment.hesitate" | "subscription.payment.cancel" | "subscription.payment.success" | "subscription.payment.failure" | "supply.payment.failure" | "auth.login";
        resourceType: string;
        resourceId: string | null;
        metadata?: unknown;
    }[];
}>;
export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction];
export type AuditLog = z.infer<typeof auditLogSchema>;
export type ListAuditLogsQuery = z.infer<typeof listAuditLogsQuerySchema>;
export type ListAuditLogsResponse = z.infer<typeof listAuditLogsResponseSchema>;
