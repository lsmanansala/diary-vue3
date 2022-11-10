import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    name: "Landing",
    path: "/",
    component: () => import("./pages/Landing.vue"),
  },
  {
    name: "Me",
    path: "/me",
    component: () => import("./pages/Me.vue"),
  },
  {
    name: "Diary",
    path: "/me/diaries/:diary_id",
    component: () => import("./pages/Diary.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
