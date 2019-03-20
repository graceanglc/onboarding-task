import { css } from 'styled-components';

/**
 * CSS Helpers
 */

export const spacingReset = css`
  margin: 0;
  padding: 0;
`;

export const borderReset = css`
  border: 0;
`;

export const resets = {
  spacing: spacingReset,
  border: borderReset,
};

/**
 * Colors
 */

export const createShades = (...shades) => (index = 0) => shades[index];
