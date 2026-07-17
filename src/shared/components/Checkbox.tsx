import { CheckSquare, Square } from 'lucide-react';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: React.ReactNode;
  indeterminate?: boolean;
  className?: string;
}

export function Checkbox({ checked, onChange, label, indeterminate, className = '' }: CheckboxProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex items-center gap-2.5 flex-shrink-0 text-gray-600 hover:text-violet-400 transition-colors ${className}`}
    >
      {checked || indeterminate ? (
        <CheckSquare className="w-4 h-4 text-violet-400 flex-shrink-0" />
      ) : (
        <Square className="w-4 h-4 flex-shrink-0" />
      )}
      {label && <span className="text-sm text-white/80 select-none">{label}</span>}
    </button>
  );
}
