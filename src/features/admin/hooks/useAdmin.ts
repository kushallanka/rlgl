import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { adminApi } from '../api/admin.api';
import type { FormData, ModalState, TabType } from '../types/admin.types';

interface DeleteModalState {
  isOpen: boolean;
  itemType: string;
  item: any;
}

export function useAdmin(projectId: string | null) {
  const queryClient = useQueryClient();

  // ── Configuration schema query ──────────────────────────────────
  const {
    data: configSchema,
    isLoading: isLoadingSchema,
    error: schemaError,
    refetch: refetchSchema,
  } = useQuery({
    queryKey: ['config-schema', projectId],
    queryFn: async () => {
      if (!projectId) return null;
      const res = await adminApi.getConfigSchema(projectId);
      return res.data;
    },
    enabled: !!projectId,
  });

  // ── Mutations ───────────────────────────────────────────────────
  const createTypeMutation = useMutation({
    mutationFn: (data: { name: string; projectId: string }) =>
      adminApi.createType(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
    },
  });

  const updateTypeMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string; description?: string; color?: string } }) =>
      adminApi.updateType(projectId!, id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
    },
  });

  const deleteTypeMutation = useMutation({
    mutationFn: (id: string) => adminApi.deleteType(projectId!, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
    },
  });

  const createPriorityMutation = useMutation({
    mutationFn: (data: { name: string; projectId: string }) =>
      adminApi.createPriority(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
    },
  });

  const updatePriorityMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string; level?: number; color?: string } }) =>
      adminApi.updatePriority(projectId!, id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
    },
  });

  const deletePriorityMutation = useMutation({
    mutationFn: (id: string) => adminApi.deletePriority(projectId!, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
    },
  });

  const createFieldMutation = useMutation({
    mutationFn: (data: {
      name: string;
      type: 'text' | 'number' | 'date' | 'select';
      required: boolean;
      options?: string[];
      projectId: string;
    }) => adminApi.createField(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
    },
  });

  const updateFieldMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<any> }) =>
      adminApi.updateField(projectId!, id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
    },
  });

  const deleteFieldMutation = useMutation({
    mutationFn: (id: string) => adminApi.deleteField(projectId!, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
    },
  });

  const createRoleMutation = useMutation({
    mutationFn: (data: { name: string; permissions: string[]; projectId: string }) =>
      adminApi.createRole(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
      queryClient.invalidateQueries({ queryKey: ['user-roles', projectId] });
    },
  });

  const updateRoleMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string; permissions: string[] } }) =>
      adminApi.updateRole(projectId!, id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
      queryClient.invalidateQueries({ queryKey: ['user-roles', projectId] });
    },
  });

  const deleteRoleMutation = useMutation({
    mutationFn: (id: string) => adminApi.deleteRole(projectId!, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['config-schema', projectId] });
      queryClient.invalidateQueries({ queryKey: ['user-roles', projectId] });
    },
  });

  const addUserRoleMutation = useMutation({
    mutationFn: (data: { userId: string; roleId: string; projectId: string }) =>
      adminApi.addUserRole(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-roles', projectId] });
    },
  });

  const updateUserRoleMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: { roleId: string } }) =>
      adminApi.updateUserRole(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-roles', projectId] });
    },
  });

  const removeUserRoleMutation = useMutation({
    mutationFn: adminApi.removeUserRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user-roles', projectId] });
    },
  });

  // ── User roles query ────────────────────────────────────────────
  const {
    data: userRoles = [],
    isLoading: isLoadingUserRoles,
    refetch: refetchUserRoles,
  } = useQuery({
    queryKey: ['user-roles', projectId],
    queryFn: () => adminApi.getUserRoles(projectId!).then(res => res.data?.data ?? res.data),
    enabled: !!projectId,
  });

  // ── Form / UI state ─────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState<TabType>('types');

  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    isEditing: false,
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    type: 'text',
    required: false,
    options: [],
    permissions: [],
  });

  const [deleteModalState, setDeleteModalState] = useState<DeleteModalState>({
    isOpen: false,
    itemType: '',
    item: null,
  });

  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleAddClick = useCallback((itemType: string) => {
    setModalState({ isOpen: true, isEditing: false });

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

  const handleEditClick = useCallback((itemType: string, item: any) => {
    setModalState({
      isOpen: true,
      isEditing: true,
      editingItem: item,
      editingItemType: itemType,
    });

    const editData: FormData = {
      name: item.name,
      type: item.type || 'text',
      required: item.required || false,
      options: item.options || [],
      permissions: (item.permissions || []).map((p: any) => typeof p === 'string' ? p : p.action),
      color: item.color,
      description: item.description,
      level: item.level,
    };

    setFormData(editData);
  }, []);

  const handleDeleteClick = useCallback((itemType: string, item: any) => {
    setDeleteModalState({ isOpen: true, itemType, item });
    setDeleteSuccess(false);
    setDeleteError(null);
  }, []);

  // Loose structural type: the four tabs have different mutation input
  // types, and calling .mutate on their union would require the (useless)
  // intersection of all inputs. Each call site is already guarded by tab.
  const getMutationForTab = useCallback((tab: TabType): {
    create: { mutate: (vars: any, options?: any) => void };
    update: { mutate: (vars: any, options?: any) => void };
    delete: { mutate: (vars: any, options?: any) => void };
  } | null => {
    switch (tab) {
      case 'types': return { create: createTypeMutation, update: updateTypeMutation, delete: deleteTypeMutation };
      case 'priorities': return { create: createPriorityMutation, update: updatePriorityMutation, delete: deletePriorityMutation };
      case 'fields': return { create: createFieldMutation, update: updateFieldMutation, delete: deleteFieldMutation };
      case 'roles': return { create: createRoleMutation, update: updateRoleMutation, delete: deleteRoleMutation };
      default: return null;
    }
  }, [createTypeMutation, updateTypeMutation, deleteTypeMutation,
      createPriorityMutation, updatePriorityMutation, deletePriorityMutation,
      createFieldMutation, updateFieldMutation, deleteFieldMutation,
      createRoleMutation, updateRoleMutation, deleteRoleMutation]);

  const handleFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !projectId) return;

    const mutations = getMutationForTab(activeTab);
    if (!mutations) return;

    if (modalState.isEditing && modalState.editingItem) {
      let updateData: any = { name: formData.name };
      if (activeTab === 'types') {
        updateData = { name: formData.name, description: formData.description, color: formData.color };
      } else if (activeTab === 'priorities') {
        updateData = { name: formData.name, level: formData.level, color: formData.color };
      } else if (activeTab === 'fields') {
        updateData = { name: formData.name, type: formData.type, required: formData.required, options: formData.options };
      } else if (activeTab === 'roles') {
        updateData = {
          name: formData.name,
          permissions: (formData.permissions || []).map((p: any) => typeof p === 'string' ? p : p.action),
        };
      }
      mutations.update.mutate({ id: modalState.editingItem.id, data: updateData });
    } else {
      if (activeTab === 'types') {
        mutations.create.mutate({ name: formData.name, description: formData.description, color: formData.color, projectId });
      } else if (activeTab === 'priorities') {
        mutations.create.mutate({ name: formData.name, level: formData.level || 3, color: formData.color, projectId });
      } else if (activeTab === 'fields') {
        mutations.create.mutate({ name: formData.name, type: formData.type, required: formData.required, options: formData.options, projectId });
      } else if (activeTab === 'roles') {
        mutations.create.mutate({ name: formData.name, permissions: formData.permissions, projectId });
      }
    }

    setModalState({ isOpen: false, isEditing: false });
  }, [formData, modalState, activeTab, projectId, getMutationForTab]);

  const handleConfirmDelete = useCallback(() => {
    if (!deleteModalState.item) return;

    const mutations = getMutationForTab(activeTab);
    if (!mutations) return;

    mutations.delete.mutate(deleteModalState.item.id, {
      onSuccess: () => {
        setDeleteSuccess(true);
        setTimeout(() => {
          setDeleteModalState({ isOpen: false, itemType: '', item: null });
          setDeleteSuccess(false);
        }, 1500);
      },
      onError: (error: any) => {
        setDeleteError(error.response?.data?.error || `Failed to delete ${deleteModalState.itemType}`);
      },
    });
  }, [deleteModalState, activeTab, getMutationForTab]);

  const resetAllStates = useCallback(() => {
    setModalState({ isOpen: false, isEditing: false, editingItem: null, editingItemType: undefined });
    setFormData({
      name: '', type: 'text', required: false, options: [], permissions: [],
      color: undefined, description: undefined, level: undefined,
    });
    setDeleteModalState({ isOpen: false, itemType: '', item: null });
    setDeleteSuccess(false);
    setDeleteError(null);
  }, []);

  return {
    // Config data
    configSchema,
    userRoles,
    isLoadingSchema,
    isLoadingUserRoles,
    schemaError,
    refetchSchema,
    refetchUserRoles,

    // Mutations
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
    addUserRoleMutation,
    updateUserRoleMutation,
    removeUserRoleMutation,

    // Form / UI state
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
