---
id: mobx-component
title: Mobx component
sidebar_label: Mobx component
slug: /mobx-component
---

Example for testing UserInfo component use `Mobx`.

### User store

```js
// user.store.js
import { observable, action, makeObservable } from "mobx";

class UserStore {
  user = {};

  constructor(user) {
    makeObservable(this, {
      user: observable,
      updateUser: action.bound,
    });
    this.user = user;
  }

  updateUser(user) {
    if (user) {
      this.user = user;
    }
  }
}
export default new UserStore();
```

### UserInfo component

```js
// UserInfo.js
import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';

const UserInfo = () => {
  // View more use useStores();
  // https://mobx-react.js.org/recipes-context
  const { userStore: { user } } = useStores();

  return (
    <View>
      <Text testID="titleID">UserInfo component</Text>
      <Text>{user.name}</Text>
      <Text>{user.phone}</Text>
    </View>
  )
}

export default observer(UserInfo);
```

### Check store user

```js
// UserInfo.test.js
import userStore from './user.store';

it('check store user', () => {
  userStore.updateUser({ name: 'John' });

  expect(userStore.user).toEqual({ name: 'John' });
});
```

### Renders UserInfo

```js
import UserInfo from './UserInfo';

it('renders UserInfo', () => {
  const rendersUserInfo = render(
    <UserInfo />
  );

  expect(rendersUserInfo).toBeTruthy();
});
```

### Check renders values

```js
it('renders UserInfo', () => {
  const { getByTestId, getByText } = render(
    <UserInfo />
  );

  expect(getByTestId("titleID")).toBeTruthy();
  expect(getByText("John")).toBeTruthy();
});
```