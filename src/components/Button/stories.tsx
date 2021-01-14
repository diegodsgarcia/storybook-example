
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Just a text'
  }
} as Meta


export const Default: Story<ButtonProps> = (args) => <Button {...args} />