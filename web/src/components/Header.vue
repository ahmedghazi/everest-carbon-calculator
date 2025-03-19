<script setup lang="ts">
import LocaleSwitcher from "./partials/LocaleSwitcher.vue";

defineProps<{
  siteName: string;
  siteDescription: string;
}>();
</script>

<template>
  <header id="header-site">
    <div class="container">
      <div class="inner">
        <div class="site-name">{{ siteName }}</div>
        <div class="site-description">{{ siteDescription }}</div>
        <LocaleSwitcher />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  /* background-color: var(--color-background); */
  z-index: 10;
  position: fixed;
  backdrop-filter: blur(10px);
  /* background-color: var(--color-primary); */
  .inner {
    border-bottom: var(--border);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-bottom: 1em;
    padding: var(--space-lg) 0 var(--space-md);
    line-height: 1;
    .site-name {
      font-size: var(--text-md-alt);
    }
  }
}
@media screen and (max-width: 1080px) {
  header {
    padding-left: var(--space-md);
    padding-right: var(--space-md);
  }
  .site-description {
    display: none;
  }
}
</style>
