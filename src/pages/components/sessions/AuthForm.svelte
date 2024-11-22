<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import { LoaderCircleIcon, GithubIcon } from "lucide-svelte";
  import { FormContext } from "./sessions.type";
  import { link } from "svelte-spa-router";
  import { sessions } from "$lib/sessions/sessions.svelte";

  let { context }: { context: FormContext } = $props();

  let isLoading = $state(false);

  async function onsubmit() {
    isLoading = true;
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        sessions.register(
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE5OTk5OTk5OTl9.0OKxx4Aq9H0v0u4k6Ey7-V0fuxAETl-Z_PAeP8nFLPg"
        );
        resolve();
      }, 2000);
    }).finally(() => {
      isLoading = false;
    });
  }
</script>

<div class="grid">
  <form {onsubmit}>
    <div class="grid gap-2">
      <div class="grid gap-1">
        <Label
          class="sr-only"
          for="email">Email</Label>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autocapitalize="none"
          autocomplete="email"
          autocorrect="off"
          disabled={isLoading} />
        {#if context === FormContext.LOGIN}
          <Input
            id="password"
            placeholder="*******************"
            type="password"
            autocapitalize="none"
            autocomplete="password"
            autocorrect="off"
            disabled={isLoading} />
        {/if}
      </div>
      <Button
        type="submit"
        disabled={isLoading}>
        {#if isLoading}
          <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
        {/if}
        Sign In with Email
      </Button>
      <!--
        {#if context === FormContext.LOGIN}
          <a href="/register" use:link={"/register"} class="cursor-pointer text-center text-xs text-muted-foreground hover:underline">Don't have an account? Create an account</a>
        {:else}
          <a href="/login" use:link={"/login"} class="cursor-pointer text-center text-xs text-muted-foreground hover:underline">Already have an account?</a>
        {/if}
      -->
    </div>
  </form>
  <div class="relative my-4">
    <div class="absolute inset-0 flex items-center">
      <span class="w-full border-t"></span>
    </div>
    <div class="relative flex justify-center text-xs uppercase">
      <span class="rounded-sm bg-background px-2 font-bold text-muted-foreground"> Or continue with </span>
    </div>
  </div>
  <div class="flex flex-col gap-4">
    <Button
      variant="outline"
      type="button"
      disabled={isLoading}>
      {#if isLoading}
        <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
      {:else}
        <GithubIcon class="mr-2 h-4 w-4" />
      {/if}
      Google
    </Button>
    <Button
      variant="outline"
      type="button"
      disabled={isLoading}>
      {#if isLoading}
        <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
      {:else}
        <GithubIcon class="mr-2 h-4 w-4" />
      {/if}
      GitHub
    </Button>
  </div>
</div>
