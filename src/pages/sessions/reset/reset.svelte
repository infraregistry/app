<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import BrandCard from "$lib/sessions/BrandCard.svelte";

  // TODO: maybe make this a store later on
  let codeSent = $state(false);
</script>

<div class="flex h-screen w-full items-center">
  <BrandCard />
  <div class="mx-auto lg:p-8">
    <div class="absolute right-12 top-10 flex items-center gap-1">
      <Button
        href="/#/register"
        variant="ghost"
        size="sm">Register</Button>
      <Button
        href="/#/login"
        variant="ghost"
        size="sm">Login</Button>
    </div>
    <div class="mx-auto flex w-full flex-col space-y-2 sm:w-[350px]">
      {#if !codeSent}
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl font-semibold tracking-tight">Reset your password..</h1>
          <p class="text-sm text-muted-foreground">We just need to send you a 6-digit code, please enter the email associated with your account below:</p>
          <Label
            class="sr-only"
            for="email">Email</Label>
          <Input
            id="email"
            placeholder="name@example.com"
            type="email"
            autocapitalize="none"
            autocomplete="email"
            autocorrect="off" />
        </div>
        <Button
          type="submit"
          onclick={() => (codeSent = true)}>Send Password Reset</Button>
      {:else}
        <div class="flex flex-col space-y-2">
          <h1 class="text-2xl font-semibold tracking-tight">Enter verification code..</h1>
          <p class="text-sm text-muted-foreground">
            We sent a 6-digit code to name@example.com. Please copy that code and input it below or click the link in the message:
          </p>
          <Label
            class="sr-only"
            for="code">Code</Label>
          <Input
            id="text"
            placeholder="AZQ-WDG"
            type="text"
            autocapitalize="none"
            autocorrect="off" />
        </div>
        <Button type="submit">Confirm</Button>
        <div class="ml-auto">
          <Button
            variant="ghost"
            size="sm">Resend</Button>
        </div>
      {/if}
    </div>
  </div>
</div>
