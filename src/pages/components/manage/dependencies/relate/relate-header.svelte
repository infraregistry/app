<script lang="ts">
  import ComponentTypeBadge from "$lib/badges/component-type-badge.svelte";
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import type { ComponentType } from "$pages/components/components";

  type Props = {
    name: string;
    subtext: string;
    type: ComponentType;
  };

  let { name, subtext, type }: Props = $props();
</script>

<div class="flex items-center gap-3">
  <IconifyWrapper name="relationshipAdd" size={10} class="-mt-1" />
  <div class="flex flex-col gap-0.5">
    <div class="flex items-center gap-2 font-semibold text-white">
      {name}
      <ComponentTypeBadge {type} />
    </div>
    <div class="text-xs text-slate-500">{subtext}</div>
  </div>
</div>
