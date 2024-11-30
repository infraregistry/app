<script lang="ts">
  import Switcher from "$lib/components/switcher/switcher.svelte";
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Input } from "$lib/components/ui/input";
  import { Share2 } from "lucide-svelte";
  import Particles from "svelte-particles";
  import PlusCircled from "svelte-radix/PlusCircled.svelte";
  import { toast } from "svelte-sonner";
  import { loadSlim } from "tsparticles-slim";
  import { crumbs } from "./state";

  const groups = [
    {
      label: "Personal",
      items: [
        {
          label: "My Personal Organization"
        }
      ]
    },
    {
      label: "Shared With Me",
      items: [
        {
          label: "devops"
        },
        {
          label: "Platform Engineering"
        }
      ]
    }
  ];

  let particlesConfig = {
    particles: {
      number: {
        value: 50
      },
      color: {
        value: "#ffffff"
      },
      links: {
        enable: true,
        distance: 100
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: {
          min: 1,
          max: 1
        }
      },
      move: {
        enable: true,
        speed: 0.25
      }
    },
    poisson: {
      enable: true
    }
  };
</script>

<nav class={" flex w-full items-center justify-between border-b  p-2"}>
  <div
    id="tsparticles"
    class="absolute -z-10 opacity-50">
    <Particles
      options={particlesConfig}
      particlesInit={async (engine) => loadSlim(engine)} />
  </div>
  <div class="flex w-full justify-between">
    <div class="flex items-center gap-2 rounded-lg border bg-black/50 px-3">
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <!-- <Breadcrumb.Item>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger class="flex items-center gap-1">
                <Breadcrumb.Ellipsis class="h-4 w-4" />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content align="start">
                <DropdownMenu.Item>
                  <Breadcrumb.Link href="/components">components</Breadcrumb.Link>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <Breadcrumb.Link href="/themes">themes</Breadcrumb.Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </Breadcrumb.Item> -->
          {#each $crumbs as crumb, i}
            {#if i < $crumbs.length - 1}
              <Breadcrumb.Item>
                <Breadcrumb.Link href={crumb.href}>{crumb.label}</Breadcrumb.Link>
              </Breadcrumb.Item>
              <Breadcrumb.Separator />
            {:else}
              <Breadcrumb.Page>{crumb.label}</Breadcrumb.Page>
            {/if}
          {/each}
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </div>
    <div class="flex items-center gap-2 bg-black">
      <div class="flex max-w-xs flex-col items-center gap-2">
        <div class="relative w-full">
          <Input
            type="email"
            placeholder="Search everything..."
            class="h-10 w-72" />
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-xs font-semibold text-slate-600">
            ⌘
            <span class="mx-1">+</span>
            K
          </div>
        </div>
      </div>
      <Switcher
        {groups}
        placeholder="Search my organizations..."
        commands={[create, invite]}
        selected={groups[0].items[0]}
        selectedFn={(item: { label: string }) => {
          toast.success(`Switched organization to ${item.label}!`);
        }} />
    </div>
  </div>
</nav>

{#snippet create()}
  <div class="flex items-center text-slate-500">
    <PlusCircled class="mr-2 h-5 w-5" />
    Create New Organization
  </div>
{/snippet}

{#snippet invite()}
  <div class="flex items-center text-sky-500">
    <Share2 class="mr-2 h-5 w-5" />
    Invite to an Organization
  </div>
{/snippet}

<style>
  :global(#tsparticles canvas) {
    max-height: 50px;
  }
</style>
