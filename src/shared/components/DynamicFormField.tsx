/**
 * Dynamic Form Field Component
 * Renders form fields based on configuration schema
 */

// Direct module imports — going through the './index' barrel creates a
// circular dependency (the barrel re-exports this file).
import { FormInput } from './FormInput';
import { FormTextarea } from './FormTextarea';
import { SimpleSelect } from './FormSelect';
import { Checkbox } from './Checkbox';
import type { CustomField } from '../../utils';

interface DynamicFormFieldProps {
  field: CustomField;
  value: any;
  onChange: (value: any) => void;
  error?: string | undefined;
}

export const DynamicFormField: React.FC<DynamicFormFieldProps> = ({ 
  field, 
  value, 
  onChange, 
  error 
}) => {
  const label = `${field.name}${field.required ? ' *' : ''}`;

  switch (field.fieldType) {
    case 'text':
      return (
        <FormInput
          label={label}
          value={value || ''}
          onChange={onChange}
          placeholder={`Enter ${field.name.toLowerCase()}`}
          error={error}
        />
      );

    case 'textarea':
      return (
        <FormTextarea
          label={label}
          value={value || ''}
          onChange={onChange}
          placeholder={`Enter ${field.name.toLowerCase()}`}
          rows={3}
          error={error}
        />
      );

    case 'select':
      return (
        <SimpleSelect
          label={label}
          value={value || ''}
          onChange={(val) => onChange(val)}
          options={[{ label: `Select ${field.name}...`, value: '' }, ...(field.options || [])]}
        />
      );

    case 'checkbox':
      return (
        <div className="p-3 rounded-xl hover:bg-white/5 transition-colors">
          <Checkbox
            checked={value || false}
            onChange={onChange}
            label={label}
          />
          {error && <span className="text-xs text-red-400 mt-1 block">{error}</span>}
        </div>
      );

    case 'date':
      return (
        <FormInput
          label={label}
          type="date"
          value={value || ''}
          onChange={onChange}
          error={error}
        />
      );

    case 'number':
      return (
        <FormInput
          label={label}
          type="number"
          value={value || ''}
          onChange={onChange}
          placeholder={`Enter ${field.name.toLowerCase()}`}
          error={error}
        />
      );

    default:
      return null;
  }
};

interface DynamicFormFieldsProps {
  fields: CustomField[];
  values: Record<string, any>;
  onChange: (fieldId: string, value: any) => void;
  errors?: Record<string, string>;
}

export const DynamicFormFields: React.FC<DynamicFormFieldsProps> = ({
  fields,
  values,
  onChange,
  errors = {}
}) => {
  return (
    <div className="space-y-4">
      {fields.map(field => (
        <DynamicFormField
          key={field.id}
          field={field}
          value={values[field.id] || values[field.name] || ''}
          onChange={(v) => onChange(field.id, v)}
          error={errors[field.id]}
        />
      ))}
    </div>
  );
};
