<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
// import img from "../../assets/logo.svg";
import Units from "../calculator/Units.vue";
import ArrowS from "../partials/ArrowS.vue";
const logo = ref(null);

onMounted(() => {
  gsap.from(logo.value, { y: -100, opacity: 0, duration: 0.4 });
});

const _goTo = () => {
  console.log("go to");
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
</script>

<template>
  <section>
    <div class="outter">
      <div class="container">
        <div class="inner">
          <div class="stamp" ref="logo">
            <div class="header">
              Environmental<br />
              Impact Carbone Calculator<br />
              of your project
            </div>
            <div class="body">
              <div class="value text-xl">234.10</div>
              <div class="units-wrapper">
                <Units layout="col" />
              </div>
            </div>
            <div class="footer">
              <button @click="_goTo">
                <span>DÉTAILS</span> <ArrowS :distance="5" :yoyo="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.inner {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  /* padding: 0 var(--space-md); */
}
.stamp {
  border: var(--border);
  border-radius: 50%;
  width: 50%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  & > * {
    padding: var(--space-md);
  }
}

.header,
.body,
.footer {
  min-height: calc(100% / 3);
  display: grid;
  align-items: center;
}
.header,
.body {
  border-bottom: var(--border);
}

.header {
  padding-bottom: 2em;
}
.body {
  display: flex;
  justify-content: center;
  gap: 1em;
  .units {
    text-align: left;
  }
}
.footer {
  display: grid;
  align-items: center;
}

@media screen and (max-width: 1080px) {
  .stamp {
    width: 100%;
  }
}
</style>
