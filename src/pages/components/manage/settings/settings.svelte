<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Textarea } from "$lib/components/ui/textarea";
</script>

<div class="m-2 flex gap-16">
  <div class="text-xl font-semibold text-slate-400">Settings</div>
</div>
<div class="m-2 flex gap-16">
  <div class="">
    <nav class="grid gap-4 text-sm text-muted-foreground" data-x-chunk-container="chunk-container after:right-0">
      <a href="##" class="font-semibold text-primary"> General </a>
      <a href="##">Security</a>
      <a href="##">Integrations</a>
      <a href="##">Support</a>
      <a href="##">Organizations</a>
      <a href="##">Advanced</a>
    </nav>
  </div>
  <div class="flex-1">
    <Card.Root>
      <Card.Header>
        <Card.Title>Product Details</Card.Title>
        <Card.Description>Lipsum dolor sit amet, consectetur adipiscing elit</Card.Description>
      </Card.Header>
      <Card.Content>
        <div class="grid gap-6">
          <div class="grid gap-3">
            <Label for="name">Name</Label>
            <Input id="name" type="text" class="w-full" value="Gamer Gear Pro Controller" />
          </div>
          <div class="grid gap-3">
            <Label for="description">Description</Label>
            <Textarea id="description" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc." class="min-h-32" />
          </div>
        </div>
      </Card.Content>
    </Card.Root>
  </div>
</div>
