<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Progress } from "$lib/components/ui/progress/index.js";
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

<div class="flex flex-col gap-4">
  <div class="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card.Root class="sm:col-span-2">
        <Card.Header class="pb-3">
          <Card.Title>Your Orders</Card.Title>
          <Card.Description class="max-w-lg text-balance leading-relaxed">Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis.</Card.Description>
        </Card.Header>
        <Card.Footer>
          <Button>Create New Order</Button>
        </Card.Footer>
      </Card.Root>
      <Card.Root>
        <Card.Header class="pb-2">
          <Card.Description>This Week</Card.Description>
          <Card.Title class="text-4xl">$1329</Card.Title>
        </Card.Header>
        <Card.Content>
          <div class="text-xs text-muted-foreground">+25% from last week</div>
        </Card.Content>
        <Card.Footer>
          <Progress value={25} aria-label="25% increase" />
        </Card.Footer>
      </Card.Root>
      <Card.Root>
        <Card.Header class="pb-2">
          <Card.Description>This Month</Card.Description>
          <Card.Title class="text-3xl">$5,329</Card.Title>
        </Card.Header>
        <Card.Content>
          <div class="text-xs text-muted-foreground">+10% from last month</div>
        </Card.Content>
        <Card.Footer>
          <Progress value={12} aria-label="12% increase" />
        </Card.Footer>
      </Card.Root>
    </div>
  </div>
  <div class="flex">
    <div class="mr-4 w-48 border-r-2 border-black pr-4">
      <Sidebar />
    </div>
    <div class="flex-1">
      <Search />
    </div>
  </div>
</div>
