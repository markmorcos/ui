import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { TopBar } from '.'

export default {
  title: 'Components/TopBar',
  component: TopBar,
} as Meta<typeof TopBar>

const Template: StoryFn<typeof TopBar> = (args) => <TopBar {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Default'
}

