<script setup lang="ts">
defineProps<{
  text: string;
  location: string;
}>();
</script>
<template>
  <div
    class="wrapper-vertical"
    :class="{
      'is-right': location === 'right',
      'is-left': location === 'left',
    }">
    <div class="inner">
      <div class="vertical">
        {{ text }}
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.wrapper-vertical {
  position: fixed;
  height: calc(var(--vh) * 100);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(var(--text-xs) * 0.9);
  width: var(--space-xl);
  white-space: nowrap;
  /* width: calc(calc(var(--vh) * 100 - var(--container-fw)) / 2); */
  &.is-right {
    right: 0;
    .vertical {
      transform: rotate(90deg) translateX(-0%) translateY(0);
    }
  }
  .inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.vertical {
  transform: rotate(-90deg) translateX(-0%) translateY(0);
  text-align: center;
}
@media screen and (max-width: 1080px) {
  .wrapper-vertical {
    display: none;
  }
}
</style>
