import { motion } from 'motion/react';
import { X, Pencil } from 'lucide-react';
import { GlassDropdown, type DropdownOption } from '../../../shared/components';

interface EditMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  member: any;
  selectedRole: string;
  onRoleChange: (id: string) => void;
  roleOptions: DropdownOption[];
  error: string | null;
  isLoading: boolean;
  onSubmit: () => void;
  getUserDisplayName: (userId: string) => string;
}

export function EditMemberModal({
  isOpen, onClose, member, selectedRole, onRoleChange, roleOptions, error, isLoading, onSubmit, getUserDisplayName,
}: EditMemberModalProps) {
  if (!isOpen || !member) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75">
      <motion.div
        initial={{ scale: 0.96, opacity: 0, y: 8 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.96, opacity: 0, y: 8 }}
        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-md"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-blue-600/30 rounded-3xl blur-xl opacity-60" />
        <div className="relative glass-modal rounded-3xl p-8 border border-gray-200 dark:border-white/20 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
              <Pencil className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Edit Role</h3>
              <p className="text-sm text-gray-500 dark:text-white/50">Update role for {getUserDisplayName(member.userId)}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-xl text-gray-400 dark:text-white/40 hover:text-gray-900 dark:hover:text-white transition-ui">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-5">
            <div className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10">
              <p className="text-xs text-gray-400 dark:text-white/40 uppercase tracking-wider mb-1">User</p>
              <p className="text-gray-900 dark:text-white font-medium">{getUserDisplayName(member.userId)}</p>
            </div>

            <GlassDropdown label="New Role" value={selectedRole} options={roleOptions} onChange={onRoleChange} placeholder="Select New Role" zIndex={10} emptyMessage="No roles available" />

            {error && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20">
                <p className="text-sm text-red-600 dark:text-red-400 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-500 dark:bg-red-400" />{error}</p>
              </motion.div>
            )}

            <div className="flex gap-3 pt-2">
              <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onClose} className="flex-1 py-3.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-white/70 font-medium hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-ui border border-gray-200 dark:border-white/10">
                Cancel
              </motion.button>
              <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={onSubmit} disabled={isLoading || !selectedRole || selectedRole === member.roleId} className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-blue-500/25 transition-ui disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-blue-500/40">
                {isLoading ? 'Updating...' : 'Update Role'}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
