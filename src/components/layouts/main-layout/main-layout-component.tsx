import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderComponent from '../common/header/header-component';
import FooterComponent from '../common/footer/footer-component';
import SidebarComponent from '../common/sidebar/sidebar-component';

const MainLayoutComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <SidebarComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
};

export default MainLayoutComponent;
