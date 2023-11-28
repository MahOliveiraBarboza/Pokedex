<template>
  <v-app>
    <div class="app">
      <PokemonApp />
      <SearchBar />
    </div>
  </v-app>
</template>

<script>
import SearchBar from './components/PokemonList.vue';
import PokemonApp from './components/PokemonApp.vue'

export default {
  name: 'App',

  components: {
    SearchBar,
    PokemonApp
  },

  data() {
    return {
      pokemons: [],
      search: "",
    };
  },
};

</script>

<style>
#app {
  background: radial-gradient(#ffbf0b, #e20000) no-repeat center center fixed !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-backgroud-size: cover;
  background-size: cover !important;
  background-position: center;
  min-height: 100vh;
  /* min-width: 50%; */
  justify-content: space-around;
}

.app {
  max-width: 50%;
  float: left;
  margin-left: 23%;
}
</style>
