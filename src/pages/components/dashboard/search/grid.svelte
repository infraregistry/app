<script lang="ts">
  import Scrollarea from "$lib/components/scrollarea/scrollarea.svelte";
  import Item from "./item.svelte";

  const items = Array.from({ length: 25 }).map((_, i) => i);
</script>

<Scrollarea class="h-full overflow-hidden">
  <div class="m-1 flex flex-wrap gap-3">
    {#each items as item}
      <Item />
    {/each}
  </div>
</Scrollarea>
