<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLAttributes<HTMLSpanElement> & {
		el?: HTMLSpanElement;
	};

	interface Props { [key: string]: any }

	let { el = $bindable(undefined), class: className = undefined, children, ...rest }: Props = $props();
	
</script>

<span
	bind:this={el}
	role="link"
	aria-disabled="true"
	aria-current="page"
	class={cn("font-normal text-foreground", className)}
	{...rest}
>
	{@render children?.()}
</span>
