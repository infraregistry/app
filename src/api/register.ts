import { Observable } from "rxjs";
import { APIClient } from "./client";
import type { APIOperation } from "./common";

export interface RegisterCreate {
  email: string;
  password: string;
}

export interface RegisterConfirmCreate {
  email: string;
  code: string;
}

export interface RegisterConfirmResponse {
  token: string;
}

export class RegisterClient extends APIClient {
  create(user: RegisterCreate): Observable<APIOperation<null>> {
    return this._post<null>("/register", user);
  }

  confirm(data: RegisterConfirmCreate): Observable<APIOperation<RegisterConfirmResponse>> {
    return this._post<RegisterConfirmResponse>("/register/confirm", data);
  }
}

export const registerClient = new RegisterClient();
