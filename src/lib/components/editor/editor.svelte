<script lang="ts">
  import { Editor, Extension, type Range } from "@tiptap/core";
  import Suggestion from "@tiptap/suggestion";
  import { onDestroy, onMount } from "svelte";
  import "tippy.js/dist/tippy.css";
  import { defaultExtensions } from "./extensions";

  let element: HTMLElement;
  let editor: Editor;

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
    editor = new Editor({
      element: element,
      extensions: [
        ...defaultExtensions
        //   StarterKit,
        //   SlashCommands.configure({
        //     suggestion: {
        //       items: ({ query }) => {
        //         return items.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
        //       },
        //       render: () => {
        //         let popup;
        //         let component: SlashCommandList;

        //         return {
        //           onStart: (props: any) => {
        //             component = new SlashCommandList({
        //               target: document.createElement("div"),
        //               props
        //             });

        //             const element = document.createElement("div");
        //             mount(Slash, { target: element });

        //             popup = tippy("body", {
        //               getReferenceClientRect: props.clientRect,
        //               appendTo: () => document.body,
        //               content: element,
        //               showOnCreate: true,
        //               interactive: true,
        //               trigger: "manual",
        //               placement: "bottom-start"
        //             });
        //           },
        //           onUpdate: (props) => {
        //             component.$set(props);

        //             popup[0].setProps({
        //               getReferenceClientRect: props.clientRect
        //             });
        //           },
        //           onKeyDown: (props) => {
        //             if (props.event.key === "Escape") {
        //               popup[0].hide();
        //               return true;
        //             }

        //             return component.$handleKeyDown(props);
        //           },
        //           onExit: () => {
        //             popup[0].destroy();
        //             component.$destroy();
        //           }
        //         };
        //       }
        //     }
        //   })
      ],
      content: '<p>Hello World! 🌍️ Try typing "/" to see the slash command menu.</p>',
      onTransaction: () => {
        // force re-render so `editor.isActive` works as expected
        editor = editor;
      }
    });
  });

  onDestroy(() => {
    if (editor) {
      editor.destroy();
    }
  });
</script>

<div class="tiptap-editor">
  {#if editor}
    <div class="editor-menu">
      <button on:click={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} class:active={editor.isActive("heading", { level: 1 })} aria-label="Toggle Heading 1"> H1 </button>
      <button on:click={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} class:active={editor.isActive("heading", { level: 2 })} aria-label="Toggle Heading 2"> H2 </button>
      <button on:click={() => editor.chain().focus().setParagraph().run()} class:active={editor.isActive("paragraph")} aria-label="Set Paragraph"> P </button>
    </div>
  {/if}
  <div bind:this={element} />
</div>

<style>
  .tiptap-editor {
    border: 1px solid #666;
    border-radius: 4px;
    padding: 1rem;
  }

  .editor-menu {
    margin-bottom: 0.5rem;
  }

  button {
    margin-right: 0.5rem;
    padding: 0.25rem 0.5rem;
    background-color: #333;
    border: 1px solid #666;
    border-radius: 4px;
    cursor: pointer;
  }

  button.active {
    background-color: #000;
    color: #fff;
  }
</style>
