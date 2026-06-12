import { TextareaHTMLAttributes, ChangeEventHandler } from 'react';

interface FormTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  label: string;
  error?: string | undefined;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

export function FormTextarea({ label, error, onChange, ...props }: FormTextareaProps) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-body">{label}</label>
      <textarea
        {...props}
        onChange={onChange}
        className={`w-full px-4 py-3 glass-input rounded-2xl outline-none transition-ui text-gray-900 dark:text-white resize-none font-body ${
          error ? 'border-red-500/50 focus:ring-red-500/50' : 'border-gray-200 dark:border-white/10 focus:border-gray-400 dark:focus:border-white/30'
        }`}
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}