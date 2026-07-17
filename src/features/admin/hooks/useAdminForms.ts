import { useCallback, useState } from 'react';
import { FormData, ModalState, TabType } from '../types/admin.types';

interface DeleteModalState {
  isOpen: boolean;
  itemType: string;
  item: any;
}

interface Mutations {
  createTypeMutation?: any;
  updateTypeMutation?: any;
  deleteTypeMutation?: any;
  createPriorityMutation?: any;
  updatePriorityMutation?: any;
  deletePriorityMutation?: any;
  createFieldMutation?: any;
  updateFieldMutation?: any;
  deleteFieldMutation?: any;
  createRoleMutation?: any;
  updateRoleMutation?: any;
  deleteRoleMutation?: any;
}

export function useAdminForms(_configSchema?: any, projectId?: string, mutations?: Mutations) {
  // Tab state
  const [activeTab, setActiveTab] = useState<TabType>('types');

  // Modal state
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    isEditing: false,
  });

  // Form data state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    type: 'text',
    required: false,
    options: [],
    permissions: [],
  });

  // Delete modal state
  const [deleteModalState, setDeleteModalState] = useState<DeleteModalState>({
    isOpen: false,
    itemType: '',
    item: null,
  });

  // Delete state
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  // Handle add click
  const handleAddClick = useCallback((itemType: string) => {
    setModalState({
      isOpen: true,
      isEditing: false,
    });

    // Reset form data based on item type
    const initialData: FormData = {
      name: '',
      type: 'text',
      required: false,
      options: [],
      permissions: [],
    };

    if (itemType === 'role') {
      initialData.permissions = [];
    } else if (itemType === 'field') {
      initialData.type = 'text';
      initialData.required = false;
      initialData.options = [];
    } else if (itemType === 'type') {
      initialData.color = 'blue';
      initialData.description = '';
    } else if (itemType === 'priority') {
      initialData.color = 'blue';
      initialData.level = 3;
    }

    setFormData(initialData);
  }, []);

  // Handle edit click
  const handleEditClick = useCallback((itemType: string, item: any) => {
    setModalState({
      isOpen: true,
      isEditing: true,
      editingItem: item,
      editingItemType: itemType,
    });

    // Set form data based on item type and existing data
    const editData: FormData = {
      name: item.name,
      type: item.type || 'text',
      required: item.required || false,
      options: item.options || [],
      permissions: (item.permissions || []).map((p: any) => (typeof p === 'string' ? p : p.action)),
      color: item.color,
      description: item.description,
      level: item.level,
    };

    setFormData(editData);
  }, []);

  // Handle delete click
  const handleDeleteClick = useCallback((itemType: string, item: any) => {
    setDeleteModalState({
      isOpen: true,
      itemType,
      item,
    });
    setDeleteSuccess(false);
    setDeleteError(null);
  }, []);

  // Handle form submit
  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!formData.name.trim()) {
        return;
      }

      if (!projectId) {
        console.error('No project ID available');
        return;
      }

      if (!mutations) {
        console.error('No mutations available');
        return;
      }

      if (modalState.isEditing && modalState.editingItem) {
        // Update existing item
        let updateMutation: any;
        if (activeTab === 'types') updateMutation = mutations.updateTypeMutation;
        else if (activeTab === 'priorities') updateMutation = mutations.updatePriorityMutation;
        else if (activeTab === 'fields') updateMutation = mutations.updateFieldMutation;
        else if (activeTab === 'roles') updateMutation = mutations.updateRoleMutation;

        if (updateMutation) {
          // Build update data based on tab type
          let updateData: any = { name: formData.name };
          if (activeTab === 'types') {
            updateData = {
              name: formData.name,
              description: formData.description,
              color: formData.color,
            };
          } else if (activeTab === 'priorities') {
            updateData = {
              name: formData.name,
              level: formData.level,
              color: formData.color,
            };
          } else if (activeTab === 'fields') {
            updateData = {
              name: formData.name,
              type: formData.type,
              required: formData.required,
              options: formData.options,
            };
          } else if (activeTab === 'roles') {
            updateData = {
              name: formData.name,
              permissions: (formData.permissions || []).map((p: any) => (typeof p === 'string' ? p : p.action)),
            };
          }
          updateMutation.mutate({
            id: modalState.editingItem.id,
            data: updateData,
          });
        }
      } else {
        // Create new item
        let createMutation: any;
        if (activeTab === 'types') createMutation = mutations.createTypeMutation;
        else if (activeTab === 'priorities') createMutation = mutations.createPriorityMutation;
        else if (activeTab === 'fields') createMutation = mutations.createFieldMutation;
        else if (activeTab === 'roles') createMutation = mutations.createRoleMutation;

        if (createMutation) {
          // Clean up data for specific types
          if (activeTab === 'types') {
            createMutation.mutate({
              name: formData.name,
              description: formData.description,
              color: formData.color,
              projectId,
            });
          } else if (activeTab === 'priorities') {
            createMutation.mutate({
              name: formData.name,
              level: formData.level || 3,
              color: formData.color,
              projectId,
            });
          } else if (activeTab === 'fields') {
            createMutation.mutate({
              name: formData.name,
              type: formData.type,
              required: formData.required,
              options: formData.options,
              projectId,
            });
          } else if (activeTab === 'roles') {
            createMutation.mutate({
              name: formData.name,
              permissions: formData.permissions,
              projectId,
            });
          }
        }
      }

      setModalState({ isOpen: false, isEditing: false });
    },
    [formData, modalState, activeTab, projectId, mutations],
  );

  // Handle confirm delete
  const handleConfirmDelete = useCallback(() => {
    if (!deleteModalState.item) return;
    if (!mutations) {
      console.error('No mutations available');
      return;
    }

    let deleteMutation: any;
    const itemType = deleteModalState.itemType;
    if (itemType === 'type') deleteMutation = mutations.deleteTypeMutation;
    else if (itemType === 'priority') deleteMutation = mutations.deletePriorityMutation;
    else if (itemType === 'field') deleteMutation = mutations.deleteFieldMutation;
    else if (itemType === 'role') deleteMutation = mutations.deleteRoleMutation;

    if (deleteMutation) {
      deleteMutation.mutate(deleteModalState.item.id, {
        onSuccess: () => {
          setDeleteSuccess(true);
          setTimeout(() => {
            setDeleteModalState({ isOpen: false, itemType: '', item: null });
            setDeleteSuccess(false);
          }, 1500);
        },
        onError: (error: any) => {
          setDeleteError(error.response?.data?.error || `Failed to delete ${itemType}`);
        },
      });
    }
  }, [deleteModalState, mutations]);

  // Reset all states
  const resetAllStates = useCallback(() => {
    setModalState({
      isOpen: false,
      isEditing: false,
      editingItem: null,
      editingItemType: undefined,
    });
    setFormData({
      name: '',
      type: 'text',
      required: false,
      options: [],
      permissions: [],
      color: undefined,
      description: undefined,
      level: undefined,
    });
    setDeleteModalState({
      isOpen: false,
      itemType: '',
      item: null,
    });
    setDeleteSuccess(false);
    setDeleteError(null);
  }, []);

  return {
    activeTab,
    setActiveTab,
    modalState,
    setModalState,
    formData,
    setFormData,
    deleteModalState,
    setDeleteModalState,
    deleteSuccess,
    setDeleteSuccess,
    deleteError,
    setDeleteError,
    resetAllStates,
    handleAddClick,
    handleEditClick,
    handleDeleteClick,
    handleFormSubmit,
    handleConfirmDelete,
  };
}
