<script lang="ts">
  import { openConfirm } from "$lib/components/confirm/confirm";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tabs from "$lib/components/ui/tabs";
  import Icon from "@iconify/svelte";
  import { Pane, PaneGroup, PaneResizer } from "paneforge";
  import Router, { push } from "svelte-spa-router";
  import { deleteComponent, loadComponent } from "./api.svelte";
  import Feed from "./feed.svelte";
  import { routes } from "./routes";

  type Props = {
    params: {
      id: string;
      tab: string;
    };
  };
  let { params }: Props = $props();

  const component = loadComponent(params.id);
  const tab = $state<string>(params.tab || "documentation");

  const onSyncClick = () => {};

  const onDeleteClick = () => {
    openConfirm({
      title: "Delete Component",
      description: "Are you sure you want to delete this component?",
      label: "Delete"
    }).subscribe((result) => {
      if (result) {
        deleteComponent(component.id).subscribe();
        push("/components");
      }
    });
  };
</script>

<div class="flex items-end gap-4">
  <div class="flex flex-1 items-center gap-3 px-3 py-2">
    <Button on:click={() => push("/components")} variant="outline" size="icon" class="">
      <Icon icon="material-symbols:navigate-next" class="h-5 w-5 rotate-180 text-zinc-700" />
    </Button>
    <div class="flex flex-col">
      <div class="-mb-0.5 text-xs text-gray-500">component</div>
      <div class="flex items-center gap-2">
        <h1 class="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight text-indigo-500 sm:grow-0">Virtual Machine</h1>
        <div class="flex gap-2">
          <Badge variant="outline" class="ml-auto bg-green-800 sm:ml-0">online</Badge>
          <Badge variant="outline" class="ml-auto bg-blue-800 sm:ml-0">azure</Badge>
        </div>
      </div>
    </div>
    <div class="hidden items-center gap-2 md:ml-auto md:flex">
      <!-- <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="outline" class="flex items-center gap-1 pl-5 pr-2 text-zinc-400">
            Manage
            <Icon icon="flowbite:caret-down-outline" class="h-5 w-5 text-zinc-700" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Item onclick={() => onSyncClick()}>Sync Now</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item onclick={() => onDeleteClick()}>Delete</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root> -->
    </div>
    <Button on:click={() => push("/components")} variant="outline" size="icon" class="">
      <Icon icon="material-symbols:navigate-next" class="h-5 w-5 text-zinc-700" />
    </Button>
  </div>
</div>
<div class="px-3">
  <PaneGroup autoSaveId={`${component.id}-pane-group`} direction="horizontal">
    <Pane defaultSize={50} class=" flex flex-col gap-3 px-4 pb-2">
      <Tabs.Root
        value={tab}
        on:selected={() => {
          console.log("selected");
        }}>
        <Tabs.List class="">
          <Tabs.Trigger onclick={() => push(`/components/${component.id}/overview`)} value="overview">Overview</Tabs.Trigger>
          <Tabs.Trigger onclick={() => push(`/components/${component.id}/documentation`)} value="documentation">Documentation</Tabs.Trigger>
          <Tabs.Trigger onclick={() => push(`/components/${component.id}/dependencies`)} value="dependencies">Dependencies</Tabs.Trigger>
          <Tabs.Trigger onclick={() => push(`/components/${component.id}/monitoring`)} value="monitoring">Monitoring</Tabs.Trigger>
          <Tabs.Trigger onclick={() => push(`/components/${component.id}/settings`)} value="settings">Settings</Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
      <Router {routes} />
    </Pane>
    <PaneResizer class="relative flex w-0 items-center justify-center">
      <div class="fill-lime-500bg-brand z-10 flex h-7 w-3.5 items-center justify-center rounded-sm border bg-lime-500">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
          <path fill="currentColor" fill-rule="evenodd" d="M7.375 3.67c0-.645-.56-1.17-1.25-1.17s-1.25.525-1.25 1.17c0 .646.56 1.17 1.25 1.17s1.25-.524 1.25-1.17m0 8.66c0-.646-.56-1.17-1.25-1.17s-1.25.524-1.25 1.17s.56 1.17 1.25 1.17s1.25-.525 1.25-1.17m-1.25-5.5c.69 0 1.25.525 1.25 1.17s-.56 1.17-1.25 1.17s-1.25-.525-1.25-1.17s.56-1.17 1.25-1.17m5-3.16c0-.645-.56-1.17-1.25-1.17s-1.25.525-1.25 1.17c0 .646.56 1.17 1.25 1.17s1.25-.524 1.25-1.17m-1.25 7.49c.69 0 1.25.524 1.25 1.17s-.56 1.17-1.25 1.17s-1.25-.525-1.25-1.17c0-.646.56-1.17 1.25-1.17M11.125 8c0-.645-.56-1.17-1.25-1.17s-1.25.525-1.25 1.17s.56 1.17 1.25 1.17s1.25-.525 1.25-1.17" />
        </svg>
      </div>
    </PaneResizer>
    <Pane defaultSize={50} minSize={2} collapsible={true} collapsedSize={2} class="pb-2">
      <Feed />
    </Pane>
  </PaneGroup>
</div>
