import { Edit2, Trash2 } from 'lucide-react';
import { DropdownPortal } from '../../../shared/components/DropdownPortal';

interface ContextMenuItem {
  label: string;
  onClick: () => void;
  variant?: 'default' | 'danger';
}

interface ContextMenuProps {
  isOpen: boolean;
  triggerRef: { current: HTMLElement | null };
  onClose: () => void;
  items: ContextMenuItem[];
}

export function ContextMenu({ isOpen, triggerRef, onClose, items }: ContextMenuProps) {
  return (
    <DropdownPortal isOpen={isOpen} triggerRef={triggerRef} onClose={onClose} width={160}>
      {items.map((item) => (
        <button
          type="button"
          key={item.label}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
            item.onClick();
          }}
          className={`w-full px-4 py-3 flex items-center gap-3 text-sm transition-ui font-body ${
            item.variant === 'danger'
              ? 'text-red-600 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-500/30 dark:hover:text-red-200 border-t border-gray-100 dark:border-white/5'
              : 'text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white'
          }`}
        >
          {item.variant === 'danger' ? <Trash2 className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
          {item.label}
        </button>
      ))}
    </DropdownPortal>
  );
}

interface MoreButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  registerRef: (el: HTMLElement | null) => void;
}

export function MoreButton({ isOpen, onToggle, registerRef }: MoreButtonProps) {
  return (
    <button
      type="button"
      ref={registerRef as React.Ref<HTMLButtonElement>}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className={`p-2 rounded-lg transition-ui cursor-pointer ${
        isOpen
          ? 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white'
          : 'text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
      }`}
      aria-label="More options"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="19" r="1" />
      </svg>
    </button>
  );
}
