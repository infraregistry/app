<script lang="ts">
  import CaretSort from "svelte-radix/CaretSort.svelte";
  import Check from "svelte-radix/Check.svelte";

  import { cn } from "$lib/utils.js";
  import * as Avatar from "$ui/avatar";
  import { Button } from "$ui/button";
  import * as Command from "$ui/command";
  import * as Popover from "$ui/popover";
  import type { Snippet } from "svelte";
  import type { Group, Item } from "./types";

  type Props = {
    placeholder?: string;
    groups: Group[];
    selected?: Item;
    selectedFn: (item: Item) => void;
    createLabel?: string;
    createFn?: () => void;
    commands?: Snippet[];
  };

  let { groups, selected = $bindable(), selectedFn, createLabel, createFn, placeholder, commands }: Props = $props();

  type Team = (typeof groups)[number]["items"][number];

  const onSelect = (item: Item) => {
    selectedFn(item);
  };
</script>

<Popover.Root>
  <Popover.Trigger>
    <Button
      variant="outline"
      role="combobox"
      class="h-10 w-[250px] justify-between">
      {#if selected}
        <Avatar.Root class="mr-2 h-5 w-5">
          <Avatar.Image
            src="https://avatar.vercel.sh/1.png"
            alt={selected.label} />
          <Avatar.Fallback>SC</Avatar.Fallback>
        </Avatar.Root>
        {selected.label}
        <CaretSort class="ml-auto h-4 w-4 shrink-0 opacity-50" />
      {/if}
    </Button>
  </Popover.Trigger>
  <Popover.Content class="max-w-[250px] p-0">
    <Command.Root>
      <Command.Input
        {placeholder}
        class="h-12" />
      <Command.List>
        <Command.Empty>No items found.</Command.Empty>
        {#each groups as group}
          <Command.Group heading={group.label}>
            {#each group.items as item}
              <Popover.Close>
                <Command.Item
                  onSelect={() => {
                    selected = item;
                    selectedFn(item);
                  }}
                  value={item.label}
                  class="h-10 w-[240px] text-sm">
                  <Avatar.Root class="mr-2 h-5 w-5">
                    <Avatar.Image
                      src="https://avatar.vercel.sh/user.png"
                      alt={item.label} />
                    <Avatar.Fallback>SC</Avatar.Fallback>
                  </Avatar.Root>
                  {item.label}
                  <Check class={cn("ml-auto h-4 w-4", selected!.label !== item.label && "text-transparent")} />
                </Command.Item>
              </Popover.Close>
            {/each}
          </Command.Group>
        {/each}
      </Command.List>
      <Command.Separator />
      <Command.List>
        <Command.Group>
          {#if commands && commands.length > 0}
            {#each commands as command}
              <Command.Item onSelect={() => {}}>
                {@render command()}
              </Command.Item>
            {/each}
          {/if}
        </Command.Group>
      </Command.List>
    </Command.Root>
  </Popover.Content>
</Popover.Root>
