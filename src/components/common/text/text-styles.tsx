import styled from 'styled-components';
import { TextComponent } from './text-component';

export const Text = styled(TextComponent)`
  color: ${(props) => (props.color ? props.color : '#ffffff')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '.9em')};
`;
