import { useAuthStore } from './auth.store';
import { usePermissionStore } from './permission.store';
import { injectPermissionActions, useProjectStore } from './project.store';

injectPermissionActions(
  (projectId: string) => {
    usePermissionStore.getState().fetchPermissions(projectId);
  },
  () => {
    usePermissionStore.getState().clearPermissions();
  },
);

useAuthStore.getState().onLogout(() => {
  useProjectStore.getState().clearActiveProject();
  usePermissionStore.getState().clearPermissions();
});

const initialActiveProject = JSON.parse(localStorage.getItem('activeProject') || 'null');
if (initialActiveProject) {
  usePermissionStore.getState().fetchPermissions(initialActiveProject.id);
}
