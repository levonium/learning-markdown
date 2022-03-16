import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import ShowView from "../views/ShowView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/practice",
      name: "practice",
      component: () => import("../views/PracticeView.vue"),
    },
    {
      path: "/:slug",
      name: "show",
      // component: ShowView,
      component: () => import("../views/ShowView.vue"),
    },
  ],
});

export default router;
