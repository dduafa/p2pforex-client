import React from 'react';
import {
  Nav,
  Logo,
  SearchInputContainer,
  SearchInput,
  UserProfile,
} from './main-header-styles';

interface User {
  firstname: string;
  lastname: string;
}

const MainHeaderComponent = ({ firstname, lastname }: Partial<User>) => {
  return (
    <Nav>
      <Logo>Logo</Logo>
      <SearchInputContainer>
        <SearchInput type="text" placeholder="Search" />
      </SearchInputContainer>
      <UserProfile>
        <span>{`${firstname} ${lastname}`}</span>
        <i className="bx bx-chevron-down"></i>
      </UserProfile>
    </Nav>
  );
};

export default MainHeaderComponent;
