<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card/index.js";
  import Icon from "@iconify/svelte";
  import { Table } from "@mateothegreat/svelte5-table";
  import { PartyPopper } from "lucide-svelte";
  import { components } from "../../components";
  import { openRelateModal } from "./relate/relate.svelte";

  type Props = {
    icon: string;
    title: string;
    description: string;
    iconClass: string;
  };

  let { icon, iconClass, title, description }: Props = $props();

  openRelateModal();
</script>

<Card.Root>
  <Card.Header class="flex flex-row justify-between px-5">
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <div class={iconClass}>
          <Icon {icon} class="h-8 w-8 text-blue-500" />
        </div>
        <div class="flex flex-col">
          <Card.Title class="-mb-0.5 text-base text-slate-500">{title}</Card.Title>
          <Card.Description class="text-sm text-slate-700">{description}</Card.Description>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <Button variant="outline">Add Child</Button>
      <Button variant="outline">Add Child</Button>
    </div>
  </Card.Header>
  <Card.Content>
    {#snippet actionsHeader()}
      <div class="flex items-center gap-2">
        My Custom Header
        <PartyPopper class="h-4 w-4 text-pink-500" />
      </div>
    {/snippet}
    {#snippet actionsColumn(row: any)}
      <div class="flex items-center gap-2">
        <Button variant="outline">Edit</Button>
      </div>
    {/snippet}
    <Table
      data={$components}
      table={{
        columns: [
          {
            field: "id",
            header: "Component ID"
          },
          {
            field: "name",
            header: "Component Name"
          },
          {
            field: "custom",
            header: actionsHeader
          },
          {
            field: "actions",
            classes: "flex items-center justify-end",
            renderer: actionsColumn
          }
        ]
      }} />
  </Card.Content>
</Card.Root>
