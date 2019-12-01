import Vue from "vue";
import VueRouter from "vue-router";
const Login = () => import("../views/login/login.vue");
const Home = () => import("../views/home/home.vue");
const OrderInfo = () => import("../views/home/order/orderInfo.vue");
const Pc = () => import("../views/home/homepage/adv/pc.vue");
const Pcc = () => import("../views/home/homepage/zone/pc.vue");
const NavBar = () => import("../views/home/homepage/website/navBar.vue")
const WebsiteNav = () => import("../views/home/homepage/website/websiteNav.vue")
const WebsiteLink = () => import("../views/home/homepage/website/websiteLink.vue")
const Course = () => import("../views/home/course/course/course.vue")
const Audit = () => import("../views/home/course/course/audit.vue")
const Category = () => import("../views/home/course/category/category.vue")
const Lecturer = () => import("../views/home/lecturer/lecturer//lecturer.vue")
const Audits = () => import("../views/home/lecturer/lecturer/audit.vue")
const Profit = () => import("../views/home/lecturer/profit/profit.vue")
const Ext = () => import("../views/home/user/ext.vue")
const User = () => import("../views/home/sys/pms/user.vue")
const Role = () => import("../views/home/sys/pms/role.vue")
const Menu = () => import("../views/home/sys/pms/menu.vue")
const Website = () => import("../views/home/sys/website/website.vue")
const Sys = () => import("../views/home/sys/website/sys.vue")
const Platform = () => import("../views/home/sys/platform/platform.vue")
const Syss = () => import("../views/home/sys/log/sys.vue")
const OrderPay=()=>import("../views/home/sys/log/orderPay.vue")
Vue.use(VueRouter);
const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "login", component: Login },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {
        path: "/order/orderInfo",
        component: OrderInfo,
      },
      {
        path: "/homepage/adv/pc",
        component: Pc
      },
      {
        path: "/homepage/zone/pc",
        component: Pcc
      },
      {
        path: "/homepage/website/navBar",
        component:NavBar
      },
      {
        path: "/homepage/website/websiteNav",
        component: WebsiteNav
      },
      {
        path: "/homepage/website/websiteLink",
        component: WebsiteLink
      },
      {
        path: "/course/course/course",
        component:Course
      },
      {
        path: "/course/course/audit",
        component: Audit
      },
      {
        path: "/course/category/category",
        component:Category
      },
      {
        path: "/lecturer/lecturer/lecturer",
        component:Lecturer
      },
      {
        path: "/lecturer/lecturer/audit",
        component: Audits
      },
      {
        path: "/lecturer/profit/profit",
        component:Profit
      },
      {
        path: "/user/ext",
        component:Ext
      },
      {
        path: "/sys/pms/user",
        component:User
      },
      {
        path: "/sys/pms/role",
        component: Role
      },
      {
        path: "/sys/pms/menu",
        component: Menu
      },
      {
        path: "/sys/website/website",
        component:Website
      },
      {
        path: "/sys/website/sys",
        component:Sys
      },
      {
        path: "/sys/platform/platform",
        component:Platform
      },
      {
        path: "/sys/log/sys",
        component:Syss
      },
      {
        path: "/sys/log/orderPay",
        component:OrderPay
      }
    ]
  },

];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
