<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };
  let { children }: Props = $props();
</script>

<div class="mx-2 flex items-center justify-between gap-3">
  {@render children()}
</div>
