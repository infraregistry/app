<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Tabs as TabsPrimitive } from "bits-ui";

  type $$Props = TabsPrimitive.ListProps;

  interface Props {
    [key: string]: any;
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<TabsPrimitive.List class={cn("bg-muted/50 text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1", className)} {...rest}>
  {@render children?.()}
</TabsPrimitive.List>
