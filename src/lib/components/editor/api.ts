import { writable, type Writable } from "svelte/store";
import { BlockType } from "./blocks/block-type";
import { Block } from "./blocks/block.svelte";

export const getBlocks = (documentId: string): Writable<Block[]> => {
  return writable([
    new Block({
      id: crypto.randomUUID(),
      type: BlockType.Paragraph,
      content: "a"
    }),
    new Block({
      id: crypto.randomUUID(),
      type: BlockType.Paragraph,
      content: `b`
    }),
    new Block({
      id: crypto.randomUUID(),
      type: BlockType.Paragraph,
      content: "c"
    }),
    new Block({
      id: crypto.randomUUID(),
      type: BlockType.Paragraph,
      content: "d"
    }),
  ]);
};
