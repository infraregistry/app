<script lang="ts">
  import BadgeTag from "./badge-tag.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Card from "$lib/components/ui/card";
  import Input from "$lib/components/ui/input/input.svelte";
  import type { Tag } from "$lib/types";
  import { noop } from "rxjs";
  import { buttonVariants } from "../ui/button";

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

  function onfocus(e: FocusEvent) {
    e.preventDefault();
    if (plus_button) return;
    open = true;
  }

  function oninput(e: InputEvent) {
    e.preventDefault();
    if (!open) return;
    filteredTags = initialList.filter((t) => {
      if (t.label.match(searchText)) return t;
    });
  }

  let { tags, disabled = false, plus_button = true, max = 10, onValueChange = noop, wrap = true }: Props = $props();

  let open = $state(false);

  let initialList = $state.snapshot(tags.slice(0, max));
  let tagList = $state(tags.slice(0, max));
  let filteredTags = $state(tags.slice(0, max));
  let searchText = $state("");

  let inputWidth = $derived(plus_button ? "w-full" : "w-max");
  let wrapClass = $derived(wrap ? "flex-wrap" : "overflow-x-auto");

  $effect(() => {
    $inspect(open);
  });
</script>

{#snippet searchInput()}
  <Input placeholder="Search tags..." {onfocus} type="text" class={inputWidth} {oninput} bind:value={searchText} />
{/snippet}

<Card.Root>
  <div class="flex items-center gap-2 px-4 py-3 {wrapClass}">
    {#each tagList as tag}
      <BadgeTag {tag} handleClick={() => handleClick(tag)} />
    {/each}
    {#if !disabled}
      <DropdownMenu.Root bind:open>
        {#if plus_button}
          <DropdownMenu.Trigger class={buttonVariants({ variant: "ghost", size: "icon" })}><span>&plus;</span></DropdownMenu.Trigger>
        {:else}
          {@render searchInput()}
        {/if}

        <DropdownMenu.Content class="w-64">
          <DropdownMenu.Group>
            {#if plus_button}
              <DropdownMenu.Group>
                {@render searchInput()}
              </DropdownMenu.Group>
              <DropdownMenu.Separator />
            {/if}
            <DropdownMenu.Group>
              {#each filteredTags as suggestion}
                <DropdownMenu.Item>
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
                </DropdownMenu.Item>
              {/each}
            </DropdownMenu.Group>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    {/if}
  </div>
</Card.Root>
