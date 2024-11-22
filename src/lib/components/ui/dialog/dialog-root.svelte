<script lang="ts">
  import { modalManager } from "$lib/shared/modals";
  import { Dialog as DialogPrimitive } from "bits-ui";

  interface Props {
    id: string;
    children?: import("svelte").Snippet;
  }

  let { id, children }: Props = $props();
</script>

<DialogPrimitive.Root
  onOpenChange={(v) => {
    if (!v) {
      modalManager.close(id);
    }
  }}
  open>
  {@render children?.()}
</DialogPrimitive.Root>
