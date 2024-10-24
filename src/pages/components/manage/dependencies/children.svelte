<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import Icon from "@iconify/svelte";
  import { DropinTable } from "@mateothegreat/svelte5-table";
  import { writable } from "svelte/store";
  import { getDependencies } from "./dependencies.svelte.js";
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
</script>

<Card.Root>
  <Card.Header class="flex flex-row justify-between px-5">
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <div class={iconClass}>
          <Icon {icon} class="h-8 w-8 text-blue-500" />
        </div>
        <div class="flex flex-col">
          <Card.Title class="-mb-0.5 text-base text-slate-400">{title}</Card.Title>
          <Card.Description class="text-sm text-slate-600">{description}</Card.Description>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <Button builders={[builder]} variant="outline" onclick={() => openAddRelation(id)} class="flex items-center gap-1 {types[type].classes}">
            <p>Add {type}</p>
            <Icon class="h-5 w-5" icon="material-symbols:add-link" />
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>
          {types[type].tooltip}
        </Tooltip.Content>
      </Tooltip.Root>
      <div class="flex items-center gap-2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button builders={[builder]} variant="outline" class="px-2"><Icon icon="rivet-icons:ellipsis-vertical" /></Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-56">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>Team</DropdownMenu.Item>
              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>Export...</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Download .csv</DropdownMenu.Item>
                  <DropdownMenu.Item>Download .json</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item>Download .pdf</DropdownMenu.Item>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>
              <DropdownMenu.Item>
                New Team
                <DropdownMenu.Shortcut>⌘+T</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>GitHub</DropdownMenu.Item>
            <DropdownMenu.Item>
              <IconifyWrapper name="help">Help with Components</IconifyWrapper>
            </DropdownMenu.Item>
            <DropdownMenu.Item>API</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              Log out
              <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </div>
  </Card.Header>
  <Card.Content>
    {#snippet actionsColumn(row: any)}
      <div class="flex items-center gap-2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button builders={[builder]} variant="outline" class="px-2"><Icon icon="rivet-icons:ellipsis-vertical" /></Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="w-56">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Group>
              <DropdownMenu.Item>
                Profile
                <DropdownMenu.Shortcut>⇧⌘P</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                Billing
                <DropdownMenu.Shortcut>⌘B</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                Settings
                <DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                Keyboard shortcuts
                <DropdownMenu.Shortcut>⌘K</DropdownMenu.Shortcut>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Separator />
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
            <DropdownMenu.Item>
              Log out
              <DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    {/snippet}
    <div class="max-h-[200px] overflow-y-auto">
      <DropinTable
        {data}
        {selections}
        config={{ selection: { all: true } }}
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
