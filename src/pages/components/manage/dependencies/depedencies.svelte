<script lang="ts">
  import TagList from "$lib/components/tag-list/tag-list.svelte";
  import { testTags } from "$lib/stores";
  import Children from "./children.svelte";
</script>

<TagList tagList={testTags} />
<Children id="asdf" type="Parent" icon="carbon:parent-child" iconClass="rotate-180" title="Parents" description="Parents are the components that this component links up to." />
<Children id="asdf" type="Child" icon="carbon:parent-child" iconClass="" title="Children" description="Parents are the components that this component links up to." />
