import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { GlassDropdown } from '../../../shared/components';
import { Checkbox } from '../../../shared/components/Checkbox';
import { AVAILABLE_PERMISSIONS } from '../../../utils';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'add' | 'edit';
  itemType: string;
  formData: any;
  setFormData: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export function ConfigModal({
  isOpen,
  onClose,
  type,
  itemType,
  formData,
  setFormData,
  onSubmit,
  isLoading,
}: ConfigModalProps) {
  if (!isOpen) return null;

  const getItemIcon = () => {
    switch (itemType) {
      case 'type':
        return '🏷️';
      case 'priority':
        return '🚩';
      case 'field':
        return '📝';
      case 'role':
        return '🛡️';
      default:
        return '⚙️';
    }
  };

  const getItemTitle = () => {
    switch (itemType) {
      case 'type':
        return 'Test Case Type';
      case 'priority':
        return 'Priority';
      case 'field':
        return 'Custom Field';
      case 'role':
        return 'Role';
      default:
        return 'Item';
    }
  };

  const renderFormFields = () => {
    switch (itemType) {
      case 'field':
        return (
          <>
            <GlassDropdown
              label="Field Type"
              value={formData.type || ''}
              options={[
                { id: 'text', label: 'Text' },
                { id: 'number', label: 'Number' },
                { id: 'date', label: 'Date' },
                { id: 'select', label: 'Select' },
              ]}
              onChange={(val) => setFormData({ ...formData, type: val })}
              placeholder="Select field type"
              zIndex={20}
            />

            <div className="space-y-2">
              <Checkbox
                checked={formData.required}
                onChange={(val) => setFormData({ ...formData, required: val })}
                label={
                  <span className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider">
                    Required Field
                  </span>
                }
              />
            </div>

            {formData.type === 'select' && (
              <div className="space-y-2">
                <label
                  htmlFor="config-options"
                  className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider"
                >
                  Options (one per line)
                </label>
                <textarea
                  id="config-options"
                  value={formData.options?.join('\n') || ''}
                  onChange={(e) =>
                    setFormData({ ...formData, options: e.target.value.split('\n').filter((o) => o.trim()) })
                  }
                  placeholder="Option 1&#10;Option 2&#10;Option 3"
                  rows={3}
                  className="w-full px-4 py-3.5 liquid-glass rounded-xl focus:ring-2 focus:ring-orange-500/50 outline-none transition-ui text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 resize-none"
                />
              </div>
            )}
          </>
        );

      case 'type':
        return (
          <>
            <div className="space-y-2">
              <span className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider">
                Color
              </span>
              <div className="flex gap-2 flex-wrap">
                {['blue', 'purple', 'green', 'red', 'orange', 'yellow', 'pink', 'gray'].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setFormData({ ...formData, color })}
                    className={`w-8 h-8 rounded-lg transition-[transform,box-shadow] duration-200 ${
                      formData.color === color ? 'ring-2 ring-gray-600 dark:ring-white scale-110' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="config-type-description"
                className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider"
              >
                Description
              </label>
              <textarea
                id="config-type-description"
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Optional description"
                rows={2}
                className="w-full px-4 py-3.5 liquid-glass rounded-xl focus:ring-2 focus:ring-orange-500/50 outline-none transition-ui text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30 resize-none"
              />
            </div>
          </>
        );

      case 'priority':
        return (
          <>
            <div className="space-y-2">
              <label
                htmlFor="config-priority-level"
                className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider"
              >
                Level
              </label>
              <input
                id="config-priority-level"
                type="number"
                value={formData.level || 3}
                onChange={(e) => setFormData({ ...formData, level: parseInt(e.target.value, 10) })}
                placeholder="Priority level (1-5)"
                className="w-full px-4 py-3.5 liquid-glass rounded-xl focus:ring-2 focus:ring-orange-500/50 outline-none transition-ui text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider">
                Color
              </span>
              <div className="flex gap-2 flex-wrap">
                {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'].map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setFormData({ ...formData, color })}
                    className={`w-8 h-8 rounded-lg transition-[transform,box-shadow] duration-200 ${
                      formData.color === color ? 'ring-2 ring-gray-600 dark:ring-white scale-110' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </>
        );

      case 'role':
        return (
          <div className="space-y-2">
            <span className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider">
              Permissions
            </span>
            <div className="space-y-1 max-h-72 overflow-y-auto">
              {AVAILABLE_PERMISSIONS.map((permission) => (
                <div
                  key={permission.action}
                  className="px-2 py-1.5 hover:bg-black/[0.03] dark:hover:bg-white/5 rounded-lg transition-colors"
                >
                  <Checkbox
                    checked={formData.permissions?.includes(permission.action) || false}
                    onChange={(checked) => {
                      const permissions = formData.permissions || [];
                      setFormData({
                        ...formData,
                        permissions: checked
                          ? [...permissions, permission.action]
                          : permissions.filter((p: string) => p !== permission.action),
                      });
                    }}
                    label={permission.label}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 8 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-modal rounded-3xl p-8 max-w-md w-full glass-shadow border border-gray-200 dark:border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-14 h-14 accent-orange rounded-2xl flex items-center justify-center glow-orange shadow-lg"
            >
              <span className="text-2xl">{getItemIcon()}</span>
            </motion.div>
            <div>
              <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                {type === 'edit' ? 'Edit' : 'Create'} {getItemTitle()}
              </h2>
              <p className="text-sm text-gray-500 dark:text-white/50 font-body">
                {type === 'edit' ? 'Update' : 'Add a new'} {getItemTitle().toLowerCase()}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="ml-auto p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl text-gray-400 dark:text-white/50 hover:text-gray-900 dark:hover:text-white transition-ui"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="config-name"
                className="text-[11px] font-body font-medium text-gray-500 dark:text-white/60 uppercase tracking-wider"
              >
                Name
              </label>
              <input
                id="config-name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={`Enter ${getItemTitle().toLowerCase()} name`}
                className="w-full px-4 py-3.5 liquid-glass rounded-xl focus:ring-2 focus:ring-orange-500/50 outline-none transition-ui text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/30"
                // biome-ignore lint/a11y/noAutofocus: focuses the first field of an explicitly user-triggered modal, not on page load
                autoFocus
                required
              />
            </div>

            {renderFormFields()}

            <div className="flex gap-3 pt-4">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70 font-body font-medium hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui"
              >
                Cancel
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
                className="flex-1 py-3 rounded-xl accent-orange text-white font-body font-medium glow-orange shadow-lg transition-ui disabled:opacity-50"
              >
                {isLoading ? 'Saving...' : type === 'edit' ? 'Update' : 'Create'}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
