import React from 'react';
import styled from 'styled-components';

const ListingsPage = () => {
  return (
    <Container>
      <MainContent>
        <Listings>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </Listings>
      </MainContent>
    </Container>
  );
};

const Container = styled.section`
  display: 'flex';
  flex-direction: 'column';
  background: #f5f5f5;
  min-height: 100vh;
  width: 100%;
  transition: all 0.5s ease;
`;

const MainContent = styled.div`
  display: flex;
  justify-content: center;
`;

const Listings = styled.div`
  width: 95%;
  background: #fff;
  padding: 20px 30px;
  margin: 5px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export default ListingsPage;
