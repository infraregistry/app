<script lang="ts">
  import { openSearch } from "$lib/components/search/search";
  import { onMount } from "svelte";
  import "./app.css";

  import MainNav from "$lib/nav/main-nav.svelte";
  import { sessions } from "$lib/sessions/sessions.svelte";
  import { confettiStore } from "$lib/shared/effects/confetti-store";
  import { ModeWatcher } from "mode-watcher";
  import { Confetti } from "svelte-confetti";
  import { Toaster } from "svelte-sonner";
  import Router from "svelte-spa-router";
  import { openCreateModal } from "./pages/components/create/create";
  import { routes } from "./pages/routes";

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
        console.log("open search");
        openSearch();
      }
    }

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });

  openCreateModal();
</script>

<ModeWatcher />

<div class="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-muted/25">
  <MainNav />
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
