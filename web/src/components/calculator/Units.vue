<template>
  <ul
    class="units flex"
    :class="{
      'flex-row justify-between': layout === 'row',
      'flex-col': layout === 'col',
    }">
    <li>KG.</li>
    <li>CO2.</li>
    <li>EQ.</li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  layout: "row" | "col";
}>();
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
