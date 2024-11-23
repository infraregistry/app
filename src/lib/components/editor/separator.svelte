<script lang="ts">
  import Icon from "@iconify/svelte";

  type Props = {
    click: () => void;
  };

  let { click }: Props = $props();

  let visible = $state(false);
</script>

<div
  class="flex h-5 items-center"
  onmouseenter={() => (visible = true)}
  onmouseleave={() => (visible = false)}>
  {#if visible}
    <div
      class="p-1.5"
      onclick={click}>
      <Icon
        icon="meteor-icons:plus"
        class="text-slate-500 dark:text-slate-700" />
    </div>
    <div class="h-0.5 w-full dark:bg-zinc-800" />
  {/if}
</div>
