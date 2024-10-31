<script lang="ts">
  import { Editor, Extension, type Range } from "@tiptap/core";
  import Suggestion from "@tiptap/suggestion";
  import { onDestroy, onMount } from "svelte";
  import "tippy.js/dist/tippy.css";
  import { defaultExtensions } from "./extensions";
  import { Link } from "lucide-svelte";
  import Separator from "../ui/separator/separator.svelte";
  import { writable } from "svelte/store";
  import ChevronRight from "svelte-radix/ChevronRight.svelte";

  let element = $state<Element>();
  let editor = writable<Editor>();

  const SlashCommands = Extension.create({
    name: "slashCommands",
    addOptions() {
      return {
        suggestion: {
          char: "/",
          command: ({ editor, range, props }: { editor: Editor; range: Range; props: any }) => {
            props.command({ editor, range });
          }
        }
      };
    },
    addProseMirrorPlugins() {
      return [
        Suggestion({
          editor: this.editor,
          ...this.options.suggestion
        })
      ];
    }
  });

  const items = [
    {
      title: "Heading 1",
      command: ({ editor, range }: { editor: Editor; range: Range }) => {
        editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run();
      }
    },
    {
      title: "Heading 2",
      command: ({ editor, range }: { editor: Editor; range: Range }) => {
        editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run();
      }
    },
    {
      title: "Bullet List",
      command: ({ editor, range }: { editor: Editor; range: Range }) => {
        editor.chain().focus().deleteRange(range).toggleBulletList().run();
      }
    },
    {
      title: "Numbered List",
      command: ({ editor, range }: { editor: Editor; range: Range }) => {
        editor.chain().focus().deleteRange(range).toggleOrderedList().run();
      }
    }
  ];

  onMount(() => {
    $editor = new Editor({
      element,
      editorProps: {
        attributes: {
          class: "p-1 border-none outline-none h-full w-full"
        }
      },
      extensions: [...defaultExtensions],
      content: "Hello World! 🌍️ Try typing '/' to see the slash command menu.",
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        $editor = $editor;
      }
    });
  });

  onDestroy(() => {
    if ($editor) {
      $editor.destroy();
    }
  });
</script>

{#snippet hr()}
  <Separator
    orientation="vertical"
    class="mr-2 flex h-8" />
{/snippet}

<div class="tiptap-editor h-full w-full">
  {#if $editor}
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
      {@render hr()}
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
      {@render hr()}
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
        onclick={() => $editor?.chain().focus().toggleLink({ href: "#", target: "_blank" }).run()}
        class:active={$editor.isActive("link")}
        aria-label="Hyperlink">
        <Link class="h-4 w-4" />
      </button>
    </div>
  {/if}
  <div
    class="relative top-12 h-[85%] overflow-y-auto"
    bind:this={element}>
  </div>
</div>

<style lang="postcss">
  :global(.tiptap > h1) {
    @apply text-3xl font-bold;
  }
  :global(.tiptap > hr) {
    @apply mb-2;
  }
  :global(.tiptap > h2) {
    @apply text-2xl font-bold;
  }
  :global(.tiptap > h3) {
    @apply text-xl font-bold;
  }
  :global(.tiptap > i) {
    @apply italic;
  }
  :global(.tiptap > b) {
    @apply font-bold;
  }
  :global(.tiptap > p > code) {
    @apply rounded-md bg-neutral-500/10 px-1;
  }
  :global(.tiptap > p > a) {
    @apply cursor-pointer underline hover:text-blue-500;
  }
  :global(.tiptap) {
    @apply flex flex-col gap-2;
  }
  :global(.tiptap > blockquote) {
    @apply border-l-2 border-[#444] bg-neutral-200/10 p-2 pl-3;
  }
  .tiptap-editor {
    @apply rounded-sm border border-[#666] p-4;
  }

  .editor-menu {
    @apply mb-2 flex items-center overflow-x-auto;
  }

  button {
    @apply mr-2 flex aspect-square w-8 cursor-pointer items-center justify-center rounded-sm border border-[#666] bg-[#333] p-1 font-mono text-xs;
  }

  button.active {
    @apply bg-black text-white;
  }
</style>
