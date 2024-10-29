import Catalog from "$pages/catalog/catalog.svelte";
import type { Route } from "@mateothegreat/svelte5-router";
import Dashboard from "./dashboard/dashboard.svelte";
import Manage from "./manage/manage.svelte";

// export const routes = {
//   "/components/:id/:tab?": Manage,
//   "/components/:id/*": Manage,
//   "/components": Dashboard
// }

export const routes: Route[] = [
  {
    path: "/catalog",
    component: Catalog
  },
  {
    path: "/components/(.*?)$",
    component: Manage
  },
  {
    path: "",
    component: Dashboard
  },
]
