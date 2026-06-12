export interface ConfigType {
  id: string;
  name: string;
  projectId: string;
  color?: string;
  description?: string;
}

export interface ConfigPriority {
  id: string;
  name: string;
  projectId: string;
  color?: string;
  level?: number;
}

export interface ConfigField {
  id: string;
  name: string;
  type: 'text' | 'number' | 'date' | 'select';
  required: boolean;
  options?: string[];
  projectId: string;
}

export interface ConfigRole {
  id: string;
  name: string;
  permissions: string[];
  projectId: string;
}

export interface ConfigUserRole {
  id: string;
  userId: string;
  roleId: string;
  projectId: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  role?: ConfigRole;
}

export interface ConfigSchema {
  types: ConfigType[];
  priorities: ConfigPriority[];
  customFields: ConfigField[];
  roles: ConfigRole[];
}

export interface FormData {
  name: string;
  type?: 'text' | 'number' | 'date' | 'select';
  required?: boolean;
  options?: string[];
  permissions?: string[];
  description?: string | undefined;
  color?: string | undefined;
  level?: number | undefined;
}

export interface ModalState {
  isOpen: boolean;
  isEditing: boolean;
  editingItem?: any;
  editingItemType?: string | undefined;
}

export type TabType = 'types' | 'priorities' | 'fields' | 'roles' | 'members' | 'audit';

export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  details: string;
  timestamp: string;
  projectId: string;
}
