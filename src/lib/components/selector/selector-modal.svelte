<script lang="ts" generics="T">
  import ComponentTypeBadge from "$lib/badges/component-type-badge.svelte";
  import { ComponentType } from "$lib/badges/types";
  import { componentTableColumns } from "$pages/components/components";
  import Icon from "@iconify/svelte";
  import { DropinTable } from "@mateothegreat/svelte5-table";
  import type { Subject } from "rxjs";
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import Badge from "../ui/badge/badge.svelte";
  import { Button } from "../ui/button";
  import { closeSelector, type SelectorConfig } from "./selector.svelte";

  type Props = {
    onsearch: (value: string) => void;
    placeholder?: string;
    config: SelectorConfig<T>;
    selections: T[];
    subject: Subject<T[]>;
  };

  let inputRef: HTMLInputElement;
  let { onsearch, config, placeholder = "Search...", subject }: Props = $props();
  let selections = writable([]);

  onMount(() => {
    inputRef.focus();
  });

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    onsearch(target.value);
  };

  const onSave = () => {
    closeSelector();
    subject.next($selections);
  };
</script>

{#snippet customHeader()}
  <div class="flex justify-center rounded-lg border border-pink-500 p-1 text-indigo-500">My Custom Header</div>
{/snippet}

{#snippet actionsColumn(row: any)}
  <button class="rounded-md bg-blue-500 px-3 py-1 text-white">
    Edit #{row.id}
  </button>
{/snippet}

<div class="flex w-[800px] flex-col gap-3 rounded-xl border-4 border-slate-800 bg-black p-4 text-slate-400 shadow-xl">
  <div class="flex justify-between">
    <div class="flex items-center gap-2">
      <Icon icon="carbon:parent-child" class="h-10 w-10 text-blue-500" />
      <div class="flex flex-col gap-0.5">
        <div class="flex items-center gap-2 font-semibold">
          dev-box-1
          <ComponentTypeBadge type={ComponentType.VIRTUAL_MACHINE} />
        </div>
        <div class="text-sm text-slate-500">{config.title}</div>
      </div>
    </div>
    <div class="relative flex items-center bg-inherit">
      <svg class="pointer-events-none m-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input bind:this={inputRef} onkeyup={onChange} type="text" class="h-12 flex-1 bg-inherit pr-4 text-green-500 outline-none sm:text-sm" {placeholder} />
    </div>
  </div>
  <div class="">
    <DropinTable config={{ selection: { all: true } }} columns={componentTableColumns} id="id" data={config.data} bind:selections class="absolute m-auto flex h-full w-full flex-col items-center justify-center gap-5 bg-black p-20 text-slate-500" />
  </div>
  <div class="flex justify-end gap-2">
    <Button onclick={onSave} disabled={$selections.length === 0} variant="outline">
      Select
      <Badge variant="">{$selections.length}</Badge>
    </Button>
    <Button onclick={onSave} variant="outline">Cancel</Button>
  </div>
</div>
