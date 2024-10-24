<script lang="ts">
  import Children from "./children.svelte";

  // const selected = openSelector({
  //   title: "Select a component",
  //   data: getDependencies("asdf")
  // });

  // selected.subscribe((selections) => {
  //   console.log(selections);
  // });
</script>

<Children id="asdf" type="Parent" icon="carbon:parent-child" iconClass="rotate-180" title="Parents" description="Parents are the components that this component links up to." />
<Children id="asdf" type="Child" icon="carbon:parent-child" iconClass="" title="Children" description="Parents are the components that this component links up to." />
