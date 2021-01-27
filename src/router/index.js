import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: ()=>import(`@/project/${process.env.VUE_APP_PROJECT}/index/index`)
  },
  {
    path: "/login",
    name: "Login",
    component: ()=>import(`@/project/${process.env.VUE_APP_PROJECT}/account/Login`)
  },
  {
    path: "/register",
    name: "Register",
    component: ()=>import(`@/project/${process.env.VUE_APP_PROJECT}/account/Register`)
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
