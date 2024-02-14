module.exports = {
  root: true,
  env: { 
    browser: true,
    es2020: true,
    'vitest-globals/env': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:vitest-globals/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.js'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi': ['warn', 'always'],
    'comma-dangle': ['warn', 'only-multiline'],
    'quotes': [
      'error',
      'single',
      { 'allowTemplateLiterals': true, 'avoidEscape': true }
    ],
    'camelcase': 'error',
  },
}
