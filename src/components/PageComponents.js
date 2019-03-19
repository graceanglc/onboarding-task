import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Colors, Shadows } from 'src/styles/theme';
import { Box, Row } from './Box';

export const TabBar = styled(Row)`
  border-bottom: 1px solid ${Colors.grey(4)};
`;

export const TabButton = styled(NavLink)`
  padding: 0.75rem 0.25rem;
  margin: 0 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${Colors.grey(1)};

  &.selected {
    color: ${Colors.blue(3)};
    border-bottom: 3px solid ${Colors.blue(3)};
  }
`;

export const AvatarWrapper = styled.div`
  .UserAvatar--inner {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2px;
    font-size: ${props => props.fontSize || '1rem'};
    background: linear-gradient(-135deg, #c14757, #7e287c);
    ${props => props.backgroundAlt && 'background: linear-gradient(-135deg, #e89629, #ff740a)'};
    ${props => props.backgroundWhite && 'background: white'};
    color: white;
    font-weight: bold;
  }
`;

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

export const Stat = styled.div`
  min-width: 8rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  white-space: pre;

  h4 {
    font-size: 0.75rem;
    margin: 0;
    color: ${Colors.grey(1)};
    opacity: 0.8;
  }

  div {
    font-size: 0.9rem;
    color: ${Colors.grey(1)};
  }
`;

export const Notes = styled(Box)`
  flex-basis: 26.5%;
  padding: 0.75rem;

  > div {
    padding: 1.125rem 1.25rem;
    background: ${Colors.white};
    box-shadow: ${Shadows[0]};
    height: 36rem;
  }

  h2 {
    margin: 0 0 1rem;
    font-size: 0.875rem;
    color: ${Colors.grey(1)};
    font-weight: 600;
  }
`;
