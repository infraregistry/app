<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { icons, type Icon } from "./repo";

  interface Props {
    name?: keyof typeof icons;
    icon?: Icon;
    class?: string;
  }

  let { name, icon, class: className }: Props = $props();

  if (!icon) {
    icon = icons[name!];
  }
</script>

<div class={twMerge(icon.classes, className, "flex items-center justify-center")}>
  {@html icon.value}
</div>
