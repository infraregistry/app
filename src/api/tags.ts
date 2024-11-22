import { Observable } from "rxjs";
import { APIClient } from "./client";

export interface TagCreate {
  name: string;
  relations?: string[]; // optional list of component ids to associate with the new tag.
}

export interface Tag {
  id: string;
  name: string;
}

export class TagsClient extends APIClient {
  create(tag: TagCreate): Observable<Tag> {
    return this._post<Tag>("tags", tag);
  }
}

export const tagsClient = new TagsClient();
