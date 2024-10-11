<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import { LoaderCircleIcon, GithubIcon } from "lucide-svelte";
  import { FormContext } from "./sessions.type";
  import { link } from "svelte-spa-router";
  import { sessions } from "$lib/sessions/sessions.svelte";

  export let context: FormContext;

  let isLoading = false;

  async function onSubmit() {
    isLoading = true;
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        sessions.register("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        resolve();
      }, 2000);
    }).finally(() => {
      isLoading = false;
    });
  }
</script>

<div class="grid">
  <form on:submit|preventDefault={onSubmit}>
    <div class="grid gap-2">
      <div class="grid gap-1">
        <Label class="sr-only" for="email">Email</Label>
        <Input id="email" placeholder="name@example.com" type="email" autocapitalize="none" autocomplete="email" autocorrect="off" disabled={isLoading} />
      </div>
      <Button type="submit" disabled={isLoading}>
        {#if isLoading}
          <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
        {/if}
        Sign In with Email
      </Button>
      <!-- svelte-ignore a11y_missing_attribute -->
      {#if context === FormContext.LOGIN}
        <!-- svelte-ignore a11y_missing_attribute -->
        <a use:link={"/register"} class="text-muted-foreground cursor-pointer text-center text-xs hover:underline">Don't have an account? Create an account</a>
      {:else}
        <a use:link={"/login"} class="text-muted-foreground cursor-pointer text-center text-xs hover:underline">Already have an account?</a>
      {/if}
    </div>
  </form>
  <div class="relative my-4">
    <div class="absolute inset-0 flex items-center">
      <span class="w-full border-t"></span>
    </div>
    <div class="relative flex justify-center text-xs uppercase">
      <span class="bg-background text-muted-foreground rounded-sm px-2 font-bold"> Or continue with </span>
    </div>
  </div>
  <Button variant="outline" type="button" disabled={isLoading}>
    {#if isLoading}
      <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
    {:else}
      <GithubIcon class="mr-2 h-4 w-4" />
    {/if}
    GitHub
  </Button>
</div>
