<script lang="ts">
  import { onMount } from "svelte";
  import "./app.css";

  import { openCommandPalette } from "$lib/components/command-palette/command-palette-types.svelte";
  import VerticalNav from "$lib/nav/vertical-nav.svelte";
  import { sessions } from "$lib/sessions/sessions.svelte";
  import { confettiStore } from "$lib/shared/effects/confetti-store";
  import { ModeWatcher } from "mode-watcher";
  import { Confetti } from "svelte-confetti";
  import { Toaster } from "svelte-sonner";
  import Router from "svelte-spa-router";
  import { routes } from "./pages/routes";
  import Sessions from "./pages/sessions/Sessions.svelte";

  sessions.init();

  $effect(() => {
    console.log("is logged in", sessions.isLoggedIn);
  });

  $effect.pre(() => {
    confettiStore;
  });

  onMount(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        openCommandPalette({ data: [] });
      }
    }

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

<ModeWatcher />

{#if sessions.isLoggedIn}
  <div class="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-muted/25">
    <VerticalNav />
    <div class="flex h-full flex-col gap-2 pl-14">
      <div class="h-full">
        <Router {routes} />
      </div>
    </div>
  </div>
  {#if $confettiStore}
    <Confetti x={[0.25, 1]} y={[0.75, 3]} amount={200} delay={[0, 2000]} />
  {/if}
{:else}
  <Sessions />
{/if}

<Toaster />
