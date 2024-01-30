import { createRouter, createWebHashHistory } from "vue-router";

import newsPages from "@/pages/news/newsList.vue";

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [{ path: "/", component: newsPages }];

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
