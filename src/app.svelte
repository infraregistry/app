<script lang="ts">
  import VerticalNav from "$lib/nav/vertical-nav.svelte";
  import { sessions } from "$lib/sessions/sessions.svelte";
  import { confettiStore } from "$lib/shared/effects/confetti-store";
  import { ModeWatcher } from "mode-watcher";
  import { Confetti } from "svelte-confetti";
  import { Toaster } from "svelte-sonner";
  import Router from "svelte-spa-router";
  import { routes } from "./pages/routes";
  import Sessions from "./pages/sessions/Sessions.svelte";

  import * as Command from "$lib/components/ui/command/index.js";

  import "./app.css";
  import DataTable from "$lib/components/data-table/data-table.svelte";

  sessions.init();

  $effect(() => {
    console.log("is logged in", sessions.isLoggedIn);
  });

  $effect.pre(() => {
    confettiStore;
  });

  let open = $state(false);

  function onkeydown(e: KeyboardEvent) {
    if (e.key === "k" && (e.metaKey || e.ctrlKey) && !open) {
      e.preventDefault();
      open = true;
    }
  }
</script>

<svelte:window {onkeydown} />

<ModeWatcher />

<Command.Dialog bind:open>
  <DataTable />
</Command.Dialog>

{#if sessions.isLoggedIn}
  <div class="absolute bottom-0 left-0 right-0 top-0 flex h-full w-full flex-col bg-muted/25">
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
{:else}
  <Sessions />
{/if}

<Toaster />
