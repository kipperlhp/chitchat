module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
  ],
  rules: {
    "arrow-body-style": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "linebreak-style": ["error", "windows"],
    "max-len": 0,
    "object-curly-newline": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/require-default-props": 0,
    "semi": [2, "never"],
  },
};