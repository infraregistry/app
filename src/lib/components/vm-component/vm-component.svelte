<script lang="ts">
  import Computer from "lucide-svelte/icons/computer";
  import BadgeTag from "./../tag-list/badge-tag.svelte";
  import HeartPulse from "lucide-svelte/icons/heart-pulse";
  import EllipsisVertical from "lucide-svelte/icons/ellipsis-vertical";
  import type { Tag } from "$lib/types";

  interface Props {
    name: string;
    tags?: Tag[];
    // status: "healthy" | "outage" | "on" | "off"
  }

  let { name, tags = [] }: Props = $props();
</script>

<div
  class="flex items-center justify-between rounded-lg border-2 p-2"
  contenteditable="false">
  <div class="flex items-center gap-3">
    <Computer class="h-7 w-7" />
    <div class="flex flex-col">
      <p class="text-sm leading-none text-neutral-400">Virtual Machine</p>
      <p class="text-lg font-semibold text-indigo-500">{name}</p>
    </div>
  </div>
  <div class="flex items-center gap-3">
    {#if tags}
      <div class="flex items-center gap-1">
        {#each tags as tag}
          <BadgeTag {tag} />
        {/each}
      </div>
    {/if}
    <HeartPulse class="stroke-green-600 stroke-1" />
    <EllipsisVertical />
  </div>
</div>
