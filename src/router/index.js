import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import YapilacakEkle from "../views/YapilacakEkle.vue";
import YapilacakGuncelle from "../views/YapilacakGuncelle.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/yapilacak-ekle",
    name: "YapilacakEkle",
    component: YapilacakEkle,
  },
  {
    path: "/yapilacak-guncelle/:id",
    name: "YapilacakGuncelle",
    component: YapilacakGuncelle,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
