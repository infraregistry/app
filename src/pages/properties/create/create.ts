import { modalManager } from "$lib/shared/modals";
import Create from "./create.svelte";

export const openCreateProperty = () => {
  modalManager.open({
    id: "create-property",
    component: Create,
  });
}