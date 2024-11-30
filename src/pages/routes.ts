import type { Route } from "@mateothegreat/svelte5-router";
import Dashboard from "./dashboard/dashboard.svelte";

export const routes: Route[] = [
  {
    path: "/catalog",
    component: async () => import("./catalog/catalog.svelte")
  },
  {
    path: "/components",
    component: async () => import("./components/components.svelte")
  },
  {
    path: "/cmdb",
    component: async () => import("./cmdb/cmdb.svelte")
  },
  {
    path: "/integrations",
    component: async () => import("./integrations/integrations.svelte")
  },
  {
    path: "/settings",
    component: async () => import("./settings/settings.svelte")
  },
  {
    path: "/support",
    component: async () => import("./support/support.svelte")
  },
  {
    path: "",
    component: Dashboard
  }
];
