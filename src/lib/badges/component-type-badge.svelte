<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { ComponentType } from "./types";

  type Props = {
    type: ComponentType;
  };

  let { type }: Props = $props();

  const styles = {
    [ComponentType.VIRTUAL_MACHINE]: "bg-blue-500 text-white",
    [ComponentType.IP_ADDRESS]: "bg-green-500 text-white",
    [ComponentType.STORAGE]: "bg-red-500 text-white",
    [ComponentType.VIRTUAL_NETWORK]: "bg-purple-500 text-white"
  };
</script>

<Badge variant="outline" class={styles[type]}>{type}</Badge>
