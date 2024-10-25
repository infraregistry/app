export interface Message {
  text: string;
  author: string;
}

export interface Change {
  field: string;
  value: {
    previous: string;
    current: string;
  };
}

export type EntryKind = "change" | "message";

export interface TimelineEntryBase {
  id: string;
  kind: EntryKind;
  date: Date;
}

export interface ChangeEntry extends TimelineEntryBase {
  kind: "change";
  content: Change;
}

export interface MessageEntry extends TimelineEntryBase {
  kind: "message";
  content: Message;
}

export type TimelineEntry = ChangeEntry | MessageEntry;

export interface Tag {
  label: string;
  color: string;
  disabled: boolean;
}

export type TagDictionary = {
  [key: string]: string;
};
