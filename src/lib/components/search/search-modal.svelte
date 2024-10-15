<script lang="ts" generics="T extends SearchItem<T>">
  import { Checkbox } from "$lib/components/ui/checkbox";
  import * as CommandPalette from "@mateothegreat/svelte5-command-palette";
  import type { SearchConfig, SearchItem } from "./search.svelte";

  const { config }: { config: SearchConfig<T> } = $props();
  const selected = $state<T[]>([]);
</script>

<!-- {JSON.stringify(config)} -->
{#snippet search()}
  <Checkbox id="terms" onCheckedChange={() => console.log("checked")} />
{/snippet}

<CommandPalette.Root onclose={() => console.log("close")}>
  <div class="w-[900px] overflow-hidden rounded-xl border-4 bg-black">
    <CommandPalette.Content onsearch={(terms: string) => console.log("search", terms)}>
      <div class="bg-black">
        <CommandPalette.Input onsearch={(terms: string) => console.log("search", terms)} />
      </div>
      <CommandPalette.Section title="Recent searches">
        {#each config.data as item}
          <CommandPalette.Item>
            <div class="rounded-md text-sm text-slate-400 hover:bg-indigo-800 hover:text-white">
              <div class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                <svg class="h-6 w-6 flex-none text-gray-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
                <span class="ml-3 flex-auto truncate">{item.name}</span>
                <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">F</kbd></span>
              </div>
            </div>
          </CommandPalette.Item>
        {/each}
      </CommandPalette.Section>
    </CommandPalette.Content>
  </div>
</CommandPalette.Root>
