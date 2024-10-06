import { Observable, Subject } from 'rxjs';
import { modalManager } from '../modals';
import Loading from './loading.svelte';

export interface LoadingArgs {
  subject: Subject<void>;
  message: string;
  duration: number;
}

export const loadingOpen = (message: string, duration: number): Observable<void> => {
  const subject = new Subject<void>();

  modalManager.open({
    id: 'loading',
    component: Loading,
    data: {
      subject,
      message,
      duration
    }
  });

  return subject;
};
