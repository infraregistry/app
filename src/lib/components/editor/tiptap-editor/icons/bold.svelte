<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { cn } from "$lib/utils.js";
  import { type Editor } from "@tiptap/core";
  import { Bold } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Button
        variant="ghost"
        size="sm"
        class={cn("h-7 w-[50px] px-1", editor.isActive("bold") && "bg-muted")}
        onclick={() => editor.chain().focus().toggleBold().run()}>
        <Bold class="h-4 w-4" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Bold (⌘B)</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
