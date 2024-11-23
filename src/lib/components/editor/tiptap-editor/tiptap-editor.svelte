<script lang="ts">
  import "./styles/editor.css";

  import { cn } from "$lib/utils.js";
  import { Editor } from "@tiptap/core";
  import StarterKit from "@tiptap/starter-kit";
  import { onDestroy, onMount } from "svelte";

  import Color from "@tiptap/extension-color";
  import Highlight from "@tiptap/extension-highlight";
  import { Link } from "@tiptap/extension-link";
  import TaskItem from "@tiptap/extension-task-item";
  import TaskList from "@tiptap/extension-task-list";
  import TextAlign from "@tiptap/extension-text-align";
  import TextStyle from "@tiptap/extension-text-style";
  import Typography from "@tiptap/extension-typography";
  import { Underline } from "@tiptap/extension-underline";

  import Table from "@tiptap/extension-table";
  import TableCell from "@tiptap/extension-table-cell";
  import TableHeader from "@tiptap/extension-table-header";
  import TableRow from "@tiptap/extension-table-row";
  import { ColorHighlighter } from "./custom/Extentions/ColorHighlighter.js";
  import { ImageExtension } from "./custom/Extentions/ImageExtention.js";
  import { SmilieReplacer } from "./custom/Extentions/SmilieReplacer.js";
  // Lowlight
  import { all, createLowlight } from "lowlight";
  import { Block } from "../blocks/block.svelte";
  import SearchAndReplace from "./custom/Extentions/SearchAndReplace.js";
  import "./styles/onedark.css";
  import TiptapEditorToolbar from "./tiptap-editor-toolbar.svelte";

  const lowlight = createLowlight(all);

  interface Props {
    class?: string;
    block: Block;
    showToolbar?: boolean;
    onFullscreen?: (opening: boolean) => void;
  }

  let { class: className = "", block, showToolbar = true, onFullscreen }: Props = $props();

  let editor = $state<Editor>();
  let element = $state<HTMLElement>();

  onMount(() => {
    editor = new Editor({
      element,
      content: block.content,
      editorProps: {
        attributes: {
          class: "m-auto p-2 focus:outline-none flex-1 prose text-foreground min-w-full max-h-full overflow-auto dark:prose-invert *:my-2"
        }
      },
      extensions: [
        StarterKit.configure({
          orderedList: {
            HTMLAttributes: {
              class: "list-decimal"
            }
          },
          bulletList: {
            HTMLAttributes: {
              class: "list-disc"
            }
          },
          heading: {
            levels: [1, 2, 3, 4],
            HTMLAttributes: {
              class: "tiptap-heading"
            }
          }
        }),
        Typography,
        // Text,
        TextStyle,
        TextAlign.configure({
          types: ["heading", "paragraph"]
        }),
        Color,
        Highlight.configure({ multicolor: true }),
        Underline,
        Link.configure({
          openOnClick: false,
          autolink: true,
          defaultProtocol: "https",
          HTMLAttributes: {
            target: "_blank",
            rel: "noopener noreferrer"
          }
        }),
        TaskList,
        TaskItem.configure({
          nested: true
        }),
        SearchAndReplace,
        // CodeBlockLowlight.configure({
        //   lowlight
        // }).extend({
        //   addNodeView() {
        //     return SvelteNodeViewRenderer(CodeExtended);
        //   }
        // }),
        SmilieReplacer,
        ColorHighlighter,
        Table.configure({
          allowTableNodeSelection: true,
          resizable: true
        }),
        TableRow,
        TableHeader,
        TableCell,
        ImageExtension
      ],
      autofocus: true,
      onFocus: () => {},
      onBlur: () => {},
      onTransaction: (transaction) => {
        /**
         * Weird behavior of editor.
         * If we do not make it undefined, then it looses it's reactivity
         * this is because assigning editor directly to `transaction.editor`
         * the original object is not mutated.
         */
        editor = undefined;
        editor = transaction.editor;
        block.content = editor.getHTML();
      }
    });
  });

  onDestroy(() => {
    if (editor) editor.destroy();
  });
</script>

<div class={cn("flex flex-col rounded border", className)}>
  {#if editor && showToolbar}
    <TiptapEditorToolbar
      {editor}
      {onFullscreen} />
  {/if}
  <div
    bind:this={element}
    spellcheck="false"
    class="h-full w-full flex-1 overflow-auto">
  </div>
</div>
