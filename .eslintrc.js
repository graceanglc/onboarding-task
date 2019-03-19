const path = require('path');
const cwd = process.cwd();
const prettierConfig = require('./.prettierrc');

module.exports = {
  extends: 'airbnb',
  plugins: ['prettier', 'react', 'jsx-a11y', 'import', 'react-hooks'],
  env: {
    jest: true,
  },
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': ['error', prettierConfig],
    'react/jsx-filename-extension': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/forbid-prop-types': ['warn', { forbid: ['any'] }],
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-newline': 'off',
    camelcase: 'warn',
    "jsx-a11y/anchor-is-valid": [ "error", {
        "components": [ "Link" ],
        "specialLink": [ "to", "hrefLeft", "hrefRight" ],
        "aspects": [ "noHref", "invalidHref", "preferButton" ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
  },
  globals: {
    document: 1,
    window: 1,
    Blob: 1,
  },
  settings: {
    'import/resolver': {
      alias: [['src', path.resolve(cwd, 'src')], ['test', path.resolve(cwd, 'test')]],
    },
  },
};
