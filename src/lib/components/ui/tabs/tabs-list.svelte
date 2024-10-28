<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Tabs as TabsPrimitive } from "bits-ui";

  type $$Props = TabsPrimitive.ListProps;

  interface Props {
    [key: string]: any;
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<TabsPrimitive.List class={cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted/50 p-1 text-muted-foreground", className)} {...rest}>
  {@render children?.()}
</TabsPrimitive.List>
