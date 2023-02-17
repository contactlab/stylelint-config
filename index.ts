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

  extends: ['stylelint-config-standard'],

  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order'
  ],

  rules: {
    // --- Standard
    'alpha-value-notation': 'number',
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-blockless'],
        ignore: ['inside-block', 'after-comment']
      }
    ],
    'at-rule-no-unknown': null,
    'at-rule-property-required-list': {
      'font-face': ['font-display', 'font-family', 'font-style']
    },
    'color-hex-alpha': 'never',
    'color-named': 'never',
    'color-no-hex': null,
    'comment-empty-line-before': null,
    'custom-property-empty-line-before': 'never',
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {ignoreShorthands: ['grid-template']}
    ],
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'declaration-property-value-disallowed-list': {
      '/^border(?!-(width|spacing))/': [/thin/, /medium/, /thick/],
      '/^transition/': [/all/]
    },
    'font-family-no-missing-generic-family-keyword': null,
    'font-weight-notation': 'numeric',
    'function-url-no-scheme-relative': true,
    'max-nesting-depth': [8, {ignore: ['pseudo-classes']}],
    'no-descending-specificity': null,
    'number-max-precision': 3,
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
    'property-no-unknown': [true, {checkPrefixed: true}],
    'rule-empty-line-before': [
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
        ignore: ['after-comment']
      }
    ],
    'selector-class-pattern': namePattern,
    'selector-id-pattern': namePattern,
    'selector-max-attribute': 8,
    'selector-max-class': 8,
    'selector-max-compound-selectors': 8,
    'selector-max-id': 2,
    'selector-max-pseudo-class': 8,
    'selector-max-specificity': null,
    'selector-max-type': 8,
    'selector-max-universal': 2,
    'selector-no-vendor-prefix': [
      true,
      {ignoreSelectors: ['::-webkit-input-placeholder']}
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {ignorePseudoClasses: ['global', 'local']}
    ],
    'time-min-milliseconds': 100,
    'unit-no-unknown': [true, {ignoreFunctions: ['image-set']}],
    'value-keyword-case': ['lower', {camelCaseSvgKeywords: true}],
    'value-no-vendor-prefix': [true, {ignoreValues: ['grab', 'grabbing']}],

    // --- Declaration block plugin
    'plugin/declaration-block-no-ignored-properties': true,

    // --- Order plugin
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
