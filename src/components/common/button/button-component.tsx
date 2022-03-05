import React from 'react';
import { StyledButton } from './button-styles';

interface Props {
  children: JSX.Element;
  onClick: () => void;
  disabled: boolean;
}

const ButtonComponent = ({ children, ...props }: Props) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default ButtonComponent;
