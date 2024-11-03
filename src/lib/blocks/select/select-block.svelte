<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Label } from "$lib/components/ui/label";
  import * as Select from "$lib/components/ui/select";
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>Product Status</Card.Title>
  </Card.Header>
  <Card.Content>
    <div class="grid gap-6">
      <div class="grid gap-3">
        <Label for="status">Status</Label>
        <Select.Root type="single">
          <Select.Trigger
            id="status"
            aria-label="Select status">
            <Select.Value placeholder="Select status" />
          </Select.Trigger>
          <Select.Content>
            <Select.Item
              value="draft"
              label="Draft">Draft</Select.Item>
            <Select.Item
              value="published"
              label="Active">Active</Select.Item>
            <Select.Item
              value="archived"
              label="Archived">Archived</Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  </Card.Content>
</Card.Root>
