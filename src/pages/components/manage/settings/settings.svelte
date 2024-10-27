<script lang="ts">
  import { openConfirm } from "$lib/components/confirm/confirm";
  import { FormInstance, minLength } from "@mateothegreat/svelte5-forms";
  import Router, { link } from "svelte-spa-router";
  import { getComponent } from "../api.svelte";
  import { routes } from "./routes";

  const component = getComponent();
  interface ComponentSettings {
    name: string;
    description: string;
    enabled: boolean;
  }

  const items = [
    { value: "mango", label: "Mango" },
    { value: "watermelon", label: "Watermelon" },
    { value: "apple", label: "Apple" }
  ];

  let form: FormInstance;

  const controls = $state([
    {
      name: "name",
      value: "mateothegreat",
      validators: [minLength(3)]
    },
    {
      name: "foobar",
      data: items,
      validators: [minLength(2)],
      displayFn: (data: (typeof items)[number]) => {
        return data.label;
      }
    },
    {
      name: "agree",
      validators: [minLength(2)]
    }
  ]);

  const onDeleteClick = () => {
    console.log(123);

    openConfirm({
      title: "Delete Component",
      description: "Are you sure you want to delete this component?",
      label: "Delete"
    }).subscribe((result) => {
      console.log(result);
    });
  };
</script>

<div class="m-2 flex gap-16">
  <div class="">
    <nav class="grid gap-4 text-xs text-muted-foreground">
      <a use:link href={`/components/${component.id}/settings/general`} class="font-semibold text-primary"> General </a>
      <a use:link href={`/components/${component.id}/settings/integrations`}>Integrations</a>
      <a use:link href={`/components/${component.id}/settings/advanced`}>Advanced</a>
    </nav>
  </div>
  <div class="flex-1">
    <Router {routes} />
  </div>
</div>
