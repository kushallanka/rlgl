import { Pencil, Trash2 } from 'lucide-react';
import { motion } from 'motion/react';

interface MemberListProps {
  members: any[];
  users: any[];
  onEditClick: (member: any) => void;
  onRemoveRole: (userId: string, roleId: string) => void;
  getUserDisplayName: (userId: string) => string;
}

export function MemberList({ members, onEditClick, onRemoveRole, getUserDisplayName }: MemberListProps) {
  if (members.length === 0) {
    return (
      <div className="text-center py-8 text-gray-400 dark:text-white/50">
        <p className="text-sm">No members assigned to this project yet</p>
        <p className="text-xs mt-1">Click "Add Member Role" to assign roles</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {members.map((member) => (
        <motion.div
          key={member.id}
          className="liquid-glass p-4 rounded-xl border border-gray-200 dark:border-white/10 flex justify-between items-center"
        >
          <div>
            <p className="text-gray-900 dark:text-white font-bold">{getUserDisplayName(member.userId)}</p>
            <p className="text-sm text-gray-400 dark:text-white/50">{member.role?.name}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => onEditClick(member)}
              className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-ui"
              title="Edit role"
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onRemoveRole(member.userId, member.roleId)}
              className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-ui"
              title="Remove role"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
