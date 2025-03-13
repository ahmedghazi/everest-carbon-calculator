<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  number: number;
}>();

const counter = ref<HTMLDivElement | null>(null);

onMounted(() => {
  gsap.from(counter.value, {
    scrollTrigger: ".counter-value",
    innerText: 0,
    duration: 2,
    snap: {
      innerText: 0.6,
    },
  });
});
</script>

<template>
  <div class="counter-value" ref="counter">{{ number }}</div>
</template>

<style scoped>
.counter-value {
  /* display: inline-block; */
  /* width: 3em; */
  /* background-color: red; */
}
</style>
