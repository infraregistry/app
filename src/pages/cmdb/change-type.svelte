<script lang="ts">
  import Icon from "@iconify/svelte";
  import { type ChangeType } from "@infraregistry/types";

  type Props = {
    type: ChangeType;
  };
  let { type }: Props = $props();

  const types = {
    system: "carbon:ibm-cloud-pak-system",
    user: "humbleicons:user-add"
  };
</script>

<Icon
  icon={types[type as keyof typeof types]}
  class="h-6 w-6 text-indigo-500" />
