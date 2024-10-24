<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import BrandCard from "$lib/sessions/BrandCard.svelte";
  import AuthForm from "../../components/sessions/AuthForm.svelte";
  import { FormContext } from "../../components/sessions/sessions.type";
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
      <AuthForm context={FormContext.LOGIN} />
      <p class="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our
        <a href="/terms" class="underline underline-offset-4 hover:text-primary"> Terms of Service </a>
        and
        <a href="/privacy" class="underline underline-offset-4 hover:text-primary"> Privacy Policy </a>
        .
      </p>
    </div>
  </div>
</div>
