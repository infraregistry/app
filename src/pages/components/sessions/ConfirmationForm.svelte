<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import { LoaderCircleIcon } from "lucide-svelte";
  import { toast } from "svelte-sonner";
  import { sessions } from "$lib/sessions/sessions.svelte";
  import { registerClient } from "src/api/register";
  import { goto } from "@mateothegreat/svelte5-router";

  let isLoadingConfirmation = $state(false);
  let { email } = $props<{ email: string }>();

  async function handleConfirmation(
    e: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement;
    }
  ) {
    e.preventDefault();
    isLoadingConfirmation = true;

    const { code } = Object.fromEntries(new FormData(e.currentTarget)) as {
      code: string;
    };

    registerClient
      .confirm({
        code,
        email
      })
      .subscribe({
        next: ({ loading, data }) => {
          if (!loading && data) {
            toast.success("Created account successfully");

            // @ts-expect-error TODO: return data response from fetch instead of the whole object
            sessions.register(data.data.token);
            goto("/");
          }
        },
        error: (error) => {
          if (error) {
            toast.error(error.message);
          }
        },
        complete: () => {
          isLoadingConfirmation = false;
        }
      });
  }
</script>

<div class="grid gap-6">
  <div class="flex flex-col gap-1">
    <h1 class="text-2xl font-semibold tracking-tight">Confirm your email</h1>
    <p class="text-muted-foreground text-xs">Enter the confirmation code we sent to your email</p>
  </div>
  <form onsubmit={handleConfirmation}>
    <div class="grid gap-2">
      <div class="grid gap-1">
        <Label
          class="sr-only"
          for="code">Confirmation Code</Label>
        <Input
          id="code"
          placeholder="Enter confirmation code"
          type="text"
          autocapitalize="none"
          autocomplete="off"
          name="code"
          disabled={isLoadingConfirmation} />
      </div>
      <Button
        type="submit"
        disabled={isLoadingConfirmation}>
        {#if isLoadingConfirmation}
          <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
        {/if}
        Verify Email
      </Button>
    </div>
  </form>
</div>
