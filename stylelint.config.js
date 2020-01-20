module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  ignoreFiles: ['**/*.js'],
  extends: 'stylelint-config-standard',
  rules: {
    'selector-nested-pattern': '^&',
  },
};
