import Catalog from "$pages/catalog/catalog.svelte";
import type { Route } from "@mateothegreat/svelte5-router";
import Dashboard from "./dashboard/dashboard.svelte";
import Manage from "./manage/manage.svelte";

// export const routes = {
//   "/components/:id/:tab?": Manage,
//   "/components/:id/*": Manage,
//   "/components": Dashboard
// }    path: "^/components/(?<id>[a-z0-9]{25})/(?<tab>.*)?$",

export const routes: Route[] = [
  {
    path: "/catalog",
    component: Catalog
  },
  {
    path: "^/components/(?<id>[a-z0-9]{25})(?:/(?<tab>.*))?$",
    component: Manage
  },
  {
    path: "/components/?",
    component: Dashboard
  },
];
