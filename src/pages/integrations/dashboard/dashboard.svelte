<script lang="ts">
  import UpgradeAction from "$lib/components/cta/upgrade-action.svelte";
  import { openIntegrationsModal } from "$lib/components/integrations/api";
  import { getIntegrationsByCategory, IntegrationCategory } from "$lib/components/integrations/integration";
  import * as Layout from "$lib/components/layout";
  import Scrollarea from "$lib/components/scrollarea/scrollarea.svelte";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import { route } from "@mateothegreat/svelte5-router";
  import { EllipsisVertical, LifeBuoy, Link } from "lucide-svelte";
  const links = [
    { name: "Cloud Providers", path: "/integrations/cloud-providers", count: 6 },
    { name: "Users", path: "/integrations/users", count: 1 },
    { name: "Settings", path: "/integrations/settings", count: 0 }
  ];
  openIntegrationsModal();
</script>

<div class="flex h-full flex-col gap-2 p-3">
  <Layout.Header>
    <Layout.Left>
      <Layout.Icon tooltip="Components are the building blocks of your service catalog and CMDB such as cloud resources, applications, services, etc.">
        <IconifyWrapper name="components" size={10} />
      </Layout.Icon>
      <Layout.Titles>
        <Layout.Title>Integrations</Layout.Title>
        <Layout.Subtitle>Connect & extend your infrastructure to infraregistry.</Layout.Subtitle>
      </Layout.Titles>
    </Layout.Left>
    <Layout.Actions>
      <Button variant="outline" class="text-green-500">Add Integration</Button>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="outline">
            <EllipsisVertical class="h-5 w-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item class="flex items-center gap-2">
            <LifeBuoy class="h-5 w-4 text-pink-500" />
            Get Support
          </DropdownMenu.Item>
          <DropdownMenu.Item class="flex items-center gap-2">
            <Link class="h-5 w-4" />
            Documentation
          </DropdownMenu.Item><DropdownMenu.Separator />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Layout.Actions>
  </Layout.Header>
  <div class="flex h-full flex-1"></div>
  <div class="flex h-full gap-3">
    <div class="flex h-full flex-col justify-between gap-2">
      <nav class="w-42 mt-10">
        {#each links as link}
          <a use:route href={link.path} class="flex items-center justify-between gap-3 rounded-lg px-1 py-1.5 text-sm text-slate-400 transition-all hover:text-primary">
            <span>{link.name}</span>
            {#if link.count > 0}
              <Badge variant="outline" class="ml-auto bg-secondary">{link.count}</Badge>
            {/if}
          </a>
        {/each}
      </nav>
      <UpgradeAction />
    </div>
    <div class="flex flex-1">
      <main class="flex flex-1 flex-col gap-4">
        <div class="flex items-center">
          <h1 class="text-lg font-semibold text-slate-400 md:text-lg">Active Integrations</h1>
        </div>
        <div class="flex flex-1 flex-col items-center justify-center gap-6 rounded-lg border border-dashed shadow-sm">
          {#each getIntegrationsByCategory(IntegrationCategory.CLOUD) as integration}
            <!-- <Integration.Card {integration} /> -->
          {/each}
          <div class="flex flex-col items-center gap-1 text-center">
            <h3 class="text-2xl font-bold tracking-tight text-indigo-500">You have no integrations 😥</h3>
            <p class="text-sm text-muted-foreground">Add an integration to start tracking your change data and catalog things!</p>
          </div>
          <Button variant="outline" onclick={openIntegrationsModal}>Add Integration</Button>
        </div>
      </main>
    </div>
  </div>
</div>
