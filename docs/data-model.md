# Data Model Reference

Schema reference for the TestCase and TestRun services, including the snapshot architecture, optimistic concurrency columns, and migration history.

---

## TestCase Service Schema

### `Suite`

```prisma
model Suite {
  id          Int       @id @default(autoincrement())
  projectId   Int
  name        String
  description String?
  project     Project   @relation(...)
  sections    Section[]
  testCases   TestCase[]
  version     Int       @default(1)   // optimistic concurrency
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

### `Section`

```prisma
model Section {
  id        Int      @id @default(autoincrement())
  suiteId   Int
  projectId Int
  name      String
  testCases TestCase[]
  version   Int       @default(1)   // optimistic concurrency
  createdAt DateTime  @default(now())
  updatedAt DateTime  @default(now())
}
```

### `TestCase`

```prisma
model TestCase {
  id                Int       @id @default(autoincrement())
  projectId         Int
  suiteId           Int
  sectionId         Int
  title             String
  description       String?
  status            String    @default("Draft")
  priority          String    @default("Medium")
  type              String    @default("Functional")
  preconditions     String?
  steps             String?   // JSON array serialized as text
  expectedResult    String?
  customFieldValues String?   // JSON object
  createdBy         String?
  updatedBy         String?
  version           Int       @default(1)   // optimistic concurrency
  createdAt         DateTime  @default(now())
  updatedAt         DateTime  @updatedAt
  deletedAt         DateTime?             // soft delete
}
```

---

## TestRun Service Schema

### `TestRun`

```prisma
model TestRun {
  id          Int          @id @default(autoincrement())
  projectId   Int
  suiteId     Int?
  name        String
  description String?
  createdBy   String?
  deletedAt   DateTime?    // soft delete
  version     Int          @default(1)   // optimistic concurrency
  results     TestResult[]
  createdAt   DateTime     @default(now())
  updatedAt   DateTime     @updatedAt
}
```

### `TestResult`

`TestResult` is the execution record for one test case within a run. The snapshot columns (`title` through `snapshottedAt`) are copied from the TestCase at run-creation time and are **never updated afterward**. Historical run views remain accurate even if the underlying case is later edited, moved, or hard-deleted.

```prisma
model TestResult {
  id             Int       @id @default(autoincrement())
  testRunId      Int
  testRun        TestRun   @relation(...)
  testCaseId     Int       // foreign key to TestCase (may be deleted)
  testCaseName   String?   // legacy display name (pre-snapshot)

  // Immutable snapshot — copied once at run creation, never changed
  title          String?
  preconditions  String?
  steps          String?   // JSON array serialized as text
  expectedResult String?
  priority       String?
  type           String?
  snapshottedAt  DateTime?

  // Mutable execution fields
  status         String    @default("Untested")
  comment        String?
  version        Int       @default(1)   // optimistic concurrency

  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt

  @@index([testRunId])
  @@index([testCaseId])
}
```

**Status values:** `Untested` | `Passed` | `Failed` | `Blocked` | `NotApplicable`

### `IdempotencyKey` (TestRun service)

```prisma
model IdempotencyKey {
  id          Int       @id @default(autoincrement())
  key         String
  service     String
  endpoint    String
  requestHash String?   // SHA-256 of method:url:body
  response    String    // cached JSON response body
  statusCode  Int
  expiresAt   DateTime?
  createdAt   DateTime  @default(now())

  @@unique([key, service])
}
```

---

## Snapshot Architecture

### Why snapshots exist

Test cases change over time (steps get refined, priorities are re-assessed, cases are deleted). A test run executed six months ago should still show exactly what was being tested at the time — not the current state of the cases.

Without snapshots: editing a case would silently alter every historical run that included it. Deleting a case would produce `null` titles or broken references in old run reports.

With snapshots: the run is self-contained. The TestResult row carries all display data. The TestCase row is only needed to create new runs.

### Creation flow

```
POST /testruns
  └─ TestRunService.createRun()
       └─ snapshotCases(caseIds, projectId, requestId)
            └─ POST /internal/cases/batch  →  TestCase service
                 returns: { data: SnapshotCase[], missingIds: number[] }
       ├─ if network error → throw → caller catches → return 503
       ├─ if missingIds.length > 0 → return 400 with invalid IDs
       └─ repo.createRun({ results: cases.map(c => ({
            testCaseId: c.id,
            testCaseName: c.title,
            title: c.title,
            preconditions: c.preconditions,
            steps: JSON.stringify(c.steps ?? []),
            expectedResult: c.expectedResult,
            priority: c.priority,
            type: c.type,
            snapshottedAt: new Date(),
            status: 'Untested',
          })) })
