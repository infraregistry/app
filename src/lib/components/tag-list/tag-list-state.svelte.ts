import { tagDictionary } from "$lib/stores";
import type { Tag, TagDictionary } from "$lib/types";
import { getContext, setContext } from "svelte";
import { get } from "svelte/store";

// Unused for now

export class TagListState {
  tagDict: TagDictionary;
  tags = $state<Tag[]>([]);

  constructor(tags?: Tag[], dict?: TagDictionary) {
    this.tags = tags || [];
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

const DEFAULT_TAGLIST_KEY = "INFRG-TAGLIST";

export function setTagListState(key = DEFAULT_TAGLIST_KEY, tagList?: Tag[]) {
  return setContext(Symbol(key), new TagListState(tagList));
}

export function getTagListState(key = DEFAULT_TAGLIST_KEY) {
  return getContext<ReturnType<typeof setTagListState>>(Symbol(key));
}
