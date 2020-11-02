---
id: api-component
title: Api component
sidebar_label: Api component
slug: /api-component
---

Example call api renders component, compare value render and data response from server.

### Info component

```js
// Info.js
import React from 'react';
import { View, Text } from 'react-native';

export default Info = ({ info }) => {
  return (
    <View>
      <Text>{info.name}</Text>
      <Text>{info.phone}</Text>
    </View>
  )
}
```

### Renders Info

```js
// Info.test.js
import { render } from '@testing-library/react-native';
import Info from './Info';
import ApiInfo from './api';

it('renders Info', async () => {
  let resInfo = await ApiInfo();
  const rendersInfo = render(
    <Info info={resInfo.data} />
  );

  expect(rendersInfo).toBeTruthy();
});
```

### Compare text from server and renders

```js
it('compare text from server and renders', async () => {
  let resInfo = await ApiInfo();
  const { getByText } = render(
    <Info info={resInfo.data} />
  );
  let name = resInfo.data.name;
  let phone = resInfo.data.phone;

  if (name) {
    expect(getByText(name)).toBeTruthy();
  }
  if (phone) {
    expect(getByText(phone)).toBeTruthy();
  }
});
```