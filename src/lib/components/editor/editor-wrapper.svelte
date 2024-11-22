<script lang="ts">
  import { draggable } from "@mateothegreat/svelte5-drag-and-drop";
  import { getBlocks } from "./api";
  import BlockWrapper from "./block.svelte";

  const mockResults = getBlocks("123");

  mockResults.subscribe((blocks) => {
    console.log(blocks);
  });
</script>

<div
  use:draggable
  class="h-full w-full">
  {#each $mockResults as block, i (block.id)}
    <div>
      <BlockWrapper {block} />
    </div>
  {/each}
</div>
