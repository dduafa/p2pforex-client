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
  height: 40px;
  width: 100%;
  margin-top: 1rem;
  color: #ffffff;
  background-color: #828282;
  border-color: #b5b5b5;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: #b5b5b5;
    border-color: #828282;
    cursor: pointer;
  }
`;
