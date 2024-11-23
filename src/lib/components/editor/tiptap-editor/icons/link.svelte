<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { cn } from "$lib/utils.js";
  import { type Editor } from "@tiptap/core";
  import { ChevronDown, Link, X } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();

  function setLink(url: string) {
    if (url.trim() === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Popover.Root>
        <Popover.Trigger>
          <Button
            variant="ghost"
            size="sm"
            class={cn("w-[50px] px-1", editor.isActive("link") && "bg-muted")}>
            <Link class="h-4 w-4" />
            <ChevronDown class="h-4 w-4" />
          </Button>
        </Popover.Trigger>
        <Popover.Content class="bg-popover shadow-lg *:my-2">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold">Link</h1>
            <Popover.Close>
              <X class="h-6 w-6 text-muted-foreground" />
            </Popover.Close>
          </div>
          <p>Insert or remove link from selected text.</p>
          <Input
            placeholder="Enter link to attach.."
            value={editor?.getAttributes("link").href}
            onchange={(e: any) => {
              //@ts-ignore
              if (e !== null && e.target !== null) setLink(e.target.value);
            }}
            class="w-full" />
          <div class="flex items-center justify-end gap-2">
            <Button
              size="sm"
              onclick={() => {}}>
              <Popover.Close>Insert</Popover.Close>
            </Button>
            <Button
              variant="destructive"
              onclick={() => {
                editor.chain().focus().extendMarkRange("link").unsetLink().run();
              }}>Remove</Button>
          </div>
        </Popover.Content>
      </Popover.Root>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Add Or Remove Link</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
