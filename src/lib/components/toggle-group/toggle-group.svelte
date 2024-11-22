<script lang="ts">
  import { ToggleGroup } from "bits-ui";

  type Props = {
    items: string[];
    value: string[];
  };
  let { items, value = $bindable<string[]>([]) }: Props = $props();
</script>

<ToggleGroup.Root
  bind:value
  type="multiple"
  class="flex h-9 items-center gap-1 rounded-lg border border-border bg-muted/35 px-[4px] py-1 text-sm font-semibold">
  {#each items as item}
    <ToggleGroup.Item
      value={item}
      class="flex-grow items-center justify-center rounded-lg px-3 py-1 transition-all hover:bg-black data-[state=on]:bg-black data-[state=off]:text-zinc-400 data-[state=on]:text-green-500"
      >{item}</ToggleGroup.Item>
  {/each}
</ToggleGroup.Root>
