import Vue from "vue";
import VueRouter from "vue-router";
const Login = () => import("../views/login/login.vue");
const Home = () => import("../views/home/home.vue");
Vue.use(VueRouter);
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "login", component: Login },
  { path: "/home", nema: "home", component: Home }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
