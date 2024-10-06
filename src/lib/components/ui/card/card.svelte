<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  interface Props {
    [key: string]: any;
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<div class={cn("bg-card text-card-foreground rounded-xl border shadow", className)} {...rest}>
  {@render children?.()}
</div>
