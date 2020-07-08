import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/home/Home");
const Category = () => import("../views/category/Category");
const Profile = () => import("../views/profile/Profile");
const Cart = () => import("../views/cart/Cart");

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}; //解决路由重复的问题

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
