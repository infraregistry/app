import { Observable, of } from "rxjs";
import { toast } from "svelte-sonner";
import { ComponentType, type Component } from "../components";

let component = $state<Component>();

export const loadComponent = (id: string): Component => {
  component = {
    id,
    name: "Button",
    description: "A button component",
    type: ComponentType.VIRTUAL_MACHINE
  };

  return component;
};

export const getComponent = (): Component => {
  if (!component) {
    throw new Error("Component not loaded");
  }
  return component;
};

export const deleteComponent = (id: string): Observable<boolean> => {
  toast.success("Component deleted!");
  return of(true);
};
