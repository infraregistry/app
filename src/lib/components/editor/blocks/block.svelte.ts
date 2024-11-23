import type { BlockType } from "./block-type";

export class Block {
  id: string;
  type: BlockType;
  content: string = $state("");
  editable?: boolean;

  constructor(obj: Block) {
    this.id = crypto.randomUUID();
    this.type = obj.type;
    this.content = obj.content;
    this.editable = obj.editable;
  }
}
