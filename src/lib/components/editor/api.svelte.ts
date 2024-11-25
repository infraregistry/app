import { modalManager } from "$lib/shared/modals";
import { writable, type Writable } from "svelte/store";
import { BlockType } from "./blocks/block-type";
import { Block } from "./blocks/block.svelte";

let blocks: Writable<Block[]> = writable([]);

export const getBlocks = (documentId: string): Writable<Block[]> => {
  blocks.set([
    new Block({
      id: new Date().getTime().toString(),
      type: BlockType.Paragraph,
      content: "a"
    }),
    new Block({
      id: new Date().getTime().toString(),
      type: BlockType.Paragraph,
      content: "b"
    }),
    new Block({
      id: new Date().getTime().toString(),
      type: BlockType.Paragraph,
      content: "c"
    }),
    new Block({
      id: new Date().getTime().toString(),
      type: BlockType.Paragraph,
      content: "d"
    }),
    new Block({
      id: new Date().getTime().toString(),
      type: BlockType.Paragraph,
      content: "e"
    })
  ]);

  return blocks;
};

export const createBlock = (index: number): Block => {
  const block = new Block({
    id: new Date().getTime().toString(),
    type: BlockType.Paragraph,
    content: ""
  });

  blocks.update((blocks) => [...blocks.slice(0, index), block, ...blocks.slice(index)]);

  console.log(blocks);
  return block;
};

export const openFullscreen = (opening: boolean) => {
  modalManager.open({
    id: "block",
    component: Block
  });
};
