<script setup lang="ts">
import { ref } from "vue";

const locale = ref("fr");
function _setLocale(val: string) {
  locale.value = val;
}
</script>

<template>
  <ul class="locale-switcher">
    <li>
      <button
        @click="_setLocale('en')"
        :class="{ 'is-active': locale === 'en' }">
        EN.
      </button>
    </li>
    <li>
      <button
        @click="_setLocale('fr')"
        :class="{ 'is-active': locale === 'fr' }">
        FR.
      </button>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-right: 0.6em;
}
button {
  appearance: none;
  background: transparent;
  border: none;
  padding: 0;
  line-height: 1;
  position: relative;
  font-size: 1rem;
  cursor: pointer;
  &::before {
    content: "";
    width: 2.6em;
    height: 1.5em;
    position: absolute;
    border: var(--border);
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-60%, -50%) scale(0);
    transition: transform 0.2s;
  }
  &:hover::before,
  &.is-active::before {
    transform: translate(-60%, -50%) scale(1);
  }
}
@media screen and (max-width: 1080px) {
  ul {
    padding-right: 0;
  }
}
</style>
