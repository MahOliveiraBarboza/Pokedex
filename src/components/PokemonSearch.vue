<template>
  <v-container>
    <input v-model="localSearch" type="text" label="Pesquisar" placeholder="Digite o Nome ou Id do Pokemon desejado">
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