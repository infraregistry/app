<script lang="ts">
  import Icon from "@iconify/svelte";
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";
  import { iconStatics } from "./icon-statics.js";

  interface Props {
    class?: string;
    size?: number;
    name: keyof typeof iconStatics;
    children?: Snippet;
  }

  let { name, class: className, children, size = 4 }: Props = $props();
</script>

<div class={twMerge("flex items-center gap-1.5", className)}>
  {@render children?.()}
  <Icon
    icon={iconStatics[name].value}
    class={twMerge(iconStatics[name].classes, `h-${size} w-${size}`)} />
</div>
