import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainWrapper } from './auth-layout-styles';

const AuthLayoutComponent = () => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  );
};

export default AuthLayoutComponent;
