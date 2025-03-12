<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
import img from "../../assets/logo.svg";
const logo = ref(null);

onMounted(() => {
  gsap.from(logo.value, { y: 300, duration: 1 });
});
</script>

<template>
  <section>
    <div class="inner">
      <img ref="logo" :src="img" width="200" alt="Logo" />
    </div>
  </section>
</template>

<style scoped>
.inner {
  display: flex;
  justify-content: center;
}
</style>
