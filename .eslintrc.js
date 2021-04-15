module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'standard',
    'standard-with-typescript',
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  plugins: ['@babel'],
  parser: '@babel/eslint-parser',

  rules: {
    semi: ['error', 'always'],
    'max-len': ['error', { code: 90, comments: 120 }],
    'array-bracket-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'always-multiline'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    indent: ['error', 2, { MemberExpression: 1 }],
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['error', 'always'],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true }
    ],
    'prefer-const': 'off'
  }
};
