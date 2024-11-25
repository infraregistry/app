<script lang="ts">
  import { draggable, droppable, type DragDropState } from "@thisux/sveltednd";
  import { createBlock, getBlocks } from "./api.svelte";
  import { default as BlockWrapper } from "./block.svelte";
  import { Block } from "./blocks/block.svelte";
  import Separator from "./separator.svelte";

  const blocks = getBlocks("123");

  let block = $state<Block>();

  blocks.subscribe((blocks) => {
    console.log(blocks);
  });

  function handleDrop(state: DragDropState<Block>) {
    console.log(state);
    const { draggedItem, sourceContainer, targetContainer } = state;
    const sourceIndex = $blocks.findIndex((block) => block.id === draggedItem.id);
    const targetIndex = $blocks.findIndex((block) => block.id === targetContainer);

    console.log(sourceIndex, targetIndex);
    if (sourceIndex !== -1 && targetIndex !== undefined) {
      const reorderedBlocks = Array.from($blocks);
      const [movedBlock] = reorderedBlocks.splice(sourceIndex, 1);
      reorderedBlocks.splice(targetIndex, 0, movedBlock);
      blocks.set(reorderedBlocks);
      console.log(reorderedBlocks);
    } else {
      console.error("Invalid source or target index");
    }
  }
</script>

<div
  use:droppable={{ container: "list", callbacks: { onDrop: handleDrop } }}
  class="h-full w-full overflow-y-auto">
  {#each $blocks as b, i (b.id)}
    <Separator click={() => createBlock(i)} />
    <div
      class="w-full"
      role="textbox"
      tabindex="-1"
      onclick={() => (block = b)}
      onkeypress={(e) => {
        if (e.key === "Enter") block = b;
      }}>
      <BlockWrapper
        block={b}
        showToolbar={b === block} />
    </div>
  {/each}
</div>
