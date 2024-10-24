import { openSelector } from "$lib/components/selector/selector.svelte";
import { ComponentType } from "$pages/components/components";
import { map, type Observable } from "rxjs";
import { createRawSnippet, hydrate } from "svelte";
import { toast } from "svelte-sonner";
import { getDependencies } from "../dependencies.svelte";
import RelateHeader from "./relate-header.svelte";

const createHeader = (name: string, subtext: string, type: ComponentType) => {
  return createRawSnippet(() => {
    return {
      render: () => `<div />`,
      setup: (node) => {
        hydrate(RelateHeader, {
          target: node,
          props: {
            name,
            subtext,
            type
          }
        })
      }
    };
  });
};

export const openAddRelation = (id: string): Observable<boolean> => {
  return openSelector({
    title: "Add children to this component.",
    data: getDependencies(id),
    header: createHeader("asdf", "Select component(s) to link as children to this (parent) component.", ComponentType.VIRTUAL_MACHINE),
    search: {
      placeholder: "Search for a component to link as a child.",
      onChange: (value) => {
        console.log(value);
      }
    }
  }).pipe(
    map((selections) => {
      toast.success(`Added ${selections.length > 1 ? `${selections.length} components as children` : "1 component as a child"} to component ${id}.`);
      return selections.length > 0;
    })
  );
};
