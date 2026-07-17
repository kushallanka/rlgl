import axios from 'axios';
import { TESTCASE_SERVICE_URL } from '../config/constants.js';
import { TestRunRepository } from '../repositories/testrun.repository.js';
import type { JwtUser, PaginationParams } from '../types/index.js';

type SnapshotCase = {
  id: number;
  title: string;
  preconditions?: string | null;
  steps?: unknown[];
  expectedResult?: string | null;
  priority?: string | null;
  type?: string | null;
};

type SnapshotResult = { cases: SnapshotCase[]; missingIds: number[] };

export class TestRunService {
  constructor(
    private readonly repo: TestRunRepository,
    private readonly eventBus?: any,
    private readonly logger?: any,
  ) {}

  async listRuns(projectId: number, pagination: PaginationParams, userId: number, requestId: string) {
    const { page, limit, sortOrder, search } = pagination;
    const [total, runs] = await this.repo.findRuns(projectId, (page - 1) * limit, limit, sortOrder || 'desc', search);
    this.logger?.info({ requestId, userId, projectId, count: runs.length }, 'Test runs listed');
    return { data: runs, pagination: { page, limit, total, pages: Math.ceil(total / limit) } };
  }

  async getRun(runId: number, projectId: number, requestId: string) {
    const run = await this.repo.findRunById(runId);
    if (!run) return null;
    if (run.projectId !== projectId) return null;
    this.logger?.info({ requestId, projectId, runId: run.id }, 'Test run fetched');
    return run;
  }

  async createRun(
    data: {
      name: string;
      description?: string | undefined;
      projectId: number;
      suiteId?: number | undefined;
      caseIds: number[];
    },
    user: JwtUser,
    projectId: number,
    requestId: string,
    _token: string,
  ) {
    const project = await this.repo.findProject(projectId);
    if (!project) return { error: 'Project not found', status: 404 };

    const firstName = user.firstName || '';
    const lastName = user.lastName || '';
    const createdBy = firstName || lastName ? `${firstName} ${lastName}`.trim() : user.email || 'Unknown';

    let snapshot: SnapshotResult;
    try {
      snapshot = await this.snapshotCases(data.caseIds, projectId, requestId);
    } catch (err: any) {
      this.logger?.error({ requestId, projectId, err }, 'Could not snapshot test cases (testcase service unavailable)');
      return { error: 'Test case service is unavailable; the run was not created. Please retry.', status: 503 };
    }

    if (snapshot.missingIds.length > 0) {
      this.logger?.warn({ requestId, projectId, invalidCaseIds: snapshot.missingIds }, 'Test cases not found');
      return {
        error: `Test cases not found: ${snapshot.missingIds.join(', ')}`,
        invalidCaseIds: snapshot.missingIds,
        status: 400,
      };
    }

    const snapshottedAt = new Date();
    const run = await this.repo.createRun({
      name: data.name,
      ...(data.description !== undefined ? { description: data.description } : {}),
      projectId,
      ...(data.suiteId !== undefined ? { suiteId: data.suiteId } : {}),
      createdBy,
      results: snapshot.cases.map((c) => ({
        testCaseId: c.id,
        testCaseName: c.title,
        title: c.title,
        preconditions: c.preconditions ?? null,
        steps: JSON.stringify(c.steps ?? []),
        expectedResult: c.expectedResult ?? null,
        priority: c.priority ?? null,
        type: c.type ?? null,
        snapshottedAt,
        status: 'Untested',
      })),
    });

    this.emitEvent(
      'testrun.started',
      {
        testrunId: run.id,
        projectId: run.projectId,
        testcaseIds: snapshot.cases.map((c) => c.id),
        startedBy: user.userId,
      },
      requestId,
      user.userId,
      projectId,
    );

    this.logger?.info({ requestId, userId: user.userId, projectId, runId: run.id }, 'Test run created');
    return { data: run, status: 201 };
  }

  async updateRun(
    runId: number,
    projectId: number,
    data: { name?: string | undefined; description?: string | undefined; version?: number | undefined },
    requestId: string,
  ) {
    const { version, ...patch } = data;
    const existing = await this.repo.findRunById(runId);
    if (!existing || existing.projectId !== projectId) return { error: 'Test run not found', status: 404 };
    const updated = await this.repo.updateRun(runId, patch, version);
    if (!updated) {
      this.logger?.warn({ requestId, projectId, runId, version }, 'Test run version conflict');
      return {
        error: 'Test run was modified by someone else. Refresh and retry.',
        code: 'VERSION_CONFLICT',
        status: 409,
      };
    }
    this.logger?.info({ requestId, projectId, runId }, 'Test run updated');
    return { data: updated, status: 200 };
  }

  async deleteRun(runId: number, projectId: number, requestId: string) {
    const existing = await this.repo.findRunById(runId);
    if (!existing || existing.projectId !== projectId) return { error: 'Test run not found', status: 404 };

    await this.repo.softDeleteRun(runId);
    this.logger?.info({ requestId, projectId, runId }, 'Test run soft-deleted');
    return { status: 204 };
  }

