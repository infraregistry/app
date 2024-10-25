<script lang="ts">
  import { writable } from "svelte/store";
  import { Component, componentsClient } from "../../../api/components";
  import Search from "./search/search.svelte";
  import Sidebar from "./sidebar.svelte";

  const operation = componentsClient.search();
  const components = writable<Component[]>([]);

  // operation.pipe(waitForLoading()).subscribe((result) => {
  operation.subscribe((result) => {
    components.set(result.data);
    console.log(result.data);
  });
  const tab = writable<string>("table");
</script>

<div class="h-full p-3">
  <h1>Components</h1>
  <div class="flex h-full flex-1">
    <div class="mr-4 w-48 border-r-2 border-black pr-4">
      <Sidebar />
    </div>
    <div class="flex-1">
      <Search />
    </div>
  </div>
</div>
