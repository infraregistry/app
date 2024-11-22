<script lang="ts">
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import { Textarea } from "$lib/components/ui/textarea";
  import type { Writable } from "svelte/store";
  import type { Component } from "../../api/components";

  let component: Writable<Component>;
</script>

<Card.Root>
  <Card.Header>
    <Card.Description class="text-gray-700">Component Information</Card.Description>
  </Card.Header>
  <Card.Content>
    <div class="grid gap-6">
      <div class="grid gap-3">
        <Label for="name">Name</Label>
        <Input
          id="name"
          type="text"
          class="w-full"
          value={$component.name} />
      </div>
      <div class="grid gap-3">
        <Label for="description">Description</Label>
        <Textarea
          id="description"
          value={$component.description}
          class="min-h-24" />
      </div>
    </div>
  </Card.Content>
</Card.Root>
