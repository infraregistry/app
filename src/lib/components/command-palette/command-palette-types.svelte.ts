import { modalManager } from "$lib/shared/modals";
import CommandPalette from "./command-palette.svelte";

export type CommandPaletteConfig<T> = {
  title?: string;
  data: T[];
};

export interface CommandPaletteItem<T> {
  name: string;
  value: T;
}

export const openCommandPalette = <T>(config: CommandPaletteConfig<T>) => {
  modalManager.open(
    {
      id: "command-palette",
      component: CommandPalette
    },
    { config }
  );
};
