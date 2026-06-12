import React, { ReactNode } from 'react';
import { usePermission, useSystemPermission } from '../../hooks/usePermission';

interface PermissionGateProps {
  permission?: string;
  systemPermission?: string;
  fallback?: ReactNode;
  children: ReactNode;
}

export const PermissionGate: React.FC<PermissionGateProps> = ({ 
  permission, 
  systemPermission,
  fallback = null, 
  children 
}) => {
  const projPerm = usePermission(permission ?? '');
  const sysPerm = useSystemPermission(systemPermission ?? '');
  const hasProjPerm = permission ? projPerm : true;
  const hasSysPerm = systemPermission ? sysPerm : true;

  if (permission && systemPermission) {
    return hasProjPerm && hasSysPerm ? <>{children}</> : <>{fallback}</>;
  }
  
  if (permission) {
    return hasProjPerm ? <>{children}</> : <>{fallback}</>;
  }

  if (systemPermission) {
    return hasSysPerm ? <>{children}</> : <>{fallback}</>;
  }

  return <>{children}</>;
};
