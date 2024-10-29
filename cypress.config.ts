import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "n9kc57",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "svelte",
      bundler: "vite",
    },
  },
});
