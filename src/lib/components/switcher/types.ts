import type { Snippet } from "svelte";

export type Group = {
  label: string;
  items: Item[];
  snippet?: Snippet;
};

export type Item = {
  label: string;
  snippet?: Snippet;
};
