<script lang="ts">
  import { Background, Controls, MiniMap, SvelteFlow, useSvelteFlow, useUpdateNodeInternals } from "@xyflow/svelte";
  import { writable } from "svelte/store";

  import "@xyflow/svelte/dist/style.css";

  const { getIntersectingNodes, updateNode } = useSvelteFlow();
  const updateNodeInternals = useUpdateNodeInternals();
  const nodes = writable([
    {
      id: "4",
      type: "group",
      position: { x: 0, y: 250 },
      style: "height: 200px; width: 300px"
    },
    {
      id: "1",
      data: { label: "Hello" },
      position: { x: 0, y: 0 }
    },
    {
      id: "2",
      data: { label: "World" },
      position: { x: 200, y: 0 }
    },
    {
      id: "3",
      type: "custom",
      data: { label: "World" },
      position: { x: 100, y: 150 }
    }
  ]);

  const edges = writable([
    {
      id: "1-3",
      source: "1",
      target: "3"
    },
    {
      id: "2-3",
      source: "2",
      target: "3"
    }
  ]);

  function onNodeDrag({
    detail: { targetNode }
  }: CustomEvent<{
    targetNode: Node;
  }>) {
    const intersections = getIntersectingNodes(targetNode).map((n) => n.id);
    console.log(intersections);

    if (intersections.length > 0) {
      const interGroup = $nodes.find((_) => _.type === "group" && intersections.includes(_.id));

      if (interGroup) {
        updateNode(targetNode.id, {
          parentId: interGroup.id
        });

        updateNodeInternals(targetNode.id);
      }
    }
  }

  const nodeTypes = {
    // custom: CustomNode
  };
</script>

<div style:height="100vh">
  <SvelteFlow on:nodedrag={onNodeDrag} {nodes} {edges} {nodeTypes}>
    <Controls />
    <Background />
    <MiniMap />
  </SvelteFlow>
</div>
