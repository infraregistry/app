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
    for (const item of data) {
      const treeItem = new TreeItem(item);
      items.push(treeItem);
    }
  });
</script>

<div class="flex flex-col gap-1">
  {#each items as item}
    <div
      class="text-[13px] text-slate-300"
      style={`padding-left:${item.children ? level * 15 : 0}px`}>
      <div
        class="flex cursor-pointer gap-0.5"
        role="button"
        onclick={() => {
          item.expanded = !item.expanded;
        }}>
        <div class="flex w-4 items-center">
          {#if item.children && items.length > 0}
            {#if item.expanded}
              <ChevronDown class="size-5" />
            {:else}
              <ChevronRight class="size-5" />
            {/if}
          {/if}
        </div>
        <div class="">{item.label}</div>
      </div>
      {#if item.children && items.length > 0 && item.expanded}
        <svelte:self
          data={item.children}
          level={level + 1} />
      {/if}
    </div>
  {/each}
</div>
