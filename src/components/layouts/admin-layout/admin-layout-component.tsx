import React from 'react';
import { Outlet } from 'react-router-dom';
import AlertComponent from '@/components/common/alert/alert-component';
import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';
import { MainContent } from './admit-layout-styles';
import {
  HeaderContainer,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  SidebarContainer,
} from './admit-layout-styles';

const AdminLayoutComponent = () => {
  const { errors, alertInfo, user } = useAppSelector(authSelector);

  return (
    <div>
      <HeaderContainer>
        <HeaderLeft> Logo </HeaderLeft>
        <HeaderCenter />
        <HeaderRight>
          <span>{`${user?.firstname} ${user?.lastname}`}</span>
        </HeaderRight>
      </HeaderContainer>

      {errors &&
        errors.length > 0 &&
        errors.map(({ message }, i) => (
          <AlertComponent key={i} message={message} severity="error" />
        ))}

      {alertInfo && <AlertComponent message={alertInfo} severity="success" />}

      <SidebarContainer />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
};

export default AdminLayoutComponent;
