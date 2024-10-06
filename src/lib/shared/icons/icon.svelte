<script lang="ts">
  import { run } from 'svelte/legacy';

  interface Props { [key: string]: any }

  let { size = 16, src, fit = false, ...rest }: Props = $props();

  if (fit) {
    sizePx = '100%';
  }
  let sizePx;
  run(() => {
    sizePx = `${size}px`;
  });
</script>

<div class:max={fit} style="width: {sizePx}; height: {sizePx}" {...rest}>
  {@html src}
</div>

<style>
  .max {
    min-width: 100%;
    min-height: 100%;
  }
</style>
