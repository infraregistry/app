<script lang="ts">
  import { Home, LineChart, Package, Package2, Settings, ShoppingCart, UsersRound } from "lucide-svelte";

  import { openSearch } from "$lib/components/search/search";
  import { Button } from "$lib/components/ui/button";
  import * as Sheet from "$lib/components/ui/sheet";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { PanelLeft, Search } from "lucide-svelte";
  import { link } from "svelte-spa-router";
</script>

<aside class="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r sm:flex">
  <nav class="flex flex-col items-center gap-4 px-2 py-4">
    <a href="##" class="bg-primary text-primary-foreground group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:h-8 md:w-8 md:text-base">
      <Package2 class="h-4 w-4 transition-all group-hover:scale-110" />
      <span class="sr-only">Acme Inc</span>
    </a>
    <Tooltip.Root on:click={openSearch}>
      <Tooltip.Trigger asChild let:builder>
        <div href="##" class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8" use:builder.action {...builder}>
          <Search class="h-5 w-5" />
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Dashboard</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a href="##" class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8" use:builder.action {...builder}>
          <Home class="h-5 w-5" />
          <span class="sr-only">Dashboard</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Dashboard</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a use:link={"/components"} class="bg-accent text-accent-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8" use:builder.action {...builder}>
          <ShoppingCart class="h-5 w-5" />
          <span class="sr-only">Orders</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Orders</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a href="##" class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8" use:builder.action {...builder}>
          <Package class="h-5 w-5" />
          <span class="sr-only">Products</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Products</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a href="##" class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8" use:builder.action {...builder}>
          <UsersRound class="h-5 w-5" />
          <span class="sr-only">Customers</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Customers</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a href="##" class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8" use:builder.action {...builder}>
          <LineChart class="h-5 w-5" />
          <span class="sr-only">Analytics</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Analytics</Tooltip.Content>
    </Tooltip.Root>
  </nav>
  <nav class="mt-auto flex flex-col items-center gap-4 px-2 py-4">
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a href="##" class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8" use:builder.action {...builder}>
          <Settings class="h-5 w-5" />
          <span class="sr-only">Settings</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Settings</Tooltip.Content>
    </Tooltip.Root>
  </nav>
</aside>

<Sheet.Root>
  <Sheet.Trigger asChild let:builder>
    <Button builders={[builder]} size="icon" variant="outline" class="sm:hidden">
      <PanelLeft class="h-5 w-5" />
      <span class="sr-only">Toggle Menu</span>
    </Button>
  </Sheet.Trigger>
  <Sheet.Content side="left" class="sm:max-w-xs">
    <nav class="grid gap-6 text-lg font-medium">
      <a href="##" class="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base">
        <Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5">
        <Home class="h-5 w-5" />
        Dashboard
      </a>
      <a href="##" class="text-foreground flex items-center gap-4 px-2.5">
        <ShoppingCart class="h-5 w-5" />
        Orders
      </a>
      <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5">
        <Package class="h-5 w-5" />
        Products
      </a>
      <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5">
        <UsersRound class="h-5 w-5" />
        Customers
      </a>
      <a href="##" class="text-muted-foreground hover:text-foreground flex items-center gap-4 px-2.5">
        <LineChart class="h-5 w-5" />
        Settings
      </a>
    </nav>
  </Sheet.Content>
</Sheet.Root>
