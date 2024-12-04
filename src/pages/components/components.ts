import { type TableColumn } from "@mateothegreat/svelte5-table";
import { writable, type Writable } from "svelte/store";

export const enum ComponentType {
  VIRTUAL_MACHINE = "Virtual Machine",
  IP_ADDRESS = "IP Address",
  STORAGE = "Storage",
  VIRTUAL_NETWORK = "Virtual Network"
}

export type Component = {
  id: string;
  name: string;
  description: string;
  type: ComponentType;
};

export const components: Writable<Component[]> = writable([
  {
    id: "1",
    name: "Button",
    description: "A button component",
    type: ComponentType.VIRTUAL_MACHINE
  },
  {
    id: "2",
    name: "Input",
    description: "An input component",
    type: ComponentType.VIRTUAL_MACHINE
  }
]);

export const componentTableColumns: TableColumn[] = [
  {
    field: "id",
    header: {
      value: "ID",
      class: "text-slate-600"
    },
    class: "w-4 text-slate-500"
  },
  {
    field: "name",
    header: {
      value: "Name",
      class: "text-slate-600"
    },
    class: "w-20 text-slate-500"
  },
  {
    field: "description",
    header: {
      value: "Description",
      class: "text-slate-600"
    },
    class: "text-slate-500"
  },
  {
    field: "type",
    header: {
      value: "Type",
      class: "text-slate-600"
    },
    class: "text-slate-500"
  }
  // {
  //   field: "actions",
  //   classes: "w-24 flex items-center justify-center",
  //   render: (row: Component) => `<button variant="outline">Edit ${row.id}</button>`
  // },
];
