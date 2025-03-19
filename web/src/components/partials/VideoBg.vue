<script setup lang="ts">
import { onMounted, ref } from "vue";

const video = ref<HTMLVideoElement | undefined>(undefined);
onMounted(() => {
  console.log(video);
  if (video && video.value) video.value.playbackRate = 0.3;
});
</script>

<template>
  <video autoplay muted loop ref="video">
    <source src="../../assets/video/clouds.mp4" type="video/mp4" />
  </video>
</template>

<style lang="scss">
video {
  position: fixed;
  inset: 0;
  width: calc(var(--vw) * 100);
  height: calc(var(--vh) * 100);
  object-fit: cover;
  opacity: 0.4;
}
</style>
