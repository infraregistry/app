<script
  lang="ts"
  generics="T">
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import { componentTableColumns } from "$pages/components/components";
  import { DropinTable } from "@mateothegreat/svelte5-table";
  import type { Subject } from "rxjs";
  import { onMount } from "svelte";
  import Badge from "../ui/badge/badge.svelte";
  import { Button } from "../ui/button";
  import { closeSelector, type SelectorConfig } from "./selector.svelte";

  type Props = {
    placeholder?: string;
    config: SelectorConfig<T>;
    selections: T[];
    subject: Subject<T[]>;
  };

  let inputRef: HTMLInputElement;
  let { config, subject }: Props = $props();
  let selections = $state([]);

  onMount(() => {
    inputRef.focus();
  });

  const onChange = (e: Event) => {
    config.search?.onChange?.((e.target as HTMLInputElement).value);
  };

  const onSave = () => {
    closeSelector();
    subject.next($selections);
  };
</script>

<div class="flex w-[800px] flex-col rounded-xl border-4 border-slate-700 bg-zinc-900/50 text-slate-400 shadow-xl">
  <div class="flex items-center justify-between px-2 py-3">
    <!-- Left icon + title -->
    {#if config.header}
      {@render config.header()}
    {/if}
    <div class="flex items-center gap-1">
      <!-- Search input -->
      <div class="group relative flex h-8 flex-1 items-center rounded-md border border-input bg-inherit px-2 py-4 focus-within:border-blue-500">
        <svg
          class="pointer-events-none h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          data-slot="icon">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <input
          bind:this={inputRef}
          onkeyup={onChange}
          placeholder={config.search?.placeholder || "Search..."}
          type="text"
          class="bg-transparent px-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" />
      </div>
      <!-- Close button -->
      <Button
        variant="ghost"
        size="icon"
        onclick={closeSelector}>
        <IconifyWrapper
          name="close"
          size={6} />
      </Button>
    </div>
  </div>
  <!-- Table -->
  <div class="scroll max-h-[400px] overflow-y-auto border-y-2 border-slate-800 bg-black p-2 shadow-xl">
    <DropinTable
      config={{ selection: { all: true } }}
      columns={componentTableColumns}
      id="id"
      data={config.data}
      bind:selections
      class="absolute m-auto flex h-full w-full flex-col items-center justify-center gap-5 bg-black p-20 text-slate-500" />
  </div>
  <!-- Actions -->
  <div class="flex justify-end gap-2 p-2">
    <Button
      onclick={onSave}
      disabled={$selections.length === 0}
      variant="outline"
      class="flex items-center gap-2">
      Select
      <Badge class="bg-indigo-500 text-white">{$selections.length}</Badge>
    </Button>
    <Button
      onclick={onSave}
      variant="outline">Cancel</Button>
  </div>
</div>
