<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };
  let { children }: Props = $props();
</script>

<div class="flex items-center gap-2">
  {@render children()}
</div>
