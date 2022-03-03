import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const AuthLayoutComponent = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
`;

export default AuthLayoutComponent;