  async updateResult(
    resultId: number,
    projectId: number,
    data: { status: string; comment?: string | undefined; version?: number | undefined },
    userId: number,
    requestId: string,
  ) {
    const { version, ...patch } = data;
    const result = await this.repo.findResultById(resultId);
    if (!result) return { error: 'Result not found', status: 404 };
    if (result.testRun.projectId !== projectId) return { error: 'Result not found', status: 404 };
    if (result.testRun.deletedAt) return { error: 'Test run has been deleted', status: 404 };

    const updated = await this.repo.updateResult(resultId, patch, version);
    if (!updated) {
      this.logger?.warn({ requestId, projectId, resultId, version }, 'Test result version conflict');
      return {
        error: 'Test result was modified by someone else. Refresh and retry.',
        code: 'VERSION_CONFLICT',
        status: 409,
      };
    }

    const testRunResults = await this.repo.getResultsForRun(result.testRun.id);
    const allCompleted = testRunResults.every((r) => r.status !== 'Untested');
    if (allCompleted) {
      const passed = testRunResults.filter((r) => r.status === 'Passed').length;
      const failed = testRunResults.filter((r) => r.status === 'Failed').length;
      const blocked = testRunResults.filter((r) => r.status === 'Blocked').length;

      this.emitEvent(
        'testrun.completed',
        {
          testrunId: result.testRun.id,
          projectId,
          status: failed > 0 ? 'failed' : 'passed',
          passed,
          failed,
          blocked,
          completedBy: userId,
        },
        requestId,
        userId,
        projectId,
      );
    }

    this.logger?.info({ requestId, userId, projectId, resultId, status: data.status }, 'Test result updated');
    return { data: updated, status: 200 };
  }

  async syncProject(projectId: number, name: string, requestId: string) {
    if (!projectId || !name) return { error: 'projectId and name are required', status: 400 };
    try {
      await this.repo.upsertProject(projectId, name);
      this.logger?.info({ requestId, projectId }, 'Project synced to testrun service');
      return { data: { status: 'synced', projectId }, status: 200 };
    } catch (err: any) {
      this.logger?.error({ requestId, projectId, err }, 'Project sync failed');
      return { error: 'Failed to sync project', status: 500 };
    }
  }

  async syncSuite(suiteId: number, projectId: number, name: string, requestId: string) {
    if (!suiteId || !projectId || !name) return { error: 'suiteId, projectId and name are required', status: 400 };
    try {
      await this.repo.upsertSuite(suiteId, projectId, name);
      this.logger?.info({ requestId, suiteId, projectId }, 'Suite synced to testrun service');
      return { data: { status: 'synced', suiteId }, status: 200 };
    } catch (err: any) {
      this.logger?.error({ requestId, suiteId, err }, 'Suite sync failed');
      return { error: 'Failed to sync suite', status: 500 };
    }
  }

  async deleteSyncedSuite(suiteId: number, requestId: string) {
    try {
      await this.repo.deleteSuite(suiteId);
      this.logger?.info({ requestId, suiteId }, 'Suite deleted from testrun service');
      return { status: 204 };
    } catch (err: any) {
      if (err.code === 'P2025') {
        this.logger?.info({ requestId, suiteId }, 'Suite not found in testrun service (already deleted)');
        return { status: 204 };
      }
      this.logger?.error({ requestId, suiteId, err }, 'Suite delete failed in testrun service');
      return { error: 'Failed to delete suite', status: 500 };
    }
  }

  async deleteSyncedProject(projectId: number, requestId: string) {
    try {
      await this.repo.deleteProject(projectId);
      this.logger?.info({ requestId, projectId }, 'Project deleted from testrun service');
      return { status: 204 };
    } catch (err: any) {
      if (err.code === 'P2025') {
        this.logger?.info({ requestId, projectId }, 'Project not found in testrun service (already deleted)');
        return { status: 204 };
      }
      this.logger?.error({ requestId, projectId, err }, 'Project delete failed in testrun service');
      return { error: 'Failed to delete project', status: 500 };
    }
  }

  /**
   * Fetches full test case bodies in one batch call so the run stores an
   * immutable snapshot. Throws if the testcase service cannot be reached:
   * a run must never be created with partial or placeholder snapshots.
   */
  private async snapshotCases(caseIds: number[], projectId: number, requestId: string): Promise<SnapshotResult> {
    const res = await axios.post(
      `${TESTCASE_SERVICE_URL}/internal/cases/batch`,
      { ids: caseIds, projectId },
      { headers: { 'x-request-id': requestId }, timeout: 10000 },
    );
    return { cases: res.data?.data ?? [], missingIds: res.data?.missingIds ?? [] };
  }

  private emitEvent(eventName: string, payload: any, requestId: string, userId: number, projectId: number) {
    if (!this.eventBus) return;
    this.eventBus
      .publishEvent(eventName, payload, { requestId, userId: userId.toString(), projectId: projectId.toString() })
      .catch(() => {});
  }
}
