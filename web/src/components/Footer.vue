<template>
  <footer id="footer-site">
    <div class="container">
      <div class="inner">
        <div class="grid md:grid-cols-4">
          <div class="col-span-3">
            <p>
              L'OUTIL DE CALCUL UTILISÉ POUR CETTE DÉMARCHE EST DÉVELOPPÉ PAR
              EVEREST ET CERTIFIÉ PAR CARBONE4 QUI EN GARANTIT LA FIABILITÉ ET
              LA CONFORMITÉ AVEC LE RÉFÉRENTIEL GHG (PROTOCOLE DE COMPTABILITÉ
              CARBONE).
            </p>
          </div>
          <div class="text-right">
            <button @click="_toggle">→ METHODE DE CALCUL</button>
          </div>
        </div>
      </div>
    </div>
    <ModalMethod :open="modalOpen" @_toggle="_toggle" />
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ModalMethod from "./ModalMethod.vue";

const modalOpen = ref<boolean>(false);

function _toggle() {
  modalOpen.value = !modalOpen.value;
}
</script>

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
  /* padding-top: 1em; */
  padding: var(--space-md) 0 var(--space-lg);
  background-color: var(--color-background);
}
p {
  font-size: var(--text-xs);
}
</style>
