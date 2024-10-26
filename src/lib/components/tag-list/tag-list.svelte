<script lang="ts">
  import BadgeTag from "./badge-tag.svelte";
  import * as Card from "$lib/components/ui/card";
  import Input from "$lib/components/ui/input/input.svelte";
  import type { Tag } from "$lib/types";
  import { noop } from "rxjs";
  import { tagDictionary } from "$lib/stores";

  interface Props {
    tags: Tag[];
    disabled?: boolean;
    max?: number;
    onValueChange?: (value: Tag[]) => void;
    wrap?: boolean;
  }

  function handleClick(tag: Tag) {
    if (tag.disabled) return;
    tagList = tagList.filter((t) => t.label !== tag.label);
    onValueChange(tagList);
  }

  let focused = $state(false);

  function onfocus() {
    focused = true;
  }

  function onfocusout() {
    focused = false;
  }

  let { tags, disabled = false, max = 10, onValueChange = noop, wrap = true }: Props = $props();

  let tagList = $state(tags.slice(0, max));
  let wrapClass = $derived(wrap ? "flex-wrap" : "overflow-x-auto");
</script>

<Card.Root>
  <div class="flex items-center gap-2 px-4 py-3 {wrapClass}">
    {#each tagList as tag}
      <BadgeTag {tag} handleClick={() => handleClick(tag)} />
    {/each}
    {#if !disabled}
      <div class="flex flex-col">
        <Input {onfocus} {onfocusout} type="text" class="w-64 border-none stroke-none shadow-none" placeholder="Add a tag.." />
        {#if focused}
          <div class="relative top-2 z-50 flex w-48 flex-col rounded-b-lg bg-popover py-1 shadow-xl">
            {#each Object.entries($tagDictionary) as suggestion}
              <button
                class="flex h-8 cursor-pointer items-center gap-2 px-2 py-[6px] transition-colors hover:bg-muted"
                onclick={() => {
                  tagList.push({
                    label: suggestion[0],
                    color: suggestion[1],
                    disabled: false
                  });
                }}>
                <div class="h-4 w-4 rounded-full border border-muted-foreground {suggestion[1]}"></div>
                <span class="select-none">{suggestion[0]}</span>
              </button>
            {/each}
          </div>
        {/if}
      </div>
    {/if}
  </div>
</Card.Root>
