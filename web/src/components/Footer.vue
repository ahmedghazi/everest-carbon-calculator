<script setup lang="ts">
import { ref } from "vue";
import ModalMethod from "./ModalMethod.vue";

const modalOpen = ref<boolean>(false);

function _toggle() {
  modalOpen.value = !modalOpen.value;
}
</script>

<template>
  <footer id="footer-site">
    <div class="container">
      <div class="inner">
        <div class="grid md:grid-cols-8">
          <div class="md:col-span-5">
            <p>
              L'OUTIL DE CALCUL UTILISÉ POUR CETTE DÉMARCHE EST DÉVELOPPÉ PAR
              EVEREST ET CERTIFIÉ PAR CARBONE4 QUI EN GARANTIT LA FIABILITÉ ET
              LA CONFORMITÉ AVEC LE RÉFÉRENTIEL GHG (PROTOCOLE DE COMPTABILITÉ
              CARBONE).
            </p>
          </div>
          <div class="md:col-span-3">
            <div class="toggle-wrapper">
              <button @click="_toggle">
                <span v-if="!modalOpen">↑</span>
                <span v-if="modalOpen">↓</span>
                <span>METHODE DE CALCUL</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ModalMethod :open="modalOpen" @_toggle="_toggle" />
  </footer>
</template>

<style scoped>
footer {
  z-index: 10;
  position: fixed;
}
.container {
  z-index: 2;
}
.inner {
  border-top: var(--border);
  display: flex;
  justify-content: space-between;
  padding: var(--space-md) 0 var(--space-lg);
  background-color: var(--color-background);
}
p {
  font-size: var(--text-xs);
}
.toggle-wrapper {
  display: flex;
  justify-content: flex-end;
}
button {
  display: flex;
  gap: 0.4em;
}
</style>
