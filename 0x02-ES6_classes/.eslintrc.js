module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-console': 'off',
    'quotes': ['error', 'double', { 'allowTemplateLiterals': true }]
  }
};
