
import js from '@eslint/js'
import globals from 'globals'
import vitest from '@vitest/eslint-plugin'
import stylistic from '@stylistic/eslint-plugin'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.jsx'],
    ignores: ['*.config.*'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: { '@stylistic': stylistic },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...vitest.environments.env.globals,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      "@stylistic/array-bracket-spacing": "warn",
      "@stylistic/comma-dangle": ["warn", "only-multiline"],
      "@stylistic/indent": ["warn", 2],
      "@stylistic/max-len": [1, 120, 2, { "ignoreComments": true }],
      "@stylistic/no-multi-spaces": ["error", { "ignoreEOLComments": true }],
      "@stylistic/no-trailing-spaces": "warn",
      "@stylistic/padded-blocks": "off",
      "@stylistic/quotes": [2, "single", {
        allowTemplateLiterals: "always",
        avoidEscape: true,
      },],
      "@stylistic/semi": ["warn", "always"],
      "@stylistic/space-before-function-paren": "off",
      "camelcase": ["error", { "properties": "always" }],
      "dot-notation": "warn",
      "no-console": "off",
      "no-unused-vars": ["warn", { "varsIgnorePattern": "^[A-Z]" }],
      "no-var": "error",
    },
  },
])