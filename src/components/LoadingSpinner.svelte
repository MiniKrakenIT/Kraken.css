<script lang="ts">
    import {Colors, Sizes} from "./enums/Button.ts";

    export let color: Colors = Colors.Primary
    export let size: Sizes = Sizes.Medium
</script>

<div class="loading-spinner" {color} {size} role="progressbar" aria-busy="true">
</div>

<style lang="sass" global>
    @import '../style/components/loadingSpinner'
</style>
