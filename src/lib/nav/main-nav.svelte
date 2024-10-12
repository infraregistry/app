<script>
  import { openSearch } from "$lib/components/search/search";
  import Button from "$lib/components/ui/button/button.svelte";
  import { DropdownMenu, DropdownMenuTrigger } from "$lib/components/ui/dropdown-menu";
  import DropdownMenuContent from "$lib/components/ui/dropdown-menu/dropdown-menu-content.svelte";
  import DropdownMenuItem from "$lib/components/ui/dropdown-menu/dropdown-menu-item.svelte";
  import { sessions } from "$lib/sessions/sessions.svelte";
  import { CommandIcon, UserCircle, LogOutIcon } from "lucide-svelte";
  import { link, push } from "svelte-spa-router";
</script>

<nav class={"flex w-full items-center justify-between border-b p-3 px-4"}>
  <div class="flex items-center gap-2">
    <!-- svelte-ignore a11y_missing_attribute -->
    <a use:link={"/"} class="text-foreground rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors">Dashboard</a>
    <!-- svelte-ignore a11y_missing_attribute -->
    <a use:link={"/"} class="text-foreground rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors">Settings</a>
  </div>
  <div class="flex flex-row items-center gap-2">
    {#if sessions.isLoggedIn}
      <Button onclick={openSearch} variant="ghost" class="text-muted-foreground gap-20 border">
        <span>Search here...</span>
        <div class="flex items-center gap-1 text-xs">
          <CommandIcon size={12} />
          K
        </div>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" class="text-muted-foreground rounded-full border px-2 py-2">
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
              <span class="text-muted-foreground text-xs">Logout</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    {:else}
      <Button onclick={() => push("/login")} variant="ghost" class="text-muted-foreground border">Login</Button>
      k
    {/if}
  </div>
</nav>
