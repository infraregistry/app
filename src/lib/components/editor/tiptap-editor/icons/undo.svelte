<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { type Editor } from "@tiptap/core";
  import { Undo } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Button
        variant="ghost"
        onclick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}>
        <Undo />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Undo (⌘Z)</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
