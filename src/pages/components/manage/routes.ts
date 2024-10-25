import Dependencies from "./dependencies/dependencies.svelte";
import Diagram from "./diagram/diagram.svelte";
import Documentation from "./documentation/documentation.svelte";
import Settings from "./settings/settings.svelte";

export const routes = {
  "/components/:id/documentation": Documentation,
  "/components/:id/dependencies": Dependencies,
  "/components/:id/diagram": Diagram,
  "/components/:id/settings": Settings,
  "/components/:id": Documentation,

}
