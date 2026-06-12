import { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { useProjectStore } from '../../../stores/project.store';
import { Button, type DropdownOption } from '../../../shared/components';
import { MemberList } from './MemberList';
import { AddMemberModal } from './AddMemberModal';
import { EditMemberModal } from './EditMemberModal';
import { useProjectMembersQuery, useAllUsersQuery, useAddMemberRoleMutation, useRemoveMemberRoleMutation, useUpdateMemberRoleMutation } from '../hooks/useProjectMembers';
import { useToast } from '../../../shared/hooks/useToast';

interface MembersTabProps {
  roles: any[];
}

export function MembersTab({ roles }: MembersTabProps) {
  const { activeProject } = useProjectStore();
  const projectId = activeProject?.id ?? null;
  const toast = useToast();

  const { data: members = [] } = useProjectMembersQuery(projectId);
  const { data: users = [], error: fetchError } = useAllUsersQuery();

  const addMemberMutation = useAddMemberRoleMutation(projectId);
  const removeMemberMutation = useRemoveMemberRoleMutation(projectId);
  const updateMemberMutation = useUpdateMemberRoleMutation(projectId);

  const [showAddMember, setShowAddMember] = useState(false);
  const [showEditMember, setShowEditMember] = useState(false);
  const [editingMember, setEditingMember] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [error, setError] = useState<string | null>(null);

  const userOptions: DropdownOption[] = users.map(u => ({
    id: u.id,
    label: u.firstName && u.lastName ? `${u.firstName} ${u.lastName}` : u.email,
    subtitle: u.email,
  }));

  const roleOptions: DropdownOption[] = roles.map(r => ({
    id: r.id,
    label: r.name,
  }));

  const getUserDisplayName = (userId: string) => {
    const user = users.find(u => u.id === userId);
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    if (user?.email) {
      return user.email;
    }
    return userId;
  };

  const handleEditClick = (member: any) => {
    setEditingMember(member);
    setSelectedUser(member.userId);
    setSelectedRole(member.roleId);
    setShowEditMember(true);
    setError(null);
  };

  const handleUpdateRole = async () => {
    if (!editingMember || !selectedRole) {
      setError('Please select a role');
      return;
    }
    try {
      setError(null);
      await updateMemberMutation.mutateAsync({
        userId: editingMember.userId,
        oldRoleId: editingMember.roleId,
        newRoleId: selectedRole,
      });
      setShowEditMember(false);
      setEditingMember(null);
      setSelectedUser('');
      setSelectedRole('');
      toast.success('Role updated successfully');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to update role');
    }
  };

  const handleAddMember = async () => {
    if (!selectedUser || !selectedRole) {
      setError('Please select both a user and a role');
      return;
    }
    try {
      setError(null);
      await addMemberMutation.mutateAsync({ userId: selectedUser, roleId: selectedRole });
      setShowAddMember(false);
      setSelectedUser('');
      setSelectedRole('');
      toast.success('Member role added successfully');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to add role');
    }
  };

  const handleRemoveRole = async (userId: string, roleId: string) => {
    if (!confirm('Remove this role from the user?')) return;
    try {
      await removeMemberMutation.mutateAsync({ userId, roleId });
      toast.success('Role removed successfully');
    } catch (err) {
      toast.error('Failed to remove role');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Project Members</h2>
        <Button onClick={() => setShowAddMember(true)} className="flex items-center gap-2 px-4 py-2 accent-blue text-white rounded-lg text-sm font-medium">
          <UserPlus className="w-4 h-4" /> Add Member Role
        </Button>
      </div>

      <MemberList
        members={members}
        users={users}
        onEditClick={handleEditClick}
        onRemoveRole={handleRemoveRole}
        getUserDisplayName={getUserDisplayName}
      />

      <AddMemberModal
        isOpen={showAddMember}
        onClose={() => { setShowAddMember(false); setError(null); }}
        selectedUser={selectedUser}
        onUserChange={setSelectedUser}
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        userOptions={userOptions}
        roleOptions={roleOptions}
        fetchError={fetchError ? 'Failed to load users' : null}
        error={error}
        isLoading={addMemberMutation.isPending}
        onSubmit={handleAddMember}
      />

      <EditMemberModal
        isOpen={showEditMember}
        onClose={() => { setShowEditMember(false); setError(null); }}
        member={editingMember}
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        roleOptions={roleOptions}
        error={error}
        isLoading={updateMemberMutation.isPending}
        onSubmit={handleUpdateRole}
        getUserDisplayName={getUserDisplayName}
      />
    </div>
  );
}