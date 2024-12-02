<script lang="ts">
  import Icon from "@iconify/svelte";

  type Props = {
    onclick: () => void;
  };

  let { onclick }: Props = $props();
</script>

<div
  class="my-1 flex h-5 items-center opacity-0 hover:opacity-100"
  aria-label="block separator"
  role="separator">
  <button
    class="p-1.5"
    {onclick}>
    <Icon
      icon="meteor-icons:plus"
      class="text-slate-500 dark:text-slate-700" />
  </button>
  <div class="h-0.5 w-full dark:bg-zinc-800"></div>
</div>
