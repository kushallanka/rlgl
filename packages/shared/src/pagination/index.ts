/**
 * Response envelope and pagination utilities.
 *
 * ALL list endpoints must return a consistent envelope so clients can
 * paginate without coupling to implementation details.
 *
 * Two modes are supported:
 *   - Offset pagination: { page, limit, total, pages }
 *   - Cursor pagination: { cursor, hasMore, nextCursor } — preferred for
 *     large datasets because it avoids COUNT(*) scans and is stable under
 *     concurrent inserts.
 */

// ─── Response Envelopes ───────────────────────────────────────────────────────

export interface PaginatedResponse<T> {
  data: T[];
  pagination: OffsetMeta;
}

export interface CursorPaginatedResponse<T> {
  data: T[];
  pagination: CursorMeta;
}

export interface SuccessResponse<T> {
  data: T;
  meta?: Record<string, unknown>;
}

export interface ErrorResponse {
  error: string;
  code?: string;
  details?: unknown;
  requestId?: string;
}

export interface OffsetMeta {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface CursorMeta {
  /** Opaque cursor — clients treat as an opaque string */
  nextCursor: string | null;
  hasMore: boolean;
  /** How many items were returned in this page */
  count: number;
}

// ─── Envelope Factories ───────────────────────────────────────────────────────

export function paginatedOk<T>(
  data: T[],
  meta: OffsetMeta
): PaginatedResponse<T> {
  return { data, pagination: meta };
}

export function cursorOk<T>(
  data: T[],
  meta: CursorMeta
): CursorPaginatedResponse<T> {
  return { data, pagination: meta };
}

export function ok<T>(data: T, extraMeta?: Record<string, unknown>): SuccessResponse<T> {
  return extraMeta ? { data, meta: extraMeta } : { data };
}

export function err(
  message: string,
  code?: string,
  requestId?: string
): ErrorResponse {
  return { error: message, ...(code ? { code } : {}), ...(requestId ? { requestId } : {}) };
}

// ─── Offset Pagination ────────────────────────────────────────────────────────

export interface OffsetParams {
  page: number;
  limit: number;
}

export function offsetMeta(total: number, { page, limit }: OffsetParams): OffsetMeta {
  return {
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
  };
}

export function toSkipTake({ page, limit }: OffsetParams): { skip: number; take: number } {
  return { skip: (page - 1) * limit, take: limit };
}

// ─── Cursor Pagination ────────────────────────────────────────────────────────

/**
 * Encode a cursor from a row's sortable fields.
 *
 * The cursor is base64-encoded JSON so it remains opaque to clients.
 * Add the fields that define the stable sort order (e.g. createdAt + id).
 */
export function encodeCursor(fields: Record<string, unknown>): string {
  return Buffer.from(JSON.stringify(fields)).toString('base64url');
}

export function decodeCursor(cursor: string): Record<string, unknown> {
  try {
    return JSON.parse(Buffer.from(cursor, 'base64url').toString('utf-8')) as Record<string, unknown>;
  } catch {
    throw new Error('Invalid cursor');
  }
}

/**
 * Build cursor metadata from a result set.
 *
 * Fetches `limit + 1` items to determine `hasMore`, then slices back to
 * `limit`. The `getCursorFields` callback extracts the stable sort key
 * from the last item in the returned page.
 *
 * Usage:
 * ```ts
 * const rows = await repo.findMany({ take: limit + 1, cursor: parsedCursor });
 * const { data, meta } = buildCursorPage(rows, limit, (row) => ({
 *   id: row.id,
 *   createdAt: row.createdAt.toISOString(),
 * }));
 * ```
 */
export function buildCursorPage<T>(
  rawRows: T[],
  limit: number,
  getCursorFields: (row: T) => Record<string, unknown>
): { data: T[]; meta: CursorMeta } {
  const hasMore = rawRows.length > limit;
  const data = hasMore ? rawRows.slice(0, limit) : rawRows;
  const lastRow = data[data.length - 1];
  const nextCursor = hasMore && lastRow ? encodeCursor(getCursorFields(lastRow)) : null;

  return {
    data,
    meta: { nextCursor, hasMore, count: data.length },
  };
}

/**
 * Parse an optional cursor string from query parameters.
 * Returns undefined if no cursor provided (first page).
 * Throws if cursor is malformed.
 */
export function parseCursorParam(cursor: string | undefined): Record<string, unknown> | undefined {
  if (!cursor) return undefined;
  return decodeCursor(cursor);
}

// ─── Sort helpers ─────────────────────────────────────────────────────────────

export type SortOrder = 'asc' | 'desc';

export function parseSortOrder(raw: string | undefined, defaultOrder: SortOrder = 'desc'): SortOrder {
  if (raw === 'asc' || raw === 'desc') return raw;
  return defaultOrder;
}
