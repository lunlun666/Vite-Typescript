import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import MainLayout from '../components/MainLayout'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
