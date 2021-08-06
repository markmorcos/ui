module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    'loki/configure-react'
  ],
  webpackFinal: { performance: { hints: false } },
}
