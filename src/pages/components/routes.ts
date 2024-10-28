import Dashboard from "./dashboard/dashboard.svelte";
import Manage from "./manage/manage.svelte";

export const routes = {
  "/components/:id/:tab?": Manage,
  "/components/:id/*": Manage,
  "/components": Dashboard
}