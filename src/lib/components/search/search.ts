import { modalManager } from "$lib/shared/modals";
import type { Writable } from "svelte/store";
import Search from "./search.svelte";

export interface SearchConfig<T> {
  title?: string;
  data: Writable<SearchItem<T>[]>;
}

export interface SearchItem<T> {
  name: string;
  value: T;
}

export const openSearch = <T>(config: SearchConfig<T>) => {
  modalManager.open({
    id: "search",
    component: Search,
    data: config
  });
};
