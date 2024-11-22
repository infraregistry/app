<script lang="ts">
  import type { Editor } from "@tiptap/core";
  import type { Writable } from "svelte/store";

  type Props = {
    editor: Writable<Editor>;
  };
  let { editor }: Props = $props();
</script>

<div class="editor-menu fixed">
  <button
    onclick={() => $editor?.chain().focus().toggleHeading({ level: 1 }).run()}
    class:active={$editor.isActive("heading", { level: 1 })}
    aria-label="Toggle Heading 1">
    H1
  </button>
  <button
    onclick={() => $editor?.chain().focus().toggleHeading({ level: 2 }).run()}
    class:active={$editor.isActive("heading", { level: 2 })}
    aria-label="Toggle Heading 2">
    H2
  </button>
  <button
    onclick={() => $editor?.chain().focus().toggleHeading({ level: 3 }).run()}
    class:active={$editor.isActive("heading", { level: 3 })}
    aria-label="Toggle Heading 3">
    H3
  </button>
  <button
    onclick={() => $editor?.chain().focus().setParagraph().run()}
    class:active={$editor.isActive("paragraph")}
    aria-label="Set Paragraph">
    P
  </button>
  {@render sep()}
  <button
    onclick={() => $editor?.chain().focus().toggleBold().run()}
    class:active={$editor.isActive("bold")}
    aria-label="Set Bold">
    <b>B</b>
  </button>
  <button
    onclick={() => $editor?.chain().focus().toggleItalic().run()}
    class:active={$editor.isActive("italic")}
    aria-label="Set Italic">
    <i>I</i>
  </button>
  <button
    onclick={() => $editor?.chain().focus().toggleUnderline().run()}
    class:active={$editor.isActive("underline")}
    aria-label="Set Underline">
    <u>U</u>
  </button>
  <button
    onclick={() => $editor?.chain().focus().toggleStrike().run()}
    class:active={$editor.isActive("strike")}
    aria-label="Set Strikethrough">
    <strike>S</strike>
  </button>
  {@render sep()}
  <button
    onclick={() => $editor?.chain().focus().toggleBlockquote().run()}
    class:active={$editor.isActive("blockquote")}
    aria-label="Set blockquote">
    <ChevronRight />
  </button>
  <button
    onclick={() => $editor?.chain().focus().setHorizontalRule().run()}
    class:active={$editor.isActive("hr")}
    aria-label="Add line break">
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <line
        x1="2"
        y1="16"
        x2="30"
        y2="16"
        class="stroke-black dark:stroke-white" />
    </svg>
  </button>
  <button
    onclick={() => {
      const href = window.prompt("Enter the link URL:");
      if (!href) return;
      try {
        new URL(href);
      } catch {
        alert("Invalid URL!");
        return;
      }
      $editor?.chain().focus().toggleLink({ href, target: "_blank" }).run();
    }}
    class:active={$editor.isActive("link")}
    aria-label="Set hyperlink">
    <Link class="h-4 w-4" />
  </button>
  <button
    onclick={() => {
      const src = window.prompt("Enter the image URL:");
      if (!src) return;
      try {
        new URL(src);
      } catch {
        alert("Invalid URL!");
        return;
      }
      const split = src.split("/");
      $editor
        ?.chain()
        .focus()
        .setImage({ src, alt: `Image that links to ${split[split.length - 1]}` })
        .run();
    }}
    class:active={$editor.isActive("image")}
    aria-label="Add image">
    <Image class="h-4 w-4" />
  </button>
  {@render sep()}
  <button
    onclick={() => $editor?.chain().focus().toggleBulletList().run()}
    class:active={$editor.isActive("bulletList")}
    aria-label="Toggle bullet list">
    <List class="h-4 w-4" />
  </button>
  <button
    onclick={() => $editor?.chain().focus().toggleOrderedList().run()}
    class:active={$editor.isActive("orderedList")}
    aria-label="Toggle numbered list">
    <ListOrdered class="h-4 w-4" />
  </button>
  <button
    onclick={() => $editor?.chain().focus().toggleTaskList().run()}
    class:active={$editor.isActive("taskList")}
    aria-label="Toggle task list">
    <ListChecks class="h-4 w-4" />
  </button>
</div>
