<script lang="ts">
  import type { Tag } from "$lib/types";
  import { X } from "lucide-svelte";
  import { cubicOut } from "svelte/easing";
  import { slide } from "svelte/transition";

  let { tag }: { tag: Tag } = $props();
  let hovering = $state(false);

  function onmouseenter() {
    if (tag.disabled) return;
    hovering = true;
  }

  function onmouseleave() {
    if (tag.disabled) return;
    hovering = false;
  }
</script>

<button class={tag.color} class:disabled={tag.disabled} {onmouseenter} {onmouseleave}>
  <span>
    {tag.label}
  </span>
  {#if hovering}
    <div transition:slide={{ axis: "x", duration: 150, easing: cubicOut }}>
      <X class="h-4 w-4" />
    </div>
  {/if}
</button>

<style lang="postcss">
  button {
    @apply flex w-max items-center gap-1 rounded-full px-[10px] py-1 text-xs font-semibold text-white transition-all hover:brightness-[1.15];
  }
  .disabled {
    @apply cursor-not-allowed opacity-50 hover:brightness-100;
  }
</style>
