import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import VerPokemones from "../pages/VerPokemones.vue";
import PokemonInfo from "../pages/PokemonInfo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/verPokemones",
    name: "VerPokemones",
    component: VerPokemones,
  },
  {
    path: "/pokemon/:id", //El ID representa ruta dinamica
    name: "Pokemon",
    component: PokemonInfo,
    prop: true, //Para pasar el ID como propiedad al componente
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(async (to, from, next) => {
  next();
});

export default router;
