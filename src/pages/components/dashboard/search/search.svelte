<script lang="ts">
  import Tabs from "$lib/components/tabs/tabs.svelte";
  import { goto, QueryString } from "@mateothegreat/svelte5-router";
  import Grid from "./grid.svelte";
  import List from "./list.svelte";

  const qs = new QueryString();

  let selected = $state(qs.get("tab", "grid"));
</script>

<div class="flex h-full flex-col gap-2">
  <div class="relative flex items-center gap-2">
    <div class="flex-1"></div>
    <div class="flex items-center gap-2">
      <Tabs
        tabs={["grid", "list"]}
        {selected}
        onValueChange={(v) => {
          selected = v;
          qs.set("tab", v);
          goto(`/components?${qs.toString()}`);
        }} />
    </div>
  </div>
  {#if selected === "grid"}
    <Grid />
  {:else}
    <List />
  {/if}
</div>
