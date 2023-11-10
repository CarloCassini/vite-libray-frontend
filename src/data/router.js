import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../pages/AppHome.vue";
import Detail from "../pages/Detail.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: AppHome,
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
  ],
});
export { router };
