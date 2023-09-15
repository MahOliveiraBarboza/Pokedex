<template>
    <v-container>
      <pokemonSearch
        v-model="search"  
      />
      <v-row>
        <v-col
          cols="3"
          v-for="pokemon in filteredPokemons"
          v-bind:key="pokemon.name"
        >
          <v-card @click="showDetails">
            <v-container>
              <!-- <router-link to="/details"> -->
                <v-row class="img-pokemons">
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
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import pokemonSearch from './pokemonSearch.vue';
  
  export default {
    name: 'pokemonList',

    components: {
      pokemonSearch,
    },

    data() {
      return {
        pokemons: [],
        search: '',
      };
    },

    mounted() {
      axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then((response) => {
          this.pokemons = response.data.results;
        });
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
        return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      },

      showDetails() {
        this.$emit('imgeClicada');
      }
    },
  };

  </script>

  <style>
  .pokemon-name {
    text-align: center;
  }
  
  .img-pokemons {
    display: flex;
    justify-content: center;
  }

  input[type=text] {
    margin-bottom: 30px;
    padding: 15px;
    font-size: 25px;
    border: 0;
    outline: 0;
    width: 95%;
    border-radius: 5px;
    background: #f1f1f1;
    filter: drop-shadow(0 0.5em 0.5rem rgba(0, 0, 0, 0.3));
  }
  </style>