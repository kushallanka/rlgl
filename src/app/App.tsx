import { type ReactNode, Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { usePermission } from '../hooks/usePermission';
import { GlobalRequestBar } from '../shared/components/GlobalRequestBar';
import { FullPageSpinner } from '../shared/components/loading/FullPageSpinner';
import { ToastContainer } from '../shared/components/Toast';
import { useAuthStore } from '../stores/auth.store';
import { useToastStore } from '../stores/toast.store';
import { AppShell } from './layout/AppShell';
import { routes } from './routes';

function AdminRoute({ children }: { children: ReactNode }) {
  const hasConfigManage = usePermission('config.manage');
  const hasMemberManage = usePermission('member.manage');
  if (!hasConfigManage && !hasMemberManage) return <Navigate to="/" />;
  return <>{children}</>;
}

function AppRoutes() {
  const { user } = useAuthStore();

  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.component;

        // Redirect logged-in users away from the login page
        if (!route.protected && route.path === '/login' && user) {
          return <Route key={route.path} path={route.path} element={<Navigate to="/projects" replace />} />;
        }

        // Unauthenticated users go to login for protected routes
        if (route.protected && !user) {
          return <Route key={route.path} path={route.path} element={<Navigate to="/login" replace />} />;
        }

        const element = route.adminOnly ? (
          <AdminRoute>
            <Component />
          </AdminRoute>
        ) : (
          <Component />
        );

        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Suspense fallback={<FullPageSpinner />}>{element}</Suspense>}
          />
        );
      })}
    </Routes>
  );
}

function AppContent() {
  const location = useLocation();
  const { toasts, removeToast } = useToastStore();
  const isLandingPage = location.pathname === '/landing';

  return (
    <>
      <GlobalRequestBar />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      {isLandingPage ? (
        <Suspense fallback={<FullPageSpinner />}>
          <AppRoutes />
        </Suspense>
      ) : (
        <AppShell>
          <AppRoutes />
        </AppShell>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
