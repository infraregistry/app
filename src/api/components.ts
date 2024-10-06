import type { Camera } from "lucide-svelte";
import { Observable, of } from 'rxjs';
import { APIClient, type BatchResult } from "./client";
import type { APIOperation } from "./common";

export class Component {
  public id?: string;
  public name: string;
  public description: string;
}

export class ComponentsClient extends APIClient {
  public search(params?: { [key: string]: string }): Observable<APIOperation<Component[]>> {
    return of({
      data: [
        {
          id: "1",
          name: "Button",
          custom: Math.random(),
          description: "A button component"
        },
        {
          id: "2",
          name: "Input",
          custom: Math.random(),
          description: "An input component"
        },
        {
          id: "3",
          name: "Card",
          custom: Math.random(),
          description: "A card component"
        },
        {
          id: "4",
          name: "Table",
          custom: Math.random(),
          description: "A table component"
        },
        {
          id: "5",
          name: "Modal",
          custom: Math.random(),
          description: "A modal component"
        }
      ]
    })
  }

  public get(id: string): Observable<APIOperation<Camera>> {
    return this._get(`/components/${id}`);
  }

  public create(input: Component): Observable<APIOperation<Camera>> {
    return this._post('/components', input);
  }

  public update(id: string, input: Camera): Observable<APIOperation<BatchResult>> {
    return this._put(`/components/${id}`, input);
  }

  // public updateInformation(id: string, input: CameraInformation): Observable<APIOperation<BatchResult>> {
  //   return this._put(`/components/${id}/information`, input);
  // }

  public delete(id: string): Observable<APIOperation<BatchResult>> {
    return this._delete(`/components/${id}`);
  }
}

export const componentsClient = new ComponentsClient();