<script lang="ts">
  import * as Layout from "$lib/components/layout";
  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import Input from "$lib/components/ui/input/input.svelte";
  import * as Pagination from "$lib/components/ui/pagination/index.js";
  import { getTimeSince } from "$lib/dates";
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import Icon from "@iconify/svelte";
  import type { TableColumn } from "@mateothegreat/svelte5-table";
  import { DropinTable } from "@mateothegreat/svelte5-table";
  import { DownloadCloud, EllipsisVertical, LifeBuoy, Link } from "lucide-svelte";
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import { MediaQuery } from "runed";
  import { writable } from "svelte/store";
  import ChangeType from "../change-type.svelte";
  import { getChanges } from "./../api.svelte";

  const columns: TableColumn[] = [
    {
      field: "type",
      header: {
        value: "Type",
        class: "text-slate-600"
      },
      renderer: typeColumn,
      class: "w-4 text-slate-500"
    },
    {
      field: "created",
      header: {
        value: "Date",
        class: "text-slate-600"
      },
      renderer: createdColumn,
      class: "w-20 text-slate-500"
    },
    {
      field: "name",
      header: {
        value: "Name",
        class: "text-slate-600"
      },
      class: "text-slate-500"
    },
    {
      field: "from",
      header: {
        value: "Previous Value",
        class: "text-slate-600"
      },
      class: "text-slate-500"
    },
    {
      field: "to",
      header: {
        value: "New Value",
        class: "text-slate-600"
      },
      class: "text-slate-500"
    },
    {
      field: "actions",
      renderer: actionsColumn,
      class: "flex justify-end"
    }
  ];

  let selections = writable<string[]>([]);
  selections.set([getChanges()[0].id]);

  const isDesktop = new MediaQuery("(min-width: 768px)");

  const count = 20;

  const perPage = $derived(isDesktop.matches ? 3 : 8);
  const siblingCount = $derived(isDesktop.matches ? 1 : 0);
</script>

{#snippet createdColumn(row: any)}
  {getTimeSince(row.created)}
{/snippet}

{#snippet actionsColumn(row: any)}
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <Icon icon="uis:ellipsis-v" />
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Item class="flex items-center gap-2">
        <Icon
          icon="icon-park-solid:filter"
          class="h-5 w-4 text-slate-400" />
        Filter on this field...
      </DropdownMenu.Item>
      <DropdownMenu.Item class="flex items-center gap-2">
        <Icon
          icon="solar:copy-bold-duotone"
          class="h-5 w-4 text-slate-400" />
        Copy
      </DropdownMenu.Item>
      <DropdownMenu.Separator />
      <DropdownMenu.Item class="flex items-center gap-2">
        <Icon
          icon="material-symbols:delete"
          class="h-5 w-4 text-pink-500" />
        Delete
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
{/snippet}

{#snippet typeColumn(row: any)}
  <div class="flex w-12 pl-1.5">
    <ChangeType type={row.type} />
  </div>
{/snippet}

<div class="p-3">
  <Layout.Header>
    <Layout.Left>
      <Layout.Icon tooltip="Components are the building blocks of your service catalog and CMDB such as cloud resources, applications, services, etc.">
        <IconifyWrapper
          name="components"
          size={10} />
      </Layout.Icon>
      <Layout.Titles>
        <Layout.Title>CMDB</Layout.Title>
        <Layout.Subtitle>The audit trail of your infrastructure.</Layout.Subtitle>
      </Layout.Titles>
    </Layout.Left>
    <Layout.Actions>
      <Button
        variant="outline"
        class="text-green-500">Create Change</Button>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="outline">
            <EllipsisVertical class="h-5 w-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item class="flex items-center gap-2">
            <LifeBuoy class="h-5 w-4 text-pink-500" />
            Get Support
          </DropdownMenu.Item>
          <DropdownMenu.Item class="flex items-center gap-2">
            <Link class="h-5 w-4" />
            Documentation
          </DropdownMenu.Item><DropdownMenu.Separator />
          <DropdownMenu.Item class="flex items-center gap-2">
            <DownloadCloud class="h-5 w-4" />
            Export
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Layout.Actions>
  </Layout.Header>
  <div class="flex h-full flex-1"></div>
</div>
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
    config={{ selection: { row: false, all: false } }}
    {columns}
    id="id"
    data={getChanges()}
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
