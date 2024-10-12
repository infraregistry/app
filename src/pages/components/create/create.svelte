<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "$lib/components/ui/dialog";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { type ModalInstance } from "@mateothegreat/svelte5-modal-manager";

  let { instance }: { instance: ModalInstance } = $props();

  console.log(instance);
  let open = true;
</script>

<div class="h-96 w-96 bg-red-500">
  Create component dialog
  <Dialog bind:open>
    <DialogTrigger asChild let:builder>
      <Button builders={[builder]}>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Enter Your Information</DialogTitle>
        <DialogDescription>Please provide your name and email address.</DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">Name</Label>
          <Input id="name" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right">Email</Label>
          <Input id="email" type="email" class="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button>Submit</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  <button on:click={() => instance.manager.close(instance.config.id)}>Close</button>
</div>
