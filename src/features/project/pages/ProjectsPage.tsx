import { useState, useEffect, useRef } from 'react';
import { useProjectStore } from '../../../stores/project.store';
import { useAuthStore } from '../../../stores/auth.store';
import type { Project } from '../../../features/project/types/project.types';
import { usePermissionStore } from '../../../stores/permission.store';
import { useProjectsList } from '../hooks/useProjectsList';
import { FullPageSpinner } from '../../../shared/components/loading/FullPageSpinner';
import { ErrorState } from '../../../shared/components/ErrorState';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { CreateProjectModal } from '../components/CreateProjectModal';
import { DeleteProjectModal } from '../components/DeleteProjectModal';
import { ProjectDetailsModal } from '../components/ProjectDetailsModal';
import { EditProjectModal } from '../components/EditProjectModal';
import { ProjectsHeader } from '../components/ProjectsHeader';

export default function ProjectsPage() {
  const { projects, setActiveProject, activeProject } = useProjectStore();
  const projectsQuery = useProjectsList();

  // Modal states
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Project states
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deletingProjectId, setDeletingProjectId] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [editError, setEditError] = useState<string | null>(null);

  // Dropdown states
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update selectedProject when projects data changes (e.g., after edit)
  useEffect(() => {
    if (selectedProject && projectsQuery.projects) {
      const updatedProject = projectsQuery.projects.find((p: Project) => p.id === selectedProject.id);
      if (updatedProject) {
        setSelectedProject(updatedProject);
      }
    }
  }, [projectsQuery.projects, selectedProject?.id]);

  // Permissions
  const canCreateProject = useAuthStore(s => s.hasSystemPermission('system.project.create'));
  const canDeleteActiveProject = usePermissionStore(s => s.hasPermission('project.manage'));

  // Check if user can delete a specific project
  const canDeleteProject = (_project: Project) => {
    return canDeleteActiveProject;
  };

  const handleRefresh = () => {
    if (projectsQuery.refetch) {
      void projectsQuery.refetch();
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!name.trim()) {
      setFormError('Project name is required');
      return;
    }
    try {
      await projectsQuery.createMutation.mutateAsync({ name, description: description || '' });
      setName('');
      setDescription('');
      setIsCreateModalOpen(false);
      setFormError(null);
    } catch (err: unknown) {
      const ax = err as { response?: { data?: { error?: string; message?: string } }; message?: string };
      const errorMsg = ax.response?.data?.error || ax.response?.data?.message || ax.message || 'Failed to create project';
      setFormError(errorMsg);
    }
  };

  const handleToggleActive = (project: any) => {
    if (activeProject?.id === project.id) {
      setActiveProject(null);
    } else {
      setActiveProject(project);
    }
  };

  const handleDeleteClick = (project: Project) => {
    setOpenDropdownId(null);
    if (!canDeleteProject(project)) return;
    setProjectToDelete(project);
    setDeleteError(null);
    setIsDeleteModalOpen(true);
  };

  const handleDetailsClick = (project: Project) => {
    setOpenDropdownId(null);
    setSelectedProject(project);
    setIsDetailsModalOpen(true);
  };

  const handleEditClick = (project: Project) => {
    setOpenDropdownId(null);
    setSelectedProject(project);
    setName(project.name);
    setDescription(project.description || '');
    setEditError(null);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEditError(null);
    if (!name.trim()) {
      setEditError('Project name is required');
      return;
    }
    if (!selectedProject) return;

    try {
      await projectsQuery.updateMutation.mutateAsync({
        id: selectedProject.id,
        data: { name, description: description || '' },
      });
      setIsEditModalOpen(false);
      setEditError(null);
      setSelectedProject(null);
      setName('');
      setDescription('');
    } catch (err: unknown) {
      const ax = err as { response?: { data?: { error?: string; message?: string } }; message?: string };
      const errorMsg = ax.response?.data?.error || ax.response?.data?.message || ax.message || 'Failed to update project';
      setEditError(errorMsg);
    }
  };

  const toggleDropdown = (projectId: string) => {
    setOpenDropdownId(openDropdownId === projectId ? null : projectId);
  };

  const handleConfirmDelete = async () => {
    if (!projectToDelete) return;

    setDeletingProjectId(projectToDelete.id);
    setDeleteError(null);

    try {
      await projectsQuery.deleteMutation.mutateAsync(projectToDelete.id);
      setDeleteSuccess(true);

      if (activeProject?.id === projectToDelete.id) {
        setActiveProject(null);
      }

      setTimeout(() => {
        setIsDeleteModalOpen(false);
        setProjectToDelete(null);
        setDeleteSuccess(false);
        setDeletingProjectId(null);
      }, 1500);
    } catch (error: unknown) {
      const err = error as { response?: { status?: number; data?: { message?: string } }; message?: string };
      let errorMsg = 'Failed to delete project. Please try again.';
      if (err.response?.status === 403) {
        errorMsg = 'You do not have permission to delete this project.';
      } else if (err.response?.status === 401) {
        errorMsg = 'Your session has expired. Please log in again.';
      } else if (err.response?.status === 404) {
        errorMsg = 'Project not found.';
      } else if (err.response?.data?.message || err.message) {
        errorMsg = err.response?.data?.message || err.message || errorMsg;
      }
      setDeleteError(errorMsg);
      setDeletingProjectId(null);
    }
  };

  if (projectsQuery.isLoading) {
    return <FullPageSpinner label="Loading projects…" />;
  }

  if (projectsQuery.error) {
    return (
      <ErrorState
        message={projectsQuery.error?.message || 'Failed to load projects.'}
        onRetry={handleRefresh}
      />
    );
  }

  // Use query data directly when available
  const displayProjects = projectsQuery.projects || projects;
  const hasProjects = Array.isArray(displayProjects) && displayProjects.length > 0;

  return (
    <div className="space-y-8">
      <ProjectsHeader
        canCreateProject={canCreateProject}
        isFetching={projectsQuery.isFetching && !projectsQuery.isLoading}
        onRefresh={handleRefresh}
        onCreateProject={() => setIsCreateModalOpen(true)}
      />

      <ProjectsGrid
        projects={displayProjects}
        activeProject={activeProject}
        hasProjects={hasProjects}
        canCreateProject={canCreateProject}
        openDropdownId={openDropdownId}
        dropdownRef={dropdownRef}
        onToggleActive={handleToggleActive}
        onToggleDropdown={toggleDropdown}
        onDetailsClick={handleDetailsClick}
        onEditClick={handleEditClick}
        onDeleteClick={handleDeleteClick}
        canDeleteProject={canDeleteProject}
        onCreateProject={() => setIsCreateModalOpen(true)}
      />

      {/* Modals */}
      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        formError={formError}
        onSubmit={handleCreate}
        isLoading={projectsQuery.createMutation.isPending}
      />

      <DeleteProjectModal
        isOpen={isDeleteModalOpen}
        onClose={() => !deleteSuccess && setIsDeleteModalOpen(false)}
        projectToDelete={projectToDelete}
        deleteSuccess={deleteSuccess}
        deleteError={deleteError}
        deletingProjectId={deletingProjectId}
        onConfirmDelete={handleConfirmDelete}
      />

      <ProjectDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        selectedProject={selectedProject}
        activeProject={activeProject}
      />

      <EditProjectModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        project={selectedProject}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        formError={editError}
        onSubmit={handleEditSubmit}
        isLoading={projectsQuery.updateMutation.isPending}
      />
    </div>
  );
}
