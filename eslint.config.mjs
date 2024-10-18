import globals from "globals";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  jsxA11y.flatConfigs.recommended,
];