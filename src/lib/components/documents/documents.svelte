<script lang="ts">
  import Editor from "../editor/editor.svelte";
  import Navigator from "./navigator.svelte";

  let data = [
    {
      label: "Child 1",
      expanded: false,
      children: [
        {
          label: "Grand Child 1"
        }
      ]
    },
    {
      label: "Child 2",
      expanded: false,
      children: [
        {
          label: "Grand Child 2",
          children: [
            {
              label: "Great Grand Child 2"
            }
          ]
        }
      ]
    },
    {
      label: "Child 3"
    }
  ];
</script>

<div class="flex h-[75vh] gap-2">
  <div class="w-64 rounded-lg border">
    <Navigator {data} />
  </div>
  <div class="flex max-h-full flex-1 items-center justify-center rounded-lg border p-2">
    <!-- <Empty /> -->
    <Editor />
  </div>
</div>
