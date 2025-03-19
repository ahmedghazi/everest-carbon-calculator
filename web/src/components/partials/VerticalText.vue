<script setup lang="ts">
defineProps<{
  text: string;
  location: string;
}>();
</script>
<template>
  <div
    class="wrapper"
    :class="{
      'is-right': location === 'right',
      'is-left': location === 'left',
    }">
    <div class="vertical">
      {{ text }}
    </div>
  </div>
</template>
<style lang="scss">
.wrapper {
  position: fixed;
  height: calc(var(--vh) * 100);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--text-xs);
  &.is-right {
    right: 0;
    .vertical {
      transform: rotate(90deg) translateX(-0em) translateY(-0em);
    }
  }
}
.vertical {
  transform: rotate(-90deg) translateX(-0%) translateY(-0em);
  text-align: center;
  /* transform-origin: bottom left; */
}
</style>
