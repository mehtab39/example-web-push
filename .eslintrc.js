import customRules from "./eslint-plugin-custom-rules.js";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      custom: customRules,
    rules: {
      "react/jsx-props-no-spreading": "off",
      "custom/require-data-testid": "error", 
    },
  },
];
