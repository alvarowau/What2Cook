import RecetasFeed from "@/views/RecetasFeed.vue";
import { createRouter, createWebHistory } from "vue-router";



const routes = [
  {
    path: "/",
    component: RecetasFeed,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
