<script lang="ts">
  import Diagram from "$lib/components/diagram/diagram.svelte";
  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Tabs from "$lib/components/ui/tabs";
  import Icon from "@iconify/svelte";
  import { push } from "svelte-spa-router";
  import { writable } from "svelte/store";
  import Depedencies from "./dependencies/depedencies.svelte";
  import Panel from "./panel.svelte";
  import Settings from "./settings/settings.svelte";

  // openCreateProperty();

  const tab = writable<"documentation" | "dependencies" | "diagram" | "settings">("dependencies");
</script>

<div class="mb-4 flex items-end gap-4">
  <div class="flex flex-1 items-center gap-3 rounded-xl bg-black px-3 py-2">
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
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="outline" class="flex items-center gap-1 pl-5 pr-2 text-zinc-400">
            Manage
            <Icon icon="flowbite:caret-down-outline" class="h-5 w-5 text-zinc-700" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Group>
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Profile</DropdownMenu.Item>
            <DropdownMenu.Item>Billing</DropdownMenu.Item>
            <DropdownMenu.Item>Team</DropdownMenu.Item>
            <DropdownMenu.Item>Subscription</DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
    <Button on:click={() => push("/components")} variant="outline" size="icon" class="">
      <Icon icon="material-symbols:navigate-next" class="h-5 w-5 text-zinc-700" />
    </Button>
  </div>
</div>
<div class="flex gap-3">
  <div class="flex flex-1 flex-col gap-3">
    <Tabs.Root
      value={$tab}
      on:selected={() => {
        console.log("selected");
      }}>
      <Tabs.List class="">
        <Tabs.Trigger onclick={() => ($tab = "documentation")} value="documentation">Documentation</Tabs.Trigger>
        <Tabs.Trigger onclick={() => ($tab = "dependencies")} value="dependencies">Dependencies</Tabs.Trigger>
        <Tabs.Trigger onclick={() => ($tab = "diagram")} value="diagram">Diagram</Tabs.Trigger>
        <Tabs.Trigger onclick={() => ($tab = "settings")} value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
    {#if $tab === "settings"}
      <Settings />
    {:else if $tab === "dependencies"}
      <Depedencies />
    {:else if $tab === "diagram"}
      <Diagram />
    {:else}
      <!-- <Documentation /> -->
    {/if}
  </div>
  <div class="w-[375px]">
    <Panel />
  </div>
</div>
