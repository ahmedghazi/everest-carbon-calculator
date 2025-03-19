<script setup lang="ts">
import { ref } from "vue";
import DiagrammeCercle from "./DiagrammeCercle.vue";
import Units from "./Units.vue";
const items = ref([
  { value: 0.8, delay: 1, radius: 20, title: "FINALISATION IMAGE" },
  { value: 12.5, delay: 3, radius: 50, title: "ÉTALONNAGE" },
  { value: 23.1, delay: 5, radius: 75, title: "MONTAGE" },
  { value: 169, delay: 7, radius: 100, title: "PERSONNEL" },
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
      <div class="units-wrapper box">
        <Units layout="col" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.units-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: calc(var(--space-xs) * 0.7) var(--space-xs);
  border-bottom-left-radius: 0;
  &::before {
    content: "";
    position: absolute;
    bottom: calc(var(--border-width) * -1);
    left: 0;
    /* width: calc(522px / 2 - var(--space-md) * 2); */
    width: 190px;
    height: var(--border-width);
    transform: translateX(-100%);
    background-color: var(--color-primary);
  }
}
</style>
