---
id: flatlist
title: FlatList
sidebar_label: FlatList
slug: /flatlist
---

### Users component

```js
// Users.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default ({ users, fetchUsers }) => {
  const renderItem = ({ item }) => (
    <View testID="userItemID">
      <Text>{item.name}</Text>
    </View>
  );

  const onEndReached = () => {
    // call Api here
    fetchUsers && fetchUsers();
  }

  return (
    <View>
      <FlatList
        testID="FlatListID"
        data={users}
        keyExtractor={item => item.id.toString()}
        {...{ renderItem, onEndReached }}
      />
    </View>
  )
}
```

### Renders Users

```js
// Users.test.js
import { render, fireEvent } from '@testing-library/react-native';
import Users from './Users';

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jame' },
];

it('renders Users', () => {
  const renderUsers = render(
    <Users {...{ users }} />
  );
  expect(renderUsers).toMatchSnapshot();
});

it('renders Users display item', () => {
  const { queryAllByTestId } = render(
    <Users  {...{ users }} />
  );
  expect(queryAllByTestId("userItemID")).toHaveLength(2);
});
```

### FlatList gets onEndReached

```js
it('fetchUsers prop when FlatList gets onEndReached', () => {
  const fetchUsers = jest.fn();
  const { getByTestId } = render(
    <Users
      {...{ users }}
      fetchUsers={fetchUsers}
    />
  )

  const eventData = {
    nativeEvent: {
      contentOffset: {
        y: 200,
      },
      contentSize: {
        height: 200,
        width: 100,
      },
      layoutMeasurement: {
        height: 100,
        width: 100,
      },
    },
  };

  fireEvent.scroll(getByTestId('FlatListID'), eventData);
  expect(fetchUsers).toHaveBeenCalledTimes(1);
});
```