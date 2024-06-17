module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      '@typescript-eslint/no-explicit-any': 'off',
    },
  };