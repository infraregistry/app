<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { cn } from "$lib/utils.js";
  import Icon from "@iconify/svelte";
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
        onclick={() => {
          console.log("clicked");
          onclick();
        }}
        class={cn("min-w-[30px] px-1", editor.isActive(icon) && "bg-muted")}>
        <Icon
          {icon}
          class="h-4 w-4" />
      </Button>
    </Tooltip.Trigger>
    {#if tooltip}
      <Tooltip.Content>
        {tooltip}
      </Tooltip.Content>
    {/if}
  </Tooltip.Root>
</Tooltip.Provider>
