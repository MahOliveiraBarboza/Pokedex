<template>
  <div class="box-details">
    <div v-if="detail" class="card-details" >
      <div class="pokemon-image">
        <img
          :src="detail.image"                    
          :alt="detail.name" width="80%" 
        />
      </div>

      <h1 class="pokemon-name">{{detail.name}}</h1>
      <div class="pokemon-data">
        <div class="property">
          <em class="pokemon-title">Base Experience/Experiência</em>
          <em class="pokemon-values">{{ detail.baseExperience }} XP</em>
          <br />
        </div>
        
        <div class="property">
          <em class="pokemon-title">Height/Altura</em>
          <em class="pokemon-values">{{ detail.height * 2.54}} cm</em>
          <br />
        </div>

        <div class="property">
          <em class="pokemon-title">Weight/Peso</em>
          <em class="pokemon-values">{{ (detail.weight * 0.453592 ).toFixed(0)}} Kg</em>
        </div>
      </div>
            
      <div>
        <br />
        <em class="pokemon-values-title">Pokemon Types/Tipo</em>
        <div class="types">
          <button class="type" v-for="tipo in detail.types" :key="tipo.id">{{ tipo.type.name }}</button>
        </div>
      </div>
            
      <div>
        <br />
        <em class="pokemon-values-title">Abilities/Habilidades</em>
        <div class="types">
          <button class="ability" v-for="habilidade in detail.abilities" :key="habilidade.id">{{ habilidade.ability.name }}</button>
        </div>
      </div>

      <div>
        <button class="close-button" @click="closeDetail">Fechar</button>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  name:'PokemonDetails',

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
.box-details {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color:  rgba(10, 7, 0, 0.589);
}

.card-details {
  background-color: #fff;
  border-radius: 7px;
  height: 600px;
  width: 530px;
  margin-top: 10%;
}

.pokemon-name {
  text-transform: capitalize
}

.pokemon-image {
  margin-top: -13%;
  background: #ffcb37;
  font-size: 10px;
  border-radius: 50%;
  filter: drop-shadow(0 0.5em 0.5rem rgba(0, 0, 0, 0.5));
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 120px;
  height: 120px;
  margin-left: 37%;
}

.pokemon-title {
  font-weight: bold;
  font-style: normal;
}

.pokemon-data {
  margin-top: 5%;
  margin-left: 15%;
  text-align: left;
  
}

.pokemon-values {
  float: right;
  margin-right: 17%;
  font-style: normal;
}

.type {
  background-color: #ff726f;
  min-width: 100px;
  height: 40px;
  border-radius: 25px;
  border: 0;
  margin-right: 40px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  float: right;

}

.ability{
  background-color: white;
  min-width: 150px;
  height: 40px;
  border: 3px solid #11771c; 
  border-radius: 25px;
  color: #11771c;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  margin-right: 20px;
  margin-top: 3px;
  float: left;
}

.types {
  float: left;
  margin-left: 15%;
}

.pokemon-values-title {
  font-style: normal;
  font-size: 35px;
  color: black;
  text-transform: capitalize;
  float: left;
  margin-left: 15%;
  margin-top: 2%;
  margin-bottom: 1%;
  border-bottom: 1px solid #ccc
}

.close-button {
  background-color: #e2978c;
  min-width: 360px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  margin-top: 27px;
  float: left;
  margin-left: 15%;
  color: white;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
}

.close-button:hover{
  background-color: #e67969;
}

/* .property {
  width: 90%;
  max-width: 400px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
} */
</style>
