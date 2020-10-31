---
id: button
title: Button
sidebar_label: Button
slug: /button
---

### Button component

```js
// Button.js
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Button = ({
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      activeOpacity={.9}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

export default Button;
```

### Renders Button

```js
// Button.test.js
import { render, fireEvent } from '@testing-library/react-native';

it('renders Button', () => {
  const renderButton = render(
    <Button testID="buttonID">
      <Text>Press me</Text>
    </Button>
  );
  expect(renderButton).toMatchSnapshot();
});
```

### Button call press

```js
it('Button call press', () => {
  const onPressMock = jest.fn();

  const { getByTestId } = render(
    <Button testID="buttonID" onPress={onPressMock}>
      <Text>Press me</Text>
    </Button>
  );
  fireEvent.press(getByTestId("buttonID"));
  expect(onPressMock).toHaveBeenCalled();
});
```

### Button disabled

```js
it('Button disabled', () => {
  const onPressMock = jest.fn();

  const { getByTestId } = render(
    <Button disabled testID="buttonID" onPress={onPressMock}>
      <Text>Press me</Text>
    </Button>
  );
  expect(getByTestId('buttonID')).toBeDisabled();
  expect(onPressMock).toHaveBeenCalledTimes(0);
});
```

### Renders Button with icon

```js
import Entypo from 'react-native-vector-icons/Entypo';

it('renders Button with icon', () => {
  const { getByTestId, queryAllByText } = render(
    <Button testID="buttonID">
      <Text testID="textID">Press me</Text>
      <Entypo testID="iconID" name="chevron-thin-right" />
    </Button>
  );
  expect(getByTestId('buttonID')).toBeTruthy();
  expect(getByTestId('textID')).toBeTruthy();
  expect(getByTestId('iconID')).toBeTruthy();

  expect(queryAllByText('Press me')).toHaveLength(1);
});
```