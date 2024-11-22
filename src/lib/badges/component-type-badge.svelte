<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { ComponentType } from "$pages/components/components";

  type Props = {
    type: ComponentType;
  };

  let { type }: Props = $props();

  const styles = {
    [ComponentType.VIRTUAL_MACHINE]: "bg-blue-600 text-white",
    [ComponentType.IP_ADDRESS]: "bg-green-600 text-white",
    [ComponentType.STORAGE]: "bg-red-600 text-white",
    [ComponentType.VIRTUAL_NETWORK]: "bg-purple-600 text-white"
  };
</script>

<Badge
  variant="outline"
  class={styles[type]}>{type}</Badge>
