<script lang="ts">
  import Badge from "$lib/components/ui/badge/badge.svelte";
  import Icon from "@iconify/svelte";
  import { link } from "svelte-spa-router";
</script>

<a use:link={"/components/123"}>
  <div class="flex w-60 flex-col gap-3 rounded-xl border bg-card p-4 pt-2 text-card-foreground shadow transition-all duration-300 hover:bg-zinc-900">
    <div class="flex items-center">
      <div class="flex-1">
        <h3 class="font-medium">Card Title</h3>
        <p class="text-sm text-muted-foreground">Card Description</p>
      </div>
      <div class="">
        <Badge class="bg-green-400">Healthy</Badge>
      </div>
    </div>
    <div class="font-xs text-slate-500">
      <p class="text-xs text-muted-foreground">
        <Icon icon="mdi:clock" />
      </p>
    </div>
  </div>
</a>
