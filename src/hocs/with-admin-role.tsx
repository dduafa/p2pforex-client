import React from 'react';
import { Navigate } from 'react-router-dom';
import { authSelector } from '@features/auth/auth-reducer';
import { useAppSelector } from '@appredux/hooks';

const WithAdminRole = (Component: React.ComponentType) => {
  return function WithAdminRoleComponent({
    ...props
  }: React.HTMLProps<HTMLInputElement>) {
    const { user } = useAppSelector(authSelector);
    const role = user?.role ? user.role : 'normaluser';

    return role === 'admin' || role === 'superadmin' ? (
      <Component {...props} />
    ) : (
      <Navigate to="/listings" />
    );
  };
};

export default WithAdminRole;
