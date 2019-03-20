import { createShades } from './utils';

export const Colors = {
  black: '#000000',
  white: '#ffffff',

  price: '#21857c',

  accents: {
    green: 'rgba(126, 211, 33, 0.2)',
    red: 'rgba(255, 76, 76, 0.2)',
    yellow: 'rgba(245, 166, 35, 0.25)',
    cyan: 'rgba(80, 227, 194, 0.3)',
    gray: 'rgba(110, 114, 129, 0.15)',
    stoqo: '#f0592b',
  },

  grey: createShades('#393939', '#606060', '#808080', '#c0c0c0', '#e9e9e9', '#f4f4f4', '#f7f7f7'),
  primary: createShades('#ff6e40', '#fa6130'),
  accent: createShades('#6889ff', '#e8edff'),
  blue: createShades('#485465', '#2c375b', '#49598c', '#276ef1', '#53a8e2', '#66c2f5', '#e8edff'),
  green: createShades('#46b275', '#9abf65'),
  red: createShades('#ff0000', '#f25139'),
  yellow: createShades('#ffc44d', '#fffcee'),
  transparent: 'rgba(255, 255, 255, 0)',
};

export const Types = {
  family: {
    main: 'Lato, sans-serif',
    web: {
      main: '"Nunito Sans", sans-serif',
      heading: '"Cerebri Sans", sans-serif',
    },
  },
  weight: {
    reg: 400,
    bold: 700,
  },
};

export const Sizes = {
  font: {
    m: '1rem',
    reg: '0.875rem',
    sm: '0.75rem',
  },
  radius: {
    reg: '0.25rem',
  },
  spacing: {
    medium: '0.75rem',
    small: '0.625rem',
  },
};

export const Breakpoints = {
  sm: '20rem',
  md: '48rem',
  lg: '60rem',
  phonePortrait: '300px',
  phoneLandscape: '480px',
  tabletPortrait: '768px',
  tabletLandscape: '1024px',
};

export const Shadows = [
  '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
  '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
  '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
];

export const media = bp => `@media screen and (max-width: ${Breakpoints[bp]})`;

export default {
  Colors,
  Types,
  Sizes,
  Shadows,
  media,
};
