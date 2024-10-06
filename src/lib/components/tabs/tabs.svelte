<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
  import { type Writable } from "svelte/store";

  type Props = {
    tabs: string[];
    selected: Writable<string>;
  };

  let { tabs, selected }: Props = $props();
</script>

<Tabs.Root value={$selected}>
  <Tabs.List class="">
    {#each tabs as tab}
      <Tabs.Trigger onclick={() => selected.set(tab)} value={tab}>{tab}</Tabs.Trigger>
    {/each}
  </Tabs.List>
</Tabs.Root>
