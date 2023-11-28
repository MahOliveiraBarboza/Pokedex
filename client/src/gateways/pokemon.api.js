import axios from "axios";

const pokemonapi = {
    async getPokemonList(qtd) {
        return await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${qtd}`)
    },

    async getPokemonCard(name){
        return await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    }
}

export default pokemonapi;
