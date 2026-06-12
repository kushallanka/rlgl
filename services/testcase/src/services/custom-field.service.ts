// Custom Field Validation Service
import type { CustomFieldDef } from '../types/index.js';

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

export const validateCustomFieldValues = (
  fields: CustomFieldDef[],
  values: Record<string, any>
): ValidationResult => {
  const errors: Record<string, string> = {};

  for (const field of fields) {
    const value = values?.[field.id];
    const isEmpty = value === undefined || value === null || value === '';

    if (field.required && isEmpty) {
      errors[field.id] = `${field.name} is required`;
      continue;
    }

    if (!isEmpty) {
      if (field.fieldType === 'number' && isNaN(Number(value))) {
        errors[field.id] = `${field.name} must be a number`;
      }
      if (field.fieldType === 'date' && isNaN(Date.parse(value))) {
        errors[field.id] = `${field.name} must be a valid date`;
      }
      if (field.fieldType === 'checkbox' && typeof value !== 'boolean') {
        errors[field.id] = `${field.name} must be true or false`;
      }
      if (field.fieldType === 'select' && field.options && !field.options.some(o => o.value === value)) {
        errors[field.id] = `${field.name} must be one of: ${field.options.map(o => o.value).join(', ')}`;
      }
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
};
