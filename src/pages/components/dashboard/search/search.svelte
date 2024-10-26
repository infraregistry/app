<script lang="ts">
  import Scrollarea from "$lib/components/scrollarea/scrollarea.svelte";
  import Tabs from "$lib/components/tabs/tabs.svelte";
  import { Input } from "$lib/components/ui/input";
  import { writable } from "svelte/store";
  import Item from "./item.svelte";

  const selected = writable<string>("list");
  const search = writable<string>("list");

  const onChange = () => {
    console.log("onChange");
  };

  const items = Array.from({ length: 100 }).map((_, i) => i);
</script>

<div class="flex h-full flex-col gap-2">
  <div class="relative flex items-center gap-2">
    <div class="flex-1"></div>
    <div class="flex items-center gap-2">
      <Input class="w-60" placeholder="Filter results..." />
      <Tabs tabs={["table", "list", "grid"]} {selected} />
    </div>
  </div>
  <Scrollarea class="h-full overflow-hidden" viewportClasses="bg-pink-500 h-42" type="always">
    <div class="mt-4 flex flex-wrap gap-4">
      {#each items as item}
        <Item />
      {/each}
    </div>
  </Scrollarea>
</div>
