import { css } from 'styled-components';
import kebabCase from 'lodash/kebabCase';

export const BASE_SIZE = 16;

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

export const propMixin = (prop, alias) => css`
  ${props => props[alias || prop] && `${kebabCase(prop)}: ${props[alias || prop]}`};
`;

export const resets = {
  spacing: spacingReset,
  border: borderReset,
};

/**
 * Colors
 */

export const createShades = (...shades) => (index = 0) => shades[index];
