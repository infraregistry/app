import { openSelector } from "$lib/components/selector/selector.svelte";
import { getDependencies } from "../dependencies.svelte";

export const openAddRelation = (id: string) => {
  openSelector({
    title: "Add children to this component.",
    data: getDependencies(id),
  }).subscribe((selections) => {
    console.log(selections);
  });
};
