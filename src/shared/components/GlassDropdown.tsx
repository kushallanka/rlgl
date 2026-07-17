import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export interface DropdownOption {
  id: string;
  label: string;
  subtitle?: string;
}

interface GlassDropdownProps {
  label: string;
  value: string;
  options: DropdownOption[];
  onChange: (id: string) => void;
  placeholder?: string;
  zIndex?: number;
  emptyMessage?: string;
}

export function GlassDropdown({
  label,
  value,
  options,
  onChange,
  placeholder = 'Select...',
  zIndex = 10,
  emptyMessage = 'No options available',
}: GlassDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.id === value);
  const displayLabel = selectedOption?.label || placeholder;
  const displaySubtitle = selectedOption?.subtitle;

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="space-y-2 relative" style={{ zIndex }} ref={containerRef}>
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 glass-input rounded-2xl focus:ring-2 focus:ring-violet-500 outline-none transition-ui text-sm text-gray-900 dark:text-white"
      >
        <span className={value ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-white/40'}>
          {displaySubtitle ? `${displayLabel} • ${displaySubtitle}` : displayLabel}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -5 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900/95 rounded-2xl overflow-hidden z-50 shadow-2xl border border-gray-200 dark:border-white/20 max-h-60 overflow-y-auto"
          >
            {options.length === 0 && (
              <div className="px-4 py-3 text-red-500 dark:text-red-400 text-sm">{emptyMessage}</div>
            )}
            {options.map((option, i) => (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  onChange(option.id);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-violet-100 dark:hover:bg-violet-600/80 text-gray-900 dark:text-white transition-colors text-sm font-medium ${
                  i % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/50' : 'bg-white dark:bg-gray-800/30'
                }`}
              >
                {option.subtitle ? `${option.label} • ${option.subtitle}` : option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
