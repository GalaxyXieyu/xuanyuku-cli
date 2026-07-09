export type ProductDisplaySortDirection = 'asc' | 'desc';

export type ProductDisplaySortable = {
  id: string;
  code: string | null | undefined;
  type?: string | null | undefined;
  sex?: string | null | undefined;
  seriesId?: string | null | undefined;
  identityRank?: number | null | undefined;
};

const BREEDER_SEXES = new Set(['male', 'female']);

function getNaturalCollator(): Intl.Collator | null {
  try {
    return new Intl.Collator('zh-Hans-CN', { numeric: true, sensitivity: 'base' });
  } catch {
    return null;
  }
}

let _collator: Intl.Collator | null | undefined;
function getCollator(): Intl.Collator | null {
  if (_collator === undefined) {
    _collator = getNaturalCollator();
  }
  return _collator;
}

function collatorCompare(a: string, b: string): number {
  const collator = getCollator();
  if (collator) {
    return collator.compare(a, b);
  }
  return a.localeCompare(b);
}

function normalizeTrimmedText(value: string | null | undefined): string {
  return (value ?? '').trim().toLowerCase();
}

function normalizeBreederSex(value: string | null | undefined): 'male' | 'female' | null {
  const normalized = normalizeTrimmedText(value);
  return BREEDER_SEXES.has(normalized) ? (normalized as 'male' | 'female') : null;
}

function extractDisplayCodeBase(code: string | null | undefined): string {
  const normalized = code?.trim() ?? '';
  if (!normalized) {
    return '';
  }

  return normalized.replace(/-([A-Z]+|\d+)$/i, '').trim() || normalized;
}

function alphaRankFromSuffix(value: string | null | undefined): number | null {
  const normalized = value?.trim().toUpperCase();
  if (!normalized || !/^[A-Z]+$/.test(normalized)) {
    return null;
  }

  return normalized.split('').reduce((current, char) => current * 26 + (char.charCodeAt(0) - 64), 0);
}

function parseIdentityRankFromCode(
  sex: 'male' | 'female',
  code: string | null | undefined,
): number | null {
  const normalized = code?.trim();
  if (!normalized) {
    return null;
  }

  const suffix = normalized.match(/-([A-Z]+|\d+)$/i)?.[1] ?? null;
  if (!suffix) {
    return null;
  }

  if (sex === 'male') {
    return alphaRankFromSuffix(suffix);
  }

  const parsed = Number.parseInt(suffix, 10);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : null;
}

function resolveIdentityRank(
  item: Pick<ProductDisplaySortable, 'identityRank' | 'code'>,
  sex: 'male' | 'female',
): number | null {
  if (Number.isInteger(item.identityRank) && Number(item.identityRank) > 0) {
    return Number(item.identityRank);
  }

  return parseIdentityRankFromCode(sex, item.code);
}

function compareCodes<T extends ProductDisplaySortable>(
  left: T,
  right: T,
  direction: ProductDisplaySortDirection,
): number {
  const factor = direction === 'desc' ? -1 : 1;
  const byCode =
    collatorCompare(
      (left.code ?? '').trim(),
      (right.code ?? '').trim(),
    ) * factor;
  if (byCode !== 0) {
    return byCode;
  }

  return left.id.localeCompare(right.id) * factor;
}

function compareText(left: string, right: string, direction: ProductDisplaySortDirection): number {
  const factor = direction === 'desc' ? -1 : 1;
  return collatorCompare(left, right) * factor;
}

function buildBreederIdentitySortKey<T extends ProductDisplaySortable>(item: T): {
  familyCode: string;
  seriesKey: string;
  sexKey: string;
  rankBucket: 0 | 1;
  rankValue: number;
  code: string;
} {
  const code = (item.code ?? '').trim();
  const normalizedSeriesId = normalizeTrimmedText(item.seriesId);
  const sex = normalizeBreederSex(item.sex);
  const rank = sex ? resolveIdentityRank(item, sex) : null;
  const familyCode = extractDisplayCodeBase(code);
  const canUseIdentityRank = Boolean(code && normalizedSeriesId && sex && rank);

  if (!canUseIdentityRank) {
    return {
      familyCode: code,
      seriesKey: code,
      sexKey: '',
      rankBucket: 1,
      rankValue: Number.MAX_SAFE_INTEGER,
      code,
    };
  }

  const resolvedSex = sex as 'male' | 'female';
  const resolvedRank = rank as number;

  return {
    familyCode,
    seriesKey: `${familyCode}\u0000${normalizedSeriesId}`,
    sexKey: resolvedSex,
    rankBucket: 0,
    rankValue: resolvedRank,
    code,
  };
}

export function compareBreedersByIdentityOrder<T extends ProductDisplaySortable>(
  left: T,
  right: T,
  direction: ProductDisplaySortDirection = 'asc',
): number {
  const leftKey = buildBreederIdentitySortKey(left);
  const rightKey = buildBreederIdentitySortKey(right);

  const byFamilyCode = compareText(leftKey.familyCode, rightKey.familyCode, direction);
  if (byFamilyCode !== 0) {
    return byFamilyCode;
  }

  const bySeriesKey = compareText(leftKey.seriesKey, rightKey.seriesKey, direction);
  if (bySeriesKey !== 0) {
    return bySeriesKey;
  }

  const bySex = compareText(leftKey.sexKey, rightKey.sexKey, direction);
  if (bySex !== 0) {
    return bySex;
  }

  const factor = direction === 'desc' ? -1 : 1;
  const byRankBucket = (leftKey.rankBucket - rightKey.rankBucket) * factor;
  if (byRankBucket !== 0) {
    return byRankBucket;
  }

  const byRankValue = (leftKey.rankValue - rightKey.rankValue) * factor;
  if (byRankValue !== 0) {
    return byRankValue;
  }

  const byCode = compareText(leftKey.code, rightKey.code, direction);
  if (byCode !== 0) {
    return byCode;
  }

  return left.id.localeCompare(right.id) * factor;
}

export function sortBreedersByIdentityOrder<T extends ProductDisplaySortable>(
  items: readonly T[],
  direction: ProductDisplaySortDirection = 'asc',
): T[] {
  return [...items].sort((left, right) => compareBreedersByIdentityOrder(left, right, direction));
}

export function compareProductsByDisplayOrder<T extends ProductDisplaySortable>(
  left: T,
  right: T,
  direction: ProductDisplaySortDirection = 'asc',
): number {
  return compareCodes(left, right, direction);
}

export function sortProductsByDisplayOrder<T extends ProductDisplaySortable>(
  items: readonly T[],
  direction: ProductDisplaySortDirection = 'asc',
): T[] {
  return [...items].sort((left, right) => compareProductsByDisplayOrder(left, right, direction));
}
