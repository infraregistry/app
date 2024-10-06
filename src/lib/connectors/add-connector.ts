import { modalManager } from "$lib/shared/modals";
import AddConnector from "./add-connector.svelte";

export const openAddConnectorModal = () => {
  modalManager.open({
    id: "add-connector",
    component: AddConnector,
  });
}