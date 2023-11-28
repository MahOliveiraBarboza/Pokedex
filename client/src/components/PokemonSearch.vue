<template>
  <div>
    <input v-model="localSearch" type="text" label="Pesquisar" placeholder="Digite o Nome do Pokemon desejado">
    <figcaption class="instruction">Insira o nome do Pokemon em letras minúsculas</figcaption>
  </div>
</template>

<script>
export default {
  name: 'PokemonSearch',

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
  margin-top: 0;
  padding-top: 0;
}
</style>