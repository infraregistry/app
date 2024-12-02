<script lang="ts">
  import { cn } from "$lib/utils.js";
  import { Tabs as TabsPrimitive } from "bits-ui";

  let { ref = $bindable(null), class: className, value, ...restProps }: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
  bind:ref
  class={cn(
    "duration-400 data-[state=active]: inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all hover:mx-0.5 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:mx-1 data-[state=active]:text-foreground data-[state=active]:shadow data-[state=active]:ring-2 data-[state=active]:ring-indigo-800",
    className
  )}
  {value}
  {...restProps} />
