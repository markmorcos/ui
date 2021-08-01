# UI

<p>
  <a href="https://github.com/markmorcos/ui/actions" alt="Main">
    <img src="https://github.com/markmorcos/ui/actions/workflows/merge.yml/badge.svg" />
  </a>
</p>

This repository contains 2 main apps. The Storybook app for component documentation and the UI app for demonstrating these components

## Getting started

First install dependencies:

```sh
yarn install
```

### Running

To run UI in hot module reloading mode:

```sh
yarn start:ui
```

To run Storybook in hot module reloading mode:

```sh
yarn start:storybook
```

To run both concurrently:

```sh
yarn start
```

### Building

To create a UI production build:

```sh
yarn build:ui
```

To create a Storybook production build:

```sh
yarn build:storybook
```

To create production builds for both apps:

```sh
yarn build
```

### Testing

To run unit tests for UI:

```sh
yarn test
```

### Deploying

To deploy Storybook:

```sh
yarn deploy
```

Note: AWS credentials should be configured for this command to work

The deploy URL would be:
https://markmorcos.github.io/ui/
