import type { Editor, Range } from "@tiptap/core";
import { mount, unmount } from "svelte";
import tippy, { type GetReferenceClientRect } from "tippy.js";
import Slash from "../tiptap-editor/custom/slash.svelte";

export interface SlashProps {
  editor: Editor;
  range: Range;
  items: CommandItem[];
}

export type SlashComponent = typeof Slash;

export type BaseProps = {
  editor: Editor;
  range: Range;
};

export interface CommandItem {
  title: string;
  subtitle: string;
  command: (props: { editor: Editor; range: Range }) => void;
}

export default {
  items: ({ query }: { query: string }) => {
    return [
      {
        title: "Heading 1",
        subtitle: "BIG heading",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().focus().deleteRange(range).setNode("heading", { level: 1 }).run();
        }
      },
      {
        title: "Heading 2",
        subtitle: "Less Big heading",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().focus().deleteRange(range).setNode("heading", { level: 2 }).run();
        }
      },
      {
        title: "Heading 3",
        subtitle: "Medium big heading",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().focus().deleteRange(range).setNode("heading", { level: 3 }).run();
        }
      },
      {
        title: "Bold",
        subtitle: "Make the text bold",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().focus().deleteRange(range).setBold().run();
        }
      },
      {
        title: "Italic",
        subtitle: "Make the text italic",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().focus().deleteRange(range).setItalic().run();
        }
      },
      {
        title: "Underline",
        subtitle: "Underline the text",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().focus().deleteRange(range).setUnderline().run();
        }
      },
      {
        title: "Strikethrough",
        subtitle: "Strike through the current line",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().focus().deleteRange(range).setStrike().run();
        }
      },
      {
        title: "To Dos",
        subtitle: "Create a to do list with checkboxes",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().deleteRange(range).focus().toggleTaskList().run();
        }
      },
      {
        title: "Blockquote",
        subtitle: "Create a block quote",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().deleteRange(range).focus().toggleBlockquote().run();
        }
      },
      {
        title: "Separator",
        subtitle: "Create a separator",
        command: ({ editor, range }: BaseProps) => {
          editor.chain().deleteRange(range).focus().setHorizontalRule().run();
        }
      },
      {
        title: "Link",
        subtitle: "Create a link",
        command: ({ editor, range }: BaseProps) => {
          const href = window.prompt("Enter the link URL:");
          if (!href) return;
          try {
            new URL(href);
          } catch {
            alert("Invalid URL!");
            return;
          }
          editor.chain().deleteRange(range).focus().toggleLink({ href, target: "_blank" }).run();
        }
      },
      {
        title: "Image",
        subtitle: "Inserts an image from a URL",
        command: ({ editor, range }: BaseProps) => {
          const src = window.prompt("Enter the image URL:");
          if (!src) return;
          try {
            new URL(src);
          } catch {
            alert("Invalid URL!");
            return;
          }
          const split = src.split("/");
          editor
            .chain()
            .deleteRange(range)
            .focus()
            .setImage({ src, alt: `Image that links to ${split[split.length - 1]}` })
            .run();
        }
      }
    ]
      .filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
      .slice(0, 10);
  },

  render: () => {
    let component: any;
    let popup: any;
    let selected = false;

    return {
      onStart: (props: BaseProps & { items: any[]; clientRect: GetReferenceClientRect }) => {
        let element = document.createElement("div");

        component = mount(Slash, {
          target: element,
          props: {
            editor: props.editor,
            range: props.range,
            items: props.items
          }
        });

        popup = tippy("body", {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start"
        });
      },

      onUpdate(props: BaseProps & { items: any[]; clientRect: GetReferenceClientRect }) {
        component.$set({
          editor: props.editor,
          range: props.range,
          items: props.items
        });
        if (!props.clientRect) {
          return;
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect
        });
      },

      onKeyDown(props: { event: KeyboardEvent }) {
        if (props.event.key === "Escape") {
          popup[0].hide();
          return true;
        }
        if (props.event.key === "Enter") {
          selected = true;
          props.event.preventDefault();
          return true;
        }
      },

      onExit() {
        popup[0].destroy();
        unmount(component);
      }
    };
  }
};
