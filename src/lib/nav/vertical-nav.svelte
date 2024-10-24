<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";

  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
  import type { iconStatics } from "$lib/shared/icons/icon-statics";
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import { link } from "svelte-spa-router";

  type Link = {
    href: string;
    icon: keyof typeof iconStatics;
    tooltip: string;
  };

  const links: Link[] = [
    { href: "/catalog", icon: "catalog", tooltip: "Service Catalog" },
    { href: "/components", icon: "components", tooltip: "Components" },
    { href: "/cmdb", icon: "cmdb", tooltip: "Change Management Database" },
    { href: "/components", icon: "components", tooltip: "Components" }
  ];
</script>

<aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background pt-4 sm:flex">
  <nav class="flex flex-col items-center gap-4">
    <a use:link href="/">
      <IconifyWrapper name="logo" size={9} />
    </a>
    <div class="h-px w-full bg-slate-800" />
  </nav>
  <nav class="flex flex-1 flex-col items-center gap-3.5 px-2 py-4">
    {#each links as l}
      <Tooltip.Root>
        <Tooltip.Trigger asChild let:builder>
          <a use:link href={l.href} class="" use:builder.action {...builder}>
            <IconifyWrapper name={l.icon} size={7} />
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content side="right">{l.tooltip}</Tooltip.Content>
      </Tooltip.Root>
    {/each}
  </nav>
  <nav class="flex flex-col items-center gap-3.5 border-t border-slate-800 py-3">
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <IconifyWrapper name="help" size={7} />
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
      <Tooltip.Content side="right">Settings</Tooltip.Content>
    </Tooltip.Root>
    <IconifyWrapper name="settings" size={7} />
  </nav>
  <nav class="flex flex-col items-center gap-3.5 border-t border-slate-800 py-3">
    <Tooltip.Root>
      <Tooltip.Trigger asChild let:builder>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <IconifyWrapper name="user" size={8} />
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
      <Tooltip.Content side="right">Settings</Tooltip.Content>
    </Tooltip.Root>
  </nav>
</aside>
