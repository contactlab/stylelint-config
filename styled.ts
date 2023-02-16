export = {
  customSyntax: '@stylelint/postcss-css-in-js',

  rules: {
    'font-weight-notation': null,
    'function-url-quotes': null,
    'length-zero-no-unit': null,
    'no-empty-source': null,
    'no-missing-end-of-source-newline': null,
    'number-max-precision': null,
    'property-no-unknown': [
      true,
      {
        checkPrefixed: false,
        ignoreProperties: [/^styled-mixin/]
      }
    ],
    'selector-class-pattern': null,
    'value-keyword-case': null
  }
};
