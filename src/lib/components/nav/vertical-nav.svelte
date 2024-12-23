<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { sessions } from "$lib/sessions/sessions.svelte";
  import type { iconStatics } from "$lib/shared/icons/icon-statics";
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import { goto, route } from "@mateothegreat/svelte5-router";
  import { Tooltip } from "bits-ui";
  import { toast } from "svelte-sonner";
  import { slide } from "svelte/transition";

  type Link = {
    href: string;
    icon: keyof typeof iconStatics;
    tooltip: string;
  };

  const links: Link[] = [
    { href: "/catalog", icon: "catalog", tooltip: "Service Catalog" },
    { href: "/components", icon: "components", tooltip: "Components" },
    { href: "/cmdb", icon: "cmdb", tooltip: "Change Management Database" },
    { href: "/integrations", icon: "integrations", tooltip: "Integrations" }
  ];
</script>

<aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background pt-4 sm:flex">
  <nav class="flex flex-col items-center gap-4">
    <div class="-mt-2 h-7">
      <a
        use:route
        href="/">
        <IconifyWrapper
          name="logo"
          size={8} />
      </a>
    </div>
    <div class="h-px w-full bg-zinc-800"></div>
  </nav>
  <nav class="flex flex-1 flex-col items-center gap-3.5 px-2 py-4">
    {#each links as l}
      <Tooltip.Provider>
        <Tooltip.Root delayDuration={200}>
          <Tooltip.Trigger class="">
            <a
              use:route
              href={l.href}>
              <IconifyWrapper
                name={l.icon}
                size={6} />
            </a>
          </Tooltip.Trigger>
          <Tooltip.Content
            forceMount
            side="right">
            {#snippet child({ props, open })}
              {#if open}
                <div
                  {...props}
                  transition:slide>
                  <div
                    class="border-dark-10 z-0 flex items-center justify-center rounded-lg border bg-background p-2 text-xs font-medium text-slate-400 shadow-popover outline-none">
                    {l.tooltip}
                  </div>
                </div>
              {/if}
            {/snippet}
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider>
    {/each}
  </nav>
  <nav class="flex flex-col items-center gap-3.5 border-t border-slate-800 py-3">
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconifyWrapper
                name="help"
                size={6} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Label>My Account</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Profile</DropdownMenu.Item>
                <DropdownMenu.Item>Billing</DropdownMenu.Item>
                <DropdownMenu.Item>Team</DropdownMenu.Item>
                <DropdownMenu.Item>Subscription</DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Tooltip.Trigger>
        <Tooltip.Content
          forceMount
          align="start">
          {#snippet child({ props, open })}
            {#if open}
              <div
                {...props}
                transition:slide>
                <div
                  class="border-dark-10 z-0 flex items-center justify-center rounded-lg border bg-background p-2 text-xs font-medium text-slate-400 shadow-popover outline-none">
                  Help & Support
                </div>
              </div>
            {/if}
          {/snippet}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger>
          <a
            use:route
            href="/settings">
            <IconifyWrapper
              name="settings"
              size={6} />
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content
          forceMount
          side="right">
          {#snippet child({ props, open })}
            {#if open}
              <div
                {...props}
                transition:slide>
                <div
                  class="border-dark-10 z-0 flex items-center justify-center rounded-lg border bg-background p-2 text-xs font-medium text-slate-400 shadow-popover outline-none">
                  Settings
                </div>
              </div>
            {/if}
          {/snippet}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  </nav>
  <nav class="flex flex-col items-center gap-3.5 border-t border-slate-800 py-3">
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={200}>
        <Tooltip.Trigger>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconifyWrapper
                name="user"
                size={7} />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Label>My Account</DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>Profile</DropdownMenu.Item>
                <DropdownMenu.Item>Billing</DropdownMenu.Item>
                <DropdownMenu.Item>Team</DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Item
                  onclick={() => {
                    sessions.logout();
                    goto("/login");
                    toast.success("Logged out successfully!");
                  }}>Logout</DropdownMenu.Item>
              </DropdownMenu.Group>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Tooltip.Trigger>
        <Tooltip.Content
          forceMount
          side="right">
          {#snippet child({ props, open })}
            {#if open}
              <div
                {...props}
                transition:slide>
                <div
                  class="border-dark-10 z-0 flex items-center justify-center rounded-lg border bg-background p-2 text-xs font-medium text-slate-400 shadow-popover outline-none">
                  My Account & Settings
                </div>
              </div>
            {/if}
          {/snippet}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  </nav>
</aside>
