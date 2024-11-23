<script lang="ts">
  import { Editor, type Range } from "@tiptap/core";
  import type { CommandItem } from "../../extensions/suggestion";

  type Props = { editor: Editor; range: Range; items: CommandItem[] };

  let { editor, range, items }: Props = $props();

  let selectedIndex = $state(0);
  let elements: HTMLElement[] = [];
  $effect(() => {
    if (elements[0] != null) {
      elements[selectedIndex]?.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      });
      elements[selectedIndex]?.focus();
    }
  });

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = (selectedIndex + items.length - 1) % items.length;
      return true;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % items.length;
      return true;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      const item = items[selectedIndex];

      if (item) {
        item.command({ editor, range });
      }
      return true;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="z-50 h-72 w-52 max-w-full overflow-scroll border bg-white shadow-xl dark:bg-black">
  <div class="p-2 text-sm text-slate-500">BLOCKS</div>
  <ul
    class="mt-2 divide-y divide-gray-800 rounded-md bg-white shadow-lg focus:outline-none dark:bg-black"
    tabindex="-1"
    role="listbox"
    aria-labelledby="slash-command-menu"
    aria-activedescendant="listbox-option-0">
    {#each items as { title, subtitle, command }, i}
      <li>
        <button
          class="dark:slate-500 w-full cursor-pointer select-none p-2.5 text-sm text-gray-900 dark:text-slate-300"
          id="listbox-option-0"
          class:focus-ring-1={i == selectedIndex}
          class:focus-ring-indigo-500={i == selectedIndex}
          onmouseenter={() => (selectedIndex = i)}
          onclick={() => {
            command({ editor, range });
          }}
          bind:this={elements[i]}>
          <div class="flex flex-col">
            <div class="flex justify-between">
              <p class="font-normal">{title}</p>
            </div>
            <!-- <p class="mt-2 text-gray-500">{subtitle}</p> -->
          </div>
        </button>
      </li>
    {/each}
  </ul>
</div>

<!--
  <svelte:options accessors={true} />
-->
