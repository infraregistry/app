import type { Route } from "@mateothegreat/svelte5-router";
import Advanced from "./advanced/advanced.svelte";
import General from "./general/general.svelte";
import Integrations from "./integrations/integrations.svelte";

export const routes: Route[] = [
  {
    path: "general",
    component: General
  },
  {
    path: "integrations",
    component: Integrations
  },
  {
    path: "advanced",
    component: Advanced
  },
  {
    path: "",
    component: General
  }
]
