import { createRouter, createWebHistory } from "vue-router";
import ListsView from "../views/ListsTaskView.vue";
import AccView from "../views/AccountView.vue";
import DashView from "../views/DashboardView.vue";
import LoginUserView from "../views/LoginUserView.vue";
import SignInUserView from "../views/SignInUserView.vue";
import CategoryView from "../views/CategoryView.vue";
import { store } from '@/stores/store.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/lists",
      name: "lists",
      component: ListsView,
      meta: { requiresAuth: true }

    },
    {
      path: "/add",
      name: "add",
      component: () => import("../views/AddTaskCategoryView.vue"),
      meta: { requiresAuth: true }

    },
    {
      path: "/dash",
      name: "dashboard",
      component: DashView,
      meta: { requiresAuth: true }

    },
    {
      path: "/account",
      name: "profil",
      component: AccView,
      meta: { requiresAuth: true }

    },
    {
      path: "/",
      name: "login",
      component: LoginUserView,
      meta: { requiresAuth: false }

    },
    {
      path: "/signin",
      name: "signin",
      component: SignInUserView,
      meta: { requiresAuth: false }

    },
    {
      path: "/category/:id",
      name: "category",
      component: CategoryView,
      meta: { requiresAuth: true }

    },
  ],

});




router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !store.IsAuth) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
});




export default router;
