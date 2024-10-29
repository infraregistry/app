import type { Route } from "@mateothegreat/svelte5-router";
import Dashboard from "./dashboard/dashboard.svelte";

export const routes: Route[] = [
  {
    path: "dashboard",
    component: Dashboard
  },
  {
    path: "",
    component: Dashboard
  }
]
