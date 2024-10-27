<script lang="ts">
  import { CornerDownLeft } from "lucide-svelte";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { Textarea } from "$lib/components/ui/textarea";
  import { writable } from "svelte/store";
  import Timeline from "./timeline.svelte";
  import { Tooltip } from "bits-ui";
  import Paperclip from "lucide-svelte/icons/paperclip";
  import { Label } from "$lib/components/ui/label";

  const tab = writable<"details" | "timeline">("details");
</script>

<Card.Root class="rounded-lg bg-zinc-900/50">
  <Card.Content class="p-1">
    <Timeline />
  </Card.Content>
  <Card.Footer class="flex flex-col gap-2 px-3 py-2">
    <div class="w-full overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
      <Textarea id="message" placeholder="Type your message here..." class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0" />
      <div class="flex items-center p-3 pt-0">
        <Tooltip.Provider>
          <Tooltip.Root delayDuration={200}>
            <Tooltip.Trigger class="">
              <Paperclip class="size-4" />
            </Tooltip.Trigger>
            <Tooltip.Content forceMount side="right">
              {#snippet child({ props, open })}
                {#if open}
                  ReadableStreamDefaultController
                {/if}
              {/snippet}
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Button type="submit" size="sm" class="ml-auto gap-1.5">
          Send Message
          <CornerDownLeft class="size-3.5" />
        </Button>
      </div>
    </div>
  </Card.Footer>
</Card.Root>
