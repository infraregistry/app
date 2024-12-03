<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { Block } from "./blocks/block.svelte";
  import TiptapEditor from "./tiptap-editor/tiptap-editor.svelte";

  type Props = {
    block: Block;
    showToolbar?: boolean;
  };

  let { block, showToolbar = true }: Props = $props();

  const onFullscreen = (opening: boolean) => {
    console.log(opening);
  };
</script>

<div class="flex gap-1 rounded hover:bg-zinc-800/30">
  <div class="cursor-grab p-1.5 active:cursor-grabbing">
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
