import type { Route } from "@mateothegreat/svelte5-router";
import Catalog from "./catalog/catalog.svelte";
import Cmdb from "./cmdb/cmdb.svelte";
import Components from "./components/components.svelte";
import Dashboard from "./dashboard/dashboard.svelte";
import Integrations from "./integrations/integrations.svelte";
import Settings from "./settings/settings.svelte";
import Support from "./support/support.svelte";

export const routes: Route[] = [
  {
    path: "/catalog",
    component: Catalog
  },
  {
    path: "/components",
    component: Components
  },
  {
    path: "/cmdb",
    component: Cmdb
  },
  {
    path: "/integrations",
    component: Integrations
  },
  {
    path: "/settings",
    component: Settings
  },
  {
    path: "/support",
    component: Support
  },
  {
    path: "",
    component: Dashboard
  }
];
