<template>
  <div ref="modal" class="modal" :class="{ 'is-open': open }">
    <div class="container">
      <div class="header">
        <button class="close" @click="$emit('_toggle')">
          <svg
            id="5888b3d3-90e4-48a7-8e21-47682fa05fc1"
            data-name="Calque 1"
            xmlns="http://www.w3.org/2000/svg"
            width="23.21"
            height="23.21"
            viewBox="0 0 23.21 23.21">
            <rect
              x="14.5"
              width="1.92"
              height="30.91"
              fill="white"
              transform="translate(-10.25 11.61) rotate(-45)" />
            <rect
              y="14.5"
              width="30.91"
              height="1.92"
              fill="white"
              transform="translate(-10.25 11.61) rotate(-45)" />
          </svg>
        </button>
      </div>
      <div class="body">
        <div class="foreword">
          <div class="grid md:grid-cols-2 gap-md">
            <div class="item">
              <h2>MÉTHODE DE CALCUL</h2>
              <p class="text-lg">
                Voici les principales étapes et hypothèses de notre approche
                simplifiée
              </p>
            </div>
            <div class="item">
              <h2>HYPOTHÈSES DE BASE</h2>
              <p>
                Périmètre de calcul basé sur le GHG Protocol Product Standard,
                norme internatio- nale pour le calcul des gaz à effet de serre
                (GES).
              </p>
              <p>
                Sources de données :<br />ADEME • Carbone 4 • Bilan carbone
                interne d'EVEREST • Mesures réelles Postes d'émissions pris en
                compte
              </p>
            </div>
          </div>
        </div>
        <div class="items">
          <div class="grid md:grid-cols-4 gap-sm">
            <div class="item">
              <div class="index">01.</div>
              <h2>SALLE OU POSTE DE TRAVAIL</h2>
              <p>Consommation électrique : Équipements utilisés sur site.</p>
              <p>
                Émissions liées aux immobilisations : Prise en compte de
                l'impact des équipements techniques au cours de leur cycle de
                vie.
              </p>
            </div>
            <div class="item">
              <div class="index">02.</div>
              <h2>PERSONNEL</h2>
              <p>
                Transports domicile-travail : Calcul des émissions basées sur
                les déplacements des collaborateurs.
              </p>
              <p>Repas : Émissions associées à un repas moyen.</p>
            </div>
            <div class="item">
              <div class="index">03.</div>
              <h2>FRAIS TECHNIQUES</h2>
              <p>
                Production et archivage : Émissions liées à la consommation
                électrique des équipements pour des services tels que PAD, DCP,
                mastering, archivage/désarchivage.
              </p>
              <p>
                Logistique (streaming, coursiers, etc.) : Éstimations basées sur
                la Base Empreinte de l'ADEME.
              </p>
            </div>
            <div class="item">
              <div class="index">04.</div>
              <h2>AUTRES</h2>
              <p>
                Émissions indirectes : Achats de services, gestion des déchets,
                consommation électrique des espaces communs, chauffage, etc.
              </p>
              <p>
                Ces dépenses sont converties en équi- valent CO2 grâce à la Base
                Empreinte de l'ADEME, rapportées à chaque projet.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        Cette méthode garantit une vision détaillée et précise de l'impact
        carbone de nos activités, tout en permettant une approche actionnable
        pour réduire ces émissions.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import gsap from "gsap";
const modal = ref<HTMLDivElement | null>(null);

const props = defineProps<{
  open: boolean;
}>();
defineEmits(["_toggle"]);

//:class="{ block: open, hidden: !open }"
watch(
  () => props.open,
  (isOpen) => {
    console.log(`modal is ${isOpen}`);
    if (isOpen) {
      gsap.to(modal.value, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(modal.value, {
        y: 100,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    }
  }
);
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100%;
  top: var(--header-h);
  bottom: var(--footer-h);
  color: white;
  left: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transform: translate(0px, 100px);
  font-family: var(--font-secondary);
}
.modal.is-open {
  pointer-events: all;
}
.container {
  background-color: var(--color-primary);
  margin: 0 auto;
  height: 100%;
}
.header,
.footer,
.item,
.item h2 {
  border-color: white;
}
.header {
  border-bottom: var(--border);
  display: flex;
  justify-content: flex-end;
}
.close {
  /* padding: 0 var(--space-sm); */
}
.footer {
  border-top: var(--border);
}
.header,
.body,
.footer {
  padding: var(--space-sm);
}
.foreword {
  margin-bottom: var(--space-lg);
}
.item:not(:first-child) {
  border-left: var(--border);
  padding-left: var(--space-sm);
}
.item h2 {
  padding-bottom: 0.5em;
  margin-bottom: 1em;
  border-bottom: var(--border);
  border-color: white;
}
</style>
