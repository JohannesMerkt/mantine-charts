module.exports = {
  extends: ['mantine', 'plugin:storybook/recommended'],
  rules: {
    'import/extensions': 'off',
    'import/no-relative-packages': 'off'
  },
  parserOptions: {
    project: './tsconfig.eslint.json'
  }
};