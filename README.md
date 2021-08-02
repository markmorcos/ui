# UI

<p>
  <a href="https://github.com/markmorcos/ui/actions" alt="Main">
    <img src="https://github.com/markmorcos/ui/actions/workflows/merge.yml/badge.svg" />
  </a>
</p>

This repository contains 2 main apps. The Storybook app for component documentation and the component library

## Getting started

First install dependencies:

```sh
yarn install
```

### Running

To run Storybook in hot module reloading mode:

```sh
yarn start
```

### Building

To create a library production build:

```sh
yarn build:lib
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

To run unit tests for the library:

```sh
yarn test
```

### Deploying

The Github Workflow deploys everything automatically once a commit is pushed to the `main` branch.

To deploy manually, the `dist` folder contents should be pushed to the `gh-pages` branch.

[Storybook](https://markmorcos.github.io/ui/storybook/)
