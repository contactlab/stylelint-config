export = {
  customSyntax: 'postcss-styled-syntax',

  extends: ['./index.js'],

  rules: {
    'font-weight-notation': null,
    'function-url-quotes': null,
    'length-zero-no-unit': null,
    'nesting-selector-no-missing-scoping-root': null,
    'no-empty-source': null,
    'number-max-precision': null,
    'property-no-unknown': [
      true,
      {checkPrefixed: false, ignoreProperties: [/^styled-mixin/]}
    ],
    'selector-class-pattern': null,
    'value-keyword-case': null
  }
};
