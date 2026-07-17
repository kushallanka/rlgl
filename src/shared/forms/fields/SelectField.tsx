import { Controller, useFormContext } from 'react-hook-form';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  name: string;
  label: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
}

export function SelectField({ name, label, options, placeholder, required }: SelectFieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        {label}
        {required ? ' *' : ''}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            id={name}
            {...field}
            className="w-full px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-white"
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && <p className="text-xs text-red-400">{error.message as string}</p>}
    </div>
  );
}
