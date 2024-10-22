<template>
  <section class="w-full">
    <div class="container flex flex-col gap-5">
      <div class="flex flex-wrap justify-center gap-3">
        <button @click="verTodos" class="text-black botonFilter verTodos">
          Ver todos
        </button>
        <button
          @click="filtrarPorTipo('normal')"
          class="text-black botonFilter normal"
        >
          Normal
        </button>
        <button
          @click="filtrarPorTipo('fire')"
          class="text-black botonFilter fuego"
        >
          Fuego
        </button>
        <button
          @click="filtrarPorTipo('water')"
          class="text-black botonFilter agua"
        >
          Agua
        </button>
        <button
          @click="filtrarPorTipo('grass')"
          class="text-black botonFilter planta"
        >
          Planta
        </button>
        <button
          @click="filtrarPorTipo('electric')"
          class="text-black botonFilter electrico"
        >
          Electrico
        </button>
        <button
          @click="filtrarPorTipo('ice')"
          class="text-black botonFilter hielo"
        >
          Hielo
        </button>
        <button
          @click="filtrarPorTipo('fighting')"
          class="text-black botonFilter luchador"
        >
          Luchador
        </button>
        <button
          @click="filtrarPorTipo('poison')"
          class="text-black botonFilter veneno"
        >
          Veneno
        </button>
        <button
          @click="filtrarPorTipo('ground')"
          class="text-black botonFilter tierra"
        >
          Tierra
        </button>
        <button
          @click="filtrarPorTipo('flying')"
          class="text-black botonFilter volador"
        >
          Volador
        </button>
        <button
          @click="filtrarPorTipo('psychic')"
          class="text-black botonFilter psiquico"
        >
          Psiquico
        </button>
        <button
          @click="filtrarPorTipo('bug')"
          class="text-black botonFilter bicho"
        >
          Bicho
        </button>
        <button
          @click="filtrarPorTipo('rock')"
          class="text-black botonFilter roca"
        >
          Roca
        </button>
        <button
          @click="filtrarPorTipo('ghost')"
          class="text-black botonFilter fantasma"
        >
          Fantasma
        </button>
        <button
          @click="filtrarPorTipo('dark')"
          class="text-black botonFilter oscuros"
        >
          Oscuro
        </button>
        <button
          @click="filtrarPorTipo('dragon')"
          class="text-black botonFilter dragon"
        >
          Dragon
        </button>
        <button
          @click="filtrarPorTipo('steel')"
          class="text-black botonFilter acero"
        >
          Acero
        </button>
        <button
          @click="filtrarPorTipo('fairy')"
          class="text-black botonFilter hada"
        >
          Hada
        </button>
      </div>

      <div
        class="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
      >
        <CardPokemon
          v-for="pokemon in pokemonStore.pokemones"
          :key="pokemon.id"
          :pokemon="pokemon"
        />
      </div>
      <div class="flex justify-center gap-4 mt-4">
        <button
          v-if="pokemonStore.pokemones.length > 0 && !pokemonStore.isLoading"
          @click="cargarMas"
        >
          Cargar más
        </button>
        <button
          v-if="pokemonStore.totalLoaded > 20 && !pokemonStore.isLoading"
          @click="cargarMenos"
        >
          Cargar menos
        </button>
      </div>

      <div v-if="pokemonStore.isLoading" class="flex justify-center">
        <p>Cargando pokemones...</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePokemonStore } from "../store/pokemon.store";
import CardPokemon from "../components/CardPokemon.vue";

const pokemonStore = usePokemonStore();

//Cargar los pokemones
onMounted(() => {
  pokemonStore.getPokemones();
});

const cargarMas = () => {
  pokemonStore.getPokemones();
};

//Reducir el listado de pokemones
const cargarMenos = () => {
  pokemonStore.pokemones.splice(-20);
  pokemonStore.totalLoaded -= 20;
  pokemonStore.offset -= 20;
};

//Filtrar por tipo
const filtrarPorTipo = (tipo: string) => {
  pokemonStore.filterPokemonesByType(tipo);
};

//Mostrar todos los pokemones sin filtro
const verTodos = () => {
  pokemonStore.pokemones = [];
  pokemonStore.offset = 0;
  pokemonStore.totalLoaded = 0;
  pokemonStore.getPokemones();
};
</script>
