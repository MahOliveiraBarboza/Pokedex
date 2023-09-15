<template>
  <div>
    <v-card v-model="showDetails" class="boxDetails">
    <pokemonList @imgeClicada="mostrarMensagem" />
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum dolores possimus consectetur, magni doloremque quam veniam repellat officia labore officiis sunt quas facilis voluptas perferendis voluptate sit! Natus, delectus officia!''</p>

      </div>
    </v-card>
  </div>
  </template>
    
  <script>
import pokemonList from './PokemonList.vue'

export default {
  components: {
    pokemonList,
  },

  data() {
    return {
      showDetails: false
    }
  },

  methods: {
    mostrarMensagem() {
      console.log("Imagem clicada");
    },
  },
}
  </script>


<style>
.boxDetails {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
</style>

