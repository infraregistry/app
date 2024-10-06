<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Dialog from "$lib/components/ui/dialog";
  import { Form, Input, maxLength, minLength, Textarea } from "@svelte.codes/forms";
  import Confetti from "svelte-confetti";

  const form = new Form({
    controls: [
      {
        name: "name",
        placeholder: "Enter a property name..",
        validators: [minLength(1), maxLength(255)]
      },
      {
        name: "description",
        placeholder: "Describe this property.."
        // validators: [maxLength(255)]
      }
    ]
  });

  let valid = $derived(form.valid);

  form.controls[0].value.subscribe((value) => {
    console.log(value);
  });
  form.valid.subscribe((valid) => {
    console.log(valid);
  });
  const create = () => {
    form.getValues().subscribe((values) => {
      console.log(values);
    });
    // .unsubscribe();
    // modalManager.close("create-property");
  };
</script>

<Confetti />

<Dialog.Root id="create-property">
  <Dialog.Content class="w-96">
    <Dialog.Header class="gap-1">
      <Dialog.Title>Create Property</Dialog.Title>
      <Dialog.Description>Use properties to attach metadata to components.</Dialog.Description>
    </Dialog.Header>
    <Input control={form.getControl("name")} />
    <Textarea control={form.getControl("description")} class="h-20" />
    <Dialog.Footer>
      {$valid}
      <Button on:click={create} variant="success" class="w-full">Create</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
