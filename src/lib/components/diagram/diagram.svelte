<script lang="ts">
  import { SvelteFlow, type Edge, type Node } from "@xyflow/svelte";
  import { writable } from "svelte/store";

  import { initialEdges, initialNodes } from "./data";

  import "@xyflow/svelte/dist/style.css";

  const nodes = writable<Node[]>(initialNodes);
  const edges = writable<Edge[]>(initialEdges);
</script>

<div class="h-[300px]">
  <SvelteFlow class=" !bg-black" {nodes} {edges} fitView minZoom={0.1} maxZoom={2.5}></SvelteFlow>
</div>

<style>
  main {
  }
  /*
  :global(.svelte-flow) {
    background-color: rgba(220, 220, 255, 0.4);
  } */
</style>
