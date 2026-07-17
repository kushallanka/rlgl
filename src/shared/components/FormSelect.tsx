import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useId } from 'react';

export interface SelectOption {
  id?: string;
  name?: string;
  value?: string;
  label?: string;
}

interface FormSelectProps {
  label?: string;
  value: string;
  placeholder?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  onSelect?: (value: string) => void;
  onChange?: (value: string) => void;
  options: SelectOption[];
}

export function FormSelect({
  label,
  value,
  placeholder = 'Select...',
  isOpen = false,
  onToggle,
  onSelect,
  onChange,
  options,
}: FormSelectProps) {
  const handleSelect = (optValue: string) => {
    if (onSelect) onSelect(optValue);
    if (onChange) onChange(optValue);
  };

  const getOptionId = (opt: SelectOption) => opt.id ?? opt.value ?? '';
  const getOptionName = (opt: SelectOption) => opt.name ?? opt.label ?? '';
  const selectedName = value
    ? options.find((o) => getOptionId(o) === value)?.name ||
      options.find((o) => getOptionId(o) === value)?.label ||
      placeholder
    : placeholder;

  const hasDropdown = isOpen !== undefined && onToggle !== undefined && onSelect !== undefined;
  const selectId = useId();

  if (!hasDropdown) {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={selectId} className="text-[13px] font-medium text-white/60 tracking-wide pl-1">
            {label}
          </label>
        )}
        <select
          id={selectId}
          value={value}
          onChange={(e) => handleSelect(e.target.value)}
          className="w-full px-4 py-3.5 glass-input outline-none transition-ui text-white appearance-none cursor-pointer"
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={getOptionId(option)} value={getOptionId(option)}>
              {getOptionName(option)}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="space-y-2 relative z-30">
      {label && <span className="text-[13px] font-medium text-white/60 tracking-wide pl-1">{label}</span>}
      <motion.button
        type="button"
        onClick={onToggle}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-between px-4 py-3.5 glass-input text-white text-sm"
      >
        <span className={value ? 'text-white' : 'text-white/40'}>{selectedName}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-white/50" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 glass-card rounded-2xl overflow-hidden z-50 max-h-52 overflow-y-auto"
          >
            {options.map((option) => (
              <motion.button
                key={getOptionId(option)}
                type="button"
                onClick={() => handleSelect(getOptionId(option))}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(168, 85, 247, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                  getOptionId(option) === value ? 'text-white bg-purple-500/20' : 'text-white/70 hover:text-white'
                }`}
              >
                {getOptionName(option)}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SimpleSelectProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}

export function SimpleSelect({ label, value, onChange, options }: SimpleSelectProps) {
  const getOptionId = (opt: SelectOption) => opt.id ?? opt.value ?? '';
  const getOptionName = (opt: SelectOption) => opt.name ?? opt.label ?? '';
  const selectId = useId();

  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={selectId} className="text-[13px] font-medium text-white/60 tracking-wide pl-1">
          {label}
        </label>
      )}
      <select
        id={selectId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3.5 glass-input outline-none transition-ui text-white appearance-none cursor-pointer"
      >
        {options.map((option) => (
          <option key={getOptionId(option)} value={getOptionId(option)}>
            {getOptionName(option)}
          </option>
        ))}
      </select>
    </div>
  );
}
