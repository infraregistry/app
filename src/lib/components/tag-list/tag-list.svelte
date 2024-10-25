<script lang="ts">
  import BadgeTag from "./badge-tag.svelte";
  import * as Card from "$lib/components/ui/card";
  import Input from "$lib/components/ui/input/input.svelte";
  import type { Tag } from "$lib/types";
  import { noop } from "rxjs";
  import type { Writable } from "svelte/store";

  interface Props {
    tagList?: Writable<Tag[]>;
    disabled?: boolean;
    max?: number;
    onValueChange?: (value: Tag[]) => void;
    wrap?: boolean;
  }

  let { tagList, disabled = false, max = 10, onValueChange = noop, wrap = true }: Props = $props();

  let tags = $state(tagList);
  let wrapClass = $derived(wrap ? "flex-wrap" : "overflow-x-auto");
</script>

<Card.Root>
  <div class="flex items-center gap-2 px-4 py-3 {wrapClass}">
    {#each $tags as tag}
      <BadgeTag {tag} />
    {/each}
    <Input type="text" class="w-64 border-none stroke-none shadow-none" placeholder="Add a tag" />
  </div>
</Card.Root>
