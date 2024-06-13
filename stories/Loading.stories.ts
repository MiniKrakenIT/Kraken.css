import type { Meta, StoryObj } from '@storybook/svelte'
import Loading from '../src/components/Loading.svelte'
import { Colors, Sizes } from '../src/components/enums/Button.ts'
import { getEnumMapping, getKeysFromEnum } from '../src/helpers/EnumHelpers.ts'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    busy: { control: 'boolean' },
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
  },
} satisfies Meta<Loading>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Busy: Story = {
  args: {
    busy: true,
  },
}

export const HelloWorld: Story = {
  args: {
    busy: false,
  },
}
