module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ['standard', 'plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'vue/no-unused-components': 'warn',
    semi: ['error', 'always'],
    'array-bracket-spacing': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
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
