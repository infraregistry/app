<script lang="ts">
  import { link } from "svelte-spa-router";
</script>

<div class="flex w-60">
  <a use:link={"/components/123"} class="blockw-72 m-2">
    <div class="col-span-1 flex rounded-md shadow-sm">
      <div class="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md bg-purple-700 text-sm font-medium text-white">RC</div>
      <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-zinc-800 bg-black">
        <div class="flex flex-1 flex-col gap-0.5 truncate px-4 py-2 text-sm">
          <div class="font-semibold text-slate-300 hover:text-gray-600">Virtual Machine</div>
          <div class="text-xs text-slate-500">8 dependencies</div>
        </div>
        <div class="flex-shrink-0 pr-2">
          <button type="button" class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="sr-only">Open options</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </a>
</div>
