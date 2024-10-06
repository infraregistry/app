import { modalManager } from "$lib/shared/modals";
import Search from "./search.svelte";

export const openSearch = () => {
  modalManager.open({
    id: "search",
    component: Search,
  });
}