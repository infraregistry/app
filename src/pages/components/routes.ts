import type { Route } from "@mateothegreat/svelte5-router";
import Dashboard from "./dashboard/dashboard.svelte";

export const routes: Route[] = [
  {
    path: "^/components/(?<id>[a-z0-9]{25})(?:/(?<tab>.*))?$",
    component: async () => import("./manage/manage.svelte")
  },
  {
    path: "/components/?",
    component: Dashboard
  },
];
