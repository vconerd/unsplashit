import Vue from "vue";
import VueRouter from "vue-router";
import buscar from "../views/Buscar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Buscar",
    component: buscar
  },
  {
    path: "/selecciones",
    name: "Selecciones",
    component: () =>
      import(/* webpackChunkName: "modulo2" */ "../views/Selecciones.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
