import { AppError, EventBus, RequestContext } from '@rlgl/shared';
import axios from 'axios';
import { ProjectRepository } from '../repositories/project.repository.js';

export class ProjectService {
  constructor(
    private readonly repo: ProjectRepository,
    private readonly iamServiceUrl: string,
    private readonly eventBus: EventBus,
    private readonly testcaseServiceUrl: string = process.env.TESTCASE_SERVICE_URL || 'http://testcase-service:3002',
    private readonly testrunServiceUrl: string = process.env.TESTRUN_SERVICE_URL || 'http://testrun-service:3004',
    private readonly logger?: any,
  ) {}

  async listAll() {
    return this.repo.findAll();
  }

  async listProjects(userId: number) {
    // In a real system, we'd query IAM for the user's project IDs first
    // For now, we simulate by assuming the user provides IDs or we fetch all (less secure)
    // Actually, we'll fetch from the legacy bridge or IAM
    const resp = await axios.get(`${this.iamServiceUrl}/users/${userId}/projects`);
    const projectIds = resp.data.projectIds;

    return this.repo.findAllForUser(projectIds);
  }

  async getProject(id: number) {
    const project = await this.repo.findById(id);
    if (!project) throw new AppError(404, 'Project not found');
    return project;
  }

  async createProject(userId: number, data: { name: string; description?: string }, context: RequestContext) {
    const { name, description } = data;

    const ALL_PERMISSIONS = [
      'testcase.view',
      'testcase.create',
      'testcase.edit',
      'testcase.delete',
      'testrun.view',
      'testrun.create',
      'testrun.update',
      'config.manage',
      'project.manage',
      'member.manage',
    ];

    const project = await this.repo.createWithAdminRole(name, description, userId, ALL_PERMISSIONS);

    // Sync project admin to IAM service so it appears in user's project list
    try {
      await axios.post(`${this.iamServiceUrl}/internal/projects/${project.id}/init-admin`, {
        userId: userId.toString(),
      });
    } catch (err) {
      this.logger?.error({ err, projectId: project.id, userId }, 'Failed to init project admin in IAM');
      // Don't throw - project is already created, IAM sync failure shouldn't break the flow
    }

    await this.eventBus.publishEvent(
      'project.created',
      {
        projectId: project.id.toString(),
        projectName: project.name,
        createdBy: userId,
      },
      {
        requestId: context.requestId,
        userId: userId.toString(),
        projectId: project.id.toString(),
      },
    );

    // Sync project to testcase and testrun services for referential integrity
    await this.syncProjectToServices(project.id, project.name, context.requestId);

    return project;
  }

  async updateProject(id: number, data: any, context: RequestContext) {
    const project = await this.repo.update(id, data);

    await this.eventBus.publishEvent(
      'project.settings_updated',
      {
        projectId: id.toString(),
        changes: Object.keys(data),
        updatedBy: context.userId,
      },
      {
        requestId: context.requestId,
        userId: context.userId,
        projectId: id.toString(),
      },
    );

    return project;
  }

  async deleteProject(id: number) {
    // Sync project deletion to dependent services first
    await this.syncProjectDeletionToServices(id);
    return this.repo.softDelete(id);
  }

  // Sync project record to testcase and testrun services for referential integrity
  private async syncProjectToServices(projectId: number, projectName: string, requestId: string): Promise<void> {
    const syncErrors: string[] = [];

    // Sync to testcase service
    try {
      await axios.post(
        `${this.testcaseServiceUrl}/sync/project`,
        { projectId, name: projectName },
        { headers: { 'Content-Type': 'application/json', 'x-request-id': requestId } },
      );
    } catch (err: any) {
      syncErrors.push(`testcase-service: ${err.message}`);
    }

    // Sync to testrun service
    try {
      await axios.post(
        `${this.testrunServiceUrl}/sync/project`,
        { projectId, name: projectName },
        { headers: { 'Content-Type': 'application/json', 'x-request-id': requestId } },
      );
    } catch (err: any) {
      syncErrors.push(`testrun-service: ${err.message}`);
    }

    if (syncErrors.length > 0) {
      this.logger?.error({ projectId, syncErrors }, 'Failed to sync project to downstream services');
    }
  }

  // Sync project deletion to dependent services
  private async syncProjectDeletionToServices(projectId: number): Promise<void> {
    const syncErrors: string[] = [];

    // Delete from testcase service
    try {
      await axios.delete(`${this.testcaseServiceUrl}/sync/project/${projectId}`);
    } catch (err: any) {
      syncErrors.push(`testcase-service: ${err.message}`);
    }

    // Delete from testrun service
    try {
      await axios.delete(`${this.testrunServiceUrl}/sync/project/${projectId}`);
    } catch (err: any) {
      syncErrors.push(`testrun-service: ${err.message}`);
    }

    if (syncErrors.length > 0) {
      this.logger?.error({ projectId, syncErrors }, 'Failed to sync project deletion to downstream services');
    }
  }

