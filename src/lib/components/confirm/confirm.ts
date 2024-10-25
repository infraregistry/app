import { modalManager } from "$lib/shared/modals";
import { Subject, type Observable } from "rxjs";
import Confirm from "./confirm.svelte";

export interface ConfirmOptions {
  title: string;
  description: string;
  label?: string;
}

export const openConfirm = (options: ConfirmOptions): Observable<boolean> => {
  const subject = new Subject<boolean>();
  modalManager.open({
    id: "confirm",
    component: Confirm,
  }, { options, subject });
  return subject;
};
