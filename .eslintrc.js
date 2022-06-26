module.exports = {
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-setup-props-destructure": "off",
  },
};
