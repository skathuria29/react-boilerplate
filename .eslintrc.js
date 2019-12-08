const path = require('path');

module.exports = {
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    indent: [
      2,
      4,
      {
        SwitchCase: 1,
      },
    ],
    '/jsx-indent': [0, 4],
    'comma-dangle': ["error", "never"],
    'import/no-unresolved': 2,
    "react/jsx-indent": [0, 4],
    "react/jsx-indent-props": ["error", 4],
  }
};



