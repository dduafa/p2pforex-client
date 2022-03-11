import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../common/header/header-component';
import FooterComponent from '../common/footer/footer-component';
import SidebarComponent from '../common/sidebar/sidebar-component';

import AlertComponent from '@/components/common/alert/alert-component';
import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';

const MainLayoutComponent = () => {
  const { errors, alertInfo } = useAppSelector(authSelector);

  return (
    <div>
      <HeaderComponent />
      {errors &&
        errors.length > 0 &&
        errors.map(({ message }, i) => (
          <AlertComponent key={i} message={message} severity="error" />
        ))}

      {alertInfo && <AlertComponent message={alertInfo} severity="success" />}
      <SidebarComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default MainLayoutComponent;
