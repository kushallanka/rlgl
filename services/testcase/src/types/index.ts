// TestCase Service Types

export interface CustomFieldDef {
  id: number;
  name: string;
  fieldType: string;
  required: boolean;
  options?: Array<{ value: string; label: string }>;
}

export interface PermissionCacheEntry {
  perms: string[];
  expiresAt: number;
}
