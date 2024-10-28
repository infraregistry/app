<script lang="ts">
  import Tabs from "$lib/components/tabs/tabs.svelte";
  import { Input } from "$lib/components/ui/input";
  import qs from "qs";
  import { push, querystring } from "svelte-spa-router";
  import Grid from "./grid.svelte";
  import List from "./list.svelte";

  let selected = $state(qs.parse($querystring)?.tab ?? "grid");
  const items = Array.from({ length: 100 }).map((_, i) => i);
</script>

<div class="flex h-full flex-col gap-2">
  <div class="relative flex items-center gap-2">
    <div class="flex-1"></div>
    <div class="flex items-center gap-2">
      <Input class="w-60" placeholder="Filter results..." />
      <Tabs
        tabs={["grid", "list"]}
        {selected}
        onValueChange={(v) => {
          selected = v;
          push(`/components?${qs.stringify({ tab: v })}`);
        }} />
    </div>
  </div>
  {#if selected === "grid"}
    <Grid />
  {:else}
    <List />
  {/if}
</div>
