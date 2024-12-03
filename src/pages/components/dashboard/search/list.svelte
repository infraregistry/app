<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import { components } from "$pages/components/components";
  import Icon from "@iconify/svelte";
  import type { TableColumn } from "@mateothegreat/svelte5-table";
  import { DropinTable } from "@mateothegreat/svelte5-table";

  const items = Array.from({ length: 25 }).map((_, i) => i);

  const columns: TableColumn[] = [
    {
      field: "id",
      header: {
        value: "ID",
        class: "text-slate-600"
      },
      // renderer: typeColumn,
      class: "w-4 text-slate-500"
    },
    {
      field: "name",
      header: {
        value: "Name",
        class: "text-slate-600"
      },
      // renderer: createdColumn,
      class: "w-20 text-slate-500"
    },
    {
      field: "name",
      header: {
        value: "Name",
        class: "text-slate-600"
      },
      class: "text-slate-500"
    },
    {
      field: "description",
      header: {
        value: "Description",
        class: "text-slate-600"
      },
      class: "text-slate-500"
    },
    {
      field: "type",
      header: {
        value: "Type",
        class: "text-slate-600"
      },
      class: "text-slate-500"
    }
  ];

  let selections = $state([]);
</script>

<div class="mx-3 rounded-lg border-2 border-slate-800">
  <div class="flex items-center">
    <Input
      class="flex-1 rounded-none border-0 border-b border-slate-800"
      placeholder="Search" />
    <Button
      variant="outline"
      class="rounded-none border-0 border-b border-l border-slate-800">
      <Icon
        icon="ph:download-duotone"
        class="h-5 w-5 text-slate-400" />
    </Button>
  </div>
  <DropinTable
    config={{}}
    {columns}
    id="id"
    data={components}
    bind:selections />
</div>
