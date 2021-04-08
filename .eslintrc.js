module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "arrow-body-style": ["error", "as-needed"],
    "react/jsx-props-no-spreading": 0,
    "import/prefer-default-export": 0,
    "react/prop-types": 0,
    "no-unused-vars": "warn",
    "implicit-arrow-linebreak": 0,
    "react/destructuring-assignment": 0,
    "comma-dangle": 0,
    "no-param-reassign": 0,
  },
};
