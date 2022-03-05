import styled from 'styled-components';

// export const StyledButton = styled.button`
//   background-color: #2f8bfd;
//   color: #ffffff;
//   min-width: 16px;
//   border: 0;
//   border-radius: 4px;
//   padding: 8px 16px;
//   outline: none;
//   font-size: 0.874rem;
//   line-height: 1.5;
//   letter-spacing: 0.02857rem;
//   cursor: pointer;
//   transition: all 0.2s;
//   &:hover {
//     background-color: #0072ff;
//   }
// `;

interface Props {
  $color?: string;
  $padding?: string;
  $width?: string;
  $bgColor?: string;
  $margin?: string;
  $position?: string;
  $align?: string;
  $top?: string;
  $boxShadow?: string;
  $border?: string;
}

export const StyledButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  color: ${({ $color }: Props) => ($color ? $color : '#fff')};
  padding: ${({ $padding }) => ($padding ? $padding : '15px 50px 15px 50px')};
  cursor: pointer;
  width: ${({ $width }) => ($width ? $width : 'auto')};
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : '#2f8bfd')};
  align-self: ${({ $align }) => ($align ? $align : 'center')};
  margin: ${({ $margin }) => $margin};
  border: none;
  position: ${({ $position }) => $position};
  top: ${({ $top }) => $top};
  color: ${({ $color }) => $color};
  box-shadow: ${({ $boxShadow }) => $boxShadow};
  border: ${({ $border }) => $border};

  &:disabled {
    background: #68a7cf;
  }

  &:hover {
    background-color: #0072ff;
  }
`;
