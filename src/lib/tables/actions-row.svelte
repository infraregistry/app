<script lang="ts">
  import * as Table from "$lib/components/ui/table";

  interface Props {
    message: string;
    colspan?: number;
    children?: import("svelte").Snippet;
  }

  let { message, colspan = 10, children }: Props = $props();
</script>

<Table.Row>
  <Table.Cell {colspan}>
    <div class="flex flex-col items-center justify-center gap-2 p-10 text-center">
      <div class="text-slate-400">{message}</div>
      {@render children?.()}
    </div>
  </Table.Cell>
</Table.Row>
