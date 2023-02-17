# @contactlab/stylelint-config

![Build Status](https://github.com/contactlab/stylelint-config/workflows/Node%20CI/badge.svg)

Contactlab [Stylelint](https://stylelint.io) extensible and sharable configuration.

Inspired by [`@giotramu/stylelint-config`](https://github.com/giotramu/stylelint-config) package.

It supports CSS or PostCSS syntax and CSS-in-JS solutions, like [Styled Components](https://github.com/styled-components/styled-components), [Emotion.js](https://github.com/emotion-js/emotion) or [Linaria](https://github.com/callstack/linaria).

> **Warning!** This package needs Stylelint [v15](https://stylelint.io/migration-guide/to-15) (or higher) which has deprecated some rules, removed Nodejs v12 support and made Prettier integration smoother.

## Usage

Install the configuration as a npm package:

```sh
npm i -D @contactlab/stylelint-config

# --- OR ---

yarn add -D @contactlab/stylelint-config
```

and then add it as extension in your Stylelint configuration file:

```json
{
  "extends": ["@contactlab/stylelint-config"]
}
```

In order to have support for **CSS-in-JS** tools, use the `styled` config as extension:

```json
{
  "extends": ["@contactlab/stylelint-config/styled"]
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

```json
{
  "extends": "@contactlab/stylelint-config",
  "rules": {
    "selector-id-pattern": null,
    "selector-class-pattern": null
  }
}
```

## Integrating Stylelint with IDEs/editors

### Visual Studio Code

1. install the [Stylelint plugin](https://marketplace.visualstudio.com/items?itemname=stylelint.vscode-stylelint);
2. add the following code to your `.vscode/settings.json`:

   ```json
   {
     "css.validate": false,
     "scss.validate": false,
     "editor.codeActionsOnSave": {
       "source.fixAll.stylelint": true
     },
     "stylelint.validate": ["css"] // Add the type of file you want to validate (e.g. ["css", "scss", "typescript", "typescriptreact"])
   }
   ```

3. highlight the CSS-in-JS syntax with the [Styled Components plugin](https://marketplace.visualstudio.com/items?itemname=styled-components.vscode-styled-components) (**optional**)

## References

- [postcss-styled-syntax](https://github.com/hudochenkov/postcss-styled-syntax)
- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
