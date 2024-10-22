import { defineStore } from "pinia";
import { ref } from "vue";
import { api } from "../config/axios";
import { ResultsUrl, PokemonType } from "../types/index";

export const usePokemonStore = defineStore("usePokeStore", () => {
  const pokeInicio = ref<PokemonType[]>([]);
  const pokemones = ref<PokemonType[]>([]);
  const selectedPokemon = ref<PokemonType | null>(null);
  const isLoading = ref(false);
  const offset = ref(0);
  const limit = ref(20);
  const totalLoaded = ref(0);

  //Traerme solo 4 pokemons ramdons para pintarlos en el home
  const getPokemonesHome = async () => {
    try {
      const responseUrl = await api.get(
        `pokemon?limit=4&offset=${Math.floor(Math.random() * 1200) + 1}`
      );
      const responsePokemon = responseUrl.data.results;

      const pokemonDetailsPromises = responsePokemon.map(
        async (pokemon: ResultsUrl) => {
          const pokemonDetails = await api.get(pokemon.url);
          return pokemonDetails.data;
        }
      );

      const allPokemons = await Promise.all(pokemonDetailsPromises);
      pokeInicio.value = allPokemons;
    } catch (error) {
      console.log("Error al obtener los pokemones", error);
    }
  };

  //Buscar un pokemon por su ID
  const getPokemonById = async (id: number) => {
    try {
      isLoading.value = true;
      selectedPokemon.value = null;

      const response = await api.get(`pokemon/${id}`);
      selectedPokemon.value = response.data;
      console.log(JSON.parse(JSON.stringify(selectedPokemon.value)));
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  //Buscar un pokemon por su nombre
  const getPokemonByName = async (name: string) => {
    try {
      isLoading.value = true;
      selectedPokemon.value = null;

      const response = await api.get(`pokemon/${name.toLowerCase()}`);
      selectedPokemon.value = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //Obtener los primeros pokemones para la pagina VerPokemones
  const getPokemones = async () => {
    try {
      isLoading.value = true;

      const responseUrl = await api.get(
        `pokemon?limit=${limit.value}&offset=${offset.value}`
      );
      const responsePokemon = responseUrl.data.results;

      const pokemonDetailsPromises = responsePokemon.map(
        async (pokemon: ResultsUrl) => {
          const pokemonDetails = await api.get(pokemon.url);
          return pokemonDetails.data;
        }
      );

      const allPokemons = await Promise.all(pokemonDetailsPromises);
      pokemones.value = [...pokemones.value, ...allPokemons];
      totalLoaded.value += allPokemons.length;
      offset.value += limit.value;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  // Filtrar por tipo los pokemones
  const filterPokemonesByType = async (type: string) => {
    try {
      isLoading.value = true;

      const response = await api.get(`type/${type}`);
      const filteredPokemons = response.data.pokemon.map((p: any) => p.pokemon);

      const pokemonDetailsPromises = filteredPokemons.map(
        async (pokemon: ResultsUrl) => {
          const pokemonDetails = await api.get(pokemon.url);
          return pokemonDetails.data;
        }
      );

      pokemones.value = await Promise.all(pokemonDetailsPromises);
      totalLoaded.value = pokemones.value.length;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    pokemones,
    pokeInicio,
    selectedPokemon,
    getPokemonesHome,
    getPokemones,
    filterPokemonesByType,
    getPokemonById,
    getPokemonByName,
    isLoading,
    totalLoaded,
    offset,
  };
});
