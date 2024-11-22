export interface Dependency {
  id: string;
  name: string;
  description: string;
}

let dependencies = $state<Dependency[]>([]);

export const generateRandomDependencies = (max: number): Dependency[] => {
  const dependencies: Dependency[] = [];
  for (let i = 0; i < max; i++) {
    dependencies.push({
      id: i.toString(),
      name: `Dependency ${i}`,
      description: `Description of Dependency ${i}`
    });
  }
  return dependencies;
};

export const getDependencies = (id: string): Dependency[] => {
  return generateRandomDependencies(100);
};
