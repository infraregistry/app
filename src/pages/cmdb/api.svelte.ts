import { type Change } from "@infraregistry/types";
import { Observable, of } from "rxjs";
import { toast } from "svelte-sonner";

let change = $state<Change>();
let changes = $state<Change[]>([
  {
    id: "1",
    created: new Date(),
    updated: new Date(),
    name: "Change 1",
    componentId: "1",
    type: "system",
    from: "a",
    to: "b"
  },
  {
    id: "2",
    created: new Date(),
    updated: new Date(),
    name: "Change 2",
    componentId: "1",
    type: "user",
    from: "a",
    to: "b"
  },
  {
    id: "3",
    created: new Date(),
    updated: new Date(),
    name: "Change 3",
    componentId: "1",
    type: "system",
    from: "a",
    to: "b"
  }
]);

export const getChanges = (): Change[] => {
  return changes;
};

export const getChange = (id: string): Change => {
  return changes[0];

};

export const deleteChange = (id: string): Observable<boolean> => {
  toast.success("Change deleted!");
  return of(true);
};
