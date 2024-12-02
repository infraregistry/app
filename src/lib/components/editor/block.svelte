<script lang="ts">
  // import { draggable, droppable, type DragDropState } from "@thisux/sveltednd";
  import Icon from "@iconify/svelte";
  import type { Block } from "./blocks/block.svelte";
  import TiptapEditor from "./tiptap-editor/tiptap-editor.svelte";
  import { getBlocks } from "./api.svelte";
  import { get } from "svelte/store";

  type Props = {
    block: Block;
    showToolbar?: boolean;
  };

  let { block, showToolbar = true }: Props = $props();

  /*
  function onDrop(state: DragDropState<Block>) {
    const { draggedItem, targetContainer } = state;
    const blocks = getBlocks("123");
    const dragIndex = get(blocks).findIndex((b) => b.id === draggedItem.id);
    const dropIndex = parseInt(targetContainer ?? "0");

    if (dragIndex !== -1 && !isNaN(dropIndex)) {
      const [myBlock] = get(blocks).splice(dragIndex, 1);
      get(blocks).splice(dropIndex, 0, block);
    }
  }
  */

  const onFullscreen = (opening: boolean) => {
    console.log(opening);
  };
</script>

<div class="flex gap-1 rounded hover:bg-zinc-800/30">
  <div class="p-1.5">
    <Icon
      icon="mi:reorder-alt"
      class="text-slate-500 dark:text-slate-700" />
  </div>
  <div class="flex-1">
    <TiptapEditor
      class="max-h-[400px] min-h-[100px]"
      {block}
      {showToolbar}
      {onFullscreen} />
  </div>
</div>
