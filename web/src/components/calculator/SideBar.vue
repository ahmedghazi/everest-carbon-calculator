<script setup lang="ts">
import Counter from "./Counter.vue";
import EquivalenceExample from "./EquivalenceExample.vue";
import Units from "./Units.vue";
import iconExample from "../../assets/img/icon-train.svg";
</script>

<template>
  <aside>
    <div class="box">
      <div class="header">
        L'EMPREINTE CARBONE TOTALE DE VOTRE PROJET S'ÉLÈVE À :
      </div>
      <div class="body">
        <Counter :number="234.1" />
      </div>
      <div class="footer">
        <Units layout="row" />
      </div>
    </div>
    <div class="box">
      <EquivalenceExample
        title="EQUIVALENCE<br/>COMPARATIF ENERGETIQUE"
        :value="234.1"
        :exampleIcon="iconExample"
        :exampleNumber="15803"
        exampleDetail="TRAJETS <br/>PARIS → MARSEILLE" />
    </div>
  </aside>
</template>

<style scoped>
aside {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-lg);
  max-width: 220px;
}

.header,
.body,
.footer {
  padding: calc(var(--space-sm) * 0.7) var(--space-sm);
}
.header {
  border-bottom: var(--border);
}
.footer {
  border-top: var(--border);
}
.body .counter-value {
  font-size: var(--text-xl);
  text-align: center;
  /* background-color: red; */
  /* display: inline-block; */
  /* width: 3em; */
}
.footer .units {
  font-size: var(--text-md-alt);
  line-height: 1;
}
</style>
