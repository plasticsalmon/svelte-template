module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
  },
};
