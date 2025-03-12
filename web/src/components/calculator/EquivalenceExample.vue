<script setup lang="ts">
import { usePubsub } from "vue-pubsub";
import Units from "./Units.vue";
import Counter from "./Counter.vue";
import iconRefresh from "../../assets/img/icon-refresh.svg";

const pubsub = usePubsub();

const props = defineProps<{
  title: string;
  value: number;
  exampleIcon: string;
  exampleNumber: number;
  exampleDetail: string;
}>();

function refresh() {
  pubsub.to("EQUIVALENCE_EXAMPLE", "REFRESH");
}
</script>

<template>
  <div class="header" v-html="title"></div>
  <div class="body">
    <div>
      <Counter :number="234.1" />
      <div class="units-wrapper">
        <Units layout="col" />
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="equivalence">
      <div class="grid grid-cols-3">
        <div class="icon">
          <img :src="exampleIcon" width="41" alt="icon" />
        </div>
        <div class="infos col-span-2">
          <Counter :number="exampleNumber" />
          <div class="detail" v-html="exampleDetail"></div>
        </div>
      </div>
      <button class="refresh" @click="refresh">
        <img :src="iconRefresh" width="15" alt="icon refresg" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.header,
.body {
  padding: var(--space-sm);
}
.header,
.body {
  border-bottom: var(--border);
}
.counter-value {
  font-size: var(--text-lg);
}
.body .counter-value {
  text-align: center;
}
.icon {
  border-right: var(--border);
  display: grid;
  align-items: center;
  justify-content: center;
}
.infos {
  padding: var(--space-sm);
}
.infos .counter-value {
  margin-bottom: 0.2em;
}
.detail {
  font-size: 10pt;
  line-height: 1;
}
.units-wrapper {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--text-xs);
}

.refresh {
  position: absolute;
  right: 0;
  top: 0;
  padding: var(--space-sm);
}
</style>
