<script setup lang="ts">
import { ref, watch } from "vue";
import gsap from "gsap";
const modal = ref<HTMLDivElement | null>(null);

const props = defineProps<{
  open: boolean;
}>();
defineEmits(["_toggle"]);

watch(
  () => props.open,
  (isOpen) => {
    // console.log(`modal is ${isOpen}`);
    if (isOpen) {
      gsap.to(modal.value, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
    } else {
      gsap.to(modal.value, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }
);
</script>

<template>
  <div ref="modal" class="modal" :class="{ 'is-open': open }">
    <div class="container">
      <div class="header">
        <div class="inner b-b">
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
      </div>
      <div class="body">
        <div class="foreword b-b">
          <div class="grid md:grid-cols-2 gap-md">
            <div class="item">
              <h2 class="b-b">MÉTHODE DE CALCUL</h2>
              <p class="text-lg-alt">
                Voici les principales étapes et hypothèses de notre approche
                simplifiée
              </p>
            </div>
            <div class="item">
              <h2 class="b-b">HYPOTHÈSES DE BASE</h2>
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
              <h2 class="b-b">SALLE OU POSTE DE TRAVAIL</h2>
              <p>Consommation électrique : Équipements utilisés sur site.</p>
              <p>
                Émissions liées aux immobilisations : Prise en compte de
                l'impact des équipements techniques au cours de leur cycle de
                vie.
              </p>
            </div>
            <div class="item b-l">
              <div class="index">02.</div>
              <h2 class="b-b">PERSONNEL</h2>
              <p>
                Transports domicile-travail : Calcul des émissions basées sur
                les déplacements des collaborateurs.
              </p>
              <p>Repas : Émissions associées à un repas moyen.</p>
            </div>
            <div class="item b-l">
              <div class="index">03.</div>
              <h2 class="b-b">FRAIS TECHNIQUES</h2>
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
            <div class="item b-l">
              <div class="index">04.</div>
              <h2 class="b-b">AUTRES</h2>
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
        <div class="inner b-t b-b">
          <p>
            Cette méthode garantit une vision détaillée et précise de l'impact
            carbone de nos activités, tout en permettant une approche
            actionnable pour réduire ces émissions.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
  transform: translate(-100px, 0px);
  font-family: var(--font-secondary);
  &.is-open {
    pointer-events: all;
  }
}

.container {
  background-color: var(--color-primary);
  /* margin: 0 auto; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: var(--container-fw);
  .body {
    flex: 2;
  }
}
p {
  /* font-size: 12px; */
  font-size: var(--text-sm-alt);
  &.text-lg-alt {
    font-size: var(--text-lg-alt);

    /* font-size: 20pt; */
  }
}

.header,
.body,
.footer {
  padding: 0 var(--space-sm);
}

.header {
  .inner {
    display: flex;
    justify-content: flex-end;
    padding: var(--space-sm) 0;
  }
  svg {
    width: 18px;
  }
}

.footer {
  padding-bottom: var(--space-sm);
  .inner {
    padding: var(--space-sm) 0;
  }
}

.foreword {
  padding-bottom: 30px;
  margin-bottom: 30px;
}
.items {
  padding: 0 0 var(--space-sm) 0;
}
.item {
  /* padding-right: var(--space-sm); */

  &:not(:first-child) {
    padding-left: var(--space-sm);
  }
  h2 {
    padding: 0.5em 0;
    margin-bottom: 1em;
    font-family: var(--font-primary);
  }
}
@media screen and (max-width: 1080px) {
  .container {
    max-height: calc(var(--vh) * 100 - calc(var(--header-h) + var(--footer-h)));
    overflow-y: auto;
  }
  .header,
  .body,
  .footer {
    padding: 0 var(--space-md);
  }
  .header {
    .inner {
      border-bottom: none;
    }
  }

  .foreword {
    border-bottom: none;
    padding-bottom: 0;
    .item:last-child {
      margin-bottom: 0;
    }
  }
  .item {
    padding-right: 0 !important;
    padding-left: 0 !important;
    margin-bottom: var(--space-lg);
    border-left: none;
    border-top: var(--border);
    border-color: white;
  }
  .items {
    .item {
      padding-top: 0.5em;
    }
  }
}
</style>
