export default {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-standard',
    '@sazuru/stylelint-config-rational-order',
  ],
  plugins: ['@up-line/stylelint-bem-ruleset'],
  rules: {
    'import-notation': null,
    /** Enable BEM rules */
    'stylelint-bem-ruleset/classnames': true,
    'stylelint-bem-ruleset/nested': true,
  },
};
