# @contactlab/stylelint-config

![Build Status](https://github.com/contactlab/stylelint-config/workflows/Node%20CI/badge.svg)

Contactlab [Stylelint](https://stylelint.io) extensible and sharable configuration.

Inspired by [`@giotramu/stylelint-config`](https://github.com/giotramu/stylelint-config) package.

It supports CSS or PostCSS syntax and CSS-in-JS solutions, like [Styled Components](https://github.com/styled-components/styled-components), [Emotion.js](https://github.com/emotion-js/emotion) or [Linaria](https://github.com/callstack/linaria). It works great in conjunction with Prettier.

## Usage

Install the configuration as a npm package:

```sh
npm i -D @contactlab/stylelint-config

# --- OR ---

yarn add -D @contactlab/stylelint-config
```

and then add it as extension in your Stylelint configuration file:

```jsonc
// for example in your .stylelintrc.js or package.json

{
  "extends": ["@contactlab/stylelint-config"]
}
```

**Note:** The base config includes the code formatting-related rules. It is strongly recommended to use Prettier for this purpose. More details are available [here](#prettier).

### CSS-in-JS Syntax

In order to have support for CSS-in-JS tools, install the related Stylelint package:

```sh
npm i -D @stylelint/postcss-css-in-js

# --- OR ---

yarn add -D @stylelint/postcss-css-in-js
```

and then add the `styled` config as extension:

```jsonc
{
  "extends": [
    "@contactlab/stylelint-config",
    "@contactlab/stylelint-config/styled"
  ]
}
```

### Prettier

This _optional_ config disables the Stylelint code formatting rules and lets [Prettier](https://prettier.io/) handle them:

```jsonc
{
  "extends": [
    "@contactlab/stylelint-config",
    "@contactlab/stylelint-config/prettier" // This has to be the last one
  ]
}
```

## CSS properties order

Stylelint Config sorts the CSS property declarations by grouping them in the following order:

1. Positioning
2. Box Model
3. Typography
4. Visual
5. Animation
6. Misc

## Extend the configuration

You can extend the configuration or overrides some rules. More details about the loading mechanism are available in [the Stylelint documentation](https://stylelint.io/user-guide/configuration/#extends).

```jsonc
{
  "extends": "@contactlab/stylelint-config",
  "rules": [
    "selector-id-pattern": null
    "selector-class-pattern": null
  ]
}
```

## Integrating Stylelint with IDEs/editors

### Visual Studio Code

1. install the [Stylelint plugin](https://marketplace.visualstudio.com/items?itemname=stylelint.vscode-stylelint);
2. add the following code to your `.vscode/settings.json`:
   ```jsonc
   "css.validate": false,
   "scss.validate": false,
   "editor.codeActionsOnSave": {
     "source.fixAll.stylelint": true
   },
   "stylelint.validate": ["css"] // Add the type of file you want to validate (e.g. ["css", "scss", "typescript", "typescriptreact"])
   ```
3. highlight the CSS-in-JS syntax with the [Styled Components plugin](https://marketplace.visualstudio.com/items?itemname=styled-components.vscode-styled-components) (**optional**)

## References

- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss)
