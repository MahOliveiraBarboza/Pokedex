<template>
  <v-app>
    <SearchBar />
  </v-app>
</template>

<script>
import SearchBar from './components/PokemonList.vue';

export default {
  name: 'App',

  components: {
    SearchBar,

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
  justify-content: space-around;
}
</style>
