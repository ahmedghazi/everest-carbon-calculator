<template>
  <video autoplay muted loop id="myVideo">
    <source src="../../assets/video/clouds.mp4" type="video/mp4" />
  </video>
</template>
<script></script>
<style lang="scss">
video {
  position: fixed;
  inset: 0;
  height: calc(var(--vw) * 100);
  height: calc(var(--vh) * 100);
  object-fit: cover;
  opacity: 0.4;
}
</style>
