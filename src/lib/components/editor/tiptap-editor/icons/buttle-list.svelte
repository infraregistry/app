<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { cn } from "$lib/utils.js";
  import { type Editor } from "@tiptap/core";
  import { List } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Button
        variant="ghost"
        size="icon"
        class={cn("h-6 w-6", editor.isActive("bulletList") && "bg-muted")}
        onclick={() => editor.chain().focus().toggleBulletList().run()}>
        <List />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Bullet List (⌘⇧8)</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
