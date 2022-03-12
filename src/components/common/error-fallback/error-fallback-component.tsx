import React from 'react';
import styled from 'styled-components';

const ErrorFallbackComponent = () => {
  return <Container>Something went wrong:</Container>;
};

const Container = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
`;

export default ErrorFallbackComponent;
