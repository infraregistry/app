<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { HTMLThAttributes } from "svelte/elements";

  type $$Props = HTMLThAttributes;

  interface Props {
    [key: string]: any;
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<th class={cn("text-muted-foreground h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)} {...rest}>
  {@render children?.()}
</th>
