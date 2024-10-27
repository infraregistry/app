<script lang="ts">
  import { TreeItem } from "$lib/components/tree/types";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { DownloadCloud, Ellipsis } from "lucide-svelte";
  import Tree from "../tree/tree.svelte";
  import Button from "../ui/button/button.svelte";
  import { Input } from "../ui/input";

  type Props = {
    data: TreeItem[];
  };

  let { data }: Props = $props();
</script>

<div class="flex h-full flex-col gap-2 bg-zinc-900/50">
  <div class="flex gap-2 border-b">
    <Input type="email" placeholder="Search documents..." class="h-10 w-full rounded-none border-none" />
  </div>
  <div class="flex-1 p-1">
    <Tree {data} />
  </div>
  <div class="flex gap-2 p-2">
    <Button variant="outline" class="w-full text-green-500">Create Document</Button>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="outline" class="text-slate-500">
          <Ellipsis class="h-4 w-4" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content class="">
        <DropdownMenu.Item class="flex justify-between">
          Export
          <DownloadCloud class="h-4 w-4" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
</div>
