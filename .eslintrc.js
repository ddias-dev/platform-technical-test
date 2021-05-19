'use strict';

module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  root: true,
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true
  },
  plugins: ['@typescript-eslint', 'jest'],
  parser: '@typescript-eslint/parser',
  reportUnusedDisableDirectives: true,
  rules: {
    curly: 'warn',
    semi: ['error', 'always'],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js'
      }
    }
  }
};
