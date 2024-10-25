<script lang="ts">
  import { ScrollArea, type WithoutChild } from "bits-ui";

  type Props = WithoutChild<ScrollArea.RootProps> & {
    orientation?: "vertical" | "horizontal" | "both";
    viewportClasses?: string;
  };

  let { ref = $bindable(null), orientation = "vertical", viewportClasses, children, ...rest }: Props = $props();
</script>

{#snippet Scrollbar({ orientation }: { orientation: "vertical" | "horizontal" })}
  <ScrollArea.Scrollbar {orientation}>
    <ScrollArea.Thumb class="flex-1 rounded-full bg-muted-foreground" />
  </ScrollArea.Scrollbar>
{/snippet}

<ScrollArea.Root bind:ref {...rest} type="always">
  <ScrollArea.Viewport class="h-full bg-orange-500">
    {@render children?.()}
  </ScrollArea.Viewport>
  {#if orientation === "vertical" || orientation === "both"}
    {@render Scrollbar({ orientation: "vertical" })}
  {/if}
  {#if orientation === "horizontal" || orientation === "both"}
    {@render Scrollbar({ orientation: "horizontal" })}
  {/if}
  <ScrollArea.Corner />
</ScrollArea.Root>
