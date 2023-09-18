<template>
  <div class="boxDetails">
    <v-card v-if="detail" class="cardDetails" >
      <v-container>
        <v-row class="namePokemonDetail">
          <v-col cols="4">
            <div class="pokemonImage">
              <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(detail.id)}.png`"                    
              :alt="detail.name" width="80%" 
             
              />
            </div>
            
          </v-col>

          <v-col cols="8">
            <h1 class="pokemonName">{{detail.name}}</h1>
          
            <em class="pokemonTitle">Base Experience/Experiência</em>
            <em class="pokemonValues">{{ detail.base_experience }} XP</em>
            <br />
            <em class="pokemonTitle">Height/Altura</em>
            <em class="pokemonValues">{{ detail.height * 2.54}} cm</em>
            <br />
            <em class="pokemonTitle">Weight/Peso</em>
            <em class="pokemonValues">{{ (detail.weight * 0.453592 ).toFixed(0)}} Kg</em>

            <br />
            <em class="pokemonValuesTitle">Pokemon Types/Tipo</em>
            <div class="types">
              <button class="type" v-for="tipo in detail.types" :key="tipo.id">{{ tipo.type.name }}</button>
            </div>

            <br />
            <em class="pokemonValuesTitle">Abilities/Habilidades</em>
            <div class="types">
              <button class="ability" v-for="habilidade in detail.abilities" :key="habilidade.id">{{ habilidade.ability.name }}</button>
            </div>

          </v-col>
        </v-row>

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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 90px 10px 10px;
  width: 100%;
  height: 100vh;
  background: rgba(10, 7, 0, 0.562);
}

.cardDetails {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  padding: 50px 0 0;
  position: relative;
  max-width: 510px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0,0,0,.2),
}

.namePokemonDetail {
  display: flex;
  align-items: center;
  text-transform: capitalize
}

.pokemonImage {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -60px;
  width: 120px;
  height: 120px;
  background-color: #ffcb04;
  border-radius: 50%;
  overflow: hidden;
  filter: drop-shadow(0 0.5em 0.5rem rgba(0, 0, 0, 0.5));
}

.pokemonTitle {
  font-weight: bold;
  font-style: normal;
}

.pokemonValues {
  float: right;
  margin-right: 17%;
  font-style: normal;
}

.type {
  margin: 5px;
}

.ability{
  margin: 5px;
}
</style>
