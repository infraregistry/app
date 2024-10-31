<script lang="ts">
  import TagList from "$lib/components/tag-list/tag-list.svelte";
  import type { Tag } from "$lib/types";
  import { getComponent } from "../api.svelte";
  import Children from "./children.svelte";

  const tags = $state<Tag[]>([
    { label: "west-europe", color: "bg-green-600", disabled: false },
    { label: "some-tag", color: "bg-gray-500", disabled: false },
    { label: "xo", color: "bg-blue-500", disabled: false },
    { label: "asdf", color: "bg-sky-500", disabled: false },
    { label: "foobars", color: "bg-pink-500", disabled: false },
    { label: "foo", color: "bg-zinc-500", disabled: true },
    { label: "datacenter-2", color: "bg-indigo-500", disabled: false }
  ]);

  const component = getComponent();
</script>

<TagList {tags} />
<Children id={component.id} type="Parent" icon="carbon:parent-child" iconClass="rotate-180" title="Parents" description="Parents are the components that this component links up to." />
<Children id={component.id} type="Child" icon="carbon:parent-child" iconClass="" title="Children" description="Parents are the components that this component links up to." />
