<script lang="ts">
  import * as Integration from "$lib/components/integrations";
  import { getIntegrationsByCategory, IntegrationCategory } from "$lib/components/integrations/integration";
  import * as Layout from "$lib/components/layout";
  import { ScrollArea } from "bits-ui";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import { modalManager } from "$lib/shared/modals";
  import { X } from "lucide-svelte";
  import Scrollarea from "../scrollarea/scrollarea.svelte";

  const links = [{ name: "Cloud Providers", count: 6 }, { name: "Databases", count: 3 }, { name: "Other" }];
</script>

<div class="relative flex h-[70vh] w-[1100px] flex-col gap-4 overflow-clip rounded-lg border-2 border-slate-800 bg-zinc-950 p-2">
  <Layout.Header>
    <Layout.Left>
      <Layout.Icon tooltip="Components are the building blocks of your service catalog and CMDB such as cloud resources, applications, services, etc.">
        <IconifyWrapper
          name="components"
          size={10} />
      </Layout.Icon>
      <Layout.Titles>
        <Layout.Title>Integrations Catalog</Layout.Title>
        <Layout.Subtitle>Connect & extend your infrastructure to infraregistry.</Layout.Subtitle>
      </Layout.Titles>
    </Layout.Left>
    <Layout.Actions>
      <Button
        variant="outline"
        class="text-green-500">Request Integration</Button>
      <Button
        variant="outline"
        class="text-fuchsia-500">Get Help</Button>
      <Button
        variant="ghost"
        class="text-green-500"
        size="icon"
        onclick={() => {
          modalManager.close("integrations");
        }}>
        <X class="h-4 w-4 text-slate-500" />
      </Button>
    </Layout.Actions>
  </Layout.Header>
  <div class="flex h-full gap-4">
    <div class="flex h-full flex-col justify-between gap-2">
      <nav class="w-42">
        {#each links as link}
          <div class="flex cursor-pointer items-center justify-between gap-3 rounded-lg px-1 py-1.5 text-sm text-slate-400 transition-all hover:text-primary">
            <span>{link.name}</span>
            {#if link?.count && link.count > 0}
              <Badge
                variant="outline"
                class="ml-auto bg-slate-800">{link.count}</Badge>
            {/if}
          </div>
        {/each}
      </nav>
    </div>
    <div class="relative top-0 flex h-[80%] flex-1">
      <Scrollarea>
        <div class="grid h-full grid-cols-4 gap-6">
          {#each getIntegrationsByCategory(IntegrationCategory.CLOUD) as integration}
            <Integration.Card {integration} />
          {/each}
        </div>
      </Scrollarea>
    </div>
  </div>
</div>

<style lang="postcss">
  :global(body) {
    @apply overflow-y-hidden;
  }
</style>
