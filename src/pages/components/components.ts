import { type TableColumn } from "@mateothegreat/svelte5-table";
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

export const componentTableColumns: TableColumn[] = [
  {
    field: "id",
    header: "ID"
  },
  {
    field: "name",
    header: "Name"
  },
  {
    field: "description",
    header: "Description"
  },
  // {
  //   field: "actions",
  //   classes: "w-24 flex items-center justify-center",
  //   render: (row: Component) => `<button variant="outline">Edit ${row.id}</button>`
  // },
];