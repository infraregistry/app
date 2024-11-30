import type { Route } from "@mateothegreat/svelte5-router";
import Overview from "./overview/overview.svelte";
import Settings from "./settings/settings.svelte";

// export const routes = {
//   "/components/:id/overview": Overview,
//   "/components/:id/documentation": Documentation,
//   "/components/:id/dependencies": Dependencies,
//   "/components/:id/monitoring": Monitoring,
//   "/components/:id/settings": Settings,
//   "/components/:id/settings/*": Settings,
//   "/components/:id": Documentation

// }

export type RouteProps = {
  params: {
    id: string;
    tab: string;
  };
};

export const routes: Route[] = [
  {
    path: "overview",
    component: Overview
  },
  {
    path: "documentation",
    component: async () => import("./documentation/documentation.svelte")
  },
  {
    path: "dependencies",
    component: async () => import("./dependencies/dependencies.svelte")
  },
  {
    path: "monitoring",
    component: async () => import("./monitoring/monitoring.svelte")
  },
  {
    path: "settings",
    component: Settings
  },
  {
    path: "",
    component: Overview
  }
];
