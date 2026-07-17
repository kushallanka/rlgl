import { Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { ConfirmModal } from '../../../shared/components/ConfirmModal';
import { FullPageSpinner } from '../../../shared/components/loading/FullPageSpinner';
import { usePermissionStore } from '../../../stores/permission.store';
import { useProjectStore } from '../../../stores/project.store';
import { AdminHeader } from '../components/AdminHeader';
import { AdminTabs } from '../components/AdminTabs';
import { AuditTab } from '../components/AuditTab';
import { ConfigModal } from '../components/ConfigModal';
import { FieldsTab } from '../components/FieldsTab';
import { MembersTab } from '../components/MembersTab';
import { PrioritiesTab } from '../components/PrioritiesTab';
import { RolesTab } from '../components/RolesTab';
import { TypesTab } from '../components/TypesTab';
import { useAdmin } from '../hooks/useAdmin';
import type { TabType } from '../types/admin.types';

export default function AdminConfigurationPage() {
  const { activeProject } = useProjectStore();

  const {
    configSchema,
    userRoles,
    isLoadingSchema,
    isLoadingUserRoles,
    schemaError,
    refetchSchema,
    createTypeMutation,
    updateTypeMutation,
    deleteTypeMutation,
    createPriorityMutation,
    updatePriorityMutation,
    deletePriorityMutation,
    createFieldMutation,
    updateFieldMutation,
    deleteFieldMutation,
    createRoleMutation,
    updateRoleMutation,
    deleteRoleMutation,
    removeUserRoleMutation,
    activeTab,
    setActiveTab,
    modalState,
    setModalState,
    formData,
    setFormData,
    deleteModalState,
    setDeleteModalState,
    deleteSuccess,
    deleteError,
    handleAddClick,
    handleEditClick,
    handleDeleteClick,
    handleFormSubmit,
    handleConfirmDelete,
  } = useAdmin(activeProject?.id || null);

  // Permissions
  const hasPermission = usePermissionStore((s) => s.hasPermission);
  const canViewTypes = hasPermission('config.types.view');
  const canEditTypes = hasPermission('config.types.edit');
  const canViewPriorities = hasPermission('config.priorities.view');
  const canEditPriorities = hasPermission('config.priorities.edit');
  const canViewFields = hasPermission('config.fields.view');
  const canEditFields = hasPermission('config.fields.edit');
  const canViewRoles = hasPermission('config.roles.view');
  const canEditRoles = hasPermission('config.roles.edit');
  const canViewAudit = hasPermission('config.audit.view');
  const canManageMembers = hasPermission('member.manage');

  if (!activeProject) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center justify-center py-20 space-y-4"
      >
        <div className="animate-float w-24 h-24 bg-gray-500/20 rounded-3xl flex items-center justify-center glass-shadow">
          <Settings className="w-12 h-12 text-gray-400 dark:text-white/50" />
        </div>
        <p className="text-gray-500 dark:text-white/50 font-body">Please select a project first</p>
      </motion.div>
    );
  }

  if (isLoadingSchema) {
    return <FullPageSpinner label="Loading configuration..." />;
  }

  if (schemaError) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <p className="text-red-500 dark:text-red-400">Failed to load configuration</p>
        <button
          type="button"
          onClick={() => refetchSchema()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  const tabs = [
    { id: 'types', label: 'Test Case Types', permission: canViewTypes },
    { id: 'priorities', label: 'Priorities', permission: canViewPriorities },
    { id: 'fields', label: 'Custom Fields', permission: canViewFields },
    { id: 'roles', label: 'Roles & Permissions', permission: canViewRoles },
    { id: 'members', label: 'Members', permission: canManageMembers },
    { id: 'audit', label: 'Audit Log', permission: canViewAudit },
  ].filter((tab) => tab.permission);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
      <AdminHeader projectName={activeProject.name} />

      <AdminTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={(tabId) => setActiveTab(tabId as TabType)}
        setActiveTab={(tab) => setActiveTab(tab as TabType)}
      />

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'types' && (
          <TypesTab
            items={configSchema?.types || []}
            canEdit={canEditTypes}
            onAdd={() => handleAddClick('type')}
            onEdit={(item) => handleEditClick('type', item)}
            onDelete={(item) => handleDeleteClick('type', item)}
          />
        )}
        {activeTab === 'priorities' && (
          <PrioritiesTab
            items={configSchema?.priorities || []}
            canEdit={canEditPriorities}
            onAdd={() => handleAddClick('priority')}
            onEdit={(item) => handleEditClick('priority', item)}
            onDelete={(item) => handleDeleteClick('priority', item)}
          />
        )}
        {activeTab === 'fields' && (
          <FieldsTab
            items={configSchema?.customFields || []}
            canEdit={canEditFields}
            onAdd={() => handleAddClick('field')}
            onEdit={(item) => handleEditClick('field', item)}
            onDelete={(item) => handleDeleteClick('field', item)}
          />
        )}
        {activeTab === 'roles' && (
          <RolesTab
            roles={configSchema?.roles || []}
            userRoles={userRoles}
            canEdit={canEditRoles}
            isLoadingUserRoles={isLoadingUserRoles}
            onAddRole={() => handleAddClick('role')}
            onEditRole={(item) => handleEditClick('role', item)}
            onDeleteRole={(item) => handleDeleteClick('role', item)}
            onRemoveUserRole={(id: string) => removeUserRoleMutation.mutateAsync(id) as Promise<any>}
          />
        )}
        {activeTab === 'members' && <MembersTab roles={configSchema?.roles || []} />}
        {activeTab === 'audit' && <AuditTab projectId={activeProject.id} />}
      </motion.div>

      {/* Modals */}
      <ConfigModal
        isOpen={modalState.isOpen}
        onClose={() =>
          setModalState({ isOpen: false, isEditing: false, editingItem: null, editingItemType: undefined })
        }
        type={modalState.isEditing ? 'edit' : 'add'}
        itemType={modalState.editingItemType || activeTab.slice(0, -1)} // Use stored type when editing
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleFormSubmit as any}
        isLoading={
          (activeTab === 'types' && (createTypeMutation.isPending || updateTypeMutation.isPending)) ||
          (activeTab === 'priorities' && (createPriorityMutation.isPending || updatePriorityMutation.isPending)) ||
          (activeTab === 'fields' && (createFieldMutation.isPending || updateFieldMutation.isPending)) ||
          (activeTab === 'roles' && (createRoleMutation.isPending || updateRoleMutation.isPending))
        }
      />

      <ConfirmModal
        isOpen={deleteModalState.isOpen}
        onClose={() => !deleteSuccess && setDeleteModalState({ ...deleteModalState, isOpen: false })}
        title={`Delete ${deleteModalState.itemType === 'type' ? 'Test Case Type' : deleteModalState.itemType === 'priority' ? 'Priority' : deleteModalState.itemType === 'field' ? 'Custom Field' : 'Role'}?`}
        itemName={deleteModalState.item?.name}
        onConfirm={handleConfirmDelete as any}
        isSuccess={deleteSuccess}
        error={deleteError}
        isLoading={
          (deleteModalState.itemType === 'type' && deleteTypeMutation.isPending) ||
          (deleteModalState.itemType === 'priority' && deletePriorityMutation.isPending) ||
          (deleteModalState.itemType === 'field' && deleteFieldMutation.isPending) ||
          (deleteModalState.itemType === 'role' && deleteRoleMutation.isPending)
        }
      />
    </motion.div>
  );
}
