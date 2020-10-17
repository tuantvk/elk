---
id: react-navigation-v5
title: React Navigation v5
sidebar_label: React Navigation v5
slug: /react-navigation-v5
---

Testing code using `React Navigation` takes some setup since we need to mock some native dependencies used in the navigators.

### Mocking native modules

Inside file `jest.config.js` add to config

```js
module.exports = {
  // ...
  // add here
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js'
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native-community|@react-navigation)',
  ],
};
```

### Hooks

If using `Hooks` in your component, create a file `jest/setup.js` (or any other file name of your choice)

```js
// jest/setup.js
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('@react-navigation/native', () => {
  return {
    useFocusEffect: jest.fn(),
    // add more hooks in here
  };
});
```

Then we need to use this setup file in our jest config. You can add it under `setupFiles` option in a `jest.config.js`

```js
// jest.config.js
module.exports = {
  setupFiles: [
    // ...
    './jest/setup.js' // add here, change to your filename
  ],
  // ...
};
```

Make sure that the path to the file in `setupFiles` is correct. Jest will run these files before running your tests, so it's the best place to put your global mocks.

:::tip Source
- [React Navigation - Testing with Jest](https://reactnavigation.org/docs/testing)
:::