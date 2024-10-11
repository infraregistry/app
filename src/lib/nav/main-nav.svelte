<script>
  import Button from "$lib/components/ui/button/button.svelte";
  import { CommandIcon } from "lucide-svelte";
  import { link, push } from "svelte-spa-router";
</script>

<nav class={"flex h-14 w-full items-center justify-between border-b px-4"}>
  <div class="flex items-center gap-2">
    <!-- svelte-ignore a11y_missing_attribute -->
    <a use:link={"/"} class="text-foreground rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors">Dashboard</a>
    <!-- svelte-ignore a11y_missing_attribute -->
    <a use:link={"/"} class="text-foreground rounded-lg border px-2.5 py-0.5 text-xs font-semibold transition-colors">Settings</a>
  </div>
  <div class="flex flex-row items-center gap-2">
    <Button variant="ghost" class="text-muted-foreground gap-20 border">
      <span>Search here...</span>
      <div class="flex items-center gap-1 text-xs">
        <CommandIcon size={12} />
        K
      </div>
    </Button>
    <Button onclick={() => push("/login")} variant="ghost" class="text-muted-foreground border">Login</Button>
  </div>
</nav>
