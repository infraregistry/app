<script lang="ts">
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { type Editor } from "@tiptap/core";
  import Default from "./icons/default.svelte";
  import Highlighter from "./icons/highlighter.svelte";
  import Image from "./icons/image.svelte";
  import Link from "./icons/link.svelte";
  import Quickcolor from "./icons/quickcolor.svelte";
  import Table from "./icons/table.svelte";
  import TextAlign from "./icons/text-align.svelte";
  import Textcolor from "./icons/text-color.svelte";

  interface Props {
    editor: Editor;
    showFullscreen?: boolean;
    onFullscreen?: (opening: boolean) => void;
  }

  let { editor, showFullscreen = true, onFullscreen }: Props = $props();

  let fullscreen = $state(false);

  const toggleFullscreen = () => {
    console.log("toggleFullscreen", fullscreen);
    fullscreen = !fullscreen;
    onFullscreen?.(fullscreen);
  };
</script>

<div class="flex items-center overflow-auto border-b p-1 *:mx-1">
  <Default
    {editor}
    icon="lucide:bold"
    onclick={() => editor.chain().focus().toggleBold().run()} />
  <Default
    {editor}
    icon="lucide:italic"
    onclick={() => editor.chain().focus().toggleItalic().run()} />
  <Default
    {editor}
    icon="lucide:underline"
    onclick={() => editor.chain().focus().toggleUnderline().run()} />
  <!-- <Default
    {editor}
    icon="lucide:strikethrough"
    onclick={() => editor.chain().focus().toggleStrike().run()} /> -->
  <Separator
    class="h-7"
    orientation="vertical" />
  <TextAlign {editor} />
  <Link {editor} />
  <Default
    {editor}
    icon="lucide:code"
    tooltip="Code (⌘C)"
    onclick={() => editor.chain().focus().toggleCode().run()} />
  <Separator
    class="h-7"
    orientation="vertical" />
  <Default
    {editor}
    icon="ic:sharp-format-list-bulleted"
    tooltip="Bullet List (⌘L)"
    onclick={() => editor.chain().focus().toggleBulletList().run()} />
  <Image {editor} />
  <Default
    {editor}
    icon="lucide:list-ordered"
    tooltip="Ordered List (⌘O)"
    onclick={() => editor.chain().focus().toggleOrderedList().run()} />
  <Default
    {editor}
    icon="fluent:task-list-24-filled"
    tooltip="Task List (⌘T)"
    onclick={() => editor.chain().focus().toggleTaskList().run()} />
  <Default
    {editor}
    icon="tabler:blockquote"
    tooltip="Blockquote (⌘B)"
    onclick={() => editor.chain().focus().toggleBlockquote().run()} />
  <Link {editor} />
  <Table {editor} />
  <Textcolor {editor} />
  <Highlighter {editor} />
  <Quickcolor {editor} />
  <div class="flex-1"></div>
  <Separator
    class="h-7"
    orientation="vertical" />
  <Default
    {editor}
    icon="gridicons:fullscreen"
    onclick={() => {
      console.log("fullscreen");
      toggleFullscreen();
    }} />
</div>
