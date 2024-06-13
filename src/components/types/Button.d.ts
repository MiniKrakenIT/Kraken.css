import type { Colors, Sizes } from '../enums/Button.ts'

export type ButtonProps = {
  size?: Sizes
  color?: Colors
  label?: string
  busy?: boolean
  disabled?: boolean
  block?: boolean
}
