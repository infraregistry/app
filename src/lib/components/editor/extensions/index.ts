import Underline from "@tiptap/extension-underline";
import StarterKit from "@tiptap/starter-kit";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { ListItem } from "./custom/list-item";
import Slash from "./slash-command";
import suggestion from "./suggestion";

export const defaultExtensions = [
  StarterKit.configure({
    history: false,
    codeBlock: false
  }),
  Underline,
  Typography,
  ListItem,
  TaskList,
  TaskItem,
  TextAlign,
  Placeholder,
  Image,
  Link,
  // CodeBlockLowlight.configure({
  // 	// lowlight
  // }),
  Slash.configure({
    suggestion
  })
];
