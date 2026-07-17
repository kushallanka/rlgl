import { UserPlus, X } from 'lucide-react';
import { motion } from 'motion/react';
import { type DropdownOption, GlassDropdown } from '../../../shared/components';

interface AddMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedUser: string;
  onUserChange: (id: string) => void;
  selectedRole: string;
  onRoleChange: (id: string) => void;
  userOptions: DropdownOption[];
  roleOptions: DropdownOption[];
  fetchError: string | null;
  error: string | null;
  isLoading: boolean;
  onSubmit: () => void;
}

export function AddMemberModal({
  isOpen,
  onClose,
  selectedUser,
  onUserChange,
  selectedRole,
  onRoleChange,
  userOptions,
  roleOptions,
  fetchError,
  error,
  isLoading,
  onSubmit,
}: AddMemberModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75">
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 8 }}
        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-md"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-purple-600/30 rounded-3xl blur-xl opacity-60" />
        <div className="relative glass-modal rounded-3xl p-8 border border-gray-200 dark:border-white/20 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg">
              <UserPlus className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Assign Role</h3>
              <p className="text-sm text-gray-500 dark:text-white/50">Add a user to this project</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-ui"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-5">
            <GlassDropdown
              label="User"
              value={selectedUser}
              options={userOptions}
              onChange={onUserChange}
              placeholder="Select User"
              zIndex={20}
              emptyMessage={fetchError || 'No users available'}
            />
            <GlassDropdown
              label="Role"
              value={selectedRole}
              options={roleOptions}
              onChange={onRoleChange}
              placeholder="Select Role"
              zIndex={10}
              emptyMessage="No roles available"
            />

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20"
              >
                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400" />
                  {error}
                </p>
              </motion.div>
            )}

            <div className="flex gap-3 pt-2">
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="flex-1 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70 font-medium hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui border border-gray-200 dark:border-white/10"
              >
                Cancel
              </motion.button>
              <motion.button
                type="button"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onSubmit}
                disabled={isLoading || !selectedUser || !selectedRole}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium shadow-lg shadow-purple-500/25 transition-ui disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-purple-500/40"
              >
                {isLoading ? 'Assigning...' : 'Assign Role'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
