<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import { cn } from "$lib/utils.js";
  import { type Editor } from "@tiptap/core";

  type Props = {
    editor: Editor;
    icon: string;
    tooltip?: string;
    onclick: () => void;
  };

  let { editor, icon, tooltip, onclick }: Props = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Button
        variant="ghost"
        size="sm"
        on:click={() => {
          console.log("clicked");
          onclick();
        }}
        class={cn("min-w-[30px] px-1", editor.isActive(icon) && "bg-muted")}>
        <IconifyWrapper
          name={icon}
          size={4} />
      </Button>
    </Tooltip.Trigger>
    <Tooltip.Content>
      {tooltip}
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
