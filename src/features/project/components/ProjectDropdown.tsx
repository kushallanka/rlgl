import { Info, Trash2, Pencil } from 'lucide-react';
import { ActionDropdown, type ActionItem } from '../../../shared/components/ActionDropdown';

interface ProjectDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onDetailsClick: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
  canDelete: boolean;
}

export function ProjectDropdown({
  isOpen,
  onToggle,
  onDetailsClick,
  onEditClick,
  onDeleteClick,
  canDelete,
}: ProjectDropdownProps) {
  const actions: ActionItem[] = [
    { label: 'Details', icon: Info,   onClick: onDetailsClick },
    { label: 'Edit',    icon: Pencil, onClick: onEditClick },
    ...(canDelete ? [{ label: 'Delete', icon: Trash2, onClick: onDeleteClick, variant: 'danger' as const }] : []),
  ];

  return <ActionDropdown isOpen={isOpen} onToggle={onToggle} actions={actions} />;
}
