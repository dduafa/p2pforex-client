import React from 'react';
import { Outlet } from 'react-router-dom';
import AlertComponent from '@/components/common/alert/alert-component';
import { useAppSelector } from '@appredux/hooks';
import { authSelector } from '@features/auth/auth-reducer';
import {
  Nav,
  Logo,
  SearchInputContainer,
  SearchInput,
  UserProfile,
} from './main-layout-styles';

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
      <header>
        <Nav>
          <Logo>Logo</Logo>
          <SearchInputContainer>
            <SearchInput type="text" placeholder="Search" />
          </SearchInputContainer>
          <UserProfile>
            <span>{`${user?.firstname} ${user?.lastname}`}</span>
            <i className="bx bx-chevron-down"></i>
          </UserProfile>
        </Nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayoutComponent;
