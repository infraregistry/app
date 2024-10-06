<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card";
  import { openAddConnectorModal } from "$lib/connectors/add-connector";
  import { Cog } from "lucide-svelte";

  const links = [
    { name: "Connectors", count: 6 },
    { name: "Users", count: 1 },
    { name: "Settings", count: 0 }
  ];

  openAddConnectorModal();
</script>

<div class="flex h-full gap-4">
  <div class="flex flex-col gap-3 p-4">
    <div class="flex gap-2">
      <a href="/" class="flex gap-2 font-semibold text-slate-500">
        <Cog class="h-6 w-6" />
        <span>Settings</span>
      </a>
    </div>
    <div class="flex flex-1">
      <nav class="w-48">
        {#each links as link}
          <a href="##" class="hover:text-primary flex items-center justify-between gap-3 rounded-lg px-1 py-1.5 text-sm text-slate-400 transition-all">
            <span>{link.name}</span>
            {#if link.count > 0}
              <Badge variant="outline" class="bg-secondary ml-auto">{link.count}</Badge>
            {/if}
          </a>
        {/each}
      </nav>
    </div>
    <div class="mt-auto p-4">
      <Card.Root>
        <Card.Header class="p-4">
          <Card.Title>Upgrade to Pro</Card.Title>
          <Card.Description>Unlock all features and get unlimited access to our support team.</Card.Description>
        </Card.Header>
        <Card.Content class="p-4">
          <Button size="sm" class="w-full">Upgrade</Button>
        </Card.Content>
      </Card.Root>
    </div>
  </div>

  <div class="flex flex-1">
    <main class="mt-4 flex flex-1 flex-col gap-4">
      <div class="flex items-center">
        <h1 class="text-lg font-semibold text-slate-400 md:text-lg">Connections</h1>
      </div>
      <div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div class="flex flex-col items-center gap-1 text-center">
          <h3 class="text-2xl font-bold tracking-tight text-indigo-500">You have no connections..</h3>
          <p class="text-muted-foreground text-sm">Add a connection to start tracking your change data and catalog things!</p>
          <Button class="mt-4" variant="success">Add Connection</Button>
        </div>
      </div>
    </main>
  </div>
</div>
