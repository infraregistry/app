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
  <div class="flex w-full flex-col gap-4">
    <div class="flex items-center">
      {content.text}
    </div>
    <div class="flex items-center gap-1 text-xs">
      <div class="ml-auto flex items-center">
        from
        <div class="badge">
          @{content.author}
        </div>
      </div>
      {timeSince(date)}.
    </div>
  </div>
{/snippet}

{#snippet changeEntry(content: Change, date: Date)}
  <div class="flex flex-wrap items-center gap-[4px]">
    The field
    <div class="badge">
      {content.field}
    </div>
    has changed from
    <div class="badge">
      {content.value.previous}
    </div>
    to
    <div class="badge secondary">
      {content.value.current}
    </div>
    {timeSince(date)}.
  </div>
{/snippet}

{#snippet entryContainer(item: TimelineEntry)}
  <div class="mx-2 flex items-center" class:flex-row-reverse={item.kind === "change"}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="7.5" fill="#0284C7" stroke="#D1D5DB" stroke-width="3" />
    </svg>
    <svg width="18" height="3" viewBox="0 0 18 3" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="1.5" x2="18" y2="1.5" stroke="#D4D4D8" stroke-width="3" />
    </svg>
    <button class="flex w-72 gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
      <div class="flex w-full">
        {#if item.kind === "change"}
          {@render changeEntry(item.content, item.date)}
        {:else}
          {@render messageEntry(item.content, item.date)}
        {/if}
      </div>
    </button>
  </div>
{/snippet}

<div class="flex flex-col gap-5">
  {#each messages as message}
    {@render entryContainer(message)}
  {/each}
</div>

<style lang="postcss">
  .badge {
    @apply rounded-full border px-[10px] py-[2px] font-semibold;
  }
  .secondary {
    @apply border-0 bg-foreground text-background;
  }
</style>
