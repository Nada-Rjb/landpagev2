import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: true,
  },
  {
    path: "/product/:productId",
    name: "ProductDetails",
    component: () => import("@/views/ProuductDetails.vue"),
    props: true, // Make sure props are enabled
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
