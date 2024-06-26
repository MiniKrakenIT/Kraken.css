import type { Meta, StoryObj } from '@storybook/svelte'
import { userEvent, within } from '@storybook/test'
import Button from '../src/components/Button.svelte'
import { Colors, Sizes } from '../src/components/enums/Button.ts'
import { getEnumMapping, getKeysFromEnum } from '../src/helpers/EnumHelpers.ts'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: getKeysFromEnum(Sizes),
      mapping: getEnumMapping(Sizes),
    },
    color: {
      control: { type: 'select' },
      options: getKeysFromEnum(Colors),
      mapping: getEnumMapping(Colors),
    },
    label: { control: 'text' },
    busy: { control: 'boolean' },
    disabled: { control: 'boolean' },
    block: { control: 'boolean' },
  },
  args: {
    size: 'Medium',
    color: 'Primary',
    label: 'Button',
    busy: false,
    disabled: false,
    block: false,
  },
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Base: Story = {
  args: {
    color: 'Primary',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await canvas.getByRole('button').focus()
  },
}

export const Block: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    block: true,
  },
}
