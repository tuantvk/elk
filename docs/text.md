---
id: text
title: Text
sidebar_label: Text
slug: /text
---

Example for `Text` testing. Use API **render** of [@testing-library/react-native](https://callstack.github.io/react-native-testing-library/docs/api#render).

### Text component

```js
// Text.js
import React from 'react';
import { Text } from 'react-native';

export default ({ style, color, bold, children, ...rest }) => (
  <Text
    {...rest}
    style={[
      {
        color: color || "#000000",
        fontFamily: bold ? 'Roboto-Bold' : 'Roboto-Regular',
      },
      style,
    ]}
  >
    {children}
  </Text>
);
```

### Renders Text

```js
// Text.test.js
import { render } from '@testing-library/react-native';

it('renders Text with children', () => {
  const renderText = render(
    <Text>Hello</Text>
  );
  expect(renderText).toMatchSnapshot();
});
```

### Renders Text with props

```js
it('renders Text prop color', () => {
  const renderText = render(
    <Text color="#ff0000">Hello</Text>
  );
  expect(renderText).toMatchSnapshot();
});

it('renders Text prop style', () => {
  const { queryByTestId } = render(
    <Text testID="textID" style={{ fontSize: 16, color: 'red' }}>
      {`Hello`}
    </Text>
  );
  expect(queryByTestId('textID')).toHaveStyle({ fontSize: 16 });
  expect(queryByTestId('textID')).toHaveStyle({ color: 'red' });
});

it('renders Text display font bold', () => {
  const { queryByTestId } = render(
    <Text testID="textID" bold>
      {`Hello`}
    </Text>
  );
  // inside my Text component using font Roboto
  expect(queryByTestId('textID')).toHaveStyle({ fontFamily: 'Roboto-Bold' });
});
```