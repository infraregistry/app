
export interface Dependency {
  id: string;
  name: string;
  description: string;
}

let dependencies = $state<Dependency[]>([]);

export const getDependencies = (id: string): Dependency[] => {
  dependencies = [
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
  ];

  return dependencies;
};
