<script lang="ts">
  import { type Props, buttonVariants } from "$lib/components/ui/button/index.js";
  import { cn } from "$lib/utils.js";
  import { Pagination as PaginationPrimitive } from "bits-ui";

  type $$Props = PaginationPrimitive.PageProps &
    Props & {
      isActive: boolean;
    };

  type $$Events = PaginationPrimitive.PageEvents;

  interface Props_1 { [key: string]: any }

  let {
    class: className = undefined,
    page = $bindable(),
    size = "icon",
    isActive = false,
    children,
    ...rest
  }: Props_1 = $props();

  
</script>

<PaginationPrimitive.Page
  bind:page
  class={cn(
    buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size
    }),
    className
  )}
  {...rest}
  on:click>
  {#if children}{@render children()}{:else}{page.value}{/if}
</PaginationPrimitive.Page>
