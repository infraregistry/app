<script lang="ts">
  import * as ToggleGroup from "$lib/components/ui/toggle-group/index.js";
  import type { ToggleGroupItem } from "./toggle-group-item";

  interface Props {
    toggles: ToggleGroupItem<any>[];
    value: any;
  }

  let { toggles, value }: Props = $props();
</script>

<ToggleGroup.Root type="single" {value} variant="outline">
  {#each toggles as { value, label }}
    <ToggleGroup.Item {value}>{label}</ToggleGroup.Item>
  {/each}
</ToggleGroup.Root>
