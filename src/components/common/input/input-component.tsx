import React from 'react';
import { InputField, Container, Label, ErrorLabel } from './input-styles';

interface InputProps {
  label: string;
  error: string;
  name: string;
}

const InputComponent = ({ label, error, name, ...props }: InputProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputField name={name} {...props} />
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </Container>
  );
};

export default InputComponent;
