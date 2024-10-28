import type { Editor, Range } from '@tiptap/core';
import { mount, unmount } from 'svelte';
import tippy, { type GetReferenceClientRect } from 'tippy.js';
import Slash from '../slash.svelte';

export interface SlashProps {
	editor: Editor;
	range: Range;
	items: CommandItem[];
}

export type SlashComponent = typeof Slash;

export type BaseProps = {
	editor: Editor;
	range: Range;
};

export interface CommandItem {
	title: string;
	subtitle: string;
	command: (props: { editor: Editor; range: Range }) => void;
}

export default {
	items: ({ query }: { query: string }) => {
		return [
			{
				title: 'Heading 1',
				subtitle: 'BIG heading',
				command: ({ editor, range }: BaseProps) => {
					editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run();
				}
			},
			{
				title: 'Heading 2',
				subtitle: 'Less Big heading',
				command: ({ editor, range }: BaseProps) => {
					editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run();
				}
			},
			{
				title: 'Heading 3',
				subtitle: 'Medium big heading',
				command: ({ editor, range }: BaseProps) => {
					editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run();
				}
			},
			{
				title: 'To Dos',
				subtitle: 'Create a to do list with checkboxes',
				command: ({ editor, range }: BaseProps) => {
					editor.chain().deleteRange(range).focus().toggleTaskList().run();
				}
			}
		]
			.filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()))
			.slice(0, 10);
	},

	render: () => {
		let component: any;
		let popup: any;
		let selected = false;

		return {
			onStart: (props: BaseProps & { items: any[]; clientRect: GetReferenceClientRect }) => {
				let element = document.createElement('div');

				component = mount(Slash, {
					target: element,
					props: {
						editor: props.editor,
						range: props.range,
						items: props.items
					}
				});

				popup = tippy('body', {
					getReferenceClientRect: props.clientRect,
					appendTo: () => document.body,
					content: element,
					showOnCreate: true,
					interactive: true,
					trigger: 'manual',
					placement: 'bottom-start'
				});
			},

			onUpdate(props: BaseProps & { items: any[]; clientRect: GetReferenceClientRect }) {
				component.$set({
					editor: props.editor,
					range: props.range,
					items: props.items
				});
				if (!props.clientRect) {
					return;
				}

				popup[0].setProps({
					getReferenceClientRect: props.clientRect
				});
			},

			onKeyDown(props: { event: KeyboardEvent }) {
				if (props.event.key === 'Escape') {
					popup[0].hide();
					return true;
				}
				if (props.event.key === 'Enter') {
					selected = true;
					props.event.preventDefault();
					return true;
				}
			},

			onExit() {
				popup[0].destroy();
				unmount(component);
			}
		};
	}
};
