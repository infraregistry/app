import { modalManager } from "$lib/shared/modals";
import { Subject, type Observable } from "rxjs";
import type { Snippet } from "svelte";
import SelectorModal from "./selector-modal.svelte";

export type SelectorConfig<T> = {
  title?: string;
  data: T[];
  header?: Snippet;
  search?: {
    placeholder?: string;
    onChange?: (value: string) => void;
  }
}

export interface SelectorItem<T> {
  name: string;
  value: T;
}

export const openSelector = <T, H>(config: SelectorConfig<T>): Observable<T[]> => {
  const subject = new Subject<T[]>();

  let selections = $state<T[]>([]);

  modalManager.open({
    id: "selector",
    component: SelectorModal,
  }, { config, selections, subject });

  return subject;
};

export const closeSelector = () => {
  modalManager.close("selector");
};