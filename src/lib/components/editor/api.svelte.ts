import { modalManager } from "$lib/shared/modals";
import { get, writable, type Writable } from "svelte/store";
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

  blocks.update((blocks) => blocks.toSpliced(index, 0, block));

  console.log(blocks);
  return block;
};

export const removeBlock = (id: string): void => {
  blocks.update((blocks) => blocks.filter((b) => b.id !== id));
};

export const openFullscreen = (opening: boolean) => {
  modalManager.open({
    id: "block",
    component: Block
  });
};
