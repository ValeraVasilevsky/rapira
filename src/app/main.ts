import { createApp } from "vue";
import App from "./app.vue";
import { router } from "./router";

import 'modern-normalize/modern-normalize.css';
import "./style.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
