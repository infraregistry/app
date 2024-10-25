import { tagDictionary } from "$lib/stores";
import type { Tag, TagDictionary } from "$lib/types";
import { getContext, setContext } from "svelte";
import { get } from "svelte/store";

export class TagListState {
  tagDict: TagDictionary;
  tags = $state<Tag[]>();

  constructor(dict?: TagDictionary) {
    this.tagDict = dict || get(tagDictionary);
  }

  add(label: string, disabled: boolean) {
    Object.entries(get(tagDictionary)).forEach(([key, color]) => {
      if (key === label) {
        this.tags.push({
          label,
          color,
          disabled
        });
      }
    });
  }

  remove(label: string) {
    this.tags = this.tags.filter((t) => t.label !== label);
  }
}

const TAGLIST_KEY = Symbol("INFR-TAGLIST");

export function setTagListState() {
  return setContext(TAGLIST_KEY, new TagListState());
}

export function getTagListState() {
  return getContext<ReturnType<typeof setTagListState>>(TAGLIST_KEY);
}
