import { getContext, setContext, type Snippet } from "svelte";

export interface CommandPaletteConfig {
  header?: Snippet;
  body: Snippet;
  footer?: Snippet;
  search: () => void;
}

export class CommandPaletteState {
  isOpen = $state(false);

  constructor() {}
}

const CMD_KEY = Symbol("INF-CommandPalette");

export function setCommandState() {
  return setContext(CMD_KEY, new CommandPaletteState());
}

export function getCommandState() {
  return getContext<ReturnType<typeof setCommandState>>(CMD_KEY);
}
