/*
 * Allows:
 * foo-bar
 * FooBar
 * foo-bar--foo-bar
 * foo-bar__foo-bar
 * FooBar--FooBar
 * FooBar__FooBar
 * FooBar--foo-bar
 * foo-bar--FooBar
 * Foo-bar
 * …
 */
const lowerCaseFirstUpper = /([A-Z][a-z\d]*(-[a-z\d]+)*)/;
const lowerCase = /([a-z][a-z\d]*(-[a-z\d]+)*)/;
const pascalCase = /(([A-Z][a-zA-Z\d]+)*)/;
const namePattern = new RegExp(
  `^(${lowerCaseFirstUpper.source}|${lowerCase.source}|${pascalCase.source})((--|__)(${lowerCase.source}|${pascalCase.source}))*$`
);

export = {
  defaultSeverity: 'warning',

  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order'
  ],

  rules: {
    // --- General
    'annotation-no-unknown': true,
    'no-descending-specificity': null,
    'no-duplicate-selectors': [
      true,
      {
        disallowInList: false
      }
    ],
    'no-empty-source': true,
    'no-invalid-double-slash-comments': true,
    'no-invalid-position-at-import-rule': true,
    'max-nesting-depth': [
      8,
      {
        ignore: ['pseudo-classes']
      }
    ],

    // --- Imports
    'import-notation': 'url',
    'no-duplicate-at-import-rules': true,

    // --- At-rule
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-required-list': {
      'font-face': ['font-display', 'font-family', 'font-style']
    },

    // --- Block
    'block-no-empty': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {ignoreShorthands: ['grid-template']}
    ],
    'declaration-block-no-shorthand-property-overrides': true,

    // --- Grid
    'named-grid-areas-no-invalid': true,

    // --- Color
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'color-hex-alpha': 'never',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'hue-degree-notation': 'angle',

    // --- Comment
    'comment-no-empty': true,
    'comment-word-disallowed-list': [
      ['fuck', 'shit', 'damn', 'twerk', 'egg yolk']
    ],

    // --- Declaration
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {
      '/^border(?!-(width|spacing))/': [/thin/, /medium/, /thick/],
      '/^transition/': [/all/]
    },

    // --- Font Family
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': 'numeric',

    // --- Function
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-no-unknown': true,
    'function-url-no-scheme-relative': true,

    // --- Keyframe
    'keyframe-block-no-duplicate-selectors': true,
    'keyframe-declaration-no-important': true,
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'keyframes-name-pattern': lowerCase,

    // --- Length
    'length-zero-no-unit': true,

    // --- Media Feature
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,

    // --- Number
    'number-max-precision': 3,

    // --- Property
    'property-disallowed-list': null,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'app-region', // For Electron
          'appearance',
          'mask',
          'tab-size', // It's still only prefixed in Firefox
          'text-size-adjust'
        ]
      }
    ],
    'property-no-unknown': [
      true,
      {
        checkPrefixed: true
      }
    ],
    'shorthand-property-no-redundant-values': true,

    // --- Selector
    'selector-class-pattern': namePattern,
    'selector-id-pattern': namePattern,
    'selector-max-attribute': 8,
    'selector-max-class': 8,
    'selector-max-compound-selectors': 8,
    'selector-max-empty-lines': 0,
    'selector-max-id': 2,
    'selector-max-pseudo-class': 8,
    'selector-max-specificity': null,
    'selector-max-type': 8,
    'selector-max-universal': 2,
    'selector-not-notation': 'complex',
    'selector-pseudo-class-no-unknown': [
      true,
      {ignorePseudoClasses: ['global', 'local']}
    ],
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [true, {ignore: ['custom-elements']}],
    'selector-no-vendor-prefix': [
      true,
      {
        ignoreSelectors: ['::-webkit-input-placeholder']
      }
    ],

    // --- String
    'string-no-newline': true,

    // --- Time
    'time-min-milliseconds': 100,

    // --- Unit
    'unit-no-unknown': [true, {ignoreFunctions: ['image-set']}],

    // --- Value
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['grab', 'grabbing']
      }
    ],

    // --- Code Styles
    // General
    indentation: [2, {baseIndentLevel: 1}],
    linebreaks: 'unix',
    'max-line-length': null,
    'no-empty-first-line': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'max-empty-lines': 2,
    'unicode-bom': 'never',
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
        ignore: ['after-comment']
      }
    ],

    // At-rule
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless'],
        ignore: ['inside-block', 'after-comment']
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',

    // Block
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': null,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': null,
    'block-opening-brace-space-before': 'always',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',

    // Comment
    'comment-empty-line-before': null,
    'comment-whitespace-inside': 'always',

    // Custom Property
    'custom-property-empty-line-before': 'never',

    // Declaration
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',

    // Font Family
    'font-family-name-quotes': 'always-where-recommended',

    // Function
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': null,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': null,
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'always',
    'function-whitespace-after': 'always',

    // Media Feature
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',

    // Media Query
    'media-query-list-comma-newline-after': 'always',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': null,
    'media-query-list-comma-space-before': 'never',

    // Number
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,

    // Property
    'property-case': 'lower',

    // Selector
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',

    // String
    'string-quotes': [
      'single',
      {
        avoidEscape: false
      }
    ],

    // Unit
    'unit-case': 'lower',

    // Value
    'value-keyword-case': ['lower', {camelCaseSvgKeywords: true}],
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,

    // --- Plugins
    // Declaration block
    'plugin/declaration-block-no-ignored-properties': true,

    // Order
    'order/properties-order': [
      {
        groupName: 'special',
        properties: ['composes', '@import', '@extend', '@mixin', '@at-root']
      },
      {
        groupName: 'positioning',
        properties: ['position', 'top', 'right', 'bottom', 'left', 'z-index']
      },
      {
        groupName: 'boxModel',
        properties: [
          'display',
          'flex',
          'flex-basis',
          'flex-direction',
          'flex-flow',
          'flex-grow',
          'flex-shrink',
          'flex-wrap',
          'grid',
          'grid-area',
          'grid-auto-rows',
          'grid-auto-columns',
          'grid-auto-flow',
          'grid-gap',
          'grid-row',
          'grid-row-start',
          'grid-row-end',
          'grid-row-gap',
          'grid-column',
          'grid-column-start',
          'grid-column-end',
          'grid-column-gap',
          'grid-template',
          'grid-template-areas',
          'grid-template-rows',
          'grid-template-columns',
          'gap',
          'align-content',
          'align-items',
          'align-self',
          'justify-content',
          'justify-items',
          'justify-self',
          'order',
          'float',
          'clear',
          'box-sizing',
          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',
          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
          'border',
          'border-color',
          'border-style',
          'border-width',
          'border-top',
          'border-top-color',
          'border-top-width',
          'border-top-style',
          'border-right',
          'border-right-color',
          'border-right-width',
          'border-right-style',
          'border-bottom',
          'border-bottom-color',
          'border-bottom-width',
          'border-bottom-style',
          'border-left',
          'border-left-color',
          'border-left-width',
          'border-left-style',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-right-radius',
          'border-bottom-left-radius',
          'border-image',
          'border-image-source',
          'border-image-slice',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'border-collapse',
          'border-spacing',
          'object-fit',
          'object-position',
          'overflow',
          'overflow-x',
          'overflow-y'
        ]
      },
      {
        groupName: 'typography',
        properties: [
          'color',
          'font',
          'font-weight',
          'font-size',
          'font-family',
          'font-style',
          'font-variant',
          'font-size-adjust',
          'font-stretch',
          'font-effect',
          'font-emphasize',
          'font-emphasize-position',
          'font-emphasize-style',
          'font-smooth',
          'line-height',
          'direction',
          'letter-spacing',
          'white-space',
          'text-align',
          'text-align-last',
          'text-transform',
          'text-decoration',
          'text-emphasis',
          'text-emphasis-color',
          'text-emphasis-style',
          'text-emphasis-position',
          'text-indent',
          'text-justify',
          'text-outline',
          'text-wrap',
          'text-overflow',
          'text-overflow-ellipsis',
          'text-overflow-mode',
          'text-orientation',
          'text-shadow',
          'vertical-align',
          'word-wrap',
          'word-break',
          'word-spacing',
          'overflow-wrap',
          'tab-size',
          'hyphens',
          'unicode-bidi',
          'columns',
          'column-count',
          'column-fill',
          'column-gap',
          'column-rule',
          'column-rule-color',
          'column-rule-style',
          'column-rule-width',
          'column-span',
          'column-width',
          'page-break-after',
          'page-break-before',
          'page-break-inside',
          'src'
        ]
      },
      {
        groupName: 'visual',
        properties: [
          'list-style',
          'list-style-position',
          'list-style-type',
          'list-style-image',
          'table-layout',
          'empty-cells',
          'caption-side',
          'background',
          'background-color',
          'background-image',
          'background-repeat',
          'background-position',
          'background-position-x',
          'background-position-y',
          'background-size',
          'background-clip',
          'background-origin',
          'background-attachment',
          'background-blend-mode',
          'outline',
          'outline-width',
          'outline-style',
          'outline-color',
          'outline-offset',
          'box-shadow',
          'box-decoration-break',
          'transform',
          'transform-origin',
          'transform-style',
          'backface-visibility',
          'perspective',
          'perspective-origin',
          'visibility',
          'cursor',
          'opacity',
          'filter',
          'isolation',
          'backdrop-filter',
          'mix-blend-mode'
        ]
      },
      {
        groupName: 'animation',
        properties: [
          'transition',
          'transition-delay',
          'transition-timing-function',
          'transition-duration',
          'transition-property',
          'animation',
          'animation-name',
          'animation-duration',
          'animation-play-state',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction',
          'animation-fill-mode'
        ]
      },
      {
        groupName: 'misc',
        properties: [
          'appearance',
          'content',
          'clip',
          'clip-path',
          'counter-reset',
          'counter-increment',
          'resize',
          'user-select',
          'nav-index',
          'nav-up',
          'nav-right',
          'nav-down',
          'nav-left',
          'pointer-events',
          'quotes',
          'touch-action',
          'will-change',
          'zoom',
          'fill',
          'fill-rule',
          'clip-rule',
          'stroke'
        ]
      }
    ]
  }
};
