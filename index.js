module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-standard',
    'stylelint-config-rational-order-fix',
    'stylelint-config-prettier',
  ],
  plugins: ['@up-line/stylelint-bem-ruleset'],
  rules: {
    /** Enable BEM rules */
    'stylelint-bem-ruleset/classnames': true,
    'stylelint-bem-ruleset/nested': true,

    /** That rules are needed to make empty line between CSS blocks
     * (due to prettier kill that)
     * */
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless'],
        ignore: ['after-comment', 'first-nested'],
        severity: 'warning',
      },
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property'],
        ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
        severity: 'warning',
      },
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration'],
        ignore: ['after-comment', 'first-nested', 'inside-single-line-block'],
        severity: 'warning',
      },
    ],
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
        severity: 'warning',
      },
    ],
  },
}
