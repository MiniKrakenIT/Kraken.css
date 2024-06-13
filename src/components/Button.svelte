<script lang="ts">
  import {Colors, Sizes} from "./enums/Button.ts";
  import {getDisabled} from "./helpers/disabled.ts";

  export let color: Colors = Colors.Primary

  export let size: Sizes = Sizes.Medium
  export let label: string = ''

  export let busy: boolean = false
  export let disabled: boolean = false
  export let block: boolean = false

  $: isDisabled = getDisabled(disabled || busy)

  const loadingSpinner = () => import('./LoadingSpinner.svelte')

</script>

<button
  type="button"
  {size}
  {color}
  {block}
  disabled={isDisabled}
  aria-busy={busy}
  aria-disabled={isDisabled}
  on:click
>
  {#if busy}
    <span>
      {#await loadingSpinner() then module}
        <svelte:component this={module.default} size="{size === Sizes.Small ? Sizes.Small : Sizes.Medium}" color="{Colors.Neutral}"/>
      {/await}
    </span>
  {/if}
  <span>
    {label}
    <slot/>
  </span>
</button>


<style lang="sass" global>
  @use '../style/components/button'
</style>
