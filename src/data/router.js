import { createRouter, createWebHistory } from "vue-router";
import AppHome from "../pages/AppHome.vue";
import Detail from "../pages/Detail.vue";
import List from "../pages/List.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: AppHome,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail,
    },
    {
      path: "/list",
      name: "list",
      component: List,
    },
  ],
});
export { router };
