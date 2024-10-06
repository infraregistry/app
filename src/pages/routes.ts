import Components from "./components/components.svelte";
import Dashboard from "./dashboard/dashboard.svelte";
import Settings from "./settings/settings.svelte";

export const routes = {
  "/components": Components,
  "/components/*": Components,
  "/settings": Settings,
  "/": Dashboard
}