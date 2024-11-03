<script lang="ts">
  import { type ModalInstance } from "@mateothegreat/svelte5-modal-manager";

  let { instance }: { instance: ModalInstance } = $props();
</script>

<div class="h-96 w-96 bg-red-500">
  Create component dialog
  <!-- <Dialog bind:open>
    <DialogTrigger>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Enter Your Information</DialogTitle>
        <DialogDescription>Please provide your name and email address.</DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label
            for="name"
            class="text-right">Name</Label>
          <Input
            id="name"
            class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label
            for="email"
            class="text-right">Email</Label>
          <Input
            id="email"
            type="email"
            class="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <Button>Submit</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog> -->
  <button onclick={() => instance.close()}>Close</button>
</div>
