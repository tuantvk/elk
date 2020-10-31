---
id: configuration
title: Configuration
sidebar_label: Configuration
slug: /configuration
---

#### Consider running Jest with `--detectOpenHandles`.

```json
"scripts": {
  "test": "jest --detectOpenHandles",
}
```

#### If you need to update our snapshot artifacts. You can run Jest with a flag that will tell it to re-generate snapshots.

```json
"scripts": {
  "test": "jest --updateSnapshot",
}
```

#### Run a single test using Jest.

```json
"scripts": {
  "test": "jest -t 'file-name-here'",
}
```

Example for only file `Button.test.js`:

```json
"scripts": {
  "test": "jest -t Button",
}
```