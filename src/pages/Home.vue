<script setup>
import { ref, onMounted } from "vue";
import CardPokemon from "../components/CardPokemon.vue";
import { usePokemonStore } from "../store/pokemon.store";
import { useRouter } from "vue-router";

const currentImg = ref("https://cris0fw.github.io/site-pokedex/imagen1.png");
const bgColor = ref("#DC3336");

const imgSlider = (color, anything) => {
  currentImg.value = anything;
  bgColor.value = color;
};

const router = useRouter();
const pokeStore = usePokemonStore();
const searchQuery = ref("");

const buscarPokemon = async () => {
  if (searchQuery.value.trim() === "") {
    return;
  }

  await pokeStore.getPokemonByName(searchQuery.value);

  if (pokeStore.selectedPokemon) {
    router.push({
      name: "Pokemon",
      params: { id: pokeStore.selectedPokemon.id },
    });
  } else {
    alert("No se encontro el pokemon");
  }
};

onMounted(() => {
  pokeStore.getPokemonesHome();
});
</script>

<template>
  <section
    id="home"
    class="relative w-full min-h-screen overflow-hidden bg-gray-900"
  >
    <div class="container relative z-10">
      <div class="flex flex-col items-center gap-5 lg:flex-row">
        <!-- CONTENIDO PARTE IZQUIERDA -->
        <div class="w-full space-y-5 lg:w-1/2">
          <h3 class="leading-tight text-yellow-400 title font-anto titulo">
            Dex Pokémon Total
          </h3>
          <p class="text-gray-300 font-roboto">
            "Explora a fondo cada rincón del universo Pokémon con Dex Pokémon
            Total. Descubre las evoluciones de tus Pokémon y aprende cómo
            mejorar tu equipo spara ganar las batallas más difíciles. Desde los
            Pokémon legendarios hasta los más comunes, encontrarás información
            detallada sobre sus habilidades, movimiesntos y estrategias.
            ¡Atrápalos, fortalécelos y conviértete en el mejor entrenador en
            cada combate!"
          </p>

          <div class="flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-2">
            <button
              class="px-6 py-3 font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-400"
            >
              ¡Comienza tu Aventura!
            </button>
          </div>
        </div>

        <!-- CONTENIDO IMAGEN PARTE DERECHA -->
        <div class="relative w-full lg:w-1/2 lg:flex lg:justify-center">
          <!-- BLOOB BACKGROUND -->
          <div
            class="absolute top-0 left-0 w-[200px] h-[200px] bg-blue-400 rounded-full filter blur-2xl opacity-60 lg:w-[400px] lg:h-[400px] lg:blur-3xl"
          ></div>
          <img
            class="relative z-10 object-cover transition duration-300 ease-in-out cursor-pointer"
            :src="currentImg"
            :class="{ 'opacity-100': imgVisible }"
            alt="photo of portafolio"
          />
        </div>
      </div>

      <ul class="absolute left-[50%] translate-x-[-50%] flex mt-20 gap-5 z-10">
        <li
          class="transition duration-300 cursor-pointer hover:translate-y-[-15px]"
        >
          <img
            @click="
              imgSlider(
                '#DC3336',
                'https://cris0fw.github.io/site-pokedex/imagen1.png'
              )
            "
            class="w-[80px]"
            src="https://cris0fw.github.io/site-pokedex/imagen1.png"
            alt="imagen pokebola"
          />
        </li>
        <li
          class="transition duration-300 cursor-pointer hover:translate-y-[-15px]"
        >
          <img
            @click="
              imgSlider(
                '#E2AC02',
                'https://cris0fw.github.io/site-pokedex/imagen2.png'
              )
            "
            class="w-[80px]"
            src="https://cris0fw.github.io/site-pokedex/imagen2.png"
            alt="imagen pikachu"
          />
        </li>
        <li
          class="transition duration-300 cursor-pointer hover:translate-y-[-15px]"
        >
          <img
            @click="
              imgSlider(
                '#E97F18',
                'https://cris0fw.github.io/site-pokedex/imagen3.png'
              )
            "
            class="w-[80px]"
            src="https://cris0fw.github.io/site-pokedex/imagen3.png"
            alt="imagen charizar"
          />
        </li>
      </ul>
    </div>
  </section>

  <div class="py-20 bg-gray-800 md:py-28 lg:py-14">
    <div id="buscar" class="container">
      <h2 class="mb-8 font-semibold text-center subtitle">Buscar tu Pokémon</h2>

      <form @submit.prevent="buscarPokemon" class="flex justify-center mt-5">
        <div class="flex w-full max-w-md">
          <!-- Input de búsqueda -->
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Busca tu Pokémon..."
            class="w-full px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-shadow duration-300 ease-in-out rounded-l-full shadow-lg outline-none md:text-base focus:shadow-xl focus:ring-2 focus:ring-blue-500"
          />

          <!-- Botón de búsqueda -->
          <button
            type="submit"
            class="px-6 py-3 font-semibold text-white transition-colors duration-300 ease-in-out bg-blue-500 rounded-r-full shadow-lg hover:bg-blue-600"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>

    <!-- Tarjeta (Card) -->
    <div id="about" class="container py-14">
      <h2 class="mb-8 font-semibold text-center subtitle">Acerca de</h2>

      <div
        class="flex flex-col overflow-hidden bg-gray-900 rounded-lg shadow-lg lg:flex-row"
      >
        <!-- Imagen del Pokémon -->
        <div class="w-full lg:w-1/2">
          <img
            src="/togepy.png"
            alt="Togepy"
            class="object-cover w-full h-full"
          />
        </div>

        <!-- Descripción -->
        <div
          class="flex flex-col justify-center w-full p-6 text-white lg:w-1/2"
        >
          <h3 class="mb-4 text-2xl font-bold">
            Bienvenidos a nuestra página dedicada a los Pokémon de la primera
            generación
          </h3>
          <p class="mb-4 text-sm leading-relaxed md:text-base">
            Un espacio para todos los fans y entrenadores. Aquí podrás explorar
            a fondo los Pokémon originales, aquellos que marcaron el inicio de
            esta increíble saga. Nuestra plataforma te permite buscar y
            descubrir todo sobre tus Pokémon favoritos, incluyendo sus
            estadísticas, evoluciones, movimientos y más.
          </p>
          <p class="mb-4 text-sm leading-relaxed md:text-base">
            Podrás filtrar por tipos como Fuego, Agua, Planta, Eléctrico, entre
            otros, para encontrar el Pokémon perfecto para tu equipo. Además,
            contamos con información detallada sobre las evoluciones de cada
            criatura, desde su forma inicial hasta su versión más poderosa.
          </p>
          <p class="text-sm leading-relaxed md:text-base">
            Sumérgete en este mundo lleno de aventuras y estrategias, donde cada
            Pokémon tiene su propia historia y habilidades únicas. Ya seas un
            entrenador experimentado o alguien que recién comienza su travesía,
            aquí encontrarás todo lo que necesitas para convertirte en el mejor.
            ¡Atrapa a todos y construye tu equipo soñado con nosotros!
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="w-full py-20 md:py-28 lg:py-14">
    <div class="container">
      <h2 class="py-5 mb-2 font-semibold text-center subtitle">
        Algunos pokemones
      </h2>
      <!-- Grilla responsiva -->
      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        <CardPokemon
          v-for="pokemon in pokeStore.pokeInicio"
          :key="pokemon.id"
          :pokemon="pokemon"
        />
      </div>
    </div>
  </div>
</template>
