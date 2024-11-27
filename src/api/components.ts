import type { Component } from "@infraregistry/types";
import type { Camera } from "lucide-svelte";
import { Observable } from "rxjs";
import { APIClient, type BatchResult } from "./client";
import type { APIOperation } from "./common";

export class ComponentsClient extends APIClient {
  public search(params?: { [key: string]: string }): Observable<APIOperation<Component[]>> {
    return this._get("/components", params);
  }

  public get(id: string): Observable<APIOperation<Camera>> {
    return this._get(`/components/${id}`);
  }

  public create(input: Component): Observable<APIOperation<Camera>> {
    return this._post("/components", input);
  }

  public update(id: string, input: Camera): Observable<APIOperation<BatchResult>> {
    return this._put(`/components/${id}`, input);
  }

  public delete(id: string): Observable<APIOperation<BatchResult>> {
    return this._delete(`/components/${id}`);
  }
}

export const componentsClient = new ComponentsClient();
