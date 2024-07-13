import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome.vue";
import Quizs from "../views/Quizs.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Welcome,
  },
  {
    path: "/quizs",
    name: "quizs",
    component: Quizs,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
