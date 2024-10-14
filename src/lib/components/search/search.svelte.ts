import { modalManager } from "$lib/shared/modals";
import Search from "./search-modal.svelte";

export type SearchConfig<T> = {
  title?: string;
  data: T[];
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
