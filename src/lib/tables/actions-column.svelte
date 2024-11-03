<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { MoreHorizontal, Share2 } from "lucide-svelte";
  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<div class="flex justify-end">
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <Button
        variant="ghost"
        size="icon"
        class="relative h-8 w-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="h-4 w-4" />
      </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <DropdownMenu.Label class="text-muted-foreground">Actions</DropdownMenu.Label>
        <DropdownMenu.Item onclick={() => navigator.clipboard.writeText(data.id)}>Copy camera ID</DropdownMenu.Item>
        <DropdownMenu.Item>View Camera</DropdownMenu.Item>
      </DropdownMenu.Group>
      <DropdownMenu.Separator />
      <DropdownMenu.Item class="flex items-center">
        Share Camera
        <Share2 class="ml-1 h-4 w-4 text-pink-500" />
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
