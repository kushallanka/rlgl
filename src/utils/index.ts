/**
 * Utility functions for common operations
 */

/**
 * Get status color class based on status value
 */
export function getStatusColorClass(status: string): string {
  const STATUS_COLORS: Record<string, string> = {
    Passed: 'text-green-500 bg-green-500/10 border-green-500/20',
    Failed: 'text-red-500 bg-red-500/10 border-red-500/20',
    Blocked: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20',
    NotApplicable: 'text-gray-500 bg-gray-500/10 border-gray-500/20',
    Untested: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
  };
  return STATUS_COLORS[status] ?? STATUS_COLORS.Untested ?? '';
}

/**
 * Get status indicator color (dot) based on status
 */
export function getStatusIndicatorColor(status: string): string {
  const STATUS_INDICATORS: Record<string, string> = {
    Passed: 'bg-emerald-500',
    Failed: 'bg-red-500',
    Blocked: 'bg-orange-500',
    NotApplicable: 'bg-gray-500',
    Untested: 'bg-blue-500',
  };
  return STATUS_INDICATORS[status] ?? STATUS_INDICATORS.Untested ?? '';
}

/**
 * Format date to locale string
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString();
}

/**
 * Build query string from object
 */
export function buildQueryString(params: Record<string, any>): string {
  const query = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      query.append(key, String(value));
    }
  });
  return query.toString();
}

/**
 * Validate email
 */
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Trim and validate string
 */
export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

// ============ SCHEMA & FORM UTILITIES ============

/**
 * Configuration Schema Types
 */
export interface CustomFieldOption {
  id?: string;
  label: string;
  value: string;
  order: number;
}

export interface CustomField {
  id: string;
  name: string;
  description?: string;
  fieldType: 'text' | 'textarea' | 'select' | 'checkbox' | 'date' | 'number';
  required: boolean;
  options?: CustomFieldOption[];
  order: number;
}

export interface TestCaseType {
  id: string;
  name: string;
  description?: string;
  color?: string;
}

export interface Priority {
  id: string;
  name: string;
  level: number;
  color?: string;
}

export interface ConfigSchema {
  types: TestCaseType[];
  priorities: Priority[];
  customFields: CustomField[];
}

/**
 * Validate custom field value based on field configuration
 */
export function validateCustomFieldValue(field: CustomField, value: any): { valid: boolean; error?: string } {
  if (field.required && (value === null || value === undefined || value === '')) {
    return { valid: false, error: `${field.name} is required` };
  }

  switch (field.fieldType) {
    case 'number':
      if (value && Number.isNaN(Number(value))) {
        return { valid: false, error: `${field.name} must be a number` };
      }
      break;

    case 'date':
      if (value && Number.isNaN(new Date(value).getTime())) {
        return { valid: false, error: `${field.name} must be a valid date` };
      }
      break;

    case 'select':
      if (value && field.options && !field.options.some((opt) => opt.value === value)) {
        return { valid: false, error: `Invalid option selected for ${field.name}` };
      }
      break;
  }

  return { valid: true };
}

/**
 * Validate all custom field values
 */
export function validateCustomFieldValues(
  fields: CustomField[],
  values: Record<string, any>,
): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  fields.forEach((field) => {
    const validation = validateCustomFieldValue(field, values[field.id] || values[field.name]);
    if (!validation.valid && validation.error) {
      errors[field.id] = validation.error;
    }
  });

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Get color class for priority or type
 */
export function getItemColorClass(color?: string): string {
  const colorMap: Record<string, string> = {
    red: 'bg-red-500/10 border-red-500/20 text-red-400',
    orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400',
    yellow: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    green: 'bg-green-500/10 border-green-500/20 text-green-400',
    blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
  };
  return colorMap[color || 'blue'] ?? colorMap.blue ?? '';
}

/**
 * Get available permissions
 */
export const AVAILABLE_PERMISSIONS = [
  { action: 'config.manage', label: 'Manage Configuration', resource: 'config' },
  { action: 'config.types.edit', label: 'Edit Types', resource: 'config' },
  { action: 'config.priorities.edit', label: 'Edit Priorities', resource: 'config' },
  { action: 'config.fields.edit', label: 'Edit Custom Fields', resource: 'config' },
  { action: 'config.roles.edit', label: 'Edit Roles', resource: 'config' },
  { action: 'config.audit.view', label: 'View Audit Logs', resource: 'config' },
  { action: 'member.manage', label: 'Manage Members', resource: 'member' },
  { action: 'project.manage', label: 'Manage Project', resource: 'project' },
  { action: 'testcase.create', label: 'Create Test Cases', resource: 'testcase' },
  { action: 'testcase.edit', label: 'Edit Test Cases', resource: 'testcase' },
  { action: 'testcase.delete', label: 'Delete Test Cases', resource: 'testcase' },
  { action: 'testcase.view', label: 'View Test Cases', resource: 'testcase' },
  { action: 'testrun.create', label: 'Create Test Runs', resource: 'testrun' },
  { action: 'testrun.update', label: 'Update Test Runs', resource: 'testrun' },
  { action: 'testrun.delete', label: 'Delete Test Runs', resource: 'testrun' },
] as const;
