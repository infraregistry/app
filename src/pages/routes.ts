import NotFound from "../NotFound.svelte";
import Components from "./components/components.svelte";
import Dashboard from "./dashboard/dashboard.svelte";
import Sessions from "./sessions/Sessions.svelte";
import Settings from "./settings/settings.svelte";

export const routes = {
  "/components": Components,
  "/components/*": Components,
  "/settings": Settings,
  "/login": Sessions,
  "/register": Sessions,
  "/": Dashboard,
  "*": NotFound
};
