<script lang="ts">
  import type { Change, Message, TimelineEntry } from "$lib/types.ts";
  import { timeSince } from "$lib/utils";

  const messages: TimelineEntry[] = [];

  for (let i = 0; i < 100; i++) {
    messages.push(
      {
        id: `message-${i * 4 + 1}`,
        kind: "message",
        date: new Date("2024/10/23 13:00:00"),
        content: {
          text: "We need to prepare audit data for compliance by next month!",
          author: "roaming"
        } satisfies Message
      },
      {
        id: `message-${i * 4 + 2}`,
        kind: "message",
        date: new Date("2024/10/23 13:05:00"),
        content: {
          text: "Yes, I agree, please create a ticket.",
          author: "matthew"
        } satisfies Message
      },
      {
        id: `message-${i * 4 + 3}`,
        kind: "change",
        date: new Date("2024/10/23 13:15:00"),
        content: {
          field: "IP Address",
          value: {
            previous: "192.168.1.101",
            current: "1.1.1.1"
          }
        } satisfies Change
      },
      {
        id: `message-${i * 4 + 4}`,
        kind: "change",
        date: new Date("2024/10/23 13:50:00"),
        content: {
          field: "IP Address",
          value: {
            previous: "192.168.1.101",
            current: "1.1.1.1"
          }
        } satisfies Change
      }
    );
  }
</script>

{#snippet messageEntry(content: Message, date: Date)}
  <div class="flex flex-col gap-1">
    <div class="flex flex-wrap items-center gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
      <div class="flex items-center">
        {content.text}
      </div>
    </div>
    <div class="flex items-center gap-1 text-xs text-slate-500">
      <div class="font-semibold text-purple-500">
        @{content.author}
      </div>
      {timeSince(date)}
    </div>
  </div>
{/snippet}

{#snippet changeEntry(content: Change, date: Date)}
  <div class="flex flex-col gap-1">
    <div class="flex flex-wrap items-center gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
      The field
      <div class="badge text-sky-500">
        {content.field}
      </div>
      has changed from
      <div class="badge bg-gray-500 text-background">
        {content.value.previous}
      </div>
      to
      <div class="badge bg-green-500 text-background">
        {content.value.current}
      </div>
    </div>
    <div class="flex items-center justify-end gap-1 text-xs text-slate-500">
      <div class="font-semibold text-purple-500">@azure</div>
      {timeSince(date)}
    </div>
  </div>
{/snippet}

{#snippet entryContainer(item: TimelineEntry)}
  <div
    class="mx-2 flex items-center"
    class:flex-row-reverse={item.kind === "change"}>
    <div>
      {#if item.kind === "change"}
        {@render changeEntry(item.content, item.date)}
      {:else}
        {@render messageEntry(item.content, item.date)}
      {/if}
    </div>
  </div>
{/snippet}

<div class="flex h-[calc(100vh-312px)] flex-1 flex-col gap-4 overflow-x-hidden overflow-y-scroll">
  <div class="flex flex-col items-center justify-between gap-2 pt-2">
    <svg
      class="h-8 w-8 text-slate-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.333L4 21.5c-.824.618-2 .03-2-1z"
        class="duoicon-secondary-layer"
        opacity="0.3" />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M8 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM7 9a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
        class="duoicon-primary-layer" />
    </svg>
    <div class="text-sm text-slate-600">This is the beginning of the timeline.</div>
  </div>
  {#each messages as message}
    {@render entryContainer(message)}
  {/each}
  <div class="flex flex-col items-center justify-between gap-2 pt-2">
    <div class="text-sm text-slate-600">This is the end of the timeline.</div>
    <svg
      class="h-8 w-8 text-slate-500"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24">
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.333L4 21.5c-.824.618-2 .03-2-1z"
        class="duoicon-secondary-layer"
        opacity="0.3" />
      <path
        fill="currentColor"
        fill-rule="evenodd"
        d="M8 12a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM7 9a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"
        class="duoicon-primary-layer" />
    </svg>
  </div>
</div>
