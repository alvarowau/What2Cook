import RecetasDetailt from "@/views/RecetasDetailt.vue";
import RecetasFeed from "@/views/RecetasFeed.vue";
import { createRouter, createWebHistory } from "vue-router";



const routes = [
  {
    path: "/",
    component: RecetasFeed,
  },
  {
    path: "/recetas/:id",
    component: RecetasDetailt
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
