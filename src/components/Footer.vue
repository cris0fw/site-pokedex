<template>
  <footer class="py-8 text-white bg-gray-800">
    <div
      class="container grid grid-cols-1 gap-5 lg:grid-cols-3 lg:justify-items-center"
    >
      <!-- Dex Pokémon Total Section -->
      <div>
        <h3 class="mb-4 text-lg font-bold">Dex Pokémon Total</h3>
        <p class="text-sm">
          Explora el asombroso mundo de Pokémon, desde las generaciones clásicas
          hasta los últimos lanzamientos. Mantente al día con las últimas
          noticias, eventos y batallas Pokémon.
        </p>
      </div>

      <!-- Enlaces rápidos Section -->
      <div>
        <h3 class="mb-4 text-lg font-bold">Enlaces rápidos</h3>
        <ul class="space-y-2">
          <li>
            <RouterLink
              to="/"
              class="transition duration-300 hover:text-[#F8D032] hover:underline"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="#buscar"
              class="transition duration-300 hover:text-[#F8D032] hover:underline"
              >Buscar</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="#about"
              class="transition duration-300 hover:text-[#F8D032] hover:underline"
              >Acerca de</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/verPokemones"
              class="transition duration-300 hover:text-[#F8D032] hover:underline"
            >
              Lista de pokemones
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Sígueme en Section -->
      <div>
        <h3 class="mb-4 text-lg font-bold">Sígueme en</h3>
        <div class="flex space-x-4">
          <a
            class="border-solid border-[2px] border-white py-1 px-2 text-[20px] rounded-full transition duration-300 hover:bg-[#111827] hover:border-[#F8D032] hover:text-[#F8D032]"
            href="https://www.instagram.com/error._code24/"
            target="_blank"
          >
            <i class="ri-instagram-line"></i>
          </a>
          <a
            class="border-solid border-[2px] border-white py-1 px-2 text-[20px] rounded-full transition duration-300 hover:bg-[#111827] hover:border-[#F8D032] hover:text-[#F8D032]"
            href="https://github.com/cris0fw"
            target="_blank"
          >
            <i class="ri-github-line"></i>
          </a>
          <a
            class="border-solid border-[2px] border-white py-1 px-2 text-[20px] rounded-full transition duration-300 hover:bg-[#111827] hover:border-[#F8D032] hover:text-[#F8D032]"
            href="https://www.linkedin.com/in/cristian-ludue%C3%B1a-92288423b/"
            target="_blank"
          >
            <i class="ri-linkedin-fill"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="py-4 mt-6 text-center bg-gray-900">
      &copy; 2024 Diseñado por | Cristian Ludueña
    </div>
  </footer>
</template>
