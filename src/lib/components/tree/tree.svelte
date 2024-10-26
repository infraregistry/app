<script lang="ts">
  import { ChevronDown, ChevronRight } from "lucide-svelte";
  import { onMount } from "svelte";

  export class TreeItem {
    label = $state("");
    expanded = $state(false);
    children = $state<TreeItem[]>([]);

    constructor(data: TreeItem) {
      this.label = data.label;
      this.expanded = data.expanded;
      this.children = data.children;
    }
  }

  type Props = {
    data: TreeItem[];
    level?: number;
    node?: TreeItem;
  };

  let { data, level = 0, node }: Props = $props();

  const items = $state<TreeItem[]>([]);

  onMount(() => {
    console.log("data", data, items);

    for (const item of data) {
      const treeItem = new TreeItem(item);
      items.push(treeItem);
      console.log("treeItem", treeItem);
    }
  });
</script>

{#each items as item}
  <div class="text-slate-200" style={`padding-left:${level * 15}px`}>
    <div
      onclick={() => {
        item.expanded = !item.expanded;
      }}
      class="flex cursor-pointer gap-2">
      <div class="w-4">
        {#if item.children && items.length > 0}
          {#if item.expanded}
            <ChevronDown />
          {:else}
            <ChevronRight />
          {/if}
        {/if}
      </div>
      <div class="">{item.label}</div>
    </div>
    {#if item.children && items.length > 0 && item.expanded}
      <svelte:self data={item.children} level={level + 1} />
    {/if}
  </div>
{/each}
