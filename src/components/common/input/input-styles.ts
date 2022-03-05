import styled from 'styled-components';

interface InputProps {
  $margin?: string;
  $marginRight?: string;
  $border?: string;
  $marginBottom?: string;
  $padding?: string;
  $lableSize?: string;
  $width?: string;
  $bottomBorder?: boolean;
  $bgColor?: string;
  $fontSize?: string;
}

interface LabelProps {
  $fontSize?: string;
  $marginBottom?: string;
}

interface ContainerProps {
  $width?: string;
  $margin?: string;
  $marginRight?: string;
  $bgColor?: string;
}

export const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: ${({ $fontSize }: InputProps) => $fontSize};
  background-color: transparent;
  outline-width: 0;
  padding-bottom: 5px;
  border: ${({ $border }) => ($border ? $border : `1px solid gray`)};
  border-bottom: ${({ $bottomBorder }) =>
    $bottomBorder ? '1px solid gray' : '1px solid black'};
  padding-right: '50px';
  margin-top: 15px;
  padding: ${({ $padding }) => $padding};

  &:focus {
    outline: none;
  }
`;

export const ErrorLabel = styled.small`
  color: red;
  padding: none;
`;

export const Label = styled.label`
  font-size: ${({ $fontSize }: LabelProps) => $fontSize};
  line-height: 1.25;
  background-color: transparent;
  color: #000;
  margin-bottom: ${({ $marginBottom }) =>
    $marginBottom ? $marginBottom : ' 6px'};
`;

export const Container = styled.div`
  width: ${({ $width }: ContainerProps) => $width};
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin: ${({ $margin }) => ($margin ? $margin : '20px 0px 20px 0px;')};
  margin-right: ${({ $marginRight }) => $marginRight};
  background-color: ${({ $bgColor }) => $bgColor};
`;