import { writable } from "svelte/store";

type Crumb = {
  label: string;
  href: string;
};

export const crumbs = writable<Crumb[]>([]);
