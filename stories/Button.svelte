<script lang="ts">

  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false

  /**
   * What background color to use
   */
  export let backgroundColor: string | undefined = undefined
  /**
   * How large should the button be?
   */
  export let size: 'small' | 'medium' | 'large' = 'medium'
  /**
   * Button contents
   */
  export let label: string = ''

  export let busy: boolean = false

  enum Colors {
    Primary = 'primary',
    Secondary = 'secondary',
    Accent = 'accent',
    Neutral = 'neutral',
  }

</script>

<button
  type="button"
  aria-busy='{busy}'
  color="{primary ? Colors.Primary : Colors.Secondary}"
  on:click
>
  {label}
</button>

<style lang="sass" global>
  @use '../src/style/components/button.sass'
</style>
