<script lang="ts">
  import Documents from "$lib/components/documents/documents.svelte";
  import { getComponent } from "../api.svelte";
</script>

<Documents context={getComponent().id} />