  async getSchema(projectId: number) {
    return this.repo.getProjectSchema(projectId);
  }

  async getMyPermissions(userId: number, projectId: number) {
    const userRoles = await this.repo.getUserRoles(projectId);
    const userRole = userRoles.find((ur: any) => ur.userId === userId);

    if (!userRole) {
      return { permissions: [] };
    }

    const permissions = userRole.role.permissions.map((p: any) => p.action);
    return { permissions };
  }

  async getRoles(projectId: number) {
    return this.repo.getRoles(projectId);
  }

  async createRole(projectId: number, data: { name: string; description?: string; permissions: string[] }) {
    return this.repo.createRole(projectId, data);
  }

  async updateRole(
    roleId: number,
    projectId: number,
    data: { name?: string; description?: string; permissions?: string[] },
  ) {
    return this.repo.updateRole(roleId, projectId, data);
  }

  async deleteRole(roleId: number) {
    return this.repo.deleteRole(roleId);
  }

  async getUserRoles(projectId: number) {
    return this.repo.getUserRoles(projectId);
  }

  async assignUserRole(projectId: number, userId: number, roleId: number, context: RequestContext) {
    const membership = await this.repo.assignUserRole(projectId, userId, roleId);

    await this.eventBus.publishEvent(
      'project.member_added',
      {
        projectId: projectId.toString(),
        userId: userId.toString(),
        roleId,
        addedBy: context.userId,
      },
      {
        requestId: context.requestId,
        userId: context.userId,
        projectId: projectId.toString(),
      },
    );

    return membership;
  }

  async removeUserRole(projectId: number, userId: number, roleId: number, context: RequestContext) {
    await this.repo.removeUserRole(projectId, userId, roleId);

    await this.eventBus.publishEvent(
      'project.member_added',
      {
        projectId: projectId.toString(),
        userId: userId.toString(),
        roleId,
        addedBy: context.userId,
      },
      {
        requestId: context.requestId,
        userId: context.userId,
        projectId: projectId.toString(),
      },
    );
  }

  async getActivities(projectId: number, authToken?: string) {
    const testCaseServiceUrl = process.env.TESTCASE_SERVICE_URL || 'http://localhost:3003';
    const testRunServiceUrl = process.env.TESTRUN_SERVICE_URL || 'http://localhost:3004';
    const activities: Array<{ type: string; user: string; description: string; timestamp: string }> = [];

    const headers = authToken
      ? { Authorization: `Bearer ${authToken}`, 'x-project-id': projectId.toString() }
      : { 'x-project-id': projectId.toString() };

    try {
      const { data: response } = await axios.get(`${testCaseServiceUrl}/cases?limit=5`, { headers });
      const testCases = (response as { data?: any[] }).data ?? response;
      if (Array.isArray(testCases)) {
        testCases.forEach((tc: any) => {
          activities.push({
            type: 'created',
            user: tc.createdBy || 'Unknown',
            description: `Created test case: ${tc.title || 'Untitled'}`,
            timestamp: tc.createdAt || new Date().toISOString(),
          });
        });
      }
    } catch {}

    try {
      const { data: response } = await axios.get(`${testRunServiceUrl}/?limit=5`, { headers });
      const testRuns = (response as { data?: any[] }).data ?? response;
      if (Array.isArray(testRuns)) {
        testRuns.forEach((tr: any) => {
          activities.push({
            type: 'created',
            user: tr.createdBy || 'Unknown',
            description: `Created test run: ${tr.name || 'Untitled'}`,
            timestamp: tr.createdAt || new Date().toISOString(),
          });
        });
      }
    } catch {}

    return activities.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 10);
  }

  // Test Case Types
  async createType(projectId: number, data: { name: string; description?: string; color?: string }) {
    return this.repo.createType(projectId, data);
  }

  async updateType(typeId: number, data: { name?: string; description?: string; color?: string }) {
    return this.repo.updateType(typeId, data);
  }

  async deleteType(typeId: number) {
    return this.repo.deleteType(typeId);
  }

  // Priorities
  async createPriority(projectId: number, data: { name: string; level: number; color?: string }) {
    return this.repo.createPriority(projectId, data);
  }

  async updatePriority(priorityId: number, data: { name?: string; level?: number; color?: string }) {
    return this.repo.updatePriority(priorityId, data);
  }

  async deletePriority(priorityId: number) {
    return this.repo.deletePriority(priorityId);
  }

  // Custom Fields
  async createCustomField(
    projectId: number,
    data: { name: string; fieldType: string; required?: boolean; description?: string },
  ) {
    return this.repo.createCustomField(projectId, data);
  }

  async updateCustomField(
    fieldId: number,
    data: { name?: string; fieldType?: string; required?: boolean; description?: string },
  ) {
    return this.repo.updateCustomField(fieldId, data);
  }

  async deleteCustomField(fieldId: number) {
    return this.repo.deleteCustomField(fieldId);
  }
}
