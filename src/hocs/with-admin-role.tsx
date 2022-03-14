import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  role: string;
}

type AdminProps = Props & React.HTMLProps<HTMLInputElement>;

const WithAdminRole = (Component: React.ComponentType) => {
  let location = useLocation();

  return function withAdminRoleComponent({ role, ...props }: AdminProps) {
    return role === 'admin' || role === 'superadmin' ? (
      <Component {...props} />
    ) : (
      <Navigate to="/listings" state={{ from: location }} />
    );
  };
};

export default WithAdminRole;
