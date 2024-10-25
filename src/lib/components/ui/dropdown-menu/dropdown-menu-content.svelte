<script lang="ts">
  import { cn, flyAndScale } from "$lib/utils.js";
  import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";

  type $$Props = DropdownMenuPrimitive.ContentProps;

  interface Props {
    [key: string]: any;
  }

  let { class: className = undefined, sideOffset = 4, transition = flyAndScale, transitionConfig = undefined, children, ...rest }: Props = $props();
</script>

<DropdownMenuPrimitive.Content {transition} {transitionConfig} {sideOffset} class={cn("z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none", className)} {...rest} on:keydown preventScroll={false}>
  {@render children?.()}
</DropdownMenuPrimitive.Content>
