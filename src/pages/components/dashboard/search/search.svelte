<script lang="ts">
  import Tabs from "$lib/components/tabs/tabs.svelte";
  import { Input } from "$lib/components/ui/input";
  import { writable } from "svelte/store";
  import Item from "./item.svelte";

  const selected = writable<string>("list");
  const search = writable<string>("list");

  const onChange = () => {
    console.log("onChange");
  };
</script>

<div class="relative flex items-center gap-2">
  <div class="flex-1"></div>
  <div class="flex items-center gap-2">
    <Input class="w-60" placeholder="Filter results..." />
    <Tabs tabs={["table", "list", "grid"]} {selected} />
  </div>
</div>

<div class="flex flex-wrap gap-4">
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
  <Item />
</div>
