<script lang="ts">
  import { getComponent } from "../api.svelte";
  import Children from "./children.svelte";

  const component = getComponent();
</script>

<Children
  id={component.id}
  type="Parent"
  icon="carbon:parent-child"
  iconClass="rotate-180"
  title="Parents"
  description="Parents are the components that this component links up to." />

<Children
  id={component.id}
  type="Child"
  icon="carbon:parent-child"
  iconClass=""
  title="Children"
  description="Parents are the components that this component links up to." />
