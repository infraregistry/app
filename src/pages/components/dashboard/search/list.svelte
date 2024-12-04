<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import * as Pagination from "$lib/components/ui/pagination/index.js";
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import { components, type Component } from "$pages/components/components";
  import { MediaQuery } from "runed";
  import Icon from "@iconify/svelte";
  import type { TableColumn } from "@mateothegreat/svelte5-table";
  import { DropinTable } from "@mateothegreat/svelte5-table";
  import { writable } from "svelte/store";

  const items = Array.from({ length: 25 }).map((_, i) => i);

  const columns: TableColumn[] = [
    {
      field: "id",
      header: {
        value: "ID",
        class: "text-slate-600"
      },
      class: "w-4 text-slate-500"
    },
    {
      field: "name",
      header: {
        value: "Name",
        class: "text-slate-600"
      },
      renderer: nameColumn,
      class: "w-20 text-slate-500"
    },
    {
      field: "description",
      header: {
        value: "Description",
        class: "text-slate-600"
      },
      class: "text-slate-500"
    },
    {
      field: "type",
      header: {
        value: "Type",
        class: "text-slate-600"
      },
      renderer: typeColumn,
      class: "text-slate-500"
    }
  ];

  let selections = writable<string[]>([]);

  const isDesktop = new MediaQuery("(min-width: 768px)");

  const count = 20;

  const perPage = $derived(isDesktop.matches ? 3 : 8);
  const siblingCount = $derived(isDesktop.matches ? 1 : 0);
</script>

{#snippet nameColumn(component: Component)}
  <p>{component.name}</p>
{/snippet}

{#snippet typeColumn(component: Component)}
  <div class="flex w-12 pl-1.5">
    <p>{component.type}</p>
  </div>
{/snippet}

<div class="mx-3 rounded-lg border-2 border-slate-800">
  <div class="flex items-center">
    <Input
      class="flex-1 rounded-none border-0 border-b border-slate-800"
      placeholder="Search" />
    <Button
      variant="outline"
      class="rounded-none border-0 border-b border-l border-slate-800">
      <Icon
        icon="ph:download-duotone"
        class="h-5 w-5 text-slate-400" />
    </Button>
  </div>
  <DropinTable
    config={{}}
    {columns}
    id="id"
    data={components}
    bind:selections />
  <div class="m-2 flex justify-end">
    <Pagination.Root
      {count}
      {perPage}
      {siblingCount}>
      {#snippet children({ pages, currentPage })}
        <Pagination.Content class="text-slate-500">
          <Pagination.Item>
            <Pagination.PrevButton>
              <ChevronLeft class="size-4" />
              <span class="hidden sm:block">Previous</span>
            </Pagination.PrevButton>
          </Pagination.Item>
          {#each pages as page (page.key)}
            {#if page.type === "ellipsis"}
              <Pagination.Item>
                <Pagination.Ellipsis />
              </Pagination.Item>
            {:else}
              <Pagination.Item>
                <Pagination.Link
                  {page}
                  isActive={currentPage === page.value}>
                  {page.value}
                </Pagination.Link>
              </Pagination.Item>
            {/if}
          {/each}
          <Pagination.Item>
            <Pagination.NextButton>
              <span class="hidden sm:block">Next</span>
              <ChevronRight class="size-4" />
            </Pagination.NextButton>
          </Pagination.Item>
        </Pagination.Content>
      {/snippet}
    </Pagination.Root>
  </div>
</div>
