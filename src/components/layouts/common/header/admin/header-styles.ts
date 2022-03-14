import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  position: sticky;
  background-color: white;
  z-index: 100;
  top: 0;
  box-shadow: 0px 5px 8px -9px rgba(0, 0, 0, 0.75);
`;

export const HeaderLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const HeaderCenter = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const HeaderRight = styled.div`
  display: flex;
`;
