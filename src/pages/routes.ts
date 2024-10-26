import NotFound from "../NotFound.svelte";
import Catalog from "./catalog/catalog.svelte";
import Cmdb from "./cmdb/cmdb.svelte";
import Components from "./components/components.svelte";
import Dashboard from "./dashboard/dashboard.svelte";
import Integrations from "./integrations/integrations.svelte";
import Sessions from "./sessions/Sessions.svelte";
import Settings from "./settings/settings.svelte";

export const routes = {
  "/catalog": Catalog,
  "/catalog/*": Catalog,
  "/components": Components,
  "/components/*": Components,
  "/cmdb": Cmdb,
  "/cmdb/*": Cmdb,
  "/integrations": Integrations,
  "/integrations/*": Integrations,
  "/settings": Settings,
  "/login": Sessions,
  "/register": Sessions,
  "/": Dashboard,
  "*": NotFound
};
