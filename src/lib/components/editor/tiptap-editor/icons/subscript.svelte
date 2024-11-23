<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { cn } from "$lib/utils.js";
  import { type Editor } from "@tiptap/core";
  import { Subscript } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Button
        variant="ghost"
        class={cn("h-6 w-6", editor.isActive("subscript") && "bg-muted")}
        onclick={() => editor.chain().focus().toggleSubscript().run()}>
        <Subscript />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Subscript (⌘,)</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
