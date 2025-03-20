<script setup lang="ts">
defineProps<{
  layout: "row" | "col";
}>();
</script>

<template>
  <ul
    class="units flex"
    :class="{
      'flex-row justify-between': layout === 'row',
      'flex-col': layout === 'col',
    }">
    <li class="item">KG.</li>
    <li class="item">CO2.</li>
    <li class="item">EQ.</li>
  </ul>
</template>

<style lang="scss">
ul.flex-col {
  li {
    line-height: inherit;
  }
}
</style>
