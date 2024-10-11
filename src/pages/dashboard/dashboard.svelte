<script lang="ts">
  import ChevronLeft from "lucide-svelte/icons/chevron-left";
  import ChevronRight from "lucide-svelte/icons/chevron-right";
  import Copy from "lucide-svelte/icons/copy";
  import CreditCard from "lucide-svelte/icons/credit-card";
  import EllipsisVertical from "lucide-svelte/icons/ellipsis-vertical";
  import File from "lucide-svelte/icons/file";
  import ListFilter from "lucide-svelte/icons/list-filter";
  import Truck from "lucide-svelte/icons/truck";

  import { Badge } from "$lib/components/ui/badge/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import * as Pagination from "$lib/components/ui/pagination/index.js";
  import { Progress } from "$lib/components/ui/progress/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as Table from "$lib/components/ui/table/index.js";
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import { link } from "svelte-spa-router";
</script>

<main class="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"></main>