```

**Invariants enforced:**
- A run is never created if any selected case ID doesn't exist in the project (`missingIds` check).
- A run is never created if the TestCase service is unreachable (fail-closed, 503).
- Snapshot fields are written exactly once and are not included in any `updateResult` path.

---

## Optimistic Concurrency

### Column

Every mutable entity (`Suite`, `Section`, `TestCase`, `TestRun`, `TestResult`) has:

```sql
version INTEGER NOT NULL DEFAULT 1
```

The column increments on every successful write:

```sql
UPDATE "TestRun"
SET "name" = $1, "version" = "version" + 1
WHERE "id" = $2 AND "version" = $3
```

### Semantics

- If the `WHERE` clause matches 0 rows (version mismatch), `updateMany` returns `{ count: 0 }`.
- The service interprets `count === 0` as a conflict and returns `409 VERSION_CONFLICT`.
- The `version` field is optional in all update requests. Omitting it skips the check (last-write-wins).

### HTTP response shape

```json
HTTP/1.1 409 Conflict
{
  "error": "Test run was modified by someone else. Refresh and retry.",
  "code": "VERSION_CONFLICT"
}
```

---

## Migration History

### TestCase service (`services/testcase/prisma/migrations/`)

| Migration | Date | Summary |
|-----------|------|---------|
| `0001_init` | 2026-05-17 | Initial schema: Project, Suite, Section, TestCase, IdempotencyKey |
| `20260517000000_add_hierarchy_view` | 2026-05-17 | Adds indexes and hierarchy query support |
| `20260612000000_add_optimistic_concurrency` | 2026-06-12 | Adds `version INTEGER NOT NULL DEFAULT 1` to Suite, Section, TestCase |

### TestRun service (`services/testrun/prisma/migrations/`)

| Migration | Date | Summary |
|-----------|------|---------|
| `0001_init` | initial | Initial schema: Project, Suite, TestRun, TestResult, IdempotencyKey |
| `0002_add_testcasename` | — | Adds `testCaseName` column to TestResult |
| `0003_execution_snapshots_versioning` | 2026-06-12 | Adds `version` to TestRun and TestResult; adds full snapshot columns to TestResult (`title`, `preconditions`, `steps`, `expectedResult`, `priority`, `type`, `snapshottedAt`); adds `requestHash` and `expiresAt` to IdempotencyKey; backfills `title = testCaseName` for pre-existing rows; adds indexes on `TestResult(testRunId)` and `TestResult(testCaseId)` |

All migrations are **expand-only** (no column renames or drops) to allow zero-downtime deploys with multiple running service versions.

---

## Frontend Types

The TypeScript types in `src/features/testruns/types/index.ts` mirror the schema:

```typescript
interface TestResult {
  id: string;
  testCaseId: string;
  testCaseName?: string;
  // Immutable snapshot — populated at run creation
  title?: string;
  preconditions?: string | null;
  steps?: string | null;
  expectedResult?: string | null;
  priority?: string | null;
  type?: string | null;
  // Mutable execution fields
  status: string;
  comment?: string;
  version?: number;
  updatedAt?: string;
}

interface TestRun {
  id: string;
  name: string;
  description?: string | null;
  projectId: string;
  suiteId?: string;
  createdBy?: string;
  createdAt?: string;
  version?: number;
  results?: TestResult[];
}
```

The `version` field on both interfaces feeds the CAS check on updates. The snapshot fields display the test case body as it was when the run was created — they are read-only from the frontend perspective.
