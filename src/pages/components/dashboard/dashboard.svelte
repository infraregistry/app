<script lang="ts">
  import * as Layout from "$lib/components/layout";
  import { Button } from "$lib/components/ui/button";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import IconifyWrapper from "$lib/shared/icons/iconify-wrapper.svelte";
  import { DownloadCloud, EllipsisVertical, LifeBuoy, Link } from "lucide-svelte";
  import Search from "./search/search.svelte";
</script>

<div class="flex h-full flex-col gap-4 p-3">
  <Layout.Header>
    <Layout.Left>
      <Layout.Icon tooltip="Components are the building blocks of your service catalog and CMDB such as cloud resources, applications, services, etc.">
        <IconifyWrapper
          name="components"
          size={10} />
      </Layout.Icon>
      <Layout.Titles>
        <Layout.Title>Components</Layout.Title>
        <Layout.Subtitle>Building blocks of your infrastructure registry.</Layout.Subtitle>
      </Layout.Titles>
    </Layout.Left>
    <Layout.Actions>
      <Button
        variant="outline"
        class="text-green-500">Create</Button>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="outline">
            <EllipsisVertical class="h-5 w-4" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item class="flex items-center gap-2">
            <LifeBuoy class="h-5 w-4 text-pink-500" />
            Get Support
          </DropdownMenu.Item>
          <DropdownMenu.Item class="flex items-center gap-2">
            <Link class="h-5 w-4" />
            Documentation
          </DropdownMenu.Item><DropdownMenu.Separator />
          <DropdownMenu.Item class="flex items-center gap-2">
            <DownloadCloud class="h-5 w-4" />
            Export
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Layout.Actions>
  </Layout.Header>
  <div class="flex h-full flex-1">
    <!-- <div class="mr-4 w-48 border-r-2 border-black pr-4">
      <Sidebar />
    </div> -->
    <div class="flex-1">
      <Search />
    </div>
  </div>
</div>
