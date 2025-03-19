<script setup>
import ArrowS from "../partials/ArrowS.vue";
</script>

<template>
  <section>
    <div class="outter">
      <div class="inner">
        <p>
          EVEREST intègre l'évaluation carbone dans chaque étape de vos projets.
        </p>
        <p>
          Soucieux de minimiser l'impact environnemental de nos activités, nous
          avons développé un outil de calcul carbone capable d'évaluer les
          émissions de CO2 (kg eCO2) liées à chaque phase de nos prestations.
        </p>
        <p>
          Dès l'élaboration du devis, cet outil garantit une transparence totale
          sur l'impact environnemental de votre projet, vous permettant ainsi
          d'identifier précisement l'empreinte carbone de chaque poste.
        </p>
        <p>
          EVEREST s'engage à réduire l'impact de son activité sur
          l'environnement en prenant en charge la compensation des émissions de
          CO2 de votre projet en s'appuyant sur des partenaires labellisés bas
          carbone spécialisés dans la reforestation et la transition vers
          l'agriculture biologique.
        </p>
      </div>
      <div class="arrow-cta">
        <ArrowS :distance="10" :yoyo="false" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.outter {
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  height: 100%;
}
.inner {
  max-width: 35rem;
  max-width: 35.38rem;
  margin: auto;
}
p {
  text-align: justify;
}
.arrow-cta {
  position: absolute;
  bottom: var(--space-md);
  left: 50%;
  transform: translateX(-50%);
  border: var(--border);
  border-radius: 50%;
  /* width: 1.5em; */
  width: 12px;
  height: 9.5px;
  text-align: center;
  overflow: hidden;
  span {
    font-size: var(text-xs);
    font-size: 0.6em;
    top: -7px;
    position: relative;
  }
}

@media screen and (max-width: 1080px) {
  .inner {
    max-width: 100%;
  }
}
</style>
