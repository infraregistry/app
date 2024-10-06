<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/textarea";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import CornerDownLeft from "lucide-svelte/icons/corner-down-left";
  import Mic from "lucide-svelte/icons/mic";
  import Paperclip from "lucide-svelte/icons/paperclip";
</script>

<form class="bg-background focus-within:ring-ring relative overflow-hidden rounded-lg border focus-within:ring-1">
  <Label for="message" class="sr-only">Message</Label>
  <Textarea id="message" placeholder="Type your message here..." class="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0" />
  <div class="flex items-center p-3 pt-0">
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <Button builders={[builder]} variant="ghost" size="icon">
          <Paperclip class="size-4" />
          <span class="sr-only">Attach file</span>
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="top">Attach File</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Button variant="ghost" size="icon">
          <Mic class="size-4" />
          <span class="sr-only">Use Microphone</span>
        </Button>
      </Tooltip.Trigger>
      <Tooltip.Content side="top">Use Microphone</Tooltip.Content>
    </Tooltip.Root>
    <Button type="submit" size="sm" class="ml-auto gap-1.5">
      Send Message
      <CornerDownLeft class="size-3.5" />
    </Button>
  </div>
</form>
