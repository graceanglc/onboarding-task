import styled from 'styled-components';
import { Colors, Shadows } from 'src/styles/theme';
import { Box, Row } from './Box';

export const Header = styled(Row)`
  background: ${Colors.white};
  border-bottom: 1px solid #efefef;

  h1 {
    width: 10.5rem;
    margin: 0 1rem;
    margin-right: 2rem;
    font-size: 1.25rem;
    align-self: center;
    color: ${Colors.grey(0)};
  }
`;

export const Dropdown = styled.select`
  font-size: 0.875rem;
  background: white;
  border-radius: 0.25rem;
  border: 1px solid ${Colors.grey(3)};
  padding: 0.65rem 0.6rem;
  text-transform: capitalize;
  color: ${Colors.grey(1)};
`;

export const DropdownRow = styled(Row)`
  > * {
    margin-right: 0.5rem;
  }
`;
