import { useFormContext } from 'react-hook-form';

interface TextFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}

export function TextField({ name, label, placeholder, required, type = 'text' }: TextFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        {label}
        {required ? ' *' : ''}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="w-full px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-white"
      />
      {error && <p className="text-xs text-red-400">{error.message as string}</p>}
    </div>
  );
}
