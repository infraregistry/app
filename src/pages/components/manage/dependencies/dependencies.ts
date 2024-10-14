import { writable, type Writable } from "svelte/store";

export interface Dependency {
  id: string;
  name: string;
  description: string;
}

export const dependencies: Writable<Dependency[]> = writable([]);

export const getDependencies = (id: string): void => {
  dependencies.set([
    {
      id: "a",
      name: "A",
      description: "A",
    },
    {
      id: "b",
      name: "B",
      description: "B",
    },
    {
      id: "c",
      name: "C",
      description: "C",
    },
    {
      id: "d",
      name: "D",
      description: "D",
    },
  ]);
};
