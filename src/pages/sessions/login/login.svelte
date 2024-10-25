<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import BrandCard from "$lib/sessions/BrandCard.svelte";
  import * as Form from "@mateothegreat/svelte5-forms";
  import { FormInstance, minLength } from "@mateothegreat/svelte5-forms";

  let form: FormInstance;

  const controls = $state([
    {
      name: "email",
      validators: [minLength(3)]
    }
  ]);
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
        <Form.Root bind:form {controls}>
          <Form.Group>
            <Form.Field>
              <Form.Header.Root>
                <Form.Header.Label>Name</Form.Header.Label>
                <Form.Header.Description>Foo bar baz pow.</Form.Header.Description>
              </Form.Header.Root>
              <Form.Controls.Input {form} name="name" />
            </Form.Field>
            <Form.Field>
              <Form.Header.Root>
                <Form.Header.Label>Foo Bar</Form.Header.Label>
                <Form.Header.Description>Foo bar baz pow.</Form.Header.Description>
              </Form.Header.Root>
              <Form.Controls.Select {form} placeholder="Select something cool.." name="foobar" type="multiple" prefix={selectPrefix} />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field>
              <Form.Header.Root>
                <Form.Header.Label>Name</Form.Header.Label>
                <Form.Header.Description>Foo bar baz pow.</Form.Header.Description>
              </Form.Header.Root>
              <Form.Controls.Switch {form} name="agree" class="rounded-lg border-2 border-slate-800 bg-zinc-900/40 p-2">
                <span class="text-xs text-sky-500">I agree to be awesome.</span>
              </Form.Controls.Switch>
            </Form.Field>
          </Form.Group>
        </Form.Root>
      </div>
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
