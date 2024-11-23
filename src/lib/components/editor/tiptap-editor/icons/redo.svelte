<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { type Editor } from "@tiptap/core";
  import { Redo } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Button
        variant="ghost"
        class="w-12"
        onclick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}>
        <Redo class="h-6 w-6" />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Redo (⌘R)</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
