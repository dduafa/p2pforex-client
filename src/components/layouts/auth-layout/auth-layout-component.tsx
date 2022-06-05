import React from 'react';
import { Outlet } from 'react-router-dom';
import { MainWrapper } from './auth-layout-styles';
import AlertComponent from 'components/common/alert/alert-component';
import { useAppSelector } from 'redux/hooks';
import { authSelector } from 'features/auth/auth-reducer';

const AuthLayoutComponent = () => {
  const { errors, alertInfo } = useAppSelector(authSelector);

  return (
    <MainWrapper>
      {errors &&
        errors.length > 0 &&
        errors.map(({ message }, i) => (
          <AlertComponent key={i} message={message} severity="error" />
        ))}

      {alertInfo && <AlertComponent message={alertInfo} severity="success" />}
      <Outlet />
    </MainWrapper>
  );
};

export default AuthLayoutComponent;
