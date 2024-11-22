import { modalManager } from "$lib/shared/modals";
import Create from "./create.svelte";

export const openCreateModal = () => {
  modalManager.open({
    component: Create
  });
};
