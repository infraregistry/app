import Dependencies from "./dependencies/dependencies.svelte";
import Documentation from "./documentation/documentation.svelte";
import Monitoring from "./monioring/monitoring.svelte";
import Overview from "./overview/overview.svelte";
import Settings from "./settings/settings.svelte";

export const routes = {
  "/components/:id/overview": Overview,
  "/components/:id/documentation": Documentation,
  "/components/:id/dependencies": Dependencies,
  "/components/:id/monitoring": Monitoring,
  "/components/:id/settings": Settings,
  "/components/:id/settings/*": Settings,
  "/components/:id": Documentation

}
