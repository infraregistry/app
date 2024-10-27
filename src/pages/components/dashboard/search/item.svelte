<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import { Tooltip } from "bits-ui";
  import { link } from "svelte-spa-router";
  import { slide } from "svelte/transition";
</script>

<a use:link={"/components/123"} class="rounded-md hover:bg-zinc-900/75">
  <div class="col-span-1 flex rounded-md shadow-sm">
    <div class="w-1 rounded-l-md bg-purple-700 text-sm font-medium text-white"></div>
    <div class="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-zinc-800">
      <div class="flex flex-1 flex-col gap-1 truncate px-4 py-2 text-sm">
        <div class="font-semibold text-slate-300 hover:text-gray-600">Virtual Machine</div>
        <div class="flex items-center gap-1">
          <svg class="h-7 w-7 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...$$props}>
            <path
              fill="currentColor"
              d="M7.64 10.38c0 .25.02.45.07.62c.05.12.12.28.21.46c.04.04.05.1.05.15c0 .07-.04.13-.13.2l-.42.28c-.06.04-.12.06-.17.06c-.07 0-.13-.04-.2-.1c-.09-.1-.17-.2-.24-.31c-.06-.11-.13-.24-.2-.39c-.52.61-1.17.92-1.96.92c-.56 0-1-.16-1.33-.48c-.32-.32-.49-.75-.49-1.29c0-.55.2-1 .6-1.36c.41-.34.95-.52 1.63-.52c.23 0 .44.02.71.06c.23.03.5.08.76.14v-.48c0-.51-.1-.84-.31-1.07c-.22-.21-.57-.3-1.08-.3c-.24 0-.48.03-.72.08c-.25.06-.49.13-.72.23c-.11.04-.2.07-.23.08c-.05.02-.08.02-.11.02c-.09 0-.14-.06-.14-.2v-.33c0-.1.01-.18.05-.23q.045-.075.18-.12c.24-.14.51-.24.84-.32a4 4 0 0 1 1.04-.13q1.185 0 1.74.54c.37.36.55.91.55 1.64v2.15zm-2.7 1.02c.22 0 .44-.04.68-.12s.45-.23.63-.43c.11-.13.19-.27.25-.43c0-.16.05-.35.05-.58v-.27c-.2-.07-.4-.07-.62-.12a7 7 0 0 0-.62-.04c-.45 0-.77.09-.99.27s-.32.43-.32.76c0 .32.07.56.24.71c.16.17.39.25.7.25m5.34.71a.6.6 0 0 1-.28-.06c-.03-.05-.08-.14-.12-.26L8.32 6.65c-.04-.15-.06-.22-.06-.27c0-.11.05-.17.16-.17h.65c.13 0 .22.02.26.07c.06.04.1.13.14.26l1.11 4.4l1.04-4.4c.03-.13.07-.22.13-.26c.05-.04.14-.07.25-.07h.55c.12 0 .21.02.26.07c.05.04.1.13.13.26L14 11l1.14-4.46c.04-.13.09-.22.13-.26c.06-.04.14-.07.26-.07h.62c.11 0 .17.06.17.17c0 .03-.01.07-.02.12c0 0-.02.08-.04.15l-1.61 5.14c-.04.14-.08.21-.15.26c-.04.04-.13.07-.24.07h-.57c-.13 0-.19-.02-.27-.07a.45.45 0 0 1-.12-.26L12.27 7.5l-1.03 4.28q-.045.195-.12.27a.5.5 0 0 1-.27.06zm8.55.18c-.33 0-.7-.04-1.03-.12s-.59-.17-.76-.26a.5.5 0 0 1-.21-.19a.4.4 0 0 1-.04-.18v-.34c0-.14.05-.2.15-.2h.12c.04 0 .1.05.17.08c.22.1.47.18.73.23c.27.05.54.08.79.08c.42 0 .75-.07.97-.22c.23-.17.35-.36.35-.63c0-.19-.07-.34-.18-.47c-.12-.12-.35-.24-.67-.34l-.97-.3c-.48-.16-.84-.38-1.06-.68a1.58 1.58 0 0 1-.33-.97c0-.28.06-.52.18-.73c.12-.22.28-.4.46-.55c.22-.15.44-.26.71-.34q.39-.12.84-.12q.21 0 .45.03c.14.02.28.05.42.07c.14.04.26.07.38.11s.2.08.28.12c.09.05.16.1.2.16s.06.13.06.22v.32q0 .21-.15.21c-.05 0-.14-.03-.26-.08c-.37-.17-.8-.26-1.27-.26c-.38 0-.66.06-.89.19c-.2.12-.31.32-.31.59c0 .19.07.35.2.47c.13.13.38.25.73.37l.95.3c.48.14.82.36 1.03.64q.3.405.3.93c0 .28-.06.54-.17.77c-.12.22-.28.42-.5.58c-.19.17-.44.29-.72.38s-.62.13-.95.13m1.25 3.24C17.89 17.14 14.71 18 12 18c-3.85 0-7.3-1.42-9.91-3.77c-.21-.19-.02-.44.23-.29c2.82 1.63 6.29 2.62 9.89 2.62c2.43 0 5.1-.5 7.55-1.56c.37-.15.68.26.32.53M21 14.5c-.29-.37-1.86-.18-2.57-.1c-.21.03-.24-.16-.05-.3c1.25-.87 3.31-.6 3.54-.33c.24.3-.06 2.36-1.23 3.34c-.19.15-.36.07-.28-.11c.27-.68.86-2.16.59-2.5" />
          </svg>
          <svg class="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1536">
            <path fill="currentColor" d="M1280 896h305q-5 6-10 10.5t-9 7.5l-3 4l-623 600q-18 18-44 18t-44-18L228 916q-5-2-21-20h369q22 0 39.5-13.5T638 848l70-281l190 667q6 20 23 33t39 13q21 0 38-13t23-33l146-485l56 112q18 35 57 35m512-428q0 145-103 300h-369l-111-221q-8-17-25.5-27t-36.5-8q-45 5-56 46L962 988L766 302q-6-20-23.5-33T703 256t-39 13.5t-22 34.5L526 768H103Q0 613 0 468q0-220 127-344T478 0q62 0 126.5 21.5t120 58T820 148t76 68q36-36 76-68t95.5-68.5t120-58T1314 0q224 0 351 124t127 344" />
          </svg>
        </div>
      </div>
      <div class="flex-shrink-0 p-2">
        <div class="flex flex-col items-center text-xs text-slate-500">
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={200}>
              <Tooltip.Trigger>
                <Badge variant="outline" class="text-blue-500">8</Badge>
              </Tooltip.Trigger>
              <Tooltip.Content forceMount align="center" side="bottom">
                {#snippet child({ props, open })}
                  {#if open}
                    <div {...props} transition:slide>
                      <div class="border-dark-10 z-0 rounded-lg border bg-background p-2 text-xs font-medium text-slate-400 shadow-popover outline-none">
                        There are
                        <Badge variant="outline" class="text-blue-500">8</Badge>
                        components that depend on this component.
                      </div>
                    </div>
                  {/if}
                {/snippet}
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...$$props}>
            <path fill="currentColor" d="m17.71 11.29l-5-5a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-5 5a1 1 0 0 0 1.42 1.42L11 9.41V17a1 1 0 0 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42" />
          </svg>
          <svg class="h-6 w-6 rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...$$props}>
            <path fill="currentColor" d="m17.71 11.29l-5-5a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-5 5a1 1 0 0 0 1.42 1.42L11 9.41V17a1 1 0 0 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42" />
          </svg>
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={200}>
              <Tooltip.Trigger>
                <Badge variant="outline" class="text-blue-500">8</Badge>
              </Tooltip.Trigger>
              <Tooltip.Content forceMount align="center" side="bottom">
                {#snippet child({ props, open })}
                  {#if open}
                    <div {...props} transition:slide>
                      <div class="border-dark-10 z-0 rounded-lg border bg-background p-2 text-xs font-medium text-slate-400 shadow-popover outline-none">
                        This component depends on
                        <Badge variant="outline" class="text-blue-500">8</Badge>
                        components.
                      </div>
                    </div>
                  {/if}
                {/snippet}
              </Tooltip.Content>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </div>
    </div>
  </div>
</a>
