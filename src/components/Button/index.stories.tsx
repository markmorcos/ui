import * as React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  children: 'Primary',
  onClick: () => alert('Primary'),
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Secondary',
  onClick: () => alert('Secondary'),
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Disabled',
  onClick: () => alert('Disabled'),
}
