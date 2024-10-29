<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import BrandCard from "$lib/sessions/BrandCard.svelte";
  import { sessions } from "$lib/sessions/sessions.svelte";
  import * as Form from "@mateothegreat/svelte5-forms";
  import { FormInstance, minLength } from "@mateothegreat/svelte5-forms";
  import { goto } from "@mateothegreat/svelte5-router";
  import { GithubIcon, LoaderCircleIcon } from "lucide-svelte";
  import { toast } from "svelte-sonner";

  let form: FormInstance;

  const controls = $state([
    {
      name: "email",
      validators: [minLength(8)]
    },
    {
      name: "password",
      validators: [minLength(8)]
    }
  ]);

  let isLoading = $state<boolean | "email" | "github" | "google">(false);

  const login = () => {
    isLoading = "email";
    sessions.login(form.values.email, form.values.password).subscribe((result) => {
      toast.success("Welcome back!");
      goto("/");
    });
  };
</script>

<div class="flex h-screen w-full items-center">
  <BrandCard />
  <div class="mx-auto lg:p-8">
    <div class="absolute right-12 top-10">
      <Button href="/#/register" variant="ghost" size="sm">Register</Button>
    </div>
    <div class="mx-auto flex w-full flex-col space-y-6 sm:w-[350px]">
      <div class="flex flex-col space-y-2">
        <h1 class="text-2xl font-semibold tracking-tight">Login to infraregistry</h1>
        <p class="text-sm text-muted-foreground">
          Forgot your password?
          <a href="/#/reset" class="underline underline-offset-4 hover:text-primary"> Click here</a>
          to reset it!
        </p>
      </div>
      <div class="">
        <div class="grid">
          <div class="grid gap-2">
            <Form.Root bind:form {controls}>
              <Form.Group>
                <Form.Field>
                  <Form.Controls.Input {form} name="email" placeholder="Enter your email address.." />
                  <Form.Controls.Input {form} name="password" placeholder="Enter your password.." type="password" />
                </Form.Field>
              </Form.Group>
            </Form.Root>
            <Button disabled={!form.valid || !form.values.email || isLoading} onclick={login}>
              {#if isLoading}
                <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
              {/if}
              Sign In with Email
            </Button>
          </div>
          <div class="relative my-4">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t"></span>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="rounded-sm bg-background px-2 font-bold text-muted-foreground"> Or continue with </span>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <Button variant="outline" type="button" disabled={isLoading}>
              {#if isLoading === "google"}
                <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
              {:else}
                <GithubIcon class="mr-2 h-4 w-4" />
              {/if}
              Google
            </Button>
            <Button variant="outline" type="button" disabled={isLoading}>
              {#if isLoading === "github"}
                <LoaderCircleIcon class="mr-2 h-4 w-4 animate-spin" />
              {:else}
                <GithubIcon class="mr-2 h-4 w-4" />
              {/if}
              GitHub
            </Button>
          </div>
        </div>
      </div>
      <p class="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our
        <a href="https://infraregistry.com/terms" target="_blank" class="underline underline-offset-4 hover:text-primary"> Terms of Service </a>
        and
        <a href="https://infraregistry.com/privacy" target="_blank" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </a>
        .
      </p>
    </div>
  </div>
</div>
