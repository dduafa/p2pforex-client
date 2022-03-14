import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';

const WithAuthticated = (Component: React.ComponentType) => {
  const { isAuthenticated } = useAppSelector(authSelector);
  const location = useLocation();

  return function withAuthticatedComponent({
    ...props
  }: React.HTMLProps<HTMLInputElement>) {
    return isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    );
  };
};

export default WithAuthticated;
