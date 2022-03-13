import React from 'react';
import styled from 'styled-components';

const DashboardPage = () => {
  return (
    <Container>
      <Nav>
        <SearchInputContainer>
          <SearchInput type="text" placeholder="Search" />
        </SearchInputContainer>
      </Nav>
      <Content>
        <Box>
          <Box></Box>
        </Box>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  position: relative;
  background: #f5f5f5;
  min-height: 100vh;
  width: calc(100% - 240px);
  left: 240px;
  transition: all 0.5s ease;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  width: calc(100% - 240px);
  left: 240px;
  z-index: 100;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-bottom: 26px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 4 - 15px);
  background: #fff;
  padding: 15px 14px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const SearchInputContainer = styled.div`
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 0 20px;
`;

const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  font-size: 0.99rem;
  padding: 0 15px;
`;
export default DashboardPage;
