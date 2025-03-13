<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";

const props = withDefaults(
  defineProps<{
    yoyo?: boolean;
    distance?: number;
  }>(),
  {
    distance: 5,
    yoyo: true,
  }
);

const arrow = ref<HTMLSpanElement | null>(null);

onMounted(() => {
  gsap.fromTo(
    arrow.value,
    { y: -props.distance },
    {
      y: props.distance,
      duration: 0.8,
      repeat: -1,
      yoyo: props.yoyo,
      ease: "power1.inOut",
    }
  );
});
</script>

<template>
  <span ref="arrow">↓</span>
</template>

<style lang="scss" scoped>
span {
  display: inline-block;
}
</style>
