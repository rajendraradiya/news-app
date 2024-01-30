import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import vuetify from "@/plugin/vuetify";
import router from "@/router";
import apis from "@/service";
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia = createPinia()
app.provide("api", apis);
app.use(pinia);
app.use(router);
app.use(vuetify);
app.mount("#app");
