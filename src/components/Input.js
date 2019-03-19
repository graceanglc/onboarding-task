import styled from 'styled-components';
import { Colors, Sizes } from 'src/styles/theme';

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: ${Sizes.font.reg};
  padding: ${Sizes.spacing.small} 0;
  > input {
    font-size: ${Sizes.font.reg};
    margin-top: ${Sizes.spacing.small};
  }
`;

export const TextInput = styled.input`
  width: 100%;
  padding: ${Sizes.spacing.medium};
  border: 1px solid ${Colors.grey(3)};
  border-radius: ${Sizes.radius.reg};
`;
