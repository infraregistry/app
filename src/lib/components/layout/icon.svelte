<script lang="ts">
  import { Tooltip } from "bits-ui";
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    class?: string;
    tooltip?: string;
  };
  let { children, class: className, tooltip }: Props = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <div class="rounded-lg border-2 border-slate-800 p-1.5 px-2">{@render children()}</div>
    </Tooltip.Trigger>
    <Tooltip.Content
      side="right"
      class="borderdark-10 z-0 flex max-w-96 items-center justify-center rounded-lg border border bg-background p-3 text-sm text-xs font-medium text-slate-400 shadow-popover outline-none">
      {tooltip}
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
