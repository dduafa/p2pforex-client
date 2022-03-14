import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeaderComponent from '../common/header/main/main-header-component';
import AlertComponent from '@/components/common/alert/alert-component';
import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';

const MainLayoutComponent = () => {
  const { errors, alertInfo, user } = useAppSelector(authSelector);

  return (
    <div>
      {errors &&
        errors.length > 0 &&
        errors.map(({ message }, i) => (
          <AlertComponent key={i} message={message} severity="error" />
        ))}

      {alertInfo && <AlertComponent message={alertInfo} severity="success" />}

      <main>
        <MainHeaderComponent
          firstname={user?.firstname}
          lastname={user?.lastname}
        />
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayoutComponent;
