export interface Project {
  id: string;
  name: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProjectMember {
  id: string;
  userId: string;
  projectId: string;
  roleId: string;
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    name?: string;
  };
  role?: {
    id: string;
    name: string;
    permissions: string[];
  };
}
