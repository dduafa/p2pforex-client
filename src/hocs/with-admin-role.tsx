import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  role: string;
}

type AdminProps = Props & React.HTMLProps<HTMLInputElement>;

const WithAdminRole = (Component: React.ComponentType) => {
  return function withAdminRoleComponent({ role, ...props }: AdminProps) {
    return role === 'admin' || role === 'superadmin' ? (
      <Component {...props} />
    ) : (
      <Navigate to="/listings" />
    );
  };
};

export default WithAdminRole;
