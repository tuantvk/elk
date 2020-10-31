---
id: textinput
title: TextInput
sidebar_label: TextInput
slug: /textinput
---

### TextInput component

```js
// TextInput.js
import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default ({
  name,
  errors,
  touched,
  Icon,
  ...rest
}) => (
    <View>
      <TextInput
        {...rest}
      />
      {Icon && Icon}
      {errors && errors[name] && touched && touched[name] ?
        <Text testID="textErrorID">{errors[name]}</Text>
        :
        null
      }
    </View>
  );
```

### Renders TextInput

```js
// TextInput.test.js
import { render } from '@testing-library/react-native';

it('renders TextInput', () => {
  const renderInput = render(
    <TextInput />
  );
  expect(renderInput).toMatchSnapshot();
});
```

### Renders TextInput pure props

```js
it('renders TextInput pure prop', () => {
  const renderInput = render(
    <TextInput
      testID="inputID"
      name="name"
      value="John"
      placeholder="Input name"
      maxLength={30}
      blurOnSubmit={false}
      returnKeyType="next"
    />
  );
  expect(renderInput).toMatchSnapshot();
});

it('renders TextInput prop style', () => {
  const { queryByTestId } = render(
    <TextInput
      testID="inputID"
      style={{ color: 'red' }}
    />
  );
  expect(queryByTestId('inputID')).toHaveStyle({ color: 'red' });
  expect(queryByTestId('inputID')).toHaveProp('placeholderTextColor', '#898989');
});
```

### Renders TextInput props custom

```js
it('check renders snapshot Input custom prop', () => {
  const renderInput = render(
    <Input
      testID="inputID"
      name="name"
      errors={{ name: 'Missing value' }}
      touched={{ name: true }}
    />
  );
  expect(renderInput).toMatchSnapshot();
});

it('renders errors Input', () => {
  const { queryByTestId, queryByText } = render(
    <Input
      testID="inputID"
      name="name"
      errors={{ name: 'Missing value' }}
      touched={{ name: true }}
    />
  );
  expect(queryByTestId('inputID')).toBeTruthy();
  expect(queryByTestId('textErrorID')).toBeTruthy();
  expect(queryByText('Missing value')).toBeTruthy();
});
```