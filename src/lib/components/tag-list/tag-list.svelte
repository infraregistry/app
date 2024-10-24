<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import * as Card from "$lib/components/ui/card";
  import Input from "$lib/components/ui/input/input.svelte";
  import type { Tag } from "$lib/types";
  import { noop } from "rxjs";

  interface Props {
    tags?: Tag[];
    disabled?: boolean;
    max?: number;
    onValueChange?: (value: Tag[]) => void;
    wrap?: boolean;
  }

  let { tags = [], disabled = false, max = 10, onValueChange = noop, wrap = true }: Props = $props();

  tags = [
    { label: "Important", color: "bg-red-500", disabled: false },
    { label: "Info", color: "bg-blue-400", disabled: false },
    { label: "Warning", color: "bg-yellow-600", disabled: true },
    { label: "Success", color: "bg-green-500", disabled: false },
    { label: "Note", color: "bg-gray-400", disabled: false },
    { label: "Error", color: "bg-red-500", disabled: true },
    { label: "Feature", color: "bg-indigo-500", disabled: false }
  ];
  let wrapClass = $derived(wrap ? "flex-wrap" : "overflow-x-auto");
</script>

<Card.Root>
  <Card.Header>
    <div class="flex flex-col">
      <Card.Title class="-mb-0.5 text-base text-slate-400">Tag list</Card.Title>
      <Card.Description class="text-sm text-slate-600">Testing the tag list component</Card.Description>
    </div>
  </Card.Header>
  <Card.Content>
    <div class="flex items-center gap-2 {wrapClass}">
      {#each tags as tag}
        <div class:disabled={tag.disabled}>
          <Badge class="text-white {tag.color} rounded-full">{tag.label}</Badge>
        </div>
      {/each}
      <Input type="text" class="w-56 border-transparent outline-none" placeholder="Add a tag" />
    </div>
  </Card.Content>
</Card.Root>

<style lang="postcss">
  .disabled {
    @apply cursor-not-allowed opacity-50;
  }
</style>
