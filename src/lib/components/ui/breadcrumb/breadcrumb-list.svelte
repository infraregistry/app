<script lang="ts">
	import type { HTMLOlAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLOlAttributes & {
		el?: HTMLOListElement;
	};

	interface Props { [key: string]: any }

	let { el = $bindable(undefined), class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<ol
	bind:this={el}
	class={cn(
		"flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
		className
	)}
	{...rest}
>
	{@render children?.()}
</ol>
