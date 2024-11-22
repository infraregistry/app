<script lang="ts">
  import type { toggleVariants } from "$lib/components/ui/toggle/index.js";
  import { cn } from "$lib/utils.js";
  import { ToggleGroup as ToggleGroupPrimitive } from "bits-ui";
  import type { VariantProps } from "tailwind-variants";
  import { setToggleGroupCtx } from "./index.js";

  type T = $$Generic<"single" | "multiple">;
  type $$Props = ToggleGroupPrimitive.Props<T> & VariantProps<typeof toggleVariants>;

  interface Props {
    [key: string]: any;
  }

  let { class: className = undefined, variant = "default", size = "default", value = $bindable(undefined), children, ...rest }: Props = $props();

  setToggleGroupCtx({
    variant,
    size
  });
</script>

<ToggleGroupPrimitive.Root
  class={cn("flex items-center justify-center gap-1", className)}
  bind:value
  {...rest}
  let:builder>
  {@render children?.({ builder })}
</ToggleGroupPrimitive.Root>
