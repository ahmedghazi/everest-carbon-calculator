<script setup lang="ts">
import { ref } from "vue";
import DiagrammeCercle from "./DiagrammeCercle.vue";
import Units from "./Units.vue";
const items = ref([
  { delay: 1, value: 0.8, radius: 20, title: "FINALISATION IMAGE" },
  { delay: 3, value: 12.5, radius: 50, title: "ÉTALONNAGE" },
  { delay: 5, value: 23.1, radius: 75, title: "MONTAGE" },
  { delay: 7, value: 169, radius: 100, title: "PERSONNEL" },
]);
</script>

<template>
  <div class="diagrammes-cercle h-full">
    <div class="inner h-full">
      <div class="h-full">
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
  </div>
</template>

<style scoped lang="scss">
.inner {
  /* padding: 0 var(--space-md); */
}
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
