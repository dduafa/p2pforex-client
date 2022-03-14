import styled from 'styled-components';

export const MainContent = styled.main`
  position: relative;
  background: #f5f5f5;
  min-height: 100vh;
  width: calc(100% - 240px);
  left: 240px;
  transition: all 0.5s ease;

  @media (max-width: 1240px) {
    width: calc(100% - 60px);
    left: 60px;
  }
`;

export const HeaderContainer = styled.header`
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

export const SidebarContainer = styled.aside`
  position: fixed;
  height: 100%;
  width: 240px;
  background: #0a2558;
  transition: all 0.5s ease;

  &:active {
    width: 60px;
  }

  @media (max-width: 1240px) {
    width: 60px;
  }
`;
