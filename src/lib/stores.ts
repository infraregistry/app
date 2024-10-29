import { writable } from "svelte/store";
import type { Tag } from "./types";

export const testTags = writable<Tag[]>([
  { label: "west-europe", color: "bg-green-600", disabled: false },
  { label: "some-tag", color: "bg-gray-500", disabled: false },
  { label: "xo", color: "bg-blue-500", disabled: false },
  { label: "asdf", color: "bg-sky-500", disabled: false },
  { label: "foobars", color: "bg-pink-500", disabled: false },
  { label: "foo", color: "bg-zinc-500", disabled: true },
  { label: "datacenter-2", color: "bg-indigo-500", disabled: false }
]);
