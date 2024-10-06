<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Table } from "@mateothegreat/svelte5-table";
  import { PartyPopper } from "lucide-svelte";
  import { components } from "../components";
</script>

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
