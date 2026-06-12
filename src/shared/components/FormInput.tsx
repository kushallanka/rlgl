import { ChangeEventHandler, useId } from 'react';
import { motion } from 'motion/react';

interface FormInputProps {
  label: string;
  error?: string | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  value?: string;
  placeholder?: string;
  required?: boolean;
  min?: string;
  max?: string;
  step?: string;
  autoFocus?: boolean;
}

export function FormInput({ label, error, onChange, type = 'text', value, placeholder, required, min, max, step, autoFocus }: FormInputProps) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-[13px] font-medium text-fg-muted tracking-wide pl-1">
        {label}
        {required && <span className="text-rose-500 ml-0.5" aria-hidden="true">*</span>}
      </label>
      <motion.input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        max={max}
        step={step}
        autoFocus={autoFocus}
        aria-invalid={!!error || undefined}
        aria-describedby={error ? errorId : undefined}
        animate={error ? { x: [0, -5, 5, -5, 5, 0] } : {}}
        transition={{ duration: 0.4 }}
        className={`w-full px-4 py-3 rounded-xl outline-none transition-ui text-fg ${
          error
            ? 'glass-input !border-rose-500/60 focus:!border-rose-500'
            : 'glass-input'
        }`}
      />
      {error && (
        <motion.p
          id={errorId}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-rose-600 dark:text-rose-400 pl-1"
          role="alert"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
