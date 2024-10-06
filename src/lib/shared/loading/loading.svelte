<script lang="ts">
  import { Progress } from "$lib/components/ui/progress";
  import type { ModalInstance } from "@svelte.codes/modal-manager";
  import { onMount } from "svelte";
  import { modalManager } from "../modals";
  import type { LoadingArgs } from "./loading";

  interface Props {
    instance: ModalInstance<LoadingArgs>;
  }

  let { instance }: Props = $props();

  let value = $state(0);
  const start = Date.now();

  onMount(() => {
    const timer = setInterval(() => {
      // Calculate elapsed time since start
      const elapsedTime = Date.now() - start;

      // Calculate expected progress based on elapsedTime and the effective duration
      const expectedProgress = (elapsedTime / instance.config.data.duration) * 100;

      // Update the progress value, ensuring it does not exceed 100
      value = Math.min(expectedProgress, 100);

      // Check if the specified wait time or maxDuration has been exceeded
      if (elapsedTime >= instance.config.data.duration) {
        clearInterval(timer); // Stop the interval
        modalManager.close("loading"); // Close the modal
        instance.config.data.subject.next(); // Notify the subject that the loading has completed
      }
    });

    return () => clearInterval(timer); // Clean up the interval when the component is destroyed
  });
</script>

<div class="absolute bottom-0 left-0 right-0 top-0 z-[19999] flex items-center justify-center">
  <Progress {value} max={100} class="absolute w-full bg-indigo-600/80" />
  <div class="absolute flex w-[400px] flex-col items-center justify-center gap-6 rounded-lg border bg-black/90 p-4 text-sm text-slate-300">
    {instance.config.data.message || "Loading..."}
  </div>
</div>
