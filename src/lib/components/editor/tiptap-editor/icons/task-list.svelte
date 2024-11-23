<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { cn } from "$lib/utils.js";
  import { type Editor } from "@tiptap/core";
  import { CheckSquare } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Button
        variant="ghost"
        class={cn("h-6 w-6", editor.isActive("taskList") && "bg-muted")}
        onclick={() => editor.chain().focus().toggleTaskList().run()}>
        <CheckSquare />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Tasks List (⌘⇧9)</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
