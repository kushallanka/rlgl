import { useFormContext } from 'react-hook-form';

interface TextareaFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
}

export function TextareaField({ name, label, placeholder, required, rows = 3 }: TextareaFieldProps) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        {label}{required ? ' *' : ''}
      </label>
      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-white resize-none"
      />
      {error && (
        <p className="text-xs text-red-400">{error.message as string}</p>
      )}
    </div>
  );
}
