<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { route } from "@mateothegreat/svelte5-router";
  import type { WithElementRef } from "bits-ui";
  import type { Snippet } from "svelte";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  let {
    ref = $bindable(null),
    class: className,
    href,
    child,
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    child?: Snippet<[{ props: HTMLAnchorAttributes }]>;
    href?: string;
  } = $props();

  const attrs = $derived({
    class: cn("hover:text-foreground transition-colors", className),
    href,
    ...restProps
  });
</script>

{#if child}
  {@render child({ props: attrs })}
{:else}
  <a
    use:route
    bind:this={ref}
    {...attrs}>
    {@render children?.()}
  </a>
{/if}
