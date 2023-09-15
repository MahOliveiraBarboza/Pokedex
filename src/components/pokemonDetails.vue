<template>
  <div class="boxDetails">
    <v-card >
      <v-container>
        <p>
          {{ detail.abilities[0].ability.name }}
        </p>

        <button @click="closeDetail">Fechar</button>
      </v-container>
    </v-card>
  </div>
</template>
    
<script>
export default {
  name:'pokemonDetails',

  props: {
    detail: {
      type: Object,
      required: true,
    },
    closeDetails: {
      type: Function,
      required: true,
    },
  },

  methods: {
    closeDetail() {
      this.closeDetails();
    }
  }

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

