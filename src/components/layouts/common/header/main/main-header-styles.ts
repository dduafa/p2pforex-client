import styled from 'styled-components';

export const Container = styled.section`
  display: 'flex';
  flex-direction: 'column';
  background: #f5f5f5;
  min-height: 100vh;
  width: 100%;
  transition: all 0.5s ease;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background: #fff;
  position: sticky;
  z-index: 100;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 0 20px;
`;

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  font-size: 0.99rem;
  padding: 0 15px;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  height: 50px;
  min-width: 190px;
  padding: 0 15px 0 2px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
`;
