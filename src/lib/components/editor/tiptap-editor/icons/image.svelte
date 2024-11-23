<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import * as Popover from "$lib/components/ui/popover/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { type Editor } from "@tiptap/core";
  import { ChevronDown, Image, X } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <Popover.Root>
        <Popover.Trigger>
          <Button
            variant="ghost"
            size="sm"
            class="h-7 w-[50px] px-1">
            <Image class="h-4 w-4" />
            <ChevronDown class="h-4 w-4" />
          </Button>
        </Popover.Trigger>
        <Popover.Content class="bg-popover shadow-lg *:my-2">
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold">Image</h1>
            <Popover.Close>
              <X class="h-6 w-6 text-muted-foreground" />
            </Popover.Close>
          </div>
          <p>Insert image url</p>
          <Input
            placeholder="Enter image url..."
            type="url"
            onchange={(e) => {
              if (e !== null && e.target !== null) {
                //@ts-ignore
                editor.chain().focus().setImage({ src: e.target.value }).run();
              }
            }}
            class="w-full" />
          <p>OR Pick an Image</p>
          <Input
            id="picture"
            type="file"
            accept="image/*"
            multiple={false}
            onchange={(e: Event) => {
              //@ts-ignore
              if (e.target && e.target.files) {
                //@ts-ignore
                const files = Array.from(e.target.files || []);
                files.map((file) => {
                  const reader = new FileReader();
                  reader.onload = () => {
                    const src = reader.result as string;
                    editor.chain().focus().setImage({ src }).run();
                  };
                  //@ts-ignore
                  reader.readAsDataURL(file);
                });
              }
            }} />
        </Popover.Content>
      </Popover.Root>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Add Image</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
