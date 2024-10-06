<script lang="ts">
  import { run } from 'svelte/legacy';

  import { openSearch } from "$lib/components/search/search";
  import { onMount } from "svelte";
  import "./app.css";

  import VerticalNav from "$lib/nav/vertical-nav.svelte";
  import { confettiStore } from "$lib/shared/effects/confetti-store";
  import { ModeWatcher } from "mode-watcher";
  import { Confetti } from "svelte-confetti";
  import { Toaster } from "svelte-sonner";
  import Router from "svelte-spa-router";
  import { routes } from "./pages/routes";

  run(() => {
    confettiStore;
  });

  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        openSearch();
      }
    }

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

<ModeWatcher />

<div class="bg-muted/25 absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col">
  <VerticalNav />
  <div class="flex flex-col gap-2 pl-14">
    <div class="m-3 h-full">
      <Router {routes} />
    </div>
  </div>
</div>
{#if $confettiStore}
  <Confetti x={[0.25, 1]} y={[0.75, 3]} amount={200} delay={[0, 2000]} />
{/if}
<Toaster />
<Confetti amount={200} delay={[0, 2000]} />
