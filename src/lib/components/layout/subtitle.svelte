<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };
  let { children }: Props = $props();
</script>

<h1 class="w-96 text-xs text-slate-500">
  {@render children()}
</h1>
