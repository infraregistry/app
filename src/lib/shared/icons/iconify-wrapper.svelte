<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { iconStatics } from "./icon-statics.js";

  interface Props {
    class?: string;
    size?: number;
    name: keyof typeof iconStatics | string;
    children?: Snippet;
  }

  let { name, class: className, children, size = 4 }: Props = $props();
</script>

<div class={twMerge("flex items-center gap-1.5", className)}>
  {@render children?.()}
  {#if typeof name === "string"}
    <Icon
      icon={name}
      class={twMerge(`h-${size} w-${size}`, className)} />
  {:else}
    <Icon
      icon={iconStatics[name as keyof typeof iconStatics].value || name}
      class={twMerge(iconStatics[name as keyof typeof iconStatics].classes, `h-${size} w-${size}`, className)} />
  {/if}
</div>
