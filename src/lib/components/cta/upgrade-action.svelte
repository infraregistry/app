<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card";

  type Props = {
    title: string;
    description: string;
  };
</script>

<Card.Root class="flex flex-col gap-1">
  <Card.Header class="p-3 pt-2">
    <Card.Title class="text-base text-fuchsia-500">Upgrade to Pro, free!&nbsp;&nbsp;🚀</Card.Title>
    <Card.Description class="max-w-40 text-xs text-slate-400">Unlock all features and get unlimited access to your infraregistry.</Card.Description>
  </Card.Header>
  <Card.Content class="flex justify-end px-3">
    <Button
      size="sm"
      class="w-full bg-sky-600 text-white">Free 30-day trial</Button>
  </Card.Content>
</Card.Root>
