<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card";
  import { twMerge } from "tailwind-merge";

  type Props = {
    title: string;
    description: string;
    label: string;
    class?: string;
  };

  let { title, description, label, class: className }: Props = $props();
</script>

<Card.Root class={twMerge("max-w-52", className)}>
  <Card.Header class="p-4">
    <Card.Title>{title}</Card.Title>
    <Card.Description class="text-slate-400">{description}</Card.Description>
  </Card.Header>
  <Card.Content class="p-4">
    <Button
      size="sm"
      class="w-full">{label}</Button>
  </Card.Content>
</Card.Root>
