<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import { Button } from "$lib/components/ui/button";
  import { ScrollArea } from "bits-ui";

  export const playlists = [
    "Recently Added",
    "Recently Played",
    "Top Songs",
    "Top Albums",
    "Top Artists",
    "Logic Discography",
    "Bedtime Beats",
    "Feeling Happy",
    "I miss Y2K Pop",
    "Runtober",
    "Mellow Days",
    "Eminem Essentials"
  ];
</script>

{#snippet sidebar()}
  <div class="flex flex-col gap-2 py-2">
    <h2 class="space-between flex items-center gap-2 rounded-lg bg-black p-1.5 pl-4 text-sm font-bold text-zinc-400">
      <div class="flex-1">Playlists</div>
      <Badge class="bg-zinc-800 text-slate-200">10</Badge>
    </h2>
    <div class="space-y-1 text-slate-300">
      <Button
        variant="ghost"
        class="h-8 w-full justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2 h-4 w-4">
          <circle
            cx="12"
            cy="12"
            r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
        Listen Now
      </Button>
      <Button
        variant="ghost"
        class="h-8 w-full justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2 h-4 w-4">
          <rect
            width="7"
            height="7"
            x="3"
            y="3"
            rx="1" />
          <rect
            width="7"
            height="7"
            x="14"
            y="3"
            rx="1" />
          <rect
            width="7"
            height="7"
            x="14"
            y="14"
            rx="1" />
          <rect
            width="7"
            height="7"
            x="3"
            y="14"
            rx="1" />
        </svg>
        Browse
      </Button>
      <Button
        variant="ghost"
        class="h-8 w-full justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="mr-2 h-4 w-4">
          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
          <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
          <circle
            cx="12"
            cy="12"
            r="2" />
          <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
          <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
        </svg>
        Radio
      </Button>
    </div>
  </div>
{/snippet}

<div class="mb-3">
  <h2 class="space-between flex items-center gap-2 rounded-lg bg-black p-1.5 pl-4 text-sm font-bold text-zinc-400">
    <div class="flex-1">Playlists</div>
    <Badge class="bg-zinc-800 text-slate-200">10</Badge>
  </h2>
  <ScrollArea.Root class="border-dark-10 bg-background-alt relative overflow-hidden rounded-[10px] border px-4 py-4 shadow-card">
    <ScrollArea.Viewport class="h-full max-h-[200px] w-full max-w-[250px]">
      {#each playlists as playlist}
        <Button
          variant="ghost"
          class="h-8 w-full justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="mr-2 h-4 w-4">
            <path d="M21 15V6" />
            <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            <path d="M12 12H3" />
            <path d="M16 6H3" />
            <path d="M12 18H3" />
          </svg>
          {playlist}
        </Button>
      {/each}</ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      orientation="vertical"
      class="hover:bg-dark-10 flex w-2.5 touch-none select-none rounded-full border-l border-l-transparent bg-muted p-px transition-all duration-200 hover:w-3 ">
      <ScrollArea.Thumb class="flex-1 rounded-full bg-muted-foreground" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Scrollbar
      orientation="horizontal"
      class="hover:bg-dark-10 flex h-2.5 touch-none select-none rounded-full border-t border-t-transparent bg-muted p-px transition-all duration-200 hover:h-3 ">
      <ScrollArea.Thumb class="rounded-full bg-muted-foreground" />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
</div>
<div class="">
  {@render sidebar()}
</div>
<div class="">
  {@render sidebar()}
</div>
