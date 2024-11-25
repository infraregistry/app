<script lang="ts">
  import { cn } from "$lib/utils.js";
  import type { HTMLAttributes } from "svelte/elements";

  type $$Props = HTMLAttributes<HTMLDivElement>;

  interface Props {
    [key: string]: any;
  }

  let { class: className = undefined, children, ...rest }: Props = $props();
</script>

<div
  class={cn("rounded-xl border-2 border-slate-800 bg-card text-card-foreground shadow", className)}
  {...rest}>
  {@render children?.()}
</div>
