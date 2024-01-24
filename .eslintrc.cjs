module.exports = {
  root: true,
  env: { browser: true, es2020: true, "node": true, "jest/globals": true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh', 'jest'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "no-unused-vars": "warn",
    "no-var": "warn",
    "no-console": "off",
    "func-names": "off",
    "comma-dangle": ["warn", "only-multiline"],
    "quotes": [
      "error",
      "single",
      { "allowTemplateLiterals": true, "avoidEscape": true }
    ],
    "camelcase": "error"
  },
}
