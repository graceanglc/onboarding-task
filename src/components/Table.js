import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Colors } from 'src/styles/theme';

const TableElement = styled.div`
  display: flex;
`;

export const Table = styled(TableElement)`
  flex-direction: column;
  margin-bottom: 2rem;
`;

export const TableHeader = styled(TableElement)`
  background: ${Colors.blue(6)};
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  font-weight: 600;
`;

export const TableRow = styled(Link)`
  display: flex;
  text-decoration: none;

  &:nth-child(even) {
    background: ${Colors.white};
  }

  &:nth-child(odd) {
    background: ${Colors.grey(5)};
  }

  &:hover {
    background-color: rgba(255, 210, 221, 0.6);
  }
`;

export const TableCell = styled(TableElement)`
  font-size: 0.8rem;
  padding: 1rem 0.5rem;
  margin-right: 2rem;
  text-decoration: none;
  color: ${Colors.grey(0)};
  text-overflow: ellipsis;

  &.selector {
    text-align: center;
    padding: 1rem;
    margin-right: 0;
    font-weight: 600;
  }

  &.name {
    width: 8rem;
  }

  &.address {
    flex: 1;
  }

  &.type {
    flex: 0.2;
    text-align: center;
  }

  &.description {
    flex: 0.5;
  }

  &.phone {
    width: 8rem;
  }
`;
