<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { Separator } from "$lib/components/ui/separator";
  import Copy from "lucide-svelte/icons/copy";
  import CreditCard from "lucide-svelte/icons/credit-card";
  import EllipsisVertical from "lucide-svelte/icons/ellipsis-vertical";
</script>

<Card.Root>
  <Card.Header class="flex flex-row items-start">
    <div class="grid flex-1 gap-0.5">
      <Card.Title class="group flex items-center gap-2">
        Oasde31b70H
        <Button size="icon" variant="outline" class="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100">
          <Copy class="h-3 w-3" />
          <span class="sr-only">Copy Order ID</span>
        </Button>
      </Card.Title>
      <Card.Description class="text-xs">Last Synced: 4 minutes ago</Card.Description>
    </div>
    <div class="flex items-center gap-1">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button size="lg" variant="outline" class="gap-2 px-2 pl-4">
            <span class="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">History</span>
            <EllipsisVertical class="h-3.5 w-3.5" />
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          <DropdownMenu.Item>Edit</DropdownMenu.Item>
          <DropdownMenu.Item>Export</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item>Trash</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  </Card.Header>
  <Card.Content class=" text-sm">
    <Separator class="my-4" />
    <div class="grid grid-cols-2 gap-4">
      <div class="grid gap-3">
        <div class="font-semibold">Shipping Information</div>
        <address class="grid gap-0.5 not-italic text-muted-foreground">
          <span>Liam Johnson</span>
          <span>1234 Main St.</span>
          <span>Anytown, CA 12345</span>
        </address>
      </div>
      <div class="grid auto-rows-max gap-3">
        <div class="font-semibold">Billing Information</div>
        <div class="text-muted-foreground">Same as shipping address</div>
      </div>
    </div>
    <Separator class="my-4" />
    <div class="grid gap-3">
      <div class="font-semibold">Customer Information</div>
      <dl class="grid gap-3">
        <div class="flex items-center justify-between">
          <dt class="text-muted-foreground">Customer</dt>
          <dd>Liam Johnson</dd>
        </div>
        <div class="flex items-center justify-between">
          <dt class="text-muted-foreground">Email</dt>
          <dd>
            <a href="mailto:">liam@acme.com</a>
          </dd>
        </div>
        <div class="flex items-center justify-between">
          <dt class="text-muted-foreground">Phone</dt>
          <dd>
            <a href="tel:">+1 234 567 890</a>
          </dd>
        </div>
      </dl>
    </div>
    <Separator class="my-4" />
    <div class="grid gap-3">
      <div class="font-semibold">Payment Information</div>
      <dl class="grid gap-3">
        <div class="flex items-center justify-between">
          <dt class="flex items-center gap-1 text-muted-foreground">
            <CreditCard class="h-4 w-4" />
            Visa
          </dt>
          <dd>**** **** **** 4532</dd>
        </div>
      </dl>
    </div>
  </Card.Content>
  <Card.Footer class="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
    <div class="text-xs text-muted-foreground">
      Updated <time dateTime="2023-11-23">November 23, 2023</time>
    </div>
    <!-- <Pagination.Root count={10} class="ml-auto mr-0 w-auto">
      <Pagination.Content>
        <Pagination.Item>
          <Button size="icon" variant="outline" class="h-6 w-6">
            <ChevronLeft class="h-3.5 w-3.5" />
            <span class="sr-only">Previous Order</span>
          </Button>
        </Pagination.Item>
        <Pagination.Item>
          <Button size="icon" variant="outline" class="h-6 w-6">
            <ChevronRight class="h-3.5 w-3.5" />
            <span class="sr-only">Next Order</span>
          </Button>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination.Root> -->
  </Card.Footer>
</Card.Root>
