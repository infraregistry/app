<script lang="ts">
  import { onMount } from "svelte";
  import { createEditor, Editor, EditorContent } from "svelte-tiptap";
  import type { Readable } from "svelte/store";
  import StarterKit from "@tiptap/starter-kit";

  let editor = $state<Readable<Editor>>();

  let modified = $state(false);
  let content = $state("<h1>Documentation editor</h1>");

  onMount(() => {
    editor = createEditor({
      extensions: [StarterKit],
      content,
      editorProps: {
        attributes: {
          class: "p-2 border-none outline-none"
        }
      },
      onUpdate: () => {
        modified = true;
      }
    });
  });
</script>

{#if editor}
  <main class="z-50 flex sm:px-4 sm:pt-[15vh]">
    <EditorContent editor={$editor} />
    <div class="absolute right-5 top-5 z-10 mb-5 rounded-lg bg-blue-200 px-2 py-1 text-sm text-blue-600">
      {modified ? "Unsaved" : "Saved"}
    </div>
  </main>
{/if}

<style lang="postcss">
  :global(.tiptap > h1) {
    @apply text-3xl font-bold;
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
</style>
