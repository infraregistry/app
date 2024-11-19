import type { Tag } from "$lib/types";
import { mergeAttributes, Node, type ChainedCommands } from "@tiptap/core";

// TODO: Even when extending module, this method is not recognized at runtime, might be a TS thing
declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    createEmbedComponent: {
      insertEmbedComponent: () => ({ commands }: { commands: ChainedCommands }) => boolean;
    };
  }
}

export const createEmbedComponent = () => {
  Node.create({
    name: "embedComponent",
    group: "block",
    inline: false,
    selectable: true,
    draggable: true,

    addAttributes() {
      return {
        /*
        // Unsure if the component type should 
        // be an attribute, commenting for now.
        type: {
          default: "Virtual Machine"
        },
        */
        name: {
          default: "roamings-gaming-vm"
        },
        tags: {
          default: [] as Tag[]
        }
      };
    },

    parseHTML() {
      return [
        {
          tag: "VmComponent"
        }
      ];
    },

    renderHTML({ node, HTMLAttributes }) {
      return [
        "div",
        {
          class: "embed-vm-component"
        },
        mergeAttributes(HTMLAttributes)
      ];
    },

    addCommands(this) {
      return {
        insertEmbedComponent:
          () =>
          ({ commands }: { commands: ChainedCommands }) => {
            const node = this.type.create();
            return commands.setNode(node.type).run();
          }
      };
    }
  });
};
