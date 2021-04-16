module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  extends: [ 'standard', 'plugin:vue/vue3-essential', '@vue/standard' ],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'vue/no-unused-components': 'warn',
    'array-bracket-spacing': [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'always-multiline' ],
    indent: [ 'error', 2, { MemberExpression: 1 } ],
    'max-len': [ 'error', { code: 90, comments: 120 } ],
    'newline-per-chained-call': [ 'error', { ignoreChainWithDepth: 2 } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'prefer-const': 'off',
    semi: [ 'error', 'always' ],
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': [ 'error', 'always' ],
  },

  ignorePatterns: [ 'node_modules' ],

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
