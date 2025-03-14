<script setup lang="ts">
import { usePubsub } from "vue-pubsub";
import Units from "./Units.vue";
import Counter from "./Counter.vue";
import iconRefresh from "../../assets/img/icon-refresh.svg";
import { onMounted } from "vue";
import gsap from "gsap";

const pubsub = usePubsub();

defineProps<{
  title: string;
  value: number;
  exampleIcon: string;
  exampleNumber: number;
  exampleDetail: string;
}>();

function refresh() {
  pubsub.to("EQUIVALENCE_EXAMPLE", "REFRESH");
}

onMounted(() => {
  const tl = gsap.timeline({ delay: 3 });
  tl.from(".equivalence .counter", { opacity: 0, x: -10, duration: 0.4 });
  tl.from(".equivalence img.icon", { opacity: 0, x: -10, duration: 0.4 });
  tl.from(".equivalence .detail", { opacity: 0, x: -10, duration: 0.4 });
});
</script>

<template>
  <div class="header" v-html="title"></div>
  <div class="body">
    <div>
      <Counter :number="234.1" :delay="1" />
      <div class="units-wrapper">
        <Units layout="col" />
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="equivalence">
      <div class="grid grid-cols-3">
        <div class="icon">
          <img :src="exampleIcon" width="41" alt="icon" class="icon" />
        </div>
        <div class="infos col-span-2">
          <Counter :number="exampleNumber" :delay="2" />
          <div class="detail" v-html="exampleDetail"></div>
        </div>
      </div>
      <button class="refresh" @click="refresh">
        <img :src="iconRefresh" width="15" alt="icon refresg" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header,
.body {
  /* padding: var(--space-sm); */
  padding: calc(var(--space-sm) * 0.7) var(--space-sm);
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
div.icon {
  border-right: var(--border);
  display: grid;
  align-items: center;
  justify-content: center;
}
.infos {
  padding: var(--space-sm);
  .counter-value {
    margin-bottom: 0.2em;
  }
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
