# UI ![Main](https://github.com/markmorcos/ui/actions/workflows/merge.yml/badge.svg)

This repository contains 2 main apps. The Storybook app for component documentation and the UI app for demonstrating these components 

## Building and running on localhost

First install dependencies:

```sh
yarn install
```

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

To create a UI production build:

```sh
yarn build:ui
```

To create a Storybook production build:

```sh
yarn build:storybook
```

To create a production build for both apps:

```sh
yarn build
```

## Testing

To run unit tests:

```sh
yarn test
```

## Deploying
To deploy Storybook to S3:

```sh
yarn deploy
```
Note: AWS credentials should be configured for this command to work
