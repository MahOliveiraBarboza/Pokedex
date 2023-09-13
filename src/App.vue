<template>
  <v-app>
    <!-- <router-view></router-view> o erro está qui. Gera duplicação da tela -->
    <v-container>
      <v-container>
        <input v-model="search" type="text" label="Pesquisar" placeholder="Digite o Nome ou Id do Pokemon desejado">

        <v-row>
          <v-col cols="3" v-for="pokemon in filtered_pokemons" v-bind:key="pokemon.name"> 

            <v-card>
              <v-container>
                <router-link to="/details"> 
                  <v-row class="img-pokemons">
                    <img 
                      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${get_id(pokemon)}.png`" 
                      :alt="pokemon.name"
                      width="80%"
                    />
                  </v-row>
                </router-link>
                <h2 class="pokemon-name"> {{ get_name(pokemon) }} </h2>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',

  components: {},

  data() {
    return {
      pokemons: [],
      search: "",
    }
  },

  mounted () {
    axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then((response) => {
      this.pokemons = response.data.results;
    })
  },

  methods: {
    get_id(pokemon) {
      return Number(pokemon.url.split("/")[6]);
    },

    get_name(pokemon) {
      return pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    },
    // goToPage(page) {
    //   this.$router.push(page);
    // },
  }, 

  computed: {
    filtered_pokemons() {
      return this.pokemons.filter((item) => {
        return item.name.includes(this.search)
      })
    }
  }
};
</script>

<style>
#app {
  background: radial-gradient(
    #ffbf0b, #e20000
    )
    no-repeat center center fixed !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-backgroud-size: cover;
  background-size: cover !important;
  background-position: center;
  min-height: 100vh;
  justify-content: space-around;
}

.pokemon-name{
  text-align: center;
}

.img-pokemons{
  display: flex;
  justify-content: center;
}

input[type=text] {
  margin-bottom: 30px;
  padding: 15px;
  font-size: 25px;
  border: 0;
  outline: 0; 
  float: center;
  width: 95%;
  border-radius: 5px;
  background: #f1f1f1;
  filter: drop-shadow(0 0.5em 0.5rem rgba(0,0,0,0.3));
}
</style>
