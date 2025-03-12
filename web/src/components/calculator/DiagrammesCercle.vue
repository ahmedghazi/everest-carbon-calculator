<script setup lang="ts">
import { ref } from "vue";
import DiagrammeCercle from "./DiagrammeCercle.vue";
const items = ref([
  { title: "FINALISATION IMAGE", value: 0.8, delay: 0, radius: 20 },
  { title: "ÉTALONNAGE", value: 12.5, delay: 0.5, radius: 50 },
  { title: "MONTAGE", value: 23.1, delay: 1, radius: 75 },
  { title: "PERSONNEL", value: 169, delay: 1.5, radius: 100 },
]);
</script>

<template>
  <div class="diagrammes-cercle h-full">
    <div class="inner h-full">
      <DiagrammeCercle
        v-for="item in items"
        :key="item.value"
        :value="item.value"
        :title="item.title"
        :delay="item.delay"
        :radius="item.radius" />
    </div>
  </div>
</template>

<style scoped>
.diagrammes-cercle {
}
</style>
