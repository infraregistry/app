import { modalManager } from "$lib/shared/modals";
import Modal from "./modal.svelte";

export const openIntegrationsModal = () => {
  modalManager.open({
    id: "integrations",
    component: Modal
  });
};
