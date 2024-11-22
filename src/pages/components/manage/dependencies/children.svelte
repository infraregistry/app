<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import Icon from "@iconify/svelte";
  import { DropinTable } from "@mateothegreat/svelte5-table";
  import { Tooltip } from "bits-ui";
  import { writable } from "svelte/store";
  import { slide } from "svelte/transition";
  import { getDependencies } from "./dependencies-api.svelte.js";
  import { openAddRelation } from "./relate/relate.svelte.js";

  type Props = {
    id: string;
    icon: string;
    title: string;
    description: string;
    iconClass: string;
    type: "Parent" | "Child";
  };

  let { icon, iconClass, title, description, id, type }: Props = $props();
  let selections = writable([]);
  let data = $state(getDependencies(id));

  const types = {
    Parent: {
      classes: "text-pink-500",
      tooltip: "Add component(s) that this component links up to (is a child of)."
    },
    Child: {
      classes: "text-green-500",
      tooltip: "Add component(s) that this component links down to (is a parent of)."
    }
  };

  const relate = (id: string) => {
    openAddRelation(id).subscribe((success) => {
      console.log("add relation process completed:", success);
    });
  };
</script>

<Card.Root>
  <Card.Header class="flex flex-row justify-between px-5">
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <div class={iconClass}>
          <Icon
            {icon}
            class="h-8 w-8 text-blue-500" />
        </div>
        <div class="flex flex-col">
          <Card.Title class="-mb-0.5 text-base text-slate-400">{title}</Card.Title>
          <Card.Description class="text-sm text-slate-600">{description}</Card.Description>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={200}>
          <Tooltip.Trigger class="">
            <Button
              variant="outline"
              onclick={() => relate(id)}
              class="flex items-center gap-1">
              <Icon
                class="h-5 w-5"
                icon="material-symbols:add-link" />
            </Button>
          </Tooltip.Trigger>
          <Tooltip.Content
            forceMount
            side="right">
            {#snippet child({ props, open })}
              {#if open}
                <div
                  {...props}
                  transition:slide>
                  <div
                    class="border-dark-10 z-0 flex items-center justify-center rounded-lg border bg-background p-2 text-xs font-medium text-slate-400 shadow-popover outline-none">
                    {types[type].tooltip}
                  </div>
                </div>
              {/if}
            {/snippet}
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    </div>
  </Card.Header>
  <Card.Content>
    {#snippet actionsColumn(row: any)}
      <div class="flex items-center gap-2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button
              variant="outline"
              class="h-7 px-2"><Icon icon="rivet-icons:ellipsis-vertical" /></Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-56">
            <DropdownMenu.Group>
              <DropdownMenu.Item>Team</DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>Invite users</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Email</DropdownMenu.Item>
                  <DropdownMenu.Item>Message</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>More...</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
              <DropdownMenu.Item>
                New Team
                <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>GitHub</DropdownMenu.Item>
            <DropdownMenu.Item>Support</DropdownMenu.Item>
            <DropdownMenu.Item>API</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Delete Dependency</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    {/snippet}
    <div class="max-h-[200px] overflow-y-auto">
      <DropinTable
        {data}
        {selections}
        columns={[
          {
            field: "id",
            header: "Component ID"
          },
          {
            field: "name",
            header: "Component Name"
          },
          {
            field: "description",
            header: "Component Description"
          },
          {
            field: "actions",
            classes: "flex items-center justify-end",
            renderer: actionsColumn
          }
        ]} />
    </div>
  </Card.Content>
</Card.Root>
