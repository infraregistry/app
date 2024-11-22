<script lang="ts">
  import { Loader2 } from "lucide-svelte";
  import { createEventDispatcher } from "svelte";
  import { twMerge } from "tailwind-merge";
  import type { Variant } from "./components/ui/badge";
  import { Button } from "./components/ui/button";

  interface Props {
    variant?: Variant;
    label?: string;
    disabled?: boolean;
    isLoading?: boolean;
    class?: string;
    children?: import("svelte").Snippet;
  }

  let { variant = "default", label = "Save", disabled = false, isLoading = false, class: className = "", children }: Props = $props();

  const dispatcher = createEventDispatcher();
</script>

<div class="align-center flex w-full justify-center">
  <div class="">
    {@render children?.()}
  </div>
  <div class="flex flex-1 justify-end gap-2.5">
    <Button
      variant="outline"
      class="text-slate-600 hover:text-slate-400"
      on:click={() => {
        dispatcher("cancel");
      }}>Cancel</Button>
    <Button
      on:click={() => {
        dispatcher("ok");
      }}
      {disabled}
      class={twMerge("bg-indigo-600 text-white hover:bg-indigo-900", className)}
      {variant}
      type="submit"
      >{#if isLoading}
        <Loader2 class="animate-spin" />
      {:else}
        {label}
      {/if}</Button>
  </div>
</div>
