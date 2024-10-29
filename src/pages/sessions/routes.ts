import type { Route } from "@mateothegreat/svelte5-router";
import Login from "./login/login.svelte";
import Register from "./register/register.svelte";
import Reset from "./reset/reset.svelte";

export const routes: Route[] = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/reset",
    component: Reset
  },
  {
    path: "",
    component: Login
  }
];
