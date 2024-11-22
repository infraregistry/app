<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { Block } from "./api";

  type Props = {
    block: Block;
  };
  let { block }: Props = $props();
</script>

<div class="flex gap-1 hover:bg-zinc-900">
  <div class="p-1.5">
    <Icon icon="mi:reorder-alt" />
  </div>
  <div class="flex-1">
    {block.content}
  </div>
</div>
