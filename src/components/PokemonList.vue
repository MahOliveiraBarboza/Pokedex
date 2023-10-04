<template>
    <v-container>
      <pokemonSearch
        v-model="search"  
      />
      <v-row>
        <v-col
          cols="4"
          v-for="pokemon in filteredPokemons"
          v-bind:key="pokemon.name"
        >
          <v-card>
            <v-container>
              <!-- <router-link to="/details"> -->
                <v-row @click="openCardDetails(pokemon)" class="img-pokemons">
                  <img
                  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(pokemon)}.png`"                    
                  :alt="pokemon.name" width="80%" />
                </v-row>
              <!-- </router-link> -->
              <h2 class="pokemon-name">
                {{ getName(pokemon) }}
              </h2>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <pokemonDetails v-if="showDetails" :detail="pokemonDetail" :close-details="closeCardDetails" />
    </v-container>
  </template>
  
  <script>
  import pokemonSearch from './PokemonSearch.vue';
  import pokemonDetails from './PokemonDetails.vue';
  import pokemonapi from '../gateways/pokemon.api.js';
  
  export default {
    name: 'PokemonList',

    components: {
      pokemonSearch,
      pokemonDetails
    },

    data() {
      return {
        pokemons: [],
        search: '',
        // imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
        showDetails: false,
        pokemonDetail: {},
      };
    },

    async mounted() {
      const response = await pokemonapi.getPokemonList('20')
      this.pokemons = response.data.results;
    },

    computed: {
      filteredPokemons() {
        return this.pokemons.filter((item) => {
          return item.name.includes(this.search);
        });
      }
    },
  
    methods: {
      getId(pokemon) {
        return Number(pokemon.url.split("/")[6]);
      },

      getName(pokemon) {
        return pokemon.name
      },

     async openCardDetails(pokemon) {
        const response = await pokemonapi.getPokemonCard(pokemon.name)
        this.pokemonDetail = response.data;
        this.showDetails = true;
      },

      closeCardDetails() {
        this.showDetails = false;
      }
    },
  };

  </script>

  <style>

  .pokemon-name {
    text-align: center;
    text-transform: capitalize
  }
  
  .img-pokemons {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }

  input[type=text] {
    margin-bottom: 2px;
    padding: 15px;
    font-size: 25px;
    border: 0;
    outline: 0;
    width: 100%;
    border-radius: 5px;
    background: #f1f1f1;
    filter: drop-shadow(0 0.5em 0.5rem rgba(0, 0, 0, 0.3));
  }
  </style>