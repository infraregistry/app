<script>
  import { crumbs } from "$lib/components/nav/state";
  import { Router } from "@mateothegreat/svelte5-router";
  import { routes } from "./routes";

  crumbs.set([{ label: "Components", href: "/components" }]);
</script>

<Router {routes} />
