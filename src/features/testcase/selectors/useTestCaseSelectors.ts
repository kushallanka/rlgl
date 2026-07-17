import { usePermissionStore } from '../../../stores/permission.store';

export function useTestCasePermissions() {
  const hasPermission = usePermissionStore((s) => s.hasPermission);
  return {
    canCreateTestCase: hasPermission('testcase.create'),
    canEditTestCase: hasPermission('testcase.edit'),
    canDeleteTestCase: hasPermission('testcase.delete'),
    canEditSuite: hasPermission('testcase.edit'),
    canDeleteSuite: hasPermission('testcase.delete'),
    canEditSection: hasPermission('testcase.edit'),
    canDeleteSection: hasPermission('testcase.delete'),
  };
}
