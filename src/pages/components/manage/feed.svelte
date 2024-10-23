<script lang="ts">
  import * as Tabs from "$lib/components/ui/tabs";
  import { writable } from "svelte/store";
  import Details from "./details.svelte";
  import Timeline from "./timeline.svelte";

  const tab = writable<"details" | "timeline">("details");
</script>

<div class="flex flex-col gap-4">
  <Tabs.Root
    value={$tab}
    on:selected={() => {
      console.log("selected");
    }}>
    <Tabs.List class="">
      <Tabs.Trigger onclick={() => ($tab = "details")} value="details">Details</Tabs.Trigger>
      <Tabs.Trigger onclick={() => ($tab = "timeline")} value="timeline">Timeline</Tabs.Trigger>
    </Tabs.List>
  </Tabs.Root>

  {#if $tab === "details"}
    <Details />
  {:else}
    <Timeline />
  {/if}
</div>
