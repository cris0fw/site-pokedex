<template>
  <div
    @click="verDetailsPokemon"
    class="overflow-hidden bg-gray-900 rounded-lg shadow-lg"
  >
    <img
      :src="pokemon.sprites.other.home.front_default"
      :alt="pokemon.name"
      class="object-cover w-full h-48"
    />
    <div class="p-6">
      <h2 class="text-2xl font-bold text-white">{{ pokemon.name }}</h2>
      <span class="text-gray-400">#{{ pokemon.id }}</span>
      <div class="flex gap-2 mb-4 text-sm">
        <span
          v-for="(type, index) in pokemon.types"
          :key="index"
          :class="`px-2 py-1 rounded ${getPokemonTypeClass(type.type.name)}`"
          class="text-white"
        >
          {{ type.type.name }}
        </span>
      </div>
      <div class="flex items-center justify-between mb-2">
        <span class="text-gray-400">HP:</span>
        <span class="font-semibold text-white">{{
          pokemon.stats[0].base_stat
        }}</span>
      </div>
      <div class="flex items-center justify-between mb-2">
        <span class="text-gray-400">Experiencia:</span>
        <span class="font-semibold text-white"
          >{{ pokemon.base_experience }} EXP</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { PokemonType } from "../types/index";

//Colocando el router
import { useRouter } from "vue-router";

const props = defineProps<{ pokemon: PokemonType }>();

const router = useRouter();

const typeColorClassMap: Record<string, string> = {
  normal: "normal",
  fire: "fuego",
  water: "agua",
  grass: "planta",
  electric: "electrico",
  ice: "hielo",
  fighting: "luchador",
  poison: "veneno",
  ground: "tierra",
  flying: "volador",
  psychic: "psiquico",
  bug: "bicho",
  rock: "roca",
  ghost: "fantasma",
  dark: "oscuros",
  dragon: "dragon",
  steel: "acero",
  fairy: "hada",
};

const getPokemonTypeClass = (typeName: string) => {
  return typeColorClassMap[typeName] || "verTodos";
};

//Funcion para navegar a la pagina de detalles del pokemon
const verDetailsPokemon = () => {
  router.push({ name: "Pokemon", params: { id: props.pokemon.id } });
};
</script>
