# www
Official Website of the Stellar Labs Team.
## Legend
:satellite: : a broadband connection is needed to perform this action.
## Requirements
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)
- [Git](https://git-scm.com/)

## Download :satellite:
Download the project from the GitHub repository.
```shell
$ git clone https://github.com/stellar-labs/www
```
## Installation :satellite:
Fetchs the dependencies.
```shell
$ yarn install
```
## Linting
Configure the linter for JavaScript & Vue files.
### ESLint
```shell
$ yarn lint:init
```
### ESLint Plugin Vue
Open the `.eslintrc.*` file and update it accordingly.
```javascript
'use strict'
module.exports = {
    //...
    "extends": [ // extends property now contains an array of strings
      "eslint:recommended",
      "plugin:vue/essential" // this is the added line
    ],
    //...
};
```
## Serve
Simulates a local website.
### Development
Development server, configurations & build files.
```shell
$ yarn serve:dev
```
### Production
Production server, configurations & build files.
```shell
$ yarn serve:prod
```
## Build
Final HTML, CSS and JavaScript files ready for deployment.
### Development
Development configurations & build files.
```shell
$ yarn dev
```
### Production
Production configurations & build files.
```shell
$ yarn prod
```
