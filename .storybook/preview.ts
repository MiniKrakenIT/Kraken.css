import type { Preview } from '@storybook/svelte'
import { themes } from '@storybook/theming'
import '../src/style/components/base.sass'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    docs: {
      theme: themes.dark,
    },
  },

  tags: ['autodocs'],
}

export default preview
