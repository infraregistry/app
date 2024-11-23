<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { type Editor } from "@tiptap/core";
  import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Check, ChevronDown } from "lucide-svelte";

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
            {#if editor.isActive({ textAlign: "left" })}
              <AlignLeft class="h-4 w-4" />
            {:else if editor.isActive({ textAlign: "center" })}
              <AlignCenter class="h-4 w-4" />
            {:else if editor.isActive({ textAlign: "right" })}
              <AlignRight class="h-4 w-4" />
            {:else if editor.isActive({ textAlign: "justify" })}
              <AlignJustify class="h-4 w-4" />
            {:else}
              <AlignLeft class="h-4 w-4" />
            {/if}
            <ChevronDown class="h-4 w-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item
            onclick={() => editor.chain().focus().setTextAlign("left").run()}
            closeOnSelect={false}>
            <AlignLeft /> Align Left
            {#if editor.isActive({ textAlign: "left" })}
              <Check class="absolute right-2 !size-3 text-muted-foreground" />
            {/if}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onclick={() => editor.chain().focus().setTextAlign("center").run()}
            closeOnSelect={false}>
            <AlignCenter /> Align Center
            {#if editor.isActive({ textAlign: "center" })}
              <Check class="absolute right-2 !size-3 text-muted-foreground" />
            {/if}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onclick={() => editor.chain().focus().setTextAlign("right").run()}
            closeOnSelect={false}>
            <AlignRight /> Align Right
            {#if editor.isActive({ textAlign: "right" })}
              <Check class="absolute right-2 !size-3 text-muted-foreground" />
            {/if}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onclick={() => editor.chain().focus().setTextAlign("justify").run()}
            closeOnSelect={false}>
            <AlignJustify /> Align Justify
            {#if editor.isActive({ textAlign: "justify" })}
              <Check class="absolute right-2 !size-3 text-muted-foreground" />
            {/if}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Tooltip.Trigger>
    <Tooltip.Content>
      <p>Text Alignment</p>
    </Tooltip.Content>
  </Tooltip.Root>
</Tooltip.Provider>
