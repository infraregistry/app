<script lang="ts">
  import Switcher from "$components/switcher/switcher.svelte";
  import { Share2 } from "lucide-svelte";
  import PlusCircled from "svelte-radix/PlusCircled.svelte";
  import { toast } from "svelte-sonner";

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
</script>

asdf

<Switcher
  {groups}
  placeholder="Search my organizations..."
  commands={[create, invite]}
  selected={groups[0].items[0]}
  selectedFn={(v) => {
    console.log("selected", v);
    toast.success(`Switched organization to ${v.label}!`);
  }} />

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
