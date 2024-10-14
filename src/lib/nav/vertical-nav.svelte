<script lang="ts">
  import { Home, LineChart, Package, Package2, ShoppingCart, UsersRound } from "lucide-svelte";

  import { openSearch } from "$lib/components/search/search.svelte";
  import { Button } from "$lib/components/ui/button";
  import { DropdownMenu, DropdownMenuTrigger } from "$lib/components/ui/dropdown-menu";
  import DropdownMenuContent from "$lib/components/ui/dropdown-menu/dropdown-menu-content.svelte";
  import DropdownMenuItem from "$lib/components/ui/dropdown-menu/dropdown-menu-item.svelte";
  import * as Sheet from "$lib/components/ui/sheet";
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import { sessions } from "$lib/sessions/sessions.svelte";
  import { LogOutIcon, PanelLeft, Search, UserCircle } from "lucide-svelte";
  import { link } from "svelte-spa-router";
</script>

<aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
  <nav class="flex flex-col items-center gap-4 px-2 py-4">
    <a href="##" class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
      <Package2 class="h-4 w-4 transition-all group-hover:scale-110" />
      <span class="sr-only">Acme Inc</span>
    </a>
    <Tooltip.Root on:click={() => openSearch({ data: [] })}>
      <Tooltip.Trigger asChild let:builder>
        <div class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" use:builder.action {...builder}>
          <Search class="h-5 w-5" />
        </div>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Dashboard</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a href="##" class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" use:builder.action {...builder}>
          <Home class="h-5 w-5" />
          <span class="sr-only">Dashboard</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Dashboard</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a use:link={"/components"} class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8" use:builder.action {...builder}>
          <ShoppingCart class="h-5 w-5" />
          <span class="sr-only">Orders</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Orders</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a href="##" class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" use:builder.action {...builder}>
          <Package class="h-5 w-5" />
          <span class="sr-only">Products</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Products</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a href="##" class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" use:builder.action {...builder}>
          <UsersRound class="h-5 w-5" />
          <span class="sr-only">Customers</span>
        </a>
      </Tooltip.Trigger>
      <Tooltip.Content side="right">Customers</Tooltip.Content>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <a href="##" class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8" use:builder.action {...builder}>
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
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" class="rounded-full border px-2 py-2 text-muted-foreground">
              <UserCircle size={16} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onclick={() => {
                sessions.logout();
              }}>
              <div class="flex flex-row items-center gap-2">
                <LogOutIcon size={12} />
                <span class="text-xs text-muted-foreground">Logout</span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
      <a href="##" class="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base">
        <Package2 class="h-5 w-5 transition-all group-hover:scale-110" />
        <span class="sr-only">Acme Inc</span>
      </a>
      <a href="##" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
        <Home class="h-5 w-5" />
        Dashboard
      </a>
      <a href="##" class="flex items-center gap-4 px-2.5 text-foreground">
        <ShoppingCart class="h-5 w-5" />
        Orders
      </a>
      <a href="##" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
        <Package class="h-5 w-5" />
        Products
      </a>
      <a href="##" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
        <UsersRound class="h-5 w-5" />
        Customers
      </a>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" class="rounded-full border px-2 py-2 text-muted-foreground">
            <UserCircle size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onclick={() => {
              sessions.logout();
            }}>
            <div class="flex flex-row items-center gap-2">
              <LogOutIcon size={12} />
              <span class="text-xs text-muted-foreground">Logout</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  </Sheet.Content>
</Sheet.Root>
