export type ProductDisplaySortDirection = 'asc' | 'desc';
export type ProductDisplaySortable = {
    id: string;
    code: string | null | undefined;
    type?: string | null | undefined;
    sex?: string | null | undefined;
    seriesId?: string | null | undefined;
    identityRank?: number | null | undefined;
};
export declare function compareBreedersByIdentityOrder<T extends ProductDisplaySortable>(left: T, right: T, direction?: ProductDisplaySortDirection): number;
export declare function sortBreedersByIdentityOrder<T extends ProductDisplaySortable>(items: readonly T[], direction?: ProductDisplaySortDirection): T[];
export declare function compareProductsByDisplayOrder<T extends ProductDisplaySortable>(left: T, right: T, direction?: ProductDisplaySortDirection): number;
export declare function sortProductsByDisplayOrder<T extends ProductDisplaySortable>(items: readonly T[], direction?: ProductDisplaySortDirection): T[];
