<template>
  <header
    id="navbar"
    class="fixed top-0 left-0 z-50 w-full bg-black bg-opacity-0 backdrop-blur-m"
  >
    <nav class="container flex items-center justify-between h-16 sm:h-20">
      <div
        class="transition-transform cursor-pointer sm:text-2xl hover:scale-110"
      >
        <img src="/logo.png" alt="logo pokemon" class="mt-2 w-28" />
      </div>

      <!-- Menú de navegación -->
      <div
        id="nav-menu"
        :class="[
          menuOpen ? 'left-0' : 'left-[-100%]',
          'absolute top-0 overflow-hidden min-h-[100vh] w-full bg-black/80 backdrop-blur-sm flex items-center justify-center duration-300 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto',
        ]"
      >
        <ul class="flex flex-col items-center gap-5 lg:flex-row">
          <li>
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="#buscar" class="nav-link">Buscar</RouterLink>
          </li>
          <li>
            <RouterLink to="#about" class="nav-link">Acerca de</RouterLink>
          </li>
          <li>
            <RouterLink to="/verPokemones" class="nav-link"
              >Lista de pokemones</RouterLink
            >
          </li>
        </ul>
      </div>

      <!-- Botón hamburguesa -->
      <div
        @click="toggleMenu()"
        id="hamburguer"
        class="z-50 text-xl text-white cursor-pointer sm:text-3xl lg:hidden"
      >
        <i class="ri-menu-line" v-if="!menuOpen"></i>
        <i class="ri-close-line" v-else></i>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

// Estado para controlar la apertura del menú
const menuOpen = ref(false);

// Función para alternar el estado del menú
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>
