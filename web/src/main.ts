import "./assets/tailwind.css";
import "./assets/main.css";

import { createApp } from "vue";
import { PubsubPlugin } from "vue-pubsub";
import App from "./App.vue";

const app = createApp(App);
app.use(PubsubPlugin());
app.mount("#app");
// createApp(App).mount('#app')
