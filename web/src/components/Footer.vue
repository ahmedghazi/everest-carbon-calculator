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
        <div class="grid md:grid-cols-8 gap-sm md:gap-0">
          <div class="md:col-span-6">
            <p>
              L'OUTIL DE CALCUL UTILISÉ POUR CETTE DÉMARCHE EST DÉVELOPPÉ PAR
              EVEREST ET CERTIFIÉ PAR CARBONE4 QUI EN GARANTIT LA FIABILITÉ ET
              LA CONFORMITÉ AVEC LE RÉFÉRENTIEL GHG (PROTOCOLE DE COMPTABILITÉ
              CARBONE).
            </p>
          </div>
          <div class="md:col-span-2">
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

<style scoped lang="scss">
footer {
  z-index: 10;
  position: fixed;
  /*  */
}
.container {
  z-index: 2;
}
.inner {
  border-top: var(--border);
  display: flex;
  justify-content: space-between;
  padding: var(--space-md) 0 var(--space-lg);
  /* background-color: var(--color-background); */
  backdrop-filter: blur(20px);
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

@media screen and (max-width: 1080px) {
  footer {
    padding-left: var(--space-md);
    padding-right: var(--space-md);
    z-index: 2;
  }
  .inner {
    padding-top: var(--space-sm);
    flex-direction: column;
    /* background-color: red; */
    gap: var(--space-md);
    /* text-align: center; */
    .toggle-wrapper {
      justify-content: center;
      border-top: var(--border);
      padding-top: var(--space-sm);
    }
  }
}
</style>
