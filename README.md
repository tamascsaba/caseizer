# Custom phone case with angular

Simple example project how use canvas with angular

## Table of Contents

- [Angular](#angular)
- [NPM](#npm)
- [Unit Testing](#unit-testing)
- [Linting & Formatting](#linting-&-formatting)

# Angular

The project has been created with Angular 13 in strict mode and tuned to make it stricter. The module target is `esnext` which
means that features that are on the standard track but are not in an official ES spec yet are available for development and polyfilled automatically.

# NPM

Some scripts are available just as a starting point. As a bonus, `source-map-explorer` is available for inspecting the bundle size.
The dependencies get installed with the exact version. This will avoid any problems with package versions and you will know exactly
what you want to be installed and what gets actually installed.

# Unit Testing

**Jest** and **Spectator** have been configured for unit testing. Also some additional libraries like `ng-mocks` and `mockdate` are also installed.
The first one works pretty well with Spectator and the second excels at mocking Date objects.

# Linting & Formatting

All the files are being linted, fixed and formatted with Prettier in a precommit hook (thanks to **Husky** and **Lintstaged**), also available through npm scripts,
so when a file is saved, it is linted, fixed and formatted automatically. No more manual formatting of the code!

## TypeScript files:

Linted with **Eslint**. Plugins being used:

- _@typescript-eslint_. ESLint rules support for TypeScript.
- _@angular-eslint_. Specific rules for Angular.
- _import_. Sorts import statements in different groups.
- _unicorn_. Set of best practices rules.
- _compat_. Checks compatibility of ECMAScript features with the supported browsers.
- _prettier_. Support for Prettier formatting.
- _jest_. Support for Jest files.

## SCSS files:

Linted with **Stylelint**. Plugins being used:

- **stylelint-config-standard**. Set of best practices rules.
- **stylelint-config-prettier**. Support for Prettier formatting.
- **stylelint-order**. Sorts rules.
- **stylelint-scss**. Specific rules for SCSS.
- **stylelint-no-unsupported-browser-features**. Checks compatibility of CSS features with the supported browsers.

## HTML files:

Formatted with **JS Beautify**.
