<script lang="ts">
  import Icon from "$lib/shared/icons/icon.svelte";
  import type { Integration } from "./integration";

  type Props = {
    integration: Integration;
  };

  let { integration }: Props = $props();
</script>

<div class="flex w-52 cursor-pointer flex-col gap-4 overflow-hidden rounded-lg border pt-3 transition-colors duration-300 hover:bg-zinc-900">
  <div class="flex justify-center font-medium text-slate-400">Amazon Web Services</div>
  <div class="flex justify-center">
    <Icon
      icon={integration.icon}
      class="h-24 w-24" />
  </div>
  <div class="flex items-center justify-center bg-green-600 py-1 text-sm font-semibold text-white">Installed</div>
</div>
