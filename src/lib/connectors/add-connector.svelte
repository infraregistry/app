<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Dialog from "$lib/components/ui/dialog";
  import { Form, FormContainer, FormTextField, FormTextarea } from "@svelte.codes/form-manager";
  import Confetti from "svelte-confetti";
  import { writable } from "svelte/store";
  import { connectors, type Connector } from "./connectors";

  const form = new Form({
    name: "add-connector",
    fields: {
      name: {
        name: "name",
        required: true
      },
      description: {
        name: "description",
        required: true
      }
    }
  });

  let selected = writable<Connector>(null);
  selected.set(connectors[0]);
  // loadingOpen("Adding connector...", 6000);
  // setTimeout(() => {
  //   confettiStore.set(true);
  // }, 2000);
</script>

<Confetti />

<Dialog.Root id="add-connector">
  <Dialog.Content class="w-96">
    <Dialog.Header class="mb-2 gap-1">
      <Dialog.Title>Add Connector</Dialog.Title>
      <Dialog.Description>Connect your data source to servicecatalog.io.</Dialog.Description>
    </Dialog.Header>
    {#if !$selected}
      <div class="flex flex-col rounded-lg border">
        <div onclick={() => ($selected = connectors[0])} class:selected={$selected?.id === connectors[0].id} class="selected flex h-[120px] w-full cursor-pointer items-center justify-center border-b hover:bg-zinc-900/50">
          <img src="azure.svg" class="w-[200px]" />
        </div>
        <div onclick={() => ($selected = connectors[1])} class:selected={$selected?.id === connectors[1].id} class="flex h-[120px] w-full cursor-pointer items-center justify-center border-b hover:bg-zinc-900/50">
          <img src="aws.svg" class="w-[120px]" />
        </div>
        <div onclick={() => ($selected = connectors[2])} class:selected={$selected?.id === connectors[2].id} class="flex h-[120px] w-full cursor-pointer items-center justify-center hover:bg-zinc-900/50">
          <img src="google.svg" class="w-[300px]" />
        </div>
      </div>
    {/if}

    <FormContainer
      {form}
      classes=""
      onSubmit={() => {
        console.log(form.values);
      }}>
      <div class="flex items-center justify-center border bg-zinc-900/50">
        <img src="{$selected?.icon}.svg" class="w-[200px]" />
      </div>
      <div class="mt-6 grid">
        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-300">New Connector Name</span>
          <FormTextField autocomplete="off" manager={form} name="name" class="w-full" placeholder="My Service Principal" />
        </label>
      </div>
      <div class="grid">
        <label class="flex flex-col gap-1">
          <span class="text-sm text-slate-300">Service Principal Credentials</span>
          <FormTextarea name="description" manager={form} placeholder={$selected.placeholder} class="h-[150px]" />
          <p class="text-xs text-slate-500">Click <a href="">here</a> for instructions.</p>
        </label>
      </div>
    </FormContainer>
    <div class="flex justify-between">
      <Button variant="outline" class="text-slate-500">Cancel</Button>
      <div class="flex gap-2">
        <Button variant="outline" class="text-slate-100">Back</Button>
        <Button variant="success" disabled={!$selected} class="">Add Connector</Button>
      </div>
    </div>
  </Dialog.Content>
</Dialog.Root>

<style lang="scss">
  .selected {
    background-color: #131313;
  }
</style>
