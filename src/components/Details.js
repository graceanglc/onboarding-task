import styled from 'styled-components';
import { Box } from 'src/components/Box';
import { Colors, Shadows } from 'src/styles/theme';

export const Content = styled.div`
  padding: 1.875rem 0;

  h3 {
    color: #a0a0a0;
    font-size: 1rem;
    margin: 0 0 0.65rem;
    text-transform: capitalize;
  }
`;

export const Card = styled(Box)`
  padding: 1.65rem 1.5rem;
  background: ${Colors.white};
  margin-bottom: 2rem;
  flex-direction: column;
  flex-wrap: wrap;
  box-shadow: ${Shadows[0]};
  min-height: 5rem;

  .entry {
    display: flex;
    min-width: 50%;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;

    .key,
    .value {
      white-space: wrap;
      text-overflow: ellipsis;
    }

    .key {
      width: 9rem;
      margin-right: 0.75rem;
      color: ${Colors.grey(1)};
    }

    .value {
      width: 12rem;
      color: ${Colors.grey(0)};
    }
  }
`;
