<script lang="ts">
  import BadgeTag from "./badge-tag.svelte";
  import * as Command from "$lib/components/ui/command";
  import * as Card from "$lib/components/ui/card";
  import * as Popover from "$lib/components/ui/popover";
  import type { Tag } from "$lib/types";
  import { noop } from "rxjs";
  import Button from "../ui/button/button.svelte";
  import Input from "../ui/input/input.svelte";

  interface Props {
    tags: Tag[];
    disabled?: boolean;
    plus_button?: boolean;
    max?: number;
    onValueChange?: (value: Tag[]) => void;
    wrap?: boolean;
  }

  function handleClick(tag: Tag) {
    if (tag.disabled) return;
    tagList = tagList.filter((t) => t.label !== tag.label);
    onValueChange(tagList);
  }

  let { tags, disabled = false, plus_button = true, max = 10, onValueChange = noop, wrap = true }: Props = $props();

  let open = $state(false);

  let initialList = $state.snapshot(tags.slice(0, max));
  let tagList = $state(tags.slice(0, max));
  let filteredTags = $state(tags.slice(0, max));
  let searchText = $state("");

  let wrapClass = $derived(wrap ? "flex-wrap" : "overflow-x-auto");

  $effect(() => {
    $inspect(open);
  });
</script>

<Card.Root>
  <div class="flex items-center gap-2 px-4 py-3 {wrapClass}">
    {#each tagList as tag}
      <BadgeTag {tag} handleClick={() => handleClick(tag)} />
    {/each}
    {#if !disabled}
      <Popover.Root bind:open>
        <Popover.Trigger>
          {#if plus_button}
            <Button variant="ghost">&plus;</Button>
          {:else}
            <Input placeholder="Search tags..." {onfocus} type="text" {oninput} bind:value={searchText} />
          {/if}
        </Popover.Trigger>
        <Popover.Content>
          <Command.Root class="w-64">
            {#if plus_button}
              <Command.Input placeholder="Search tags..." />
            {/if}
            <Command.List>
              <Command.Group>
                {#each filteredTags as suggestion}
                  <Command.Item>
                    <button
                      class="flex h-8 cursor-pointer items-center gap-2 transition-colors hover:bg-muted"
                      onclick={() => {
                        tagList.push({
                          label: suggestion.label,
                          color: suggestion.color,
                          disabled: false
                        });
                      }}>
                      <div class="h-4 w-4 rounded-full border border-muted-foreground {suggestion.color}"></div>
                      <span class="select-none">{suggestion.label}</span>
                    </button>
                  </Command.Item>
                {/each}
              </Command.Group>
            </Command.List>
          </Command.Root>
        </Popover.Content>
      </Popover.Root>
    {/if}
  </div>
</Card.Root>
