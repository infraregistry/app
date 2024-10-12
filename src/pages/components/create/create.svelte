<script lang="ts">
  import { type ModalInstance } from "@mateothegreat/svelte5-modal-manager";

  let { instance }: { instance: ModalInstance } = $props();

  console.log(instance);
</script>

<div class="h-96 w-96 bg-red-500">
  Create component dialog

  <button on:click={() => instance.manager.close(instance.config.id)}>Close</button>
</div>
