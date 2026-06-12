// Design-system primitives (canonical home: src/shared/ui)
export { Badge, Button, Card, EmptyState, IconButton, Kbd, Skeleton, Spinner, Tooltip } from '../ui';
export type { BadgeProps, ButtonProps, CardProps, IconButtonProps } from '../ui';

// Composite UI Components
export { Checkbox } from './Checkbox';
export { DropdownPortal } from './DropdownPortal';
export { DynamicFormField, DynamicFormFields } from './DynamicFormField';
export { ErrorAlert } from './ErrorAlert';
export { ErrorState } from './ErrorState';
export { FormInput } from './FormInput';
export { FormSelect, SimpleSelect } from './FormSelect';
export type { SelectOption } from './FormSelect';
export { FormTextarea } from './FormTextarea';
export { GlassDropdown } from './GlassDropdown';
export type { DropdownOption } from './GlassDropdown';
export { GlobalRequestBar } from './GlobalRequestBar';
export { Modal } from './Modal';
export { PermissionGate } from './PermissionGate';
export { default as ThemeSwitch } from './ThemeSwitch';
export { ToastComponent, ToastContainer } from './Toast';

// Loading Components
export { FullPageSpinner } from './loading/FullPageSpinner';
export { SkeletonLoader } from './loading/SkeletonLoader';
export { ProjectsGridSkeleton, DashboardOverviewSkeleton } from './loading/PageSkeletons';
