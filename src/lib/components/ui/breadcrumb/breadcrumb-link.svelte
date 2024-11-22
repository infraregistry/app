<script lang="ts">
  import { run } from "svelte/legacy";

  import type { HTMLAnchorAttributes } from "svelte/elements";
  import { cn } from "$lib/utils.js";

  type $$Props = HTMLAnchorAttributes & {
    el?: HTMLAnchorElement;
    asChild?: boolean;
  };

  interface Props {
    [key: string]: any;
  }

  let { href = undefined, el = $bindable(undefined), asChild = false, class: className = undefined, children, ...rest }: Props = $props();

  let attrs: Record<string, unknown> = $state();

  run(() => {
    attrs = {
      class: cn("transition-colors hover:text-foreground", className),
      href,
      ...rest
    };
  });
</script>

{#if asChild}
  {@render children?.({ attrs })}
{:else}
  <a
    bind:this={el}
    {...attrs}
    {href}>
    {@render children?.({ attrs })}
  </a>
{/if}
