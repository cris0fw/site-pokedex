<template>
  <section class="w-full h-min-screen">
    <div class="container">
      <div v-if="pokeStore.isLoading" class="text-center">
        <p>Cargando...</p>
      </div>
      <div
        v-else-if="pokemon"
        class="grid items-center gap-8 grid-col-1 md:grid-cols-2"
      >
        <div class="flex justify-center">
          <img
            :src="pokemon.sprites.other.home.front_default"
            :alt="pokemon.name"
            class="object-cover w-64 h-64 rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h3 class="font-semibold subtitle_encabezado">
            {{ pokemon.name }} (#{{ pokemon.id }})
          </h3>

          <p class="mb-2 text-lg">
            <strong>Tipo:</strong
            >{{ pokemon.types.map((type) => type.type.name).join(" / ") }}
          </p>

          <p class="mb-2 text-lg">
            <strong>HP:</strong>{{ pokemon.stats[0].base_stat }}
          </p>

          <p class="mb-2 text-lg">
            <strong>Experiencia: </strong>{{ pokemon.base_experience }} EXP
          </p>

          <p class="mb-2 text-lg">
            <strong>Altura: </strong>{{ pokemon.height / 10 }} Metros
          </p>

          <p class="mb-2 text-lg">
            <strong>Peso:</strong> {{ pokemon.weight / 10 }} Kg
          </p>
        </div>
      </div>
      <div v-else class="text-center">
        <p>El pokemon no fue encontrado...</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { usePokemonStore } from "../store/pokemon.store";

const route = useRoute();
const pokeStore = usePokemonStore();

const pokemon = computed(() => pokeStore.selectedPokemon);

onMounted(() => {
  const id = Number(route.params.id);
  pokeStore.getPokemonById(id);
});
</script>
