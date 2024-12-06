import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import vitestGlobals from "eslint-plugin-vitest-globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["**/dist", "**/.eslintrc.cjs", "**/eslint.config.mjs", "**/vite.config.js"],
},
{
    files: ["**/*.js", "**/*.jsx"]
}
, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:vitest-globals/recommended",
)), {
    plugins: {
        "react-refresh": reactRefresh,
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...vitestGlobals.environments.env.globals,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    settings: {
        react: {
            version: "18.2",
        },
    },

    rules: {
        "react-refresh/only-export-components": ["warn", {
            allowConstantExport: true,
        }],


        "max-len": [1, 120, 2, { "ignoreComments": true }],
        "no-console": "off",
        quotes: ["error", "single", {
            allowTemplateLiterals: true,
            avoidEscape: true,
        }],
        "camelcase": ["error", {"properties": "always"}],
        "semi": ["warn", "always"],
        "comma-dangle": ["warn", "only-multiline"],
        "dot-notation": "warn",
        "space-before-function-paren": "off",
        "indent": ["warn", 2],
        "padded-blocks": "warn",
        "no-trailing-spaces": "warn",
        "array-bracket-spacing": "warn",
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "padded-blocks": ["error", "never"],
        "no-var": "error",
      },
}];