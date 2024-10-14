import { openSearch } from "$lib/components/search/search.svelte";
import { getDependencies } from "../dependencies.svelte";

export const openRelateModal = (id: string) => {
  const data = getDependencies(id).map((dependency) => ({
    name: dependency.name,
    value: dependency,
  }));

  openSearch({
    data: data,
  });
};