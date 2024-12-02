import type { Route } from "@mateothegreat/svelte5-router";
import Dashboard from "./dashboard/dashboard.svelte";
import Manage from "./manage/manage.svelte";

export const routes: Route[] = [
  {
    path: "^/components/(?<id>[a-z0-9]{25})(?:/(?<tab>.*))?$",
    component: Manage
  },
  {
    path: "/components/?",
    component: Dashboard
  },
];
