import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  height: 100%;
  width: 240px;
  background: #0a2558;
  transition: all 0.5s ease;

  &:active {
    width: 60px;
  }
`;
