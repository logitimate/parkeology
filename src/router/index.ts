import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/attempt",
    name: "attempt",
    component: () =>
      import(/* webpackChunkName: "attempt" */ "../views/Attempt.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
