import { Edit2, Plus, Shield, Trash2, UserPlus, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface RolesTabProps {
  roles: any[];
  userRoles: any[];
  canEdit: boolean;
  isLoadingUserRoles: boolean;
  onAddRole: () => void;
  onEditRole: (item: any) => void;
  onDeleteRole: (item: any) => void;
  onRemoveUserRole: (id: string) => Promise<any>;
}

export function RolesTab({
  roles,
  userRoles,
  canEdit,
  isLoadingUserRoles,
  onAddRole,
  onEditRole,
  onDeleteRole,
  onRemoveUserRole,
}: RolesTabProps) {
  return (
    <div className="space-y-8">
      {/* Roles Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Roles</h2>
          {canEdit && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onAddRole}
              className="flex items-center gap-2 px-4 py-2 accent-green text-white rounded-lg font-medium text-sm"
            >
              <Plus className="w-4 h-4" />
              Add Role
            </motion.button>
          )}
        </div>

        {roles.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <Shield className="w-16 h-16 text-gray-400 dark:text-white/30 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-white/50">No roles configured</p>
            {canEdit && (
              <button type="button" onClick={onAddRole} className="mt-4 text-green-400 hover:text-green-300">
                Add your first role
              </button>
            )}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="liquid-glass p-4 rounded-xl border border-gray-200 dark:border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 accent-green rounded-lg flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">{role.name}</span>
                      <div className="text-xs text-gray-400 dark:text-white/50 mt-1">
                        {role.permissions?.length || 0} permissions
                      </div>
                    </div>
                  </div>
                  {canEdit && (
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onEditRole(role)}
                        className="p-1.5 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/[0.05] dark:hover:bg-white/10 rounded-lg transition-ui"
                      >
                        <Edit2 className="w-3 h-3" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onDeleteRole(role)}
                        className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-ui"
                      >
                        <Trash2 className="w-3 h-3" />
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* User Roles Section */}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-gray-700 dark:text-white" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">User Roles</h2>
        </div>

        {isLoadingUserRoles ? (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-white/50">Loading user roles...</p>
          </div>
        ) : userRoles.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <UserPlus className="w-16 h-16 text-gray-400 dark:text-white/30 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-white/50">No user roles assigned</p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {userRoles.map((userRole, index) => (
              <motion.div
                key={userRole.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="liquid-glass p-4 rounded-xl border border-gray-200 dark:border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 accent-blue rounded-lg flex items-center justify-center">
                      <UserPlus className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">{userRole.user?.name}</span>
                      <div className="text-sm text-gray-400 dark:text-white/50">{userRole.user?.email}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 accent-green rounded-lg text-sm text-white">{userRole.role?.name}</span>
                    {canEdit && (
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onRemoveUserRole(userRole.id)}
                        className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-ui"
                      >
                        <Trash2 className="w-3 h-3" />
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
