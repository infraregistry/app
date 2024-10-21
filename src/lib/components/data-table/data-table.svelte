<script lang="ts">
  import DataTableCheckbox from "./data-table-checkbox.svelte";
  import * as Table from "../ui/table/index.js";
  // import * as Pagination from '../ui/pagination/index.js'
  import { MoreHorizontal, Server, Network, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-svelte";
  import Label from "../ui/label/label.svelte";
  import Input from "../ui/input/input.svelte";
  import Button from "../ui/button/button.svelte";

  interface ServerInstance {
    id: string;
    service: "azure" | "google cloud";
    type: "virtual machine" | "virtual network";
    name: string;
  }

  const table: ServerInstance[] = [
    {
      id: "COMP-1",
      service: "azure",
      type: "virtual machine",
      name: "dev-sandbox-mateo-workstation"
    },
    {
      id: "COMP-201",
      service: "azure",
      type: "virtual machine",
      name: "dev-sandbox-arconie-workstation"
    },
    {
      id: "COMP-9",
      service: "google cloud",
      type: "virtual network",
      name: "prod-public"
    },
    {
      id: "COMP-12",
      service: "google cloud",
      type: "virtual network",
      name: "dev-internal-private"
    },
    {
      id: "COMP-22",
      service: "azure",
      type: "virtual machine",
      name: "dev-sandbox-router"
    }
  ];

  function capitalize(text: string): string {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
</script>

<div class="flex w-full flex-col gap-2">
  <div class="rounded-md border">
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Head class="w-32 [&:has([role=checkbox])]:pl-3">
            <DataTableCheckbox />
            <span>ID</span>
          </Table.Head>
          <Table.Head class="w-32 [&:has([role=checkbox])]:pl-3">
            <span>Service</span>
          </Table.Head>
          <Table.Head class="w-40 [&:has([role=checkbox])]:pl-3">
            <span>Type</span>
          </Table.Head>
          <Table.Head class="[&:has([role=checkbox])]:pl-3">
            <span>Name</span>
          </Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each table as row (row.id)}
          <Table.Row>
            <Table.Cell class="flex items-center gap-2 [&:has([role=checkbox])]:pl-3">
              <DataTableCheckbox />
              {row.id.toUpperCase()}
            </Table.Cell>
            <Table.Cell class="[&:has([role=checkbox])]:pl-3">
              <span class="flex items-center justify-center rounded-lg px-[10px] py-[2px] text-sm font-medium" class:text-white={row.service === "azure"} class:bg-blue-500={row.service === "azure"} class:bg-orange-400={row.service === "google cloud"} class:text-black={row.service === "google cloud"}>
                {capitalize(row.service)}
              </span>
            </Table.Cell>
            <Table.Cell class="flex items-center gap-2 px-3 py-4 [&:has([role=checkbox])]:pl-3">
              {#if row.type === "virtual machine"}
                <Server class="w-4" />
              {:else}
                <Network class="w-4" />
              {/if}
              {capitalize(row.type)}
            </Table.Cell>
            <Table.Cell class="[&:has([role=checkbox])]:pl-3">
              {row.name}
            </Table.Cell>
            <Table.Cell class="flex">
              <MoreHorizontal />
            </Table.Cell>
          </Table.Row>
        {:else}
          <Table.Row>
            <Table.Cell colspan={table.length} class="h-24 text-center">No results.</Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
  <div class="flex items-center justify-between p-2">
    <span class="text-sm">3 of 123 row(s) selected.</span>
    <div class="flex items-center justify-center gap-8">
      <div class="flex items-center gap-2">
        <Label>Rows per page</Label>
        <Input class="w-16" type="number" max={50} min={10} id="rows-per-page" value={10} />
      </div>
      <div class="flex items-center">
        <Label>Page 1 of 10</Label>
      </div>
      <div class="flex items-center gap-2">
        <Button class="px-3" variant="outline">
          <ChevronsLeft class="h-3 w-3" />
        </Button>
        <Button class="px-3" variant="outline">
          <ChevronLeft class="h-3 w-3" />
        </Button>
        <Button class="px-3" variant="outline">
          <ChevronRight class="h-3 w-3" />
        </Button>
        <Button class="px-3" variant="outline">
          <ChevronRight class="h-3 w-3" />
        </Button>
      </div>
    </div>
  </div>
</div>
