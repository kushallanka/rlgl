import { lazy } from 'react';

// Lazy loaded page components
export const Dashboard = lazy(() => import('../../pages/Dashboard'));
export const ProjectsPage = lazy(() => import('../../features/project/pages/ProjectsPage'));
export const TestCasesPage = lazy(() => import('../../features/testcase/pages/TestCasesPage'));
export const TestRunsPage = lazy(() => import('../../pages/TestRuns'));
export const AdminConfigurationPage = lazy(() => import('../../features/admin/pages/AdminConfigurationPage'));
export const LoginPage = lazy(() => import('../../pages/Login'));
export const LandingPage = lazy(() => import('../../pages/LandingPage'));

// Route configuration
export const routes = [
  {
    path: '/',
    component: Dashboard,
    protected: true,
  },
  {
    path: '/projects',
    component: ProjectsPage,
    protected: true,
  },
  {
    path: '/test-cases',
    component: TestCasesPage,
    protected: true,
  },
  {
    path: '/test-runs',
    component: TestRunsPage,
    protected: true,
  },
  {
    path: '/admin',
    component: AdminConfigurationPage,
    protected: true,
    adminOnly: true,
  },
  {
    path: '/login',
    component: LoginPage,
    protected: false,
  },
  {
    path: '/landing',
    component: LandingPage,
    protected: false,
  },
];
