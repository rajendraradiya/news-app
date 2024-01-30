import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import vuetify from "@/plugin/vuetify";
import router from "@/router";
import apis from "@/service";

const app = createApp(App);
app.provide("api", apis);
app.use(router);
app.use(vuetify);
app.mount("#app");
