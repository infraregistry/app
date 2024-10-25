<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import { modalManager } from "$lib/shared/modals";
  import { Subject } from "rxjs";
  import type { ConfirmOptions } from "./confirm";

  type Props = {
    options: ConfirmOptions;
    subject: Subject<boolean>;
  };

  let { options, subject }: Props = $props();
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>{options.title}</Card.Title>
    <Card.Description>{options.description}</Card.Description>
  </Card.Header>
  <Card.Content class="flex justify-end gap-2">
    <Button
      onclick={() => {
        subject.next(false);
        modalManager.close("confirm");
      }}
      variant="outline">Cancel</Button>
    <Button
      onclick={() => {
        subject.next(true);
        modalManager.close("confirm");
      }}
      variant="destructive">{options.label || "Continue"}</Button>
  </Card.Content>
</Card.Root>
