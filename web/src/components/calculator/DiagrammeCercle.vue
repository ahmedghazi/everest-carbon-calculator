<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{
  value: number;
  title: string;
  delay: number;
  radius: number;
}>();

const inner = ref<HTMLDivElement | null>(null);
onMounted(() => {
  gsap.to(inner.value, {
    scrollTrigger: ".diagramme-cercle",
    opacity: 1,
    duration: 1,
    delay: props.delay,
  });
});
</script>
<template>
  <div class="diagramme-cercle">
    <div
      class="inner"
      ref="inner"
      :style="{
        width: radius + '%',
        height: radius + '%',
      }">
      <div class="caption">
        <div class="title">
          {{ title }}
        </div>
      </div>
      <div class="cercle">
        <div class="value">{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.diagramme-cercle {
  position: absolute;
  bottom: 0;
  right: var(--space-md);
  /* width: 100%;
  width: calc(var(--vh) * 80 - calc(var(--header-h) + var(--footer-h))); */
  width: 70%;
  display: flex;
  justify-content: center;
}
.inner {
  opacity: 0;
}
.cercle {
  border-radius: 100%;
  border: var(--border);
  width: 100%;
  aspect-ratio: 1 / 1;
  display: grid;
}

.value {
  text-align: center;
  padding: var(--space-md);
}
.caption {
  position: absolute;
  text-align: right;
  top: -0.5em;
  line-height: 1;
  width: 34rem;
  left: 50%;
  transform: translateX(-100%);

  display: flex;
  align-items: center;
  &::after {
    content: "";
    height: var(--border-width);
    width: calc(19rem - 50px);
    margin-left: 1em;
    background-color: var(--color-primary);
    flex: 2;
    transform: translateY(0.5px);
  }
}

.title {
  text-align: right;
  width: 15rem;
}
</style>
