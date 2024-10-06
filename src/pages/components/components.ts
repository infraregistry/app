import { writable, type Writable } from "svelte/store";

export type Component = {
  id: string;
  name: string;
  description: string;
};

export const components: Writable<Component[]> = writable([
  {
    id: "1",
    name: "Button",
    description: "A button component",
  },
  {
    id: "2",
    name: "Input",
    description: "An input component",
  },
]);