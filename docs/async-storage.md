---
id: async-storage
title: Async Storage
sidebar_label: Async Storage
slug: /async-storage
---

Async Storage module is tightly coupled with its `NativeModule` part - it needs a running React Native application to work properly. In order to use it in tests, you have to provide its separate implementation. Follow these steps to add a mocked `Async Storage` module.

### Using Async Storage mock

1. In your project root directory, create `__mocks__/@react-native-community` directory.
2. Inside that folder, create `async-storage.js` file.
3. Inside that file, export `Async Storage` mock.

```js
// async-storage.js
import mockAs from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAs);
```

:::tip Source
- [Async Storage - Jest integration](https://react-native-async-storage.github.io/async-storage/docs/advanced/jest/)
:::