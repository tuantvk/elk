---
id: testing
title: Testing
sidebar_label: Testing
slug: /testing
---

Testing is important because it helps you uncover these mistakes and verifies that your code is working.
Tests can also serve as documentation for new people joining your team. For people who have never seen a codebase before, reading tests can help them understand how the existing code works.

### Unit Tests

Unit tests cover the smallest parts of code, like individual functions or classes.

When the object being tested has any dependencies, you’ll often need to mock them out, as described in the next paragraph.

![Unit tests](/img/p_tests-unit.svg)

### Integration Tests

In integration testing, real individual units are combined (same as in your app) and tested together to ensure that their cooperation works as expected.

![Integration Tests](/img/p_tests-integration.svg)

### Component Tests

React components are responsible for rendering your app, and users will directly interact with their output. Even if your app's business logic has high testing coverage and is correct, without component tests you may still deliver a broken UI to your users. Component tests could fall into both unit and integration testing, but because they are such a core part of React Native, we'll cover them separately.

For testing React components, there are two things you may want to test:

- **Interaction**: to ensure the component behaves correctly when interacted with by a user (eg. when user presses a button)
- **Rendering**: to ensure the component render output used by React is correct (eg. the button's appearance and placement in the UI)

![Component Tests](/img/p_tests-component.svg)

:::note Source
- [React Native Testing Overview](https://reactnative.dev/docs/testing-overview)
:::