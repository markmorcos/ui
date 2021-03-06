import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TopBar } from '.'

export default {
  title: 'Components/TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>

const Template: ComponentStory<typeof TopBar> = (args) => <TopBar {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Default'
}

