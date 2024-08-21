import { createApp } from "vue";
import App from "./app.vue";
import { router } from "./router";
import { createPinia } from "pinia";

import "modern-normalize/modern-normalize.css";
import "./style.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
