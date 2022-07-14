import {
  createRouter,
  RouteRecordRaw,
  createWebHistory,
  // createWebHashHistory,
} from "vue-router";
import Index from "@/views/Index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/story",
    name: "Story",
    component: () => import("@/views/Story.vue"),
  },
  {
    path: "/animate",
    name: "Animate",
    component: () => import("@/views/Animate.vue"),
  },
  {
    path: "/scenery",
    name: "Scenery",
    component: () => import("@/views/Scenery.vue"),
  },
  {
    path: "/meet",
    name: "Meet",
    component: () => import("@/views/Meet.vue"),
  },
  {
    path: "/keep",
    name: "Keep",
    component: () => import("@/views/Keep.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
