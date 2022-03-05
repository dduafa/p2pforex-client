import styled from 'styled-components';

export const MainWrapper = styled.main`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: center;
  }
`;
