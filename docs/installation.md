---
id: installation
title: Installation
sidebar_label: Installation
slug: /
---

This project is inspired by [React Native Testing Library](https://callstack.github.io/react-native-testing-library/). Tested to work with Jest, but it should work with other test runners as well.

### Requirements

- [Node.js](https://nodejs.org/en/download/) version >= 10.15.1 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed
- [Yarn](https://yarnpkg.com/en/) version >= 1.5 (which can be checked by running `yarn version`). Yarn is a performant package manager for JavaScript and replaces the `npm` client. It is not strictly necessary but highly encouraged.

Open a Terminal in your project's folder and run:

#### Using `yarn`

```sh
yarn add --dev @testing-library/react-native
```

#### Using `npm`

```sh
npm install --save-dev @testing-library/react-native
```

### Additional Jest matchers

In order to use addtional React Native-specific jest matchers from [@testing-library/jest-native](https://github.com/testing-library/jest-native) package add it to your project:

#### Using `yarn`

```sh
yarn add --dev @testing-library/jest-native
```

#### Using `npm`

```sh
npm install --save-dev @testing-library/jest-native
```

Then automatically add it to your jest tests by using `setupFilesAfterEnv` option in your Jest configuration (it's usually located either in `package.json` under `"jest"` key or in a `jest.config.js` file):

```js
// jest.config.js
module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"]
};
```

:::note Source
- [React Native Testing Library - Getting Started](https://callstack.github.io/react-native-testing-library/docs/getting-started)
:::