<script lang="ts">
  import { fade } from 'svelte/transition'
  import LoadingSpinner from "./LoadingSpinner.svelte";
  import {Colors, Sizes} from "./enums/Button.ts";

  export let busy: boolean = true
  export let color: Colors = Colors.Primary
  export let size: Sizes = Sizes.Medium
</script>

{#if busy}
  <div role="dialog" aria-busy="true" transition:fade={{duration: 200}}>
      <LoadingSpinner color="{color}" size="{size}"/>
  </div>
{/if}

<div>
    <button>click</button>
  Hello world
  something or another
</div>

<style lang="sass" global>
  @import '../style/components/loading'
</style>
