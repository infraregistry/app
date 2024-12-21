<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import BrandCard from "$lib/sessions/BrandCard.svelte";
  import ConfirmationForm from "$pages/components/sessions/ConfirmationForm.svelte";
  import { GithubIcon, LoaderCircleIcon } from "lucide-svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import { registerClient } from "src/api/register";
  import { toast } from "svelte-sonner";

  let isLoading = $state(false);
  let isConfirmation = $state(false);
  let userEmail = $state("");

  async function handleRegister(
    e: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement;
    }
  ) {
    e.preventDefault();
    isLoading = true;
    const { email, password } = Object.fromEntries(new FormData(e.currentTarget)) as {
      email: string;
      password: string;
    };

    registerClient
      .create({
        email,
        password
      })
      .subscribe({
        next: ({ loading, data }) => {
          if (!loading && data) {
            toast.success("Sent you an email with confirmation code");
            isConfirmation = true;
            userEmail = email;
          }
        },
        error: ({ error }) => {
          if (error) {
            toast.error(error.message);
          }
          isLoading = false;
        },
        complete: () => {
          isLoading = false;
        }
      });
  }
</script>

<div class="flex h-screen w-full items-center">
  <BrandCard />
  <div class="mx-auto lg:p-8">
    <div class="absolute right-12 top-10">
      <Button
        href="/login"
        variant="ghost"
        size="sm">Login</Button>
    </div>
    <div class="mx-auto flex w-full flex-col space-y-6 sm:w-[350px]">
      <div class="flex flex-col space-y-2">
        <h1 class="text-2xl font-semibold tracking-tight">Tell us how to reach you...</h1>
        <p class="text-muted-foreground text-sm">
          Register for your free infraregistry account with just an email address!
          <b> No credit card required. </b>
        </p>
      </div>
      <div class="grid">
        {#if !isConfirmation}
          <form onsubmit={handleRegister}>
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
                  name="email"
                  disabled={isLoading} />
                <Label
                  class="sr-only"
                  for="password">Email</Label>
                <Input
                  id="password"
                  placeholder="*******************"
                  type="password"
                  autocapitalize="none"
                  autocomplete="password"
                  autocorrect="off"
                  name="password"
                  disabled={isLoading} />
              </div>
              <Button
                type="submit"
                disabled={isLoading}>
                {#if isLoading}
                  <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
                {/if}
                Sign up with Email
              </Button>
            </div>
          </form>
        {:else}
          <ConfirmationForm email={userEmail} />
        {/if}
        <div class="relative my-4">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t"></span>
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background text-muted-foreground rounded-sm px-2 font-bold"> Or continue with </span>
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

      <p class="text-muted-foreground px-8 text-center text-sm">
        By clicking continue, you agree to our
        <a
          href="/terms"
          class="hover:text-primary underline underline-offset-4">
          Terms of Service
        </a>
        and
        <a
          href="/privacy"
          class="hover:text-primary underline underline-offset-4">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  </div>
</div>
