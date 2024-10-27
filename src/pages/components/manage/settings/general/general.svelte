<script lang="ts">
  import { openConfirm } from "$lib/components/confirm/confirm";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import * as Form from "@mateothegreat/svelte5-forms";
  import { FormInstance, minLength } from "@mateothegreat/svelte5-forms";

  interface ComponentSettings {
    name: string;
    description: string;
    enabled: boolean;
  }

  const items = [
    { value: "mango", label: "Mango" },
    { value: "watermelon", label: "Watermelon" },
    { value: "apple", label: "Apple" }
  ];

  let form: FormInstance;

  const controls = $state([
    {
      name: "name",
      value: "mateothegreat",
      validators: [minLength(3)]
    },
    {
      name: "foobar",
      data: items,
      validators: [minLength(2)],
      displayFn: (data: (typeof items)[number]) => {
        return data.label;
      }
    },
    {
      name: "agree",
      validators: [minLength(2)]
    }
  ]);

  const onDeleteClick = () => {
    console.log(123);

    openConfirm({
      title: "Delete Component",
      description: "Are you sure you want to delete this component?",
      label: "Delete"
    }).subscribe((result) => {
      console.log(result);
    });
  };
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>Product Details</Card.Title>
    <Card.Description>Lipsum dolor sit amet, consectetur adipiscing elit</Card.Description>
  </Card.Header>
  <Card.Content>
    <!-- <div class="grid gap-6">
          <div class="grid gap-3">
            <Label for="name">Name</Label>
            <Input id="name" type="text" class="w-full" value="Gamer Gear Pro Controller" />
          </div>
          <div class="grid gap-3">
            <Label for="description">Description</Label>
            <Textarea id="description" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc." class="min-h-32" />
          </div>
        </div> -->
    <Form.Root bind:form {controls}>
      <Form.Group>
        <Form.Field>
          <Form.Header.Root>
            <Form.Header.Label>Name</Form.Header.Label>
            <Form.Header.Description>Foo bar baz pow.</Form.Header.Description>
          </Form.Header.Root>
          <Form.Controls.Input {form} name="name" />
        </Form.Field>
        <Form.Field>
          <Form.Header.Root>
            <Form.Header.Label>Foo Bar</Form.Header.Label>
            <Form.Header.Description>Foo bar baz pow.</Form.Header.Description>
          </Form.Header.Root>
          <Form.Controls.Select {form} placeholder="Select something cool.." name="foobar" type="multiple" prefix={selectPrefix} />
        </Form.Field>
      </Form.Group>
      <Form.Group>
        <Form.Field>
          <Form.Header.Root>
            <Form.Header.Label>Name</Form.Header.Label>
            <Form.Header.Description>Foo bar baz pow.</Form.Header.Description>
          </Form.Header.Root>
          <Form.Controls.Switch {form} name="agree" class="rounded-lg border-2 border-slate-800 bg-zinc-900/40 p-2">
            <span class="text-xs text-sky-500">I agree to be awesome.</span>
          </Form.Controls.Switch>
        </Form.Field>
      </Form.Group>
    </Form.Root>
  </Card.Content>
</Card.Root>
<Card.Root>
  <Card.Header>
    <Card.Title>Delete Component</Card.Title>
    <Card.Description>Permanently delete this component.</Card.Description>
  </Card.Header>
  <Card.Content>
    <Button onclick={onDeleteClick} variant="destructive">Delete</Button>
  </Card.Content>
</Card.Root>

{#snippet selectPrefix()}
  <div class="text-muted-foreground">x</div>
{/snippet}

<div class="w-96 rounded-lg bg-black p-4 shadow-xl">
  <pre class="text-xs text-slate-500">{JSON.stringify(form.values, null, 2)}</pre>
</div>
