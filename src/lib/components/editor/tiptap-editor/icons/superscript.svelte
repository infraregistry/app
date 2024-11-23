<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { cn } from "$lib/utils.js";
  import { type Editor } from "@tiptap/core";
  import { Superscript } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Button
        variant="ghost"
        class={cn("h-6 w-6", editor.isActive("superscript") && "bg-muted")}
        onclick={() => editor.chain().focus().toggleSuperscript().run()}>
        <Superscript />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Superscript (⌘.)</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
