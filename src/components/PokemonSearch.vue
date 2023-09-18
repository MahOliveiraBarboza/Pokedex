<template>
  <v-container>
    <input v-model="localSearch" type="text" label="Pesquisar" placeholder="Digite o Nome do Pokemon desejado">
    <p class="instruction">Insira o nome do Pokemon em letras minúsculas</p>
  </v-container>
</template>

<script>
export default {
  name: 'pokemonSearch',

  data() {
    return {
      localSearch: '',
    };
  },

  watch: {
    localSearch(newSearch) {
      this.$emit('input', newSearch);
    },
  },
};
</script>

<style>
.instruction {
  color: white;
  font-size: 25px;
  margin-bottom: 1em;
  padding-top: 0px;
}
</style>