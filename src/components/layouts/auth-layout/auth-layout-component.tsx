import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainWrapper } from './auth-layout-styles';
import AlertComponent from '@/components/common/alert/alert-component';
import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';

const AuthLayoutComponent = () => {
  const { errors } = useAppSelector(authSelector);

  return (
    <MainWrapper>
      {errors.length > 0 &&
        errors.map(({ message }, i) => (
          <AlertComponent key={i} message={message} severity="error" />
        ))}

      <Outlet />
    </MainWrapper>
  );
};

export default AuthLayoutComponent;
