module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      ecmaFeatures: {
          jsx: true
      }
    },
    plugins: [
      "react-hooks"
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    extends: [
      "plugin:react/recommended",
      "prettier"
    ],
    rules: {
      // Rules go here
    }
  };