import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Login",
        component: () => import("../views/login.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
