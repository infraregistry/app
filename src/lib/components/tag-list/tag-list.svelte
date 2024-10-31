<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Popover from "$lib/components/ui/popover";
  import type { Tag } from "$lib/types";
  import { Command } from "bits-ui";
  import { noop } from "rxjs";
  import Button from "../ui/button/button.svelte";
  import Input from "../ui/input/input.svelte";
  import BadgeTag from "./badge-tag.svelte";

  interface Props {
    tags: Tag[];
    disabled?: boolean;
    mode?: "button" | "input";
    search?: boolean;
    max?: number;
    onValueChange?: (value: Tag[]) => void;
    wrap?: boolean;
  }

  let { tags, disabled = false, mode = "button", search = true, max = 10, onValueChange = noop, wrap = true }: Props = $props();

  let filtered = $state(tags);
  let terms = $state("");
  let createable = $derived(terms.length > 0);
  let wrapClass = $derived(wrap ? "flex-wrap" : "overflow-x-auto");

  const add = (tag: Tag) => {
    if (tags.length >= max) return;

    tags = [...tags, tag];
    onValueChange(tags);
  };

  const remove = (tag: Tag) => {
    tags = tags.filter((t) => t.label !== tag.label);
    onValueChange(tags);
  };

  const is_tag_added = (tag: Tag): boolean => {
    return tag.disabled || tags.some((t) => t.label === tag.label);
  };
</script>

<Card.Root>
  <div class="flex items-center gap-2 px-4 py-3 {wrapClass}">
    {#each tags as tag}
      <BadgeTag {tag} handleClick={() => remove(tag)} />
    {/each}
    {#if !disabled}
      <Popover.Root>
        <Popover.Trigger disabled={tags.length >= max}>
          {#if mode === "button"}
            <Button variant="ghost">&plus;</Button>
          {:else}
            <Input placeholder="Search tags..." type="text" bind:value={terms} />
          {/if}
        </Popover.Trigger>
        <Popover.Content class="w-full p-0">
          <Command.Root class="flex w-56 flex-col self-start overflow-hidden rounded-xl bg-background">
            {#if search}
              <Command.Input placeholder="Search tags..." bind:value={terms} disabled={tags.length >= max} class="focus-override h-input placeholder:text-foreground-alt/50 inline-flex w-[296px] truncate rounded-xl bg-background px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-0" />
            {/if}
            <Command.List class="max-h-[200px] overflow-y-auto overflow-x-hidden">
              <Command.Viewport>
                <Command.Empty class="flex w-full select-none flex-col items-center justify-center gap-2 pb-4 text-sm text-muted-foreground">
                  No results found.
                  <Button
                    class="flex h-8 w-full cursor-pointer items-center gap-3 bg-green-500 text-white transition-colors hover:bg-green-600"
                    onclick={() => {
                      add({
                        label: terms,
                        color: "bg-gray-500",
                        disabled: false
                      });
                      filtered = tags;
                      terms = "";
                    }}>
                    Create tag "{terms}"
                  </Button>
                </Command.Empty>
                <Command.Group>
                  {#if filtered.length > 0}
                    {#each filtered as suggestion}
                      <Command.Item class="rounded-button flex h-10 select-none items-center gap-2 px-3 py-2.5 text-sm capitalize outline-none data-[selected]:bg-muted">
                        <button class="flex h-8 w-full items-center gap-2 transition-colors hover:enabled:cursor-pointer hover:enabled:bg-muted disabled:opacity-50" disabled={is_tag_added(suggestion)} onclick={() => add(suggestion)}>
                          <div class="h-4 w-4 rounded-md {suggestion.color}"></div>
                          <span class="select-none text-sm">{suggestion.label}</span>
                        </button>
                      </Command.Item>
                    {/each}
                  {:else}
                    <Command.Empty>No results found.</Command.Empty>
                  {/if}
                </Command.Group>
                {#if createable}{/if}
              </Command.Viewport>
            </Command.List>
          </Command.Root>
        </Popover.Content>
      </Popover.Root>
    {/if}
  </div>
</Card.Root>
