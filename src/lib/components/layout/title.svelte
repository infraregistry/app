<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
    class?: string;
  };
  let { children, class: className }: Props = $props();
</script>

<div class="flex w-full flex-1 items-center gap-2 text-2xl font-semibold text-slate-300 {className}">
  {@render children()}
</div>
