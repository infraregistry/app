<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";

  type Props = {
    tabs: string[];
    selected: string;
    onValueChange?: (value: string) => void;
  };

  let { tabs, selected = $bindable(), onValueChange }: Props = $props();
</script>

<Tabs.Root value={selected}>
  <Tabs.List>
    {#each tabs as tab}
      <Tabs.Trigger
        onclick={() => onValueChange?.(tab)}
        value={tab}>{tab}</Tabs.Trigger>
    {/each}
  </Tabs.List>
</Tabs.Root>
