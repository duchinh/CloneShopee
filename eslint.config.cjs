const path = require('path');
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['node_modules/', 'dist/'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  settings: {
    react: {
      // Nói eslint-plugin-react tự động biết version của React.
      version: 'detect'
    },
    // Nói ESLint cách xử lý các import
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    node: true
  },
  rules: {
     // Tắt rule yêu cầu import React trong file jsx
     'react/react-in-jsx-scope': 'off',
     // Cảnh báo khi thẻ <a target='_blank'> mà không có rel="noreferrer"
     'react/jsx-no-target-blank': 'warn',
     // Tăng cường một số rule prettier (copy từ file .prettierrc qua)
     'prettier/prettier': [
      'warn',
      { 
        allowConstantExport: true ,
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      // put any TypeScript-specific configuration here
    },
  ],
}
