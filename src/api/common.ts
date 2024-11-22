import { Observable, filter } from "rxjs";

export const waitForLoading = () => {
  return function <T>(source: Observable<APIOperation<T>>) {
    return source.pipe(filter((value) => value.loading === false));
  };
};

export interface APIOperation<T> {
  data?: T;
  error?: Error;
  loading?: boolean;
}
