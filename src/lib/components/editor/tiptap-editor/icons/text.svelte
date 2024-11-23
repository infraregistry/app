<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { type Editor } from "@tiptap/core";
  import { Check, ChevronDown, FileJson, Heading1, Heading2, Heading3, Minus, Pilcrow } from "lucide-svelte";

  let { editor }: { editor: Editor } = $props();
</script>

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button
            variant="ghost"
            size="sm"
            class="h-7 w-[50px] px-1">
            {#if editor.isActive("heading", { level: 1 })}
              <Heading1 class="h-6 w-6" />
            {:else if editor.isActive("heading", { level: 2 })}
              <Heading2 class="h-6 w-6" />
            {:else if editor.isActive("heading", { level: 3 })}
              <Heading3 class="h-6 w-6" />
            {:else if editor.isActive("paragraph")}
              <Pilcrow class="h-6 w-6" />
            {:else if editor.isActive("codeBlock")}
              <FileJson class="h-6 w-6" />
            {:else}
              <Minus class="h-6 w-6" />
            {/if}
            <ChevronDown class="h-6 w-6" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content class="w-56">
          <DropdownMenu.Item
            onclick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            closeOnSelect={false}>
            <Heading1 /> Heading 1
            {#if editor.isActive("heading", { level: 1 })}
              <Check class="absolute right-2 !size-3 text-muted-foreground" />
            {/if}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onclick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            closeOnSelect={false}>
            <Heading2 /> Heading 2
            {#if editor.isActive("heading", { level: 2 })}
              <Check class="absolute right-2 !size-3 text-muted-foreground" />
            {/if}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onclick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            closeOnSelect={false}>
            <Heading3 /> Heading 3
            {#if editor.isActive("heading", { level: 3 })}
              <Check class="absolute right-2 !size-3 text-muted-foreground" />
            {/if}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onclick={() => editor.chain().focus().setParagraph().run()}
            closeOnSelect={false}>
            <Pilcrow /> Paragraph
            {#if editor.isActive("paragraph")}
              <Check class="absolute right-2 !size-3 text-muted-foreground" />
            {/if}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onclick={() => editor.chain().focus().toggleCodeBlock().run()}
            closeOnSelect={false}>
            <FileJson /> Code Block
            {#if editor.isActive("codeBlock")}
              <Check class="absolute right-2 !size-3 text-muted-foreground" />
            {/if}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Text Formatting</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
