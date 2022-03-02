import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayoutComponent = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayoutComponent;
