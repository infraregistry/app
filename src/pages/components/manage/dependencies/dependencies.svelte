<script lang="ts">
<<<<<<< HEAD
  import TagList from "$lib/components/tag-list/tag-list.svelte";
  import { testTags } from "$lib/stores";
=======
  import { getComponent } from "../api.svelte";
>>>>>>> origin/main
  import Children from "./children.svelte";

  const component = getComponent();
</script>

<<<<<<< HEAD
<TagList tags={$testTags} />
<Children id="asdf" type="Parent" icon="carbon:parent-child" iconClass="rotate-180" title="Parents" description="Parents are the components that this component links up to." />
<Children id="asdf" type="Child" icon="carbon:parent-child" iconClass="" title="Children" description="Parents are the components that this component links up to." />
=======
<Children id={component.id} type="Parent" icon="carbon:parent-child" iconClass="rotate-180" title="Parents" description="Parents are the components that this component links up to." />
<Children id={component.id} type="Child" icon="carbon:parent-child" iconClass="" title="Children" description="Parents are the components that this component links up to." />
>>>>>>> origin/main
