<script setup lang="ts">
import SideBar from "../calculator/SideBar.vue";
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import DiagrammesCercle from "../calculator/DiagrammesCercle.vue";
gsap.registerPlugin(ScrollTrigger);

const counter = ref<HTMLDivElement | null>(null);

onMounted(() => {
  gsap.from(counter.value, {
    scrollTrigger: ".value",
    innerText: 0,
    duration: 2,
    snap: {
      innerText: 0.1,
    },
  });
});
</script>

<template>
  <section>
    <div class="container">
      <div class="inner">
        <div class="grid- md:grid-cols-8 gap-md flex">
          <div class="md:col-span-2">
            <SideBar />
          </div>
          <div class="md:col-span-6 hidden-sm">
            <DiagrammesCercle />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* .container,
.container > .inner,
.container > .inner > .grid,
aside {
  height: 100%;
} */
.flex {
  justify-content: space-around;
  /* gap: 10em; */
  .md\:col-span-6 {
    min-width: 56vh;
  }
}
aside {
  height: 100%;
}
.container {
  /* padding: var(--space-xl) 0; */
  max-width: var(--container-fw);
}
.inner {
  padding: var(--space-xl) 0;
}

@media screen and (max-width: 1080px) {
  aside {
    height: 70%;
  }
}
</style>
