import Login from "./login/login.svelte";
import Register from "./register/register.svelte";
import Reset from "./reset/reset.svelte";

export const routes = {
  "/login": Login,
  "/register": Register,
  "/reset": Reset,
  "*": Login
};
