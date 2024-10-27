import Advanced from "./advanced/advanced.svelte";
import General from "./general/general.svelte";
import Integrations from "./integrations/integrations.svelte";

export const routes = {
  "/components/:id/settings/general": General,
  "/components/:id/settings/integrations": Integrations,
  "/components/:id/settings/advanced": Advanced,
  "/components/:id/settings": General
}