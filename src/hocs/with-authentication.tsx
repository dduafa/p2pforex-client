import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from 'redux/hooks';
import { authSelector } from 'features/auth/auth-reducer';

const WithAuthentication = (Component: React.ComponentType) => {
  return function WithAuthenticationComponent({
    ...props
  }: React.HTMLProps<HTMLInputElement>) {
    const { isAuthenticated } = useAppSelector(authSelector);
    const location = useLocation();

    return isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    );
  };
};

export default WithAuthentication;
