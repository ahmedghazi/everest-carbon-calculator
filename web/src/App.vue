<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Intro from "./components/sections/Intro.vue";
import Presentation from "./components/sections/Presentation.vue";
import CalculatorResult from "./components/sections/CalculatorResult.vue";
import { usePubsub } from "vue-pubsub";
import VerticalText from "./components/partials/VerticalText.vue";

const pubsub = usePubsub();
pubsub.on("EQUIVALENCE_EXAMPLE", (data) => {
  console.log(data);
});

onMounted(() => {
  _format();

  window.addEventListener("resize", _format);
});

onUnmounted(() => {
  window.removeEventListener("resize", _format);
});

function _format() {
  let vh: number = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  let vw: number = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vw", `${vw}px`);

  const header = document.querySelector("header#header-site");
  let headerBounding = { height: 50 };
  if (header) {
    headerBounding = header.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--header-h",
      headerBounding.height + "px"
    );
  }

  const footer = document.querySelector("footer#footer-site");
  let footerBounding = { height: 50 };
  if (footer) {
    footerBounding = footer.getBoundingClientRect();

    document.documentElement.style.setProperty(
      "--footer-h",
      footerBounding.height + "px"
    );
  }

  const diagramme = document.querySelector(".diagrammes-cercle");
  if (diagramme) {
    let diagrammeBounding = diagramme.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--diagramme-w",
      diagrammeBounding.width + "px"
    );
  }
}
</script>

<template>
  <div id="page">
    <Header siteName="EVEREST" siteDescription="CREATIVITÉ & DURABILITÉ" />

    <VerticalText text="DEVIS : DV25002 LV RSE" location="left" />
    <VerticalText text="DEVIS : DV25002 LV RSE" location="right" />
    <main>
      <Intro />
      <Presentation />
      <CalculatorResult />
    </main>

    <Footer />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
