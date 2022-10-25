import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const HomeView = () => import("../views/HomeView.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "HomeView",
    component: HomeView,
  },

  {
    path: "/:catchAll(.*)",
    redirect: { name: "HomeView" },
  },
];

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});
