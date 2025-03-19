<script setup lang="ts">
import { onMounted, ref, defineEmits } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// defineProps<{
//   number: number;
//   delay?: number;
// }>();
const props = withDefaults(
  defineProps<{
    number: number;
    delay?: number;
  }>(),
  {
    number: 0,
    delay: 0,
  }
);
// defineEmits(["_onComplete"]);
// const emits = defineEmits(["_onComplete"]);

const counter = ref<HTMLDivElement | null>(null);

onMounted(() => {
  gsap.from(counter.value, {
    scrollTrigger: ".counter-value",
    innerText: 0,
    duration: 2,
    delay: props.delay,
    snap: {
      // innerText: 0.6,
      innerText: 10,
    },
    // onComplete: emits("_onComplete"),
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
